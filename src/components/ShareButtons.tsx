import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { FiCheck, FiLink } from "react-icons/fi";

interface ShareButtonsProps {
  title: string;
  slug: string;
}

const ShareButtons = ({ title, slug }: ShareButtonsProps) => {
  const [copied, setCopied] = useState(false);
  const { t } = useTranslation();

  const url = `${window.location.origin}/blog/${slug}`;
  const twitterHref = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
  const linkedinHref = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;

  const copyLink = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const btnBase =
    "flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-all duration-200 hover:scale-105";

  return (
    <div className="my-10 border-t border-amber-200 pt-8 dark:border-stone-700">
      <p className="mb-4 text-xs font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400">
        {t("share.article")}
      </p>
      <div className="flex flex-wrap gap-3">
        <a href={twitterHref} target="_blank" rel="noopener noreferrer"
          className={`${btnBase} bg-stone-900 text-white hover:bg-stone-700`} aria-label="Partager sur X / Twitter">
          <FaXTwitter size={14} /> X / Twitter
        </a>
        <a href={linkedinHref} target="_blank" rel="noopener noreferrer"
          className={`${btnBase} bg-[#0077b5] text-white hover:bg-[#005f91]`} aria-label="Partager sur LinkedIn">
          <FaLinkedinIn size={14} /> LinkedIn
        </a>
        <button onClick={copyLink}
          className={`${btnBase} ${copied ? "bg-green-600 text-white" : "bg-amber-100 text-amber-950 hover:bg-amber-200 dark:bg-stone-700 dark:text-amber-100 dark:hover:bg-stone-600"}`}
          aria-label={t("share.copy")}>
          {copied ? <FiCheck size={14} /> : <FiLink size={14} />}
          {copied ? t("share.copied") : t("share.copy")}
        </button>
      </div>
    </div>
  );
};

export default ShareButtons;
