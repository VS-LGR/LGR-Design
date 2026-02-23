import type { Project, ProjectCategory } from "@/types";

export const projectCategories: { id: ProjectCategory; label: string }[] = [
  { id: "web", label: "Web" },
  { id: "ux", label: "UX/UI" },
  { id: "identity", label: "Identidade Visual" },
  { id: "other", label: "Outros" },
];

export const projectsList: Project[] = [
  {
    id: "1",
    title: "[Placeholder: Nome do projeto]",
    category: "web",
    slug: "projeto-exemplo",
    description: "[Placeholder: descrição curta do projeto e do site.]",
    developmentExplanation:
      "[Placeholder: explique aqui o desenvolvimento — stack, decisões de UX, desafios técnicos, resultado.]",
    link: "#",
  },
  {
    id: "2",
    title: "[Placeholder: Outro projeto]",
    category: "ux",
    slug: "projeto-ux",
    description: "[Placeholder: descrição.]",
    developmentExplanation:
      "[Placeholder: explicação do desenvolvimento deste site/projeto.]",
    link: "#",
  },
];
