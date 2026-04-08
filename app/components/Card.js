export default function Card(props){
    return (
      <div
        style={{
          border: "1px solid #e0e0e0",
          borderRadius: "12px",
          padding: "24px",
          backgroundColor: "#ffffff",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          transition: "transform 0.2s",
        }}
      >
        <h2
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            marginTop: "0",
            marginBottom: "8px",
            color: "#111",
          }}
        >
          {props.title}
        </h2>
        <p
          style={{
            fontSize: "15px",
            color: "#555",
            lineHeight: "1.6",
            margin: "0",
          }}
        >
          {props.description}
        </p>
      </div>
    );
}