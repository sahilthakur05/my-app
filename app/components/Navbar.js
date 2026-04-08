export default function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#111",
        padding: "0 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "64px",
      }}
    >
      <a
        href="/"
        style={{
          color: "white",
          textDecoration: "none",
          fontSize: "20px",
          fontWeight: "bold",
          letterSpacing: "-0.5px",
        }}
      >
        Sahil Thakur
      </a>

      <div style={{ display: "flex", gap: "32px" }}>
        <a
          href="/"
          style={{
            color: "#ccc",
            textDecoration: "none",
            fontSize: "15px",
          }}
        >
          Home
        </a>
        <a
          href="/about"
          style={{
            color: "#ccc",
            textDecoration: "none",
            fontSize: "15px",
          }}
        >
          About
        </a>
        <a
          href="/blog"
          style={{
            color: "#ccc",
            textDecoration: "none",
            fontSize: "15px",
          }}
        >
          Blog
        </a>
      </div>
    </nav>
  );
}
