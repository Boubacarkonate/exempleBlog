import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { useDarkMode } from "../hooks/useDarkMode";
import LogoNav from "./LogoNav";

const NavBar = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const { isDark, toggle } = useDarkMode();
  const location = useLocation();
  const isTransparent = location.pathname === "/" && !scrolled;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 top-0 z-20 flex w-full flex-row transition-all duration-300 ${
        isTransparent
          ? "bg-transparent"
          : "border-b border-amber-200/50 bg-amber-50/85 shadow-sm backdrop-blur-md dark:border-stone-700/50 dark:bg-stone-900/85"
      }`}
    >
      <div>
        <LogoNav logoName="logo" />
      </div>
      <ul
        className={`flex w-full flex-wrap items-center justify-center gap-2 p-4 text-lg uppercase transition-colors duration-300 md:justify-center md:gap-10 md:space-x-10 ${
          isTransparent
            ? "text-amber-50"
            : "text-amber-950 dark:text-amber-100"
        }`}
      >
        <li className="whitespace-nowrap hover:scale-125 hover:underline">
          <Link to="/" aria-label="Aller à l'accueil">
            Home
          </Link>
        </li>
        <li className="whitespace-nowrap hover:scale-125 hover:underline">
          <a href="/#about" aria-label="Aller à la section À propos">
            About
          </a>
        </li>
        <li className="whitespace-nowrap hover:scale-125 hover:underline">
          <a href="/#card" aria-label="Aller à la section Photos">
            Photos
          </a>
        </li>
        <li className="whitespace-nowrap hover:scale-125 hover:underline">
          <Link to="/blog" aria-label="Aller au blog">
            Blog
          </Link>
        </li>
        <li className="whitespace-nowrap hover:scale-125 hover:underline">
          <a href="/#contact" aria-label="Aller à la section Contact">
            Contact
          </a>
        </li>
        <li>
          <button
            onClick={toggle}
            aria-label={isDark ? "Passer en mode clair" : "Passer en mode sombre"}
            className={`flex h-8 w-8 items-center justify-center rounded-full transition-all hover:scale-110 ${
              isTransparent
                ? "bg-white/15 text-amber-50 hover:bg-white/25"
                : "bg-amber-950/10 text-amber-950 hover:bg-amber-950/20 dark:bg-amber-100/10 dark:text-amber-100 dark:hover:bg-amber-100/20"
            }`}
          >
            {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
