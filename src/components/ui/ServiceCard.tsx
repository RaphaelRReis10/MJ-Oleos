"use client";

import { ServiceIconByName, ArrowRightIcon, WhatsAppIcon } from "./Icons";
import { ButtonLink } from "./Button";
import { trackEvent } from "@/lib/analytics";
import { whatsappLink } from "@/lib/site";
import type { Service } from "@/lib/services";

/**
 * Card de serviço (PRD §27–§32).
 *
 * O card `featured` (troca de óleo) recebe borda laranja permanente, fundo
 * branco elevado e CTA próprio — é o serviço de maior peso comercial (§111).
 * Os demais compartilham o mesmo comportamento de hover: elevação de 8px,
 * borda laranja, ícone laranja e detalhe gráfico, em 300ms.
 */
export default function ServiceCard({ service }: { service: Service }) {
  const { featured } = service;

  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border p-7 transition-[transform,border-color,box-shadow] duration-300 ease-[var(--ease-soft)] hover:-translate-y-2 hover:border-accent hover:shadow-[var(--shadow-lift)] lg:p-8 ${
        featured
          ? "border-accent bg-white shadow-[var(--shadow-card)]"
          : "border-line bg-white"
      }`}
    >
      {featured ? (
        <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full bg-accent/12 px-3 py-1.5 font-display text-xs font-semibold uppercase tracking-[0.14em] text-accent-dark">
          Especialidade da casa
        </span>
      ) : null}

      <span
        aria-hidden="true"
        className={`inline-flex h-13 w-13 items-center justify-center rounded-[10px] transition-colors duration-300 ${
          featured
            ? "bg-accent/12 text-accent"
            : "bg-light text-primary group-hover:bg-accent/12 group-hover:text-accent"
        }`}
        style={{ height: "52px", width: "52px" }}
      >
        <ServiceIconByName name={service.icon} className="h-7 w-7" />
      </span>

      <h3
        className={`mt-5 text-primary ${featured ? "text-[1.75rem]" : "text-2xl"}`}
      >
        {service.title}
      </h3>

      <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-gray">
        {service.description}
      </p>

      {featured ? (
        <ButtonLink
          href={whatsappLink(service.whatsappMessage)}
          external
          variant="accent"
          size="md"
          className="mt-7 w-full sm:w-auto sm:self-start"
          event="service_click"
          eventLabel={`service_${service.id}`}
          icon={<WhatsAppIcon className="h-[18px] w-[18px]" />}
        >
          Agendar
        </ButtonLink>
      ) : (
        <a
          href={whatsappLink(service.whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            trackEvent("service_click", { location: `service_${service.id}` })
          }
          className="mt-7 inline-flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-[0.1em] text-primary transition-colors duration-300 hover:text-accent"
        >
          Falar sobre este serviço
          <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      )}

      {/* Detalhe gráfico no hover (PRD §32) */}
      <span
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-[3px] w-0 bg-accent transition-[width] duration-300 ease-[var(--ease-soft)] group-hover:w-full"
      />
    </article>
  );
}
