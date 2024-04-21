import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { connectDb } from "@/shared/libs/db";
import Subscriber from "@/models/subscriber.model";
import validateEmail from "@/shared/utils/VerifaliaApi";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const apiKey = data?.apiKey;
    const decoded: any = jwt.verify(apiKey, process.env.JWT_SECRET_KEY!);
    await connectDb();
    const isSubscriberExist = await Subscriber.findOne({
      email: decoded?.email,
    });
    if (isSubscriberExist) {
      return new NextResponse("You are already subscribed", { status: 400 });
    }
    //validate the email
    const validationResponse = await validateEmail({ email:data.email });
    if (validationResponse?.classification === "Undeliverable") {
      return { error: "Email is not valid" };
      }
      //create the subscriber
      const subscriber = await Subscriber.create({
        email:data.email,
        newsLetterOwnerId: decoded?.user?.id,
        source: "By API",
        status: "Subscribed",
      });
      
    return NextResponse.json(subscriber, { status: 201 });
  } catch (error) {
    return new NextResponse("internal error", { status: 500 });
  }
}
