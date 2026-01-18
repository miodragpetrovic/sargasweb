import { NextResponse } from "next/server";

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

    // TODO: ovde poveži svoj mail provider / postojeći contact handler
    console.log("Website Review request:", data);

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return NextResponse.json(
      { ok: false, error: e?.message || "Server error" },
      { status: 500 }
    );
  }
}
