import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { PhoneIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { site, whatsappLink } from "@/lib/site";

/**
 * CTA principal (PRD §37). Função: converter (§112).
 * Fundo #123B63 e botão laranja, exatamente como especificado.
 */
export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-primary py-20 lg:py-24">
      <div aria-hidden="true" className="grid-lines absolute inset-0 opacity-70" />

      <Container className="relative">
        <Reveal className="flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] text-white">
              Precisa trocar o óleo ou fazer uma manutenção?
            </h2>
            <p className="mt-4 text-[1.0625rem] leading-relaxed text-white/75">
              Fale com a equipe da MJ Óleos e saiba como podemos ajudar.
            </p>
          </div>

          <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row lg:flex-col xl:flex-row">
            <ButtonLink
              href={whatsappLink()}
              external
              variant="accent"
              size="lg"
              event="whatsapp_click"
              eventLabel="cta_whatsapp"
              icon={<WhatsAppIcon className="h-5 w-5" />}
            >
              Falar pelo WhatsApp
            </ButtonLink>

            <ButtonLink
              href={`tel:${site.phone.e164}`}
              variant="outlineLight"
              size="lg"
              icon={<PhoneIcon className="h-[18px] w-[18px]" />}
            >
              {site.phone.display}
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
