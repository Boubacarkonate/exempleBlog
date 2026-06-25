import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FiGrid, FiList, FiSearch, FiX } from "react-icons/fi";
import { blogPosts, type FlatBlogPost } from "../data/blogPosts";
import { useBlogPosts } from "../hooks/useBlogPosts";
import PageTransition from "../components/PageTransition";
import SEO from "../components/SEO";
import Skeleton from "../components/Skeleton";

const allTags = [...new Set(blogPosts.flatMap((p) => p.tags))];

const BlogCard = ({ post }: { post: FlatBlogPost }) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const { t } = useTranslation();

  return (
    <article className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-stone-800">
      <Link to={`/blog/${post.slug}`}>
        <div className="relative h-56 overflow-hidden">
          {!imgLoaded && <Skeleton className="absolute inset-0 rounded-none" />}
          <img src={post.coverImage} alt={post.title} loading="lazy" decoding="async"
            onLoad={() => setImgLoaded(true)}
            className={`h-full w-full object-cover transition-all duration-500 group-hover:scale-105 ${imgLoaded ? "opacity-100" : "opacity-0"}`} />
        </div>
      </Link>
      <div className="p-6">
        <div className="mb-3 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800 dark:bg-stone-700 dark:text-amber-200">{tag}</span>
          ))}
        </div>
        <Link to={`/blog/${post.slug}`}>
          <h2 className="mb-2 text-xl font-bold text-amber-950 transition-colors group-hover:text-amber-700 dark:text-amber-100 dark:group-hover:text-amber-300">{post.title}</h2>
        </Link>
        <p className="mb-5 text-sm leading-relaxed text-amber-800/70 dark:text-amber-300/70">{post.excerpt}</p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-amber-500 dark:text-amber-400">{post.date} · {post.readTime} {t("blog.min_read")}</span>
          <Link to={`/blog/${post.slug}`} className="rounded-full bg-amber-950 px-4 py-2 text-xs font-semibold text-amber-50 transition-colors hover:bg-amber-700 dark:bg-amber-400 dark:text-stone-900 dark:hover:bg-amber-300">
            {t("blog.read")}
          </Link>
        </div>
      </div>
    </article>
  );
};

