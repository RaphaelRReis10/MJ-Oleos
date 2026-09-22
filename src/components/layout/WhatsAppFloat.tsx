"use client";

import { WhatsAppIcon } from "@/components/ui/Icons";
import { trackEvent } from "@/lib/analytics";
import { whatsappLink } from "@/lib/site";

/**
 * Botão flutuante de WhatsApp (PRD §39).
 *
 * Verde da marca para reconhecimento imediato, presente em todas as seções.
 *
 * A entrada é 100% CSS (`whatsapp-in`, com atraso curto para não competir
 * com o CTA do Hero). Nada aqui depende de hidratação ou de listener de
 * scroll: o canal de conversão principal do site tem que aparecer mesmo se
 * o JavaScript falhar. O pulse e a animação de entrada são neutralizados
 * por prefers-reduced-motion na regra global do globals.css.
 */
export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a MJ Óleos no WhatsApp"
      onClick={() => trackEvent("whatsapp_click", { location: "floating_whatsapp" })}
      className="group fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 animate-[whatsapp-in_500ms_var(--ease-soft)_700ms_both] items-center justify-center rounded-full bg-whatsapp text-white shadow-[0_10px_30px_rgba(37,211,102,0.42)] transition-[transform,box-shadow] duration-300 ease-[var(--ease-soft)] hover:scale-105 hover:shadow-[0_14px_38px_rgba(37,211,102,0.55)] lg:bottom-7 lg:right-7 lg:h-[60px] lg:w-[60px]"
    >
      {/* Pulse discreto (PRD §39) */}
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-full bg-whatsapp animate-[pulse-ring_2.4s_var(--ease-soft)_infinite]"
      />

      <WhatsAppIcon className="relative h-7 w-7 lg:h-8 lg:w-8" />

      {/* Tooltip no hover, apenas em desktop */}
      <span className="pointer-events-none absolute right-[calc(100%+12px)] hidden whitespace-nowrap rounded-[var(--radius-btn)] bg-primary-dark px-3.5 py-2 text-sm font-medium text-white opacity-0 shadow-[var(--shadow-card)] transition-opacity duration-300 group-hover:opacity-100 lg:block">
        Fale conosco
      </span>
    </a>
  );
}
