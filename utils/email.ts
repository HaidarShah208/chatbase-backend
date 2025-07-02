import nodemailer from "nodemailer";
import * as dotenv from "dotenv";

dotenv.config();

const sendEmail = async ({ to, subject, text }: any) => {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: `"StackUp Solutions" <${process.env.EMAIL_USERNAME}>`,
    to,
    subject,
    text,
  });
};

export default sendEmail;
