import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email } = await req.json();

    const res = await fetch("https://www.instamojo.com/api/1.1/payment-requests/", {
      method: "POST",
      headers: {
        "X-Api-Key": process.env.INSTAMOJO_API_KEY!,
        "X-Auth-Token": process.env.INSTAMOJO_AUTH_TOKEN!,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        purpose: "InnovateWeb Code Vault",
        amount: "10",
        buyer_name: name,
        email: email,
        redirect_url: `${process.env.NEXT_PUBLIC_SITE_URL}/payment-success`,
        webhook: `${process.env.NEXT_PUBLIC_SITE_URL}/api/instamojo-webhook`,
        send_email: "false",
        allow_repeated_payments: "false",
      }),
    });

    const data = await res.json();

    if (!data.success || !data.payment_request?.longurl) {
      return NextResponse.json({ error: "Instamojo error", raw: data }, { status: 400 });
    }

    return NextResponse.json({
      payment_url: data.payment_request.longurl,
    });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}