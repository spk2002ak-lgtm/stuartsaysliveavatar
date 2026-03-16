"use client";
import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const [isSpeaking, setIsSpeaking] = useState(false);

  function speak() {
    if (!text.trim()) return;

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.volume = 1;

    utterance.onstart = () => {
      setIsSpeaking(true);
    };

    utterance.onend = () => {
      setIsSpeaking(false);
    };

    utterance.onerror = () => {
      setIsSpeaking(false);
      alert("Speech failed on this browser/device.");
    };

    window.speechSynthesis.speak(utterance);
  }

  return (
    <div
      style={{
        background: "#0b0b0b",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontFamily: "sans-serif",
        padding: 20,
      }}
    >
      <div
        style={{
          width: 420,
          height: 420,
          background: isSpeaking ? "#1f8f57" : "#1a1a1a",
          borderRadius: 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 22,
          marginBottom: 20,
          border: isSpeaking ? "3px solid #00ff9c" : "3px solid #2a2a2a",
          boxShadow: isSpeaking
            ? "0 0 30px rgba(0,255,156,0.35)"
            : "none",
          transition: "all 0.2s ease",
        }}
      >
        {isSpeaking ? "Thinking / Speaking..." : "Stuart Avatar"}
      </div>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Say something..."
        style={{
          width: 300,
          padding: 12,
          borderRadius: 10,
          border: "none",
          marginBottom: 10,
          outline: "none",
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
          cursor: "pointer",
        }}
      >
        SPEAK
      </button>
    </div>
  );
}
