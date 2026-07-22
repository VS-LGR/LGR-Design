import type { DesignProcessContent } from "@/types";

export const designProcessEn: DesignProcessContent = {
  intro:
    "I adapt depth and pace to available time and problem type. The framework below is a reference — phases can be lean or deep depending on the initiative.",
  phases: [
    {
      id: 1,
      title: "Discovery",
      subtitle: "Preparation",
      deliverables: [
        "Influence matrix",
        "NPS / CSAT",
        "Churn and product health signals",
      ],
    },
    {
      id: 2,
      title: "Benchmarking",
      deliverables: [
        "Competitive matrix",
        "Experience map",
        "Empathy map",
        "Service blueprint",
        "Journey flowchart",
      ],
    },
    {
      id: 3,
      title: "Quantitative research",
      subtitle: "Exploratory",
      deliverables: [
        "CSAT",
        "Survey distribution by persona",
        "Jobs to be Done (JTBD)",
      ],
    },
    {
      id: 4,
      title: "Ideation",
      deliverables: ["Structured brainstorming", "Workshops with stakeholders"],
    },
    {
      id: 5,
      title: "Prototype",
      deliverables: [
        "Accessibility (WCAG) as a requirement",
        "Development-ready design",
        "Design critique sessions",
      ],
    },
    {
      id: 6,
      title: "UX testing",
      subtitle: "Concept",
      deliverables: [
        "A/B tests when applicable",
        "Interview sessions with observation (mirror room / recording)",
      ],
    },
    {
      id: 7,
      title: "UX testing",
      subtitle: "Quantitative",
      deliverables: [
        "System Usability Scale (SUS)",
        "Heatmaps and click maps",
        "Average time on tasks",
        "Categorized open feedback",
      ],
    },
    {
      id: 8,
      title: "Design QA",
      deliverables: [
        "Handoff aligned with engineering",
        "UI refinement and edge states",
      ],
    },
    {
      id: 9,
      title: "Pilot",
      deliverables: [
        "Transactional evaluation",
        "Pilot CSAT and CES",
        "Real usage heatmaps",
      ],
    },
    {
      id: 10,
      title: "Roll-out",
      deliverables: [
        "% active time / adoption",
        "LTV and retention (when data exists)",
        "Business metrics agreed with the team",
      ],
    },
  ],
  workModelsSectionTitle: "Working modes by uncertainty",
  workModelsSectionIntro:
    "For efficiency, I combine three modes depending on how much we already know about the problem and the market:",
  workModels: [
    {
      id: "solutions",
      title: "Exploring solutions",
      context: "We already understand the problems well",
      description:
        "Focus on UI alternatives, flows, and delivery: clear criteria, prototyping, and fast validation with users and engineering.",
    },
    {
      id: "hypotheses",
      title: "Exploring hypotheses",
      context: "We do not fully know the problems yet",
      description:
        "More discovery and research: interviews, existing data, and problem framing before investing heavily in UI.",
    },
    {
      id: "ansoff",
      title: "Ansoff matrix (portfolio view)",
      context: "Growth decision / initiative type",
      description:
        "I cross what is new or known for the company and the market to calibrate risk, MVP scope, and learning expectations.",
    },
  ],
  ansoffSectionTitle: "Ansoff as a decision aid",
  ansoffSectionIntro:
    "I use existing product × existing market logic only as a mental map for prioritization conversations — not as a rigid formula.",
  ansoffQuadrants: [
    "Market penetration (known / known)",
    "Market development (known / new)",
    "Product development (new / known)",
    "Diversification (new / new)",
  ],
};
