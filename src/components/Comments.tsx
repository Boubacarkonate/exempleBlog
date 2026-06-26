import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  where,
  type Timestamp,
} from "firebase/firestore";
import { db } from "../lib/firebase";

interface Comment {
  id: string;
  author: string;
  text: string;
  createdAt: Timestamp | null;
}

interface Props {
  slug: string;
}

const formatDate = (ts: Timestamp | null, lang: string) => {
  if (!ts) return "…";
  return ts.toDate().toLocaleDateString(lang === "en" ? "en-GB" : "fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

const Comments = ({ slug }: Props) => {
  const { t, i18n } = useTranslation();
  const [comments, setComments] = useState<Comment[]>([]);
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const q = query(
      collection(db, "comments"),
      where("slug", "==", slug),
      orderBy("createdAt", "asc")
    );
    const unsub = onSnapshot(q, (snap) => {
      setComments(
        snap.docs.map((d) => ({ id: d.id, ...(d.data() as Omit<Comment, "id">) }))
      );
    });
    return unsub;
  }, [slug]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!author.trim() || !text.trim()) return;
    setStatus("sending");
    try {
      await addDoc(collection(db, "comments"), {
        slug,
        author: author.trim(),
        text: text.trim(),
        createdAt: serverTimestamp(),
      });
      setText("");
      setStatus("success");
      setTimeout(() => setStatus("idle"), 3000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section className="mt-16 border-t border-amber-200 pt-10 dark:border-stone-700">
      <h3 className="mb-8 text-lg font-bold uppercase tracking-wide text-amber-950 dark:text-amber-100">
        {t("comments.title")}
        {comments.length > 0 && (
          <span className="ml-2 text-sm font-normal text-amber-500 normal-case">({comments.length})</span>
        )}
      </h3>

      {/* Form */}
      <form onSubmit={handleSubmit} className="mb-10 rounded-2xl border border-amber-200 bg-amber-50/60 p-6 dark:border-stone-700 dark:bg-stone-800/60">
        <div className="mb-4">
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-amber-700 dark:text-amber-400">
            {t("comments.name")}
          </label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
            maxLength={60}
            placeholder={t("comments.name_placeholder")}
            className="w-full rounded-xl border border-amber-200 bg-white px-4 py-2.5 text-sm text-amber-950 placeholder-amber-300 outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-100 dark:border-stone-600 dark:bg-stone-700 dark:text-amber-100 dark:placeholder-stone-500 dark:focus:border-amber-500 dark:focus:ring-stone-600"
          />
        </div>
        <div className="mb-5">
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-amber-700 dark:text-amber-400">
            {t("comments.message")}
          </label>
          <textarea
            ref={textareaRef}
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
            rows={4}
            maxLength={1000}
            placeholder={t("comments.message_placeholder")}
            className="w-full resize-none rounded-xl border border-amber-200 bg-white px-4 py-2.5 text-sm text-amber-950 placeholder-amber-300 outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-100 dark:border-stone-600 dark:bg-stone-700 dark:text-amber-100 dark:placeholder-stone-500 dark:focus:border-amber-500 dark:focus:ring-stone-600"
          />
          <p className="mt-1 text-right text-xs text-amber-400">{text.length}/1000</p>
        </div>
        <div className="flex items-center gap-4">
          <button
            type="submit"
            disabled={status === "sending" || !author.trim() || !text.trim()}
            className="rounded-full bg-amber-950 px-6 py-2.5 text-sm font-semibold text-amber-50 transition-all hover:bg-amber-700 disabled:opacity-50 dark:bg-amber-400 dark:text-stone-900 dark:hover:bg-amber-300"
          >
            {status === "sending" ? t("comments.sending") : t("comments.submit")}
          </button>
          {status === "success" && (
            <p className="text-sm font-medium text-teal-600 dark:text-teal-400">✓ {t("comments.success")}</p>
          )}
          {status === "error" && (
            <p className="text-sm font-medium text-red-500">{t("comments.error")}</p>
          )}
        </div>
      </form>

      {/* Comment list */}
      {comments.length === 0 ? (
        <p className="text-center text-sm text-amber-500 dark:text-amber-400">
          {t("comments.empty")} {t("comments.be_first")}
        </p>
      ) : (
        <ul className="space-y-5">
          {comments.map((c) => (
            <li key={c.id} className="rounded-2xl border border-amber-100 bg-white p-5 dark:border-stone-700 dark:bg-stone-800">
              <div className="mb-2 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-200 text-sm font-bold text-amber-800 dark:bg-amber-800 dark:text-amber-200">
                    {c.author[0].toUpperCase()}
                  </div>
                  <span className="font-semibold text-amber-950 dark:text-amber-100">{c.author}</span>
                </div>
                <time className="text-xs text-amber-400 dark:text-amber-500">
                  {formatDate(c.createdAt, i18n.language)}
                </time>
              </div>
              <p className="whitespace-pre-wrap text-sm leading-relaxed text-amber-800/80 dark:text-amber-300/80">{c.text}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Comments;
