import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

/**
 * Cabeçalhos de segurança (PRD §63).
 * CSP permite apenas o que o site realmente usa: Google Maps (iframe),
 * GA4/GTM (analytics) e as fontes servidas localmente por next/font.
 *
 * ATENÇÃO ao mexer no `script-src`: o Next.js em modo de desenvolvimento
 * compila os módulos com `eval` (webpack/HMR). Sem `'unsafe-eval'` o
 * navegador bloqueia TODO o bundle, a hidratação nunca acontece e o site
 * fica sem JavaScript — o scroll reveal trava em opacity 0 e as seções
 * aparecem em branco. Por isso `'unsafe-eval'` e o WebSocket do HMR entram
 * apenas em dev; o build de produção não usa `eval` e continua restrito.
 */
const scriptSrc = [
  "script-src 'self' 'unsafe-inline'",
  isDev ? "'unsafe-eval'" : "",
  "https://www.googletagmanager.com https://www.google-analytics.com",
]
  .filter(Boolean)
  .join(" ");

const connectSrc = [
  "connect-src 'self'",
  isDev ? "ws: http://localhost:*" : "",
  "https://www.google-analytics.com https://www.googletagmanager.com https://region1.google-analytics.com",
]
  .filter(Boolean)
  .join(" ");

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      scriptSrc,
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https://www.google-analytics.com https://www.googletagmanager.com",
      "font-src 'self' data:",
      connectSrc,
      "frame-src https://www.google.com https://maps.google.com",
      "form-action 'self'",
      "base-uri 'self'",
      "object-src 'none'",
      "frame-ancestors 'self'",
      /* Em dev o servidor é http://localhost; forçar https quebraria os assets. */
      isDev ? "" : "upgrade-insecure-requests",
    ]
      .filter(Boolean)
      .join("; "),
  },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
