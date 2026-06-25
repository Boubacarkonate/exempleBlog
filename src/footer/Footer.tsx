import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { FiCheck, FiLink } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const { t } = useTranslation();

  const url = typeof window !== "undefined" ? window.location.origin : "";
  const twitterHref = `https://twitter.com/intent/tweet?text=${encodeURIComponent("The Travel Blog — Récits de voyage authentiques")}&url=${encodeURIComponent(url)}`;
  const linkedinHref = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;

  const copyLink = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const btnBase = "flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-all duration-200 hover:scale-105";

  return (
    <footer id="contact" className="bg-amber-950 px-6 pb-10 pt-14 text-amber-200 transition-colors duration-300 dark:bg-stone-900">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 flex flex-col items-center text-center">
          <img src={logo} alt="The Travel Blog" className="mb-4 h-12 w-12 rounded-full object-cover opacity-80" />
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-400">The Travel Blog</p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-amber-300/60">{t("footer.tagline")}</p>
        </div>

        <nav className="mb-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-xs font-semibold uppercase tracking-widest text-amber-300/80">
          <Link to="/" className="transition-colors hover:text-amber-50">{t("footer.home")}</Link>
          <Link to="/blog" className="transition-colors hover:text-amber-50">{t("footer.blog")}</Link>
          <a href="/#about" className="transition-colors hover:text-amber-50">{t("footer.about")}</a>
          <a href="/#card" className="transition-colors hover:text-amber-50">{t("footer.destinations")}</a>
          <a href="mailto:contact@thetravelblog.fr" className="transition-colors hover:text-amber-50">{t("footer.contact")}</a>
        </nav>

        <div className="mb-8 border-t border-amber-800/40" />

        <div className="mb-8 flex flex-col items-center gap-4">
          <p className="text-xs font-bold uppercase tracking-widest text-amber-400">{t("footer.share")}</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={twitterHref} target="_blank" rel="noopener noreferrer" className={`${btnBase} bg-stone-900 text-white hover:bg-stone-700`}>
              <FaXTwitter size={14} /> X / Twitter
            </a>
            <a href={linkedinHref} target="_blank" rel="noopener noreferrer" className={`${btnBase} bg-[#0077b5] text-white hover:bg-[#005f91]`}>
              <FaLinkedinIn size={14} /> LinkedIn
            </a>
            <button onClick={copyLink} className={`${btnBase} ${copied ? "bg-green-600 text-white" : "bg-amber-800/60 text-amber-100 hover:bg-amber-800"}`}>
              {copied ? <FiCheck size={14} /> : <FiLink size={14} />}
              {copied ? t("footer.copied") : t("footer.copy")}
            </button>
          </div>
        </div>

        <div className="mb-6 border-t border-amber-800/40" />

        <p className="text-center text-xs text-amber-300/40">
          {t("footer.copyright", { year: new Date().getFullYear() })}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
