export const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#B8492A",
  "heroVariant": "guarantee",
  "showPricing": true,
  "showProcess": true
}/*EDITMODE-END*/;

export const ACCENT_OPTIONS = ["#B8492A", "#1F3B6B", "#2F5D3A", "#6B2D52"];

export const HERO_VARIANTS = {
  guarantee: {
    eyebrow: "Consulting · Remote · Booking Q3 2026",
    h1: ["I find the things your", "PHP app does wrong.", "Then I fix them."],
    sub: "Twenty years inside PHP, including enterprise level Drupal 10+, Laravel, CodeIgniter, custom frameworks, legacy code, and the database layer underneath. I sell three things: a performance audit you can read in an afternoon, enterprise level architecture, and database migrations that don't take the site down.",
  },
  resume: {
    eyebrow: "Consulting · Remote · Booking Q3 2026",
    h1: ["Senior PHP and Drupal", "architect for hire."],
    sub: "Twenty years of production PHP. Drupal 10+ at enterprise scale. Database migrations from legacy SQL to modern cloud architecture. Three offerings, fixed scope, fixed price where it makes sense.",
  },
  proof: {
    eyebrow: "Consulting · Remote · Booking Q3 2026",
    h1: ["A 10×", "page-speed lift", "is the floor, not the ceiling."],
    sub: "I audit PHP applications, architect enterprise Drupal, and move legacy databases to the cloud without downtime. Twenty years of doing this. Three offerings. Honest pricing.",
  },
};

export const SERVICES = [
  {
    n: "01",
    tag: "Audit",
    name: "The Performance Audit",
    lede: "I'll find the performance leaks and architectural flaws in your PHP application. Guaranteed.",
    body: "A focused read of your codebase, database queries, caching strategy, and infrastructure. You get a written report that names bottlenecks, ranks them by impact, and tells you what to fix first. No abstract recommendations — every finding is tied to a file, a query, or a config line.",
    priceLabel: "Fixed price",
    price: "$1,500 – $2,500",
    timeLabel: "Turnaround",
    time: "5–7 business days",
    deliverables: [
      "Written PDF report (15–25 pages)",
      "Prioritized fix list with effort × impact scoring",
      "30-minute walkthrough call",
      "Optional: implementation retainer at $150/hr",
    ],
    fitFor: "Teams whose app feels slow and don't know where to start, or teams whose vibe coding has gotten out of hand.",
  },
  {
    n: "02",
    tag: "Architecture",
    name: "Drupal 10+ Enterprise",
    lede: "Drupal at scale, with the integrations real businesses actually need.",
    body: "Drupal 10+ architecture for organizations that have outgrown WordPress and need a CMS that survives audits. Acquia Cloud, Salesforce or SAP integrations, multi-site, migration scripts, custom modules. I've done this at the enterprise scale of complexity — your project is probably simpler than that.",
    priceLabel: "Hourly",
    price: "$150 – $200/hr",
    timeLabel: "Engagement",
    time: "Retainer or project-based",
    deliverables: [
      "Architecture diagrams + ADRs",
      "Module + config strategy",
      "Acquia / hosting setup",
      "Third-party integrations (SF, SAP, Auth0, etc.)",
      "Hand-off documentation your team can actually use",
    ],
    fitFor: "SMEs, government, universities, media companies, and anyone else stuck on Drupal 7/8.",
  },
  {
    n: "03",
    tag: "Migration",
    name: "Database Migration & Optimization",
    lede: "Legacy SQL to modern architecture. Custom migration scripts. Zero downtime.",
    body: "On-premise SQL Server to AWS RDS. MySQL schema cleanups. Stored procedures untangled. Index strategies that survive a 10× growth in row count. I write custom migration scripts for the data that doesn't fit a generic tool, and I plan the cutover so nobody notices.",
    priceLabel: "Fixed price",
    price: "$5,000 – $25,000",
    timeLabel: "Engagement",
    time: "2–8 weeks, scope-dependent",
    deliverables: [
      "Migration plan + risk register",
      "Custom ETL / migration scripts",
      "Index + query optimization pass",
      "Cutover runbook with rollback path",
      "Post-migration validation suite",
    ],
    fitFor: "Teams moving off legacy SQL, cleaning technical debt, or hitting the limits of their current schema.",
  },
];

