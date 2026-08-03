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
    cardCategories: ["UX/UI","Conversion","Gamification"],
    cardRole: "UX/UI · Copy · Front-end",
    slug: "psi-bia-rossi",
    description:
      "A digital experience designed to convey comfort and trust — and make the first contact easier.",
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
        role: "UX/UI, visual direction, copy, and front-end",
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
                { label: "Shipped", value: "Responsive institutional site published" },
                { label: "Objective", value: "Clarity for clinical contact" },
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
      { label: "Shipped", value: "Responsive institutional site published" },
      { label: "Objective", value: "Clarity for clinical contact" },
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
                { label: "Objective", value: "Positioning and contact channel" },
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
      { label: "Objective", value: "Positioning and contact channel" },
    ],
  },
  {
    id: "ofag-revamp",
    title: "OFAG",
    category: "web",
    topic: "empresas",
    deliveryType: "lp-institucional",
    cardCategories: ["B2B","UX/UI","Web"],
    cardHook: "High capability, low perception.",
    cardRole: "UX/UI · Information Architecture · Front-end",
    slug: "ofag-revamp",
    description:
      "Recreation and evolution of a digital presence for a technical company with international reach.",
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
        role: "UX/UI, information architecture, and front-end",
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
    cardCategories: ["SaaS","UX/UI","Product","Systems"],
    cardHook: "How do you turn complex processes into a SaaS?",
    cardRole: "UX/UI · Information Architecture · Product · Development",
    slug: "qualiproc-ctli",
    description:
      "Quality management platform for calibration laboratories.",
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
        role: "UX/UI, information architecture, product, and development",
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
          id: "thinking",
          label: "Thinking",
          title: "Quality product before “more screens”",
          blocks: [
            {
              id: "t1",
              type: "text",
              content:
                "The hypothesis: value comes from a continuous evidence flow — from requirement to document and from field collection to certificate — with tenant isolation. AI or automation only belongs where governance and traceability remain intact.",
            },
            {
              id: "t2",
              type: "bullets",
              items: [
                "Prioritize roles (CTLI admin, quality, field, portal) and module permissions",
                "Treat the Master List and versioning as the QMS core, not an appendix",
                "Keep the case IP-safe: no internal rules, protocols, or real client data",
              ],
            },
          ],
        },
        {
          id: "design",
          label: "Design",
          title: "A scannable operational hub",
          blocks: [
            {
              id: "d1",
              type: "text",
              content:
                "The interface organizes complexity into a dashboard with shortcuts, indicators, and alerts — less of an endless menu, more aligned with laboratory routines.",
            },
            {
              id: "d2",
              type: "bullets",
              items: [
                "Sidebar organized by QMS requirements and modules",
                "Shortcut hub for commercial, collection, certificates, and personnel",
                "Dense surfaces with clear typographic hierarchy and no unnecessary ornament",
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
          label: "Tech",
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
          label: "Product",
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
                "One system for documents, collection, certificates, personnel, and commercial operations — with governance aligned to accredited laboratory reality. The public preview shows the closed product’s authenticated entry point without exposing real operational data.",
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
    title: "Clínica DVERSO",
    category: "web",
    topic: "saude",
    deliveryType: "lp-institucional",
    cardCategories: ["Web","UX/UI","SEO","Conversion"],
    cardRole: "UX/UI · Information Architecture · Front-end",
    slug: "clinica-dverso",
    description:
      "A digital experience for a multi-specialty clinic, structured for communication, acquisition, and conversion.",
    developmentExplanation:
      "I built a welcoming landing page bringing together psychology, neurodivergence, music psychotherapy, nutrition, and dog-assisted therapy in clear blocks. Lightweight Lottie micro-interactions guide attention, contact CTAs support the journey, and VLibras expands access in Brazilian Sign Language.",
    keyStages: [
      {
        title: "Welcoming page built for contact",
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
        objective: "Make first contact easier with warmth, clarity, and inclusion",
        role: "UX/UI, information architecture, copy, and front-end",
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
          id: "thinking",
          label: "Thinking",
          title: "One narrative, multiple forms of care",
          blocks: [
            {
              id: "t1",
              type: "text",
              content:
                "The site needed to welcome and guide families without becoming a cold catalog. Specialties were treated as scannable blocks under one brand voice, with contact CTAs at decision points and no unsupported conversion claims.",
            },
            {
              id: "t2",
              type: "bullets",
              items: [
                "Unify care and clarity across every therapeutic specialty",
                "Prioritize mobile use and quick reading",
                "Treat Brazilian Sign Language accessibility as a requirement, not an extra",
              ],
            },
          ],
        },
        {
          id: "design",
          label: "Design",
          title: "Warm and scannable",
          blocks: [
            {
              id: "d1",
              type: "bullets",
              items: [
                "Light typographic hierarchy to reduce cognitive load",
                "Specialty sections with a consistent visual rhythm",
                "Recurring CTAs that do not compete with clinical content",
              ],
            },
          ],
        },
        {
          id: "tech",
          label: "Tech",
          title: "Micro-interactions and inclusion",
          blocks: [
            {
              id: "te1",
              type: "tags",
              items: ["Lottie", "VLibras", "Responsive landing"],
            },
            {
              id: "te2",
              type: "bullets",
              items: [
                "Lightweight Lottie animations guide attention without blocking reading",
                "VLibras widget expands access in Brazilian Sign Language",
                "Implementation focused on mobile performance and clarity",
              ],
            },
          ],
        },
        {
          id: "results",
          label: "Product",
          title: "A published landing page designed for contact",
          blocks: [
            {
              id: "r1",
              type: "stats",
              stats: [
                { label: "Shipped", value: "Responsive landing published" },
                { label: "Highlights", value: "Micro-interactions + VLibras" },
              ],
            },
            {
              id: "r2",
              type: "text",
              content:
                "Observable result: a live website with a unified narrative and an accessible contact path, without claiming unverified conversion performance.",
            },
          ],
        },
      ],
      previewTitle: "Clinic preview",
      previewDescription:
        "Explore the published page’s welcoming tone, lightweight micro-interactions, and VLibras accessibility.",
    },
    caseProblem:
      "Create a welcoming page for multiple care specialties that guides families toward first contact on mobile without sacrificing inclusion or clarity.",
    caseSolution:
      "Responsive landing page with scannable specialty sections, lightweight Lottie micro-interactions, clear contact CTAs, and VLibras integration.",
    caseResults: [
      { label: "Shipped", value: "Responsive landing published" },
      { label: "Highlights", value: "Micro-interactions + VLibras" },
    ],
  },
  {
    id: "grimorio-aventureiro",
    title: "Grimório do Aventureiro",
    category: "web",
    topic: "empresas",
    deliveryType: "sistema",
    cardCategories: ["Product Design","UX","Development"],
    cardRole: "UX/UI · Product · Development",
    slug: "grimorio-aventureiro",
    description:
      "A Portuguese-language experience to simplify creating and managing RPG characters.",
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
        role: "UX/UI, product, and development",
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
          id: "thinking",
          label: "Thinking",
          title: "A product for the table, not a polished PDF",
          blocks: [
            {
              id: "t1",
              type: "text",
              content:
                "The differentiator is reducing friction during actual play: a Chapter 1-aligned flow, a dependable rules engine, and Portuguese content — with clear attribution to SRD material and no Wizards of the Coast affiliation.",
            },
            {
              id: "t2",
              type: "bullets",
              items: [
                "Prioritize guided character creation before advanced features",
                "Automate calculations that commonly cause human error (HP, AC, slots, DC)",
                "Treat the forge as a constrained system, not an unrestricted sandbox",
              ],
            },
          ],
        },
        {
          id: "design",
          label: "Design",
          title: "Tool UI, not marketing UI",
          blocks: [
            {
              id: "d1",
              type: "bullets",
              items: [
                "Clear steps throughout character creation",
                "Dense but readable sheets with critical information first",
                "RPG visual language without ornamental noise",
              ],
            },
          ],
        },
        {
          id: "solution",
          label: "Tech / Product",
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
          label: "Product",
          title: "Published web tool",
          blocks: [
            {
              id: "r1",
              type: "stats",
              stats: [
                { label: "Language", value: "Brazilian Portuguese" },
                { label: "Scope", value: "Sheets · Spells · Forge" },
                { label: "Status", value: "Published at dnd-br.com.br" },
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
      { label: "Status", value: "Published at dnd-br.com.br" },
    ],
  },
  {
    id: "hirely",
    title: "Hirely",
    category: "ux",
    topic: "empresas",
    deliveryType: "sistema",
    visibility: "academic",
    cardCategories: ["Product Design","AI","UX"],
    cardRole: "Product Design · UX/UI (academic context)",
    slug: "hirely",
    description:
      "Academic ATS concept with AI — career transition, matching, and recruiter experience, with AI supporting (not replacing) human judgment.",
    developmentExplanation:
      "Product and interface study for an AI-assisted ATS: recruiter journey, stage organization, and value proposition without claiming a commercial live product.",
    keyStages: [
      {
        title: "Product problem",
        description:
          "Map typical recruitment friction (screening, follow-up, lack of visibility) without inventing market metrics.",
      },
      {
        title: "Product thinking + UX",
        description:
          "Define flow, critical info per stage, and interface tone for fast recruiter decisions.",
      },
      {
        title: "Academic narrative",
        description:
          "Package the proposal for presentation (FIAP Next / ARCA), making the conceptual nature explicit.",
      },
    ],
    thumbnail: undefined,
    link: undefined,
    caseStudy: {
      context: {
        type: "Academic concept · Product + UX + AI",
        segment: "Recruiting / ATS",
        objective:
          "Propose a recruitment experience with integrated AI, strategic clarity, and a navigable flow",
        role: "Product design and UX/UI in an academic context (FIAP)",
        overview:
          "Hirely (also referred to as Recruta.AI) is a product study presented at ARCA (FIAP Next): an ATS designed to reduce ambiguity in the hiring funnel with AI support. It is not a published commercial product — the case documents the thinking, experience structure, and academic framing.",
      },
      chapters: [
        {
          id: "problema",
          label: "Problem",
          title: "Opaque, fragmented recruiting",
          blocks: [
            {
              id: "p1",
              type: "text",
              content:
                "Talent teams often work with disconnected tools and little feedback on candidate progress. The pain isn’t “more AI” — it’s visibility and decision-making with less noise.",
            },
            {
              id: "p2",
              type: "bullets",
              items: [
                "Hard-to-scan funnel stages",
                "Decision criteria poorly surfaced in the UI",
                "Risk of tech overclaim in AI solutions",
              ],
            },
          ],
        },
        {
          id: "thinking",
          label: "Thinking",
          title: "Product before the AI feature",
          blocks: [
            {
              id: "t1",
              type: "text",
              content:
                "Core hypothesis: AI only helps if the recruiter flow is already clear. Design prioritizes funnel states, priorities, and next steps — using AI as support, not magic narrative.",
            },
            {
              id: "t2",
              type: "bullets",
              items: [
                "Separate screening, evaluation, and follow-up",
                "Make status and criteria readable in seconds",
                "Declare academic concept limits (no invented metrics)",
              ],
            },
          ],
        },
        {
          id: "design",
          label: "Design",
          title: "Interface for fast decisions",
          blocks: [
            {
              id: "d1",
              type: "bullets",
              items: [
                "Hierarchy by hiring process stage",
                "Cards and lists with minimum needed information",
                "Sober visual language for corporate context",
              ],
            },
          ],
        },
        {
          id: "tech",
          label: "Tech / AI",
          title: "AI as a support layer",
          blocks: [
            {
              id: "te1",
              type: "text",
              content:
                "In the concept, AI supports screening and information organization. The case does not describe a production stack or real performance — focus is product framing and experience.",
            },
          ],
        },
        {
          id: "produto",
          label: "Product",
          title: "Academic validation (FIAP Next)",
          blocks: [
            {
              id: "pr1",
              type: "text",
              content:
                "Selected for presentation at ARCA (FIAP Next), integrating product, technology, and experience. Outcome: concept exposure and a hybrid Product + UX + AI narrative — without claiming commercial traction.",
            },
            {
              id: "pr2",
              type: "stats",
              stats: [
                { label: "Context", value: "Academic / conceptual" },
                { label: "Presentation", value: "ARCA · FIAP Next" },
              ],
            },
          ],
        },
      ],
      previewTitle: "No public preview",
      previewDescription:
        "This case is academic/conceptual and has no open commercial product. Value is in the problem, product, and experience narrative.",
    },
    caseProblem:
      "Opaque, fragmented recruiting flows; risk of selling “AI” without product clarity.",
    caseSolution:
      "ATS concept (Hirely / Recruta.AI) with a readable funnel and AI as support — presented academically at FIAP Next.",
    caseResults: [
      { label: "Context", value: "Academic" },
      { label: "Presentation", value: "ARCA · FIAP Next" },
    ],
  },
];
