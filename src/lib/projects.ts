import type { Project, ProjectCategory, ProjectTopic } from "@/types";

export const projectCategories: { id: ProjectCategory; label: string }[] = [
  { id: "web", label: "Web" },
  { id: "ux", label: "UX/UI" },
  { id: "identity", label: "Identidade Visual" },
  { id: "other", label: "Outros" },
];

export const projectTopics: { id: ProjectTopic; label: string }[] = [
  { id: "saude", label: "Saúde" },
  { id: "negocios", label: "Negócios" },
  { id: "empresas", label: "Empresas" },
  { id: "recreativos", label: "Recreativos" },
];

export const projectsList: Project[] = [
  {
    id: "psi-bia-rossi",
    title: "Psi Bia Rossi",
    category: "web",
    topic: "saude",
    slug: "psi-bia-rossi",
    description:
      "Site institucional para psicóloga especializada em psicanálise com gamificação através de jogos de tabuleiro. Apresenta metodologia, serviços, depoimentos e formulário de contato.",
    developmentExplanation:
      "Landing page com foco em conversão e credibilidade: hierarquia visual para serviços e depoimentos, seção de gamificação explicando a metodologia em etapas, e área de contato integrada. Layout responsivo e navegação clara para destacar o diferencial da profissional.",
    link: "https://psi-bia-rossi.vercel.app",
  },
  {
    id: "lp-farma",
    title: "Pharmatech",
    category: "web",
    topic: "empresas",
    slug: "lp-farma-com",
    description:
      "Landing page da Pharmatech: empresa de desenvolvimento farmacêutico com foco em tecnologia, pesquisa e parcerias. Seções sobre a empresa, especializações, fundador e contato.",
    developmentExplanation:
      "Página de apresentação corporativa com estrutura em seções (Sobre, Especializações, Parceiros, Contato). Conteúdo pensado para transmitir credibilidade e inovação, com destaque para diferenciais e call-to-action de contato.",
    link: "https://lp-farma-com.vercel.app",
  },
  {
    id: "lp-civil",
    title: "ConstruWork",
    category: "web",
    topic: "negocios",
    slug: "lp-civil",
    description:
      "Site da ConstruWork: mais de 15 anos em construção civil. Apresenta história, valores, portfólio de trabalhos (residencial, comercial, industrial) e formulário para orçamento.",
    developmentExplanation:
      "Landing page para empresa de construção civil com ênfase em portfólio e orçamento. Grid de projetos por tipo (residencial, comercial, saúde etc.), métricas de experiência e área de contato para captação de leads.",
    link: "https://lp-civil.vercel.app",
  },
];
