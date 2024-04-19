'use server'

import Membership from "@/models/membership.model";
import { connectDb } from "@/shared/libs/db";
import { currentUser } from "@clerk/nextjs";
import Stripe from 'stripe';

export const addStripe = async ({user}:{user:any}) => {
    try {
        await connectDb();
        const user = await currentUser();
        const membership = await Membership.findOne({ userId:user?.id });
        console.log(membership);
        if (membership) {
            return;
        } else {
            const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
                apiVersion: "2024-04-10",
            });
            await stripe.customers.create({
                email: user?.emailAddresses[0].emailAddress,
                name: user?.firstName + " " + user?.lastName,
            }).then(async (customer) => {
                const membership = await Membership.create({
                    userId: user?.id,
                    stripeCustomerId: customer.id,
                    plan: "LAUNCH",
                });
               await membership.save();
            }); 
            
            return membership;
        }
    } catch (error) {
        console.error("Error adding stripe: ", error);
    }
}