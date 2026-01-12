import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST, // e.g. smtp.titan.email
  port: Number(process.env.SMTP_PORT), // 465
  secure: true,
  auth: {
    user: process.env.SMTP_USER, // your email
    pass: process.env.SMTP_PASS, // your password
  },
});

type MailProps = {
  to: string;
  name: string;
  downloadLink: string;
};

export async function sendPurchaseEmail({ to, name, downloadLink }: MailProps) {
  const html = `
  <div style="font-family:Arial,sans-serif;background:#0b0b15;padding:30px;color:#fff">
    <h2>🎉 Thank you for your purchase, ${name}!</h2>
    <p>Your access is ready.</p>

    <a href="${downloadLink}" style="display:inline-block;margin:20px 0;padding:12px 20px;background:linear-gradient(90deg,#7c3aed,#2563eb);color:#fff;text-decoration:none;border-radius:8px">
      Access Your Files
    </a>

    <p style="margin-top:30px;color:#aaa">
      Need help? Contact: admin@codevix.in
    </p>

    <hr style="margin:30px 0;border-color:#333"/>

    <p style="font-size:12px;color:#777">
      Thank you from <b>InnovateWeb Team</b> 💜
    </p>

    <img src="https://ik.imagekit.io/vquvxmrff/file_00000000eae861fab80a507c494eb6c3.png" width="120" />
  </div>
  `;

  await transporter.sendMail({
    from: `"InnovateWeb" <${process.env.SMTP_USER}>`,
    to,
    subject: "Your InnovateWeb Access is Ready 🎉",
    html,
  });
}

/**
 * Alias for webhook usage
 */
export async function sendDeliveryMail({
  to,
  name,
  downloadLink,
}: MailProps) {
  return sendPurchaseEmail({ to, name, downloadLink });
}