export async function POST(req) {
  const { message } = await req.json();

  const reply = `Stu says: I heard you say, ${message}`;

  return Response.json({ reply });
}