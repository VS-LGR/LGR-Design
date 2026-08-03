export type UiMessages = {
  skipToContent: string;
  nav: {
    aria: string;
    menu: string;
    close: string;
    projects: string;
    about: string;
    story: string;
    work: string;
    process: string;
    contact: string;
    hire: string;
    openNavigation: string;
  };
  home: {
    kicker: string;
    headline: string;
    lead: string;
    ctaProjects: string;
    ctaContact: string;
    featuredKicker: string;
    featuredTitle: string;
    featuredLead: string;
    featuredAll: string;
    explorationsTitle: string;
    academicBadge: string;
    privateBadge: string;
    roleLabel: string;
    processKicker: string;
    processTitle: string;
    processLead: string;
    processSteps: Array<{ title: string; description: string }>;
    processCta: string;
    skillsKicker: string;
    skillsTitle: string;
    skillsLead: string;
    skillsProcess: string;
    contactKicker: string;
    contactTitle: string;
    contactLead: string;
  };
  system: {
    hubTitle: string;
    hubSubtitle: string;
    hubHint: string;
    hubKicker: string;
    toggleExpand: string;
    toggleCollapse: string;
    centralButtonAria: string;
    goProjects: string;
    goStory: string;
    goWork: string;
    goHire: string;
    coreLabel: string;
    quickProjects: string;
    quickHire: string;
    moduleBlurb: {
      projetos: string;
      historia: string;
      "como-trabalho": string;
      contratar: string;
    };
  };
  header: {
    tagline: string;
  };
  language: {
    aria: string;
    pt: string;
    en: string;
  };
  footer: {
    line: string;
  };
  intro: {
    tagline: string;
  };
  meta: {
    title: string;
    description: string;
  };
  sidebar: {
    sectionAria: string;
    categoriesAria: string;
    categoriesTitle: string;
    about: string;
    aboutBlurb: string;
    formation: string;
    recognitions: string;
    cursorTemplate: string;
    positioning: string;
    howIWork: string;
    tools: string;
    creativity: string;
    objective: string;
    contact: string;
    designProcess: string;
  };
  designProcess: {
    sectionKicker: string;
    sectionTitle: string;
    phasesHeading: string;
    deliverablesLabel: string;
  };
  projectCase: {
    jumpNavAria: string;
    jumpCase: string;
    jumpKeyStages: string;
    jumpPreview: string;
    jumpSpecs: string;
    caseLead: string;
    caseHeading: string;
    problem: string;
    solution: string;
    results: string;
  };
  caseDeck: {
    backToProjects: string;
    context: string;
    projectType: string;
    segment: string;
    objective: string;
    role: string;
    overview: string;
    chapterNavAria: string;
    chapterLabel: string;
    previousChapter: string;
    nextChapter: string;
    progressAria: string;
    previewCta: string;
    previewTitle: string;
    previewDescription: string;
    openExternal: string;
    previewUnavailable: string;
    loadingPreview: string;
    previewError: string;
    swipeHint: string;
    caseCta: string;
    caseNotFound: string;
    galleryHeading: string;
    galleryExpand: string;
    galleryClose: string;
  };
  pages: {
    projectsHeading: string;
    projectsKicker: string;
    projectsLead: string;
    projectsFeaturedHeading: string;
    projectsExplorationsHeading: string;
    historiaHeading: string;
    historiaKicker: string;
    historiaLead: string;
    workHeading: string;
    workLead: string;
    contactHeading: string;
    contactKicker: string;
    contactLead: string;
    hireHeading: string;
    sectionsJumpAria: string;
  };
  exportDoc: {
    title: string;
    kicker: string;
    lead: string;
    printCta: string;
    openCta: string;
    openProjectCta: string;
    selectHeading: string;
    selectLead: string;
    roleLabel: string;
    typeLabel: string;
    segmentLabel: string;
    objectiveLabel: string;
    challengeLabel: string;
    solutionLabel: string;
    stagesLabel: string;
    galleryLabel: string;
    footer: string;
    linkedinHint: string;
    backToSelect: string;
    notFound: string;
    carouselLabel: string;
    swipeHint: string;
    coverEyebrow: string;
    coverHook: string;
    stepLabel: string;
    tipLabel: string;
    visualLabel: string;
    resultLabel: string;
    ctaTitle: string;
    ctaLead: string;
    ctaContact: string;
    slideOf: string;
    sceneHub: string;
    sceneFlow: string;
    sceneTrust: string;
    sceneConcept: string;
  };
  exportPortfolio: {
    backHome: string;
    carouselLabel: string;
    linkedinHint: string;
    coverEyebrow: string;
    coverTitle: string;
    coverLead: string;
    flagshipEyebrow: string;
    webEyebrow: string;
    webTitle: string;
    methodEyebrow: string;
    methodTitle: string;
    methodLead: string;
    ctaKicker: string;
    ctaLead: string;
    ctaContact: string;
  };
  hire: {
    viewCase: string;
    selectServiceAria: string;
  };
  deliveryType: {
    "lp-institucional": string;
    sistema: string;
  };
  contact: {
    whatsapp: string;
    email: string;
    hireLink: string;
    cvHint: string;
    linkedin: string;
    github: string;
  };
  sections: {
    about: string;
    formation: string;
    formationLead: string;
    recognitions: string;
    positioning: string;
    howIWork: string;
    tools: string;
    creative: string;
    objective: string;
    contact: string;
  };
  creative: {
    intro: string;
    outro: string;
  };
  resume: {
    download: string;
  };
  projects: {
    byTopic: string;
    browseByTopicLead: string;
    project: string;
    selectProjectAria: string;
    ofTotal: string;
    noneInTopic: string;
    previewHint: string;
    topicProjects: string;
    keyStages: string;
    aboutDev: string;
    openSiteTab: string;
    openNewTab: string;
    adjustments: string;
    width: string;
    widthAria: string;
    widthTitle: string;
    viewportFull: string;
    viewport390: string;
    viewport768: string;
    viewport1024: string;
    dock: string;
    float: string;
    dockTitle: string;
    floatTitle: string;
    dockAria: string;
    floatAria: string;
    dragTitle: string;
    dragHint: string;
    specs: string;
    selectForPreview: string;
    noPreviewLink: string;
    resizeCorner: string;
    resizeHeight: string;
    resizeWindowAria: string;
    resizeHeightAria: string;
    selectProjectPrefix: string;
    thumbnailAltPrefix: string;
    thumbnailStatic: string;
    keyStagesHeading: string;
    keyStagesLead: string;
  };
  projectCard: {
    previewPlaceholder: string;
    hide: string;
    aboutDev: string;
    viewSite: string;
  };
  categoryFilter: {
    aria: string;
    all: string;
  };
};

