import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { FiCheck, FiSend } from "react-icons/fi";

type Status = "idle" | "sending" | "success" | "error";

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const { t } = useTranslation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current!,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY },
      );
      setStatus("success");
      formRef.current?.reset();
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full rounded-xl border border-amber-200 bg-white px-4 py-3 text-sm text-amber-950 placeholder-amber-300 outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-100 dark:border-stone-600 dark:bg-stone-800 dark:text-amber-100 dark:placeholder-stone-500 dark:focus:border-amber-500 dark:focus:ring-stone-700";

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-amber-700 dark:text-amber-400">
            {t("contact.name")}
          </label>
          <input name="user_name" type="text" required placeholder={t("contact.name_ph")} className={inputClass} />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-amber-700 dark:text-amber-400">
            {t("contact.email")}
          </label>
          <input name="user_email" type="email" required placeholder={t("contact.email_ph")} className={inputClass} />
        </div>
      </div>
      <div>
        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-amber-700 dark:text-amber-400">
          {t("contact.message")}
        </label>
        <textarea name="message" rows={5} required placeholder={t("contact.message_ph")} className={`${inputClass} resize-none`} />
      </div>
      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending" || status === "success"}
          className="flex items-center gap-2 rounded-full bg-amber-950 px-6 py-3 text-sm font-semibold text-amber-50 transition-all hover:scale-105 hover:bg-amber-800 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-amber-400 dark:text-stone-900 dark:hover:bg-amber-300"
        >
          {status === "success" ? (
            <><FiCheck size={15} /> {t("contact.sent")}</>
          ) : status === "sending" ? (
            t("contact.sending")
          ) : (
            <><FiSend size={15} /> {t("contact.send")}</>
          )}
        </button>
        {status === "error" && (
          <p className="text-sm text-red-500 dark:text-red-400">{t("contact.error")}</p>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
