interface ScheduleItem {
  time: string;
  label: string;
}

interface Content {
  nav: string[];
  hero: { title: string; subtitle: string; date: string };
  celebration: { heading: string; body: string };
  schedule: { heading: string; items: ScheduleItem[] };
  dressCode: { heading: string; body: string };
  venue: { heading: string; address: string };
  brunch: { heading: string; body: string };
  footer: string;
}

type Lang = "en" | "fr";

const content: Record<Lang, Content> = {
  en: {
    nav: ["Celebration", "Schedule", "Dress Code", "Venue", "Brunch"],
    hero: { title: "25 Years Party", subtitle: "Sophie & Edouard", date: "29 August 2026 · from 19h00" },
    celebration: {
      heading: "The Celebration",
      body: "Sophie & Edouard would love for you to join them to celebrate 25 years of their anglo-french alliance. An evening of love, laughter, and dancing at their home in Normandy.",
    },
    schedule: {
      heading: "Evening Schedule",
      items: [
        { time: "19h00", label: "Welcome Cocktail" },
        { time: "21h00", label: "Sit-down Supper" },
        { time: "23h00", label: "Dancing" },
      ],
    },
    dressCode: {
      heading: "Dress Code",
      body: "Chic — and bring your dancing shoes!",
    },
    venue: {
      heading: "Venue",
      address: "10 Voie Romaine, 14440 Douvres-la-Délivrande, France",
    },
    brunch: {
      heading: "Next-Day Brunch",
      body: "Join us the morning after for a relaxed brunch to continue the celebrations. Details to follow — check back here or reach out to Sophie or Edouard.",
    },
    footer: "Made with love for Sophie & Edouard's 25th Anniversary",
  },
  fr: {
    nav: ["Célébration", "Programme", "Code vestimentaire", "Lieu", "Brunch"],
    hero: { title: "Fête des 25 Ans", subtitle: "Sophie & Edouard", date: "29 août 2026 · dès 19h00" },
    celebration: {
      heading: "La Fête",
      body: "Sophie & Edouard seraient ravis de vous accueillir pour célébrer 25 ans de leur alliance anglo-française. Une soirée d'amour, de rires et de danse dans leur maison en Normandie.",
    },
    schedule: {
      heading: "Programme de la Soirée",
      items: [
        { time: "19h00", label: "Cocktail de Bienvenue" },
        { time: "21h00", label: "Dîner Assis" },
        { time: "23h00", label: "Danse" },
      ],
    },
    dressCode: {
      heading: "Code Vestimentaire",
      body: "Chic — et apportez vos chaussures de danse !",
    },
    venue: {
      heading: "Lieu",
      address: "10 Voie Romaine, 14440 Douvres-la-Délivrande, France",
    },
    brunch: {
      heading: "Brunch du Lendemain",
      body: "Retrouvez-nous le lendemain matin pour un brunch décontracté et prolonger les festivités. Les détails suivront — revenez ici ou contactez Sophie ou Edouard.",
    },
    footer: "Réalisé avec amour pour les 25 Ans de Sophie & Edouard",
  },
};

const navIds = ["celebration", "schedule", "dress-code", "venue", "brunch"];

function Section({ id, className = "", children }: { id: string; className?: string; children: React.ReactNode }) {
  return (
    <section
      id={id}
      className={`w-full max-w-3xl mx-auto px-4 py-16 md:py-20 ${className}`}
    >
      {children}
    </section>
  );
}

