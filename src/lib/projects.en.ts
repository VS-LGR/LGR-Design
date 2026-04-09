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
    caseStudy: {
      context: {
        type: "Institutional website",
        segment: "Integrated health clinic",
        objective: "Unify multiple specialties with warmth and clear guidance",
        role: "UI/UX, visual direction, information architecture, strategic copy and front-end",
        overview:
          "Project for a multidisciplinary clinic with focus on neurodivergence and dog-assisted therapy.",
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
          title: "Integrated care with faster decisions",
          blocks: [
            {
              id: "o1",
              type: "bullets",
              items: [
                "Explain each specialty with less noise",
                "Convey family-centered care",
                "Help users quickly identify the right service",
              ],
            },
          ],
        },
        {
          id: "solution",
          label: "Solution",
          title: "Clear structure by care front",
          blocks: [
            {
              id: "s1",
              type: "bullets",
              items: [
                "Direct presentation of specialties",
                "Strategic emphasis on neurodivergence and dog-assisted therapy",
                "Accessible visual language and humanized contact journey",
              ],
            },
          ],
        },
        {
          id: "results",
          label: "Results",
          title: "Complexity translated into clarity",
          blocks: [
            {
              id: "r1",
              type: "stats",
              stats: [
                { label: "Shipped", value: "Responsive multidisciplinary landing page" },
                { label: "Experience", value: "Mobile-first for families" },
              ],
            },
          ],
        },
      ],
      previewTitle: "Clinic preview",
      previewDescription:
        "Inspect the live implementation focused on scannability, warmth, and decision-oriented navigation.",
    },
    caseProblem:
      "Organize multiple care lines (neurodivergence, therapies, nutrition, dog-assisted therapy) for families who need quick information on mobile, with a welcoming tone.",
    caseSolution:
      "Modules per specialty, lightweight Lottie motion to humanize without hurting performance, contact CTAs placed at decision moments in the journey.",
    caseResults: [
      { label: "Shipped", value: "Responsive multidisciplinary landing" },
      { label: "Experience", value: "Mobile-first for families" },
    ],
  },
];
