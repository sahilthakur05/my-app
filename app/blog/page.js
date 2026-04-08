import React from 'react'

const Blogpage = () => {
     const posts = [
       {
         id: 1,
         title: "Day 1 of Learning Next.js — What I Discovered",
         date: "April 8, 2026",
         description:
           "I just started learning Next.js from zero. Here is what surprised me the most on day one.",
       },
       {
         id: 2,
         title: "Why I Chose Next.js Over Plain React",
         date: "April 9, 2026",
         description:
           "After researching what skills companies want, I decided Next.js was the right choice. Here is my reasoning.",
       },
       {
         id: 3,
         title: "My Goal: Get a Next.js Developer Job in 3 Months",
         date: "April 10, 2026",
         description:
           "I have set myself a challenge. 10 weeks, daily practice, one big goal. Here is my plan.",
       },
     ];
  return (
    <div>
      <h1>My Blog</h1>
      <p>I write about my journey learning Next.js and web development.</p>

      <div>
        {posts.map((post) => (
          <div
            key={post.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "20px",
              marginBottom: "16px",
            }}
          >
            <h2>{post.title}</h2>
            <p style={{ color: "#666", fontSize: "14px" }}>{post.date}</p>
            <p>{post.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogpage;