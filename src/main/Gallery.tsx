import { useState } from "react";

type Category = "Tous" | "Plages" | "Villes" | "Nature" | "Culture";

interface GalleryImage {
  src: string;
  alt: string;
  category: Exclude<Category, "Tous">;
  className: string;
}

const images: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1698701730887-edce157aa73d?w=500&auto=format&fit=crop&q=60",
    alt: "Coucher de soleil sur la plage",
    category: "Plages",
    className:
      "skew-y-3 cursor-zoom-in transition duration-500 hover:translate-x-1 hover:rotate-2 hover:scale-110 hover:brightness-110",
  },
  {
    src: "https://images.unsplash.com/photo-1632255395307-6bae65766391?w=1000&auto=format&fit=crop&q=60",
    alt: "Architecture urbaine",
    category: "Villes",
    className:
      "skew-x-3 cursor-zoom-in transition duration-500 hover:translate-y-1 hover:rotate-1 hover:scale-110 hover:contrast-125",
  },
  {
    src: "https://images.unsplash.com/photo-1724371304347-c6d6633e09c8?w=1000&auto=format&fit=crop&q=60",
    alt: "Paysage naturel sauvage",
    category: "Nature",
    className:
      "skew-y-6 cursor-zoom-in transition duration-500 hover:translate-x-2 hover:rotate-3 hover:scale-105 hover:saturate-150",
  },
  {
    src: "https://images.unsplash.com/photo-1657739797829-94821bca107f?w=1000&auto=format&fit=crop&q=60",
    alt: "Rue animée de la ville",
    category: "Villes",
    className:
      "skew-x-6 cursor-zoom-in transition duration-500 hover:translate-y-1 hover:rotate-2 hover:scale-110 hover:hue-rotate-15",
  },
  {
    src: "https://images.unsplash.com/photo-1547672456-77fb521d4ba2?q=80&w=387&auto=format&fit=crop",
    alt: "Montagne enneigée",
    category: "Nature",
    className:
      "skew-y-3 cursor-zoom-in transition duration-500 hover:translate-x-2 hover:rotate-3 hover:scale-110 hover:brightness-125",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1664303291529-8867054222f6?w=1000&auto=format&fit=crop&q=60",
    alt: "Site culturel historique",
    category: "Culture",
    className:
      "-skew-x-2 cursor-zoom-in transition duration-500 hover:translate-y-1 hover:rotate-3 hover:scale-110 hover:saturate-150",
  },
  {
    src: "https://images.unsplash.com/photo-1657739834200-603c86eb4001?w=1000&auto=format&fit=crop&q=60",
    alt: "Marché local coloré",
    category: "Culture",
    className:
      "skew-y-6 cursor-zoom-in transition duration-500 hover:translate-x-3 hover:rotate-3 hover:scale-105 hover:contrast-150",
  },
  {
    src: "https://images.unsplash.com/photo-1563921742125-de69749122fb?w=1000&auto=format&fit=crop&q=60",
    alt: "Côte méditerranéenne",
    category: "Plages",
    className:
      "skew-x-3 cursor-zoom-in transition duration-500 hover:translate-y-2 hover:rotate-2 hover:scale-105 hover:brightness-110",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1680195157217-6aafaae9c850?w=500&auto=format&fit=crop&q=60",
    alt: "Forêt tropicale luxuriante",
    category: "Nature",
    className:
      "skew-y-6 cursor-zoom-in transition duration-500 hover:translate-x-2 hover:rotate-3 hover:scale-105 hover:saturate-150",
  },
  {
    src: "https://images.unsplash.com/photo-1604430466284-e3a33823187e?w=500&auto=format&fit=crop&q=60",
    alt: "Plage tropicale turquoise",
    category: "Plages",
    className:
      "skew-x-2 cursor-zoom-in transition duration-500 hover:translate-y-2 hover:rotate-3 hover:scale-110 hover:hue-rotate-15",
  },
];

const CATEGORIES: Category[] = ["Tous", "Plages", "Villes", "Nature", "Culture"];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [activeFilter, setActiveFilter] = useState<Category>("Tous");

  const openModal = (src: string) => {
    setSelectedImage(src);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const filtered =
    activeFilter === "Tous"
      ? images
      : images.filter((img) => img.category === activeFilter);

  return (
    <div className="p-5 md:p-10">
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

      {/* Galerie masonry */}
      <div className="columns-1 gap-5 sm:columns-2 lg:columns-4 lg:gap-8 [&>div:not(:first-child)]:mt-5 lg:[&>div:not(:first-child)]:mt-8">
        {filtered.map((img) => (
          <div key={img.src}>
            <img
              src={img.src}
              alt={img.alt}
              className={img.className}
              onClick={() => openModal(img.src)}
            />
          </div>
        ))}
      </div>

      {/* Message si aucune image */}
      {filtered.length === 0 && (
        <p className="py-16 text-center text-amber-600 dark:text-amber-400">
          Aucune photo dans cette catégorie.
        </p>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 transition-opacity duration-300"
          onClick={closeModal}
        >
          <div
            className="relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage!}
              alt="Agrandissement"
              className="max-h-screen max-w-full object-contain"
            />
            <button
              className="absolute right-2 top-2 text-3xl font-bold text-white transition-opacity hover:opacity-70"
              onClick={closeModal}
              aria-label="Fermer"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
