export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#0a0a0a",
      color: "white",
      fontFamily: "Arial, sans-serif",
      padding: "40px"
    }}>
      <h1 style={{ fontSize: "56px", marginBottom: "20px" }}>
        StuartSays LiveAvatar
      </h1>

      <p style={{ fontSize: "22px", maxWidth: "800px", lineHeight: 1.6 }}>
        Hyper-realistic realtime avatars built for conversations, lead capture,
        live demos, and branded audience engagement.
      </p>

      <div style={{ marginTop: "40px", display: "grid", gap: "20px" }}>
        <div style={{
          border: "1px solid #333",
          borderRadius: "16px",
          padding: "20px",
          background: "#111"
        }}>
          <h2>Realtime Avatar Conversations</h2>
          <p>Natural-looking avatar experiences for StuartSays.</p>
        </div>

        <div style={{
          border: "1px solid #333",
          borderRadius: "16px",
          padding: "20px",
          background: "#111"
        }}>
          <h2>Voice + Personality Control</h2>
          <p>Customize tone, energy, humor, and delivery style.</p>
        </div>

        <div style={{
          border: "1px solid #333",
          borderRadius: "16px",
          padding: "20px",
          background: "#111"
        }}>
          <h2>Deploy Anywhere</h2>
          <p>Host it online and later connect it to real avatar streaming.</p>
        </div>
      </div>
    </main>
  );
}
