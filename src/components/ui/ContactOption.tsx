"use client";

import type { ReactNode } from "react";
import { ArrowRightIcon } from "@/components/ui/Icons";
import { trackEvent, type AnalyticsEvent } from "@/lib/analytics";

/**
 * Linha de contato clicável: um assunto que abre direto a conversa.
 *
 * Existe como componente próprio para que a seção de contato continue sendo
 * server component — só este trecho, que precisa do onClick do analytics,
 * viaja para o cliente.
 */
export default function ContactOption({
  href,
  icon,
  label,
  description,
  event,
  eventLabel,
}: {
  href: string;
  icon: ReactNode;
  label: string;
  description?: string;
  event: AnalyticsEvent;
  /** Identifica qual assunto converteu mais (PRD §65). */
  eventLabel: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent(event, { location: eventLabel })}
      className="group flex min-h-14 items-center gap-4 rounded-[var(--radius-btn)] border border-line bg-white px-4 py-3 transition-[border-color,box-shadow,transform] duration-300 ease-[var(--ease-soft)] hover:-translate-y-0.5 hover:border-accent hover:shadow-[var(--shadow-soft)]"
    >
      <span
        aria-hidden="true"
        className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-light text-primary transition-colors duration-300 group-hover:bg-accent/10 group-hover:text-accent-dark"
      >
        {icon}
      </span>

      <span className="min-w-0 flex-1">
        <span className="block font-display text-[0.9375rem] font-semibold uppercase tracking-[0.08em] text-primary">
          {label}
        </span>
        {description ? (
          <span className="mt-0.5 block text-sm leading-snug text-gray">
            {description}
          </span>
        ) : null}
      </span>

      <ArrowRightIcon
        aria-hidden="true"
        className="h-[18px] w-[18px] shrink-0 text-primary/30 transition-[color,transform] duration-300 group-hover:translate-x-0.5 group-hover:text-accent"
      />
    </a>
  );
}
