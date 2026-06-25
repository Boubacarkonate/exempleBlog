import { Link } from "react-router-dom";
import FadeInUp from "../components/FadeInUp";
import SEO from "../components/SEO";
import SectionTitle from "../components/SectionTitle";
import StatsSection from "../components/StatsSection";
import BlogPreview from "./BlogPreview";
import Card from "./Card";
import Gallery from "./Gallery";
import Hero from "./Hero";
import NextDestination from "./NextDestination";

const Main = () => (
  <div>
    <SEO
      title="Accueil"
      description="Bienvenue sur The Travel Blog — récits de voyage inspirants, galerie photo et découvertes du monde entier. Explorez les destinations avec moi."
      url="/"
    />

    <Hero />

    <div className="mx-4 grid gap-24 pb-8 sm:mx-10 md:mx-20 lg:mx-32 xl:mx-52">

      {/* À propos */}
      <FadeInUp>
        <section id="about" className="scroll-mt-24">
          <SectionTitle
            label="À propos"
            title="Le voyage comme art de vivre"
            subtitle="Passionné par l'exploration, je documente chaque aventure pour partager l'essentiel — la curiosité, la rencontre, l'émerveillement."
          />
          <p className="max-w-3xl text-justify text-lg leading-relaxed text-amber-900 dark:text-amber-200">
            Depuis les fjords de Norvège aux ruelles de Marrakech, en passant
            par les temples de Tokyo et les falaises de Santorin, The Travel
            Blog est né d'une conviction simple : chaque voyage transforme.
            Ici, pas de guides touristiques génériques — seulement des récits
            authentiques, des photos honnêtes et des conseils pratiques issus
            du terrain. Rejoignez-moi dans cette aventure et laissez-vous
            inspirer à sortir des sentiers battus.
          </p>
        </section>
      </FadeInUp>

      {/* Destinations */}
      <FadeInUp delay={0.05}>
        <section id="card" className="scroll-mt-24">
          <SectionTitle
            label="Destinations"
            title="Nos destinations"
            subtitle="Quelques pays qui m'ont marqué — survolez les cartes pour en savoir plus."
          />
          <Card />
        </section>
      </FadeInUp>

      {/* Stats */}
      <FadeInUp delay={0.05}>
        <StatsSection />
      </FadeInUp>

      {/* Derniers articles */}
      <FadeInUp delay={0.05}>
        <section>
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <SectionTitle
              label="Blog"
              title="Derniers articles"
              subtitle="Les récits les plus récents du carnet de voyage."
            />
            <Link
              to="/blog"
              className="mb-10 shrink-0 rounded-full border border-amber-950 px-5 py-2 text-sm font-semibold text-amber-950 transition-all hover:scale-105 hover:bg-amber-950 hover:text-amber-50 dark:border-amber-300 dark:text-amber-100 dark:hover:bg-amber-300 dark:hover:text-stone-900"
            >
              Tous les articles →
            </Link>
          </div>
          <BlogPreview />
        </section>
      </FadeInUp>

      {/* Galerie */}
      <FadeInUp delay={0.05}>
        <section>
          <SectionTitle
            label="Galerie"
            title="La galerie"
            subtitle="Filtrez par catégorie et cliquez sur une photo pour l'agrandir."
          />
          <Gallery />
        </section>
      </FadeInUp>

      {/* Prochaine destination */}
      <FadeInUp delay={0.05}>
        <NextDestination />
      </FadeInUp>

    </div>
  </div>
);

export default Main;
