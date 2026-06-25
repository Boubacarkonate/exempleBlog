const Skeleton = ({ className = "" }: { className?: string }) => (
  <div className={`animate-pulse rounded bg-amber-100 dark:bg-stone-700 ${className}`} />
);

export default Skeleton;
