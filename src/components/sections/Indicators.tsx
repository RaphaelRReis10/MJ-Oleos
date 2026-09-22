import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { CarIcon, DropletIcon, ShieldIcon, WrenchIcon } from "@/components/ui/Icons";

/**
 * Barra de indicadores logo abaixo do Hero (PRD §21).
 * São quatro afirmações verificáveis — nenhuma métrica inventada (§106).
 */
const indicators = [
  {
    label: "Desde 2021",
    description: "Experiência desde a fundação da empresa.",
    Icon: ShieldIcon,
  },
  {
    label: "Troca de óleo",
    description: "Especialização principal.",
    Icon: DropletIcon,
  },
  {
    label: "Linha leve",
    description: "Foco em veículos de linha leve.",
    Icon: CarIcon,
  },
  {
    label: "Manutenção",
    description: "Estrutura complementar.",
    Icon: WrenchIcon,
  },
];

export default function Indicators() {
  return (
    <section aria-label="Indicadores da MJ Óleos" className="bg-primary">
      <Container>
        <ul className="grid grid-cols-1 divide-y divide-white/10 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4">
          {indicators.map(({ label, description, Icon }) => (
            <Reveal
              as="li"
              key={label}
              eager
              className="flex items-start gap-4 py-6 sm:border-b sm:border-white/10 lg:border-b-0 lg:border-l lg:border-white/10 lg:px-7 lg:first:border-l-0 lg:first:pl-0"
            >
              <span
                aria-hidden="true"
                className="mt-0.5 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] bg-white/8 text-accent-light"
              >
                <Icon className="h-[22px] w-[22px]" />
              </span>
              <div>
                <p className="font-display text-lg font-semibold uppercase tracking-wide text-white">
                  {label}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-white/65">
                  {description}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
