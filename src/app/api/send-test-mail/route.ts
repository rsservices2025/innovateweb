import { NextResponse } from "next/server";
import { sendPurchaseEmail } from "@/lib/mailer";

export async function POST() {
  try {
    await sendPurchaseEmail("innovateweb25@gmail.com");
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}