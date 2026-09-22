import { site } from "./site";

/**
 * Dados estruturados AutoRepair (PRD §46).
 *
 * Apenas campos confirmados pela empresa. `geo`, `openingHours`,
 * `priceRange` e `aggregateRating` foram deliberadamente omitidos porque
 * essas informações não foram fornecidas — o §46 e o §106 proíbem inventá-las.
 */
export function buildAutoRepairSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "@id": site.url + "/#autorepair",
    name: site.name,
    description: site.seo.description,
    url: site.url,
    telephone: site.phone.e164,
    image: site.url + "/opengraph-image",
    foundingDate: String(site.foundedYear),
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    areaServed: {
      "@type": "City",
      name: site.address.city,
    },
    sameAs: [site.instagram.oleos.url, site.instagram.mecanica.url],
    makesOffer: [
      "Troca de óleo e lubrificantes",
      "Manutenção automotiva",
      "Injeção eletrônica",
      "Manutenção de motor",
      "Suspensão",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name },
    })),
  };
}

/** WebSite + Organization, usados pelo Google para o knowledge panel. */
export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": site.url + "/#website",
    name: site.name,
    url: site.url,
    inLanguage: "pt-BR",
    publisher: { "@id": site.url + "/#autorepair" },
  };
}
