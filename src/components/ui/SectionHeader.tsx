import type { ReactNode } from "react";
import Reveal from "./Reveal";

/**
 * Cabeçalho de seção padronizado (PRD §72).
 * `as` permite manter a hierarquia correta de headings — o H1 é exclusivo
 * do Hero, todas as seções usam H2 (PRD §44).
 */
export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  as: Tag = "h2",
  align = "left",
  tone = "dark",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  as?: "h2" | "h3";
  align?: "left" | "center";
  /** dark: texto azul sobre fundo claro. light: texto branco sobre fundo azul. */
  tone?: "dark" | "light";
  className?: string;
}) {
  const centered = align === "center";

  return (
    <Reveal
      className={`${centered ? "mx-auto max-w-3xl text-center" : "max-w-2xl"} ${className}`}
    >
      {eyebrow ? (
        <span
          className={`eyebrow mb-4 ${tone === "light" ? "text-white/70" : "text-primary/70"}`}
        >
          {eyebrow}
        </span>
      ) : null}

      <Tag
        className={`text-[clamp(1.9rem,4.4vw,3rem)] ${tone === "light" ? "text-white" : "text-primary"}`}
      >
        {title}
      </Tag>

      {subtitle ? (
        <p
          className={`mt-5 text-[1.0625rem] leading-relaxed ${tone === "light" ? "text-white/75" : "text-gray"}`}
        >
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}
