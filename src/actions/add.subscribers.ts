"use server";
import Subscriber from "@/models/subscriber.model";
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
    // first we need to fetch all users
    const allUsers = await clerkClient.users.getUserList();
    // now we need to find our newsletter owner
    const newsletterOwner = allUsers.find((i) => i.username === username);

    if (!newsletterOwner) {
      throw Error("Username is not valid!");
    }
    //check if user is already subscribed
    const isSubscribed = await Subscriber.findOne({
      email,
      newsLetterOwnerId: newsletterOwner?.id,
    });
    if (isSubscribed) {
      return { error: "You are already subscribed" };
    }
    //validate the email
    const validationResponse = await validateEmail({ email });
    if (validationResponse?.classification === "Undeliverable") {
      return { error: "Email is not valid" };
    }

    //create the subscriber
      const subscriber = await Subscriber.create({
        email,
        newsLetterOwnerId: newsletterOwner?.id,
        source: "By mailmarkit website",
        status: "Subscribed",
      });
      return subscriber;
  } catch (error) {
    console.error("Error subscribing user: ", error);
  }
};
