"use server";

import Email from "../models/email.model";
import { connectDb } from "../shared/libs/db";
import toast from "react-hot-toast";

export const saveEmail = async ({
  title,
  content,
  newsLetterOwnerId,
}: {
  title: string;
  content: string;
  newsLetterOwnerId: string;
}) => {
  try {
    await connectDb();
    const email = await Email.findOne({ title, newsLetterOwnerId });
    if (email) {
      await Email.findByIdAndUpdate(email._id, {
        content,
      });

      return { message: "Draft updated successfully" };
    } else {
      await Email.create({
        title,
        content,
        newsLetterOwnerId,
      });

      return { message: "Draft saved successfully" };
    }
  } catch (error) {
    console.log("Error saving email", error);
  }
};
