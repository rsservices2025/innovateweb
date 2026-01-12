import { NextResponse } from "next/server";
import crypto from "crypto";
import { sendDeliveryMail } from "@/lib/mailer";

function verifySignature(data: any, receivedSignature: string) {
  const secret = process.env.INSTAMOJO_SALT!;
  const sorted = Object.keys(data)
    .sort()
    .map((key) => `${key}=${data[key]}`)
    .join("|");

  const generated = crypto
    .createHmac("sha1", secret)
    .update(sorted)
    .digest("hex");

  return generated === receivedSignature;
}

export async function POST(req: Request) {
  try {
    const body = await req.formData();
    const data: any = {};

    body.forEach((value, key) => {
      data[key] = value.toString();
    });

    const receivedSignature = data.mac;

    if (!verifySignature(data, receivedSignature)) {
      return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
    }

    const paymentStatus = data.status;
    const customerEmail = data.buyer;
    const customerName = data.buyer_name || "Customer";

    if (paymentStatus === "Credit") {
      await sendDeliveryMail({
        to: customerEmail,
        name: customerName,
        downloadLink: "https://drive.google.com/drive/folders/1p9b2sh-nSwFaxTc5j6AACg-SzHm-5L1Y",
      });

      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ success: false });
  } catch (err) {
    console.error("Webhook error:", err);
    return NextResponse.json({ error: "Webhook failed" }, { status: 500 });
  }
}