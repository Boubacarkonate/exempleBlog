import { useState } from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiX } from "react-icons/fi";
import { blogPosts, type BlogPost } from "../data/blogPosts";
import PageTransition from "../components/PageTransition";
import SEO from "../components/SEO";

const allTags = [...new Set(blogPosts.flatMap((p) => p.tags))];

const BlogCard = ({ post }: { post: BlogPost }) => (
  <article className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-stone-800">
    <Link to={`/blog/${post.slug}`}>
      <div className="h-56 overflow-hidden">
        <img
          src={post.coverImage}
          alt={post.title}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    </Link>
    <div className="p-6">
      <div className="mb-3 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800 dark:bg-stone-700 dark:text-amber-200"
          >
            {tag}
          </span>
        ))}
      </div>
      <Link to={`/blog/${post.slug}`}>
        <h2 className="mb-2 text-xl font-bold text-amber-950 transition-colors group-hover:text-amber-700 dark:text-amber-100 dark:group-hover:text-amber-300">
          {post.title}
        </h2>
      </Link>
      <p className="mb-5 text-sm leading-relaxed text-amber-800/70 dark:text-amber-300/70">
        {post.excerpt}
      </p>
      <div className="flex items-center justify-between">
        <span className="text-xs text-amber-500 dark:text-amber-400">
          {post.date} · {post.readTime} min de lecture
        </span>
        <Link
          to={`/blog/${post.slug}`}
          className="rounded-full bg-amber-950 px-4 py-2 text-xs font-semibold text-amber-50 transition-colors hover:bg-amber-700 dark:bg-amber-400 dark:text-stone-900 dark:hover:bg-amber-300"
        >
          Lire l'article
        </Link>
      </div>
    </div>
  </article>
);

const BlogPage = () => {
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = blogPosts.filter((p) => {
    const q = search.toLowerCase();
    const matchesSearch =
      !q ||
      p.title.toLowerCase().includes(q) ||
      p.excerpt.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q));
    const matchesTag = !activeTag || p.tags.includes(activeTag);
    return matchesSearch && matchesTag;
  });

  const clearFilters = () => {
    setSearch("");
    setActiveTag(null);
  };

  const hasActiveFilters = search !== "" || activeTag !== null;

  return (
    <PageTransition>
      <main className="min-h-screen pb-0">
        <SEO
          title="Carnet de voyage"
          description="Tous les articles du Travel Blog — récits de Santorin, Tokyo, les fjords de Norvège, Marrakech et bien d'autres destinations à découvrir."
          url="/blog"
        />

        {/* Hero */}
        <div className="bg-amber-950 pb-16 pt-28 text-center text-amber-50 dark:bg-stone-800">
          <p className="mb-2 text-sm uppercase tracking-widest text-amber-400">
            The Travel Blog
          </p>
          <h1 className="text-4xl font-bold md:text-5xl">Carnet de voyage</h1>
          <p className="mt-4 text-amber-200 dark:text-amber-300">
            Récits, découvertes et inspirations du monde entier
          </p>
        </div>

        <div className="mx-auto max-w-5xl px-6 py-12">
          {/* Recherche */}
          <div className="relative mb-6">
            <FiSearch
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-amber-400"
            />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Rechercher un article, une destination…"
              className="w-full rounded-full border border-amber-200 bg-white py-3 pl-10 pr-10 text-sm text-amber-950 placeholder-amber-300 outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-200 dark:border-stone-600 dark:bg-stone-800 dark:text-amber-100 dark:placeholder-stone-500 dark:focus:border-amber-500 dark:focus:ring-stone-700"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-amber-400 hover:text-amber-700 dark:hover:text-amber-200"
                aria-label="Effacer la recherche"
              >
                <FiX size={16} />
              </button>
            )}
          </div>

          {/* Filtres par tag */}
          <div className="mb-10 flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTag(null)}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wide transition-all hover:scale-105 ${
                activeTag === null
                  ? "bg-amber-950 text-amber-50 dark:bg-amber-400 dark:text-stone-900"
                  : "bg-amber-100 text-amber-800 hover:bg-amber-200 dark:bg-stone-700 dark:text-amber-200 dark:hover:bg-stone-600"
              }`}
            >
              Tous
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wide transition-all hover:scale-105 ${
                  activeTag === tag
                    ? "bg-amber-950 text-amber-50 dark:bg-amber-400 dark:text-stone-900"
                    : "bg-amber-100 text-amber-800 hover:bg-amber-200 dark:bg-stone-700 dark:text-amber-200 dark:hover:bg-stone-600"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Résultats */}
          {filtered.length > 0 ? (
            <div className="grid gap-8 sm:grid-cols-2">
              {filtered.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <p className="text-lg font-semibold text-amber-950 dark:text-amber-100">
                Aucun article trouvé
              </p>
              <p className="mt-2 text-sm text-amber-600 dark:text-amber-400">
                Essayez une autre recherche ou{" "}
                <button
                  onClick={clearFilters}
                  className="text-teal-600 underline hover:text-teal-800 dark:text-teal-400 dark:hover:text-teal-200"
                >
                  effacez les filtres
                </button>
                .
              </p>
            </div>
          )}

          {/* Compteur résultats */}
          {hasActiveFilters && filtered.length > 0 && (
            <p className="mt-8 text-center text-xs text-amber-500 dark:text-amber-400">
              {filtered.length} article{filtered.length > 1 ? "s" : ""} —{" "}
              <button
                onClick={clearFilters}
                className="underline hover:text-amber-950 dark:hover:text-amber-100"
              >
                effacer les filtres
              </button>
            </p>
          )}
        </div>
      </main>
    </PageTransition>
  );
};

export default BlogPage;
