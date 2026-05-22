import MonoLabel from './MonoLabel.jsx';
import { PULL_QUOTE } from '../data/index.js';

export default function PullQuote({ accent }) {
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
