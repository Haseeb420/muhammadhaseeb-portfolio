import { NextRequest, NextResponse } from "next/server";
import emailjs from "@emailjs/nodejs";
import type { ContactRequestBody } from "@/lib/types";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateBody(body: unknown): { data?: ContactRequestBody; error?: string } {
  if (!body || typeof body !== "object") {
    return { error: "Request body is required." };
  }

  const { name, email, subject, message } = body as Record<string, unknown>;

  if (typeof name !== "string" || !name.trim()) {
    return { error: "Full name is required." };
  }
  if (typeof email !== "string" || !email.trim()) {
    return { error: "Email is required." };
  }
  if (!EMAIL_REGEX.test(email)) {
    return { error: "Please provide a valid email address." };
  }
  if (typeof subject !== "string" || !subject.trim()) {
    return { error: "Subject is required." };
  }
  if (typeof message !== "string" || !message.trim()) {
    return { error: "Message is required." };
  }

  return {
    data: {
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim(),
      message: message.trim(),
    },
  };
}

const emailjsOptions = () => ({
  publicKey: process.env.EMAILJS_PUBLIC_KEY!,
  privateKey: process.env.EMAILJS_PRIVATE_KEY!,
});

export async function POST(request: NextRequest) {
  const parsed = validateBody(await request.json().catch(() => null));
  if (parsed.error) {
    return NextResponse.json({ error: parsed.error }, { status: 400 });
  }

  const { name, email, subject, message } = parsed.data!;

  const publicKey = process.env.EMAILJS_PUBLIC_KEY;
  const privateKey = process.env.EMAILJS_PRIVATE_KEY;
  const serviceId = process.env.EMAILJS_SERVICE_ID;
  const templateAutoreply = process.env.EMAILJS_TEMPLATE_AUTOREPLY;
  const templateNotify = process.env.EMAILJS_TEMPLATE_NOTIFY;
  const contactTo = process.env.CONTACT_TO;

  const missing = [
    !publicKey && "EMAILJS_PUBLIC_KEY",
    !privateKey && "EMAILJS_PRIVATE_KEY",
    !serviceId && "EMAILJS_SERVICE_ID",
    !templateAutoreply && "EMAILJS_TEMPLATE_AUTOREPLY",
    !templateNotify && "EMAILJS_TEMPLATE_NOTIFY",
    !contactTo && "CONTACT_TO",
  ].filter(Boolean) as string[];

  if (missing.length > 0) {
    console.error("Contact API: Missing env vars:", missing.join(", "));
    return NextResponse.json(
      { error: "Contact is not configured. Please try again later." },
      { status: 500 }
    );
  }

  const options = emailjsOptions();

  // EmailJS uses "To Email" from the template; that field must be set to {{to_email}} in the dashboard
  if (!email?.trim()) {
    console.error("Contact API: sender email is empty (auto-reply recipient).");
    return NextResponse.json(
      { error: "Contact is not configured. Please try again later." },
      { status: 500 }
    );
  }
  if (!contactTo?.trim()) {
    console.error("Contact API: CONTACT_TO is empty (notification recipient).");
    return NextResponse.json(
      { error: "Contact is not configured. Please try again later." },
      { status: 500 }
    );
  }

  try {
    // 1. Auto-reply to sender (sequential for EmailJS rate limit)
    await emailjs.send(
      serviceId!,
      templateAutoreply!,
      {
        name,
        subject,
        message,
        to_email: email,
        email: email,
      },
      options
    );

    // 2. Notification to CONTACT_TO
    await emailjs.send(
      serviceId!,
      templateNotify!,
      {
        name,
        email,
        subject,
        message,
        to_email: contactTo!,
      },
      options
    );

    return NextResponse.json({ success: true });
  } catch (err) {
    const isApiDisabled =
      err &&
      typeof err === "object" &&
      "status" in err &&
      (err as { status: number }).status === 403 &&
      String((err as { text?: string }).text ?? "").includes("non-browser");

    if (isApiDisabled) {
      console.error(
        "Contact API: EmailJS rejected the request. Enable API for non-browser apps: https://dashboard.emailjs.com/admin/account — then Security → allow non-browser (API) requests."
      );
    } else if (err && typeof err === "object" && (err as { status?: number }).status === 422) {
      console.error(
        "Contact API: EmailJS 'recipients address is empty'. In EmailJS dashboard, set each template's 'To Email' field to {{to_email}}."
      );
      console.error("Contact API send error:", err);
    } else {
      console.error("Contact API send error:", err);
    }

    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
