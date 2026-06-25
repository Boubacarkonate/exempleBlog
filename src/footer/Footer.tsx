import { FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer = () => (
  <footer
    id="contact"
    className="bg-amber-950 px-6 pb-10 pt-14 text-amber-200 transition-colors duration-300 dark:bg-stone-900"
  >
    <div className="mx-auto max-w-5xl">
      {/* Logo + tagline */}
      <div className="mb-10 flex flex-col items-center text-center">
        <img
          src={logo}
          alt="The Travel Blog"
          className="mb-4 h-12 w-12 object-contain opacity-80"
        />
        <p className="text-xs font-semibold uppercase tracking-widest text-amber-400">
          The Travel Blog
        </p>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-amber-300/60">
          Récits authentiques, destinations iconiques et photographies de
          voyage pour vous inspirer à partir.
        </p>
      </div>

      {/* Navigation */}
      <nav className="mb-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-xs font-semibold uppercase tracking-widest text-amber-300/80">
        <Link to="/" className="transition-colors hover:text-amber-50">
          Accueil
        </Link>
        <Link to="/blog" className="transition-colors hover:text-amber-50">
          Blog
        </Link>
        <a href="/#about" className="transition-colors hover:text-amber-50">
          À propos
        </a>
        <a href="/#card" className="transition-colors hover:text-amber-50">
          Destinations
        </a>
        <a
          href="mailto:contact@thetravelblog.fr"
          className="transition-colors hover:text-amber-50"
        >
          Contact
        </a>
      </nav>

      {/* Séparateur */}
      <div className="mb-8 border-t border-amber-800/40" />

      {/* Bas de page : copyright + réseaux */}
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <p className="text-xs text-amber-300/40">
          © {new Date().getFullYear()} The Travel Blog — Tous droits réservés
        </p>
        <div className="flex gap-5">
          <a
            href="#"
            aria-label="Twitter"
            className="text-amber-300/50 transition-colors hover:text-amber-50"
          >
            <FiTwitter size={18} />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="text-amber-300/50 transition-colors hover:text-amber-50"
          >
            <FiInstagram size={18} />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="text-amber-300/50 transition-colors hover:text-amber-50"
          >
            <FiLinkedin size={18} />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
