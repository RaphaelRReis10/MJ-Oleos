import Container from "@/components/ui/Container";
import ContactOption from "@/components/ui/ContactOption";
import Reveal from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import {
  InstagramIcon,
  PhoneIcon,
  ServiceIconByName,
  WhatsAppIcon,
} from "@/components/ui/Icons";
import { services } from "@/lib/services";
import { site, whatsappLink } from "@/lib/site";

/**
 * Contato (PRD §49–§50). Função: converter (§112).
 *
 * Aqui existia um formulário de nome, telefone, serviço e mensagem que, no
 * envio, montava um texto e abria o WhatsApp. Ele foi removido porque pedia
 * trabalho sem entregar nada em troca:
 *
 * - o campo telefone era redundante — a única saída do formulário era uma
 *   mensagem de WhatsApp, que já chega identificada pelo número de quem
 *   envia;
 * - o retorno "Mensagem enviada com sucesso" era falso: nada saía do
 *   navegador. A conversa apenas abria, e o visitante ainda precisava tocar
 *   em enviar. Quem fechasse o WhatsApp ali não virava contato nenhum —
 *   mas o evento `form_submit` já tinha sido contado no analytics;
 * - o honeypot e o sanitize protegiam um destino que não existe: sem
 *   backend e sem caixa de entrada, um bot que preenchesse o formulário
 *   abriria apenas o próprio WhatsApp;
 * - quatro campos disputavam a atenção com o botão "Falar agora" logo
 *   acima, que faz o mesmo em um toque.
 *
 * O que o formulário tinha de legítimo era qualificar o contato: saber o
 * assunto antes da conversa começar. Isso continua aqui, em um toque, pelas
 * mensagens já escritas em `services.ts`.
 */
const otherSubject =
  "Olá! Vim pelo site da MJ Óleos e gostaria de falar sobre outro assunto.";

export default function Contact() {
  const instagramProfiles = [site.instagram.oleos, site.instagram.mecanica];

  return (
    <section id="contato" className="scroll-mt-24 bg-light py-20 lg:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal>
              <span className="eyebrow mb-4 text-primary/70">Contato</span>
              <h2 className="text-[clamp(1.9rem,4.4vw,3rem)] text-primary">
                Fale com a MJ Óleos
              </h2>
              <p className="mt-5 text-[1.0625rem] leading-relaxed text-gray">
                O atendimento é pelo WhatsApp, direto com a equipe da oficina.
                Escolha o assunto ao lado e a conversa abre com a mensagem
                pronta — ou fale agora mesmo, se preferir.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink
                  href={whatsappLink()}
                  external
                  variant="accent"
                  size="md"
                  event="whatsapp_click"
                  eventLabel="contato_whatsapp"
                  icon={<WhatsAppIcon className="h-[18px] w-[18px]" />}
                >
                  Falar agora
                </ButtonLink>

                <ButtonLink
                  href={"tel:" + site.phone.e164}
                  variant="outlineDark"
                  size="md"
                  icon={<PhoneIcon className="h-[18px] w-[18px]" />}
                >
                  {site.phone.display}
                </ButtonLink>
              </div>
            </Reveal>

            {/*
              Instagram (PRD §35). Os dois perfis vivem aqui, junto dos demais
              canais de contato, em vez de ocuparem uma seção própria: são um
              canal a mais para falar com a MJ, não um capítulo da jornada.
            */}
            <Reveal delay={200}>
              <div className="mt-10 border-t border-line pt-8">
                <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-primary/70">
                  Acompanhe a MJ no Instagram
                </p>

                <ul className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  {instagramProfiles.map((profile) => (
                    <li key={profile.handle}>
                      <a
                        href={profile.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-3 rounded-[var(--radius-btn)] border border-line bg-white px-4 py-3 transition-[border-color,box-shadow] duration-300 ease-[var(--ease-soft)] hover:border-accent hover:shadow-[var(--shadow-soft)]"
                      >
                        <InstagramIcon className="h-5 w-5 shrink-0 text-primary transition-colors duration-300 group-hover:text-accent" />
                        <span>
                          <span className="block font-display text-sm font-semibold uppercase tracking-[0.1em] text-primary">
                            {profile.label}
                          </span>
                          <span className="block text-sm text-gray">
                            {profile.handle}
                          </span>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Qualificação do contato em um toque: cada assunto abre a
              conversa com a mensagem correspondente já escrita. */}
          <Reveal delay={160}>
            <div className="rounded-[var(--radius-card)] border border-line bg-white p-7 shadow-[var(--shadow-card)] lg:p-9">
              <h3 className="text-2xl text-primary">
                Sobre o que você quer falar?
              </h3>
              <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-gray">
                Toque no assunto e o WhatsApp abre com a mensagem pronta. É só
                enviar.
              </p>

              <ul className="mt-7 flex flex-col gap-3">
                {services.map((service) => (
                  <li key={service.id}>
                    <ContactOption
                      href={whatsappLink(service.whatsappMessage)}
                      label={service.title}
                      icon={
                        <ServiceIconByName
                          name={service.icon}
                          className="h-5 w-5"
                        />
                      }
                      event="whatsapp_click"
                      eventLabel={`contato_assunto_${service.id}`}
                    />
                  </li>
                ))}

                <li>
                  <ContactOption
                    href={whatsappLink(otherSubject)}
                    label="Outro assunto"
                    description="Conte o que o seu veículo precisa."
                    icon={<WhatsAppIcon className="h-5 w-5" />}
                    event="whatsapp_click"
                    eventLabel="contato_assunto_outro"
                  />
                </li>
              </ul>

              <p className="mt-6 text-xs leading-relaxed text-gray">
                Este site não coleta nem armazena seus dados. A conversa
                acontece inteiramente no WhatsApp.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