const BlogListCard = ({ post }: { post: FlatBlogPost }) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const { t } = useTranslation();

  return (
    <article className="group flex overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:shadow-md dark:bg-stone-800">
      <Link to={`/blog/${post.slug}`} className="relative w-36 shrink-0 overflow-hidden sm:w-52">
        {!imgLoaded && <Skeleton className="absolute inset-0 rounded-none" />}
        <img src={post.coverImage} alt={post.title} loading="lazy" decoding="async"
          onLoad={() => setImgLoaded(true)}
          className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 ${imgLoaded ? "opacity-100" : "opacity-0"}`} />
      </Link>
      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          <div className="mb-2 flex flex-wrap gap-1.5">
            {post.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-800 dark:bg-stone-700 dark:text-amber-200">{tag}</span>
            ))}
          </div>
          <Link to={`/blog/${post.slug}`}>
            <h2 className="mb-1.5 font-bold text-amber-950 transition-colors group-hover:text-amber-700 dark:text-amber-100 dark:group-hover:text-amber-300">{post.title}</h2>
          </Link>
          <p className="line-clamp-2 text-sm text-amber-800/70 dark:text-amber-300/70">{post.excerpt}</p>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-xs text-amber-500 dark:text-amber-400">{post.date} · {post.readTime} {t("blog.min")}</span>
          <Link to={`/blog/${post.slug}`} className="text-xs font-semibold text-teal-600 transition-colors hover:text-teal-800 dark:text-teal-400 dark:hover:text-teal-200">
            {t("blog.read_short")}
          </Link>
        </div>
      </div>
    </article>
  );
};

const BlogPage = () => {
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const { t } = useTranslation();
  const posts = useBlogPosts();

  const filtered = posts.filter((p) => {
    const q = search.toLowerCase();
    const matchesSearch = !q || p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q) || p.tags.some((tag) => tag.toLowerCase().includes(q));
    const matchesTag = !activeTag || p.tags.includes(activeTag);
    return matchesSearch && matchesTag;
  });

  const clearFilters = () => { setSearch(""); setActiveTag(null); };
  const hasActiveFilters = search !== "" || activeTag !== null;

  const toggleBtnClass = (active: boolean) =>
    `rounded-lg p-2 transition-colors ${active
      ? "bg-amber-950 text-amber-50 dark:bg-amber-400 dark:text-stone-900"
      : "text-amber-600 hover:bg-amber-100 dark:text-amber-400 dark:hover:bg-stone-700"}`;

  return (
    <PageTransition>
      <main className="min-h-screen pb-0">
        <SEO title={t("blog.title")} description={t("blog.subtitle")} url="/blog" />

        <div className="bg-amber-950 pb-16 pt-28 text-center text-amber-50 dark:bg-stone-800">
          <p className="mb-2 text-sm uppercase tracking-widest text-amber-400">{t("blog.label")}</p>
          <h1 className="text-4xl font-bold md:text-5xl">{t("blog.title")}</h1>
          <p className="mt-4 text-amber-200 dark:text-amber-300">{t("blog.subtitle")}</p>
        </div>

        <div className="mx-auto max-w-5xl px-6 py-12">
          <div className="relative mb-6">
            <FiSearch size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-amber-400" />
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}
              placeholder={t("blog.search")}
              className="w-full rounded-full border border-amber-200 bg-white py-3 pl-10 pr-10 text-sm text-amber-950 placeholder-amber-300 outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-200 dark:border-stone-600 dark:bg-stone-800 dark:text-amber-100 dark:placeholder-stone-500 dark:focus:border-amber-500 dark:focus:ring-stone-700" />
            {search && (
              <button onClick={() => setSearch("")} className="absolute right-4 top-1/2 -translate-y-1/2 text-amber-400 hover:text-amber-700 dark:hover:text-amber-200" aria-label="Effacer">
                <FiX size={16} />
              </button>
            )}
          </div>

          <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              <button onClick={() => setActiveTag(null)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wide transition-all hover:scale-105 ${activeTag === null ? "bg-amber-950 text-amber-50 dark:bg-amber-400 dark:text-stone-900" : "bg-amber-100 text-amber-800 hover:bg-amber-200 dark:bg-stone-700 dark:text-amber-200 dark:hover:bg-stone-600"}`}>
                {t("blog.all")}
              </button>
              {allTags.map((tag) => (
                <button key={tag} onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                  className={`rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wide transition-all hover:scale-105 ${activeTag === tag ? "bg-amber-950 text-amber-50 dark:bg-amber-400 dark:text-stone-900" : "bg-amber-100 text-amber-800 hover:bg-amber-200 dark:bg-stone-700 dark:text-amber-200 dark:hover:bg-stone-600"}`}>
                  {tag}
                </button>
              ))}
            </div>
            <div className="flex gap-1 rounded-xl bg-amber-100 p-1 dark:bg-stone-700">
              <button onClick={() => setViewMode("grid")} className={toggleBtnClass(viewMode === "grid")} aria-label={t("blog.grid")}><FiGrid size={15} /></button>
              <button onClick={() => setViewMode("list")} className={toggleBtnClass(viewMode === "list")} aria-label={t("blog.list")}><FiList size={15} /></button>
            </div>
          </div>

          {filtered.length > 0 ? (
            <div className={viewMode === "grid" ? "grid gap-8 sm:grid-cols-2" : "flex flex-col gap-4"}>
              {filtered.map((post) =>
                viewMode === "grid" ? <BlogCard key={post.id} post={post} /> : <BlogListCard key={post.id} post={post} />
              )}
            </div>
          ) : (
            <div className="py-20 text-center">
              <p className="text-lg font-semibold text-amber-950 dark:text-amber-100">{t("blog.no_results")}</p>
              <p className="mt-2 text-sm text-amber-600 dark:text-amber-400">
                {t("blog.no_results_hint")}{" "}
                <button onClick={clearFilters} className="text-teal-600 underline hover:text-teal-800 dark:text-teal-400 dark:hover:text-teal-200">{t("blog.clear")}</button>.
              </p>
            </div>
          )}

          {hasActiveFilters && filtered.length > 0 && (
            <p className="mt-8 text-center text-xs text-amber-500 dark:text-amber-400">
              {filtered.length} {filtered.length > 1 ? t("blog.articles") : t("blog.article")} —{" "}
              <button onClick={clearFilters} className="text-teal-600 underline hover:text-teal-800 dark:text-teal-400 dark:hover:text-teal-200">{t("blog.clear_short")}</button>
            </p>
          )}
        </div>
      </main>
    </PageTransition>
  );
};

export default BlogPage;
