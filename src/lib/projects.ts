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
    caseStudy: {
      context: {
        type: "Landing page / site de apresentação",
        segment: "Saúde mental",
        objective: "Posicionar a profissional com acolhimento e clareza clínica",
        role: "UI/UX, direção visual, arquitetura da informação, copy estratégica e front-end",
        overview:
          "Projeto para psicóloga com foco em psicanálise (14+ e adultos), integrando gamificação como recurso complementar sem perder credibilidade.",
      },
      chapters: [
        {
          id: "problema",
          label: "Problema",
          title: "Dor de percepção e clareza",
          blocks: [
            {
              id: "p1",
              type: "text",
              content:
                "Sites de saúde mental costumam cair entre o excesso de frieza e a abstração. O desafio foi equilibrar acolhimento, objetividade e confiança.",
            },
          ],
        },
        {
          id: "objetivo",
          label: "Objetivo",
          title: "Reduzir barreiras de contato",
          blocks: [
            {
              id: "o1",
              type: "bullets",
              items: [
                "Explicar abordagem clínica com linguagem simples",
                "Transmitir segurança no primeiro contato",
                "Facilitar agendamento por WhatsApp",
              ],
            },
          ],
        },
        {
          id: "ux-ui",
          label: "UX/UI",
          title: "Leitura sensível e escaneável",
          blocks: [
            {
              id: "u1",
              type: "bullets",
              items: [
                "Fluxo em progressão: apresentação, serviços, metodologia e contato",
                "Hierarquia tipográfica para reduzir carga cognitiva",
                "Tom visual acolhedor sem aparência amadora",
              ],
            },
          ],
        },
        {
          id: "solucao",
          label: "Solução",
          title: "Estrutura orientada à confiança",
          blocks: [
            {
              id: "s1",
              type: "bullets",
              items: [
                "Headline mais leve no topo",
                "Explicação da gamificação como recurso clínico complementar",
                "CTAs consistentes em pontos de decisão",
              ],
            },
          ],
        },
        {
          id: "decisoes",
          label: "Decisões",
          title: "Racional de design e conversão",
          blocks: [
            {
              id: "d1",
              type: "tags",
              items: ["Humanização", "Clareza", "Conversão sem pressão", "Mobile-first"],
            },
          ],
        },
        {
          id: "resultado",
          label: "Resultado",
          title: "Base mais forte para posicionamento",
          blocks: [
            {
              id: "r1",
              type: "stats",
              stats: [
                { label: "Entrega", value: "Site institucional responsivo em produção" },
                { label: "Foco", value: "Conversão e credibilidade clínica" },
              ],
            },
          ],
        },
        {
          id: "fechamento",
          label: "Fechamento",
          title: "Design como pré-acolhimento",
          blocks: [
            {
              id: "f1",
              type: "quote",
              content:
                "A interface foi desenhada para informar e, ao mesmo tempo, reduzir ansiedade antes do primeiro contato terapêutico.",
            },
          ],
        },
      ],
      previewTitle: "Preview da experiência",
      previewDescription:
        "Etapa final para navegar o projeto publicado e validar como a narrativa se materializa na interface real.",
    },
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
    caseStudy: {
      context: {
        type: "Landing page institucional",
        segment: "Farmacêutico",
        objective: "Reforçar autoridade e abrir canal comercial",
        role: "UI/UX, direção visual, arquitetura da informação, copy estratégica e front-end",
        overview:
          "Landing institucional para comunicar inovação e capacidade técnica em um setor de alta exigência regulatória.",
      },
      chapters: [
        {
          id: "problema",
          label: "Problema",
          title: "Confiança exige estrutura",
          blocks: [
            {
              id: "p1",
              type: "text",
              content:
                "No contexto farmacêutico, discurso sem organização não sustenta autoridade. Era necessário apresentar robustez com leitura objetiva.",
            },
          ],
        },
        {
          id: "objetivo",
          label: "Objetivo",
          title: "Posicionamento institucional forte",
          blocks: [
            {
              id: "o1",
              type: "bullets",
              items: [
                "Evidenciar competência técnica",
                "Fortalecer percepção de inovação",
                "Gerar oportunidades de parceria",
              ],
            },
          ],
        },
        {
          id: "ux-ui",
          label: "UX/UI",
          title: "Credibilidade com escaneabilidade",
          blocks: [
            {
              id: "u1",
              type: "tags",
              items: ["Clareza institucional", "Leitura progressiva", "Estética setorial"],
            },
          ],
        },
        {
          id: "solucao",
          label: "Solução",
          title: "Narrativa institucional progressiva",
          blocks: [
            {
              id: "s1",
              type: "bullets",
              items: [
                "Hero com proposta de valor imediata",
                "Blocos sobre tecnologia, equipe, pesquisa e qualidade",
                "Área de contato preparada para relacionamento B2B",
              ],
            },
          ],
        },
        {
          id: "resultado",
          label: "Resultado",
          title: "Presença digital mais robusta",
          blocks: [
            {
              id: "r1",
              type: "stats",
              stats: [
                { label: "Entrega", value: "Landing corporativa publicada" },
                { label: "Objetivo", value: "Credibilidade + geração de contato" },
              ],
            },
          ],
        },
      ],
      previewTitle: "Preview institucional",
      previewDescription:
        "Visualização da landing publicada para validar hierarquia, narrativa e pontos de contato comercial.",
    },
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
    caseStudy: {
      context: {
        type: "Revamp de site institucional",
        segment: "Impressão técnica para indústrias reguladas",
        objective: "Comunicar conformidade, especialização e clareza comercial",
        role: "UI/UX, direção visual, arquitetura da informação, copy estratégica e front-end",
        overview:
          "Reposicionamento digital da OFAG para alinhar imagem online à maturidade operacional de um negócio técnico.",
      },
      chapters: [
        {
          id: "problema",
          label: "Problema",
          title: "Capacidade alta, percepção baixa",
          blocks: [
            {
              id: "p1",
              type: "text",
              content:
                "A operação tinha robustez, mas o site não traduzia a autoridade necessária para mercados regulados e decisões industriais.",
            },
          ],
        },
        {
          id: "objetivo",
          label: "Objetivo",
          title: "Transformar presença em ativo comercial",
          blocks: [
            {
              id: "o1",
              type: "bullets",
              items: [
                "Aumentar percepção de confiabilidade",
                "Evidenciar rastreabilidade e controle de qualidade",
                "Apoiar contato comercial com menos fricção",
              ],
            },
          ],
        },
        {
          id: "ux-ui",
          label: "UX/UI",
          title: "Lógica de confiança em setores regulados",
          blocks: [
            {
              id: "u1",
              type: "bullets",
              items: [
                "Proposta de valor clara no primeiro bloco",
                "Progressão: processo, segmentos, qualidade, certificações e contato",
                "Linguagem visual institucional limpa e técnica",
              ],
            },
          ],
        },
        {
          id: "solucao",
          label: "Solução",
          title: "Arquitetura orientada a autoridade",
          blocks: [
            {
              id: "s1",
              type: "tags",
              items: ["Credibilidade visual", "Números e provas", "CTAs distribuídos", "Escaneabilidade"],
            },
          ],
        },
        {
          id: "resultado",
          label: "Resultado",
          title: "Imagem mais alinhada ao nível técnico",
          blocks: [
            {
              id: "r1",
              type: "stats",
              stats: [
                { label: "Escopo", value: "Site institucional multilíngue" },
                { label: "Público", value: "Farmacêutico e regulado" },
              ],
            },
          ],
        },
        {
          id: "fechamento",
          label: "Fechamento",
          title: "Modernização com intenção estratégica",
          blocks: [
            {
              id: "f1",
              type: "quote",
              content:
                "O foco foi construir uma presença digital capaz de representar a seriedade do negócio, não apenas atualizar estética.",
            },
          ],
        },
      ],
      previewTitle: "Preview do revamp",
      previewDescription:
        "Navegue pela versão publicada para ver como conteúdo técnico e clareza comercial convivem na interface.",
    },
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
    caseStudy: {
      context: {
        type: "Site institucional",
        segment: "Clínica de saúde integrada",
        objective: "Unificar múltiplas especialidades com acolhimento e clareza",
        role: "UI/UX, direção visual, arquitetura da informação, copy estratégica e front-end",
        overview:
          "Projeto para clínica multidisciplinar com foco em neurodivergência e terapia assistida por cão.",
      },
      chapters: [
        {
          id: "problema",
          label: "Problema",
          title: "Risco de fragmentação da mensagem",
          blocks: [
            {
              id: "p1",
              type: "text",
              content:
                "Com muitas especialidades, havia risco de comunicação genérica e confusa, perdendo unidade de marca e orientação ao paciente.",
            },
          ],
        },
        {
          id: "objetivo",
          label: "Objetivo",
          title: "Cuidado integrado com decisão rápida",
          blocks: [
            {
              id: "o1",
              type: "bullets",
              items: [
                "Explicar áreas de atuação sem ruído",
                "Reforçar acolhimento familiar",
                "Facilitar identificação do atendimento ideal",
              ],
            },
          ],
        },
        {
          id: "ux-ui",
          label: "UX/UI",
          title: "Equilíbrio entre leveza e organização",
          blocks: [
            {
              id: "u1",
              type: "tags",
              items: ["Confiança", "Acolhimento", "Escaneabilidade", "Navegação simples"],
            },
          ],
        },
        {
          id: "solucao",
          label: "Solução",
          title: "Estrutura clara por frentes de cuidado",
          blocks: [
            {
              id: "s1",
              type: "bullets",
              items: [
                "Apresentação objetiva das especialidades",
                "Destaque para neurodivergência e terapia assistida por cão",
                "Linguagem visual acessível com jornada de contato humanizada",
              ],
            },
          ],
        },
        {
          id: "resultado",
          label: "Resultado",
          title: "Complexidade traduzida em clareza",
          blocks: [
            {
              id: "r1",
              type: "stats",
              stats: [
                { label: "Entrega", value: "Landing multidisciplinar responsiva" },
                { label: "Experiência", value: "Mobile-first para famílias" },
              ],
            },
          ],
        },
      ],
      previewTitle: "Preview da clínica",
      previewDescription:
        "Veja a implementação final com foco em escaneabilidade, acolhimento e navegação orientada à tomada de decisão.",
    },
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
