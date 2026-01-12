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

export async function sendDeliveryMail(to: string, name: string) {
  const html = `
  <div style="font-family:Arial, sans-serif; background:#0b0b15; color:#fff; padding:30px;">
    <div style="max-width:600px;margin:auto;background:#0f1025;border-radius:16px;padding:24px;">

      <div style="text-align:center;">
        <img src="https://ik.imagekit.io/vquvxmrff/file_00000000eae861fab80a507c494eb6c3.png" width="120" />
      </div>

      <h2 style="text-align:center;margin-top:20px;">Thank you for your purchase 🎉</h2>

      <p style="color:#cfcfcf;text-align:center;">
        Hi ${name}, your access is ready.
      </p>

      <div style="text-align:center;margin:20px 0;">
        <img 
          src="https://ik.imagekit.io/vquvxmrff/file_0000000055c072078bf5b08f518d6d74.png" 
          width="180" 
          style="border-radius:12px;" 
        />
      </div>

      <div style="text-align:center;margin:30px 0;">
        <a href="${process.env.DELIVERY_LINK}"
          style="display:inline-block;padding:14px 26px;
          background:linear-gradient(to right,#7c3aed,#2563eb);
          color:white;text-decoration:none;border-radius:10px;font-weight:600;">
          Access Your Files
        </a>
      </div>

      <p style="font-size:13px;color:#aaa;text-align:center;">
        Need help? Contact: admin@codevix.in
      </p>

      <hr style="border:none;border-top:1px solid rgba(255,255,255,0.1);margin:20px 0;" />

      <p style="font-size:12px;color:#888;text-align:center;">
        Thank you from <strong>InnovateWeb Team</strong>
      </p>

      <div style="text-align:center;margin-top:10px;">
        <img src="https://ik.imagekit.io/vquvxmrff/file_00000000eae861fab80a507c494eb6c3.png" width="80" />
      </div>

    </div>
  </div>
  `;

  await transporter.sendMail({
    from: `"${process.env.MAIL_FROM_NAME}" <${process.env.MAIL_FROM_EMAIL}>`,
    to,
    subject: "🎉 Your InnovateWeb Access is Ready!",
    html,
  });
}