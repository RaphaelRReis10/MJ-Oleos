import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import Analytics from "@/components/Analytics";
import HydrationFlag from "@/components/ui/HydrationFlag";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import { buildAutoRepairSchema, buildWebSiteSchema } from "@/lib/schema";
import { site } from "@/lib/site";
import "./globals.css";

/**
 * Fontes do PRD §13, auto-hospedadas pelo next/font.
 * `display: swap` evita texto invisível e `preload` no display reduz o CLS
 * no título do Hero, que é o maior elemento acima da dobra.
 */
const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.seo.title,
  description: site.seo.description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  generator: "Next.js",
  keywords: [
    "troca de óleo Belo Horizonte",
    "troca de óleo Sarandi",
    "lubrificantes automotivos Belo Horizonte",
    "manutenção automotiva Belo Horizonte",
    "injeção eletrônica Belo Horizonte",
    "oficina mecânica Sarandi",
    "MJ Óleos",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: site.url,
    siteName: site.name,
    title: site.seo.title,
    description: site.seo.ogDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: site.seo.title,
    description: site.seo.ogDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "automotive",
};

export const viewport: Viewport = {
  themeColor: "#123B63",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schema = [buildAutoRepairSchema(), buildWebSiteSchema()];

  return (
    <html
      lang="pt-BR"
      className={`${barlowCondensed.variable} ${inter.variable}`}
      /*
        O script inline do <head> adiciona a classe `js` aqui antes da
        hidratação — é exatamente esse o ponto dele: o estado inicial do
        scroll reveal precisa valer já na primeira pintura, antes de o React
        assumir. Isso deixa o DOM diferente do HTML do servidor e o React
        acusa divergência de hidratação nesta tag.

        A divergência é intencional e fica contida: `suppressHydrationWarning`
        vale só para este elemento e seus filhos de texto diretos, nunca para
        a árvore abaixo. Qualquer divergência real dentro do site continua
        sendo reportada normalmente.
      */
      suppressHydrationWarning
    >
      <head>
        {/*
          Marca que o JS está ativo antes da primeira pintura. O CSS de
          scroll reveal depende disso: sem a classe, todo conteúdo
          permanece visível (PRD §55).

          O timer é a rede de segurança: se o React não hidratar em 2,5s
          (CSP bloqueando o bundle, rede ruim, erro de hidratação), a classe
          sai e o conteúdo reaparece. Perder a animação é aceitável; perder
          a página inteira, não.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "var d=document.documentElement;d.classList.add('js');" +
              "setTimeout(function(){if(!d.dataset.hydrated)d.classList.remove('js')},2500)",
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body>
        <a
          href="#inicio"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-[var(--radius-btn)] focus:bg-accent focus:px-5 focus:py-3 focus:font-display focus:text-sm focus:font-semibold focus:uppercase focus:tracking-wide focus:text-white"
        >
          Pular para o conteúdo
        </a>

        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
        <Analytics />
        <HydrationFlag />
      </body>
    </html>
  );
}
