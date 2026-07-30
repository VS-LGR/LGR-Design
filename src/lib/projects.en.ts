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
  { id: "empresas", label: "Companies" },
];

export const projectsListEn: Project[] = [
  {
    id: "psi-bia-rossi",
    title: "Psi Bia Rossi",
    category: "web",
    topic: "saude",
    deliveryType: "lp-institucional",
    slug: "psi-bia-rossi",
    description:
      "Institutional site for a psychoanalysis practice: methodology, services, testimonials, and contact — focused on trust and booking conversion.",
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
    deliveryType: "lp-institucional",
    slug: "lp-farma-com",
    description:
      "Institutional landing for Pharmatech: pharmaceutical technology positioning, specialties, credibility, and a commercial contact CTA.",
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
    deliveryType: "lp-institucional",
    slug: "ofag-revamp",
    description:
      "Institutional site for OFAG, a technical printing company for regulated markets, with content in Portuguese, English, and Spanish.",
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
    title: "QualiProc",
    category: "web",
    topic: "empresas",
    deliveryType: "sistema",
    slug: "qualiproc-ctli",
    description:
      "Multi-tenant SaaS quality-management platform for calibration labs — documents, field collection, certificates, personnel, and commercial ops aligned with ISO/IEC 17025.",
    developmentExplanation:
      "React SPA with Supabase backend (Auth, PostgreSQL, Storage, RLS, and Edge Functions), deployed on Vercel. Includes PDF/DOCX exports, per-tenant backup, and role-based multi-tenant governance — software owned by CTLI, commercial brand QualiProc.",
    keyStages: [
      {
        title: "Centralized lab QMS",
        description:
          "Requirements hub, controlled documents, Master List, and field/certification flows in one authenticated environment.",
      },
      {
        title: "Multi-tenant governance",
        description:
          "Per-client environment isolation, access roles, audit trails on sensitive operations, and CTLI administration.",
      },
      {
        title: "Operations and continuity",
        description:
          "Dashboard shortcuts and indicators, expiry notices, on-demand/periodic backup, and module onboarding by access level.",
      },
    ],
    thumbnail: "/img/qualiproc/dashboard-sidebar.png",
    link: "https://ctli-sistema.vercel.app/login",
    caseStudy: {
      context: {
        type: "Multi-tenant SaaS / laboratory QMS",
        segment: "Calibration laboratories · ISO/IEC 17025",
        objective:
          "Centralize documents, collection, certificates, personnel, and commercial ops with traceability and access control",
        role: "UI/UX, information architecture, visual direction, and front-end",
        overview:
          "QualiProc (powered by CTLI) is a multi-tenant SaaS quality-management platform for calibration labs: documents, collection, certificates, personnel, and commercial operations in one system — with access control, backup, and governance aligned to ISO 17025. Commercial brand QualiProc; software ownership CTLI.",
      },
      gallery: [
        {
          src: "/img/qualiproc/dashboard-sidebar.png",
          caption: "Dashboard with requirements navigation and operational shortcut hub",
          alt: "QualiProc dashboard with sidebar and shortcuts",
        },
        {
          src: "/img/qualiproc/dashboard-hub.png",
          caption: "Shortcut hub: commercial, collection, certificates, personnel, and registries",
          alt: "QualiProc dashboard shortcut hub",
        },
        {
          src: "/img/qualiproc/indicadores.png",
          caption: "Monthly indicators and expiry notices for standards and instruments",
          alt: "Indicators panel and expiry notices",
        },
        {
          src: "/img/qualiproc/lista-mestra-alteracoes.png",
          caption: "Recent Master List changes — document traceability",
          alt: "Master List change feed",
        },
        {
          src: "/img/qualiproc/documentos-lembretes.png",
          caption: "Recent documents, pinned items, and environment reminders",
          alt: "Recent documents and reminders in QualiProc",
        },
        {
          src: "/img/qualiproc/ambientes-admin.png",
          caption: "CTLI administration of environments (clients) with isolated tenant data",
          alt: "Multi-tenant environment management in QualiProc",
        },
      ],
      chapters: [
        {
          id: "problem",
          label: "Problem",
          title: "Scattered quality, hard to audit",
          blocks: [
            {
              id: "p1",
              type: "text",
              content:
                "Calibration labs must bring together procedures, records, field collection, certificates, controlled documents, personnel, and commercial flows without losing traceability or ISO/IEC 17025 compliance.",
            },
            {
              id: "p2",
              type: "bullets",
              items: [
                "Processes and evidence fragmented across tools and spreadsheets",
                "Unclear access roles for quality management, field teams, and client portal",
                "Hard to keep Master List, versioning, and operational alerts consistent",
              ],
            },
          ],
        },
        {
          id: "solution",
          label: "Solution",
          title: "An authenticated, modular, multi-tenant QMS",
          blocks: [
            {
              id: "s1",
              type: "text",
              content:
                "QualiProc concentrates quality operations in a multi-tenant SPA: each environment (client) has isolated data, branding, and users.",
            },
            {
              id: "s2",
              type: "bullets",
              title: "Core modules",
              items: [
                "Requirements navigation and document hub aligned to the lab QMS",
                "Controlled documents / Master List with editor and operational versioning",
                "Field collection, certificates, personnel/competence, and supporting registries",
                "Commercial flows (proposals, orders, quotes) and dashboard shortcuts/reminders",
                "Per-tenant backup and recovery; help/tutorials by module and role",
              ],
            },
          ],
        },
        {
          id: "architecture",
          label: "Stack",
          title: "Product architecture (high level)",
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
                "React front-end with custom components plus Radix/Tailwind UI",
                "Supabase: PostgreSQL, Auth, Storage, RLS, and Edge Functions",
                "Institutional PDF exports and DOCX editor for procedures/records",
                "Per-tenant backup (integrity checks, dry-run, confirmed restore) plus platform continuity",
              ],
            },
          ],
        },
        {
          id: "governance",
          label: "Governance",
          title: "Security and accountability without exposing IP",
          blocks: [
            {
              id: "g1",
              type: "bullets",
              items: [
                "Account authentication and distinct roles (CTLI admin, quality, field, portal)",
                "Tenant isolation and access policies (RLS / module gates)",
                "Audit trails on sensitive operations (e.g. backup/restore)",
                "EULA and proprietary license with rights reserved to CTLI",
                "CSV/BPx-compatible approach when quality/data impact requires it — without exposing internal protocols",
              ],
            },
          ],
        },
        {
          id: "results",
          label: "Results",
          title: "Quality operations in one environment",
          blocks: [
            {
              id: "r1",
              type: "stats",
              stats: [
                { label: "Model", value: "Multi-tenant SaaS" },
                { label: "Standard", value: "ISO/IEC 17025" },
                { label: "Scope", value: "QMS + field + commercial" },
                { label: "Ownership", value: "CTLI · QualiProc brand" },
              ],
            },
            {
              id: "r2",
              type: "quote",
              content:
                "One system for documents, collection, certificates, personnel, and commercial operations — with governance aligned to accredited laboratory reality.",
            },
          ],
        },
      ],
      previewTitle: "QualiProc preview",
      previewDescription:
        "Login screen for the authenticated environment (closed system). The preview shows product entry — without exposing real operational data.",
    },
    caseProblem:
      "Centralize laboratory QMS — documents, collection, certificates, personnel, and commercial ops — with multi-tenant isolation under ISO/IEC 17025.",
    caseSolution:
      "QualiProc SPA (CTLI) with quality modules, operational hub, indicators, Master List, environment admin, and per-tenant backup.",
    caseResults: [
      { label: "Model", value: "Multi-tenant SaaS" },
      { label: "Standard", value: "ISO/IEC 17025" },
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
      "Landing for Clínica Dverso (therapeutic center in Sorocaba): conversion, micro-interactions, and VLibras accessibility.",
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
  {
    id: "grimorio-aventureiro",
    title: "Grimório do Aventureiro",
    category: "web",
    topic: "empresas",
    deliveryType: "sistema",
    slug: "grimorio-aventureiro",
    description:
      "DnD 5e character-sheet web tool in Portuguese: guided creation, automatic calculations, translated spells and wild shapes, and item forge with balance scores.",
    developmentExplanation:
      "SPA built for Brazilian tables — Chapter 1 creation flow, rules engine for HP/AC/skills/slots, translated catalogs, and rarity-budget forge. SRD-based content; not affiliated with Wizards of the Coast.",
    keyStages: [
      {
        title: "Guided character creation",
        description:
          "Step-by-step flow (race, class, abilities, background, gear) designed for Portuguese-speaking players.",
      },
      {
        title: "Rules engine and living sheet",
        description:
          "HP, AC, skills, slots, and DCs calculated automatically — fewer manual mistakes at the table.",
      },
      {
        title: "Forge with balance scoring",
        description:
          "Magic item creation with rarity budgets and an automatic score to keep play balanced.",
      },
    ],
    link: "https://dnd-br.com.br",
    caseStudy: {
      context: {
        type: "Web tool / RPG character sheet system",
        segment: "DnD 5e players and tables in Brazil",
        objective:
          "Make Portuguese character creation and management easier with auto-calculations and translated content",
        role: "UI/UX, information architecture, visual direction, and front-end",
        overview:
          "Grimório do Aventureiro is a DnD 5e-compatible tool for Brazilian tables: sheets in Portuguese, translated spells and wild shapes, and an item forge with balance scores. Not affiliated with Wizards of the Coast; rules based on authorized SRD material.",
      },
      chapters: [
        {
          id: "problem",
          label: "Problem",
          title: "English sheets and manual math at Brazilian tables",
          blocks: [
            {
              id: "p1",
              type: "text",
              content:
                "Brazilian players often face English-only tools, error-prone manual calculations, and little support for translated spells/wild shapes or balanced item crafting.",
            },
            {
              id: "p2",
              type: "bullets",
              items: [
                "Rules and spell content mostly in English",
                "HP, AC, and slot math done by hand",
                "Magic item creation without balance guidance",
              ],
            },
          ],
        },
        {
          id: "solution",
          label: "Solution",
          title: "A full Portuguese tool for the table",
          blocks: [
            {
              id: "s1",
              type: "text",
              content:
                "A web environment with guided creation, a living sheet, translated catalogs, and a forge with automatic scoring — focused on Brazilian UX.",
            },
            {
              id: "s2",
              type: "bullets",
              title: "Capabilities",
              items: [
                "Guided creation aligned with Chapter 1",
                "Living sheet with a rules engine",
                "Spells and wild shapes in Portuguese",
                "Item forge with budget and balance score",
              ],
            },
          ],
        },
        {
          id: "results",
          label: "Results",
          title: "Less friction between rules and play",
          blocks: [
            {
              id: "r1",
              type: "stats",
              stats: [
                { label: "Language", value: "Brazilian Portuguese" },
                { label: "Scope", value: "Sheets · Spells · Forge" },
              ],
            },
          ],
        },
      ],
      previewTitle: "Grimório preview",
      previewDescription:
        "Open the live tool to explore character creation, spells, and forge in Portuguese.",
    },
    caseProblem:
      "Reduce friction from English DnD 5e sheets and manual math for Brazilian tables, with translated content and balanced item creation.",
    caseSolution:
      "Grimório SPA with guided creation, rules engine, PT spells/wild shapes, and forge with automatic balance scores.",
    caseResults: [
      { label: "Language", value: "Brazilian Portuguese" },
      { label: "Scope", value: "Sheets · Spells · Forge" },
    ],
  },
];
