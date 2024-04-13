'use server'
import { connectDb } from '../shared/libs/db'
import Email from '../models/email.model'

export const GetEmailDetails = async ({ newsLetterOwnerId, title }: { newsLetterOwnerId: string; title: string; }) => {
    try {
        await connectDb();
        const email = await Email.findOne({
            newsLetterOwnerId,
            title
        });
        return email;
    }
    catch (error) {
        console.log('Error getting email details', error);
    }
}
