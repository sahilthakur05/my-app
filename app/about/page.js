import React from 'react'

const About = () => {
  return (
    <div>
      <h1>About Me</h1>

      <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
        Hi! I am Sahil Thakur, a self-taught developer from Delhi, India. I am
        currently on a mission to master Next.js and get my first full-stack
        developer job.
      </p>

      <h2>My Skills</h2>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {["HTML", "CSS", "JavaScript", "Next.js (learning)"].map((skill) => (
          <span
            key={skill}
            style={{
              backgroundColor: "#f0f7ff",
              border: "1px solid #0070f3",
              color: "#0070f3",
              padding: "4px 12px",
              borderRadius: "20px",
              fontSize: "14px",
            }}
          >
            {skill}
          </span>
        ))}
      </div>

      <h2>My Goal</h2>
      <p>
        Get a job as a Next.js developer. I study 1-2 hours every day, 5 days a
        week.
      </p>
    </div>
  );
}

export default About;