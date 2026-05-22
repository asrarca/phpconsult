import React, { useState, useEffect } from 'react';
import {
  useTweaks, TweaksPanel, TweakSection,
  TweakColor, TweakSelect, TweakToggle,
} from './tweaks-panel.jsx';

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#B8492A",
  "heroVariant": "guarantee",
  "showPricing": true,
  "showProcess": true
}/*EDITMODE-END*/;

const ACCENT_OPTIONS = ["#B8492A", "#1F3B6B", "#2F5D3A", "#6B2D52"];

const HERO_VARIANTS = {
  guarantee: {
    eyebrow: "Consulting · Remote · Booking Q3 2026",
    h1: ["I find the things your", "PHP app does wrong.", "Then I fix them."],
    sub: "Twenty years inside PHP, including enterprise level Drupal 10, Laravel, CodeIgniter, CakePHP, custom frameworks, legacy code, and the database layer underneath. I sell three things: a performance audit you can read in an afternoon, enterprise level architecture, and database migrations that don't take the site down.",
  },
  resume: {
    eyebrow: "Consulting · Remote · Booking Q3 2026",
    h1: ["Senior PHP and Drupal", "architect for hire."],
    sub: "Twenty years of production PHP. Drupal 10 at enterprise scale. Database migrations from legacy SQL to modern cloud architecture. Three offerings, fixed scope, fixed price where it makes sense.",
  },
  proof: {
    eyebrow: "Consulting · Remote · Booking Q3 2026",
    h1: ["A 10×", "page-speed lift", "is the floor, not the ceiling."],
    sub: "I audit PHP applications, architect enterprise Drupal, and move legacy databases to the cloud without downtime. Twenty years of doing this. Three offerings. Honest pricing.",
  },
};

