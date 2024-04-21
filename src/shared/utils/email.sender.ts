"use server";
import * as nodemailer from "nodemailer";
import * as AWS from "aws-sdk";

interface Props {
  userEmail: string[];
  subject: string;
  content: string;
}

AWS.config.update({
  accessKeyId: process.env.NEXT_AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

AWS.config.getCredentials(function (err) {
  if (err) console.log(err.stack);
  else {
    console.log("Access key:", AWS?.config?.credentials?.accessKeyId);
  }
});
const ses = new AWS.SES({ apiVersion: "2010-12-01" });
const adminEmail = process.env.ADMIN_EMAIL;
const transporter = nodemailer.createTransport({
    SES: ses
});
export const sendEmail = async ({ userEmail, subject, content }: Props) => {
    try {
        const mailOptions = {
        from: adminEmail,
        to: userEmail,
        subject: subject,
        html: content,
        };
       const response= await transporter.sendMail(mailOptions);
        return response;
    } catch (error) {
        console.log("Error sending email: ", error);
        return false;
    }
    }