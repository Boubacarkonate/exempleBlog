import { useTranslation } from "react-i18next";
import { blogPosts, type FlatBlogPost } from "../data/blogPosts";

export const useBlogPosts = (): FlatBlogPost[] => {
  const { i18n } = useTranslation();
  const lang = i18n.language === "en" ? "en" : "fr";

  return blogPosts.map((post) => ({
    id: post.id,
    slug: post.slug,
    coverImage: post.coverImage,
    date: post.date,
    readTime: post.readTime,
    tags: post.tags,
    title: post[lang].title,
    excerpt: post[lang].excerpt,
    content: post[lang].content,
  }));
};
