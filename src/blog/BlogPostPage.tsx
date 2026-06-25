import { Link, useParams } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { blogPosts, type ContentBlock } from "../data/blogPosts";

const renderBlock = (block: ContentBlock, index: number) => {
  switch (block.type) {
    case "heading":
      return (
        <h2
          key={index}
          className="mb-3 mt-10 text-2xl font-bold text-amber-950"
        >
          {block.text}
        </h2>
      );
    case "quote":
      return (
        <blockquote
          key={index}
          className="my-8 border-l-4 border-amber-400 bg-amber-100/50 py-4 pl-6 pr-4 italic"
        >
          <p className="text-lg text-amber-900">"{block.text}"</p>
          {block.author && (
            <cite className="mt-2 block text-sm not-italic text-amber-600">
              — {block.author}
            </cite>
          )}
        </blockquote>
      );
    default:
      return (
        <p key={index} className="mb-5 leading-relaxed text-amber-900/80">
          {block.text}
        </p>
      );
  }
};

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 pt-24 text-amber-950">
        <h1 className="text-2xl font-bold">Article introuvable</h1>
        <Link to="/blog" className="text-amber-600 hover:underline">
          ← Retour au blog
        </Link>
      </div>
    );
  }

  const otherPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <article className="min-h-screen pb-0">
      {/* Cover */}
      <div className="relative h-80 overflow-hidden md:h-[30rem]">
        <img
          src={post.coverImage}
          alt={post.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-amber-950/85 via-amber-950/30 to-transparent" />
        <div className="absolute bottom-0 left-0 p-8 text-amber-50 md:p-14">
          <div className="mb-3 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-amber-400/30 px-3 py-1 text-xs font-semibold backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="max-w-2xl text-3xl font-bold leading-tight md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-3 text-amber-300">
            {post.date} · {post.readTime} min de lecture
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="mx-auto max-w-3xl px-6 py-12">
        <Link
          to="/blog"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-amber-600 transition-colors hover:text-amber-950"
        >
          <FiArrowLeft />
          Retour au blog
        </Link>

        <div className="mt-6 text-base">
          {post.content.map((block, i) => renderBlock(block, i))}
        </div>

        {/* Other articles */}
        {otherPosts.length > 0 && (
          <div className="mt-16 border-t border-amber-200 pt-10">
            <h3 className="mb-6 text-lg font-bold uppercase tracking-wide text-amber-950">
              Autres articles
            </h3>
            <div className="grid gap-5 sm:grid-cols-2">
              {otherPosts.map((p) => (
                <Link
                  key={p.id}
                  to={`/blog/${p.slug}`}
                  className="group overflow-hidden rounded-xl shadow transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="h-36 overflow-hidden">
                    <img
                      src={p.coverImage}
                      alt={p.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="bg-white p-4">
                    <p className="text-sm font-semibold text-amber-950 transition-colors group-hover:text-amber-700">
                      {p.title}
                    </p>
                    <p className="mt-1 text-xs text-amber-500">{p.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
};

export default BlogPostPage;
