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
    shared/         # Header, TabNav, Footer, Button, Card
    about/          # AboutSection, ResumeBlock, EducationBlock, PersonalHistoryBlock
    projects/       # ProjectGrid, ProjectCard, CategoryFilter
    hobbies/        # HobbyGrid, HobbyCard
  styles/           # globals.css e variáveis da paleta
  lib/              # Conteúdo e constantes
    about.ts        # Currículo, formação, história pessoal (placeholders)
    projects.ts     # Lista de projetos e categorias (placeholders)
    hobbies.ts      # Lista de hobbys (placeholders)
  types/            # Tipos TypeScript (TabId, AboutContent, Project, Hobby)
  assets/           # Imagens e mídia (opcional)
public/             # Arquivos estáticos (favicon, imagens)
```

## Onde editar textos e dados

- **Sobre Mim:** [src/lib/about.ts](src/lib/about.ts) — resumo profissional, URL do PDF do currículo, formação, história pessoal.
- **Projetos:** [src/lib/projects.ts](src/lib/projects.ts) — categorias e lista de projetos (título, categoria, descrição, thumbnail, link).
- **Hobbys:** [src/lib/hobbies.ts](src/lib/hobbies.ts) — títulos e descrições dos quatro hobbys (Modelagem 3D, Pintura, Game Design, Pixel Art).

Substitua os placeholders pelos seus textos e URLs. Para imagens de projetos ou hobbys, use caminhos em `public/` (ex.: `/images/projeto.jpg`) ou configure `images.remotePatterns` em `next.config.js` para URLs externas.

## Design system

Paleta em uso (definida em `tailwind.config.ts` e `src/styles/globals.css`):

- **Cool Steel:** `#8da7be`
- **Ash Brown:** `#554640`
- **Pale Sky:** `#cde6f5`
- **Cool Steel 2:** `#87919e`
- **Dim Grey:** `#707078`

## Deploy (Vercel)

1. Envie o projeto para um repositório Git.
2. Conecte o repositório na Vercel.
3. Build command: `npm run build`. Output: `.next`. Nenhuma variável de ambiente obrigatória na primeira entrega.

## Pontos de atenção / melhorias futuras

- **Imagens:** Use `next/image` para thumbnails em `public/`; para domínios externos, configurar `images.remotePatterns` em `next.config.js`.
- **Conteúdo:** Considerar CMS ou JSON externo para projetos se a lista crescer.
- **i18n / modo escuro:** Deixados para decisão explícita posterior.
