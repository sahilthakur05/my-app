import LikeButton from "../components/LikeButton"
const ArticlePage = () => {
  const article = {
    title: "How I Started Learning Next.js From Zero",
    author: "Sahil Thakur",
    date: "April 9, 2026",
    readTime: "4 min read",
    content: [
      "Three days ago I had zero knowledge of Next.js. I did not know what the App Router was, what Server Components were, or why anyone would use Next.js instead of plain React.",
      "On Day 1, I set up my first Next.js project and wrote my very first page. It was just a heading with my name and the date — but seeing it appear in the browser at localhost:3000 after I typed only a few lines of code felt incredible.",
      "Day 2 taught me something that genuinely surprised me. In Next.js, you do not need to configure routing at all. You just make a folder and put a page.js file inside it. The folder name becomes the URL. That is it. No React Router, no configuration, just folders.",
      "Day 3 was about components — small, reusable pieces of UI. I built a Card component, a Button component, a Navbar, and a SkillBadge. I used them across multiple pages. When I changed the Card component once, all three project cards on my home page updated at the same time. I finally understood why everyone talks about component-based development.",
      "Today, Day 4, I learned the most mind-bending concept yet: Server Components and Client Components. The idea that components can run on the server — before they even reach the browser — is something I had never thought about before. But once I understood WHY it exists (performance, security, less JavaScript sent to the browser), it made complete sense.",
      "I still have a long way to go. But I am proving to myself that with consistent daily practice, even someone with zero background can make real progress. If you are reading this and thinking about starting — just start. Day 1 is easier than you think.",
    ],
  };

  return (
    <article style={{ maxWidth: "680px", margin: "0 auto" }}>
      {/* Article Header — Server Component renders this */}
      <div style={{ marginBottom: "32px" }}>
        <div style={{ display: "flex", gap: "12px", marginBottom: "16px" }}>
          <span
            style={{
              backgroundColor: "#e8f0fe",
              color: "#1a56db",
              padding: "4px 12px",
              borderRadius: "20px",
              fontSize: "13px",
              fontWeight: "500",
            }}
          >
            Next.js
          </span>
          <span
            style={{
              backgroundColor: "#e8f0fe",
              color: "#1a56db",
              padding: "4px 12px",
              borderRadius: "20px",
              fontSize: "13px",
              fontWeight: "500",
            }}
          >
            Learning Journey
          </span>
        </div>

        <h1
          style={{
            fontSize: "36px",
            fontWeight: "bold",
            lineHeight: "1.2",
            color: "#111",
            margin: "0 0 16px",
          }}
        >
          {article.title}
        </h1>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            color: "#777",
            fontSize: "14px",
            paddingBottom: "24px",
            borderBottom: "1px solid #eee",
          }}
        >
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              backgroundColor: "#0070f3",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
              fontSize: "14px",
            }}
          >
            ST
          </div>
          <div>
            <p style={{ margin: "0", fontWeight: "500", color: "#333" }}>
              {article.author}
            </p>
            <p style={{ margin: "0" }}>
              {article.date} · {article.readTime}
            </p>
          </div>
        </div>
      </div>

      {/* Article Body — Server Component renders this */}
      <div style={{ marginBottom: "48px" }}>
        {article.content.map((paragraph, index) => (
          <p
            key={index}
            style={{
              fontSize: "17px",
              lineHeight: "1.8",
              color: "#333",
              marginBottom: "20px",
            }}
          >
            {paragraph}
          </p>
        ))}
      </div>

      {/* Like Section — Client Component handles this */}
      <div
        style={{
          borderTop: "1px solid #eee",
          paddingTop: "32px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "12px",
          textAlign: "center",
        }}
      >
        <p style={{ color: "#555", fontSize: "16px", margin: "0" }}>
          Did you enjoy this article?
        </p>
        <LikeButton articleTitle={article.title} />
        <p style={{ color: "#999", fontSize: "13px", margin: "0" }}>
          This like button is a Client Component inside a Server Component page.
        </p>
      </div>
    </article>
  );
};

export default ArticlePage;
