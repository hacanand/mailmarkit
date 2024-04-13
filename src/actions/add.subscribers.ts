"use server";
import Subscriber from "@/models/subscribers.model";
import { connectDb } from "@/shared/libs/db";
import validateEmail from "@/shared/utils/VerifaliaApi";
import { clerkClient } from "@clerk/nextjs";
export const subscribe = async ({
  email,
  username,
}: {
  email: string;
  username: string;
}) => {
  try {
    await connectDb();
    //find the user
    const newsletterOwner = await clerkClient.users.getUser(username);
    const isSubscribed = await Subscriber.findOne({
      email,
      newsLetterOwnerId: newsletterOwner?.id,
    });
      if(isSubscribed){
          return { error: "You are already subscribed" };
      }
      //validate the email
      const validationResponse = await validateEmail({ email });
        if (validationResponse?.classification === "Undeliverable") {
          return { error: "Undeliverable email address" };
        }
  } catch (error) {
    console.error("Error subscribing user: ", error);
  }
};