export const uiPt: UiMessages = {
  skipToContent: "Pular para o conteúdo principal",
  nav: {
    aria: "Navegação principal",
    menu: "Início",
    close: "Fechar",
    projects: "Projetos",
    about: "Sobre",
    story: "Sobre",
    work: "Processo",
    process: "Processo",
    contact: "Contato",
    hire: "Contratar",
    openNavigation: "Abrir navegação",
  },
  home: {
    kicker: "UX/UI · Product · Web",
    headline:
      "Desenho experiências e construo produtos digitais — do problema ao produto navegável.",
    lead: "Sou Lucas Gabriel Rodrigues. Atuo na interseção de UX/UI, produto e desenvolvimento, conectando experiência, tecnologia e contexto para criar produtos digitais e sistemas que funcionam.",
    ctaProjects: "Ver projetos",
    ctaContact: "Falar comigo",
    featuredKicker: "Seleção",
    featuredTitle: "Projetos em destaque",
    featuredLead: "Projetos onde UX, produto e tecnologia trabalham juntos.",
    featuredAll: "Ver todos",
    explorationsTitle: "Explorações",
    academicBadge: "Acadêmico",
    privateBadge: "Privado",
    roleLabel: "Meu papel",
    processKicker: "Método",
    processTitle: "Como eu trabalho",
    processLead: "Do problema ao produto — em cinco movimentos.",
    processSteps: [
      {
        title: "Entender",
        description: "Problema real, contexto e restrições antes da interface.",
      },
      {
        title: "Estruturar",
        description: "Informação, fluxos e prioridades de decisão.",
      },
      {
        title: "Projetar",
        description: "Experiência e interface com intenção clara.",
      },
      {
        title: "Construir",
        description: "Implementação navegável alinhada ao design.",
      },
      {
        title: "Evoluir",
        description: "Ajustes com o que o uso e o contexto pedem.",
      },
    ],
    processCta: "Ver processo completo",
    skillsKicker: "Capacidades",
    skillsTitle: "Skills em uso",
    skillsLead:
      "UX, produto, desenvolvimento e visual — organizados para o que o trabalho exige.",
    skillsProcess: "Ver processo completo",
    contactKicker: "Próximo passo",
    contactTitle: "Estou aberto a novos desafios.",
    contactLead:
      "Busco oportunidades onde possa contribuir conectando UX, produto e tecnologia.",
  },
  system: {
    hubTitle: "Design e desenvolvimento com intenção",
    hubSubtitle:
      "Projetos, história, método e contratação — escolha um módulo para continuar.",
    hubHint: "Toque ou passe o cursor sobre um módulo para continuar.",
    hubKicker: "Sistema do portfólio",
    toggleExpand: "Abrir módulos",
    toggleCollapse: "Fechar módulos",
    centralButtonAria: "Abrir ou fechar menu circular de módulos",
    goProjects: "Ver projetos selecionados",
    goStory: "Conhecer a trajetória",
    goWork: "Ver o método",
    goHire: "Contratar serviços",
    coreLabel: "LG",
    quickProjects: "Ver projetos",
    quickHire: "Contratar",
    moduleBlurb: {
      projetos: "Cases e entregas reais",
      historia: "Formação e posicionamento",
      "como-trabalho": "Princípios, processo e ferramentas",
      contratar: "LP, institucional e sistemas",
    },
  },
  header: {
    tagline: "UX/UI · Product · Web",
  },
  language: {
    aria: "Idioma",
    pt: "PT",
    en: "EN",
  },
  footer: {
    line: "Lucas Gabriel Rodrigues — UX/UI · Product · Web",
  },
  intro: {
    tagline: "UX/UI · Product · Web",
  },
  meta: {
    title:
      "Lucas Gabriel Rodrigues — UX/UI Designer, Product Designer & Desenvolvedor Web",
    description:
      "Portfólio de Lucas Gabriel Rodrigues, profissional de UX/UI, Product Design e Desenvolvimento Web, com projetos de produtos digitais, sistemas, SaaS e experiências web.",
  },
  sidebar: {
    sectionAria: "Resumo da seção em vista",
    categoriesAria: "Categorias",
    categoriesTitle: "Categorias",
    about: "Sobre Mim",
    aboutBlurb:
      "UX e Web Designer com visão de produto, execução técnica e foco em resultados.",
    formation: "Formação",
    recognitions: "Reconhecimentos",
    cursorTemplate: "Processo com IA",
    positioning: "Posicionamento",
    howIWork: "Princípios",
    tools: "Ferramentas",
    creativity: "Base criativa",
    objective: "Objetivo",
    contact: "Contato",
    designProcess: "Processo",
  },
  designProcess: {
    sectionKicker: "Referência de método",
    sectionTitle: "Como conduzo projetos de UX e produto",
    phasesHeading: "Etapas de referência",
    deliverablesLabel: "Entregáveis típicos",
  },
  projectCase: {
    jumpNavAria: "Ir para seção deste projeto",
    jumpCase: "Case",
    jumpKeyStages: "Entregas",
    jumpPreview: "Preview",
    jumpSpecs: "Especificações",
    caseLead:
      "Resumo do contexto e da abordagem neste trabalho. O processo completo em 10 etapas está na página Como trabalho.",
    caseHeading: "Case: {title}",
    problem: "O problema / contexto",
    solution: "Solução e abordagem",
    results: "Resultados",
  },
  caseDeck: {
    backToProjects: "Voltar para projetos",
    context: "Contexto",
    projectType: "Tipo",
    segment: "Segmento",
    objective: "Objetivo principal",
    role: "Meu papel",
    overview: "Visão geral",
    chapterNavAria: "Navegação dos capítulos do case",
    chapterLabel: "Capítulo",
    previousChapter: "Capítulo anterior",
    nextChapter: "Próximo capítulo",
    progressAria: "Progresso de leitura do case",
    previewCta: "Carregar preview ao vivo",
    previewTitle: "Preview do projeto",
    previewDescription: "Navegue no site publicado para validar a implementação final.",
    openExternal: "Abrir preview em nova guia",
    previewUnavailable: "Este projeto não possui link de preview disponível.",
    loadingPreview: "Carregando preview...",
    previewError:
      "Não foi possível carregar o preview. Use a abertura em nova guia.",
    swipeHint:
      "Dica mobile: deslize para esquerda/direita para trocar de capítulo.",
    caseCta: "Ver estudo de caso",
    caseNotFound: "Case não encontrado.",
    galleryHeading: "Interface do produto",
    galleryExpand: "Ampliar captura",
    galleryClose: "Fechar",
  },
  pages: {
    projectsHeading: "Projetos selecionados",
    projectsKicker: "Portfólio",
    projectsLead:
      "Projetos onde UX, produto e tecnologia trabalham juntos — cada card abre o estudo de caso. Explorações ficam em seção própria.",
    projectsFeaturedHeading: "Em destaque",
    projectsExplorationsHeading: "Explorações",
    historiaHeading: "Sobre",
    historiaKicker: "Trajetória",
    historiaLead:
      "Formação, reconhecimentos e posicionamento — UX, product thinking e execução técnica.",
    workHeading: "Processo de trabalho",
    workLead:
      "Princípios, processo adaptável e ferramentas para transformar requisitos em interfaces claras e entregas navegáveis.",
    contactHeading: "Contato",
    contactKicker: "Próximo passo",
    contactLead:
      "Busco oportunidades onde possa contribuir conectando UX, produto e tecnologia.",
    hireHeading: "Contratar",
    sectionsJumpAria: "Ir para seção",
  },
  exportDoc: {
    title: "Export LinkedIn",
    kicker: "Carrossel por projeto",
    lead: "Escolha um projeto e gere um PDF em slides — formato documento/carrossel do LinkedIn, com passos e imagens reais.",
    printCta: "Imprimir / salvar PDF",
    openCta: "Exportar para LinkedIn",
    openProjectCta: "Export LinkedIn",
    selectHeading: "Escolha o projeto",
    selectLead:
      "Cada export vira um carrossel PDF: capa chamativa, passos para deslizar e capturas reais da interface.",
    roleLabel: "Papel",
    typeLabel: "Tipo",
    segmentLabel: "Segmento",
    objectiveLabel: "Objetivo",
    challengeLabel: "O desafio",
    solutionLabel: "A solução",
    stagesLabel: "Etapas-chave",
    galleryLabel: "Interface real",
    footer: "Lucas Gabriel Rodrigues — UX, Web Design & Desenvolvimento digital",
    linkedinHint:
      "Imprimir → Destino: Salvar como PDF → Páginas no tamanho do slide. No LinkedIn: criar publicação → Documento.",
    backToSelect: "Todos os exports",
    notFound: "Projeto não encontrado para export.",
    carouselLabel: "Carrossel LinkedIn",
    swipeHint: "Deslize para o próximo →",
    coverEyebrow: "Case real",
    coverHook: "Do problema à interface — em passos",
    stepLabel: "Passo",
    tipLabel: "Dica",
    visualLabel: "Por dentro do produto",
    resultLabel: "Resultado",
    ctaTitle: "Quer um projeto com essa clareza?",
    ctaLead:
      "UX, web design e sistemas — do briefing à interface pronta para usar.",
    ctaContact: "Vamos conversar",
    slideOf: "de",
    sceneHub: "Dashboard e hub de atalhos do SGQ",
    sceneFlow: "Módulos: documentos, coleta, certificados, comercial",
    sceneTrust: "Lista Mestra e rastreabilidade documental",
    sceneConcept: "Cenário ilustrado do sistema",
  },
  exportPortfolio: {
    backHome: "Início",
    carouselLabel: "Carrossel LinkedIn — novo portfólio",
    linkedinHint:
      "Imprimir → Salvar como PDF (1200×627). No LinkedIn: Documento ou sequência de imagens.",
    coverEyebrow: "Novidade",
    coverTitle: "Meu novo portfólio está no ar 🚀",
    coverLead:
      "UX/UI, Product Design e Web — cases, processo e posicionamento em um só lugar.",
    flagshipEyebrow: "Projeto principal",
    webEyebrow: "Web",
    webTitle: "Experiências web com clareza e conversão",
    methodEyebrow: "Método",
    methodTitle: "Como eu desenvolvo",
    methodLead: "Do problema ao produto — em cinco movimentos.",
    ctaKicker: "UX/UI · Product Design · Web",
    ctaLead:
      "Conheça o portfólio completo em lgr-design.vercel.app e vamos conversar sobre o próximo passo.",
    ctaContact: "Vamos conversar",
  },
  hire: {
    viewCase: "Ver case",
    selectServiceAria: "Escolher serviço e entrar em contato",
  },
  deliveryType: {
    "lp-institucional": "LP / Institucional",
    sistema: "Sistema",
  },
  sections: {
    about: "Sobre Mim",
    formation: "Formação & Especialização",
    formationLead:
      "Formação voltada a experiências digitais estratégicas, unindo usabilidade, negócio e execução técnica.",
    recognitions: "Reconhecimentos & Destaques",
    positioning: "Posicionamento profissional",
    howIWork: "Princípios de trabalho",
    tools: "Ferramentas do processo",
    creative: "Base criativa",
    objective: "Objetivo profissional",
    contact: "Contato",
  },
  creative: {
    intro:
      "Base criativa secundária — hobbies e práticas que informam julgamento visual, não o posicionamento principal:",
    outro:
      "Mantidas ao final do Processo para não competir com princípios e método profissional.",
  },
  contact: {
    whatsapp: "WhatsApp",
    email: "E-mail",
    hireLink: "Ver serviços para contratar",
    cvHint:
      "CV em PDF disponível no site — use o botão de download ou peça por e-mail/WhatsApp.",
    linkedin: "LinkedIn",
    github: "GitHub",
  },
  resume: {
    download: "Baixar currículo (PDF)",
  },
  projects: {
    byTopic: "Projetos por tópico",
    browseByTopicLead:
      "Trabalhos reais em saúde e empresas — landing pages, sites institucionais e sistemas. Cada card abre o estudo de caso completo.",
    project: "Projeto",
    selectProjectAria: "Selecionar projeto",
    ofTotal: "{current} de {total}",
    noneInTopic: "Nenhum projeto neste tópico no momento.",
    previewHint:
      "Largura e tamanho da pré-visualização são ajustáveis na barra do preview (resolução + redimensionar pelo canto ou borda). Solta = arrastar; Presa = especificações abaixo.",
    topicProjects: "Projetos do tópico",
    keyStages: "Etapas-chave do projeto selecionado",
    aboutDev: "Sobre o desenvolvimento",
    openSiteTab: "Abrir site em nova guia",
    openNewTab: "Abrir em nova guia",
    adjustments: "Ajustes",
    width: "Largura:",
    widthAria: "Largura da pré-visualização",
    widthTitle: "Largura horizontal da pré-visualização",
    viewportFull: "100% (Web)",
    viewport390: "390px (Mobile)",
    viewport768: "768px (Tablet)",
    viewport1024: "1024px (Desktop)",
    dock: "Prender",
    float: "Soltar",
    dockTitle: "Prender preview (deixar especificações visíveis)",
    floatTitle: "Soltar preview (modo flutuante, arrastável)",
    dockAria: "Prender preview",
    floatAria: "Soltar preview para modo flutuante",
    dragTitle: "Arrastar janela de preview",
    dragHint: "— arraste para mover",
    specs: "Especificações",
    selectForPreview:
      "Selecione um projeto para carregar o preview completo.",
    noPreviewLink: "Sem link de preview",
    resizeCorner: "Arrastar para redimensionar",
    resizeHeight: "Arrastar para alterar altura",
    resizeWindowAria: "Redimensionar janela",
    resizeHeightAria: "Redimensionar altura",
    selectProjectPrefix: "Selecionar projeto",
    thumbnailAltPrefix: "Thumbnail do projeto",
    thumbnailStatic: "Thumbnail estática",
    keyStagesHeading: "Entregas e foco de UX neste site",
    keyStagesLead:
      "O que foi priorizado neste trabalho — distinto do processo macro na página Como trabalho.",
  },
  projectCard: {
    previewPlaceholder: "Preview do projeto",
    hide: "Ocultar",
    aboutDev: "Sobre o desenvolvimento",
    viewSite: "Ver site",
  },
  categoryFilter: {
    aria: "Filtrar por categoria",
    all: "Todos",
  },
};

