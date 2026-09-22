/**
 * Fonte única de verdade dos dados da MJ Óleos (PRD §95).
 * Alterar telefone, endereço, Instagram ou textos de serviço aqui
 * propaga para header, footer, schema, CTAs e formulário.
 *
 * REGRA §106: nada aqui pode ser inventado. Preços, horários, marcas de óleo,
 * certificações, avaliações e números de atendimento NÃO foram fornecidos
 * pela empresa e por isso não existem neste arquivo.
 */

export const site = {
  name: "MJ Óleos Lubrificantes",
  shortName: "MJ Óleos",
  foundedYear: 2021,
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.mjoleos.com.br",

  seo: {
    title: "MJ Óleos Lubrificantes | Troca de Óleo em Belo Horizonte",
    description:
      "Troca de óleo, lubrificantes e manutenção automotiva para veículos de linha leve em Belo Horizonte. Conheça a MJ Óleos e agende seu atendimento.",
    ogDescription:
      "Troca de óleo, lubrificantes e manutenção automotiva para veículos de linha leve.",
  },

  address: {
    full: "R. Maria Felícia, 13 - Sarandi, Belo Horizonte - MG, 31360-100",
    street: "R. Maria Felícia, 13",
    district: "Sarandi",
    city: "Belo Horizonte",
    state: "MG",
    postalCode: "31360-100",
    country: "BR",
  },

  phone: {
    display: "(31) 98994-2772",
    e164: "+5531989942772",
    raw: "5531989942772",
  },

  whatsapp: {
    base: "https://wa.me/5531989942772",
    defaultMessage:
      "Olá! Vim pelo site da MJ Óleos e gostaria de saber mais sobre os serviços.",
  },

  instagram: {
    oleos: {
      handle: "@MJOLEOS",
      url: "https://www.instagram.com/mjoleos/",
      label: "MJ Óleos",
      description:
        "Conteúdos sobre troca de óleo, lubrificantes e cuidados com o veículo.",
    },
    mecanica: {
      handle: "@MJMECANICAOFICIAL",
      url: "https://www.instagram.com/mjmecanicaoficial/",
      label: "MJ Mecânica",
      description:
        "Conteúdos sobre manutenção automotiva e serviços mecânicos.",
    },
  },

  maps: {
    /** Busca pelo endereço exato — não depende de place_id que não foi fornecido. */
    directions:
      "https://www.google.com/maps/dir/?api=1&destination=" +
      encodeURIComponent(
        "R. Maria Felícia, 13 - Sarandi, Belo Horizonte - MG, 31360-100",
      ),
    embed:
      "https://www.google.com/maps?q=" +
      encodeURIComponent(
        "R. Maria Felícia, 13 - Sarandi, Belo Horizonte - MG, 31360-100",
      ) +
      "&output=embed",
  },

  nav: [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Serviços", href: "#servicos" },
    { label: "HFS", href: "#hfs" },
    { label: "Contato", href: "#contato" },
  ],

  author: "Raphael Reis",
} as const;

/**
 * Monta um link do WhatsApp com mensagem pré-preenchida.
 * @param message Texto enviado ao abrir a conversa. Omitido usa a mensagem padrão do PRD §38.
 */
export function whatsappLink(message: string = site.whatsapp.defaultMessage): string {
  return `${site.whatsapp.base}?text=${encodeURIComponent(message)}`;
}
