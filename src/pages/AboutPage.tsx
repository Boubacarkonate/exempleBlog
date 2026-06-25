import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import FadeInUp from "../components/FadeInUp";
import SEO from "../components/SEO";
import SectionTitle from "../components/SectionTitle";
import WorldMap from "../components/WorldMap";
import PageTransition from "../components/PageTransition";

const COUNTRIES = [
  { name: "Grèce", emoji: "🇬🇷", year: "2021" },
  { name: "Japon", emoji: "🇯🇵", year: "2022" },
  { name: "Norvège", emoji: "🇳🇴", year: "2022" },
  { name: "Maroc", emoji: "🇲🇦", year: "2023" },
  { name: "Italie", emoji: "🇮🇹", year: "2023" },
  { name: "Brésil", emoji: "🇧🇷", year: "2024" },
];

const AboutPage = () => (
  <PageTransition>
    <main className="min-h-screen pb-0">
      <SEO
        title="À propos"
        description="Découvrez qui se cache derrière The Travel Blog — passionné de voyage, de photographie et de découvertes culturelles."
        url="/about"
      />

      {/* Hero */}
      <div className="relative overflow-hidden bg-amber-950 pb-20 pt-32 text-center dark:bg-stone-800">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1400&q=60"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-amber-400">
            The Travel Blog
          </p>
          <h1 className="text-4xl font-bold text-amber-50 md:text-5xl">
            À propos
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-amber-200/70">
            Le voyageur derrière les récits
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 py-16">
        {/* Bio */}
        <FadeInUp>
          <section className="mb-20 grid items-center gap-12 md:grid-cols-2">
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1488161628813-04466f872be2?w=700&auto=format&fit=crop&q=75"
                alt="Portrait du voyageur"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <SectionTitle
                label="Bonjour"
                title="Je suis Bouba"
                subtitle="Passionné de voyage, de photographie et de rencontres."
              />
              <div className="space-y-4 text-amber-900/80 dark:text-amber-200/80">
                <p className="leading-relaxed">
                  Depuis mon premier voyage en Grèce, j'ai compris que le
                  monde était bien plus grand que ce que les livres pouvaient
                  raconter. Chaque destination m'a appris quelque chose — sur
                  les autres, sur moi-même, sur ce qui compte vraiment.
                </p>
                <p className="leading-relaxed">
                  The Travel Blog est né de cette conviction : partager
                  l'essentiel pour vous donner envie de partir à votre tour.
                  Pas de guides génériques, mais des récits honnêtes, des
                  photos authentiques et des conseils tirés du terrain.
                </p>
              </div>
              <div className="mt-8 flex gap-4">
                <Link
                  to="/blog"
                  className="rounded-full bg-amber-950 px-6 py-2.5 text-sm font-semibold text-amber-50 transition-all hover:scale-105 hover:bg-amber-800 dark:bg-amber-400 dark:text-stone-900"
                >
                  Lire le blog
                </Link>
                <a
                  href="#contact"
                  className="rounded-full border border-amber-950/30 px-6 py-2.5 text-sm font-semibold text-amber-950 transition-all hover:scale-105 hover:bg-amber-100 dark:border-amber-300/30 dark:text-amber-100 dark:hover:bg-stone-700"
                >
                  Me contacter
                </a>
              </div>
            </div>
          </section>
        </FadeInUp>

        {/* Pays visités */}
        <FadeInUp delay={0.05}>
          <section className="mb-20">
            <SectionTitle
              label="Explorations"
              title="Pays visités"
              subtitle="6 pays, 4 continents, des souvenirs pour toute une vie."
            />

            {/* Badges pays */}
            <div className="mb-8 flex flex-wrap gap-3">
              {COUNTRIES.map((c) => (
                <span
                  key={c.name}
                  className="flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-900 dark:bg-stone-700 dark:text-amber-200"
                >
                  <span>{c.emoji}</span>
                  {c.name}
                  <span className="text-xs font-normal text-amber-500 dark:text-amber-400">
                    {c.year}
                  </span>
                </span>
              ))}
            </div>

            <WorldMap />
          </section>
        </FadeInUp>

        {/* Formulaire de contact */}
        <FadeInUp delay={0.05}>
          <section id="contact" className="scroll-mt-24">
            <SectionTitle
              label="Contact"
              title="Me contacter"
              subtitle="Une question, une collaboration, un simple bonjour ? Écrivez-moi."
            />
            <div className="rounded-2xl bg-white p-8 shadow-md dark:bg-stone-800">
              <ContactForm />
            </div>
          </section>
        </FadeInUp>
      </div>
    </main>
  </PageTransition>
);

export default AboutPage;
