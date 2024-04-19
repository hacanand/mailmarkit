'use server'
import Email from "@/models/email.model"
import { connectDb } from "@/shared/libs/db"
export const deleteEmail = async ({ emailId }: { emailId: string }) => {
    try {
        await connectDb()
        const email = await Email.findByIdAndDelete(emailId)
        return {message: 'Email deleted successfully'}
    } catch (error) {
        console.log('Error deleting email', error)
    }
}