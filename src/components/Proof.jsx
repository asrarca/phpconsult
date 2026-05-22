import MonoLabel from './MonoLabel.jsx';

function Stat({ n, l, accent }) {
  return (
    <div>
      <div
        className="font-serif text-[clamp(36px,4.5vw,56px)] leading-none"
        style={{ color: accent }}
      >
        {n}
      </div>
      <MonoLabel className="text-muted mt-2 inline-block leading-[1.4]">{l}</MonoLabel>
    </div>
  );
}

export default function Proof({ accent }) {
  return (
    <section id="about" className="py-16 lg:py-24 border-b border-rule">
      <div className="container grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20">

        <div>
          <MonoLabel className="text-muted">About</MonoLabel>
          <h2 className="font-serif font-normal text-[clamp(32px,4.5vw,56px)] leading-[1.02] tracking-[-0.01em] mt-4 mb-8">
            Twenty years. Three things I do very well.
          </h2>
          <figure className="m-0 relative">
            <img
              src="portrait.jpg"
              alt="Portrait"
              className="w-full max-w-[380px] block"
              style={{ filter: 'grayscale(0.15) contrast(1.02)' }}
            />
            <figcaption className="mt-3 flex justify-between items-baseline">
              <span className="font-serif italic text-[16px] md:text-[18px] text-ink-soft">
                The consultant in question.
              </span>
              <MonoLabel className="text-muted">FIG. 01</MonoLabel>
            </figcaption>
          </figure>
        </div>

        <div className="text-[15px] md:text-[17px] leading-[1.65] text-ink-soft">
          <p className="m-0">
            I started writing PHP in 2005, before Composer, before namespaces, before most of the people in the industry now. I've shipped Drupal 7, 8, 9, and 10 at enterprise scale — most recently architecting a global site for an aerospace manufacturer with Salesforce and Auth0 integration.
          </p>
          <p className="mt-[18px]">
            Earlier work includes database migration projects at a financial research firm, custom data modeling for the most complex wheel-fitment dataset in North America, and a performance optimization engagement that pulled a publisher's page speed up roughly tenfold.
          </p>
          <p className="mt-[18px]">
            I'm not the cheapest. I'm the person you call when the cheap one didn't work out.
          </p>
          <div className="mt-9 grid grid-cols-3 gap-6 lg:gap-8">
            <Stat n="1000%" l="Page-speed lift, last audit" accent={accent} />
            <Stat n="20+"   l="Years writing PHP"           accent={accent} />
            <Stat n="∞"     l="Drupal hooks debugged"       accent={accent} />
          </div>
        </div>
      </div>
    </section>
  );
}
