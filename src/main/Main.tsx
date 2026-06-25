import { useTranslation } from "react-i18next";
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

const Main = () => {
  const { t } = useTranslation();

  return (
    <div>
      <SEO
        title="Accueil"
        description="Bienvenue sur The Travel Blog — récits de voyage inspirants, galerie photo et découvertes du monde entier."
        url="/"
      />

      <Hero />

      <div className="mx-4 mt-16 grid gap-24 pb-8 sm:mx-10 md:mx-20 lg:mx-32 xl:mx-52">

        <FadeInUp>
          <section id="about" className="scroll-mt-24">
            <SectionTitle
              label={t("home.about_label")}
              title={t("home.about_title")}
              subtitle={t("home.about_subtitle")}
            />
            <p className="max-w-3xl text-justify text-lg leading-relaxed text-amber-900 dark:text-amber-200">
              {t("home.about_text")}
            </p>
          </section>
        </FadeInUp>

        <FadeInUp delay={0.05}>
          <section id="card" className="scroll-mt-24">
            <SectionTitle
              label={t("home.dest_label")}
              title={t("home.dest_title")}
              subtitle={t("home.dest_subtitle")}
            />
            <Card />
          </section>
        </FadeInUp>

        <FadeInUp delay={0.05}>
          <StatsSection />
        </FadeInUp>

        <FadeInUp delay={0.05}>
          <section>
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <SectionTitle
                label={t("home.blog_label")}
                title={t("home.blog_title")}
                subtitle={t("home.blog_subtitle")}
              />
              <Link
                to="/blog"
                className="mb-10 shrink-0 rounded-full border border-amber-950 px-5 py-2 text-sm font-semibold text-amber-950 transition-all hover:scale-105 hover:bg-amber-950 hover:text-amber-50 dark:border-amber-300 dark:text-amber-100 dark:hover:bg-amber-300 dark:hover:text-stone-900"
              >
                {t("home.blog_all")}
              </Link>
            </div>
            <BlogPreview />
          </section>
        </FadeInUp>

        <FadeInUp delay={0.05}>
          <section>
            <SectionTitle
              label={t("home.gallery_label")}
              title={t("home.gallery_title")}
              subtitle={t("home.gallery_subtitle")}
            />
            <Gallery />
          </section>
        </FadeInUp>

        <FadeInUp delay={0.05}>
          <NextDestination />
        </FadeInUp>

      </div>
    </div>
  );
};

export default Main;
