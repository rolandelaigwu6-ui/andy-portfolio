import { NextResponse } from "next/server";

type ContactPayload = { name?: unknown; email?: unknown; subject?: unknown; message?: unknown };

export async function POST(request: Request) {
  let payload: ContactPayload;
  try {
    payload = await request.json() as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Please submit a valid message." }, { status: 400 });
  }

  const name = typeof payload.name === "string" ? payload.name.trim().slice(0, 120) : "";
  const email = typeof payload.email === "string" ? payload.email.trim().slice(0, 254) : "";
  const subject = typeof payload.subject === "string" ? payload.subject.trim().slice(0, 180) : "";
  const message = typeof payload.message === "string" ? payload.message.trim().slice(0, 5000) : "";
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!name || !validEmail || !subject || !message) {
    return NextResponse.json({ error: "Check the required fields and try again." }, { status: 400 });
  }

  const destination = process.env.CONTACT_SUBMISSION_URL;
  if (!destination) {
    return NextResponse.json({ error: "The contact form is not available to send messages yet." }, { status: 503 });
  }

  try {
    const response = await fetch(destination, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ name, email, subject, message }),
      cache: "no-store",
    });
    if (!response.ok) return NextResponse.json({ error: "The message could not be delivered. Please try again later." }, { status: 502 });
    return NextResponse.json({ delivered: true }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "The message could not be delivered. Please try again later." }, { status: 502 });
  }
}
