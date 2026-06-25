const NextDestination = () => (
  <section className="relative overflow-hidden rounded-2xl shadow-lg">
    <img
      src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200&auto=format&fit=crop&q=70"
      alt="Prochaine destination mystère"
      className="h-72 w-full scale-105 object-cover blur-sm brightness-50"
    />
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-amber-400">
        Prochaine destination
      </p>
      <h2 className="text-5xl font-bold text-white md:text-7xl">???</h2>
      <p className="mt-4 text-sm text-amber-200/80">
        Une nouvelle aventure se prépare…
      </p>
      <span className="mt-6 rounded-full border border-amber-400/40 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-amber-300">
        Bientôt
      </span>
    </div>
  </section>
);

export default NextDestination;
