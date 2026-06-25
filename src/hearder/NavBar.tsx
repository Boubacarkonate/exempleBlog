import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { useDarkMode } from "../hooks/useDarkMode";
import LogoNav from "./LogoNav";

const NavBar = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const { isDark, toggle } = useDarkMode();
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const isTransparent = location.pathname === "/" && !scrolled;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLang = () => {
    const next = i18n.language === "fr" ? "en" : "fr";
    i18n.changeLanguage(next);
    localStorage.setItem("lang", next);
  };

  const linkClass = `transition-colors duration-200 hover:opacity-70 ${
    isTransparent ? "text-amber-50" : "text-amber-950 dark:text-amber-100"
  }`;

  const iconBtnClass = `flex items-center justify-center rounded-full transition-all hover:scale-110 ${
    isTransparent
      ? "bg-white/15 text-amber-50 hover:bg-white/25"
      : "bg-amber-950/8 text-amber-950 hover:bg-amber-950/15 dark:bg-amber-100/10 dark:text-amber-100 dark:hover:bg-amber-100/20"
  }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-20 flex items-center justify-between px-6 py-3 transition-all duration-300 ${
        isTransparent
          ? "bg-transparent"
          : "border-b border-amber-200/50 bg-amber-50/90 shadow-sm backdrop-blur-md dark:border-stone-700/50 dark:bg-stone-900/90"
      }`}
    >
      <LogoNav />

      <nav>
        <ul className="flex flex-wrap items-center gap-5 text-xs font-semibold uppercase tracking-widest">
          <li><Link to="/" className={linkClass}>{t("nav.home")}</Link></li>
          <li><Link to="/about" className={linkClass}>{t("nav.about")}</Link></li>
          <li><a href="/#card" className={linkClass}>{t("nav.photos")}</a></li>
          <li><Link to="/blog" className={linkClass}>{t("nav.blog")}</Link></li>
          <li><a href="/#contact" className={linkClass}>{t("nav.contact")}</a></li>
        </ul>
      </nav>

      <div className="flex items-center gap-2">
        {/* Toggle langue */}
        <button
          onClick={toggleLang}
          aria-label="Changer de langue"
          className={`${iconBtnClass} h-8 px-2.5 text-xs font-bold`}
        >
          {i18n.language === "fr" ? "EN" : "FR"}
        </button>

        {/* Toggle dark mode */}
        <button
          onClick={toggle}
          aria-label={isDark ? "Mode clair" : "Mode sombre"}
          className={`${iconBtnClass} h-8 w-8`}
        >
          {isDark ? <FiSun size={17} /> : <FiMoon size={17} />}
        </button>
      </div>
    </header>
  );
};

export default NavBar;
