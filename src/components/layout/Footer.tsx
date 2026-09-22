"use client";

import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";
import { InstagramIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { trackEvent } from "@/lib/analytics";
import { site, whatsappLink } from "@/lib/site";

/**
 * Footer (PRD §70–§71) sobre #0B243D.
 * Repete o NAP completo para reforçar a consistência com o Google Business
 * Profile exigida no §47.
 */
export default function Footer() {
  const profiles = [site.instagram.oleos, site.instagram.mecanica];

  return (
    <footer className="relative overflow-hidden bg-primary-dark pt-16 text-white/70 lg:pt-20">
      <div aria-hidden="true" className="grid-lines absolute inset-0 opacity-60" />

      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1.2fr] lg:gap-16">
          <div>
            <Logo className="h-10 w-auto" />
            <p className="mt-6 max-w-sm leading-relaxed">
              Troca de óleo, lubrificantes e manutenção automotiva para veículos
              de linha leve.
            </p>

            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackEvent("whatsapp_click", { location: "footer_whatsapp" })
              }
              className="mt-7 inline-flex items-center gap-2.5 font-display text-base font-semibold uppercase tracking-[0.08em] text-white transition-colors duration-300 hover:text-accent"
            >
              <WhatsAppIcon className="h-5 w-5 text-whatsapp" />
              {site.phone.display}
            </a>
          </div>

          <nav aria-labelledby="footer-nav-titulo">
            <p
              id="footer-nav-titulo"
              className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-white"
            >
              Navegação
            </p>
            <ul className="mt-5 space-y-3">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="inline-block transition-colors duration-300 hover:text-accent"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-white">
              Contato
            </p>

            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3">
                <PinIcon className="mt-0.5 h-[18px] w-[18px] shrink-0 text-accent" />
                <address className="not-italic leading-relaxed">
                  {site.address.full}
                </address>
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon className="h-[18px] w-[18px] shrink-0 text-accent" />
                <a
                  href={"tel:" + site.phone.e164}
                  className="transition-colors duration-300 hover:text-accent"
                >
                  {site.phone.display}
                </a>
              </li>
            </ul>

            <p className="mt-8 font-display text-sm font-semibold uppercase tracking-[0.18em] text-white">
              Redes
            </p>
            <ul className="mt-4 space-y-3">
              {profiles.map((profile) => (
                <li key={profile.handle}>
                  <a
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackEvent("instagram_click", {
                        location: "footer_instagram",
                      })
                    }
                    className="inline-flex items-center gap-3 transition-colors duration-300 hover:text-accent"
                  >
                    <InstagramIcon className="h-[18px] w-[18px] shrink-0 text-accent" />
                    {profile.handle}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 py-7 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. Todos os direitos
            reservados.
          </p>
          <p>Desenvolvido por {site.author}.</p>
        </div>
      </Container>
    </footer>
  );
}
