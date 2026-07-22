import type { ServicesContent } from "@/types";

export const servicesContentEn: ServicesContent = {
  heroKicker: "Services",
  heroTitle: "Hire development with clear scope",
  heroLead:
    "Two focused paths: conversion-driven landing pages and institutional sites, or business systems built for real operations. No public pricing — we align scope, timeline, and investment in a direct conversation.",
  offeringsTitle: "What I can build for you",
  audienceLabel: "Who it’s for",
  deliverablesLabel: "What you get",
  stagesLabel: "How I run it",
  timelineLabel: "Typical timeline",
  relatedLabel: "Related projects",
  processTitle: "How hiring works",
  processLead:
    "A short, transparent process from briefing to launch — with documented decisions at each step.",
  processSteps: [
    {
      title: "Briefing and alignment",
      description:
        "I clarify business goals, audience, constraints, and what already exists (brand, content, systems).",
    },
    {
      title: "Scope proposal",
      description:
        "I define deliverables, stages, responsibilities, and a timeline estimate — no mid-project surprises.",
    },
    {
      title: "Design and implementation",
      description:
        "I structure the experience, prototype when needed, and ship a production-ready navigable solution.",
    },
    {
      title: "Delivery and initial support",
      description:
        "Launch, handoff, and final adjustments so you can operate with confidence.",
    },
  ],
  ctaTitle: "Let’s talk about your project",
  ctaLead:
    "Share the challenge (LP, institutional site, or system) and I’ll reply with availability, next steps, and scope direction.",
  whatsappCta: "Chat on WhatsApp",
  emailCta: "Send email",
  ctaWhatsappPrefill:
    "Hi Lucas, I’d like to talk about a development project.",
  ctaEmailSubject: "Project proposal",
  offerings: [
    {
      id: "lp-institucional",
      title: "Landing page or institutional site",
      summary:
        "Digital presence with clear hierarchy, credibility, and action-oriented CTAs — from message diagnosis to launch.",
      audience:
        "Professionals, clinics, industries, and companies that need a trustworthy showcase or conversion page.",
      deliverables: [
        "Information architecture and section structure",
        "Responsive UI/UX aligned to the brand",
        "Strategic copy and conversion points",
        "Front-end implementation ready for production",
        "Forms or WhatsApp/contact integration",
      ],
      stages: [
        "Message diagnosis and value proposition",
        "Wireframe and visual hierarchy",
        "High-fidelity design",
        "Development and launch",
      ],
      timeline:
        "Typically 2–6 weeks, depending on complexity, content volume, and number of pages.",
      relatedProjectSlugs: [
        "psi-bia-rossi",
        "lp-farma-com",
        "ofag-revamp",
        "clinica-dverso",
      ],
      whatsappPrefill:
        "Hi Lucas, I’d like to hire landing page or institutional site development. Project context:",
      emailSubject: "Proposal — LP / institutional site",
      emailBody:
        "Hi Lucas,%0D%0A%0D%0AI’d like to hire landing page or institutional site development.%0D%0A%0D%0AProject context:%0D%0A",
    },
    {
      id: "sistemas-empresariais",
      title: "Business systems",
      summary:
        "Web applications for internal operations: flows, authentication, dashboards, and screens that support day-to-day work.",
      audience:
        "Companies and teams that need to digitize processes, reduce rework, and run a tailored tool — not just a website.",
      deliverables: [
        "Process and business-rule mapping",
        "Screen architecture and navigation",
        "Clear, consistent operational UI",
        "Web implementation (auth, lists, forms, states)",
        "Navigable delivery with documented handoff",
      ],
      stages: [
        "Discovery of processes and internal users",
        "Flow modeling and priorities",
        "Prototyping of critical screens",
        "Iterative development and validation",
      ],
      timeline:
        "Typically 4–12+ weeks, depending on modules, integrations, and rule complexity.",
      relatedProjectSlugs: ["qualiproc-ctli"],
      whatsappPrefill:
        "Hi Lucas, I’d like to hire business system development. Project context:",
      emailSubject: "Proposal — business system",
      emailBody:
        "Hi Lucas,%0D%0A%0D%0AI’d like to hire business system development.%0D%0A%0D%0AProject context:%0D%0A",
    },
  ],
};
