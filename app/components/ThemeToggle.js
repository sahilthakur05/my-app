"use client"
import React, { useState } from 'react'

const ThemeToggle = () => {
    const [isDark,setIsDark]=useState(false)
    const toggleTheme=()=>{
  setIsDark(!isDark);
console.log(isDark);
        if (!isDark) {
          document.body.style.backgroundColor = "#111";
          document.body.style.color = "#eee";
        } else {
          document.body.style.backgroundColor = "#f9f9f9";
          document.body.style.color = "#111";
        }
    }
  return (
    <button
      onClick={toggleTheme}
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        width: "48px",
        height: "48px",
        borderRadius: "50%",
        border: "1px solid #ddd",
        backgroundColor: isDark ? "#333" : "white",
        fontSize: "20px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
        zIndex: 999,
      }}
    >
      {isDark ? "☀️" : "🌙"}
    </button>
  );
}

export default ThemeToggle