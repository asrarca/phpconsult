import MonoLabel from './MonoLabel.jsx';
import { TESTIMONIALS, TESTIMONIAL_LAYOUT, COL_SPAN } from '../data/index.js';

export default function Testimonials({ accent }) {
  return (
    <section className="py-16 lg:py-[112px] border-b border-rule">
      <div className="container">

        <div className="flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-baseline mb-10 lg:mb-14">
          <div>
            <MonoLabel className="text-muted">Testimonials</MonoLabel>
            <h2 className="font-serif font-normal text-[clamp(32px,4.5vw,56px)] leading-[1.02] tracking-[-0.01em] mt-4 mb-0 max-w-[820px]">
              People who worked with me say this:
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
