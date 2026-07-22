import type { DesignProcessContent } from "@/types";

export const designProcessPt: DesignProcessContent = {
  intro:
    "Adapto profundidade e ritmo ao tempo disponível e ao tipo de problema. O arcabouço abaixo é referência — fases podem ser enxutas ou aprofundadas conforme a iniciativa.",
  phases: [
    {
      id: 1,
      title: "Discovery",
      subtitle: "Preparatório",
      deliverables: [
        "Matriz de influência",
        "NPS / CSAT",
        "Churn e sinais de saúde do produto",
      ],
    },
    {
      id: 2,
      title: "Benchmarking",
      deliverables: [
        "Matriz competitiva",
        "Mapa de experiência",
        "Mapa de empatia",
        "Service blueprint",
        "Fluxograma de jornada",
      ],
    },
    {
      id: 3,
      title: "Pesquisa quantitativa",
      subtitle: "Exploratória",
      deliverables: [
        "CSAT",
        "Distribuição de pesquisa por personas",
        "Jobs to be Done (JTBD)",
      ],
    },
    {
      id: 4,
      title: "Ideação",
      deliverables: ["Brainstorming estruturado", "Workshops com stakeholders"],
    },
    {
      id: 5,
      title: "Protótipo",
      deliverables: [
        "Critérios de acessibilidade (WCAG) como requisito",
        "Design development-ready",
        "Sessões de design critique",
      ],
    },
    {
      id: 6,
      title: "Teste de UX",
      subtitle: "Conceito",
      deliverables: [
        "Testes A/B quando aplicável",
        "Entrevistas com observação (sala espelho / gravação)",
      ],
    },
    {
      id: 7,
      title: "Teste de UX",
      subtitle: "Quantitativo",
      deliverables: [
        "System Usability Scale (SUS)",
        "Heatmaps e mapas de clique",
        "Duração média em tarefas",
        "Feedbacks abertos categorizados",
      ],
    },
    {
      id: 8,
      title: "QA de design",
      deliverables: [
        "Handoff alinhado com desenvolvimento",
        "Refinamento de interface e estados",
      ],
    },
    {
      id: 9,
      title: "Piloto",
      deliverables: [
        "Avaliação transacional",
        "CSAT e CES no piloto",
        "Heatmaps de uso real",
      ],
    },
    {
      id: 10,
      title: "Roll-out",
      deliverables: [
        "% de tempo ativo / adoção",
        "LTV e retenção (quando houver base)",
        "Métricas de negócio combinadas com o time",
      ],
    },
  ],
  workModelsSectionTitle: "Modelos de trabalho conforme incerteza",
  workModelsSectionIntro:
    "Para ganhar eficiência, combino três modos de atuação conforme o quanto já sabemos sobre problema e mercado:",
  workModels: [
    {
      id: "solutions",
      title: "Explorando soluções",
      context: "Já conhecemos bem os problemas",
      description:
        "Foco em alternativas de interface, fluxos e entrega: critérios claros, prototipação e validação rápida com usuários e time técnico.",
    },
    {
      id: "hypotheses",
      title: "Explorando hipóteses",
      context: "Ainda desconhecemos totalmente os problemas",
      description:
        "Mais discovery e pesquisa: entrevistas, dados existentes e framing do problema antes de investir pesado em UI.",
    },
    {
      id: "ansoff",
      title: "Matriz de Ansoff (visão de portfólio)",
      context: "Decisão de crescimento / tipo de iniciativa",
      description:
        "Cruzo o que é novo ou conhecido para a empresa e para o mercado para calibrar risco, escopo de MVP e expectativa de aprendizado.",
    },
  ],
  ansoffSectionTitle: "Ansoff como apoio à decisão",
  ansoffSectionIntro:
    "Uso a lógica produto existente × mercado existente apenas como mapa mental para conversar priorização — não como fórmula rígida.",
  ansoffQuadrants: [
    "Penetração de mercado (conhecido / conhecido)",
    "Desenvolvimento de mercado (conhecido / novo)",
    "Desenvolvimento de produto (novo / conhecido)",
    "Diversificação (novo / novo)",
  ],
};
