import { NextRequest, NextResponse } from "next/server";
import { createSession, destroySession, validateCredentials } from "@/lib/store";

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();
  const user = await validateCredentials(email, password);

  if (!user) {
    return NextResponse.json({ error: "Invalid credentials." }, { status: 401 });
  }

  const session = await createSession(user);
  const response = NextResponse.json({ success: true });
  response.cookies.set("session_token", session.token, {
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 8,
  });
  return response;
}

export async function DELETE(request: NextRequest) {
  const token = request.cookies.get("session_token")?.value;
  if (token) {
    await destroySession(token);
  }
  const response = NextResponse.json({ success: true });
  response.cookies.set("session_token", "", { path: "/", maxAge: 0 });
  return response;
}
