import React from 'react';
import MonoLabel from './MonoLabel.jsx';
import Rule from './Rule.jsx';
import { HERO_VARIANTS } from '../data/index.js';

export default function Hero({ variant, accent }) {
  const v = HERO_VARIANTS[variant] || HERO_VARIANTS.guarantee;
  const statsRows = [
    { label: "Hourly",       value: "$150" },
    { label: "Availability", value: "~20 hrs / week" },
    { label: "Location",     value: "Remote · ET" },
    { label: "Experience",   value: "20+ years" },
  ];

  return (
    <section className="py-16 md:py-24 border-b border-rule">
      <div className="container">
        <MonoLabel className="text-muted">{v.eyebrow}</MonoLabel>

        <h1 className="font-serif font-normal text-[clamp(42px,7.6vw,112px)] leading-[0.98] tracking-[-0.015em] mt-7">
          {v.h1.map((line, i) => {
            const isLast = i === v.h1.length - 1;
            const isProofAccent     = variant === "proof"     && i === 1;
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