const SERVICES = [
  {
    n: "01",
    tag: "Audit",
    name: "The Performance Audit",
    lede: "I'll find the performance leaks in your PHP application. Guaranteed.",
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
    fitFor: "Teams whose app feels slow and don't know where to start.",
  },
  {
    n: "02",
    tag: "Architecture",
    name: "Drupal 10 Enterprise",
    lede: "Drupal at scale, with the integrations real businesses actually need.",
    body: "Drupal 10 architecture for organizations that have outgrown WordPress and need a CMS that survives audits. Acquia Cloud, Salesforce, Auth0, multi-site, content syndication, custom modules. I've done this at the Bombardier scale of complexity — your project is probably simpler than that.",
    priceLabel: "Hourly",
    price: "$175 – $200/hr",
    timeLabel: "Engagement",
    time: "Retainer or project-based",
    deliverables: [
      "Architecture diagrams + ADRs",
      "Module + config strategy",
      "Acquia / hosting setup",
      "Third-party integrations (SF, Auth0, etc.)",
      "Hand-off documentation your team can actually use",
    ],
    fitFor: "Nonprofits, government, universities, media companies, and anyone else stuck on Drupal 7/8.",
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

const PROCESS = [
  { n: "1", t: "Intro call", d: "30 minutes. You describe the problem, I tell you whether I'm the right person for it. If I'm not, I'll usually know someone who is." },
  { n: "2", t: "Scope memo", d: "A one-page document with the deliverable, the price, the timeline, and the assumptions I'm making. We agree before any work starts." },
  { n: "3", t: "The work",   d: "I work async, in your repo or a copy of it. You get a Loom or a written update at the end of every working day." },
  { n: "4", t: "Hand-off",  d: "Written deliverable, walkthrough call, and a 30-day window where you can ask follow-up questions at no charge." },
];

const FAQS = [
  { q: "Where are you based?", a: "Eastern Time. I take meetings between 9am and 5pm ET and overlap with most North American and European teams." },
  { q: "Do you sign NDAs?", a: "Yes, by default. I'll send you a mutual NDA before any code or credentials change hands." },
  { q: "Can you work through my agency / on Upwork?", a: "Yes. I'm comfortable in both direct contracts and through Upwork. Rates are the same either way." },
  { q: "What if the audit finds nothing?", a: "It won't. But if it does — full refund, no questions. That's the guarantee." },
  { q: "Do you do WordPress?", a: "No. Plenty of excellent WordPress developers out there. I'm not one of them." },
];

const TESTIMONIALS = [
  {
    quote: "His code is efficient, clean, modular, comprehensive and speaks for itself. He pays attention to details whether working on the front end or back end.",
    name: "Musab Mirza",
    role: "Software Engineer",
    rel: "Worked together at Fastco",
    year: "2014",
  },
  {
    quote: "The dream developer. Every day, he made my job easier by delivering standards-compliant, elegant code and solutions within scope, on time and within budget — all at uncompromising levels of quality — all the time.",
    name: "Pat Yoshida, PMP",
    role: "Principal PMO Consultant, Fastco Canada",
    rel: "Managed Asrar directly for 7 years",
    year: "2018",
  },
  {
    quote: "He architected and developed a complex publishing site using Drupal 10 on Acquia Cloud — data migration from legacy platforms, custom modules, services, APIs — all with clean, scalable code.",
    name: "Badi Haddadin",
    role: "Senior System Administrator, BCA Research",
    rel: "Worked together 5+ years",
    year: "2025",
  },
  {
    quote: "Sharp analytical thinking with a meticulous, forward-looking approach to programming. His ability to see the bigger picture ensures not only that current requirements are fulfilled but that future use cases are anticipated and addressed.",
    name: "Paul Chow",
    role: "Technology & Cybersecurity Leader (CISSP)",
    rel: "Managed Asrar directly",
    year: "2025",
  },
  {
    quote: "His deep grasp of PHP, object-oriented design and architectural principles is something I've always admired. His brutally honest (and surgically precise) PR feedback played a huge role in shaping me into the developer I am today.",
    name: "Arshdeep Singh",
    role: "Tech Lead, Full-Stack Engineering",
    rel: "Worked together at BCA",
    year: "2025",
  },
  {
    quote: "A strong point of view to the technical challenges and isn't afraid to speak up when he sees room for improvement. His ability to think critically and challenge assumptions is a valuable asset in fast-moving environments.",
    name: "Carlos Eduardo Souza Lopes",
    role: "CTO, NDR",
    rel: "Managed Asrar directly",
    year: "2025",
  },
];

const PULL_QUOTE = {
  text: "Asrar is a guru.",
  attribution: "Musab Mirza, Software Engineer",
};

const CONTACT_QUOTE = {
  text: "He could always see the forest for the trees.",
  attribution: "Pat Yoshida, Principal PMO Consultant",
};

// ─── Utility components ────────────────────────────────────────────────────

function MonoLabel({ children, className = '', style }) {
  return (
    <span
      className={`font-mono text-[11px] tracking-[0.12em] uppercase ${className}`}
      style={style}
    >
      {children}
    </span>
  );
}

function Rule({ className = '' }) {
  return <div className={`h-px bg-rule ${className}`} />;
}

// ─── Nav ───────────────────────────────────────────────────────────────────

function Nav({ accent }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <header
      className={`sticky top-0 z-10 bg-bg border-b border-rule transition-shadow duration-300 ${scrolled ? 'shadow-sm' : ''}`}
    >
      <div className="container flex items-center justify-between py-[18px]">
        {/* Logo */}
        <div className="flex items-baseline gap-[14px] min-w-0">
          <span
            className="w-[9px] h-[9px] rounded-full inline-block shrink-0"
            style={{ background: accent }}
          />
          <span className="font-serif text-[18px] sm:text-[22px] leading-none whitespace-nowrap">
            Senior PHP Consulting
          </span>
          <MonoLabel className="text-muted ml-[6px] hidden sm:inline shrink-0">est. 2005</MonoLabel>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-7 items-center shrink-0 ml-8">
          <a href="#services" className="navlink">Services</a>
          <a href="#process"  className="navlink">Process</a>
          <a href="#about"    className="navlink">About</a>
          <a href="#contact"  className="cta-pill" style={{ background: accent }}>
            Book a call <span className="ml-1">↗</span>
          </a>
        </nav>

        {/* Mobile: CTA only */}
        <a
          href="#contact"
          className="cta-pill md:hidden shrink-0 ml-4"
          style={{ background: accent }}
        >
          Book a call ↗
        </a>
      </div>
    </header>
  );
}

// ─── Hero ──────────────────────────────────────────────────────────────────

function Hero({ variant, accent }) {
  const v = HERO_VARIANTS[variant] || HERO_VARIANTS.guarantee;
  const statsRows = [
    { label: "Hourly",       value: "$150–$200" },
    { label: "Availability", value: "~15 hrs / week" },
    { label: "Location",     value: "Remote · ET" },
    { label: "Years",        value: "20+" },
  ];

  return (
    <section className="py-16 md:py-24 border-b border-rule">
      <div className="container">
        <MonoLabel className="text-muted">{v.eyebrow}</MonoLabel>

        <h1 className="font-serif font-normal text-[clamp(42px,7.6vw,112px)] leading-[0.98] tracking-[-0.015em] mt-7">
          {v.h1.map((line, i) => {
            const isLast = i === v.h1.length - 1;
            const isProofAccent    = variant === "proof"     && i === 1;
            const isGuaranteeAccent = variant === "guarantee" && isLast;
            return (
              <span
                key={i}
                className="block"
                style={{ marginTop: isGuaranteeAccent ? '0.18em' : 0 }}
              >
                {isProofAccent
                  ? <span style={{ color: accent }} className="italic">{line}</span>
                  : isGuaranteeAccent
                  ? <span style={{ color: accent }}>{line}</span>
                  : line}
              </span>
            );
          })}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 mt-12 lg:mt-14 items-end">
          <p className="text-[17px] md:text-[20px] leading-[1.55] max-w-[620px] text-ink-soft m-0">
            {v.sub}
          </p>

          {/* Stats table */}
          <div className="flex flex-col">
            {statsRows.map(({ label, value }) => (
              <React.Fragment key={label}>
                <Rule />
                <div className="flex justify-between py-[10px] font-mono text-[12px]">
                  <span className="text-muted">{label}</span>
                  <span>{value}</span>
                </div>
              </React.Fragment>
            ))}
            <Rule />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── StackRow ──────────────────────────────────────────────────────────────

function StackRow() {
  const groups = [
    { label: "Languages",      items: ["PHP 8.x", "SQL", "JavaScript", "Bash"] },
    { label: "CMS / Framework",items: ["Drupal 10", "Symfony", "Laravel", "Legacy custom"] },
    { label: "Databases",      items: ["MySQL", "MariaDB", "SQL Server", "PostgreSQL"] },
    { label: "Cloud",          items: ["AWS", "Acquia", "RDS", "ECS / EC2"] },
    { label: "Integrations",   items: ["Salesforce", "Auth0", "Stripe", "Algolia"] },
  ];
  return (
    <section className="py-7 border-b border-rule bg-bg-soft">
      <div className="container grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
        {groups.map((g) => (
          <div key={g.label}>
            <MonoLabel className="text-muted">{g.label}</MonoLabel>
            <ul className="list-none p-0 m-0 mt-[10px] text-[13px] leading-[1.8] text-ink-soft">
              {g.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── ServiceCard ───────────────────────────────────────────────────────────

function ServiceCard({ s, accent, showPricing }) {
  return (
    <article className="border-b border-rule py-12 lg:py-16">
      <div className="container grid grid-cols-1 md:grid-cols-[auto_1fr] lg:grid-cols-[0.8fr_1.6fr_1fr] gap-8 lg:gap-14 items-start">

        {/* Number + tag */}
        <div className="flex items-baseline gap-4 md:flex-col md:items-start lg:block">
          <div
            className="font-serif text-[clamp(56px,7vw,96px)] leading-[0.9] shrink-0"
            style={{ color: accent }}
          >
            {s.n}
          </div>
          <MonoLabel className="text-muted md:mt-3 inline-block">{s.tag}</MonoLabel>
        </div>

        {/* Description */}
        <div>
          <h2 className="font-serif font-normal text-[clamp(28px,3.5vw,44px)] leading-[1.05] tracking-[-0.01em] m-0">
            {s.name}
          </h2>
          <p className="font-serif text-[clamp(17px,2vw,26px)] italic leading-[1.3] mt-[18px] text-ink-soft">
            "{s.lede}"
          </p>
          <p className="text-[15px] md:text-[16px] leading-[1.65] mt-6 text-ink-soft max-w-[560px]">
            {s.body}
          </p>
          <div className="mt-7">
            <MonoLabel className="text-muted">Fit for</MonoLabel>
            <p className="text-[15px] mt-2 max-w-[560px] text-ink-soft">{s.fitFor}</p>
          </div>
        </div>

        {/* Pricing sidebar */}
        <aside
          className="bg-bg-soft border border-rule p-6 md:col-span-full lg:col-span-1"
          style={showPricing ? { borderLeftColor: accent, borderLeftWidth: 2 } : {}}
        >
          {showPricing && (
            <>
              <MonoLabel className="text-muted">{s.priceLabel}</MonoLabel>
              <div className="font-serif text-[34px] leading-[1.1] mt-1">{s.price}</div>
              <Rule className="my-5" />
            </>
          )}
          <MonoLabel className="text-muted">{s.timeLabel}</MonoLabel>
          <div className="text-[15px] mt-[6px]">{s.time}</div>
          <Rule className="my-5" />
          <MonoLabel className="text-muted">Deliverables</MonoLabel>
          <ul className="list-none p-0 m-0 mt-[10px] text-[14px] leading-[1.55]">
            {s.deliverables.map((d, i) => (
              <li
                key={i}
                className={`flex gap-[10px] py-[6px] ${i > 0 ? 'border-t border-dashed border-rule' : ''}`}
              >
                <span
                  className="font-mono text-[11px] shrink-0 mt-[2px]"
                  style={{ color: accent }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-ink-soft">{d}</span>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="block mt-6 py-3 px-4 text-center bg-ink text-bg no-underline font-mono text-[12px] tracking-[0.08em] uppercase hover:opacity-80 transition-opacity"
          >
            Inquire about {s.tag.toLowerCase()} →
          </a>
        </aside>
      </div>
    </article>
  );
}

// ─── PullQuote ─────────────────────────────────────────────────────────────

function PullQuote({ accent }) {
  return (
    <section className="py-20 lg:py-[120px] border-b border-rule bg-bg-soft">
      <div className="container text-center">
        <span
          className="font-serif text-[80px] leading-[0.6] inline-block align-top mr-4"
          style={{ color: accent }}
        >
          "
        </span>
        <span className="font-serif text-[clamp(40px,8vw,112px)] leading-none tracking-[-0.015em] italic">
          {PULL_QUOTE.text}
        </span>
        <div className="mt-8">
          <MonoLabel className="text-muted">— {PULL_QUOTE.attribution}</MonoLabel>
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ──────────────────────────────────────────────────────────

const TESTIMONIAL_LAYOUT = [
  { idx: 0, span: 7, size: "lg" },
  { idx: 1, span: 5, size: "md" },
  { idx: 2, span: 5, size: "md" },
  { idx: 3, span: 7, size: "lg" },
  { idx: 4, span: 6, size: "md" },
  { idx: 5, span: 6, size: "md" },
];

const COL_SPAN = { 5: 'lg:col-span-5', 6: 'lg:col-span-6', 7: 'lg:col-span-7' };

function Testimonials({ accent }) {
  return (
    <section className="py-16 lg:py-[112px] border-b border-rule">
      <div className="container">

        <div className="flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-baseline mb-10 lg:mb-14">
          <div>
            <MonoLabel className="text-muted">Testimonials</MonoLabel>
            <h2 className="font-serif font-normal text-[clamp(32px,4.5vw,56px)] leading-[1.02] tracking-[-0.01em] mt-4 mb-0 max-w-[820px]">
              What the people who worked with me say.
            </h2>
          </div>
          <MonoLabel className="text-muted hidden sm:block">From LinkedIn</MonoLabel>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 lg:gap-6">
          {TESTIMONIAL_LAYOUT.map(({ idx, span, size }) => {
            const t = TESTIMONIALS[idx];
            const isLg = size === "lg";
            const hasBg = idx % 3 === 0;
            return (
              <figure
                key={idx}
                className={[
                  COL_SPAN[span],
                  'm-0 flex flex-col justify-between relative border border-rule',
                  isLg ? 'p-8 lg:p-10' : 'p-6 lg:p-8',
                  hasBg ? 'bg-bg-soft' : 'bg-transparent',
                ].join(' ')}
              >
                {/* Decorative quote mark */}
                <span
                  className="absolute top-4 right-5 font-serif text-[64px] leading-[0.6] opacity-35 select-none"
                  style={{ color: accent }}
                  aria-hidden="true"
                >
                  "
                </span>

                <blockquote
                  className={[
                    'm-0 font-serif leading-[1.32] text-ink pr-8',
                    isLg ? 'text-[clamp(18px,2vw,28px)]' : 'text-[clamp(16px,1.8vw,22px)]',
                  ].join(' ')}
                >
                  "{t.quote}"
                </blockquote>

                <figcaption className="mt-7 flex justify-between items-end gap-4 border-t border-rule pt-4">
                  <div>
                    <div className="text-[14px] font-medium text-ink">{t.name}</div>
                    <div className="text-[12px] text-muted mt-0.5">{t.role}</div>
                  </div>
                  <div className="text-right shrink-0">
                    <MonoLabel className="text-muted text-[10px] block">{t.rel}</MonoLabel>
                    <MonoLabel className="text-[10px] mt-1 inline-block" style={{ color: accent }}>{t.year}</MonoLabel>
                  </div>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Proof / About ─────────────────────────────────────────────────────────

function Stat({ n, l, accent }) {
  return (
    <div>
      <div
        className="font-serif text-[clamp(36px,4.5vw,56px)] leading-none"
        style={{ color: accent }}
      >
        {n}
      </div>
      <MonoLabel className="text-muted mt-2 inline-block leading-[1.4]">{l}</MonoLabel>
    </div>
  );
}

function Proof({ accent }) {
  return (
    <section id="about" className="py-16 lg:py-24 border-b border-rule">
      <div className="container grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20">

        {/* Image column */}
        <div>
          <MonoLabel className="text-muted">About</MonoLabel>
          <h2 className="font-serif font-normal text-[clamp(32px,4.5vw,56px)] leading-[1.02] tracking-[-0.01em] mt-4 mb-8">
            Twenty years. Three things I do very well.
          </h2>
          <figure className="m-0 relative">
            <img
              src="portrait.jpg"
              alt="Portrait"
              className="w-full max-w-[380px] block"
              style={{ filter: 'grayscale(0.15) contrast(1.02)' }}
            />
            <figcaption className="mt-3 flex justify-between items-baseline">
              <span className="font-serif italic text-[16px] md:text-[18px] text-ink-soft">
                The consultant in question.
              </span>
              <MonoLabel className="text-muted">FIG. 01</MonoLabel>
            </figcaption>
          </figure>
        </div>

        {/* Bio + stats */}
        <div className="text-[15px] md:text-[17px] leading-[1.65] text-ink-soft">
          <p className="m-0">
            I started writing PHP in 2005, before Composer, before namespaces, before most of the people in the industry now. I've shipped Drupal 7, 8, 9, and 10 at enterprise scale — most recently architecting a global site for an aerospace manufacturer with Salesforce and Auth0 integration.
          </p>
          <p className="mt-[18px]">
            Earlier work includes database migration projects at a financial research firm, custom data modeling for the most complex wheel-fitment dataset in North America, and a performance optimization engagement that pulled a publisher's page speed up roughly tenfold.
          </p>
          <p className="mt-[18px]">
            I'm not the cheapest. I'm the person you call when the cheap one didn't work out.
          </p>
          <div className="mt-9 grid grid-cols-3 gap-6 lg:gap-8">
            <Stat n="1000%" l="Page-speed lift, last audit" accent={accent} />
            <Stat n="20+"   l="Years writing PHP"           accent={accent} />
            <Stat n="∞"     l="Drupal hooks debugged"       accent={accent} />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Process ───────────────────────────────────────────────────────────────

function Process({ accent }) {
  return (
    <section id="process" className="py-16 lg:py-24 border-b border-rule bg-bg-soft">
      <div className="container">

        <div className="flex justify-between items-baseline mb-12 lg:mb-14">
          <div>
            <MonoLabel className="text-muted">Process</MonoLabel>
            <h2 className="font-serif font-normal text-[clamp(32px,4.5vw,56px)] leading-[1.02] tracking-[-0.01em] mt-4 mb-0">
              How an engagement works.
            </h2>
          </div>
          <MonoLabel className="text-muted hidden sm:block">04 steps</MonoLabel>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-rule divide-x divide-rule">
          {PROCESS.map((p) => (
            <div key={p.n} className="p-5 lg:p-7">
              <div className="flex items-center gap-[10px]">
                <span
                  className="w-6 h-6 rounded-full inline-flex items-center justify-center font-mono text-[11px] text-bg shrink-0"
                  style={{ background: accent }}
                >
                  {p.n}
                </span>
                <MonoLabel className="text-muted">Step</MonoLabel>
              </div>
              <h3 className="font-serif font-normal text-[20px] lg:text-[26px] mt-4 mb-3">{p.t}</h3>
              <p className="text-[13px] lg:text-[14px] leading-[1.6] text-ink-soft m-0">{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ───────────────────────────────────────────────────────────────────

function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="py-16 lg:py-24 border-b border-rule">
      <div className="container grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-20">

        <div>
          <MonoLabel className="text-muted">Questions</MonoLabel>
          <h2 className="font-serif font-normal text-[clamp(32px,4.5vw,56px)] leading-[1.02] tracking-[-0.01em] mt-4 mb-0">
            Things people ask first.
          </h2>
        </div>

        <div>
          {FAQS.map((f, i) => (
            <div
              key={i}
              className={`border-t border-rule ${i === FAQS.length - 1 ? 'border-b border-rule' : ''}`}
            >
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="w-full py-[20px] md:py-[22px] bg-transparent border-none flex justify-between items-center cursor-pointer font-serif text-[clamp(17px,2vw,24px)] text-left text-ink gap-4"
              >
                <span>{f.q}</span>
                <span
                  className="font-mono text-[20px] text-muted shrink-0 transition-transform duration-200"
                  style={{ transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)' }}
                >
                  +
                </span>
              </button>
              {open === i && (
                <p className="m-0 mb-[22px] text-[15px] md:text-[16px] leading-[1.6] text-ink-soft max-w-[620px]">
                  {f.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Contact ───────────────────────────────────────────────────────────────

function Contact({ accent }) {
  const [copied, setCopied] = useState(false);
  const email = "hello@example.dev";
  const copy = () => {
    navigator.clipboard?.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  return (
    <section id="contact" className="py-20 lg:py-[120px] bg-ink text-bg">
      <div className="container">
        <MonoLabel className="text-white/55">Start an engagement</MonoLabel>
        <h2 className="font-serif font-normal text-[clamp(36px,8vw,112px)] leading-[1.0] tracking-[-0.015em] mt-5 mb-10 max-w-[1100px]">
          Tell me what's{' '}
          <span style={{ color: accent }} className="italic">broken</span>.{' '}
          I'll tell you whether I can fix it.
        </h2>
        <p className="text-[16px] md:text-[19px] leading-[1.5] max-w-[620px] text-white/70 mb-10">
          The intro call is free and lasts thirty minutes. If we're a fit, you'll have a scope memo within two business days. If we aren't, I'll tell you who is.
        </p>

        <figure
          className="m-0 mb-12 md:mb-14 pl-6 max-w-160"
          style={{ borderLeft: `2px solid ${accent}` }}
        >
          <blockquote className="m-0 font-serif text-[20px] md:text-[24px] italic leading-[1.35] text-white/85">
            "{CONTACT_QUOTE.text}"
          </blockquote>
          <figcaption className="mt-3 font-mono text-[11px] tracking-[0.12em] uppercase text-white/50">
            — {CONTACT_QUOTE.attribution}
          </figcaption>
        </figure>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-[880px]">
          <a href={`mailto:${email}`} className="contact-card">
            <MonoLabel className="text-white/50">Email</MonoLabel>
            <div className="font-serif text-[24px] md:text-[30px] mt-2 break-all">{email}</div>
            <div className="mt-[18px] flex justify-between items-center">
              <span
                onClick={(e) => { e.preventDefault(); copy(); }}
                className="font-mono text-[11px] tracking-[0.08em] uppercase text-white/70 cursor-pointer"
              >
                {copied ? "✓ copied" : "Copy ↗"}
              </span>
              <span
                className="font-mono text-[11px] tracking-[0.08em] uppercase"
                style={{ color: accent }}
              >
                Send mail →
              </span>
            </div>
          </a>

          <a href="#" className="contact-card">
            <MonoLabel className="text-white/50">Book a call</MonoLabel>
            <div className="font-serif text-[24px] md:text-[30px] mt-2">30-min intro</div>
            <div className="mt-[18px] flex justify-between items-center">
              <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-white/70">
                Calendly
              </span>
              <span
                className="font-mono text-[11px] tracking-[0.08em] uppercase"
                style={{ color: accent }}
              >
                Pick a time →
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ────────────────────────────────────────────────────────────────

function Footer({ accent }) {
  return (
    <footer className="py-8 bg-ink text-white/50 border-t border-white/[0.08]">
      <div className="container flex flex-col gap-4 items-center text-center md:flex-row md:justify-between md:text-left font-mono text-[11px] tracking-[0.08em] uppercase">
        <div className="flex gap-[14px] items-center">
          <span
            className="w-[7px] h-[7px] rounded-full inline-block shrink-0"
            style={{ background: accent }}
          />
          <span>Senior PHP Consulting · 2026</span>
        </div>
        <div className="flex gap-8">
          <a href="#services" className="footlink">Services</a>
          <a href="#about"    className="footlink">About</a>
          <a href="#contact"  className="footlink">Contact</a>
        </div>
      </div>
    </footer>
  );
}

// ─── App ───────────────────────────────────────────────────────────────────

export default function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const accent = t.accent || "#B8492A";

  useEffect(() => {
    document.documentElement.style.setProperty("--accent", accent);
  }, [accent]);

  return (
    <div>
      <Nav accent={accent} />
      <Hero variant={t.heroVariant} accent={accent} />
      <StackRow />

      <section id="services">
        <div className="container pt-16 pb-4 lg:pt-20 flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-baseline">
          <div>
            <MonoLabel className="text-muted">Services</MonoLabel>
            <h2 className="font-serif font-normal text-[clamp(32px,4.5vw,56px)] leading-[1.02] tracking-[-0.01em] mt-4 mb-0">
              Three offerings. Honest pricing.
            </h2>
          </div>
          <MonoLabel className="text-muted hidden sm:block">03 services</MonoLabel>
        </div>
        {SERVICES.map((s) => (
          <ServiceCard key={s.n} s={s} accent={accent} showPricing={t.showPricing} />
        ))}
      </section>

      <Proof accent={accent} />
      <PullQuote accent={accent} />
      <Testimonials accent={accent} />
      {t.showProcess && <Process accent={accent} />}
      <FAQ />
      <Contact accent={accent} />
      <Footer accent={accent} />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Visual">
          <TweakColor
            label="Accent"
            value={t.accent}
            onChange={(v) => setTweak("accent", v)}
            options={ACCENT_OPTIONS}
          />
        </TweakSection>
        <TweakSection label="Copy">
          <TweakSelect
            label="Hero variant"
            value={t.heroVariant}
            onChange={(v) => setTweak("heroVariant", v)}
            options={[
              { value: "guarantee", label: "Find & fix (default)" },
              { value: "resume",    label: "Senior architect" },
              { value: "proof",     label: "10× page-speed" },
            ]}
          />
        </TweakSection>
        <TweakSection label="Sections">
          <TweakToggle label="Show pricing on service cards" value={t.showPricing} onChange={(v) => setTweak("showPricing", v)} />
          <TweakToggle label="Show process section"          value={t.showProcess} onChange={(v) => setTweak("showProcess", v)} />
        </TweakSection>
      </TweaksPanel>
    </div>
  );
}
