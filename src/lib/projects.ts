import type { Project, ProjectCategory, ProjectTopic } from "@/types";
import PsiBiaRossiThumb from "@/components/PsiBiaRossi.png";
import PharmatechThumb from "@/components/Pharmatech.png";
import OfagThumb from "@/components/Ofag.png";
import ClinaDversoThumb from "@/components/ClinaDverso.png";

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
    keyStages: [
      {
        title: "Diagnóstico de mensagem",
        description:
          "Estruturei a proposta de valor da profissional para facilitar compreensão rápida de especialidades, abordagem e diferenciais.",
      },
      {
        title: "Arquitetura da conversão",
        description:
          "Organizei a página em blocos de confiança (serviços, provas sociais e método) para reduzir fricção até o contato.",
      },
      {
        title: "CTA e contato orientados a ação",
        description:
          "Priorizei pontos de contato visíveis e consistentes para aumentar a taxa de agendamento e reduzir abandono.",
      },
    ],
    thumbnail: PsiBiaRossiThumb,
    link: "https://psi-bia-rossi.vercel.app",
    caseProblem:
      "Transmitir de forma clara a abordagem em psicanálise e o diferencial da gamificação com jogos de tabuleiro, gerando confiança e conversão para contato — sem sobrecarregar visitantes leigos.",
    caseSolution:
      "Landing com hierarquia para serviços e depoimentos, bloco dedicado à metodologia lúdica, formulário e CTAs consistentes em toda a página, com foco mobile-first para quem busca apoio em momentos delicados.",
    caseResults: [
      {
        label: "Entrega",
        value: "Site institucional responsivo em produção",
      },
      {
        label: "Foco",
        value: "Conversão e credibilidade clínica",
      },
    ],
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
    keyStages: [
      {
        title: "Estratégia institucional",
        description:
          "Defini um fluxo de leitura corporativo para apresentar posicionamento técnico e reforçar credibilidade da marca.",
      },
      {
        title: "Segmentação por especialidades",
        description:
          "Separei áreas de atuação e competências em seções claras para facilitar leitura de decisores e parceiros.",
      },
      {
        title: "Conversão comercial",
        description:
          "Estruturei CTAs de contato e orçamento para transformar interesse em oportunidade de relacionamento comercial.",
      },
    ],
    thumbnail: PharmatechThumb,
    link: "https://lp-farma-com.vercel.app",
    caseProblem:
      "Apresentar uma empresa de desenvolvimento farmacêutico com linguagem técnica e ao mesmo tempo acessível a parceiros e decisores, em uma única página que vende confiança e abre canal comercial.",
    caseSolution:
      "Arquitetura em seções institucionais (empresa, especializações, parceiros, contato), leitura escaneável para executivos e CTAs de orçamento/contato alinhados ao funil B2B.",
    caseResults: [
      {
        label: "Entrega",
        value: "Landing corporativa publicada",
      },
      {
        label: "Objetivo",
        value: "Credibilidade + geração de contato",
      },
    ],
  },
  {
    id: "ofag-revamp",
    title: "OFAG — Technical Printing",
    category: "web",
    topic: "empresas",
    slug: "ofag-revamp",
    description:
      "Site institucional para a OFAG, indústria gráfica especializada em impressão técnica para mercados regulados, com conteúdo em português, inglês e espanhol.",
    developmentExplanation:
      "Projeto voltado para o segmento farmacêutico e indústrias reguladas, com arquitetura de informação clara, navegação em múltiplos idiomas (PT/EN/ES) e foco em credibilidade. Destaque para processos, certificações e segmentos atendidos, com layout responsivo e tipografia orientada à leitura de conteúdo técnico.",
    keyStages: [
      {
        title: "Arquitetura multilíngue",
        description:
          "Planejei a estrutura para suportar PT/EN/ES sem perda de contexto, mantendo consistência de navegação entre idiomas.",
      },
      {
        title: "Narrativa de conformidade",
        description:
          "Organizei conteúdos de processos, qualidade e certificações para comunicar segurança regulatória de forma objetiva.",
      },
      {
        title: "Escalabilidade institucional",
        description:
          "Projetei seções reutilizáveis para crescimento de conteúdo corporativo mantendo legibilidade e padrão visual.",
      },
    ],
    thumbnail: OfagThumb,
    link: "https://ofag-revamp.vercel.app/pt",
    caseProblem:
      "Comunicar processos, conformidade e alcance internacional para indústrias reguladas, em três idiomas, sem perder clareza nem consistência de marca.",
    caseSolution:
      "Arquitetura de informação multilíngue (PT/EN/ES), narrativa orientada a certificações e segmentos, tipografia e layout pensados para leitura de conteúdo técnico denso.",
    caseResults: [
      {
        label: "Escopo",
        value: "Site institucional multilíngue",
      },
      {
        label: "Público",
        value: "Farmacêutico e regulado",
      },
    ],
  },
  {
    id: "clinica-dverso",
    title: "Clínica Dverso",
    category: "web",
    topic: "saude",
    slug: "clinica-dverso",
    description:
      "Site da Clínica Dverso, clínica multidisciplinar focada em saúde integrada, neurodivergência e terapia assistida por cão em Sorocaba.",
    developmentExplanation:
      "Landing page com múltiplas especialidades (psicologia, neurodivergência, psicoterapia musical, nutrição e terapia assistida por cão), utilizando animações em Lottie para dar vida às seções sem comprometer performance. Organização em blocos claros, CTAs bem definidos e experiência responsiva pensada para famílias acessando via mobile.",
    keyStages: [
      {
        title: "Mapeamento de especialidades",
        description:
          "Estruturei cada área clínica em módulos independentes para facilitar descoberta de serviços por famílias e responsáveis.",
      },
      {
        title: "Microinterações com Lottie",
        description:
          "Utilizei animações leves para enriquecer a experiência sem comprometer clareza, foco de leitura e usabilidade.",
      },
      {
        title: "Jornada de contato humanizada",
        description:
          "Distribuí CTAs de conversa e agendamento em pontos de decisão para reduzir barreiras de primeiro contato.",
      },
    ],
    thumbnail: ClinaDversoThumb,
    link: "https://dversos-clinica.vercel.app",
    caseProblem:
      "Organizar várias linhas de cuidado (neurodivergência, terapias, nutrição, terapia assistida por cão) para famílias que buscam informação rápida no celular, com tom acolhedor.",
    caseSolution:
      "Módulos por especialidade, animações Lottie leves para humanizar sem pesar na performance, CTAs de contato distribuídos nos momentos de decisão da jornada.",
    caseResults: [
      {
        label: "Entrega",
        value: "Landing multidisciplinar responsiva",
      },
      {
        label: "Experiência",
        value: "Mobile-first para famílias",
      },
    ],
  },
];
