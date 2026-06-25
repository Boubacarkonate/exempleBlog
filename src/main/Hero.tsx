import { useEffect, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import mapImage from "../assets/map.png";

const Hero = () => {
  const [offsetY, setOffsetY] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative -mt-32 flex min-h-screen items-center justify-center overflow-hidden">
      <img
        src={mapImage}
        alt="Carte du monde"
        style={{ transform: `translateY(${offsetY * 0.4}px)` }}
        className="absolute inset-x-0 -top-16 h-[calc(100%+120px)] w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-amber-950/75 via-amber-950/60 to-amber-950/85" />

      <div className="relative z-10 px-6 pt-32 text-center text-amber-50">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-amber-400">
          {t("hero.label")}
        </p>
        <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
          {t("hero.title_1")}
          <br />
          {t("hero.title_2")}
        </h1>
        <p className="mx-auto mb-10 max-w-xl text-lg text-amber-100/80">
          {t("hero.subtitle")}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/blog"
            className="rounded-full bg-amber-400 px-8 py-3 font-semibold text-stone-900 transition-all hover:scale-105 hover:bg-amber-300"
          >
            {t("hero.cta_blog")}
          </Link>
          <a
            href="#about"
            className="rounded-full border border-amber-50/40 px-8 py-3 font-semibold text-amber-50 transition-all hover:scale-105 hover:bg-amber-50/10"
          >
            {t("hero.cta_discover")}
          </a>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Défiler vers le bas"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-amber-400 transition-opacity hover:opacity-70"
      >
        <FiChevronDown size={28} />
      </a>
    </section>
  );
};

export default Hero;
