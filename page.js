"use client";
import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const [isSpeaking, setIsSpeaking] = useState(false);

  async function speak() {
    if (!text.trim()) return;

    setIsSpeaking(true);
    window.speechSynthesis.cancel();

    const res = await fetch("/api/ai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message: text })
    });

    const data = await res.json();

    const utterance = new SpeechSynthesisUtterance(data.reply);
    utterance.onend = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  }

  return (
    <div style={{
      background:"#0b0b0b",
      minHeight:"100vh",
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      justifyContent:"center",
      color:"white"
    }}>
      
      <div style={{
        width:420,
        height:420,
        borderRadius:20,
        background:isSpeaking ? "#1f8f57" : "#1a1a1a",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        fontSize:22,
        marginBottom:20
      }}>
        {isSpeaking ? "Thinking / Speaking..." : "Avatar Screen"}
      </div>

      <input
        value={text}
        onChange={(e)=>setText(e.target.value)}
        style={{padding:10,width:300,marginBottom:10}}
      />

      <button onClick={speak}>
        SPEAK
      </button>

    </div>
  );
}