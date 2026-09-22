import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { FamilyIcon, HandshakeIcon, ShieldIcon } from "@/components/ui/Icons";

/**
 * HFS (PRD §8 e §25). Função: gerar confiança (§112).
 * O conceito recebe bloco visual próprio sobre fundo azul escuro — é o
 * momento mais institucional da página.
 */
const pillars = [
  {
    letter: "H",
    title: "Honestidade",
    description:
      "Transparência em cada atendimento e orientação clara sobre os serviços necessários.",
    Icon: HandshakeIcon,
  },
  {
    letter: "F",
    title: "Família",
    description:
      "Uma empresa familiar que valoriza relações duradouras com seus clientes.",
    Icon: FamilyIcon,
  },
  {
    letter: "S",
    title: "Segurança",
    description:
      "Cuidado preventivo para contribuir com o bom funcionamento do veículo.",
    Icon: ShieldIcon,
  },
];

export default function HFS() {
  return (
    <section
      id="hfs"
      className="relative scroll-mt-24 overflow-hidden bg-primary-dark py-20 lg:py-28"
    >
      <div aria-hidden="true" className="grid-lines absolute inset-0" />

      <Container className="relative">
        <Reveal className="text-center">
          <span className="eyebrow mx-auto mb-5 justify-center text-white/60">
            Nosso lema
          </span>

          <p
            aria-hidden="true"
            className="font-display text-[clamp(4rem,14vw,9rem)] font-bold leading-[0.85] tracking-tight text-white/10"
          >
            HFS
          </p>

          <h2 className="-mt-4 text-[clamp(1.9rem,4.4vw,3rem)] text-white lg:-mt-8">
            Honestidade, Família e Segurança
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[1.0625rem] leading-relaxed text-white/70">
            Três princípios que orientam a forma como a MJ Óleos atende cada
            cliente e cada veículo.
          </p>
        </Reveal>

        <ul className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3 lg:mt-16 lg:gap-6">
          {pillars.map(({ letter, title, description, Icon }, index) => (
            <Reveal
              as="li"
              key={title}
              delay={index * 110}
              className="group relative overflow-hidden rounded-[var(--radius-card)] border border-white/12 bg-white/[0.04] p-8 transition-[transform,border-color,background-color] duration-300 ease-[var(--ease-soft)] hover:-translate-y-2 hover:border-accent/60 hover:bg-white/[0.07]"
            >
              <span
                aria-hidden="true"
                className="absolute right-5 top-3 font-display text-[5.5rem] font-bold leading-none text-white/[0.06] transition-colors duration-300 group-hover:text-accent/20"
              >
                {letter}
              </span>

              <span
                aria-hidden="true"
                className="relative inline-flex h-12 w-12 items-center justify-center rounded-[10px] bg-accent/14 text-accent"
              >
                <Icon className="h-6 w-6" />
              </span>

              <h3 className="relative mt-6 text-2xl text-white">{title}</h3>
              <p className="relative mt-3 text-[0.9375rem] leading-relaxed text-white/70">
                {description}
              </p>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
