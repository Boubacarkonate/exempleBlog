import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight, FiX, FiZoomIn } from "react-icons/fi";

type Category = "Tous" | "Plages" | "Villes" | "Nature" | "Culture";

interface GalleryImage {
  src: string;
  alt: string;
  category: Exclude<Category, "Tous">;
}

const images: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1698701730887-edce157aa73d?w=800&auto=format&fit=crop&q=70",
    alt: "Coucher de soleil sur la plage",
    category: "Plages",
  },
  {
    src: "https://images.unsplash.com/photo-1632255395307-6bae65766391?w=800&auto=format&fit=crop&q=70",
    alt: "Architecture urbaine",
    category: "Villes",
  },
  {
    src: "https://images.unsplash.com/photo-1724371304347-c6d6633e09c8?w=800&auto=format&fit=crop&q=70",
    alt: "Paysage naturel sauvage",
    category: "Nature",
  },
  {
    src: "https://images.unsplash.com/photo-1657739797829-94821bca107f?w=800&auto=format&fit=crop&q=70",
    alt: "Rue animée de la ville",
    category: "Villes",
  },
  {
    src: "https://images.unsplash.com/photo-1547672456-77fb521d4ba2?q=80&w=800&auto=format&fit=crop",
    alt: "Montagne enneigée",
    category: "Nature",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1664303291529-8867054222f6?w=800&auto=format&fit=crop&q=70",
    alt: "Site culturel historique",
    category: "Culture",
  },
  {
    src: "https://images.unsplash.com/photo-1657739834200-603c86eb4001?w=800&auto=format&fit=crop&q=70",
    alt: "Marché local coloré",
    category: "Culture",
  },
  {
    src: "https://images.unsplash.com/photo-1563921742125-de69749122fb?w=800&auto=format&fit=crop&q=70",
    alt: "Côte méditerranéenne",
    category: "Plages",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1680195157217-6aafaae9c850?w=800&auto=format&fit=crop&q=70",
    alt: "Forêt tropicale luxuriante",
    category: "Nature",
  },
  {
    src: "https://images.unsplash.com/photo-1604430466284-e3a33823187e?w=800&auto=format&fit=crop&q=70",
    alt: "Plage tropicale turquoise",
    category: "Plages",
  },
];

const CATEGORIES: Category[] = ["Tous", "Plages", "Villes", "Nature", "Culture"];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState<Category>("Tous");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filtered =
    activeFilter === "Tous"
      ? images
      : images.filter((img) => img.category === activeFilter);

  const closeModal = () => setSelectedIndex(null);

  // Navigation clavier
  useEffect(() => {
    if (selectedIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowLeft")
        setSelectedIndex((i) => (i !== null ? Math.max(0, i - 1) : null));
      if (e.key === "ArrowRight")
        setSelectedIndex((i) =>
          i !== null ? Math.min(filtered.length - 1, i + 1) : null,
        );
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex, filtered.length]);

  return (
    <div>
      {/* Boutons de filtre */}
      <div className="mb-8 flex flex-wrap justify-center gap-3">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`rounded-full px-5 py-2 text-sm font-semibold uppercase tracking-wide transition-all duration-200 hover:scale-105 ${
              activeFilter === cat
                ? "bg-amber-950 text-amber-50 shadow-md dark:bg-amber-400 dark:text-stone-900"
                : "bg-amber-100 text-amber-800 hover:bg-amber-200 dark:bg-stone-700 dark:text-amber-200 dark:hover:bg-stone-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grille */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((img, idx) => (
          <button
            key={img.src}
            onClick={() => setSelectedIndex(idx)}
            className="group relative aspect-video cursor-zoom-in overflow-hidden rounded-xl shadow-sm transition-shadow duration-300 hover:shadow-lg"
            aria-label={`Agrandir : ${img.alt}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-amber-950/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            {/* Infos bas */}
            <div className="absolute bottom-0 left-0 right-0 translate-y-2 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <span className="rounded-full bg-amber-400/40 px-2.5 py-0.5 text-xs font-semibold text-amber-50 backdrop-blur-sm">
                {img.category}
              </span>
              <p className="mt-1 text-sm font-semibold text-amber-50 drop-shadow">
                {img.alt}
              </p>
            </div>

            {/* Icône zoom */}
            <div className="absolute right-3 top-3 rounded-full bg-black/30 p-1.5 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
              <FiZoomIn size={16} />
            </div>
          </button>
        ))}
      </div>

      {/* État vide */}
      {filtered.length === 0 && (
        <p className="py-16 text-center text-amber-600 dark:text-amber-400">
          Aucune photo dans cette catégorie.
        </p>
      )}

      {/* Modal lightbox */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 backdrop-blur-sm">
          {/* Clic backdrop */}
          <button
            className="absolute inset-0 cursor-default"
            onClick={closeModal}
            aria-label="Fermer"
          />

          {/* Image + légende */}
          <div className="relative z-10 flex flex-col items-center px-16">
            <img
              src={filtered[selectedIndex].src}
              alt={filtered[selectedIndex].alt}
              className="max-h-[80vh] max-w-[80vw] rounded-lg object-contain shadow-2xl"
            />
            <div className="mt-4 flex items-center gap-4 text-white/70">
              <span className="rounded-full bg-amber-400/30 px-3 py-0.5 text-xs font-semibold text-amber-300">
                {filtered[selectedIndex].category}
              </span>
              <span className="text-sm">{filtered[selectedIndex].alt}</span>
              <span className="text-xs text-white/40">
                {selectedIndex + 1} / {filtered.length}
              </span>
            </div>
          </div>

          {/* Fermer */}
          <button
            onClick={closeModal}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/25"
            aria-label="Fermer"
          >
            <FiX size={22} />
          </button>

          {/* Précédent */}
          {selectedIndex > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex((i) => (i !== null ? i - 1 : null));
              }}
              className="absolute left-4 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/25"
              aria-label="Image précédente"
            >
              <FiChevronLeft size={26} />
            </button>
          )}

          {/* Suivant */}
          {selectedIndex < filtered.length - 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex((i) => (i !== null ? i + 1 : null));
              }}
              className="absolute right-4 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/25"
              aria-label="Image suivante"
            >
              <FiChevronRight size={26} />
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Gallery;
