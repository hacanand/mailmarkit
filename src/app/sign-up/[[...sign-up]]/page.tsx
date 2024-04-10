'use client'
import { SignUp } from "@clerk/nextjs";
const Page = () => {
    return (
        <div className="w-full flex h-screen items-center justify-center">
            <SignUp signInUrl="/sign-up"/>
        </div>
    );
}
export default Page