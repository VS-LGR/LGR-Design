# Portfólio — Lucas Gabriel Rodrigues

Portfólio em Next.js (App Router), React, TypeScript e Tailwind. Vitrine de projetos e apresentação profissional em UX Design e Web Design.

## Como rodar

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

Build para produção:

```bash
npm run build
npm start
```

## Estrutura de pastas

```
src/
  app/              # Rotas e layout (layout.tsx, page.tsx)
  components/       # Componentes React
    shared/         # Header, TabNav, Footer, Button, Card, Carousel
    about/          # AboutSection, IntroBlock, FormationBlock, ExperienceBlock, SpecialtiesCarousel, DifferentialBlock, CreativePreferencesCarousel, ObjectiveBlock
    projects/       # ProjectGrid, ProjectCard, CategoryFilter
    hobbies/        # HobbyGrid, HobbyCard
  styles/           # globals.css e variáveis da paleta
  lib/              # Conteúdo e constantes
    about.ts        # intro, formation, experience, specialties, differential, creativePreferences, professionalObjective, resumePdfUrl
    projects.ts     # Lista de projetos e categorias (placeholders)
    hobbies.ts      # Lista de hobbys (placeholders)
  types/            # Tipos TypeScript (TabId, AboutContent, Project, Hobby)
  assets/           # Imagens e mídia (opcional)
public/             # Arquivos estáticos (favicon, imagens)
```

## Onde editar textos e dados

- **Sobre Mim:** [src/lib/about.ts](src/lib/about.ts) — intro (parágrafos), formation (lista), experience (título + descrição + itens), specialties, differential, creativePreferences, professionalObjective, resumePdfUrl (opcional).
- **Projetos:** [src/lib/projects.ts](src/lib/projects.ts) — categorias e lista de projetos (título, categoria, descrição, **developmentExplanation** para explicar o desenvolvimento de cada site, thumbnail, link).
- **Hobbys:** [src/lib/hobbies.ts](src/lib/hobbies.ts) — títulos e descrições dos quatro hobbys (Modelagem 3D, Pintura, Game Design, Pixel Art).

Substitua os placeholders pelos seus textos e URLs. Para imagens de projetos ou hobbys, use caminhos em `public/` (ex.: `/images/projeto.jpg`) ou configure `images.remotePatterns` em `next.config.js` para URLs externas.

## Design system

Tema escuro focado em tecnologia e UX (definido em `tailwind.config.ts` e `src/styles/globals.css`):

- **dark** (fundo): `#0f172a`
- **surface** (cards): `#1e293b`
- **accent** (destaques, links): `#06b6d4`
- **primary** (texto): `#f1f5f9`
- **muted** (texto secundário): `#94a3b8`
- **border-dark**: `#334155`

Tipografia: Plus Jakarta Sans (via `next/font/google`).

## Deploy (Vercel)

1. Envie o projeto para um repositório Git.
2. Conecte o repositório na Vercel.
3. Build command: `npm run build`. Output: `.next`. Nenhuma variável de ambiente obrigatória na primeira entrega.

## Pontos de atenção / melhorias futuras

- **Imagens:** Use `next/image` para thumbnails em `public/`; para domínios externos, configurar `images.remotePatterns` em `next.config.js`.
- **Conteúdo:** Considerar CMS ou JSON externo para projetos se a lista crescer.
- **i18n / modo escuro:** Deixados para decisão explícita posterior.
