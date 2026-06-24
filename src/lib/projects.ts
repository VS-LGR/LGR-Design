import type { Project, ProjectCategory, ProjectTopic } from "@/types";
import PharmatechThumb from "@/components/Pharmatech.png";
import OfagThumb from "@/components/Ofag.png";

export const projectCategories: { id: ProjectCategory; label: string }[] = [
  { id: "web", label: "Web" },
  { id: "ux", label: "UX/UI" },
  { id: "identity", label: "Identidade Visual" },
  { id: "other", label: "Outros" },
];

export const projectTopics: { id: ProjectTopic; label: string }[] = [
  { id: "saude", label: "Saúde" },
  { id: "empresas", label: "Empresas" },
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
    thumbnail: "/img/Screenshot 2026-06-24 133205.png",
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
    id: "qualiproc-ctli",
    title: "QualiProc — CTLI",
    category: "web",
    topic: "empresas",
    slug: "qualiproc-ctli",
    description:
      "Sistema completo de gestão da qualidade metrológica para laboratórios, com cadastro de agentes de campo, documentos ISO 17025, certificados e coleta de calibração — web e mobile.",
    developmentExplanation:
      "Produção integral da plataforma QualiProc (powered by CTLI) voltada à NBR ISO 17025: gestão documental com edição e upload de arquivos Word, Lista Mestra, procedimentos e registros, emissão de certificados, coleta de dados de calibração em campo e fluxo de cadastro de agentes. Interface responsiva e acessível para uso web e mobile em operações de qualidade e metrologia.",
    keyStages: [
      {
        title: "Gestão documental ISO 17025",
        description:
          "Estruturei procedimentos, registros, normas controladas e análise crítica em módulos alinhados aos requisitos da NBR ISO 17025, com edição e upload de documentos Word.",
      },
      {
        title: "Operação em campo e certificação",
        description:
          "Desenvolvi o cadastro de agentes de campo, coleta de dados de calibração e emissão de certificados integrados ao fluxo de qualidade do laboratório.",
      },
      {
        title: "Experiência web e mobile acessível",
        description:
          "Projetei a interface para uso contínuo em desktop e dispositivos móveis, priorizando escaneabilidade, clareza operacional e acessibilidade nas rotinas de auditoria e controle.",
      },
    ],
    thumbnail: "/img/Qualiproc CTLI.png",
    link: "https://ctli-sistema.vercel.app/login",
    caseStudy: {
      context: {
        type: "Sistema de gestão da qualidade",
        segment: "Metrologia e laboratórios acreditados",
        objective: "Centralizar qualidade metrológica conforme NBR ISO 17025",
        role: "UI/UX, arquitetura da informação, direção visual e front-end",
        overview:
          "Plataforma QualiProc para CTLI — gestão documental, certificados, calibração e agentes de campo em um único ambiente regulatório.",
      },
      chapters: [
        {
          id: "problema",
          label: "Problema",
          title: "Qualidade fragmentada e difícil de rastrear",
          blocks: [
            {
              id: "p1",
              type: "text",
              content:
                "Laboratórios acreditados precisam controlar documentos, calibrações, certificados e equipes de campo sem perder rastreabilidade nem conformidade com a NBR ISO 17025.",
            },
          ],
        },
        {
          id: "objetivo",
          label: "Objetivo",
          title: "Qualidade metrológica em um só lugar",
          blocks: [
            {
              id: "o1",
              type: "bullets",
              items: [
                "Unificar gestão documental e operação de campo",
                "Garantir aderência aos requisitos ISO 17025",
                "Agilizar emissão de certificados e coleta de calibração",
              ],
            },
          ],
        },
        {
          id: "ux-ui",
          label: "UX/UI",
          title: "Sistema operacional, claro e acessível",
          blocks: [
            {
              id: "u1",
              type: "tags",
              items: ["Web + mobile", "Acessibilidade", "Fluxos por perfil", "Conformidade"],
            },
          ],
        },
        {
          id: "solucao",
          label: "Solução",
          title: "Plataforma completa para qualidade metrológica",
          blocks: [
            {
              id: "s1",
              type: "bullets",
              items: [
                "Cadastro de agentes de campo e coleta de dados de calibração",
                "Edição e upload de arquivos Word com gestão de procedimentos e registros",
                "Emissão de certificados, Lista Mestra e controles alinhados à NBR ISO 17025",
              ],
            },
          ],
        },
        {
          id: "resultado",
          label: "Resultado",
          title: "Operação de qualidade centralizada",
          blocks: [
            {
              id: "r1",
              type: "stats",
              stats: [
                { label: "Entrega", value: "Sistema web e mobile completo" },
                { label: "Norma", value: "NBR ISO 17025" },
              ],
            },
          ],
        },
      ],
      previewTitle: "Preview do QualiProc",
      previewDescription:
        "Acesso à tela de login do sistema (ambiente fechado). O preview ilustra a interface de entrada da plataforma de gestão ISO 17025.",
    },
    caseProblem:
      "Centralizar gestão da qualidade metrológica — documentos, calibrações, certificados e agentes de campo — em conformidade com a NBR ISO 17025, com uso fluido em web e mobile.",
    caseSolution:
      "Sistema completo com cadastro de agentes, edição e upload de Word, Lista Mestra, emissão de certificados, coleta de calibração e módulos de qualidade estruturados por requisito da norma.",
    caseResults: [
      {
        label: "Entrega",
        value: "Sistema web e mobile completo",
      },
      {
        label: "Norma",
        value: "NBR ISO 17025",
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
      "Página acolhedora para a Clínica Dverso — núcleo terapêutico multidisciplinar em Sorocaba — com foco em conversão, microinterações e acessibilidade via VLibras.",
    developmentExplanation:
      "Desenvolvi uma landing acolhedora e orientada à conversão, reunindo psicologia, neurodivergência, psicoterapia musical, nutrição e terapia assistida por cão em blocos claros. Microinterações com Lottie dão vida às seções sem prejudicar a performance, CTAs estratégicos conduzem ao contato e a integração com VLibras reforça inclusão e confiança na jornada.",
    keyStages: [
      {
        title: "Página acolhedora com foco em conversão",
        description:
          "Estruturei a narrativa para transmitir cuidado e proximidade, com CTAs bem posicionados que facilitam o primeiro contato de famílias e responsáveis.",
      },
      {
        title: "Microinterações e experiência fluida",
        description:
          "Utilizei animações Lottie leves para humanizar a leitura, guiar a atenção e reforçar momentos de decisão sem comprometer clareza nem velocidade.",
      },
      {
        title: "Acessibilidade com VLibras",
        description:
          "Integrei o widget VLibras para ampliar o acesso em Libras, alinhando inclusão, credibilidade institucional e uma experiência mais acolhedora para todos os públicos.",
      },
    ],
    thumbnail: "/img/Dverso.png",
    link: "https://dversos-clinica.vercel.app",
    caseStudy: {
      context: {
        type: "Site institucional",
        segment: "Clínica de saúde integrada",
        objective: "Converter visitantes em contatos com acolhimento, clareza e inclusão",
        role: "UI/UX, direção visual, arquitetura da informação, copy estratégica e front-end",
        overview:
          "Página institucional para clínica multidisciplinar, equilibrando tom acolhedor, microinterações e acessibilidade com VLibras.",
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
          title: "Acolhimento que conduz à ação",
          blocks: [
            {
              id: "o1",
              type: "bullets",
              items: [
                "Transmitir proximidade sem perder objetividade",
                "Orientar famílias com linguagem clara e humana",
                "Converter interesse em contato com CTAs estratégicos",
              ],
            },
          ],
        },
        {
          id: "ux-ui",
          label: "UX/UI",
          title: "Microinterações com propósito",
          blocks: [
            {
              id: "u1",
              type: "tags",
              items: ["Conversão", "Acolhimento", "Microinterações", "VLibras"],
            },
          ],
        },
        {
          id: "solucao",
          label: "Solução",
          title: "Experiência acolhedora, inclusiva e orientada à conversão",
          blocks: [
            {
              id: "s1",
              type: "bullets",
              items: [
                "Landing com tom humano e blocos escaneáveis por especialidade",
                "Microinterações em Lottie para guiar atenção e reforçar confiança",
                "Integração com VLibras e CTAs distribuídos nos momentos de decisão",
              ],
            },
          ],
        },
        {
          id: "resultado",
          label: "Resultado",
          title: "Cuidado traduzido em clareza e conversão",
          blocks: [
            {
              id: "r1",
              type: "stats",
              stats: [
                { label: "Entrega", value: "Landing acolhedora e responsiva" },
                { label: "Diferenciais", value: "Microinterações + VLibras" },
              ],
            },
          ],
        },
      ],
      previewTitle: "Preview da clínica",
      previewDescription:
        "Veja a página final com foco em conversão, microinterações leves e acessibilidade com VLibras.",
    },
    caseProblem:
      "Criar uma página acolhedora para múltiplas linhas de cuidado, capaz de converter visitantes em contato no mobile, sem abrir mão de inclusão e clareza.",
    caseSolution:
      "Landing orientada à conversão com microinterações Lottie, CTAs nos pontos certos da jornada e integração com VLibras para ampliar acessibilidade em Libras.",
    caseResults: [
      {
        label: "Entrega",
        value: "Landing acolhedora e responsiva",
      },
      {
        label: "Diferenciais",
        value: "Microinterações + VLibras",
      },
    ],
  },
];
