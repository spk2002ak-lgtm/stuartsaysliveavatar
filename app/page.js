"use client";
import { useState } from "react";

export default function Home() {

  const [text, setText] = useState("");

  function speak() {
    if (!text) return;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1;
    utterance.pitch = 1;

    speechSynthesis.speak(utterance);
  }

  return (
    <div style={{
      background: "#0b0b0b",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      fontFamily: "sans-serif"
    }}>
      
      <div style={{
        width: 420,
        height: 420,
        background: "#1a1a1a",
        borderRadius: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 22,
        marginBottom: 20
      }}>
        Stuart Avatar
      </div>

      <input
        value={text}
        onChange={(e)=>setText(e.target.value)}
        placeholder="Say something..."
        style={{
          width: 300,
          padding: 12,
          borderRadius: 10,
          border: "none",
          marginBottom: 10
        }}
      />

      <button
        onClick={speak}
        style={{
          padding: "12px 24px",
          borderRadius: 10,
          border: "none",
          background: "#00ff9c",
          fontWeight: "bold",
          cursor: "pointer"
        }}
      >
        SPEAK
      </button>

    </div>
  );
}
