import { NextRequest, NextResponse } from "next/server";
import { getLeads, updateLead } from "@/lib/store";

export async function GET() {
  const leads = await getLeads();
  return NextResponse.json(leads);
}

export async function PATCH(request: NextRequest) {
  const { id, status } = await request.json();
  if (!id || !status) {
    return NextResponse.json({ error: "id and status are required" }, { status: 400 });
  }
  const lead = await updateLead(id, { status });
  if (!lead) {
    return NextResponse.json({ error: "Lead not found" }, { status: 404 });
  }
  return NextResponse.json(lead);
}
