import type { Project, ProjectCategory, ProjectTopic } from "@/types";
import PsiBiaRossiThumb from "@/components/PsiBiaRossi.png";
import PharmatechThumb from "@/components/Pharmatech.png";
import OfagThumb from "@/components/Ofag.png";
import ClinaDversoThumb from "@/components/ClinaDverso.png";

export const projectCategoriesEn: { id: ProjectCategory; label: string }[] = [
  { id: "web", label: "Web" },
  { id: "ux", label: "UX/UI" },
  { id: "identity", label: "Visual identity" },
  { id: "other", label: "Other" },
];

export const projectTopicsEn: { id: ProjectTopic; label: string }[] = [
  { id: "saude", label: "Healthcare" },
  { id: "negocios", label: "Business" },
  { id: "empresas", label: "Companies" },
  { id: "recreativos", label: "Recreation" },
];

export const projectsListEn: Project[] = [
  {
    id: "psi-bia-rossi",
    title: "Psi Bia Rossi",
    category: "web",
    topic: "saude",
    slug: "psi-bia-rossi",
    description:
      "Institutional website for a psychologist specializing in psychoanalysis with gamification through board games. Presents methodology, services, testimonials, and a contact form.",
    developmentExplanation:
      "Landing page focused on conversion and credibility: visual hierarchy for services and testimonials, a gamification section explaining the methodology in steps, and an integrated contact area. Responsive layout and clear navigation to highlight the professional’s differentiators.",
    keyStages: [
      {
        title: "Message diagnosis",
        description:
          "I structured the professional’s value proposition so specialties, approach, and differentiators are understood quickly.",
      },
      {
        title: "Conversion architecture",
        description:
          "I organized the page into trust blocks (services, social proof, and method) to reduce friction toward contact.",
      },
      {
        title: "Action-oriented CTAs and contact",
        description:
          "I prioritized visible, consistent contact points to increase booking rate and reduce drop-off.",
      },
    ],
    thumbnail: PsiBiaRossiThumb,
    link: "https://psi-bia-rossi.vercel.app",
  },
  {
    id: "lp-farma",
    title: "Pharmatech",
    category: "web",
    topic: "empresas",
    slug: "lp-farma-com",
    description:
      "Pharmatech landing page: a pharmaceutical development company focused on technology, research, and partnerships. Sections on the company, specializations, founder, and contact.",
    developmentExplanation:
      "Corporate presentation page structured in sections (About, Specializations, Partners, Contact). Content designed to convey credibility and innovation, highlighting differentiators and a contact call-to-action.",
    keyStages: [
      {
        title: "Institutional strategy",
        description:
          "I defined a corporate reading flow to present technical positioning and reinforce brand credibility.",
      },
      {
        title: "Segmentation by specialty",
        description:
          "I separated areas of expertise into clear sections for decision-makers and partners.",
      },
      {
        title: "Commercial conversion",
        description:
          "I structured contact and quote CTAs to turn interest into commercial opportunities.",
      },
    ],
    thumbnail: PharmatechThumb,
    link: "https://lp-farma-com.vercel.app",
  },
  {
    id: "ofag-revamp",
    title: "OFAG — Technical Printing",
    category: "web",
    topic: "empresas",
    slug: "ofag-revamp",
    description:
      "Institutional website for OFAG, a graphics industry specialist in technical printing for regulated markets, with content in Portuguese, English, and Spanish.",
    developmentExplanation:
      "Project aimed at pharmaceutical and regulated industries, with clear information architecture, navigation in multiple languages (PT/EN/ES), and a credibility focus. Highlights for processes, certifications, and segments served, with responsive layout and typography suited to technical reading.",
    keyStages: [
      {
        title: "Multilingual architecture",
        description:
          "I planned the structure to support PT/EN/ES without losing context, keeping navigation consistent across languages.",
      },
      {
        title: "Compliance narrative",
        description:
          "I organized process, quality, and certification content to communicate regulatory safety clearly.",
      },
      {
        title: "Institutional scalability",
        description:
          "I designed reusable sections for growing corporate content while preserving readability and visual standards.",
      },
    ],
    thumbnail: OfagThumb,
    link: "https://ofag-revamp.vercel.app/pt",
  },
  {
    id: "clinica-dverso",
    title: "Clínica Dverso",
    category: "web",
    topic: "saude",
    slug: "clinica-dverso",
    description:
      "Website for Clínica Dverso, a multidisciplinary clinic focused on integrated health, neurodivergence, and dog-assisted therapy in Sorocaba.",
    developmentExplanation:
      "Landing page with multiple specialties (psychology, neurodivergence, music psychotherapy, nutrition, and dog-assisted therapy), using Lottie animations to bring sections to life without hurting performance. Clear blocks, well-defined CTAs, and a responsive experience tailored to families on mobile.",
    keyStages: [
      {
        title: "Specialty mapping",
        description:
          "I structured each clinical area as independent modules so families and caregivers can discover services easily.",
      },
      {
        title: "Lottie micro-interactions",
        description:
          "I used lightweight animations to enrich the experience without compromising clarity, reading focus, or usability.",
      },
      {
        title: "Humanized contact journey",
        description:
          "I placed conversation and booking CTAs at decision points to lower barriers to first contact.",
      },
    ],
    thumbnail: ClinaDversoThumb,
    link: "https://dversos-clinica.vercel.app",
  },
];
