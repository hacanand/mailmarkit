import mongoose from "mongoose";
import { Schema } from "mongoose";
const subscriberSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    newsLetterOwnerId: {
      type: String,
    },
    source: {
      type: String,
      default: "mailmarkit web app",
    },
    status: {
      type: String,
      default:"subscribed",
    },
   
  },
  { timestamps: true }
);
const Subscriber =
  mongoose.models.Subscribers ||
  mongoose.model("Subscribers", subscriberSchema);
export default Subscriber;
