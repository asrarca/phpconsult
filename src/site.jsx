import { useEffect } from 'react';
import {
  useTweaks, TweaksPanel, TweakSection,
  TweakColor, TweakSelect, TweakToggle,
} from './tweaks-panel.jsx';
import { TWEAK_DEFAULTS, ACCENT_OPTIONS, SERVICES } from './data/index.js';

import Nav          from './components/Nav.jsx';
import Hero         from './components/Hero.jsx';
import StackRow     from './components/StackRow.jsx';
import ServiceCard  from './components/ServiceCard.jsx';
import Proof        from './components/Proof.jsx';
import PullQuote    from './components/PullQuote.jsx';
import Testimonials from './components/Testimonials.jsx';
import Process      from './components/Process.jsx';
import FAQ          from './components/FAQ.jsx';
import Contact      from './components/Contact.jsx';
import Footer       from './components/Footer.jsx';
import MonoLabel    from './components/MonoLabel.jsx';

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
