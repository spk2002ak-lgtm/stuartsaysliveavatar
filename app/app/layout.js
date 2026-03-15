export const metadata = {
  title: "StuartSays LiveAvatar",
  description: "Realtime avatar platform"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
