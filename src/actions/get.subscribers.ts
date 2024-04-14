'use server'

import Subscriber from "@/models/subscribers.model";
import { connectDb } from "@/shared/libs/db";

export const getSubscribers = async ({ newsLetterOwnerId }: { newsLetterOwnerId: string }) => {
    try {
        await connectDb();
        const subscribers = await Subscriber.find({ newsLetterOwnerId });
    } catch (error) {
        console.error("Error getting subscribers: ", error);
    }
}