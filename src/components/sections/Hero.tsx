import Image from "next/image";
import Container from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { ArrowDownIcon, PinIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { site, whatsappLink } from "@/lib/site";

/**
 * Hero — PRD §18–§20.
 *
 * Regra dos 3 segundos (§84): empresa, serviço, cidade e ação precisam estar
 * visíveis sem rolar. A animação de entrada é CSS puro (sem JS, sem biblioteca)
 * e é neutralizada por prefers-reduced-motion no globals.css.
 */
export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-[640px] items-center overflow-hidden bg-primary-dark pb-20 pt-[104px] lg:min-h-[760px] lg:pb-28 lg:pt-[132px]"
    >
      <Image
        src="/images/hero-oficina.jpg"
        alt="Box de atendimento da MJ Óleos Lubrificantes com veículos de linha leve em manutenção"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/*
        Overlay azul escuro exigido pelo §19, calibrado para a foto real
        aparecer sem custar legibilidade.

        No mobile o texto ocupa a largura toda, então o overlay é uniforme
        e forte (0,84 → 0,78 ≈ 9:1 contra o pior caso da foto, que é branco
        puro). No desktop o texto vive nos ~720px da esquerda: o gradiente
        segura 0,93 → 0,80 nessa faixa (≥ 8:1) e abre para 0,46 à direita,
        onde não há texto e a oficina aparece de verdade.

        Ao trocar a foto, mantenha ≥ 0,70 sob qualquer texto: abaixo disso o
        branco cai dos 4,5:1 exigidos pelo §61 sobre áreas claras da imagem.
      */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,36,61,0.84)_0%,rgba(11,36,61,0.78)_100%)] lg:bg-[linear-gradient(100deg,rgba(11,36,61,0.93)_0%,rgba(11,36,61,0.80)_52%,rgba(11,36,61,0.46)_100%)]"
      />
      <div aria-hidden="true" className="grid-lines absolute inset-0 opacity-70" />

      {/* Detalhe geométrico técnico discreto */}
      <div
        aria-hidden="true"
        className="absolute -right-24 top-1/2 hidden h-[520px] w-[520px] -translate-y-1/2 rounded-full border border-white/10 lg:block"
      >
        <div className="absolute inset-16 rounded-full border border-white/10" />
        <div className="absolute inset-32 rounded-full border border-accent/25" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-[720px]">
          <p
            className="eyebrow mb-6 animate-[hero-in_600ms_var(--ease-soft)_both] text-white/70"
            style={{ animationDelay: "0ms" }}
          >
            <PinIcon className="h-4 w-4 text-accent" aria-hidden="true" />
            {site.address.district} · {site.address.city} — {site.address.state}
          </p>

          <h1
            className="animate-[hero-in_700ms_var(--ease-soft)_both] text-[clamp(2.3rem,6.2vw,4.25rem)] text-white"
            style={{ animationDelay: "60ms" }}
          >
            Troca de óleo e manutenção automotiva em Belo Horizonte
          </h1>

          <p
            className="mt-6 max-w-[560px] animate-[hero-in_700ms_var(--ease-soft)_both] text-[1.0625rem] leading-relaxed text-white/80 lg:text-lg"
            style={{ animationDelay: "170ms" }}
          >
            Cuidado, segurança e atendimento transparente para veículos de linha
            leve.
          </p>

          <div
            className="mt-9 flex animate-[hero-in_700ms_var(--ease-soft)_both] flex-col gap-3 sm:flex-row sm:flex-wrap"
            style={{ animationDelay: "280ms" }}
          >
            <ButtonLink
              href={whatsappLink()}
              external
              variant="accent"
              size="lg"
              event="whatsapp_click"
              eventLabel="hero_whatsapp"
              icon={<WhatsAppIcon className="h-5 w-5" />}
            >
              Agendar pelo WhatsApp
            </ButtonLink>

            <ButtonLink
              href="#servicos"
              variant="outlineLight"
              size="lg"
              icon={<ArrowDownIcon className="h-[18px] w-[18px]" />}
            >
              Conheça nossos serviços
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
