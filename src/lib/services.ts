import type { ServicesContent } from "@/types";

export const servicesContent: ServicesContent = {
  heroKicker: "Serviços",
  heroTitle: "Contrate desenvolvimento com clareza de escopo",
  heroLead:
    "Dois caminhos objetivos: landing pages e sites institucionais focados em conversão, ou sistemas empresariais pensados para operação real. Sem preços públicos — alinhamos escopo, prazo e investimento em conversa direta.",
  offeringsTitle: "O que posso desenvolver para você",
  audienceLabel: "Para quem",
  deliverablesLabel: "O que entrega",
  stagesLabel: "Como conduzo",
  timelineLabel: "Prazo típico",
  relatedLabel: "Projetos relacionados",
  processTitle: "Como funciona a contratação",
  processLead:
    "Processo curto e transparente, do briefing à publicação — com decisões documentadas em cada etapa.",
  processSteps: [
    {
      title: "Briefing e alinhamento",
      description:
        "Entendo objetivo de negócio, público, restrições e o que já existe (marca, conteúdo, sistemas).",
    },
    {
      title: "Proposta de escopo",
      description:
        "Defino entregáveis, etapas, responsabilidades e estimativa de prazo — sem surpresas no meio do caminho.",
    },
    {
      title: "Design e implementação",
      description:
        "Estruturo a experiência, prototipo quando necessário e desenvolvo a solução navegável em produção.",
    },
    {
      title: "Entrega e suporte inicial",
      description:
        "Publicação, handoff e ajustes finais para você operar com segurança.",
    },
  ],
  ctaTitle: "Vamos conversar sobre o seu projeto",
  ctaLead:
    "Envie o contexto do desafio (LP, site institucional ou sistema) e respondo com disponibilidade, próximos passos e direcionamento de escopo.",
  whatsappCta: "Falar no WhatsApp",
  emailCta: "Enviar e-mail",
  ctaWhatsappPrefill:
    "Olá Lucas, gostaria de conversar sobre um projeto de desenvolvimento.",
  ctaEmailSubject: "Proposta de projeto",
  offerings: [
    {
      id: "lp-institucional",
      title: "Landing page ou site institucional",
      summary:
        "Presença digital com hierarquia clara, credibilidade e CTAs orientados a ação — do diagnóstico da mensagem à publicação.",
      audience:
        "Profissionais liberais, clínicas, indústrias e empresas que precisam de uma vitrine confiável ou página de conversão.",
      deliverables: [
        "Arquitetura da informação e estrutura de seções",
        "UI/UX responsiva alinhada à marca",
        "Copy estratégica e pontos de conversão",
        "Implementação front-end pronta para produção",
        "Formulários ou integração com WhatsApp/contato",
      ],
      stages: [
        "Diagnóstico de mensagem e proposta de valor",
        "Wireframe e hierarquia visual",
        "Design de alta fidelidade",
        "Desenvolvimento e publicação",
      ],
      timeline:
        "Em geral de 2 a 6 semanas, conforme complexidade, volume de conteúdo e número de páginas.",
      relatedProjectSlugs: [
        "psi-bia-rossi",
        "lp-farma-com",
        "ofag-revamp",
        "clinica-dverso",
      ],
      whatsappPrefill:
        "Olá Lucas, gostaria de contratar desenvolvimento de landing page ou site institucional. Contexto do projeto:",
      emailSubject: "Proposta — LP / site institucional",
      emailBody:
        "Olá Lucas,%0D%0A%0D%0AGostaria de contratar desenvolvimento de landing page ou site institucional.%0D%0A%0D%0AContexto do projeto:%0D%0A",
    },
    {
      id: "sistemas-empresariais",
      title: "Sistemas empresariais",
      summary:
        "Aplicações web para operação interna: fluxos, autenticação, painéis e telas que suportam o dia a dia do time.",
      audience:
        "Empresas e times que precisam digitalizar processos, reduzir retrabalho e ter uma ferramenta sob medida — não só um site.",
      deliverables: [
        "Mapeamento de fluxos e regras de negócio",
        "Arquitetura de telas e navegação",
        "Interface operacional clara e consistente",
        "Implementação web (auth, listagens, formulários, estados)",
        "Entrega navegável com handoff documentado",
      ],
      stages: [
        "Discovery de processos e usuários internos",
        "Modelagem de fluxos e prioridades",
        "Prototipação das telas críticas",
        "Desenvolvimento iterativo e validação",
      ],
      timeline:
        "Em geral de 4 a 12+ semanas, conforme número de módulos, integrações e complexidade das regras.",
      relatedProjectSlugs: ["qualiproc-ctli"],
      whatsappPrefill:
        "Olá Lucas, gostaria de contratar desenvolvimento de sistema empresarial. Contexto do projeto:",
      emailSubject: "Proposta — sistema empresarial",
      emailBody:
        "Olá Lucas,%0D%0A%0D%0AGostaria de contratar desenvolvimento de sistema empresarial.%0D%0A%0D%0AContexto do projeto:%0D%0A",
    },
  ],
};
