import React from 'react'
import Card from "@/app/components/Card"
import Button from "@/app/components/Button"
const Home = () => {
   const today = new Date();
   const dateString = today.toLocaleDateString("en-IN", {
     weekday: "long",
     year: "numeric",
     month: "long",
     day: "numeric",
   });
  return (
    <div>
      <h1 style={{ fontSize: "40px", marginBottom: "8px" }}>
        Hi, I am Sahil 👋
      </h1>
      <p style={{ fontSize: "18px", color: "#555", marginBottom: "24px" }}>
        Full-stack developer in training — learning Next.js to get a job
      </p>
      <p style={{ color: "#888" }}>Today is {dateString}</p>
      <div
        style={{
          backgroundColor: "#f0f7ff",
          border: "1px solid #0070f3",
          borderRadius: "8px",
          padding: "20px",
          marginTop: "32px",
        }}
      >
        <h2 style={{ marginTop: "0" }}>What I am building</h2>
        <p>
          I am on a 10-week journey to master Next.js and land my first
          developer job.
        </p>
        <p>
          Check out my{" "}
          <a href="/blog" style={{ color: "#0070f3" }}>
            blog
          </a>{" "}
          to follow along, or visit my{" "}
          <a href="/about" style={{ color: "#0070f3" }}>
            about page
          </a>{" "}
          to know more.
        </p>
      </div>
      <div style={{ marginTop: "20px", display: "flex", gap: "12px" }}>
        <Button
          label="View My Blog"

          color={"red"}
        />
        <Button
          label="Contact Me"
          color="#111"


        />
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        <Card
          title="Personal Blog"
          description="A blog built with Next.js where I document my learning journey as a developer."
        />
        <Card
          title="Task Manager"
          description="A full-stack task management app with login, create, and delete features."
        />
        <Card
          title="Portfolio Site"
          description="This portfolio website built with Next.js, showing my skills and projects."
        />
      </div>{" "}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        <Card
          title="Personal Blog"
          description="A blog built with Next.js where I document my learning journey as a developer."
        />
        <Card
          title="Task Manager"
          description="A full-stack task management app with login, create, and delete features."
        />
        <Card
          title="Portfolio Site"
          description="This portfolio website built with Next.js, showing my skills and projects."
        />
      </div>
    </div>
  );
}

export default Home;