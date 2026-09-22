import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/Icons";
import { whatsappLink } from "@/lib/site";

/**
 * Seção visual de impacto (PRD §34).
 * Imagem full width com overlay azul escuro. Sem parallax e sem vídeo,
 * conforme as restrições de performance do §114.
 */
export default function VisualBreak() {
  return (
    <section className="relative isolate overflow-hidden py-24 lg:py-32">
      <Image
        src="/images/visual-impacto.jpg"
        alt="Tambor e frasco de óleo lubrificante usados na MJ Óleos Lubrificantes"
        fill
        loading="lazy"
        sizes="100vw"
        className="object-cover object-center"
      />

      {/*
        O texto é centralizado e ocupa a largura toda, então o overlay
        precisa ser uniforme. 0,82 → 0,76 deixa o lubrificante aparecer e
        mantém o branco acima de 6:1 mesmo sobre as áreas claras da foto.
      */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,36,61,0.82)_0%,rgba(11,36,61,0.76)_100%)]"
      />
      <div aria-hidden="true" className="grid-lines absolute inset-0 opacity-60" />

      <Container className="relative z-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-[clamp(1.9rem,5vw,3.25rem)] text-white">
            Seu carro merece cuidado de verdade.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[1.0625rem] leading-relaxed text-white/75">
            Conte com a MJ Óleos para cuidar do seu veículo.
          </p>

          <ButtonLink
            href={whatsappLink()}
            external
            variant="accent"
            size="lg"
            className="mt-9"
            event="whatsapp_click"
            eventLabel="visual_whatsapp"
            icon={<WhatsAppIcon className="h-5 w-5" />}
          >
            Falar no WhatsApp
          </ButtonLink>
        </Reveal>
      </Container>
    </section>
  );
}
