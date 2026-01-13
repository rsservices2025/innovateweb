import { NextResponse } from "next/server";
import crypto from "crypto";
import { sendPurchaseEmail, sendAdminLeadMail } from "@/lib/mailer";

function verifySignature(data: any, received: string) {
  const secret = process.env.INSTAMOJO_SALT!;
  const sorted = Object.keys(data)
    .sort()
    .map((k) => `${k}=${data[k]}`)
    .join("|");

  const hash = crypto
    .createHmac("sha1", secret)
    .update(sorted)
    .digest("hex");

  return hash === received;
}

export async function POST(req: Request) {
  const data = await req.json();

  const valid = verifySignature(data, data.mac);

  if (!valid) {
    return NextResponse.json({ success: false });
  }

  if (data.status === "Credit") {
    const name = data.buyer_name;
    const email = data.buyer;

    await sendPurchaseEmail(email, name);
    await sendAdminLeadMail(name, email);
  }

  return NextResponse.json({ success: true });
}