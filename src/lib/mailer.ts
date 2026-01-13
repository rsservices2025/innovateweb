import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendDeliveryMail(email: string, name: string) {
  const html = `
    <div style="font-family:Arial;padding:20px;">
      <img src="https://ik.imagekit.io/vquvxmrff/file_00000000eae861fab80a507c494eb6c3.png" width="120" />
      <h2>Thank you ${name} ❤️</h2>
      <p>Your purchase is successful!</p>

      <a href="${process.env.DELIVERY_URL}" 
         style="display:inline-block;padding:12px 20px;background:#7c3aed;color:#fff;text-decoration:none;border-radius:8px;">
         Download Now
      </a>

      <p style="margin-top:20px;">Thank you from <b>InnovateWeb Team</b></p>

      <img src="https://ik.imagekit.io/vquvxmrff/file_0000000055c072078bf5b08f518d6d74.png" width="200" />
    </div>
  `;

  await transporter.sendMail({
    from: `"InnovateWeb" <${process.env.SMTP_USER}>`,
    to: email,
    subject: "Your Download is Ready 🚀",
    html,
  });
}

export async function sendAdminMail(name: string, email: string, amount: string) {
  await transporter.sendMail({
    from: `"InnovateWeb" <${process.env.SMTP_USER}>`,
    to: process.env.ADMIN_EMAIL,
    subject: "New Order Received",
    html: `
      <h3>New Payment Received</h3>
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Amount: ₹${amount}</p>
    `,
  });
}