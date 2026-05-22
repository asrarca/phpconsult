import { useState } from 'react';
import MonoLabel from './MonoLabel.jsx';
import { CONTACT_QUOTE } from '../data/index.js';

export default function Contact({ accent }) {
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
