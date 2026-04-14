import Link from "next/link";
import { getPostBySlug, posts } from "../../../lib/posts";
// ── generateStaticParams ─────────────────────────────────────
// Tells Next.js: pre-build a page for each of these slugs
// This runs at BUILD TIME, not when user visits
export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}
// ── generateMetadata ─────────────────────────────────────────
// Gives each post its own browser tab title and SEO description

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  console.log(post);

  if (!post) {
    return { title: "Post Not Found — Sahil Thakur" };
  }
  return {
    title: `${post.title} — Sahil Thakur`,
    description: post.description,
  };
}

// ── Main Page Component ───────────────────────────────────────

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  // ── Post not found ────────────────────────────────────────
  if (!post) {
    return (
      <div className="max-w-2xl mx-auto text-center py-24">
        <p className="text-6xl mb-6">🔍</p>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Post not found
        </h1>
        <p className="text-gray-500 mb-8">
          The post{" "}
          <span className="font-mono bg-gray-100 px-2 py-1 rounded text-sm">
            "{slug}"
          </span>{" "}
          does not exist.
        </p>
        <Link
          href="/blog"
          className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors"
        >
          ← Back to all posts
        </Link>
      </div>
    );
  }
  // ── Post found — render it ────────────────────────────────

  return (
    <article className="max-w-2xl mx-auto">
      {/* Back link */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors mb-10 group"
      >
        <span className="group-hover:-translate-x-1 transition-transform inline-block">
          ←
        </span>
        Back to all posts
      </Link>

      {/* Header */}
      <header className="mb-10">
        {/* Tag + date */}
        <div className="flex items-center gap-3 mb-5">
          <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
            {post.tag}
          </span>
          <span className="text-gray-400 text-sm">
            {post.date} · {post.readTime}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-5">
          {post.title}
        </h1>

        {/* Description / pull quote */}
        <p className="text-lg text-gray-500 leading-relaxed pl-4 border-l-4 border-blue-500">
          {post.description}
        </p>

        {/* Author */}
        <div className="flex items-center gap-3 mt-8 pt-6 border-t border-gray-100">
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
            ST
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900">Sahil Thakur</p>
            <p className="text-xs text-gray-400">
              Learning Next.js in public · Week 2
            </p>
          </div>
        </div>
      </header>

      {/* Content — each item in the array is one paragraph */}
      <div className="space-y-5">
        {post.content.map((paragraph, index) => (
          <p key={index} className="text-gray-700 leading-relaxed text-[17px]">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Footer nav */}
      <div className="mt-16 pt-8 border-t border-gray-100 flex items-center justify-between flex-wrap gap-4">
        <Link
          href="/blog"
          className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
        >
          ← All posts
        </Link>
        <Link
          href="/contact"
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          Got a question? Contact me →
        </Link>
      </div>
    </article>
  );
}
