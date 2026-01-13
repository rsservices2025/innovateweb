import { NextResponse } from "next/server";
import crypto from "crypto";
import { sendDeliveryMail, sendAdminMail } from "@/lib/mailer";

export async function POST(req: Request) {
  const data = await req.formData();
  const payload: any = {};
  data.forEach((value, key) => (payload[key] = value));

  const {
    buyer_name,
    buyer_email,
    amount,
    status,
  } = payload;

  if (status !== "Credit") {
    return NextResponse.json({ ok: false });
  }

  // 1. Send mail to customer
  await sendDeliveryMail(buyer_email, buyer_name);

  // 2. Send mail to admin
  await sendAdminMail(buyer_name, buyer_email, amount);

  // 3. Send to Web3Forms
  await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      access_key: process.env.WEB3FORMS_KEY,
      name: buyer_name,
      email: buyer_email,
      message: `Paid ₹${amount}`,
    }),
  });

  return NextResponse.json({ success: true });
}