import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendPurchaseEmail(email: string, name: string) {
  const html = `
  <div style="font-family:Arial;padding:20px">
    <img src="https://ik.imagekit.io/vquvxmrff/file_00000000eae861fab80a507c494eb6c3.png" height="60"/>
    <h2>Thank you for your purchase ❤️</h2>
    <p>Hi ${name},</p>
    <p>Your access is ready.</p>
    <a href="${process.env.DELIVERY_URL}" 
       style="padding:12px 20px;background:#6d28d9;color:#fff;border-radius:6px;text-decoration:none">
       Download Now
    </a>
    <p style="margin-top:20px">– InnovateWeb Team</p>
  </div>
  `;

  await transporter.sendMail({
    from: `"InnovateWeb" <${process.env.SMTP_USER}>`,
    to: email,
    subject: "Your InnovateWeb Access",
    html,
  });
}

export async function sendAdminLeadMail(name: string, email: string) {
  const html = `
    <h3>New Purchase</h3>
    <p>Name: ${name}</p>
    <p>Email: ${email}</p>
  `;

  await transporter.sendMail({
    from: `"InnovateWeb" <${process.env.SMTP_USER}>`,
    to: process.env.ADMIN_EMAIL,
    subject: "New Sale Received",
    html,
  });
}