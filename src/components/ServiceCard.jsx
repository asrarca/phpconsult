import MonoLabel from './MonoLabel.jsx';
import Rule from './Rule.jsx';

export default function ServiceCard({ s, accent, showPricing }) {
  return (
    <article className="border-b border-rule py-12 lg:py-16">
      <div className="container grid grid-cols-1 md:grid-cols-[auto_1fr] lg:grid-cols-[0.8fr_1.6fr_1fr] gap-8 lg:gap-14 items-start">

        <div className="flex items-baseline gap-4 md:flex-col md:items-start lg:block">
          <div
            className="font-serif text-[clamp(56px,7vw,96px)] leading-[0.9] shrink-0"
            style={{ color: accent }}
          >
            {s.n}
          </div>
          <MonoLabel className="text-muted md:mt-3 inline-block">{s.tag}</MonoLabel>
        </div>

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
