// /lib/instamojo.ts

export async function createInstamojoPayment() {
  const url = `${process.env.INSTAMOJO_BASE_URL}/payment-requests/`;

  const payload = {
    purpose: "WebDev Mega Pack Test",
    amount: "10",
    buyer_name: "Test User",
    email: "test@example.com",
    redirect_url: `${process.env.NEXT_PUBLIC_BASE_URL}/payment-success`,
    send_email: false,
    send_sms: false,
    allow_repeated_payments: false,
  };

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "X-Api-Key": process.env.INSTAMOJO_API_KEY!,
      "X-Auth-Token": process.env.INSTAMOJO_AUTH_TOKEN!,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await res.json();

  if (!res.ok) {
    console.error("Instamojo Error:", data);
    throw new Error("Payment creation failed");
  }

  return data;
}