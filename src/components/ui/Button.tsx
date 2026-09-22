"use client";

import type { ReactNode } from "react";
import { trackEvent, type AnalyticsEvent } from "@/lib/analytics";

/**
 * Sistema de botões (PRD §75).
 * - accent: CTA principal, laranja. É a única cor de ação do site.
 * - solid: azul institucional, para ações sobre fundo claro.
 * - outlineLight / outlineDark: secundário, herda a cor do fundo em que está.
 */
export type ButtonVariant = "accent" | "solid" | "outlineLight" | "outlineDark";
export type ButtonSize = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2.5 font-display font-semibold uppercase tracking-[0.08em] rounded-[var(--radius-btn)] " +
  "transition-[transform,background-color,border-color,box-shadow,color] duration-300 ease-[var(--ease-soft)] " +
  "hover:-translate-y-0.5 active:translate-y-0 disabled:pointer-events-none disabled:opacity-60 select-none";

const variants: Record<ButtonVariant, string> = {
  /* Preenchimento em --color-accent-cta para o texto branco passar no AA. */
  accent:
    "bg-accent-cta text-white shadow-[0_6px_18px_rgba(195,63,34,0.32)] hover:bg-accent-dark hover:shadow-[0_12px_28px_rgba(195,63,34,0.42)]",
  solid:
    "bg-primary text-white shadow-[0_6px_18px_rgba(18,59,99,0.24)] hover:bg-primary-dark hover:shadow-[0_12px_28px_rgba(18,59,99,0.32)]",
  outlineLight:
    "border border-white/60 text-white hover:border-white hover:bg-white/10",
  outlineDark:
    "border border-primary/25 text-primary hover:border-accent hover:text-accent hover:bg-accent/5",
};

const sizes: Record<ButtonSize, string> = {
  /* Altura mínima de 48px garante área de toque adequada (PRD §61). */
  md: "min-h-12 px-6 text-sm",
  lg: "min-h-14 px-8 text-base",
};

interface CommonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  icon?: ReactNode;
}

interface LinkProps extends CommonProps {
  href: string;
  /** Links externos recebem target/rel automaticamente. */
  external?: boolean;
  /** Evento disparado no clique (PRD §64). */
  event?: AnalyticsEvent;
  /** Identificação do CTA para saber qual converte mais (PRD §65). */
  eventLabel?: string;
}

export function ButtonLink({
  children,
  href,
  external = false,
  variant = "accent",
  size = "md",
  className = "",
  icon,
  event,
  eventLabel,
}: LinkProps) {
  return (
    <a
      href={href}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      onClick={() => {
        if (event) trackEvent(event, eventLabel ? { location: eventLabel } : {});
      }}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {icon}
      {children}
    </a>
  );
}

interface ActionProps extends CommonProps {
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
}

export function Button({
  children,
  type = "button",
  onClick,
  disabled = false,
  variant = "accent",
  size = "md",
  className = "",
  icon,
}: ActionProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {icon}
      {children}
    </button>
  );
}
