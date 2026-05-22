export default function Footer({ accent }) {
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
