"use client";

import { useEffect, useState } from "react";
import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { CloseIcon, MenuIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { site, whatsappLink } from "@/lib/site";

/**
 * Header sticky (PRD §15–§17).
 *
 * Estado inicial: fundo azul sólido, altura maior.
 * Ao rolar: altura reduzida, backdrop blur e sombra discreta, mantendo
 * a transição dentro da faixa de 250–350ms pedida no PRD §16.
 */
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Trava o scroll do body e permite fechar o drawer com Escape (PRD §61). */
  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300 ease-[var(--ease-soft)] ${
        scrolled
          ? "bg-primary-dark/92 shadow-[var(--shadow-header)] backdrop-blur-md"
          : "bg-primary"
      }`}
    >
      <Container>
        <div
          className={`flex items-center justify-between transition-[height] duration-300 ease-[var(--ease-soft)] ${
            scrolled ? "h-16 lg:h-[68px]" : "h-[72px] lg:h-[84px]"
          }`}
        >
          <a href="#inicio" className="shrink-0">
            <Logo
              priority
              className={scrolled ? "h-8 w-auto" : "h-9 w-auto lg:h-10"}
            />
          </a>

          <nav aria-label="Navegação principal" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="group relative inline-flex h-10 items-center px-3.5 text-sm font-medium text-white/85 transition-colors duration-300 hover:text-white"
                  >
                    {item.label}
                    <span className="absolute inset-x-3.5 bottom-1.5 h-px origin-left scale-x-0 bg-accent transition-transform duration-300 ease-[var(--ease-soft)] group-hover:scale-x-100" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden lg:block">
            <ButtonLink
              href={whatsappLink()}
              external
              variant="accent"
              size="md"
              event="whatsapp_click"
              eventLabel="header_whatsapp"
              icon={<WhatsAppIcon className="h-[18px] w-[18px]" />}
            >
              WhatsApp
            </ButtonLink>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
            aria-controls="menu-mobile"
            className="inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-btn)] text-white transition-colors duration-300 hover:bg-white/10 lg:hidden"
          >
            <MenuIcon className="h-6 w-6" />
          </button>
        </div>
      </Container>

      {/* Drawer mobile fullscreen (PRD §17) */}
      <div
        id="menu-mobile"
        inert={!menuOpen}
        className={`fixed inset-0 z-50 bg-primary-dark transition-[opacity,visibility] duration-300 ease-[var(--ease-soft)] lg:hidden ${
          menuOpen
            ? "visible opacity-100"
            : "pointer-events-none invisible opacity-0"
        }`}
      >
        <div className="grid-lines flex h-full flex-col">
          <Container>
            <div className="flex h-[72px] items-center justify-between">
              <Logo className="h-9 w-auto" />
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Fechar menu"
                className="inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-btn)] text-white transition-colors duration-300 hover:bg-white/10"
              >
                <CloseIcon className="h-6 w-6" />
              </button>
            </div>
          </Container>

          <Container className="flex flex-1 flex-col justify-between pb-10 pt-6">
            <nav aria-label="Navegação mobile">
              <ul className="flex flex-col">
                {site.nav.map((item) => (
                  <li key={item.href} className="border-b border-white/10">
                    <a
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="flex min-h-14 items-center font-display text-2xl font-semibold uppercase tracking-wide text-white transition-colors duration-300 hover:text-accent"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <ButtonLink
              href={whatsappLink()}
              external
              variant="accent"
              size="lg"
              className="mt-8 w-full"
              event="whatsapp_click"
              eventLabel="menu_mobile_whatsapp"
              icon={<WhatsAppIcon className="h-5 w-5" />}
            >
              Falar no WhatsApp
            </ButtonLink>
          </Container>
        </div>
      </div>
    </header>
  );
}
