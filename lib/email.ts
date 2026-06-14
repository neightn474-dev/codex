import nodemailer from "nodemailer";

type NotificationPayload = {
  name: string;
  email: string;
  company: string;
  title: string;
  hiringNeed: string;
  message?: string;
};

export async function sendNotification(payload: NotificationPayload) {
  const { EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASS, EMAIL_TO } = process.env;

  if (!EMAIL_HOST || !EMAIL_PORT || !EMAIL_USER || !EMAIL_PASS || !EMAIL_TO) {
    console.log("Email notification skipped. Missing email environment variables.");
    console.log(payload);
    return;
  }

  const transporter = nodemailer.createTransport({
    host: EMAIL_HOST,
    port: Number(EMAIL_PORT),
    secure: Number(EMAIL_PORT) === 465,
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `NexusForge <${EMAIL_USER}>`,
    to: EMAIL_TO,
    subject: `New inquiry from ${payload.name} at ${payload.company}`,
    text: `Name: ${payload.name}\nEmail: ${payload.email}\nCompany: ${payload.company}\nTitle: ${payload.title}\nNeed: ${payload.hiringNeed}\nMessage: ${payload.message ?? "<none>"}`,
    html: `<p><strong>Name:</strong> ${payload.name}</p><p><strong>Email:</strong> ${payload.email}</p><p><strong>Company:</strong> ${payload.company}</p><p><strong>Title:</strong> ${payload.title}</p><p><strong>Need:</strong> ${payload.hiringNeed}</p><p><strong>Message:</strong> ${payload.message ?? "<none>"}</p>`,
  });
}
