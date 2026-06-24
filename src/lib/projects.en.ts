import type { Project, ProjectCategory, ProjectTopic } from "@/types";
import PharmatechThumb from "@/components/Pharmatech.png";
import OfagThumb from "@/components/Ofag.png";

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
    thumbnail: "/img/Screenshot 2026-06-24 133205.png",
    link: "https://psi-bia-rossi.vercel.app",
    caseStudy: {
      context: {
        type: "Landing page / professional presentation site",
        segment: "Mental health",
        objective: "Position the professional with warmth and clinical clarity",
        role: "UI/UX, visual direction, information architecture, strategic copy and front-end",
        overview:
          "Project for a psychologist focused on psychoanalysis (14+ and adults), introducing gamification as a complementary resource while keeping credibility.",
      },
      chapters: [
        {
          id: "problem",
          label: "Problem",
          title: "Perception and clarity friction",
          blocks: [
            {
              id: "p1",
              type: "text",
              content:
                "Mental-health websites often become either too cold or too abstract. The challenge was balancing warmth, objectivity, and trust.",
            },
          ],
        },
        {
          id: "objective",
          label: "Objective",
          title: "Lower first-contact barriers",
          blocks: [
            {
              id: "o1",
              type: "bullets",
              items: [
                "Explain the clinical approach with plain language",
                "Build trust in the first screen",
                "Make WhatsApp booking frictionless",
              ],
            },
          ],
        },
        {
          id: "ux-ui",
          label: "UX/UI",
          title: "Sensitive but scannable flow",
          blocks: [
            {
              id: "u1",
              type: "bullets",
              items: [
                "Progressive flow: introduction, services, method, contact",
                "Typography hierarchy to reduce cognitive load",
                "Welcoming tone without losing professionalism",
              ],
            },
          ],
        },
        {
          id: "solution",
          label: "Solution",
          title: "Trust-oriented structure",
          blocks: [
            {
              id: "s1",
              type: "bullets",
              items: [
                "Softer headline at the top",
                "Gamification explained as a complementary clinical tool",
                "Consistent CTAs at decision points",
              ],
            },
          ],
        },
        {
          id: "results",
          label: "Results",
          title: "Stronger positioning base",
          blocks: [
            {
              id: "r1",
              type: "stats",
              stats: [
                { label: "Shipped", value: "Responsive institutional website in production" },
                { label: "Focus", value: "Conversion and clinical credibility" },
              ],
            },
          ],
        },
      ],
      previewTitle: "Experience preview",
      previewDescription:
        "Final step to explore the live project and validate how the narrative translates into the real interface.",
    },
    caseProblem:
      "Clearly communicate a psychoanalytic approach and the differentiator of board-game gamification, building trust and driving contact—without overwhelming visitors who are new to the topic.",
    caseSolution:
      "Landing page with hierarchy for services and testimonials, a dedicated block for the playful methodology, a form and consistent CTAs across the page, mobile-first for people seeking support in sensitive moments.",
    caseResults: [
      { label: "Shipped", value: "Responsive institutional site in production" },
      { label: "Focus", value: "Conversion and clinical credibility" },
    ],
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
    caseStudy: {
      context: {
        type: "Institutional landing page",
        segment: "Pharmaceutical",
        objective: "Increase authority perception and open business conversations",
        role: "UI/UX, visual direction, information architecture, strategic copy and front-end",
        overview:
          "Institutional landing page built to communicate innovation and technical capacity in a high-compliance market.",
      },
      chapters: [
        {
          id: "problem",
          label: "Problem",
          title: "Trust depends on structure",
          blocks: [
            {
              id: "p1",
              type: "text",
              content:
                "In pharma, message alone does not build authority. The page needed a robust but objective reading flow.",
            },
          ],
        },
        {
          id: "objective",
          label: "Objective",
          title: "Strengthen institutional positioning",
          blocks: [
            {
              id: "o1",
              type: "bullets",
              items: [
                "Show technical capability",
                "Reinforce innovation perception",
                "Enable partnership opportunities",
              ],
            },
          ],
        },
        {
          id: "solution",
          label: "Solution",
          title: "Progressive institutional narrative",
          blocks: [
            {
              id: "s1",
              type: "bullets",
              items: [
                "Hero with immediate value proposition",
                "Sections for technology, team, research, and quality",
                "Contact area designed for B2B relationship flow",
              ],
            },
          ],
        },
        {
          id: "results",
          label: "Results",
          title: "More robust digital presence",
          blocks: [
            {
              id: "r1",
              type: "stats",
              stats: [
                { label: "Shipped", value: "Corporate landing page live" },
                { label: "Goal", value: "Credibility + lead generation" },
              ],
            },
          ],
        },
      ],
      previewTitle: "Institutional preview",
      previewDescription:
        "Inspect the published landing page to validate hierarchy, narrative progression, and business contact points.",
    },
    caseProblem:
      "Present a pharmaceutical development company with technical yet accessible language for partners and decision-makers on a single page that builds trust and opens a commercial channel.",
    caseSolution:
      "Institutional section architecture (company, specializations, partners, contact), scannable reading for executives, and quote/contact CTAs aligned to a B2B funnel.",
    caseResults: [
      { label: "Shipped", value: "Corporate landing live" },
      { label: "Goal", value: "Credibility + lead generation" },
    ],
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
    caseStudy: {
      context: {
        type: "Institutional website revamp",
        segment: "Technical printing for regulated industries",
        objective: "Communicate compliance, specialization, and commercial clarity",
        role: "UI/UX, visual direction, information architecture, strategic copy and front-end",
        overview:
          "Digital repositioning for OFAG to align online perception with real operational maturity.",
      },
      chapters: [
        {
          id: "problem",
          label: "Problem",
          title: "High capability, weak perception",
          blocks: [
            {
              id: "p1",
              type: "text",
              content:
                "The operation was robust, but the previous website did not express the authority required for regulated industrial decisions.",
            },
          ],
        },
        {
          id: "objective",
          label: "Objective",
          title: "Turn digital presence into a business asset",
          blocks: [
            {
              id: "o1",
              type: "bullets",
              items: [
                "Increase reliability perception",
                "Highlight traceability and quality control",
                "Support business contact with less friction",
              ],
            },
          ],
        },
        {
          id: "solution",
          label: "Solution",
          title: "Authority-driven information architecture",
          blocks: [
            {
              id: "s1",
              type: "tags",
              items: ["Visual credibility", "Proof through numbers", "Distributed CTAs", "Scannability"],
            },
          ],
        },
        {
          id: "results",
          label: "Results",
          title: "Brand image closer to technical maturity",
          blocks: [
            {
              id: "r1",
              type: "stats",
              stats: [
                { label: "Scope", value: "Multilingual institutional website" },
                { label: "Audience", value: "Pharma and regulated industries" },
              ],
            },
          ],
        },
      ],
      previewTitle: "Revamp preview",
      previewDescription:
        "Explore the published version to see how technical depth and commercial clarity are balanced.",
    },
    caseProblem:
      "Communicate processes, compliance, and international reach for regulated industries in three languages without losing clarity or brand consistency.",
    caseSolution:
      "Multilingual information architecture (PT/EN/ES), narrative oriented to certifications and segments, typography and layout tuned for dense technical reading.",
    caseResults: [
      { label: "Scope", value: "Multilingual institutional site" },
      { label: "Audience", value: "Pharma and regulated industries" },
    ],
  },
  {
    id: "qualiproc-ctli",
    title: "QualiProc — CTLI",
    category: "web",
    topic: "empresas",
    slug: "qualiproc-ctli",
    description:
      "Full metrological quality management system for laboratories — field agent onboarding, ISO 17025 documents, certificates, and calibration data collection across web and mobile.",
    developmentExplanation:
      "End-to-end production of the QualiProc platform (powered by CTLI) aligned with ISO 17025: document management with Word editing and upload, Master List, procedures and records, certificate issuance, field calibration data collection, and field agent registration flows. Responsive, accessible interface for web and mobile use in quality and metrology operations.",
    keyStages: [
      {
        title: "ISO 17025 document management",
        description:
          "I structured procedures, records, controlled standards, and critical review in modules aligned with ISO 17025 requirements, including Word document editing and upload.",
      },
      {
        title: "Field operations and certification",
        description:
          "I built field agent registration, calibration data collection, and certificate issuance integrated into the lab's quality workflow.",
      },
      {
        title: "Accessible web and mobile experience",
        description:
          "I designed the interface for continuous use on desktop and mobile devices, prioritizing scannability, operational clarity, and accessibility in audit and control routines.",
      },
    ],
    thumbnail: "/img/Qualiproc CTLI.png",
    caseStudy: {
      context: {
        type: "Quality management system",
        segment: "Metrology and accredited laboratories",
        objective: "Centralize metrological quality under ISO 17025",
        role: "UI/UX, information architecture, visual direction and front-end",
        overview:
          "QualiProc platform for CTLI — document management, certificates, calibration, and field agents in a single regulatory environment.",
      },
      chapters: [
        {
          id: "problem",
          label: "Problem",
          title: "Fragmented quality that's hard to trace",
          blocks: [
            {
              id: "p1",
              type: "text",
              content:
                "Accredited labs must control documents, calibrations, certificates, and field teams without losing traceability or ISO 17025 compliance.",
            },
          ],
        },
        {
          id: "objective",
          label: "Objective",
          title: "Metrological quality in one place",
          blocks: [
            {
              id: "o1",
              type: "bullets",
              items: [
                "Unify document management and field operations",
                "Ensure adherence to ISO 17025 requirements",
                "Speed up certificate issuance and calibration collection",
              ],
            },
          ],
        },
        {
          id: "ux-ui",
          label: "UX/UI",
          title: "Operational, clear, accessible system",
          blocks: [
            {
              id: "u1",
              type: "tags",
              items: ["Web + mobile", "Accessibility", "Role-based flows", "Compliance"],
            },
          ],
        },
        {
          id: "solution",
          label: "Solution",
          title: "Complete platform for metrological quality",
          blocks: [
            {
              id: "s1",
              type: "bullets",
              items: [
                "Field agent registration and calibration data collection",
                "Word editing and upload with procedures and records management",
                "Certificate issuance, Master List, and controls aligned with ISO 17025",
              ],
            },
          ],
        },
        {
          id: "results",
          label: "Results",
          title: "Centralized quality operations",
          blocks: [
            {
              id: "r1",
              type: "stats",
              stats: [
                { label: "Shipped", value: "Full web and mobile system" },
                { label: "Standard", value: "ISO 17025" },
              ],
            },
          ],
        },
      ],
      previewTitle: "QualiProc preview",
      previewDescription:
        "Platform preview focused on document management, certificates, calibration, and field operations under ISO 17025.",
    },
    caseProblem:
      "Centralize metrological quality management — documents, calibrations, certificates, and field agents — in ISO 17025 compliance with a smooth web and mobile experience.",
    caseSolution:
      "Full system with agent registration, Word editing and upload, Master List, certificate issuance, calibration collection, and quality modules structured by standard requirements.",
    caseResults: [
      { label: "Shipped", value: "Full web and mobile system" },
      { label: "Standard", value: "ISO 17025" },
    ],
  },
  {
    id: "clinica-dverso",
    title: "Clínica Dverso",
    category: "web",
    topic: "saude",
    slug: "clinica-dverso",
    description:
      "A welcoming page for Clínica Dverso — a multidisciplinary therapeutic center in Sorocaba — focused on conversion, micro-interactions, and VLibras accessibility.",
    developmentExplanation:
      "I built a welcoming, conversion-oriented landing page bringing together psychology, neurodivergence, music psychotherapy, nutrition, and dog-assisted therapy in clear blocks. Lottie micro-interactions bring sections to life without hurting performance, strategic CTAs guide users to contact, and VLibras integration strengthens inclusion and trust across the journey.",
    keyStages: [
      {
        title: "Welcoming page built for conversion",
        description:
          "I shaped the narrative to convey care and proximity, with well-placed CTAs that make first contact easier for families and caregivers.",
      },
      {
        title: "Micro-interactions and fluid experience",
        description:
          "I used lightweight Lottie animations to humanize reading, guide attention, and reinforce decision moments without compromising clarity or speed.",
      },
      {
        title: "Accessibility with VLibras",
        description:
          "I integrated the VLibras widget to expand access in Brazilian Sign Language, aligning inclusion, institutional credibility, and a more welcoming experience for every audience.",
      },
    ],
    thumbnail: "/img/Dverso.png",
    link: "https://dversos-clinica.vercel.app",
    caseStudy: {
      context: {
        type: "Institutional website",
        segment: "Integrated health clinic",
        objective: "Turn visitors into leads with warmth, clarity, and inclusion",
        role: "UI/UX, visual direction, information architecture, strategic copy and front-end",
        overview:
          "Institutional page for a multidisciplinary clinic, balancing a welcoming tone, micro-interactions, and VLibras accessibility.",
      },
      chapters: [
        {
          id: "problem",
          label: "Problem",
          title: "Risk of fragmented communication",
          blocks: [
            {
              id: "p1",
              type: "text",
              content:
                "With many specialties, the experience could feel generic and confusing, weakening brand unity and patient orientation.",
            },
          ],
        },
        {
          id: "objective",
          label: "Objective",
          title: "Warmth that drives action",
          blocks: [
            {
              id: "o1",
              type: "bullets",
              items: [
                "Convey closeness without losing clarity",
                "Guide families with human, accessible language",
                "Turn interest into contact with strategic CTAs",
              ],
            },
          ],
        },
        {
          id: "ux-ui",
          label: "UX/UI",
          title: "Purposeful micro-interactions",
          blocks: [
            {
              id: "u1",
              type: "tags",
              items: ["Conversion", "Warmth", "Micro-interactions", "VLibras"],
            },
          ],
        },
        {
          id: "solution",
          label: "Solution",
          title: "Welcoming, inclusive, conversion-oriented experience",
          blocks: [
            {
              id: "s1",
              type: "bullets",
              items: [
                "Landing with a human tone and scannable blocks per specialty",
                "Lottie micro-interactions to guide attention and build trust",
                "VLibras integration and CTAs placed at key decision moments",
              ],
            },
          ],
        },
        {
          id: "results",
          label: "Results",
          title: "Care translated into clarity and conversion",
          blocks: [
            {
              id: "r1",
              type: "stats",
              stats: [
                { label: "Shipped", value: "Welcoming responsive landing page" },
                { label: "Highlights", value: "Micro-interactions + VLibras" },
              ],
            },
          ],
        },
      ],
      previewTitle: "Clinic preview",
      previewDescription:
        "See the final page focused on conversion, lightweight micro-interactions, and VLibras accessibility.",
    },
    caseProblem:
      "Build a welcoming page for multiple care lines that converts visitors into contact on mobile, without sacrificing inclusion or clarity.",
    caseSolution:
      "Conversion-oriented landing with Lottie micro-interactions, CTAs at the right journey moments, and VLibras integration to expand access in Brazilian Sign Language.",
    caseResults: [
      { label: "Shipped", value: "Welcoming responsive landing page" },
      { label: "Highlights", value: "Micro-interactions + VLibras" },
    ],
  },
];
