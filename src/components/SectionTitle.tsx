interface SectionTitleProps {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionTitle = ({
  label,
  title,
  subtitle,
  centered = false,
}: SectionTitleProps) => (
  <div className={`mb-10 ${centered ? "text-center" : ""}`}>
    {label && (
      <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-amber-500 dark:text-amber-400">
        {label}
      </p>
    )}
    <h2 className="text-3xl font-bold text-amber-950 dark:text-amber-100 md:text-4xl">
      {title}
    </h2>
    {subtitle && (
      <p
        className={`mt-3 text-amber-700 dark:text-amber-300 md:text-lg ${centered ? "mx-auto max-w-2xl" : "max-w-2xl"}`}
      >
        {subtitle}
      </p>
    )}
  </div>
);

export default SectionTitle;
