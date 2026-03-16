"use client";
import { useState } from "react";

export default function Home() {

  const [text, setText] = useState("");
  const [isSpeaking, setIsSpeaking] = useState(false);

  async function speak() {

    if (!text.trim()) return;

    setIsSpeaking(true);

    const res = await fetch("/api/brain", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message: text })
    });

    const data = await res.json();

    const utterance = new SpeechSynthesisUtterance(data.reply);

    utterance.onend = () => setIsSpeaking(false);

    speechSynthesis.speak(utterance);

    setText("");
  }

  return (
    <div style={{
      background:"#0b0b0b",
      height:"100vh",
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      justifyContent:"center",
      color:"white"
    }}>
      
      <div style={{
        width:420,
        height:420,
        background:isSpeaking ? "#143a24" : "#1a1a1a",
        borderRadius:20,
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        marginBottom:20
      }}>
        {isSpeaking ? "Thinking / Speaking..." : "Stuart Avatar"}
      </div>

      <input
        value={text}
        onChange={(e)=>setText(e.target.value)}
        style={{
          width:300,
          padding:12,
          borderRadius:10,
          border:"none",
          marginBottom:10
        }}
      />

      <button onClick={speak}>
        TALK TO COHOST
      </button>

    </div>
  );
}
