import nodemailer from "nodemailer";



const whatsappText = encodeURIComponent(
  `Hi! I would like to know about your work.`
);

const mynum = "+92 3152054175";

const whatsappLink = mynum
  ? `https://wa.me/${mynum.replace(/\D/g, "")}?text=${whatsappText}`
  : null;


export async function POST(req) {
  try {
    const { name, company, email, phone, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: "mail.privateemail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New Contact from ${name}`,
html: `
  <div style="background:#f4f6f8;padding:40px 0;font-family:Arial,Helvetica,sans-serif;">
    <table align="center" width="100%" cellpadding="0" cellspacing="0"
      style="max-width:600px;background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 10px 25px rgba(0,0,0,0.08);">

      <!-- Header -->
      <tr>
        <td style="background:#111827;padding:24px;text-align:center;">
          <h1 style="color:#ffffff;margin:0;font-size:22px;">📩 New Contact Request</h1>
          <p style="color:#9ca3af;margin:6px 0 0;font-size:14px;">
            Portfolio Contact Form
          </p>
        </td>
      </tr>

      <!-- Body -->
      <tr>
        <td style="padding:32px;color:#374151;">
          <p style="font-size:15px;margin-bottom:24px;">
            You have received a new message from your portfolio website.
          </p>

          <table width="100%" style="font-size:14px;">
            <tr>
              <td style="padding:8px 0;font-weight:bold;">Name</td>
              <td>${name}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;font-weight:bold;">Email</td>
              <td>
                <a href="mailto:${email}" style="color:#2563eb;text-decoration:none;">
                  ${email}
                </a>
              </td>
            </tr>
            <tr>
              <td style="padding:8px 0;font-weight:bold;">Phone</td>
              <td>${phone || "-"}</td>
            </tr>
          </table>

          <!-- Message -->
          <div style="margin-top:24px;">
            <p style="font-weight:bold;margin-bottom:8px;">Message</p>
            <div style="background:#f9fafb;border-left:4px solid #22c55e;padding:16px;border-radius:4px;">
              ${message}
            </div>
          </div>

          ${
            whatsappLink
              ? `
            <!-- WhatsApp Button -->
            <div style="margin-top:28px;text-align:center;">
              <a href="${whatsappLink}" target="_blank"
                style="display:inline-block;background:#22c55e;color:#ffffff;
                text-decoration:none;padding:14px 22px;border-radius:6px;
                font-weight:bold;font-size:14px;">
                💬 Chat on WhatsApp
              </a>
            </div>
          `
              : ""
          }

        </td>
      </tr>

      <!-- Footer -->
      <tr>
        <td style="background:#f3f4f6;padding:16px;text-align:center;font-size:12px;color:#6b7280;">
          © ${new Date().getFullYear()} Portfolio Website
        </td>
      </tr>

    </table>
  </div>
`


    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to send message" }), {
      status: 500,
    });
  }
}
