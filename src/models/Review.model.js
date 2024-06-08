import mongoose from "mongoose";

const Review = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    brewId: {
      type: String,
      require: true,
    },
    review: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Review", Review);
