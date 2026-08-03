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
    cardCategories: ["UX/UI","Conversão","Gamificação"],
    cardRole: "UX/UI · Copy · Front-end",
    slug: "psi-bia-rossi",
    description:
      "Uma experiência digital pensada para transmitir conforto, confiança e facilitar o primeiro contato.",
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
        role: "UX/UI, direção visual, copy e front-end",
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
                { label: "Entrega", value: "Site institucional responsivo publicado" },
                { label: "Objetivo", value: "Clareza clínica e facilitar o contato" },
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
        value: "Site institucional responsivo publicado",
      },
      {
        label: "Objetivo",
        value: "Clareza clínica e facilitar o contato",
      },
    ],
  },
  {
    id: "lp-farma",
    title: "Pharmatech",
    category: "web",
    topic: "empresas",
    deliveryType: "lp-institucional",
    visibility: "secondary",
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
                { label: "Objetivo", value: "Posicionamento e canal de contato" },
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
        value: "Posicionamento e canal de contato",
      },
    ],
  },
  {
    id: "ofag-revamp",
    title: "OFAG",
    category: "web",
    topic: "empresas",
    deliveryType: "lp-institucional",
    cardCategories: ["B2B","UX/UI","Web"],
    cardHook: "Capacidade alta, percepção baixa.",
    cardRole: "UX/UI · Arquitetura da Informação · Front-end",
    slug: "ofag-revamp",
    description:
      "Recriação e evolução de uma presença digital para uma empresa técnica com atuação internacional.",
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
        role: "UX/UI, arquitetura da informação e front-end",
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
    cardCategories: ["SaaS","UX/UI","Produto","Sistemas"],
    cardHook: "Como transformar processos complexos em um SaaS?",
    cardRole: "UX/UI · Arquitetura da Informação · Produto · Desenvolvimento",
    slug: "qualiproc-ctli",
    description:
      "Plataforma de gestão da qualidade para laboratórios de calibração.",
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
        role: "UX/UI, arquitetura da informação, produto e desenvolvimento",
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
          id: "thinking",
          label: "Pensamento",
          title: "Produto de qualidade antes de “mais telas”",
          blocks: [
            {
              id: "t1",
              type: "text",
              content:
                "A hipótese: o valor está em um fluxo contínuo de evidência — do requisito ao documento, da coleta ao certificado — com isolamento por tenant. IA ou automação só entram se não quebrarem governança e rastreabilidade.",
            },
            {
              id: "t2",
              type: "bullets",
              items: [
                "Priorizar papéis (admin CTLI, qualidade, campo, portal) e permissões por módulo",
                "Tratar Lista Mestra e versionamento como núcleo do SGQ, não como anexo",
                "Manter o case IP-safe: sem expor regras internas, protocolos nem dados reais de clientes",
              ],
            },
          ],
        },
        {
          id: "design",
          label: "Design",
          title: "Hub operacional escaneável",
          blocks: [
            {
              id: "d1",
              type: "text",
              content:
                "A interface organiza a complexidade em um dashboard com atalhos, indicadores e avisos — menos “menu infinito”, mais próximo da rotina do laboratório.",
            },
            {
              id: "d2",
              type: "bullets",
              items: [
                "Sidebar por requisitos / módulos do SGQ",
                "Hub de atalhos para comercial, coleta, certificados e pessoal",
                "Superfícies densas com hierarquia tipográfica clara (sem ornamento)",
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
          label: "Tech",
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
          label: "Produto",
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
                "Um sistema para documentos, coleta, certificados, pessoal e operação comercial — com governança alinhada à realidade de laboratórios acreditados. Preview público mostra a entrada autenticada (sistema fechado), sem dados operacionais reais.",
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
    id: "devsistem",
    title: "DevSistem",
    category: "web",
    topic: "empresas",
    deliveryType: "sistema",
    visibility: "private",
    cardCategories: ["Produto", "Processo", "Sistemas", "MVP"],
    cardHook: "Como organizar reunião → MVP com qualidade?",
    cardRole: "Produto · UX · Processo · Desenvolvimento",
    slug: "devsistem",
    description:
      "Ferramenta pessoal (privada) que gerencia o desenvolvimento de sistemas em diferentes tópicos — da reunião com o cliente a um MVP completo, com foco em velocidade, qualidade e desempenho.",
    developmentExplanation:
      "Projeto pessoal privado: organiza o processo entre alinhamento com cliente, escopo por tópico, etapas de produto e entrega de MVP navegável. Não há demo pública — o case documenta o pensamento de produto e processo, sem métricas inventadas.",
    keyStages: [
      {
        title: "Entrada: reunião e escopo",
        description:
          "Capturar necessidade, restrições e tópico do sistema antes de saltar para a interface.",
      },
      {
        title: "Pipeline até o MVP",
        description:
          "Orquestrar etapas (descoberta → estrutura → design → build) para um MVP completo em pouco tempo.",
      },
      {
        title: "Qualidade e desempenho",
        description:
          "Tratar qualidade e performance como critérios do processo, não como etapa isolada no fim.",
      },
    ],
    thumbnail: undefined,
    link: undefined,
    caseStudy: {
      context: {
        type: "Ferramenta pessoal · Produto + Processo",
        segment: "Desenvolvimento de sistemas / MVP",
        objective:
          "Organizar o ciclo reunião → MVP com clareza de processo e critérios de qualidade",
        role: "Produto, UX, processo e desenvolvimento (projeto pessoal)",
        overview:
          "DevSistem é um projeto pessoal privado que gerencia o desenvolvimento de sistemas em diferentes tópicos. A ideia central: estruturar o processo desde a reunião com o cliente até um MVP completo, com ênfase em agilidade sem abrir mão de qualidade e desempenho. Não há produto público aberto — o case descreve o enquadramento e o método.",
      },
      chapters: [
        {
          id: "problema",
          label: "Problema",
          title: "Sistemas sem processo claro até o MVP",
          blocks: [
            {
              id: "p1",
              type: "text",
              content:
                "Desenvolver sistemas em temas distintos sem um fluxo explícito da reunião ao MVP gera escopo solto, atraso e qualidade inconsistente — especialmente quando o tempo é curto.",
            },
            {
              id: "p2",
              type: "bullets",
              items: [
                "Alinhamentos com cliente difíceis de transformar em backlog acionável",
                "Tópicos e contextos diferentes sem um mesmo método de condução",
                "Pressão por entrega rápida sem critérios claros de qualidade e desempenho",
              ],
            },
          ],
        },
        {
          id: "thinking",
          label: "Pensamento",
          title: "Processo como produto",
          blocks: [
            {
              id: "t1",
              type: "text",
              content:
                "A hipótese: a velocidade só é sustentável se o processo for legível. DevSistem trata a jornada reunião → escopo → etapas → MVP como o objeto a organizar, não só a interface final.",
            },
            {
              id: "t2",
              type: "bullets",
              items: [
                "Separar descoberta, estrutura, design e build sem perder o fio do cliente",
                "Permitir múltiplos tópicos/sistemas sob o mesmo método",
                "Declarar o caráter privado (sem claim de produto comercial aberto)",
              ],
            },
          ],
        },
        {
          id: "design",
          label: "Design",
          title: "Pipeline legível para decisão",
          blocks: [
            {
              id: "d1",
              type: "bullets",
              items: [
                "Visão por etapas do desenvolvimento até o MVP",
                "Organização por tópico/sistema sem perder contexto do cliente",
                "Hierarquia que favorece o próximo passo, não o excesso de status",
              ],
            },
          ],
        },
        {
          id: "produto",
          label: "Produto",
          title: "MVP com qualidade e desempenho no critérios",
          blocks: [
            {
              id: "pr1",
              type: "text",
              content:
                "O foco do case não é métrica inventada de time-to-market: é o método para chegar a um MVP navegável com qualidade e desempenho como exigências explícitas do processo.",
            },
            {
              id: "pr2",
              type: "stats",
              stats: [
                { label: "Status", value: "Pessoal / privado" },
                { label: "Arco", value: "Reunião → MVP" },
              ],
            },
          ],
        },
      ],
      previewTitle: "Sem preview público",
      previewDescription:
        "Projeto privado. O valor está na narrativa de processo, produto e critérios de entrega — sem demo aberta.",
    },
    caseProblem:
      "Desenvolver sistemas em temas distintos sem processo claro da reunião ao MVP gera atraso, escopo solto e qualidade inconsistente.",
    caseSolution:
      "Ferramenta pessoal que organiza o fluxo cliente → escopo → etapas → MVP, com qualidade e desempenho como critérios explícitos.",
    caseResults: [
      { label: "Status", value: "Pessoal / privado" },
      { label: "Foco", value: "Reunião → MVP" },
    ],
  },
  {
    id: "clinica-dverso",
    title: "Clínica DVERSO",
    category: "web",
    topic: "saude",
    deliveryType: "lp-institucional",
    cardCategories: ["Web","UX/UI","SEO","Conversão"],
    cardRole: "UX/UI · Arquitetura da Informação · Front-end",
    slug: "clinica-dverso",
    description:
      "Experiência digital para uma clínica com múltiplas especialidades, estruturada para comunicação, aquisição e conversão.",
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
        role: "UX/UI, arquitetura da informação, copy e front-end",
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
          id: "thinking",
          label: "Pensamento",
          title: "Uma narrativa, vários cuidados",
          blocks: [
            {
              id: "t1",
              type: "text",
              content:
                "O site precisa acolher e orientar famílias sem virar catálogo frio. A decisão foi tratar especialidades como blocos escaneáveis sob uma mesma voz de marca, com CTAs de contato nos momentos de decisão — sem afirmar taxa de conversão.",
            },
            {
              id: "t2",
              type: "bullets",
              items: [
                "Unificar tom (cuidado + clareza) acima de cada linha terapêutica",
                "Priorizar mobile e leitura rápida",
                "Incluir acessibilidade em Libras como requisito, não como extras",
              ],
            },
          ],
        },
        {
          id: "design",
          label: "Design",
          title: "Acolhimento escaneável",
          blocks: [
            {
              id: "d1",
              type: "bullets",
              items: [
                "Hierarquia tipográfica leve para reduzir carga cognitiva",
                "Seções por especialidade com ritmo visual consistente",
                "CTAs recorrentes sem competir com o conteúdo clínico",
              ],
            },
          ],
        },
        {
          id: "tech",
          label: "Tech",
          title: "Microinterações e inclusão",
          blocks: [
            {
              id: "te1",
              type: "tags",
              items: ["Lottie", "VLibras", "Landing responsiva"],
            },
            {
              id: "te2",
              type: "bullets",
              items: [
                "Animações Lottie leves para guiar atenção sem bloquear a leitura",
                "Widget VLibras para ampliar acesso em Libras",
                "Implementação focada em performance e clareza no mobile",
              ],
            },
          ],
        },
        {
          id: "resultado",
          label: "Produto",
          title: "Landing publicada, orientada ao contato",
          blocks: [
            {
              id: "r1",
              type: "stats",
              stats: [
                { label: "Entrega", value: "Landing responsiva publicada" },
                { label: "Recursos", value: "Microinterações + VLibras" },
              ],
            },
            {
              id: "r2",
              type: "text",
              content:
                "Resultado observável: site ao ar com narrativa unificada e canal de contato acessível. Sem métricas de conversão inventadas.",
            },
          ],
        },
      ],
      previewTitle: "Preview da clínica",
      previewDescription:
        "Veja a página publicada: tom acolhedor, microinterações leves e VLibras. O objetivo é facilitar o contato — sem números de conversão inventados.",
    },
    caseProblem:
      "Criar uma página acolhedora para múltiplas linhas de cuidado, capaz de orientar famílias e abrir contato no mobile, sem abrir mão de inclusão e clareza.",
    caseSolution:
      "Landing com microinterações Lottie, CTAs nos pontos certos da jornada e integração com VLibras para ampliar acessibilidade em Libras.",
    caseResults: [
      {
        label: "Entrega",
        value: "Landing responsiva publicada",
      },
      {
        label: "Recursos",
        value: "Microinterações + VLibras",
      },
    ],
  },
  {
    id: "grimorio-aventureiro",
    title: "Grimório do Aventureiro",
    category: "web",
    topic: "empresas",
    deliveryType: "sistema",
    cardCategories: ["Product Design","UX","Desenvolvimento"],
    cardRole: "UX/UI · Produto · Desenvolvimento",
    slug: "grimorio-aventureiro",
    description:
      "Uma experiência em português para simplificar a criação e o gerenciamento de personagens de RPG.",
    developmentExplanation:
      "SPA focada na mesa brasileira — fluxo de criação alinhado ao Capítulo 1, motor de regras para HP/CA/perícias/slots, catálogos traduzidos e forja com orçamento por raridade. Conteúdo baseado em material SRD autorizado; não afiliado à Wizards of the Coast.",
    keyStages: [
      {
        title: "Criação guiada de personagem",
        description:
          "Fluxo passo a passo (raça, classe, atributos, antecedente e equipamento) pensado para quem joga em português.",
      },
      {
        title: "Motor de regras e ficha viva",
        description:
          "HP, CA, perícias, slots e DC calculados automaticamente — menos erro manual na mesa.",
      },
      {
        title: "Forja com balanceamento",
        description:
          "Criação de itens mágicos com orçamento por raridade e score automático para manter o jogo equilibrado.",
      },
    ],
    link: "https://dnd-br.com.br",
    caseStudy: {
      context: {
        type: "Ferramenta web / sistema de fichas RPG",
        segment: "Jogadores e mesas DnD 5e no Brasil",
        objective:
          "Facilitar criação e gestão de fichas em português com cálculos automáticos e conteúdo traduzido",
        role: "UX/UI, produto e desenvolvimento",
        overview:
          "Grimório do Aventureiro é uma ferramenta compatível com DnD 5e para a mesa brasileira: fichas em português, magias e formas selvagens traduzidas, e forja de itens com scores de balanceamento. Não afiliado à Wizards of the Coast; regras com base em material SRD autorizado.",
      },
      chapters: [
        {
          id: "problema",
          label: "Problema",
          title: "Fichas em inglês e cálculos manuais na mesa BR",
          blocks: [
            {
              id: "p1",
              type: "text",
              content:
                "Jogadores brasileiros enfrentam ferramentas em inglês, cálculos manuais propensos a erro e pouco suporte a magias/formas selvagens traduzidas ou criação de itens balanceados.",
            },
            {
              id: "p2",
              type: "bullets",
              items: [
                "Conteúdo de regras e magias majoritariamente em inglês",
                "Cálculos de HP, CA e slots feitos à mão",
                "Criação de itens mágicos sem referência de balanceamento",
              ],
            },
          ],
        },
        {
          id: "thinking",
          label: "Pensamento",
          title: "Produto para a mesa, não um PDF bonito",
          blocks: [
            {
              id: "t1",
              type: "text",
              content:
                "O diferencial é reduzir fricção no uso real: fluxo alinhado ao Capítulo 1, motor de regras confiável e conteúdo em PT — com honestidade sobre bases SRD e ausência de afiliação à Wizards.",
            },
            {
              id: "t2",
              type: "bullets",
              items: [
                "Priorizar criação guiada antes de features avançadas",
                "Automatizar o que causa erro humano (HP, CA, slots, DC)",
                "Tratar forja como sistema com restrições, não sandbox livre",
              ],
            },
          ],
        },
        {
          id: "design",
          label: "Design",
          title: "UI de ferramenta, não de marketing",
          blocks: [
            {
              id: "d1",
              type: "bullets",
              items: [
                "Passos claros na criação de personagem",
                "Ficha densa porém legível (informação crítica primeiro)",
                "Linguagem visual de RPG sem ruído ornamental",
              ],
            },
          ],
        },
        {
          id: "solucao",
          label: "Tech / Produto",
          title: "SPA completa em português para a mesa",
          blocks: [
            {
              id: "s1",
              type: "text",
              content:
                "Ambiente web com criação guiada, ficha viva, catálogos traduzidos e forja com score automático — focado na experiência do usuário brasileiro.",
            },
            {
              id: "s2",
              type: "bullets",
              title: "Capacidades",
              items: [
                "Criação guiada alinhada ao Capítulo 1",
                "Ficha viva com motor de regras",
                "Magias e formas selvagens em português",
                "Forja de itens com orçamento e score de balanceamento",
              ],
            },
          ],
        },
        {
          id: "resultado",
          label: "Produto",
          title: "Ferramenta publicada",
          blocks: [
            {
              id: "r1",
              type: "stats",
              stats: [
                { label: "Idioma", value: "Português (BR)" },
                { label: "Escopo", value: "Fichas · Magias · Forja" },
                { label: "Status", value: "Publicado em dnd-br.com.br" },
              ],
            },
          ],
        },
      ],
      previewTitle: "Preview do Grimório",
      previewDescription:
        "Abra a ferramenta publicada para ver criação de fichas, magias e forja em português.",
    },
    caseProblem:
      "Reduzir a fricção de fichas DnD 5e em inglês e cálculos manuais para mesas brasileiras, com conteúdo traduzido e criação de itens balanceada.",
    caseSolution:
      "SPA Grimório com criação guiada, motor de regras, magias/formas selvagens em PT e forja com scores automáticos de balanceamento.",
    caseResults: [
      { label: "Idioma", value: "Português (BR)" },
      { label: "Escopo", value: "Fichas · Magias · Forja" },
    ],
  },
  {
    id: "hirely",
    title: "Hirely",
    category: "ux",
    topic: "empresas",
    deliveryType: "sistema",
    visibility: "academic",
    cardCategories: ["Product Design","IA","UX"],
    cardRole: "Product Design · UX/UI (contexto acadêmico)",
    slug: "hirely",
    description:
      "Conceito acadêmico de ATS com IA — recolocação, matching e experiência de recrutadores, com a IA apoiando (e não substituindo) a decisão humana.",
    developmentExplanation:
      "Estudo de produto e interface para um ATS com apoio de IA: jornada do recrutador, organização de etapas e proposta de valor sem claim de produto comercial em produção.",
    keyStages: [
      {
        title: "Problema de produto",
        description:
          "Mapear fricção típica de recrutamento (triagem, acompanhamento e falta de visão) sem inventar métricas de mercado.",
      },
      {
        title: "Pensamento de produto + UX",
        description:
          "Definir fluxo, informação crítica por etapa e tom de interface para decisões rápidas do recrutador.",
      },
      {
        title: "Narrativa acadêmica",
        description:
          "Empacotar a proposta para apresentação (FIAP Next / ARCA), deixando explícito o caráter conceitual.",
      },
    ],
    thumbnail: undefined,
    link: undefined,
    caseStudy: {
      context: {
        type: "Conceito acadêmico · Product + UX + IA",
        segment: "Recrutamento / ATS",
        objective:
          "Propor uma experiência de recrutamento com IA integrada, com clareza estratégica e fluxo navegável",
        role: "Product design e UX/UI em contexto acadêmico (FIAP)",
        overview:
          "Hirely (também referido como Recruta.AI) é um estudo de produto apresentado na ARCA (FIAP Next): um ATS pensado para reduzir ambiguidade no funil de contratação com apoio de IA. Não é um produto comercial publicado — o case documenta o pensamento, a estrutura de experiência e o enquadramento acadêmico.",
      },
      chapters: [
        {
          id: "problema",
          label: "Problema",
          title: "Recrutamento opaco e fragmentado",
          blocks: [
            {
              id: "p1",
              type: "text",
              content:
                "Times de talent costumam operar com ferramentas desconectadas e pouco feedback sobre o avanço de candidatos. A dor não é “mais IA”, e sim visão e decisão com menos ruído.",
            },
            {
              id: "p2",
              type: "bullets",
              items: [
                "Etapas do funil difíceis de escanear",
                "Critérios de decisão pouco explicitados na interface",
                "Risco de overclaim tecnológico em soluções de IA",
              ],
            },
          ],
        },
        {
          id: "thinking",
          label: "Pensamento",
          title: "Produto antes da feature de IA",
          blocks: [
            {
              id: "t1",
              type: "text",
              content:
                "A hipótese central: a IA só ajuda se o fluxo do recrutador já estiver claro. O desenho prioriza estados do funil, prioridades e próximos passos — e usa IA como apoio, não como narrativa mágica.",
            },
            {
              id: "t2",
              type: "bullets",
              items: [
                "Separar triagem, avaliação e acompanhamento",
                "Tornar status e critérios legíveis em poucos segundos",
                "Declarar limites do conceito acadêmico (sem métricas inventadas)",
              ],
            },
          ],
        },
        {
          id: "design",
          label: "Design",
          title: "Interface para decisão rápida",
          blocks: [
            {
              id: "d1",
              type: "bullets",
              items: [
                "Hierarquia por etapa do processo seletivo",
                "Cards e listas com informação mínima necessária",
                "Linguagem visual sóbria para contexto corporativo",
              ],
            },
          ],
        },
        {
          id: "tech",
          label: "Tech / IA",
          title: "IA como camada de apoio",
          blocks: [
            {
              id: "te1",
              type: "text",
              content:
                "No conceito, a IA apoia triagem e organização de informação. O case não descreve stack de produção nem performance real — o foco é o enquadramento de produto e a experiência.",
            },
          ],
        },
        {
          id: "produto",
          label: "Produto",
          title: "Validação acadêmica (FIAP Next)",
          blocks: [
            {
              id: "pr1",
              type: "text",
              content:
                "Selecionado para apresentação na ARCA (FIAP Next), integrando produto, tecnologia e experiência. Resultado: exposição do conceito e narrativa híbrida Product + UX + IA — sem afirmar tração comercial.",
            },
            {
              id: "pr2",
              type: "stats",
              stats: [
                { label: "Contexto", value: "Acadêmico / conceitual" },
                { label: "Apresentação", value: "ARCA · FIAP Next" },
              ],
            },
          ],
        },
      ],
      previewTitle: "Sem preview público",
      previewDescription:
        "Este case é acadêmico/conceitual e não possui produto comercial aberto. O valor está na narrativa de problema, produto e experiência.",
    },
    caseProblem:
      "Fluxos de recrutamento opacos e fragmentados; risco de vender “IA” sem clareza de produto.",
    caseSolution:
      "Conceito de ATS (Hirely / Recruta.AI) com funil legível e IA como apoio — apresentado academicamente no FIAP Next.",
    caseResults: [
      { label: "Contexto", value: "Acadêmico" },
      { label: "Apresentação", value: "ARCA · FIAP Next" },
    ],
  },
];
