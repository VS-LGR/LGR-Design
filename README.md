# Portfólio — Lucas Gabriel Rodrigues

Site de contratação (recruiter-first) em **Next.js 14** (App Router), React 18, TypeScript e Tailwind. Posicionamento híbrido: **UX/UI · Product · Desenvolvimento**.

## Como rodar

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

```bash
npm run build && npm start
```

Opcional: `NEXT_PUBLIC_SITE_URL` para canonical/OG/sitemap (padrão em `src/lib/siteMeta.ts`).

## Rotas

| Rota | Função |
|------|--------|
| `/` | Home — hero + cases + skills + CTA |
| `/projetos` | Lista (destaque + explorações) |
| `/projetos/[slug]` | Case study (SEO por projeto) |
| `/processo` | Método, processo e ferramentas |
| `/sobre` | Trajetória e posicionamento |
| `/contato` | Contato / recrutamento |
| `/contratar` | Serviços freelance (secundário) |
| `/export/projetos[/slug]` | Carrossel PDF LinkedIn (`noindex`) |

Redirects legados: `/historia` → `/sobre`, `/como-trabalho` → `/processo`, `/cases/:slug` → `/projetos/:slug`, `/exploracao` → `/contato`.

## Onde editar conteúdo

- Projetos PT/EN: `src/lib/projects.ts`, `src/lib/projects.en.ts`
- Sobre: `src/lib/about.ts`, `src/lib/about.en.ts`
- Serviços freelance: `src/lib/services.ts`
- UI i18n: `src/lib/i18n/messages.ts`
- Arquitetura/nav: `src/lib/siteArchitecture.ts`
- **CV:** coloque o PDF em `public/cv/lucas-gabriel-rodrigues.pdf` e ative `CV_AVAILABLE` em `src/lib/cv.ts` (ou `resumePdfUrl` em about)

## Design

Tokens em `src/styles/globals.css` / Tailwind:

- dark `#0c1222` · surface `#1a2332` · accent `#22b8cf` · primary `#f1f5f9` · muted `#9aa8bc`

Font: Plus Jakarta Sans (`next/font`).

## Honestidade de conteúdo

Não inventar métricas, clientes ou depoimentos. Hirely é **acadêmico/conceitual**. Preview QualiProc é login de sistema fechado, enquadrado como tal.
