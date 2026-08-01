import NavClient from "./NavClient";

interface Content {
  nav: string[];
  hero: { title: string; subtitle: string; date: string; followup: string };
  dressCode: { heading: string; body: string; footAttire: string; weather: string };
  address: { heading: string; address: string };
  parking: { heading: string; body: string };
  brunch: { heading: string; body: string };
  footer: string;
}

type Lang = "en" | "fr";

const content: Record<Lang, Content> = {
  en: {
    nav: ["Dress Code", "Address", "Parking", "Brunch"],
    hero: {
      title: "The Party",
      subtitle: "Sophie & Edouard",
      date: "29 August 2026 · Cocktails from 19h00",
      followup: "Followed by dinner",
    },
    dressCode: {
      heading: "Dress Code",
      body: "Black tie is welcome or cocktail chic, but most importantly wear what makes you feel great, we know traveling doesn't leave room to pack the kitchen sink.",
      footAttire:
        "Foot attire: there is a proper dance floor for your groovy moves, but everywhere else is lawn.",
      weather:
        "Don't forget this is Normandy, where the weather treats the forecast as a suggestion, hope for sunshine but prepare for rain just in case.",
    },
    address: {
      heading: "Address",
      address: "10 Voie Romaine, 14440 Douvres-la-Délivrande, France",
    },
    parking: {
      heading: "Parking",
      body: "Please do not enter via the main entrance with your car. Parking is available around the back of the property, follow the signs.",
    },
    brunch: {
      heading: "Next-Day Brunch",
      body: "Join us from 11am for an informal brunch to continue the celebrations.",
    },
    footer: "Made with love for Sophie & Edouard",
  },
  fr: {
    nav: ["Code vestimentaire", "Adresse", "Stationnement", "Brunch"],
    hero: {
      title: "La fête",
      subtitle: "Sophie & Edouard",
      date: "29 août 2026 · Cocktails dès 19h00",
      followup: "Suivi d'un dîner",
    },
    dressCode: {
      heading: "Code Vestimentaire",
      body: "Le smoking ou le cocktail chic sont les bienvenus, mais surtout, portez ce qui vous fait vous sentir bien, nous savons qu'il est difficile de faire entrer une maison dans une valise.",
      footAttire:
        "Chaussures : il y a une vraie piste de danse pour vos pas les plus groovy, mais partout ailleurs c'est de la pelouse.",
      weather:
        "N'oubliez pas que nous sommes en Normandie, où la météo traite les prévisions comme une suggestion, espérez du soleil mais préparez-vous à la pluie.",
    },
    address: {
      heading: "Adresse",
      address: "10 Voie Romaine, 14440 Douvres-la-Délivrande, France",
    },
    parking: {
      heading: "Stationnement",
      body: "Merci de ne pas entrer par l'entrée principale avec votre voiture. Le stationnement se trouve à l'arrière de la propriété, suivez les panneaux.",
    },
    brunch: {
      heading: "Brunch du Lendemain",
      body: "Retrouvez-nous dès 11h pour un brunch informel afin de prolonger les festivités.",
    },
    footer: "Réalisé avec amour pour Sophie & Edouard",
  },
};

const navIds = ["dress-code", "address", "parking", "brunch"];

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

  const navLinks = t.nav.map((label, i) => ({
    label,
    href: `#${navIds[i]}`,
  }));

  return (
    <div className="font-sans text-anniversary-900 min-h-screen">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-anniversary-100">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
          <a
            href={`../${lang}/`}
            className="font-display text-sm tracking-widest text-blue-dark uppercase hover:text-anniversary-500 transition-colors"
          >
            Sophie & Edouard
          </a>

          {/* Desktop + Mobile nav */}
          <NavClient
            links={navLinks}
            otherLangHref={`../${otherLang}/`}
            otherLangLabel={otherLang.toUpperCase()}
          />
        </div>
      </header>

      <main className="flex flex-col items-center">
        {/* ── Hero ── */}
        <section className="w-full flex flex-col items-center justify-center px-4 pt-28 pb-20 text-center bg-blue-card">
          <img
            src="../troll.svg"
            alt="troll"
            className="w-32 md:w-40 mb-6"
          />
          <h1 className="font-display text-5xl md:text-7xl leading-tight text-white mb-3">
            {t.hero.title}
          </h1>
          <p className="font-display text-xl md:text-2xl text-white/80 italic">
            {t.hero.subtitle}
          </p>
          <div className="mt-10 w-16 h-px bg-white/50" />
          <p className="mt-8 text-sm text-white/70 tracking-widest">
            {t.hero.date}
          </p>
          <p className="mt-1 text-sm text-white/70 tracking-widest">
            {t.hero.followup}
          </p>
          <p className="mt-4 text-sm text-white/70 tracking-widest">
            10 Voie Romaine
            <br />
            14440 Douvres-la-Délivrande
          </p>
        </section>

        {/* ── Dress Code ── */}
        <Section id="dress-code" className="bg-white/50">
          <h2 className="font-display text-3xl md:text-4xl text-anniversary-900 mb-6 text-center">
            {t.dressCode.heading}
          </h2>
          <p className="text-anniversary-600 leading-relaxed max-w-xl mx-auto text-center text-sm md:text-base">
            {t.dressCode.body}
          </p>
          <p className="text-anniversary-600 leading-relaxed max-w-xl mx-auto text-center text-sm md:text-base mt-4">
            {t.dressCode.footAttire}
          </p>
          <p className="text-anniversary-600 leading-relaxed max-w-xl mx-auto text-center text-sm md:text-base mt-4">
            {t.dressCode.weather}
          </p>
          <div className="mt-8 flex justify-center">
            <img
              src="../4_saisons_normandie.jpg"
              alt="4 saisons en Normandie"
              className="max-w-full h-auto rounded-lg shadow-sm border border-anniversary-100"
            />
          </div>
        </Section>

        {/* ── Address ── */}
        <Section id="address">
          <h2 className="font-display text-3xl md:text-4xl text-anniversary-900 mb-6 text-center">
            {t.address.heading}
          </h2>
          <p className="text-anniversary-600 text-sm text-center mb-6">
            {t.address.address}
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
              title="Address location"
            />
          </div>
        </Section>

        {/* ── Parking ── */}
        <Section id="parking" className="bg-white/50">
          <h2 className="font-display text-3xl md:text-4xl text-anniversary-900 mb-6 text-center">
            {t.parking.heading}
          </h2>
          <p className="text-anniversary-600 leading-relaxed max-w-xl mx-auto text-center text-sm md:text-base mb-8">
            {t.parking.body}
          </p>
          <div className="w-full max-w-2xl mx-auto overflow-hidden rounded-lg border border-anniversary-100 shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!3m2!1sen!2sfr!4v1785257822679!5m2!1sen!2sfr!6m8!1m7!1svlAfbMZ8dfmML_3wUvBWfA!2m2!1d49.29402700697712!2d-0.3925219611946101!3f90.89461841910381!4f-36.06674466026493!5f0.7820865974627469"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Parking entrance location"
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
          <p className="text-center text-[10px] tracking-[0.25em] text-anniversary-400">
            {t.footer}
          </p>
        </footer>
      </main>
    </div>
  );
}
