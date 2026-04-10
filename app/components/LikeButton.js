"use client";
import React, { useState } from "react";

const LikeButton = ({ articleTitle }) => {
  const [likeCount, setLikeCount] = useState(0);
  const [liked, setLiked] = useState(false);
  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
      setLiked(true);
    }
  };
  return (
    <div>
      {articleTitle && (
        <p style={{ fontSize: "13px", color: "#999", marginBottom: "8px" }}>
          {liked ? `You liked "${articleTitle}"!` : `Like "${articleTitle}"?`}
        </p>
      )}
      <button
        onClick={handleLike}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          backgroundColor: liked ? "#fff0f3" : "#f5f5f5",
          color: liked ? "#e00033" : "#555",
          border: liked ? "1px solid #ffb3c1" : "1px solid #ddd",
          borderRadius: "999px",
          padding: "8px 20px",
          fontSize: "15px",
          fontWeight: "500",
          cursor: "pointer",
          transition: "all 0.2s",
        }}
      >
        <span style={{ fontSize: "18px" }}>{liked ? "❤️" : "🤍"}</span>
        <span>{liked ? "Liked" : "Like"}</span>
        <span
          style={{
            backgroundColor: liked ? "#ffb3c1" : "#ddd",
            borderRadius: "999px",
            padding: "1px 8px",
            fontSize: "13px",
          }}
        >
          {likeCount}
        </span>
      </button>
    </div>
  );
};

export default LikeButton;
