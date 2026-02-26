import { notFound } from "next/navigation";
import { getPostBySlug, getRelatedPosts, posts } from "../data/Posts";
import BlogDetailClient from "./BlogDetailClient";

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} — Insights`,
    description: post.excerpt,
    openGraph: { images: [post.image] },
  };
}

export default function BlogDetailPage({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();
  const related = getRelatedPosts(post.related);
  return <BlogDetailClient post={post} related={related} />;
}