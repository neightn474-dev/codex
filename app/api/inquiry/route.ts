import { NextRequest, NextResponse } from "next/server";
import { addLead, incrementMetric } from "@/lib/store";
import { sendNotification } from "@/lib/email";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const required = ["name", "email", "company", "title", "hiringNeed"];
  for (const field of required) {
    if (!body[field]) {
      return NextResponse.json({ error: `${field} is required.` }, { status: 400 });
    }
  }

  const lead = await addLead({
    name: body.name,
    email: body.email,
    company: body.company,
    title: body.title,
    hiringNeed: body.hiringNeed,
    urgency: body.urgency ?? "4-8 weeks",
    summary: body.message ?? "",
  });

  await incrementMetric("callsBooked", 1);
  await sendNotification({
    name: lead.name,
    email: lead.email,
    company: lead.company,
    title: lead.title,
    hiringNeed: lead.hiringNeed,
    message: body.message,
  });

  return NextResponse.json({ success: true, lead });
}
