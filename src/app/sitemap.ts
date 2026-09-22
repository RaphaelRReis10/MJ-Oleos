import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/**
 * Sitemap (PRD §45).
 * Hoje há apenas a home. Quando as páginas de serviço do §48 forem criadas
 * (/troca-de-oleo, /manutencao-automotiva, /injecao-eletronica), basta
 * acrescentá-las a este array.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
