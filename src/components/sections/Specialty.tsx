import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import {
  CalendarCheckIcon,
  DropletIcon,
  EyeIcon,
  ShieldIcon,
} from "@/components/ui/Icons";

/**
 * Especialistas em troca de óleo (PRD §22–§23).
 * Função da seção: posicionar (§112). É aqui que a especialização principal
 * fica explícita, antes de o visitante ver a lista completa de serviços.
 */
const benefits = [
  {
    title: "Lubrificação adequada",
    description: "O óleo correto ajuda no funcionamento do motor.",
    Icon: DropletIcon,
  },
  {
    title: "Manutenção preventiva",
    description:
      "A troca periódica faz parte dos cuidados preventivos do veículo.",
    Icon: CalendarCheckIcon,
  },
  {
    title: "Atendimento transparente",
    description: "Orientação clara durante o atendimento.",
    Icon: EyeIcon,
  },
  {
    title: "Cuidado com o veículo",
    description: "Serviço realizado com atenção às necessidades do carro.",
    Icon: ShieldIcon,
  },
];

export default function Specialty() {
  return (
    <section
      id="especializacao"
      className="scroll-mt-24 bg-white py-20 lg:py-28"
    >
      <Container>
        <SectionHeader
          eyebrow="Especialistas em troca de óleo"
          title="Mais do que trocar o óleo. É cuidar do seu carro."
          subtitle="A troca de óleo é uma das principais formas de manutenção preventiva do veículo. Na MJ Óleos, o objetivo é oferecer um atendimento transparente e responsável, ajudando você a manter o funcionamento adequado do seu carro."
        />

        <ul className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {benefits.map(({ title, description, Icon }, index) => (
            <Reveal
              as="li"
              key={title}
              delay={index * 90}
              className="group relative overflow-hidden rounded-[var(--radius-card)] border border-line bg-light p-7 transition-[transform,border-color,box-shadow] duration-300 ease-[var(--ease-soft)] hover:-translate-y-2 hover:border-accent hover:shadow-[var(--shadow-lift)]"
            >
              <span
                aria-hidden="true"
                className="inline-flex h-12 w-12 items-center justify-center rounded-[10px] bg-white text-primary shadow-[var(--shadow-soft)] transition-colors duration-300 group-hover:text-accent"
              >
                <Icon className="h-6 w-6" />
              </span>

              <h3 className="mt-5 text-xl text-primary">{title}</h3>
              <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-gray">
                {description}
              </p>

              {/* Detalhe gráfico que aparece no hover (PRD §32) */}
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-[3px] w-0 bg-accent transition-[width] duration-300 ease-[var(--ease-soft)] group-hover:w-full"
              />
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
