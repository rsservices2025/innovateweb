// src/lib/mailer.ts

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendPurchaseEmail({
  to,
  name,
  downloadLink,
}: {
  to: string;
  name: string;
  downloadLink: string;
}) {
  const html = `
  <div style="background:#0b0b15;padding:40px;font-family:sans-serif;color:#fff">
    <div style="max-width:600px;margin:auto;background:#0f1025;border-radius:16px;padding:30px">
      
      <img src="https://ik.imagekit.io/vquvxmrff/file_00000000eae861fab80a507c494eb6c3.png" height="50" />

      <h2>Thank you for your purchase 🎉</h2>
      <p>Hi ${name},</p>
      <p>Your access is ready.</p>

      <a href="${downloadLink}" style="display:inline-block;margin:20px 0;padding:14px 24px;border-radius:10px;background:linear-gradient(90deg,#7c3aed,#2563eb);color:#fff;text-decoration:none;">
        Access Your Files
      </a>

      <p>If you need help, contact: admin@codevix.in</p>

      <img src="https://ik.imagekit.io/vquvxmrff/file_0000000055c072078bf5b08f518d6d74.png" width="200"/>

      <p style="margin-top:30px;opacity:0.6">
        Thank you from InnovateWeb Team ❤️
      </p>
    </div>
  </div>
  `;

  await transporter.sendMail({
    from: `"InnovateWeb Team" <${process.env.SMTP_USER}>`,
    to,
    subject: "🎉 Your InnovateWeb Access is Ready!",
    html,
  });
}