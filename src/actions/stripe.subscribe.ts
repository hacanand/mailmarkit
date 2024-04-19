'use server'
import Membership from '@/models/membership.model';
import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2024-04-10'
}
)
export const stripeSubscribe = async ({ price, userId }: {   price: string, userId:string}) => {
    try {
        const stripeCustomerId = await Membership.findOne({ userId })
       // console.log(stripeCustomerId)
        const checkoutSession = await stripe.checkout.sessions.create({
          mode: "subscription",
          customer: stripeCustomerId?.stripeCustomerId!, 
          line_items: [
            {
              price: price,
              quantity: 1,
            },
          ],
          success_url: `${process.env.NEXT_PUBLIC_WEB_URL}/success`,
          cancel_url: `${process.env.NEXT_PUBLIC_WEB_URL}/cancel`,
          subscription_data: {
            metadata: {
              payingUserId: userId,
            },
          },
        });
        if (!checkoutSession.url) {
            return {
                message:'Could not create checkout session!'
            }
        }
      return checkoutSession?.url;
    } catch (error) {
        console.error('Error subscribing to stripe: ', error)
    }
}