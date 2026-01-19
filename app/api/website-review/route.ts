import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Basic validation
    const name = (data?.name || "").trim();
    const email = (data?.email || "").trim();
    const website = (data?.website || "").trim();
    const goal = (data?.goal || "").trim();

    if (!name || !email || !website || !goal) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    // 🔐 SMTP config iz Vercel env var
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === "true", // true za 465, false za ostalo
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      requireTLS: Number(process.env.SMTP_PORT || 587) === 587,
      tls: { minVersion: "TLSv1.2" },
    });

    const text = `
Neue Website-Review Anfrage über sargasweb.ch

Name: ${name}
E-Mail: ${email}
Website: ${website}
Ziel: ${goal}
    `.trim();

    await transporter.sendMail({
      from: `"Sargasweb Website Review" <${process.env.SMTP_USER}>`,
      to: "info@sargasweb.ch", // ⬅️ fiksno kao što želiš
      replyTo: email,
      subject: `Website Review Anfrage von ${name}`,
      text,
    });

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    console.error("Website-Review API Fehler:", e);
    return NextResponse.json(
      { ok: false, error: e?.message || "Server error" },
      { status: 500 }
    );
  }
}
