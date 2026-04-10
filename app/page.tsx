
import Card from "@/app/components/Card";
import Button from "@/app/components/Button";
import SkillBadge from "@/app/components/SkillBadge";
import LikeButton from "@/app/components/LikeButton"
const Home = () => {
  const today = new Date();
  const dateString = today.toLocaleDateString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Tailwind CSS",
  ];
  const projects = [
    {
      id: 1,
      title: "Personal Blog",
      description:
        "A blog built with Next.js where I write about my developer journey and things I learn every day.",
    },
    {
      id: 2,
      title: "Task Manager",
      description:
        "A full-stack task management app with GitHub login, and the ability to create and delete tasks.",
    },
    {
      id: 3,
      title: "Portfolio Site",
      description:
        "This portfolio website built with Next.js to showcase my skills, projects, and contact information.",
    },
  ];
  return (
    <div>
      {/* Hero Section */}
      <section
        style={{
          paddingBottom: "48px",
          borderBottom: "1px solid #eee",
          marginBottom: "48px",
        }}
      >
        <p style={{ color: "#999", fontSize: "14px", margin: "0 0 8px" }}>
          {dateString}
        </p>
        <h1
          style={{
            fontSize: "48px",
            fontWeight: "bold",
            margin: "0 0 16px",
            color: "#111",
            lineHeight: "1.1",
          }}
        >
          Hi, I am
          <br />
          Sahil Thakur 👋
        </h1>
        <p
          style={{
            fontSize: "20px",
            color: "#555",
            maxWidth: "540px",
            lineHeight: "1.6",
            margin: "0 0 28px",
          }}
        >
          I am a full-stack developer in training, learning Next.js to land my
          first developer job. I study every day and build real projects.
        </p>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <Button label="See My Blog" color={"red"} />
          <Button label="Contact Me" color="#28a745" />
          <Button label="View GitHub" color="#333" />
        </div>
      </section>

      {/* Skills Section */}
      <section style={{ marginBottom: "48px" }}>
        <h2 style={{ fontSize: "24px", marginBottom: "16px", color: "#111" }}>
          Skills
        </h2>
        <div>
          {skills.map((skill) => (
            <SkillBadge key={skill} skill={skill} />
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section>
        <h2 style={{ fontSize: "24px", marginBottom: "20px", color: "#111" }}>
          Projects
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "20px",
          }}
        >
          {projects.map((project) => (
            <Card
              key={project.id}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>
      </section>

      {/* Server Component page using a Client Component — this is the pattern */}
      <section style={{ borderTop: "1px solid #eee", paddingTop: "32px" }}>
        <p style={{ color: "#666", marginBottom: "12px" }}>
          Did you find this portfolio helpful?
        </p>
        <LikeButton articleTitle={"Sahil Thakur's Portfolio"} />
      </section>
    </div>
  );
};

export default Home;
