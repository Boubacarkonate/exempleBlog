import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useDarkMode } from "../hooks/useDarkMode";
import LogoNav from "./LogoNav";

const NavBar = () => {
  const [opacity, setOpacity] = useState<number>(1);
  const { isDark, toggle } = useDarkMode();

  useEffect(() => {
    const handleScroll = () => {
      const newOpacity = Math.max(0.8, 1 - window.scrollY / 300);
      setOpacity(newOpacity);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed inset-x-0 top-0 z-20 flex w-full flex-row transition-opacity duration-300"
      style={{ opacity }}
    >
      <div>
        <LogoNav logoName="logo" />
      </div>
      <ul className="flex w-full flex-wrap items-center justify-center gap-2 bg-amber-200 p-4 text-lg uppercase text-amber-950 transition-colors duration-300 dark:bg-stone-800 dark:text-amber-100 md:justify-center md:gap-10 md:space-x-10">
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
            className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-950/10 text-amber-950 transition-all hover:scale-110 hover:bg-amber-950/20 dark:bg-amber-100/10 dark:text-amber-100 dark:hover:bg-amber-100/20"
          >
            {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
