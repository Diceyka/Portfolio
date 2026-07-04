import type { CaseContent } from "./types";

export const casesEn: Record<string, CaseContent> = {
  "coral-travel": {
    hero: {
      tags: ["End-to-end Redesign", "Design Lead", "Team of 5", "Shipped"],
      title: "Redesigning how millions plan and book their vacations",
      caption: "Coral Travel — website and mobile app",
    },
    product: {
      label: "Product",
      name: "Coral Travel",
      text: "One of the largest tour operators on the market. I led the complete redesign of its digital ecosystem — website and mobile app — from UX audit to production launch, managing a team of 5 designers.",
    },
    details: {
      heading: "Details",
      rows: [
        { value: "Website + mobile app", label: "surface" },
        { value: "Design Lead (team of 5 designers)", label: "role" },
        { value: "UX audit · Redesign · Design system · Launch", label: "scope" },
        { value: "2022 – 2025", label: "timeline" },
      ],
    },
    psr: [
      {
        label: "Problem",
        title: "A Leaking Funnel",
        text: "The legacy site and app hadn't kept up with how people book trips. Fragmented flows, inconsistent UI between platforms and an overloaded search meant users dropped off before reaching payment.",
      },
      {
        label: "Solution",
        title: "One Unified System",
        text: "I led the team through a full cycle: UX audit, new information architecture, a rebuilt booking funnel and a shared design system that unified the website and the mobile app.",
      },
      {
        label: "Result",
        title: "Conversion Doubled",
        text: "After launch: +181% sessions, +87% users, +113% conversion to booking. The premium Villas & Suites concept added +76% visits and +30% average time on site.",
      },
    ],
    impact: {
      heading: "Impact",
      stats: [
        { value: "+113%", title: "Conversion to Booking", note: "After the funnel redesign" },
        { value: "+181%", title: "Sessions", note: "Post-launch vs. pre-redesign" },
        { value: "+87%", title: "Users", note: "Audience growth after launch" },
      ],
    },
    context: {
      label: "Context",
      title: "Coral Travel sells *packaged tours* to millions of travelers.",
      paras: [
        "The business depends on one thing: how easily a person goes from “I want a vacation” to a paid booking. Every extra step in that path costs real money.",
        "By 2022 the digital products had accumulated years of patchwork changes. The web and mobile experiences had drifted apart, and each new feature made the system harder to maintain.",
      ],
    },
    problem: {
      label: "Problem",
      title: "Users were dropping off before booking. The interface was *slowing the business down, losing revenue.*",
      intro: "This is what the audit made concrete,",
      points: [
        "Search and filtering overloaded users with choices before showing anything relevant",
        "Web and app used different patterns for the same tasks — users relearned the product on every platform",
        "No design system: every screen was hand-assembled, slowing both design and development",
      ],
    },
    goals: {
      label: "Goals + North Star",
      title: "To rebuild the *entire booking experience*, from first search to payment, as *one coherent system*.",
      items: [
        { name: "Rebuild the Funnel", text: "Redesign the search-to-payment path to remove drop-off points and make booking feel effortless." },
        { name: "Unify Platforms", text: "Bring the website and mobile app to a single visual and behavioral language." },
        { name: "Build the System", text: "Create a design system so a team of 5 designers and the dev team ship consistently and fast." },
        { name: "Open the Premium Segment", text: "Design a distinct digital concept for Villas & Suites — high-end properties need a different way of presenting." },
      ],
    },
    process: {
      label: "Process + Key Insights",
      title: "I started with a *full UX audit*: analytics, session recordings, competitor benchmarks and *interviews with the sales team* who talk to travelers every day.",
      insights: [
        { name: "Key Insight 1: Choice Overload", text: "people don't browse tours — they narrow down. The old search asked for 10+ parameters upfront; users wanted a fast first result they could refine." },
        { name: "Key Insight 2: Trust Is Visual", text: "a trip is an expensive, emotional purchase. Poor photos, cramped layouts and inconsistent UI read as “unreliable company” long before the price is seen." },
        { name: "Key Insight 3: One Product, Two Bodies", text: "users switch between web and app during a single purchase. Any mismatch between the two costs conversion at the most expensive moment — checkout." },
      ],
    },
    solution: {
      label: "Solution",
      title: "A *rebuilt booking experience* — faster search, honest product pages and *one design language* across web and app.",
    },
    design: [
      {
        label: "Design 1/3",
        name: "The Smart Search",
        sub: "from 10 fields to one smart entry",
        text: "The new search starts from what the user knows — destination and dates — and progressively reveals filters as results appear. Every step of the funnel shows progress and never loses entered data. This is where most of the +113% conversion gain came from.",
        imageCaption: "New search flow and booking funnel",
      },
      {
        label: "Design 2/3",
        name: "The Product Pages",
        sub: "built to answer, not to decorate",
        text: "Hotel and tour pages were restructured around the questions users actually ask: what does the room look like, what's included, what will the total cost be. Photos first, transparent pricing, reviews near the decision point.",
        imageCaption: "Redesigned hotel and tour pages",
      },
      {
        label: "Design 3/3",
        name: "Villas & Suites",
        sub: "a premium concept inside a mass product",
        text: "For the high-end segment I designed a separate visual system: restrained typography, full-bleed photography and an object-first presentation. The concept brought +76% visits and +30% average time on site.",
        imageCaption: "Villas & Suites premium concept",
      },
    ],
    reflections: {
      label: "Reflections",
      items: [
        { name: "Leading Is Designing the Team", text: "With 5 designers on one product, my main interface became the process: critique rituals, clear areas of ownership and a system that let everyone ship independently without breaking consistency." },
        { name: "Metrics Are the Strongest Argument", text: "Tying every major decision to funnel analytics changed conversations with stakeholders — debates about taste became discussions about numbers." },
        { name: "A Design System Is a Product", text: "Treating developers and designers as the system's users — with docs, naming and release discipline — is what made it actually get adopted." },
      ],
    },
    next: {
      label: "What I would do next..",
      title: "Personalized trip planning",
      text: "The next leap isn't in the interface — it's in relevance. I'd design an assistant-driven entry point that turns “somewhere warm in May, two kids” into three concrete, bookable options.",
    },
    finLine: "Millions of travelers booked their vacations a little happier ever after",
    fin: "fin.",
  },

  "rockup-crm": {
    hero: {
      tags: ["Enterprise / SaaS", "Design Systems", "Data-heavy UI", "Ongoing"],
      title: "Designing an enterprise CRM that operators live in 8 hours a day",
      caption: "VS Robotics — RockUP CRM",
    },
    product: {
      label: "Product",
      name: "RockUP",
      text: "An enterprise CRM by VS Robotics. I design its data-heavy interfaces — registries, tables, record cards, filters, dashboards — and the design system that keeps them consistent across light and dark themes.",
    },
    details: {
      heading: "Details",
      rows: [
        { value: "Web CRM, desktop-first", label: "surface" },
        { value: "Senior Product Designer", label: "role" },
        { value: "UX/UI · Design system · Process automation", label: "scope" },
        { value: "2025 — now", label: "timeline" },
      ],
    },
    psr: [
      {
        label: "Problem",
        title: "Scale Without a System",
        text: "Data-heavy screens multiplied faster than the UI language behind them. Every new registry, table and card was assembled by hand, and the light and dark themes kept drifting apart.",
      },
      {
        label: "Solution",
        title: "Tokens First",
        text: "I built the design system around 128 tokens serving 30 components — one source of truth that renders both light and dark themes without duplicated styles.",
      },
      {
        label: "Result",
        title: "4 Hours Instead of 3 Days",
        text: "On my own initiative I automated the token audit with Figma, Google Sheets and AI — a check that took 3 days now takes 4 hours, and the system stays reliable as it grows.",
      },
    ],
    impact: {
      heading: "Impact",
      stats: [
        { value: "128", title: "Design Tokens", note: "One source for light & dark themes" },
        { value: "30", title: "Components", note: "Covering registries, tables, cards, dashboards" },
        { value: "3d → 4h", title: "Token Audit", note: "Automated with Figma + Sheets + AI" },
      ],
    },
    context: {
      label: "Context",
      title: "VS Robotics builds *enterprise automation* products. RockUP is the CRM where operators process *thousands of records* daily.",
      paras: [
        "The value of a CRM like this is measured in operator throughput: how many records a person can process per shift without errors. Interface density, scanning speed and predictable patterns matter more than decoration.",
        "The product grows fast — new modules, new registries, new roles. Without a systemic UI language, every sprint adds visual debt that someone later pays for.",
      ],
    },
    problem: {
      label: "Problem",
      title: "The product was scaling, the interface wasn't. Every screen was *hand-assembled*, and themes *drifted apart*.",
      intro: "What this looked like in practice,",
      points: [
        "The same table or filter looked and behaved differently across modules",
        "Light and dark themes were maintained as two parallel sets of styles — double the work, double the drift",
        "Checking token consistency across the file took a designer 3 full days",
      ],
    },
    goals: {
      label: "Goals + North Star",
      title: "Make the interface *scale as fast as the product* — one system, two themes, zero duplication.",
      items: [
        { name: "Unify Data Patterns", text: "One language for registries, tables, cards, filters and dashboards across all modules." },
        { name: "Tokenize the Themes", text: "Light and dark from a single token source — change once, apply everywhere." },
        { name: "Automate the Checks", text: "Replace manual token audits with an automated pipeline." },
        { name: "Speed Up Delivery", text: "Let design and development assemble new screens from the system instead of drawing them from scratch." },
      ],
    },
    process: {
      label: "Process + Key Insights",
      title: "I mapped every data pattern in the product, then *rebuilt the foundation on tokens* before touching a single screen.",
      insights: [
        { name: "Key Insight 1: Operators Live in Tables", text: "for a person processing records all day, information density and keyboard-speed matter more than visual air. The system had to be compact by default." },
        { name: "Key Insight 2: Tokens Are a Contract", text: "a token set only works when design and development read from the same source. The 128 tokens became the shared contract between Figma and code." },
        { name: "Key Insight 3: Manual Checks Don't Scale", text: "any audit that takes 3 days simply stops being done. Automation isn't a luxury — it's the only way the system stays true over time." },
      ],
    },
    solution: {
      label: "Solution",
      title: "A *token-driven design system* — 30 components on 128 tokens, one source for both themes, with automated audits.",
    },
    design: [
      {
        label: "Design 1/3",
        name: "Registries & Tables",
        sub: "density without noise",
        text: "The core working surfaces of the CRM: compact tables with predictable column behavior, inline actions and filters that don't hide the data. Designed for operators who scan hundreds of rows per shift.",
        imageCaption: "CRM registries, tables and filters",
      },
      {
        label: "Design 2/3",
        name: "The Token System",
        sub: "128 tokens, 2 themes, 1 source",
        text: "Every color in the product resolves through a token. Light and dark themes are two mappings of the same set — no duplicated styles, no manual syncing. 30 components cover the entire working surface.",
        imageCaption: "Design system: tokens and components",
      },
      {
        label: "Design 3/3",
        name: "The Audit Pipeline",
        sub: "Figma + Sheets + AI",
        text: "A self-initiated automation that exports token usage from Figma, reconciles it in Google Sheets and uses AI to flag inconsistencies. The audit dropped from 3 days of manual work to 4 hours.",
        imageCaption: "Automated token audit pipeline",
      },
    ],
    reflections: {
      label: "Reflections",
      items: [
        { name: "Enterprise Rewards Rigor", text: "In consumer products you can win with taste; in enterprise you win with consistency. The discipline of tokens and naming pays off every single sprint." },
        { name: "Automate Your Own Job", text: "The audit automation wasn't in anyone's backlog. Finding and removing your own routine is a designer's job too." },
        { name: "Density Is a Feature", text: "Fighting for whitespace is wrong when your user's KPI is records per hour. Design for the work, not for the portfolio shot." },
      ],
    },
    next: {
      label: "What I would do next..",
      title: "Design linting in the pipeline",
      text: "The next step after automated audits is prevention: checks that catch a broken token or off-system component at design time, before it ever reaches development.",
    },
    finLine: "The system keeps growing — and stays one system",
    fin: "to be continued.",
  },

  "villas-suites": {
    hero: {
      tags: ["Premium Concept", "Visual System", "Design Lead", "Shipped"],
      title: "A premium showcase for travel's highest segment",
      caption: "Coral Travel — Villas & Suites",
    },
    product: {
      label: "Product",
      name: "Villas & Suites",
      text: "Coral Travel's premium line: private villas and top-tier hotels. I designed the digital concept from scratch — page structure, visual system and the UX of presenting high-end properties.",
    },
    details: {
      heading: "Details",
      rows: [
        { value: "Web showcase within Coral Travel", label: "surface" },
        { value: "Design Lead", label: "role" },
        { value: "Concept · Page structure · Visual system", label: "scope" },
        { value: "2022 – 2025", label: "timeline" },
      ],
    },
    psr: [
      {
        label: "Problem",
        title: "Mass UI for a Premium Product",
        text: "Five-star villas were presented with the same cards and lists as charter package tours. The presentation didn't justify the price point — and the segment underperformed.",
      },
      {
        label: "Solution",
        title: "Object-first Presentation",
        text: "A separate visual system: restrained typography, full-bleed photography, generous pacing. The property is the hero of every screen; the interface steps back.",
      },
      {
        label: "Result",
        title: "The Segment Woke Up",
        text: "After launch the line gained +76% visits and +30% average time on site — people started exploring premium properties instead of scrolling past them.",
      },
    ],
    impact: {
      heading: "Impact",
      stats: [
        { value: "+76%", title: "Visits", note: "To the premium line after launch" },
        { value: "+30%", title: "Time on Site", note: "Average session duration" },
        { value: "1", title: "Distinct Visual System", note: "Typography, photography, layout rules" },
      ],
    },
    context: {
      label: "Context",
      title: "Premium travel is sold with *atmosphere*, not with filters.",
      paras: [
        "A person choosing a private villa doesn't compare 40 options in a table. They fall in love with two or three — through photography, detail and the feeling that this place is already theirs.",
        "The mass-market interface worked against that: dense cards, price-first layouts and utilitarian typography told a story of a cheap deal, not of a special place.",
      ],
    },
    problem: {
      label: "Problem",
      title: "The premium inventory existed, but its *presentation erased its value*.",
      intro: "What the segment audit showed,",
      points: [
        "Premium objects used the same card grid as mass tours — visually indistinguishable from a discount offer",
        "Photography was cropped into small thumbnails, killing the main selling argument",
        "Page rhythm pushed to compare and filter, while the premium decision is emotional and slow",
      ],
    },
    goals: {
      label: "Goals + North Star",
      title: "Build a presentation where *the object sells itself* — and the interface disappears.",
      items: [
        { name: "Separate the Language", text: "A distinct visual system for the segment: typography, spacing, photography rules." },
        { name: "Lead with the Object", text: "Restructure pages around the property — full-bleed imagery first, details second, price where the decision matures." },
        { name: "Slow the Rhythm", text: "Replace comparison-driven UX with an exploration-driven one: fewer options per screen, more depth per option." },
        { name: "Stay Compatible", text: "Keep the system technically inside the main platform — shared components under a different visual skin." },
      ],
    },
    process: {
      label: "Process + Key Insights",
      title: "I studied how *luxury hospitality brands* present property — hotels, real estate, yachting — and mapped it against our funnel data.",
      insights: [
        { name: "Key Insight 1: Photography Is the Product", text: "in the premium segment the photo does the selling. The layout's job is to give it maximum canvas and never crop the story." },
        { name: "Key Insight 2: Fewer Options, More Desire", text: "showing 40 villas per page reads as a marketplace. Showing 6 reads as a curated collection — and curation is what the premium buyer pays for." },
        { name: "Key Insight 3: Price Comes Last", text: "leading with price triggers comparison mode. Leading with the place triggers imagination — price then confirms a decision already half-made." },
      ],
    },
    solution: {
      label: "Solution",
      title: "An *object-first showcase* — full-bleed photography, restrained typography and a pace that lets desire build.",
    },
    design: [
      {
        label: "Design 1/3",
        name: "The Page Structure",
        sub: "the object is the hero",
        text: "Property pages open with full-width photography and a single line of type. Details unfold progressively: spaces, services, surroundings — and only then, the price and booking entry.",
        imageCaption: "Premium property page structure",
      },
      {
        label: "Design 2/3",
        name: "The Visual System",
        sub: "restraint sells",
        text: "A quiet serif for headlines, generous whitespace, a muted palette that never competes with photography. The system signals the segment before a single word is read.",
        imageCaption: "Villas & Suites visual system",
      },
      {
        label: "Design 3/3",
        name: "The Collection UX",
        sub: "curation over comparison",
        text: "The catalog behaves like a curated collection: large cards, few per screen, no aggressive filters. Exploration flows from mood to place to detail — matching how this purchase is actually made.",
        imageCaption: "Curated collection browsing",
      },
    ],
    reflections: {
      label: "Reflections",
      items: [
        { name: "Segments Need Languages", text: "One interface language can't serve a charter tour and a private villa. Respecting the segment means designing its own dialect." },
        { name: "Removing Is Designing", text: "Most of this project was deletion: filters, badges, counters. What remains carries more weight." },
        { name: "Emotion Has Metrics Too", text: "+30% time on site is what falling in love with a place looks like in analytics." },
      ],
    },
    next: {
      label: "What I would do next..",
      title: "Personal concierge flow",
      text: "The natural next step: a request-based flow where a traveler describes the trip they imagine, and a concierge returns a hand-picked shortlist — the offline luxury ritual, translated to digital.",
    },
    finLine: "The premium segment finally looked the price",
    fin: "fin.",
  },

  "pg-brands": {
    hero: {
      tags: ["Oral-B · Gillette · Braun", "E-commerce", "Design System", "Shipped"],
      title: "One design system for three global brands",
      caption: "P&G — Oral-B, Gillette, Braun",
    },
    product: {
      label: "Product",
      name: "P&G Brand Platforms",
      text: "Digital platforms for three P&G brands. I designed the localized Oral-B site, built a reusable landing system serving Oral-B, Gillette and Braun, and designed email and digital campaigns on top of it.",
    },
    details: {
      heading: "Details",
      rows: [
        { value: "Brand sites, landing pages, email", label: "surface" },
        { value: "Senior UX/UI Designer", label: "role" },
        { value: "Landing system · Reusable UI · Campaigns", label: "scope" },
        { value: "2020 – 2022", label: "timeline" },
      ],
    },
    psr: [
      {
        label: "Problem",
        title: "Every Campaign from Scratch",
        text: "Three brands ran constant campaigns, and every landing was designed and built from zero. Slow, expensive, and inconsistent — the same brand looked different from one promo to the next.",
      },
      {
        label: "Solution",
        title: "A Reusable Landing System",
        text: "A system of landing templates and reusable UI components flexible enough for three brand identities, plus a fully localized Oral-B site rebuilt around user registration.",
      },
      {
        label: "Result",
        title: "Every Metric Moved",
        text: "Localized Oral-B site: +12% conversion to registration, +9% retention in week two. The landing system lifted campaign conversion by 6%. Email campaigns: +18% CTR, +22% engagement.",
      },
    ],
    impact: {
      heading: "Impact",
      stats: [
        { value: "+12%", title: "Conversion to Registration", note: "Localized Oral-B site" },
        { value: "+18%", title: "Campaign CTR", note: "Email & digital campaigns (+22% engagement)" },
        { value: "+6%", title: "Landing Conversion", note: "Reusable system across 3 brands" },
      ],
    },
    context: {
      label: "Context",
      title: "Global brands live on *campaigns* — and campaigns live on speed.",
      paras: [
        "Oral-B, Gillette and Braun each run a continuous stream of promos, launches and seasonal campaigns. Time-to-launch directly limits how much marketing can do in a quarter.",
        "Each brand has a strict global identity, but local markets need local speed. The tension between brand control and delivery pace was the real design problem.",
      ],
    },
    problem: {
      label: "Problem",
      title: "Three brands, endless campaigns, and *no shared foundation* under any of them.",
      intro: "Where the time and consistency went,",
      points: [
        "Every landing started from a blank canvas — even for recurring campaign types",
        "The same brand's promos drifted visually, eroding recognition",
        "The Oral-B site wasn't localized: global templates ignored local user behavior and reduced registrations",
      ],
    },
    goals: {
      label: "Goals + North Star",
      title: "Build once, launch many: *a system that serves three brands* without diluting any of them.",
      items: [
        { name: "Systematize Landings", text: "Template the recurring campaign types into a flexible landing constructor." },
        { name: "Share the UI Core", text: "One set of reusable components skinned by three brand identities." },
        { name: "Localize Oral-B", text: "Rebuild the local site around actual user behavior, with registration as the key action." },
        { name: "Feed the Campaigns", text: "Extend the system into email and digital formats so campaigns compose instead of being redrawn." },
      ],
    },
    process: {
      label: "Process + Key Insights",
      title: "I audited *two years of past campaigns* across the three brands to find the repeating patterns worth systematizing.",
      insights: [
        { name: "Key Insight 1: Campaigns Repeat", text: "under the creative variety, ~80% of landings reduced to a handful of structural types. Systematize those, and speed follows." },
        { name: "Key Insight 2: Brands Differ in Skin, Not Bones", text: "the three identities diverge in color, type and tone — but share layout logic. One skeleton, three skins." },
        { name: "Key Insight 3: Localization Is Behavior", text: "local users registered less not because of language, but because the global flow ignored local purchasing habits. Localizing the flow — not just the copy — moved the metric." },
      ],
    },
    solution: {
      label: "Solution",
      title: "A *reusable landing system* with a shared UI core, three brand skins — and a localized Oral-B site built on it.",
    },
    design: [
      {
        label: "Design 1/3",
        name: "The Oral-B Site",
        sub: "localized around registration",
        text: "The local site rebuilt from global templates into a flow matching local user behavior. Registration became the central scenario: +12% conversion to registration, +9% retention in the second week.",
        imageCaption: "Localized Oral-B website",
      },
      {
        label: "Design 2/3",
        name: "The Landing System",
        sub: "one skeleton, three brand skins",
        text: "A constructor of proven landing structures with a shared component core. Each brand applies its identity on top; each campaign assembles instead of starting over. +6% conversion across campaigns.",
        imageCaption: "Reusable landing system for 3 brands",
      },
      {
        label: "Design 3/3",
        name: "The Campaign Formats",
        sub: "email & digital on the same core",
        text: "Email and digital campaign formats built from the same system: consistent, fast to produce, easy to test. +18% CTR and +22% engagement across campaigns.",
        imageCaption: "Email and digital campaign formats",
      },
    ],
    reflections: {
      label: "Reflections",
      items: [
        { name: "Systems Are a Speed Play", text: "The strongest argument for a design system in marketing isn't consistency — it's time-to-launch. Consistency comes as a bonus." },
        { name: "Constraints Sharpen Craft", text: "Working inside three strict global identities taught me more about typography and layout than any free-form project." },
        { name: "Local Beats Global", text: "A global template is a hypothesis. Local behavior data is the answer. When they conflict, the data wins." },
      ],
    },
    next: {
      label: "What I would do next..",
      title: "Self-serve campaign builder",
      text: "The logical endpoint of the system: a tool where local marketing teams assemble on-brand campaign pages themselves — design guarding the system, not drawing every page.",
    },
    finLine: "Three brands, one system, every metric up",
    fin: "fin.",
  },
};
