import MonoLabel from './MonoLabel.jsx';
import { PROCESS } from '../data/index.js';

export default function Process({ accent }) {
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
