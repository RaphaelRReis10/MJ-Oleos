/**
 * Camada fina de eventos (PRD §64–§66).
 *
 * O site funciona sem GA4 e sem GTM configurados: quando nenhuma das duas
 * variáveis existe, `trackEvent` simplesmente não faz nada. Isso mantém o
 * carregamento livre de dependência de analytics (PRD §92).
 */

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";
export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? "";

/** Eventos previstos no PRD §64. */
export type AnalyticsEvent =
  | "whatsapp_click"
  | "instagram_click"
  | "maps_click"
  | "service_click";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Envia um evento para o dataLayer (GTM) e para o gtag (GA4 direto).
 * Usar `location` para saber qual CTA converteu mais (PRD §65),
 * ex.: `hero_whatsapp`, `floating_whatsapp`.
 */
export function trackEvent(
  event: AnalyticsEvent,
  params: Record<string, string | number> = {},
): void {
  if (typeof window === "undefined") return;

  window.dataLayer?.push({ event, ...params });
  window.gtag?.("event", event, params);
}
