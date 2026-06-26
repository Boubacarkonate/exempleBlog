import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { doc, getDoc, increment, onSnapshot, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../lib/firebase";

const STORAGE_KEY = (slug: string) => `liked_${slug}`;

interface Props {
  slug: string;
}

const LikeButton = ({ slug }: Props) => {
  const { t } = useTranslation();
  const [count, setCount] = useState<number | null>(null);
  const [liked, setLiked] = useState(false);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    setLiked(localStorage.getItem(STORAGE_KEY(slug)) === "1");

    const ref = doc(db, "likes", slug);
    const unsub = onSnapshot(ref, (snap) => {
      setCount(snap.exists() ? (snap.data().count as number) : 0);
    });
    return unsub;
  }, [slug]);

  const toggle = async () => {
    const ref = doc(db, "likes", slug);
    const snap = await getDoc(ref);

    if (!snap.exists()) {
      await setDoc(ref, { count: liked ? 0 : 1 });
    } else {
      await updateDoc(ref, { count: increment(liked ? -1 : 1) });
    }

    const next = !liked;
    setLiked(next);
    if (next) {
      localStorage.setItem(STORAGE_KEY(slug), "1");
    } else {
      localStorage.removeItem(STORAGE_KEY(slug));
    }

    setAnimating(true);
    setTimeout(() => setAnimating(false), 400);
  };

  return (
    <div className="flex flex-col items-center gap-1">
      <button
        onClick={toggle}
        aria-label={t("likes.label")}
        className={`flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-200 hover:scale-105 active:scale-95
          ${liked
            ? "border-rose-400 bg-rose-50 text-rose-500 dark:border-rose-500 dark:bg-rose-950/30 dark:text-rose-400"
            : "border-amber-200 bg-white text-amber-700 hover:border-rose-300 hover:text-rose-500 dark:border-stone-600 dark:bg-stone-800 dark:text-amber-300 dark:hover:border-rose-500 dark:hover:text-rose-400"
          }`}
      >
        <span className={`text-lg leading-none transition-transform duration-300 ${animating ? "scale-150" : "scale-100"}`}>
          {liked ? "❤️" : "🤍"}
        </span>
        <span>
          {count === null ? "…" : count} {t("likes.label")}
        </span>
      </button>
      {liked && (
        <p className="text-xs text-rose-400 dark:text-rose-500">{t("likes.thanks")}</p>
      )}
    </div>
  );
};

export default LikeButton;
