import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { FiCamera, FiFileText, FiGlobe } from "react-icons/fi";

const stats = [
  { icon: FiGlobe, value: 12, label: "Pays explorés" },
  { icon: FiFileText, value: 4, label: "Articles publiés" },
  { icon: FiCamera, value: 42, label: "Photos partagées" },
];

const Counter = ({ target }: { target: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const steps = 60;
    const interval = 1200 / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      setCount(Math.round((step / steps) * target));
      if (step >= steps) clearInterval(timer);
    }, interval);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return <span ref={ref}>{count}</span>;
};

const StatsSection = () => (
  <section className="rounded-2xl bg-amber-950 px-6 py-14 text-amber-50 dark:bg-stone-800">
    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-10 sm:grid-cols-3">
      {stats.map(({ icon: Icon, value, label }) => (
        <div key={label} className="flex flex-col items-center gap-3 text-center">
          <Icon size={30} className="text-amber-400" />
          <p className="text-5xl font-bold tabular-nums">
            <Counter target={value} />
            <span className="text-amber-400">+</span>
          </p>
          <p className="text-xs uppercase tracking-widest text-amber-300">
            {label}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default StatsSection;
