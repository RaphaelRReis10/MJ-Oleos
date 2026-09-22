import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { ArrowRightIcon, CheckIcon } from "@/components/ui/Icons";
import { site } from "@/lib/site";

/**
 * Sobre (PRD §24). Função: humanizar (§112).
 * O texto é o institucional fornecido pela empresa, apenas quebrado em
 * parágrafos para legibilidade — o posicionamento não foi alterado (§5).
 */
const highlights = [
  "Empresa familiar fundada em 2021",
  "Especialização em troca de óleo e lubrificantes",
  "Estrutura complementar de manutenção no próprio pátio",
  "Atendimento voltado a veículos de linha leve",
];

export default function About() {
  return (
    <section id="sobre" className="scroll-mt-24 bg-light py-20 lg:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-card)] shadow-[var(--shadow-card)]">
              {/* IMAGEM PROVISÓRIA — substituir por foto real da equipe/oficina */}
              <Image
                src="/images/sobre-mj.jpg"
                alt="Fachada da MJ Óleos Lubrificantes na R. Maria Felícia, 13, no Sarandi"
                fill
                sizes="(max-width: 1023px) 100vw, 46vw"
                className="object-cover"
              />
            </div>

            {/* Selo do ano de fundação — dado confirmado pela empresa */}
            <div className="absolute -bottom-6 -right-2 rounded-[var(--radius-card)] bg-primary px-7 py-5 shadow-[var(--shadow-lift)] lg:-right-6">
              <p className="font-display text-4xl font-bold leading-none text-white">
                {site.foundedYear}
              </p>
              <p className="mt-1.5 text-xs font-medium uppercase tracking-[0.16em] text-accent-light">
                Desde
              </p>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <span className="eyebrow mb-4 text-primary/70">Conheça a MJ</span>
              <h2 className="text-[clamp(1.9rem,4.4vw,3rem)] text-primary">
                Conheça a MJ Óleos
              </h2>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-6 space-y-4 text-[1.0625rem] leading-relaxed text-gray">
                <p>
                  Fundada em 2021, a MJ Óleos é uma empresa com o objetivo de
                  trazer soluções para o setor de troca de óleo e lubrificantes
                  automotivos para carros da linha leve.
                </p>
                <p>
                  Somos uma empresa familiar que tem como lema{" "}
                  <strong className="font-semibold text-primary">
                    HFS — Honestidade, Família e Segurança
                  </strong>
                  , prezando pela troca preventiva e pelo melhor funcionamento
                  dos veículos.
                </p>
                <p>
                  Além da especialização em troca de óleo, contamos com uma
                  extensão em nosso pátio onde oferecemos serviços de manutenção
                  em veículos de linha leve, incluindo motores, injeção
                  eletrônica e suspensão, proporcionando um local completo para
                  solucionar diferentes necessidades do seu veículo.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <ul className="mt-8 space-y-3">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/12 text-accent"
                    >
                      <CheckIcon className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-[0.9375rem] text-ink">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={280}>
              <ButtonLink
                href="#servicos"
                variant="outlineDark"
                size="md"
                className="mt-9"
                icon={<ArrowRightIcon className="h-[18px] w-[18px]" />}
              >
                Ver nossos serviços
              </ButtonLink>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
