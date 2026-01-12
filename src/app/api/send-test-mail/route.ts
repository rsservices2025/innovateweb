// src/app/api/send-test-mail/route.ts

import { NextResponse } from "next/server";
import { sendPurchaseEmail } from "@/lib/mailer";

export async function POST() {
  try {
    await sendPurchaseEmail({
      to: "rsservicesapk@gmail.com", // test
      name: "Test User",
      downloadLink: "https://drive.google.com/drive/folders/1p9b2sh-nSwFaxTc5j6AACg-SzHm-5L1Y",
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}