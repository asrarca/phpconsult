import { useState, useEffect } from 'react';
import MonoLabel from './MonoLabel.jsx';

export default function Nav({ accent }) {
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
      <div className="container flex items-center justify-between py-4.5">
        <div className="flex items-baseline gap-3.5 min-w-0">
          <span className="font-serif text-[18px] sm:text-[22px] leading-none whitespace-nowrap">
            Senior PHP Consulting
          </span>
          <MonoLabel className="text-muted ml-1.5 hidden sm:inline shrink-0">est. 2026</MonoLabel>
        </div>

        <nav className="hidden md:flex gap-7 items-center shrink-0 ml-8">
          <a href="#services" className="navlink">Services</a>
          <a href="#process"  className="navlink">Process</a>
          <a href="#about"    className="navlink">About</a>
          <a href="#faq"      className="navlink">FAQ</a>
          <a href="#contact"  className="cta-pill" style={{ background: accent }}>
            Book a call <span className="ml-1">↗</span>
          </a>
        </nav>

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
