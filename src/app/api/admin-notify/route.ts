import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_ACCESS_KEY,
        subject: "New Purchase - InnovateWeb",
        from_name: "InnovateWeb Website",
        email: process.env.ADMIN_EMAIL,
        message: `
New Order Received 🎉

Name: ${body.name}
Email: ${body.email}
Product: InnovateWeb Code Vault
Amount: ₹149
Time: ${new Date().toLocaleString()}
        `,
      }),
    });

    const data = await res.json();
    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}