export const PROCESS = [
  { n: "1", t: "Intro call", d: "30 minutes. You describe the problem, I tell you whether I'm the right person for it. If I'm not, I'll usually know someone who is." },
  { n: "2", t: "Scope memo", d: "A one-page document with the deliverable, the price, the timeline, and the assumptions I'm making. We agree before any work starts." },
  { n: "3", t: "The work",   d: "I work async, in your repo or a copy of it. You get a Loom or a written update at the end of every working day." },
  { n: "4", t: "Hand-off",  d: "Written deliverable, walkthrough call, and a 30-day window where you can ask follow-up questions at no charge." },
];

export const FAQS = [
  { q: "Where are you based?", a: "Eastern Time. I take meetings between 9am and 5pm ET and overlap with most North American and European teams." },
  { q: "Do you sign NDAs?", a: "Yes, by default. I'll send you a mutual NDA before any code or credentials change hands." },
  { q: "Can you work through my agency / on Upwork?", a: "Yes. I'm comfortable in both direct contracts and through Upwork. Rates are the same either way." },
  { q: "What if the audit finds nothing?", a: "It won't. But if it does — full refund, no questions. That's the guarantee." },
  { q: "Do you do WordPress?", a: "No. Plenty of excellent WordPress developers out there. I'm not one of them." },
];

export const TESTIMONIALS = [
  {
    quote: "The dream developer. Every day, he made my job easier by delivering standards-compliant, elegant code and solutions within scope, on time and within budget — all at uncompromising levels of quality — all the time.",
    name: "Pat Yoshida, PMP",
    role: "Principal PMO Consultant, Fastco Canada",
    rel: "Former Manager",
    year: "7 years",
  },
  {
    quote: "Asrar's guidance was instrumental in shaping my ability to build scalable, maintainable solutions. His emphasis on clean code has left a lasting impact on my development approach.",
    name: "Maria Parra-Pino",
    role: "Senior Software Engineer",
    rel: "Former Colleague",
    year: "5 years",
  },
  {
    quote: "He architected and developed a complex publishing site using Drupal 10 on Acquia Cloud — data migration from legacy platforms, custom modules, services, APIs — all with clean, scalable code.",
    name: "Badi Haddadin",
    role: "Senior System Administrator, BCA Research",
    rel: "Former Colleague",
    year: "5 years",
  },
  {
    quote: "Sharp analytical thinking with a meticulous, forward-looking approach to programming. His ability to see the bigger picture ensures not only that current requirements are fulfilled but that future use cases are anticipated and addressed.",
    name: "Paul Chow",
    role: "Technology & Cybersecurity Leader (CISSP)",
    rel: "Former Manager",
    year: "2 years",
  },
  {
    quote: "His deep grasp of PHP, object-oriented design and architectural principles is something I've always admired. I honestly believe he's destined for a code architect role.",
    name: "Arshdeep Singh",
    role: "Tech Lead, Full-Stack Engineering",
    rel: "Former Colleague",
    year: "5 years",
  },
  {
    quote: "A strong point of view to the technical challenges and isn't afraid to speak up when he sees room for improvement. His ability to think critically and challenge assumptions is a valuable asset in fast-moving environments.",
    name: "Carlos Eduardo Souza Lopes",
    role: "CTO, NDR",
    rel: "Former Manager",
    year: "3 years",
  },
  {
    quote: "Asrar is a guru, an excellent mentor and a well thought programmer. He is at his best when working under pressure. No matter how urgent and complex a situation gets, you can trust him to sort things out quickly.",
    name: "Musab Mirza",
    role: "Software Engineer",
    rel: "Former Colleague",
    year: "3 years",
  },
  {
    quote: "His code is efficient, clean, modular, comprehensive and speaks for itself. He pays attention to details whether working on the front end or back end.",
    name: "Musab Mirza",
    role: "Software Engineer",
    rel: "Former Colleague",
    year: "3 years",
  },
];

export const TESTIMONIAL_LAYOUT = [
  { idx: 0, span: 7, size: "lg" },
  { idx: 1, span: 5, size: "md" },
  { idx: 2, span: 5, size: "md" },
  { idx: 3, span: 7, size: "lg" },
  { idx: 4, span: 6, size: "md" },
  { idx: 5, span: 6, size: "md" },
  { idx: 6, span: 7, size: "lg" },
  { idx: 7, span: 5, size: "md" },
];

export const COL_SPAN = { 5: 'lg:col-span-5', 6: 'lg:col-span-6', 7: 'lg:col-span-7' };

export const PULL_QUOTE = {
  text: "Whoever knows Asrar is winning.",
  attribution: "Francis Lacerte, Senior Software Engineer",
};

export const CONTACT_QUOTE = {
  text: "He could always see the forest for the trees which made him so valuable.",
  attribution: "Pat Yoshida, Principal PMO Consultant",
};
