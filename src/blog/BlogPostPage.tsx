import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { type ContentBlock } from "../data/blogPosts";
import { useBlogPosts } from "../hooks/useBlogPosts";
import PageTransition from "../components/PageTransition";
import SEO from "../components/SEO";
import ShareButtons from "../components/ShareButtons";
import ReadingProgress from "./ReadingProgress";

const slugify = (text: string) =>
  text.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const renderBlock = (block: ContentBlock, index: number) => {
  switch (block.type) {
    case "heading":
      return (
        <h2 key={index} id={slugify(block.text)} className="mb-3 mt-10 scroll-mt-28 text-2xl font-bold text-amber-950 dark:text-amber-100">
          {block.text}
        </h2>
      );
    case "quote":
      return (
        <blockquote key={index} className="my-8 border-l-4 border-amber-400 bg-amber-100/50 py-4 pl-6 pr-4 italic dark:border-amber-500 dark:bg-stone-700/40">
          <p className="text-lg text-amber-900 dark:text-amber-200">"{block.text}"</p>
          {block.author && (
            <cite className="mt-2 block text-sm not-italic text-amber-600 dark:text-amber-400">— {block.author}</cite>
          )}
        </blockquote>
      );
    default:
      return (
        <p key={index} className="mb-5 leading-relaxed text-amber-900/80 dark:text-amber-200/80">
          {block.text}
        </p>
      );
  }
};

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useTranslation();
  const posts = useBlogPosts();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 pt-24 text-amber-950 dark:text-amber-100">
        <h1 className="text-2xl font-bold">{t("post.not_found")}</h1>
        <Link to="/blog" className="text-teal-600 hover:underline dark:text-teal-400">
          ← {t("post.back")}
        </Link>
      </div>
    );
  }

  const headings = post.content.filter((b: ContentBlock) => b.type === "heading");
  const otherPosts = posts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <PageTransition>
      <article className="min-h-screen pb-0">
        <SEO title={post.title} description={post.excerpt} image={post.coverImage} type="article" url={`/blog/${post.slug}`} />
        <ReadingProgress />

        <div className="relative h-80 overflow-hidden md:h-[30rem]">
          <img src={post.coverImage} alt={post.title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-amber-950/85 via-amber-950/30 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 text-amber-50 md:p-14">
            <div className="mb-3 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-amber-400/30 px-3 py-1 text-xs font-semibold backdrop-blur-sm">{tag}</span>
              ))}
            </div>
            <h1 className="max-w-2xl text-3xl font-bold leading-tight md:text-5xl">{post.title}</h1>
            <p className="mt-3 text-amber-300">{post.date} · {post.readTime} {t("blog.min_read")}</p>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="flex gap-12">
            <div className="min-w-0 flex-1">
              <Link to="/blog" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-teal-600 transition-colors hover:text-teal-800 dark:text-teal-400 dark:hover:text-teal-200">
                <FiArrowLeft /> {t("post.back")}
              </Link>

              <div className="mt-6 text-base">
                {post.content.map((block: ContentBlock, i: number) => renderBlock(block, i))}
              </div>

              <ShareButtons title={post.title} slug={post.slug} />

              {otherPosts.length > 0 && (
                <div className="mt-16 border-t border-amber-200 pt-10 dark:border-stone-700">
                  <h3 className="mb-6 text-lg font-bold uppercase tracking-wide text-amber-950 dark:text-amber-100">
                    {t("post.more")}
                  </h3>
                  <div className="grid gap-5 sm:grid-cols-2">
                    {otherPosts.map((p) => (
                      <Link key={p.id} to={`/blog/${p.slug}`} className="group overflow-hidden rounded-xl shadow transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                        <div className="h-36 overflow-hidden">
                          <img src={p.coverImage} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                        </div>
                        <div className="bg-white p-4 dark:bg-stone-800">
                          <p className="text-sm font-semibold text-amber-950 transition-colors group-hover:text-amber-700 dark:text-amber-100 dark:group-hover:text-amber-300">{p.title}</p>
                          <p className="mt-1 text-xs text-amber-500 dark:text-amber-400">{p.date}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {headings.length > 0 && (
              <aside className="hidden w-52 shrink-0 lg:block">
                <div className="sticky top-28 rounded-xl border border-amber-200 bg-amber-50/60 p-5 dark:border-stone-700 dark:bg-stone-800/60">
                  <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400">
                    {t("post.toc")}
                  </h4>
                  <nav className="space-y-2">
                    {headings.map((h) => (
                      <a key={h.text} href={`#${slugify(h.text)}`} className="block text-sm leading-snug text-teal-700 transition-colors hover:text-teal-900 dark:text-teal-400 dark:hover:text-teal-200">
                        {h.text}
                      </a>
                    ))}
                  </nav>
                </div>
              </aside>
            )}
          </div>
        </div>
      </article>
    </PageTransition>
  );
};

export default BlogPostPage;
