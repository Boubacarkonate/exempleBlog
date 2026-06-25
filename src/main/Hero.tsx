import { Link } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import mapImage from "../assets/map.png";

const Hero = () => (
  <section className="relative -mt-32 flex min-h-screen items-center justify-center overflow-hidden">
    {/* Image de fond */}
    <img
      src={mapImage}
      alt="Carte du monde"
      className="absolute inset-0 h-full w-full object-cover"
    />

    {/* Overlay gradient */}
    <div className="absolute inset-0 bg-gradient-to-b from-amber-950/75 via-amber-950/60 to-amber-950/85" />

    {/* Contenu centré */}
    <div className="relative z-10 px-6 pt-32 text-center text-amber-50">
      <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-amber-400">
        The Travel Blog
      </p>
      <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
        Explorez le monde
        <br />
        avec moi
      </h1>
      <p className="mx-auto mb-10 max-w-xl text-lg text-amber-100/80">
        Récits authentiques, destinations iconiques et photographies de voyage
        pour vous inspirer à partir.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          to="/blog"
          className="rounded-full bg-amber-400 px-8 py-3 font-semibold text-stone-900 transition-all hover:scale-105 hover:bg-amber-300"
        >
          Lire le blog
        </Link>
        <a
          href="#about"
          className="rounded-full border border-amber-50/40 px-8 py-3 font-semibold text-amber-50 transition-all hover:scale-105 hover:bg-amber-50/10"
        >
          Découvrir
        </a>
      </div>
    </div>

    {/* Flèche scroll */}
    <a
      href="#about"
      aria-label="Défiler vers le bas"
      className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-amber-400 transition-opacity hover:opacity-70"
    >
      <FiChevronDown size={28} />
    </a>
  </section>
);

export default Hero;
