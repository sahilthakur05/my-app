// lib/posts.js — our fake database

export const posts = [
  {
    id: 1,
    slug: "day-1-what-i-discovered",
    title: "Day 1 of Learning Next.js — What I Discovered",
    date: "April 8, 2026",
    readTime: "3 min read",
    tag: "Beginner",
    description:
      "I just started learning Next.js from zero. Here is what surprised me most on day one.",
    content: [
      "Three days ago I had zero knowledge of Next.js. I did not know what the App Router was, what Server Components were, or why anyone would use Next.js instead of plain React.",
      "On Day 1, I ran npx create-next-app@latest and had a working app in minutes. The hot reload blew my mind — every time I save a file, the browser updates instantly. No manual refresh needed.",
      "The biggest surprise was routing. In Next.js you do not configure routes at all. You just make a folder called about and put a page.js inside it. That folder name becomes the URL. Done. No React Router, no configuration, just folders.",
      "Day 1 lesson: Next.js removes huge amounts of complexity that existed in plain React apps. The folder-based routing alone saves hours of work on every project.",
    ],
  },
  {
    id: 2,
    slug: "pages-and-routing-explained",
    title: "Pages & File-based Routing Finally Makes Sense",
    date: "April 9, 2026",
    readTime: "4 min read",
    tag: "Routing",
    description:
      "Day 2 taught me the routing system. No React Router needed — ever. Here is how it works.",
    content: [
      "Before Next.js, routing in React meant installing React Router, configuring it, writing route definitions, and maintaining them. Extra work that had nothing to do with actually building your app.",
      "Next.js removes all of that. The file system IS the router. Want a page at /about? Make a folder called about. Put a page.js inside. Visit /about in the browser. Done.",
      "The layout.js file was the other big discovery. It wraps every page automatically. Your navbar and footer go in layout.js once and appear everywhere. Change the navbar in one file and every single page updates.",
      "Day 2 lesson: File-based routing is one of those ideas that seems obvious in hindsight but completely changes how you think about building web apps.",
    ],
  },
  {
    id: 3,
    slug: "components-and-jsx-crash-course",
    title: "Components & JSX — Everything a Beginner Needs to Know",
    date: "April 10, 2026",
    readTime: "5 min read",
    tag: "Components",
    description:
      "Day 3 was all about components. I built 4 of them and used them across every page.",
    content: [
      "A component is just a function that returns JSX. That sentence sounds simple but it took me seeing it in action to really get it.",
      "I built a Card component. It takes a title and description as props. I used it three times on the home page with different content. Three cards, one component. Change the Card component once and all three update instantly.",
      "JSX confused me at first because it looks like HTML but has different rules. className instead of class. Style as an object not a string. Curly braces for any JavaScript value. Once I learned those four rules, JSX felt natural.",
      "Day 3 lesson: Think in components. Every UI element that repeats or might repeat should be a component. Future you will be grateful.",
    ],
  },
  {
    id: 4,
    slug: "server-vs-client-components",
    title: "Server vs Client Components Finally Make Sense",
    date: "April 11, 2026",
    readTime: "6 min read",
    tag: "Deep Dive",
    description:
      "This concept confused me for a whole day. Then it clicked completely. Here is the simple explanation.",
    content: [
      "This was the hardest concept of Week 1. Server Components and Client Components — why does this split even exist?",
      "Then I understood the reason and everything clicked. In plain React, every component runs in the browser. The user's phone downloads all your JavaScript, runs it, then shows the page. On slow mobile internet this takes seconds.",
      "Next.js had a brilliant idea. Components that do not need interactivity can run on the server instead. The server builds the HTML and sends it ready-made. The browser just displays it. No JavaScript needed for that part.",
      'The golden rule: start every component as a Server Component. Only add "use client" when you actually need onClick, useState, or browser APIs. Keep your JavaScript bundle small and your pages fast.',
    ],
  },
  {
    id: 5,
    slug: "navigation-and-link-component",
    title: "Why the Link Component Changes Everything",
    date: "April 12, 2026",
    readTime: "4 min read",
    tag: "Navigation",
    description:
      "Replacing anchor tags with Link felt like a small change. The result was not small at all.",
    content: [
      "With regular anchor tags, clicking a link triggers a full page reload. The browser requests the entire page from the server. You see a white flash. All JavaScript re-downloads. Everything starts over.",
      "With Next.js Link, none of that happens. Next.js swaps only the content that changed. The Navbar stays mounted. No white flash. No re-download. The navigation is instant.",
      "Link also prefetches. When Next.js sees a Link on screen, it starts downloading that destination page in the background immediately — before you even click. By the time you click, the page is already there.",
      "Day 5 lesson: Use Link everywhere instead of anchor tags. The performance difference is real and users feel it even if they cannot explain why.",
    ],
  },
];

// Helper — find one post by its slug
export function getPostBySlug(slug) {
  return posts.find((post) => post.slug === slug) || null;
}
