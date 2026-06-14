import { NextResponse } from "next/server";
import { getFirms } from "@/lib/store";

export async function GET() {
  const firms = await getFirms();
  return NextResponse.json(firms);
}
