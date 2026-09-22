"use client";

import { useEffect, useRef, useState } from "react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import {
  ArrowRightIcon,
  InstagramIcon,
  PhoneIcon,
  PinIcon,
  WhatsAppIcon,
} from "@/components/ui/Icons";
import { site, whatsappLink } from "@/lib/site";

/**
 * Localização (PRD §40). Função: facilitar a visita (§112).
 *
 * O iframe do Maps só é inserido quando a seção entra na viewport, para que
 * não concorra com o carregamento inicial da página (PRD §92–§93).
 *
 * Horário de funcionamento não é exibido: a empresa não forneceu (§106).
 */
export default function Location() {
  const [showMap, setShowMap] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    if (!("IntersectionObserver" in window)) {
      setShowMap(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShowMap(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="localizacao"
      className="scroll-mt-24 bg-white py-20 lg:py-28"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <Reveal>
              <span className="eyebrow mb-4 text-primary/70">Localização</span>
              <h2 className="text-[clamp(1.9rem,4.4vw,3rem)] text-primary">
                Onde estamos
              </h2>
              <p className="mt-5 text-[1.0625rem] leading-relaxed text-gray">
                A MJ Óleos fica no bairro Sarandi, em Belo Horizonte. Venha nos
                visitar ou fale com a equipe antes de vir.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <ul className="mt-9 space-y-5">
                <li className="flex items-start gap-4">
                  <span
                    aria-hidden="true"
                    className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] bg-light text-accent"
                  >
                    <PinIcon className="h-[22px] w-[22px]" />
                  </span>
                  <div>
                    <p className="font-display text-base font-semibold uppercase tracking-wide text-primary">
                      Endereço
                    </p>
                    <address className="mt-1 not-italic leading-relaxed text-gray">
                      {site.address.full}
                    </address>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <span
                    aria-hidden="true"
                    className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] bg-light text-accent"
                  >
                    <PhoneIcon className="h-[22px] w-[22px]" />
                  </span>
                  <div>
                    <p className="font-display text-base font-semibold uppercase tracking-wide text-primary">
                      Telefone / WhatsApp
                    </p>
                    <a
                      href={"tel:" + site.phone.e164}
                      className="mt-1 inline-block text-gray transition-colors duration-300 hover:text-accent"
                    >
                      {site.phone.display}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <span
                    aria-hidden="true"
                    className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] bg-light text-accent"
                  >
                    <InstagramIcon className="h-[22px] w-[22px]" />
                  </span>
                  <div>
                    <p className="font-display text-base font-semibold uppercase tracking-wide text-primary">
                      Instagram
                    </p>
                    <p className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-gray">
                      <a
                        href={site.instagram.oleos.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors duration-300 hover:text-accent"
                      >
                        {site.instagram.oleos.handle}
                      </a>
                      <a
                        href={site.instagram.mecanica.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors duration-300 hover:text-accent"
                      >
                        {site.instagram.mecanica.handle}
                      </a>
                    </p>
                  </div>
                </li>
              </ul>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <ButtonLink
                  href={site.maps.directions}
                  external
                  variant="solid"
                  size="md"
                  event="maps_click"
                  eventLabel="localizacao_como_chegar"
                  icon={<ArrowRightIcon className="h-[18px] w-[18px]" />}
                >
                  Como chegar
                </ButtonLink>

                <ButtonLink
                  href={whatsappLink()}
                  external
                  variant="outlineDark"
                  size="md"
                  event="whatsapp_click"
                  eventLabel="localizacao_whatsapp"
                  icon={<WhatsAppIcon className="h-[18px] w-[18px]" />}
                >
                  Falar no WhatsApp
                </ButtonLink>
              </div>
            </Reveal>
          </div>

          <Reveal delay={140}>
            <div className="h-full min-h-[340px] overflow-hidden rounded-[var(--radius-card)] border border-line bg-light shadow-[var(--shadow-card)] lg:min-h-[480px]">
              {showMap ? (
                <iframe
                  src={site.maps.embed}
                  title="Mapa com a localização da MJ Óleos Lubrificantes em Belo Horizonte"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  className="h-full min-h-[340px] w-full lg:min-h-[480px]"
                />
              ) : (
                <div
                  aria-hidden="true"
                  className="flex h-full min-h-[340px] items-center justify-center lg:min-h-[480px]"
                >
                  <PinIcon className="h-10 w-10 text-primary/20" />
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
