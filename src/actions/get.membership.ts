'use server'

import Membership from "@/models/membership.model";
import { connectDb } from "@/shared/libs/db";
import { currentUser } from "@clerk/nextjs";

export const getMembership = async ( ) => {
    try {
        await connectDb();
        const user = await currentUser();
        const membership = await Membership.findOne({ userId:user?.id });
        return membership;
    } catch (error) {
        console.error('Error getting membership: ', error)
    }
}