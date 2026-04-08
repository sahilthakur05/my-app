export default function Button({ label, color }) {
    const backgroundColor = color || "#0070f3";
    return (
      <button

        style={{
          backgroundColor: backgroundColor,
          color: "white",
          border: "none",
          borderRadius: "8px",
          padding: "10px 24px",
          fontSize: "15px",
          fontWeight: "500",
          cursor: "pointer",
          display: "inline-block",
        }}
      >
        {label}
      </button>
    );
}