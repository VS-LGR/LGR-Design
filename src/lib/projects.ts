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
    deliveryType: "lp-institucional",
    slug: "psi-bia-rossi",
    description:
      "Site institucional para psicóloga em psicanálise: metodologia, serviços, depoimentos e contato — com foco em confiança e conversão para agendamento.",
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
    deliveryType: "lp-institucional",
    slug: "lp-farma-com",
    description:
      "Landing institucional da Pharmatech: posicionamento em tecnologia farmacêutica, especializações, credibilidade e CTA de contato comercial.",
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
    deliveryType: "lp-institucional",
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
    title: "QualiProc",
    category: "web",
    topic: "empresas",
    deliveryType: "sistema",
    slug: "qualiproc-ctli",
    description:
      "Plataforma SaaS multi-tenant de gestão da qualidade para laboratórios de calibração — documentos, coleta, certificados, pessoal e operações comerciais alinhados à ISO/IEC 17025.",
    developmentExplanation:
      "SPA React com backend Supabase (Auth, PostgreSQL, Storage, RLS e Edge Functions), deploy em Vercel. Inclui exportações PDF/DOCX, backup por tenant e governança com papéis e isolamento multi-tenant — titularidade CTLI, marca comercial QualiProc.",
    keyStages: [
      {
        title: "SGQ laboratorial centralizado",
        description:
          "Hub de requisitos, documentos controlados, Lista Mestra e fluxos de campo/certificação num único ambiente autenticado.",
      },
      {
        title: "Multi-tenant e governança",
        description:
          "Isolamento por ambiente (cliente), papéis de acesso, trilhas de auditoria em operações sensíveis e administração CTLI.",
      },
      {
        title: "Operação e continuidade",
        description:
          "Dashboard com atalhos e indicadores, avisos de vencimento, backup sob demanda/periódico e onboarding por módulo.",
      },
    ],
    thumbnail: "/img/qualiproc/dashboard-sidebar.png",
    link: "https://ctli-sistema.vercel.app/login",
    caseStudy: {
      context: {
        type: "Plataforma SaaS multi-tenant / SGQ laboratorial",
        segment: "Laboratórios de calibração · ISO/IEC 17025",
        objective:
          "Centralizar documentos, coleta, certificados, pessoal e operações comerciais com rastreabilidade e controlo de acesso",
        role: "UI/UX, arquitetura da informação, direção visual e front-end",
        overview:
          "QualiProc (powered by CTLI) é uma plataforma SaaS multi-tenant de gestão da qualidade para laboratórios de calibração: documentos, coleta, certificados, pessoal e operações comerciais num só sistema, com controlo de acesso, backup e governança alinhada a ISO 17025. A marca comercial é QualiProc; a titularidade do software é da CTLI.",
      },
      gallery: [
        {
          src: "/img/qualiproc/dashboard-sidebar.png",
          caption: "Dashboard com navegação por requisitos e hub de atalhos operacionais",
          alt: "Dashboard QualiProc com sidebar e atalhos",
        },
        {
          src: "/img/qualiproc/dashboard-hub.png",
          caption: "Hub de atalhos: comercial, coleta, certificados, pessoal e cadastros",
          alt: "Hub de atalhos do dashboard QualiProc",
        },
        {
          src: "/img/qualiproc/indicadores.png",
          caption: "Indicadores mensais e avisos de vencimento de padrões e instrumentos",
          alt: "Painel de indicadores e avisos de vencimento",
        },
        {
          src: "/img/qualiproc/lista-mestra-alteracoes.png",
          caption: "Últimas alterações na Lista Mestra — rastreabilidade documental",
          alt: "Feed de alterações da Lista Mestra",
        },
        {
          src: "/img/qualiproc/documentos-lembretes.png",
          caption: "Documentos recentes, marcados e lembretes do ambiente",
          alt: "Documentos recentes e lembretes no QualiProc",
        },
        {
          src: "/img/qualiproc/ambientes-admin.png",
          caption: "Administração CTLI de ambientes (clientes) com dados isolados por tenant",
          alt: "Gestão de ambientes multi-tenant no QualiProc",
        },
      ],
      chapters: [
        {
          id: "problema",
          label: "Problema",
          title: "Qualidade espalhada, difícil de auditar",
          blocks: [
            {
              id: "p1",
              type: "text",
              content:
                "Laboratórios de calibração precisam reunir procedimentos, registros, coleta de campo, certificados, documentos controlados, pessoal e fluxos comerciais sem perder rastreabilidade nem conformidade com ISO/IEC 17025.",
            },
            {
              id: "p2",
              type: "bullets",
              items: [
                "Processos e evidências fragmentados entre ferramentas e planilhas",
                "Controlo de acesso e papéis pouco claros para gestão, campo e portal",
                "Dificuldade em manter Lista Mestra, versionamento e alertas operacionais",
              ],
            },
          ],
        },
        {
          id: "solucao",
          label: "Solução",
          title: "Um SGQ autenticado, modular e multi-tenant",
          blocks: [
            {
              id: "s1",
              type: "text",
              content:
                "QualiProc concentra a operação de qualidade num SPA multi-tenant: cada ambiente (cliente) tem dados, branding e utilizadores isolados.",
            },
            {
              id: "s2",
              type: "bullets",
              title: "Módulos principais",
              items: [
                "Navegação por requisitos e hub documental alinhado ao SGQ",
                "Documentos controlados / Lista Mestra com editor e versionamento operacional",
                "Coleta de campo, certificados, pessoal/competência e cadastros de suporte",
                "Comercial (propostas, pedidos, orçamentos) e dashboard com atalhos/lembretes",
                "Backup e recuperação por tenant; ajuda/tutoriais por módulo e perfil",
              ],
            },
          ],
        },
        {
          id: "arquitetura",
          label: "Stack",
          title: "Arquitetura de produto (alto nível)",
          blocks: [
            {
              id: "a1",
              type: "tags",
              items: [
                "React SPA",
                "React Router",
                "Tailwind / Radix",
                "Supabase",
                "Vercel",
                "PDF / DOCX",
              ],
            },
            {
              id: "a2",
              type: "bullets",
              items: [
                "Frontend React com componentes próprios e UI Radix/Tailwind",
                "Supabase: PostgreSQL, Auth, Storage, RLS e Edge Functions",
                "Exportações PDF institucionais e editor DOCX para procedimentos/registros",
                "Backup por tenant (integridade, dry-run e restore com confirmação) + continuidade da plataforma",
              ],
            },
          ],
        },
        {
          id: "governanca",
          label: "Governança",
          title: "Segurança e responsabilidade sem expor IP",
          blocks: [
            {
              id: "g1",
              type: "bullets",
              items: [
                "Autenticação por conta e papéis distintos (admin CTLI, qualidade, campo, portal)",
                "Isolamento por tenant e políticas de acesso (RLS / gates de módulo)",
                "Trilhas de auditoria em operações sensíveis (ex.: backup/restore)",
                "EULA e licença proprietária com direitos reservados à CTLI",
                "Abordagem compatível com boas práticas CSV/BPx quando o impacto em qualidade/dados o exige — sem expor protocolos internos",
              ],
            },
          ],
        },
        {
          id: "resultado",
          label: "Resultado",
          title: "Operação de qualidade num único ambiente",
          blocks: [
            {
              id: "r1",
              type: "stats",
              stats: [
                { label: "Modelo", value: "SaaS multi-tenant" },
                { label: "Norma", value: "ISO/IEC 17025" },
                { label: "Escopo", value: "SGQ + campo + comercial" },
                { label: "Titularidade", value: "CTLI · marca QualiProc" },
              ],
            },
            {
              id: "r2",
              type: "quote",
              content:
                "Um sistema para documentos, coleta, certificados, pessoal e operação comercial — com governança alinhada à realidade de laboratórios acreditados.",
            },
          ],
        },
      ],
      previewTitle: "Preview do QualiProc",
      previewDescription:
        "Tela de login do ambiente autenticado (sistema fechado). O preview ilustra a entrada da plataforma — sem expor dados operacionais reais.",
    },
    caseProblem:
      "Centralizar SGQ laboratorial — documentos, coleta, certificados, pessoal e comercial — com rastreabilidade e isolamento multi-tenant sob ISO/IEC 17025.",
    caseSolution:
      "SPA QualiProc (CTLI) com módulos de qualidade, hub operacional, indicadores, Lista Mestra, administração de ambientes e backup por tenant.",
    caseResults: [
      { label: "Modelo", value: "SaaS multi-tenant" },
      { label: "Norma", value: "ISO/IEC 17025" },
    ],
  },
  {
    id: "clinica-dverso",
    title: "Clínica Dverso",
    category: "web",
    topic: "saude",
    deliveryType: "lp-institucional",
    slug: "clinica-dverso",
    description:
      "Landing para a Clínica Dverso (núcleo terapêutico em Sorocaba): conversão, microinterações e acessibilidade com VLibras.",
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
