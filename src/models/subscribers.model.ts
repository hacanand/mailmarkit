import mongoose from "mongoose";
const Schema = mongoose.Schema;
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
      default: "By mailmarkit website",
    },
    status: {
      type: String,
      default: "Subscribed",
    },
  },
  { timestamps: true }
);
const Subscriber =
  mongoose.model("Subscriber", subscriberSchema) || mongoose.models.Subscriber;
export default Subscriber;
