"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

/**
 * Scroll reveal por IntersectionObserver (PRD §55).
 *
 * O CSS só aplica o estado oculto quando <html> tem a classe `js`, então
 * o conteúdo permanece visível se o JavaScript não executar. A animação
 * roda uma única vez e o observer é desconectado em seguida.
 *
 * `eager` desliga o estado oculto. Use em qualquer bloco que possa aparecer
 * na primeira dobra: esconder esse conteúdo até a hidratação adia a pintura
 * e piora o LCP, que o PRD §57 pede para manter baixo.
 */
export default function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  eager = false,
  className = "",
}: {
  children: ReactNode;
  as?: ElementType;
  /** Atraso em ms para escalonar itens de uma mesma grade. */
  delay?: number;
  /** Renderiza já visível, sem animação de entrada. Para conteúdo da 1ª dobra. */
  eager?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (eager) return;
    const node = ref.current;
    if (!node) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReduced || !("IntersectionObserver" in window)) {
      node.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [eager]);

  return (
    <Tag
      ref={ref}
      {...(eager ? {} : { "data-reveal": "" })}
      style={
        !eager && delay
          ? { ["--reveal-delay" as string]: `${delay}ms` }
          : undefined
      }
      className={className}
    >
      {children}
    </Tag>
  );
}