export const uiEn: UiMessages = {
  skipToContent: "Skip to main content",
  nav: {
    aria: "Main navigation",
    menu: "Home",
    close: "Close",
    projects: "Projects",
    about: "About",
    story: "About",
    work: "Process",
    process: "Process",
    contact: "Contact",
    hire: "Hire",
    openNavigation: "Open navigation",
  },
  home: {
    kicker: "UX/UI · Product · Web",
    headline:
      "I design experiences and build digital products — from problem to navigable product.",
    lead: "I'm Lucas Gabriel Rodrigues. I work at the intersection of UX/UI, product, and development, connecting experience, technology, and context to create digital products and systems that work.",
    ctaProjects: "View projects",
    ctaContact: "Get in touch",
    featuredKicker: "Selected",
    featuredTitle: "Featured projects",
    featuredLead: "Projects where UX, product, and technology work together.",
    featuredAll: "View all",
    explorationsTitle: "Explorations",
    academicBadge: "Academic",
    privateBadge: "Private",
    roleLabel: "My role",
    processKicker: "Method",
    processTitle: "How I work",
    processLead: "From problem to product — in five moves.",
    processSteps: [
      {
        title: "Understand",
        description: "Real problem, context, and constraints before the UI.",
      },
      {
        title: "Structure",
        description: "Information, flows, and decision priorities.",
      },
      {
        title: "Design",
        description: "Experience and interface with clear intent.",
      },
      {
        title: "Build",
        description: "Navigable implementation aligned with design.",
      },
      {
        title: "Evolve",
        description: "Adjustments guided by use and context.",
      },
    ],
    processCta: "See full process",
    skillsKicker: "Capabilities",
    skillsTitle: "Skills in use",
    skillsLead:
      "UX, product, development, and visual — organized for what the work needs.",
    skillsProcess: "See full process",
    contactKicker: "Next step",
    contactTitle: "I'm open to new challenges.",
    contactLead:
      "I'm looking for opportunities where I can contribute by connecting UX, product, and technology.",
  },
  system: {
    hubTitle: "Design and development with intent",
    hubSubtitle:
      "Projects, story, method, and hiring — pick a module to continue.",
    hubHint: "Tap or hover a module to continue.",
    hubKicker: "Portfolio system",
    toggleExpand: "Open modules",
    toggleCollapse: "Close modules",
    centralButtonAria: "Open or close circular module menu",
    goProjects: "View selected projects",
    goStory: "Explore the story",
    goWork: "View the method",
    goHire: "Hire services",
    coreLabel: "LG",
    quickProjects: "View projects",
    quickHire: "Hire",
    moduleBlurb: {
      projetos: "Real cases and deliveries",
      historia: "Background and positioning",
      "como-trabalho": "Principles, process, and tools",
      contratar: "LPs, sites, and systems",
    },
  },
  header: {
    tagline: "UX/UI · Product · Web",
  },
  language: {
    aria: "Language",
    pt: "PT",
    en: "EN",
  },
  footer: {
    line: "Lucas Gabriel Rodrigues — UX/UI · Product · Web",
  },
  intro: {
    tagline: "UX/UI · Product · Web",
  },
  meta: {
    title:
      "Lucas Gabriel Rodrigues — UX/UI Designer, Product Designer & Web Developer",
    description:
      "Portfolio of Lucas Gabriel Rodrigues — UX/UI, Product Design, and Web Development, with digital products, systems, SaaS, and web experiences.",
  },
  sidebar: {
    sectionAria: "Summary of the section in view",
    categoriesAria: "Categories",
    categoriesTitle: "Categories",
    about: "About Me",
    aboutBlurb:
      "UX and Web Designer with a product mindset, technical execution, and outcome focus.",
    formation: "Education",
    recognitions: "Recognition",
    cursorTemplate: "AI-assisted process",
    positioning: "Positioning",
    howIWork: "Principles",
    tools: "Tools",
    creativity: "Creative foundation",
    objective: "Objective",
    contact: "Contact",
    designProcess: "Process",
  },
  designProcess: {
    sectionKicker: "Method reference",
    sectionTitle: "How I run UX and product projects",
    phasesHeading: "Reference phases",
    deliverablesLabel: "Typical deliverables",
  },
  projectCase: {
    jumpNavAria: "Jump to section for this project",
    jumpCase: "Case",
    jumpKeyStages: "Deliverables",
    jumpPreview: "Preview",
    jumpSpecs: "Specs",
    caseLead:
      "Summary of context and approach for this piece of work. The full 10-phase process is on the How I work page.",
    caseHeading: "Case: {title}",
    problem: "Problem / context",
    solution: "Solution and approach",
    results: "Outcomes",
  },
  caseDeck: {
    backToProjects: "Back to projects",
    context: "Context",
    projectType: "Type",
    segment: "Segment",
    objective: "Main objective",
    role: "My role",
    overview: "Overview",
    chapterNavAria: "Case chapter navigation",
    chapterLabel: "Chapter",
    previousChapter: "Previous chapter",
    nextChapter: "Next chapter",
    progressAria: "Case reading progress",
    previewCta: "Load live preview",
    previewTitle: "Project preview",
    previewDescription: "Open the published site to validate the final implementation.",
    openExternal: "Open preview in new tab",
    previewUnavailable: "This project has no preview link available.",
    loadingPreview: "Loading preview...",
    previewError: "Could not load the preview. Use open in new tab.",
    swipeHint: "Mobile tip: swipe left/right to change chapter.",
    caseCta: "View case study",
    caseNotFound: "Case not found.",
    galleryHeading: "Product interface",
    galleryExpand: "Expand screenshot",
    galleryClose: "Close",
  },
  pages: {
    projectsHeading: "Selected projects",
    projectsKicker: "Portfolio",
    projectsLead:
      "Projects where UX, product, and technology work together — each card opens the full case study. Explorations live in their own section.",
    projectsFeaturedHeading: "Featured",
    projectsExplorationsHeading: "Explorations",
    historiaHeading: "About",
    historiaKicker: "Background",
    historiaLead:
      "Education, recognition, and positioning — UX, product thinking, and technical execution.",
    workHeading: "Working process",
    workLead:
      "Principles, an adaptable process, and tools to turn requirements into clear interfaces and navigable deliveries.",
    contactHeading: "Contact",
    contactKicker: "Next step",
    contactLead:
      "I'm looking for opportunities where I can contribute by connecting UX, product, and technology.",
    hireHeading: "Hire",
    sectionsJumpAria: "Jump to section",
  },
  exportDoc: {
    title: "LinkedIn export",
    kicker: "Per-project carousel",
    lead: "Pick a project and generate a slide PDF — LinkedIn document/carousel format, with steps and real screenshots.",
    printCta: "Print / save PDF",
    openCta: "Export for LinkedIn",
    openProjectCta: "LinkedIn export",
    selectHeading: "Choose a project",
    selectLead:
      "Each export becomes a PDF carousel: hook cover, swipeable steps, and real interface captures.",
    roleLabel: "Role",
    typeLabel: "Type",
    segmentLabel: "Segment",
    objectiveLabel: "Objective",
    challengeLabel: "The challenge",
    solutionLabel: "The solution",
    stagesLabel: "Key stages",
    galleryLabel: "Real interface",
    footer: "Lucas Gabriel Rodrigues — UX, Web Design & Digital Development",
    linkedinHint:
      "Print → Destination: Save as PDF → Keep slide page size. On LinkedIn: create post → Document.",
    backToSelect: "All exports",
    notFound: "Project not found for export.",
    carouselLabel: "LinkedIn carousel",
    swipeHint: "Swipe for the next →",
    coverEyebrow: "Real case",
    coverHook: "From problem to interface — step by step",
    stepLabel: "Step",
    tipLabel: "Tip",
    visualLabel: "Inside the product",
    resultLabel: "Outcome",
    ctaTitle: "Want a project with this clarity?",
    ctaLead:
      "UX, web design, and systems — from briefing to a ready-to-use interface.",
    ctaContact: "Let's talk",
    slideOf: "of",
    sceneHub: "SGQ dashboard and shortcuts hub",
    sceneFlow: "Modules: documents, field, certificates, sales",
    sceneTrust: "Master list and document traceability",
    sceneConcept: "Illustrated system scenario",
  },
  exportPortfolio: {
    backHome: "Home",
    carouselLabel: "LinkedIn carousel — new portfolio",
    linkedinHint:
      "Print → Save as PDF (1200×627). On LinkedIn: Document or image sequence.",
    coverEyebrow: "Update",
    coverTitle: "My new portfolio is live 🚀",
    coverLead:
      "UX/UI, Product Design, and Web — cases, process, and positioning in one place.",
    flagshipEyebrow: "Flagship project",
    webEyebrow: "Web",
    webTitle: "Web experiences with clarity and conversion",
    methodEyebrow: "Method",
    methodTitle: "How I build",
    methodLead: "From problem to product — in five moves.",
    ctaKicker: "UX/UI · Product Design · Web",
    ctaLead:
      "See the full portfolio at lgr-design.vercel.app — let's talk about the next step.",
    ctaContact: "Let's talk",
  },
  hire: {
    viewCase: "View case",
    selectServiceAria: "Choose a service and get in touch",
  },
  deliveryType: {
    "lp-institucional": "LP / Institutional",
    sistema: "System",
  },
  sections: {
    about: "About Me",
    formation: "Education & Specialization",
    formationLead:
      "Background aimed at strategic digital experiences that combine usability, business, and technical execution.",
    recognitions: "Recognition & Highlights",
    positioning: "Professional positioning",
    howIWork: "Working principles",
    tools: "Process tools",
    creative: "Creative foundation",
    objective: "Professional objective",
    contact: "Contact",
  },
  creative: {
    intro:
      "Secondary creative foundations — hobbies and practices that inform visual judgment, not the primary positioning:",
    outro:
      "Kept at the end of Process so they don’t compete with principles and professional method.",
  },
  contact: {
    whatsapp: "WhatsApp",
    email: "Email",
    hireLink: "View services to hire",
    cvHint:
      "PDF resume is available on the site — use the download button or request via email/WhatsApp.",
    linkedin: "LinkedIn",
    github: "GitHub",
  },
  resume: {
    download: "Download résumé (PDF)",
  },
  projects: {
    byTopic: "Projects by topic",
    browseByTopicLead:
      "Real work across health and business — landing pages, institutional sites, and systems. Each card opens the full case study.",
    project: "Project",
    selectProjectAria: "Select project",
    ofTotal: "{current} of {total}",
    noneInTopic: "No projects in this topic at the moment.",
    previewHint:
      "Preview width and size can be adjusted in the preview bar (resolution + resize from the corner or edge). Floating = drag; Docked = specifications below.",
    topicProjects: "Projects in this topic",
    keyStages: "Key stages of the selected project",
    aboutDev: "About the build",
    openSiteTab: "Open site in new tab",
    openNewTab: "Open in new tab",
    adjustments: "Controls",
    width: "Width:",
    widthAria: "Preview width",
    widthTitle: "Horizontal preview width",
    viewportFull: "100% (Web)",
    viewport390: "390px (Mobile)",
    viewport768: "768px (Tablet)",
    viewport1024: "1024px (Desktop)",
    dock: "Dock",
    float: "Float",
    dockTitle: "Dock preview (keep specifications visible)",
    floatTitle: "Float preview (draggable window)",
    dockAria: "Dock preview",
    floatAria: "Float preview to draggable mode",
    dragTitle: "Drag preview window",
    dragHint: "— drag to move",
    specs: "Specifications",
    selectForPreview: "Select a project to load the full preview.",
    noPreviewLink: "No preview link",
    resizeCorner: "Drag to resize",
    resizeHeight: "Drag to change height",
    resizeWindowAria: "Resize window",
    resizeHeightAria: "Resize height",
    selectProjectPrefix: "Select project",
    thumbnailAltPrefix: "Project thumbnail",
    thumbnailStatic: "Static thumbnail",
    keyStagesHeading: "Deliverables and UX focus on this site",
    keyStagesLead:
      "What we prioritized in this engagement — separate from the macro process on How I work.",
  },
  projectCard: {
    previewPlaceholder: "Project preview",
    hide: "Hide",
    aboutDev: "About the build",
    viewSite: "View site",
  },
  categoryFilter: {
    aria: "Filter by category",
    all: "All",
  },
};
