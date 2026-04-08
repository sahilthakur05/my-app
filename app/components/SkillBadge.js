export default function SkillBadge({ skill }) {
  return (
    <span
      style={{
        display: "inline-block",
        backgroundColor: "#e8f0fe",
        color: "#1a56db",
        border: "1px solid #c3d3fc",
        borderRadius: "20px",
        padding: "4px 14px",
        fontSize: "13px",
        fontWeight: "500",
        margin: "4px",
      }}
    >
      {skill}
    </span>
  );
}
