import { Link } from "react-router-dom";
import { blogPosts, type BlogPost } from "../data/blogPosts";
import PageTransition from "../components/PageTransition";

const BlogCard = ({ post }: { post: BlogPost }) => (
  <article className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-stone-800">
    <Link to={`/blog/${post.slug}`}>
      <div className="h-56 overflow-hidden">
        <img
          src={post.coverImage}
          alt={post.title}
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

const BlogPage = () => (
  <PageTransition>
  <main className="min-h-screen pb-0">
    <div className="bg-amber-950 pb-16 pt-28 text-center text-amber-50 dark:bg-stone-800">
      <p className="mb-2 text-sm uppercase tracking-widest text-amber-400">
        The Travel Blog
      </p>
      <h1 className="text-4xl font-bold md:text-5xl">Carnet de voyage</h1>
      <p className="mt-4 text-amber-200 dark:text-amber-300">
        Récits, découvertes et inspirations du monde entier
      </p>
    </div>

    <div className="mx-auto max-w-5xl px-6 py-16">
      <div className="grid gap-8 sm:grid-cols-2">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  </main>
  </PageTransition>
);

export default BlogPage;