export default function PageContent({ lang }: { lang: Lang }) {
  const t = content[lang];
  const otherLang: Lang = lang === "en" ? "fr" : "en";

  const basePath = lang === "en" ? "/en/" : "/";

  const navLinks = t.nav.map((label, i) => ({
    label,
    href: `${basePath}#${navIds[i]}`,
  }));

  return (
    <div className="font-sans text-anniversary-900 min-h-screen">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-anniversary-100">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
          <a
            href={lang === "en" ? "/en/" : "/"}
            className="font-display text-sm tracking-widest text-blue-dark uppercase hover:text-anniversary-500 transition-colors"
          >
            Sophie & Edouard
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 text-xs uppercase tracking-widest text-blue-dark">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-blue-card transition-colors"
              >
                {link.label}
              </a>
            ))}
            <span className="w-px h-4 bg-anniversary-200" />
            <a
              href={`/${otherLang}/`}
              className="font-medium text-blue-dark hover:text-blue-card transition-colors"
            >
              {otherLang.toUpperCase()}
            </a>
          </nav>

          {/* Mobile */}
          <div className="flex md:hidden items-center gap-3">
            <a
              href={`/${otherLang}/`}
              className="text-xs font-medium text-blue-dark hover:text-blue-card transition-colors uppercase"
            >
              {otherLang.toUpperCase()}
            </a>
            <details className="group">
              <summary className="list-none text-blue-dark cursor-pointer">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </summary>
              <nav className="absolute right-0 top-full bg-white border border-anniversary-200 rounded-lg shadow-lg py-3 px-5 flex flex-col gap-3 text-xs uppercase tracking-widest text-blue-dark min-w-48">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="hover:text-blue-dark transition-colors py-1"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </details>
          </div>
        </div>
      </header>

      <main className="flex flex-col items-center">
        {/* ── Hero ── */}
        <section className="w-full flex flex-col items-center justify-center px-4 pt-28 pb-20 text-center bg-blue-card">
          <p className="text-xs uppercase tracking-[0.3em] text-white mb-6 font-medium">
            {lang === "en" ? "25th Anniversary" : "25e Anniversaire"}
          </p>
          <h1 className="font-display text-5xl md:text-7xl leading-tight text-white mb-3">
            {t.hero.title}
          </h1>
          <p className="font-display text-xl md:text-2xl text-white/80 italic">
            {t.hero.subtitle}
          </p>
          <div className="mt-10 w-16 h-px bg-white/50" />
          <p className="mt-8 text-sm text-white/70 uppercase tracking-widest">
            {t.hero.date}
          </p>
          <p className="mt-1 text-sm text-white/70 uppercase tracking-widest">
            10 Voie Romaine · Douvres-la-Délivrande
          </p>
        </section>

        {/* ── Celebration ── */}
        <Section id="celebration" className="bg-white/50">
          <h2 className="font-display text-3xl md:text-4xl text-anniversary-900 mb-6 text-center">
            {t.celebration.heading}
          </h2>
          <p className="text-anniversary-600 leading-relaxed max-w-xl mx-auto text-center text-sm md:text-base">
            {t.celebration.body}
          </p>
        </Section>

        {/* ── Schedule ── */}
        <Section id="schedule">
          <h2 className="font-display text-3xl md:text-4xl text-anniversary-900 mb-10 text-center">
            {t.schedule.heading}
          </h2>
          <div className="max-w-md mx-auto space-y-6">
            {t.schedule.items.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-5 bg-white rounded-lg px-6 py-4 border border-anniversary-100"
              >
                <span className="font-display text-2xl text-blue-dark w-16 shrink-0">
                  {item.time}
                </span>
                <span className="w-px h-8 bg-anniversary-200 shrink-0" />
                <span className="text-sm text-anniversary-700 uppercase tracking-widest">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </Section>

        {/* ── Dress Code ── */}
        <Section id="dress-code" className="bg-white/50">
          <h2 className="font-display text-3xl md:text-4xl text-anniversary-900 mb-6 text-center">
            {t.dressCode.heading}
          </h2>
          <p className="text-anniversary-600 leading-relaxed max-w-xl mx-auto text-center text-sm md:text-base">
            {t.dressCode.body}
          </p>
          <div className="mt-6 flex justify-center gap-3 text-anniversary-400">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724a1 1 0 01-.553-.894V7.618a1 1 0 01.553-.894L9 4m0 16l5.447-2.724a1 1 0 00.553-.894V7.618a1 1 0 00-.553-.894L9 4m0 16V4" />
            </svg>
          </div>
        </Section>

        {/* ── Venue ── */}
        <Section id="venue">
          <h2 className="font-display text-3xl md:text-4xl text-anniversary-900 mb-6 text-center">
            {t.venue.heading}
          </h2>
          <p className="text-anniversary-600 text-sm text-center mb-6">
            {t.venue.address}
          </p>
          <div className="w-full max-w-2xl mx-auto overflow-hidden rounded-lg border border-anniversary-100 shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.146205489841!2d-0.3961599231654143!3d49.29257347005335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480a5e87c1390fd1%3A0x17521a2f65db14c8!2s10%20Voie%20Romaine%2C%2014440%20Douvres-la-D%C3%A9livrande!5e0!3m2!1sen!2sfr!4v1785236020960!5m2!1sen!2sfr"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Venue location"
            />
          </div>
        </Section>

        {/* ── Brunch ── */}
        <Section id="brunch" className="bg-white/50">
          <h2 className="font-display text-3xl md:text-4xl text-anniversary-900 mb-6 text-center">
            {t.brunch.heading}
          </h2>
          <p className="text-anniversary-600 leading-relaxed max-w-xl mx-auto text-center text-sm md:text-base">
            {t.brunch.body}
          </p>
        </Section>

        {/* ── Footer ── */}
        <footer className="w-full border-t border-anniversary-100 py-8 mt-8">
          <p className="text-center text-[10px] uppercase tracking-[0.25em] text-anniversary-400">
            {t.footer}
          </p>
        </footer>
      </main>
    </div>
  );
}
