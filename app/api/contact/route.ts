import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Ako želiš eksplicitno Node runtime:
export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      company,
      website,
      projectType,
      budget,
      message,
      source,
    } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Bitte füllen Sie alle Pflichtfelder aus." },
        { status: 400 }
      );
    }

    // 🔐 SMTP config iz .env.local
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === "true", // true za 465, false za ostalo
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const text = `
Neue Kontaktanfrage über sargasweb.ch

Name: ${name}
E-Mail: ${email}
Unternehmen: ${company || "-"}
Website: ${website || "-"}
Projektart: ${projectType || "-"}
Budget: ${budget || "-"}
Quelle: ${source || "-"}

Nachricht:
${message}
    `.trim();

    await transporter.sendMail({
      from: `"Sargasweb Kontaktformular" <${process.env.SMTP_USER}>`,
      to: "info@sargasweb.ch", // ⬅️ ovdje stiže mail
      replyTo: email,
      subject: `Neue Anfrage von ${name} über sargasweb.ch`,
      text,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Kontakt-API-Fehler:", error);
    return NextResponse.json(
      {
        ok: false,
        error:
          "Beim Senden der Anfrage ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.",
      },
      { status: 500 }
    );
  }
}
