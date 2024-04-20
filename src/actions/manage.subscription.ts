'use server'
import { connectDb } from '@/shared/libs/db';
import React from 'react'
import Stripe from 'stripe';


export const manageSubscription = async ({ customerId }: { customerId:string }) => {
  try {
    await connectDb();
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: "2024-04-10",
    });
    const portalSession = await stripe.billingPortal.sessions.create({
        customer: customerId,
        return_url: `${process.env.NEXT_PUBLIC_WEB_URL}/dashboard`,
    });
    return portalSession.url;
  } catch (error) {
    console.error('Error managing subscription: ', error)
  }
};
 