import { NextResponse } from "next/server";
import crypto from "crypto";
import { sendDeliveryMail } from "@/lib/mailer";

function verifySignature(data: any, received: string) {
  const sorted = Object.keys(data)
    .filter((k) => k !== "mac")
    .sort()
    .map((k) => `${k}=${data[k]}`)
    .join("|");

  const generated = crypto
    .createHmac("sha1", process.env.INSTAMOJO_SALT!)
    .update(sorted)
    .digest("hex");

  return generated === received;
}

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const data: any = {};

    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    const isValid = verifySignature(data, data.mac);

    if (!isValid) {
      return NextResponse.json({ error: "Invalid signature" }, { status: 403 });
    }

    // Payment successful
    if (data.status === "Credit") {
      const customerEmail = data.buyer;
      const customerName = data.buyer_name || "Customer";

      // 1️⃣ Send customer delivery mail
      await sendDeliveryMail(customerEmail, customerName);

      // 2️⃣ Notify admin via Web3Forms API route
      await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/admin-notify`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: customerName,
          email: customerEmail,
          payment_id: data.payment_id,
          amount: data.amount,
        }),
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Webhook error:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}