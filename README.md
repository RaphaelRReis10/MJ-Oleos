# MJ Óleos Lubrificantes — site institucional

Site one-page da MJ Óleos Lubrificantes (Belo Horizonte — MG), construído a
partir do `PRD — MJ ÓLEOS LUBRIFICANTES.txt` que está na raiz deste repositório.

**Stack:** Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS v4
**Dependências de runtime:** apenas `next`, `react` e `react-dom`.

## Rodar o projeto

```bash
npm install
npm run dev      # desenvolvimento em http://localhost:3000
npm run build    # build de produção
npm start        # servir o build
npm run lint     # ESLint
npm run typecheck
```

## Configuração

Copie `.env.example` para `.env.local` e preencha o que for necessário:

| Variável | Obrigatória | Para que serve |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Sim, em produção | Base de canonical, sitemap e Open Graph. Sem ela, usa `https://www.mjoleos.com.br`. |
| `NEXT_PUBLIC_GA_ID` | Não | Google Analytics 4. Vazio = analytics não carrega. |
| `NEXT_PUBLIC_GTM_ID` | Não | Google Tag Manager. Tem precedência sobre o GA4 direto. |

O site funciona normalmente sem GA4 e sem GTM.

## Onde mexer no conteúdo

Quase todo o conteúdo editável está centralizado, para não ser preciso caçar
texto dentro de componentes:

| O que mudar | Arquivo |
|---|---|
| Telefone, endereço, Instagram, links do WhatsApp, menu | `src/lib/site.ts` |
| Serviços, descrições, ordem de prioridade, opções do formulário | `src/lib/services.ts` |
| Dados estruturados (schema.org) | `src/lib/schema.ts` |
| Cores, fontes, sombras, raios, transições | `src/app/globals.css` (bloco `@theme`) |
| Imagens e logotipo | veja [`IMAGENS.md`](./IMAGENS.md) |

Trocar o telefone em `src/lib/site.ts` atualiza header, hero, cards, formulário,
footer, botão flutuante e o schema de uma vez só.

## Estrutura

```
src/
├── app/
│   ├── layout.tsx            metadata, fontes, schema.org, skip link
│   ├── page.tsx              composição da one-page
│   ├── globals.css           design tokens (§74) + reveal + formulário
│   ├── sitemap.ts            §45
│   ├── robots.ts             §45
│   ├── opengraph-image.tsx   §68 — gerada no build
│   ├── icon.svg              favicon
│   └── apple-icon.svg
├── components/
│   ├── ui/                   Button, Container, SectionHeader, ServiceCard,
│   │                         Reveal, Logo, Icons
│   ├── layout/               Header, Footer, WhatsAppFloat
│   ├── sections/             uma seção por arquivo, na ordem do §52
│   └── Analytics.tsx         GA4 / GTM
└── lib/                      site.ts · services.ts · schema.ts · analytics.ts
```

## Contato

Não há backend e **nenhum dado do visitante é coletado, armazenado ou enviado
a terceiros**. Todo o atendimento acontece no WhatsApp.

A seção de contato lista os assuntos possíveis; cada um abre a conversa com a
mensagem correspondente já escrita, vinda de `whatsappMessage` em
`src/lib/services.ts`. O visitante só precisa tocar em enviar.

Aqui existia um formulário de nome, telefone, serviço e mensagem. Ele foi
removido porque pedia trabalho sem entregar nada em troca: o telefone era
redundante (a mensagem de WhatsApp já chega identificada), o retorno
"enviada com sucesso" era falso (nada saía do navegador, e quem fechasse o
WhatsApp não virava contato — mas o evento já tinha sido contado), e o
honeypot protegia um destino que não existe. O raciocínio completo está no
comentário de `src/components/sections/Contact.tsx`.

Se um dia a empresa quiser receber leads por e-mail, o caminho é criar
`src/app/api/contato/route.ts` e um formulário que faça `fetch` para essa
rota — aí sim com destino real, e com o retorno de sucesso significando algo.

## Analytics

`trackEvent` (em `src/lib/analytics.ts`) envia para `dataLayer` e `gtag`. Os
eventos do PRD §64 já estão instrumentados, cada um com um `location` que
identifica o CTA de origem (§65):

| Evento | Origens instrumentadas |
|---|---|
| `whatsapp_click` | `header_whatsapp`, `menu_mobile_whatsapp`, `hero_whatsapp`, `preventiva_whatsapp`, `visual_whatsapp`, `cta_whatsapp`, `contato_whatsapp`, `contato_assunto_*`, `localizacao_whatsapp`, `footer_whatsapp`, `floating_whatsapp` |
| `service_click` | `service_troca-de-oleo`, `service_manutencao-automotiva`, `service_injecao-eletronica`, `service_motor`, `service_suspensao` |
| `instagram_click` | `contato_instagram`, `footer_instagram` |
| `maps_click` | `localizacao_como_chegar` |

## Páginas futuras de serviço

A arquitetura já suporta o §48. Para criar `/troca-de-oleo`:

1. `src/app/troca-de-oleo/page.tsx` com `metadata` própria;
2. reaproveite os componentes de `src/components/sections/`;
3. acrescente a rota em `src/app/sitemap.ts`.

## Segurança

`next.config.ts` define CSP, HSTS, `X-Content-Type-Options`, `X-Frame-Options`,
`Referrer-Policy` e `Permissions-Policy`. A CSP libera apenas Google Maps
(iframe) e Google Tag Manager / Analytics. Ao adicionar um script de terceiros
(Meta Pixel, por exemplo), inclua o domínio na CSP ou ele será bloqueado.

## Informações deliberadamente ausentes

O PRD §106 proíbe inventar dados. Estes itens **não** aparecem no site porque a
empresa não os forneceu:

- horário de funcionamento (também ausente do schema.org);
- preços, promoções e garantias;
- marcas de óleo, certificações, parceiros e equipamentos específicos;
- avaliações, depoimentos e qualquer número de clientes ou atendimentos;
- coordenadas geográficas (`geo`) no schema.

Ao receber essas informações, os pontos naturais de inserção são
`src/lib/site.ts` e `src/lib/schema.ts`.

---

Desenvolvido por Raphael Reis.
