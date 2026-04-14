import Link from "next/link";
import { posts } from "../../lib/posts";

export default function BlogPage() {
  return (
    <div className="max-w-2xl mx-auto">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">My Blog</h1>
        <p className="text-lg text-gray-500 leading-relaxed">
          Writing about learning Next.js from absolute zero. Honest, daily,
          practical.
        </p>
      </div>

      {/* Post cards */}
      <div className="flex flex-col gap-4">
        {posts.map((post, index) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="group block bg-white border border-gray-100 rounded-xl p-6 hover:border-blue-200 hover:shadow-md transition-all"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                {/* Tag + date */}
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    {post.tag}
                  </span>
                  <span className="text-xs text-gray-400">
                    {post.date} · {post.readTime}
                  </span>
                </div>

                {/* Title — turns blue on hover */}
                <h2 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors leading-snug">
                  {post.title}
                </h2>

                {/* Description */}
                <p className="text-sm text-gray-500 leading-relaxed">
                  {post.description}
                </p>
              </div>

              {/* Post number badge */}
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-sm font-bold text-gray-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                {String(index + 1).padStart(2, "0")}
              </div>
            </div>

            {/* Read more — fades in on hover */}
            <p className="mt-4 text-sm font-medium text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
              Read post →
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
