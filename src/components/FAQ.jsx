import { useState } from 'react';
import MonoLabel from './MonoLabel.jsx';
import { FAQS } from '../data/index.js';

export default function FAQ() {
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
