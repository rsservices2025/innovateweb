import { NextResponse } from "next/server";
import { sendPurchaseEmail } from "@/lib/mailer";

export async function POST() {
  try {
    await sendPurchaseEmail("test@example.com", "Test User");
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ success: false });
  }
}