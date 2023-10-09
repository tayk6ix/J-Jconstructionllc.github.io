import nodemailer from "nodemailer";
 
export default async (req, res) => {
  const { first_name, last_name, email, subject, message } = req.body;

  

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user:  process.env.NEXT_PUBLIC_SMTP_USER,
      pass: process.env.NEXT_PUBLIC_SMTP_PASSWORD
    }
  });
 
  try {

    await transporter.sendMail({
      from: email,
      to: "info@jnjconstructionllc.net",
      subject: `Contact form submission from ${first_name} ${last_name} regarding ${subject}`,
      html: `<p>You have a contact form submission about ${subject}</p><br>
        <p><strong>Email: </strong> ${email}</p><br>
        <p><strong>Message: </strong> ${message}</p><br>
      `
    });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
  return res.status(200).json({ error: "" });
};