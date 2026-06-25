import { Link } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";

const BlogPreview = () => {
  const latest = blogPosts.slice(0, 2);

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {latest.map((post) => (
        <Link
          key={post.id}
          to={`/blog/${post.slug}`}
          className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-stone-800"
        >
          <div className="h-48 overflow-hidden">
            <img
              src={post.coverImage}
              alt={post.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="p-5">
            <div className="mb-2 flex flex-wrap gap-2">
              {post.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-800 dark:bg-stone-700 dark:text-amber-200"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="mb-1 font-bold text-amber-950 transition-colors group-hover:text-amber-700 dark:text-amber-100 dark:group-hover:text-amber-300">
              {post.title}
            </h3>
            <p className="mt-1 line-clamp-2 text-sm text-amber-700/70 dark:text-amber-300/70">
              {post.excerpt}
            </p>
            <p className="mt-3 text-xs text-amber-500 dark:text-amber-400">
              {post.date} · {post.readTime} min de lecture
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogPreview;
