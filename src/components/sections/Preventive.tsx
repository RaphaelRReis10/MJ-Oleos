import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/Icons";
import { whatsappLink } from "@/lib/site";

/**
 * Manutenção preventiva (PRD §33). Função: educar (§112).
 * Os quatro itens são numerados para reforçar a leitura sequencial.
 */
const items = [
  {
    number: "01",
    title: "Mais tranquilidade",
    description:
      "Rodar sabendo que o veículo recebeu os cuidados periódicos necessários.",
  },
  {
    number: "02",
    title: "Melhor conservação",
    description:
      "A rotina de manutenção contribui para a conservação do veículo ao longo do tempo.",
  },
  {
    number: "03",
    title: "Identificação antecipada",
    description:
      "Pequenos desgastes podem ser percebidos antes de se tornarem problemas maiores.",
  },
  {
    number: "04",
    title: "Cuidado com o motor",
    description:
      "A lubrificação adequada faz parte do funcionamento correto do motor.",
  },
];

export default function Preventive() {
  return (
    <section className="bg-light py-20 lg:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <span className="eyebrow mb-4 text-primary/70">
                Manutenção preventiva
              </span>
              <h2 className="text-[clamp(1.9rem,4.4vw,3rem)] text-primary">
                Não espere o problema aparecer.
              </h2>
              <p className="mt-5 text-[1.0625rem] leading-relaxed text-gray">
                A manutenção preventiva ajuda a identificar necessidades do
                veículo antes que pequenos desgastes se transformem em problemas
                maiores.
              </p>
            </Reveal>

            <Reveal delay={140}>
              <ButtonLink
                href={whatsappLink(
                  "Olá! Vim pelo site da MJ Óleos e gostaria de falar sobre manutenção preventiva.",
                )}
                external
                variant="accent"
                size="lg"
                className="mt-8"
                event="whatsapp_click"
                eventLabel="preventiva_whatsapp"
                icon={<WhatsAppIcon className="h-5 w-5" />}
              >
                Falar com a MJ
              </ButtonLink>
            </Reveal>
          </div>

          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {items.map(({ number, title, description }, index) => (
              <Reveal
                as="li"
                key={number}
                delay={index * 90}
                className="group relative overflow-hidden rounded-[var(--radius-card)] border border-line bg-white p-7 transition-[transform,border-color,box-shadow] duration-300 ease-[var(--ease-soft)] hover:-translate-y-2 hover:border-accent hover:shadow-[var(--shadow-lift)]"
              >
                <span
                  aria-hidden="true"
                  className="font-display text-sm font-bold tracking-[0.2em] text-accent-dark"
                >
                  {number}
                </span>
                <h3 className="mt-3 text-xl text-primary">{title}</h3>
                <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-gray">
                  {description}
                </p>
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-[3px] w-0 bg-accent transition-[width] duration-300 ease-[var(--ease-soft)] group-hover:w-full"
                />
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
