import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

const User = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    refreshToken: {
      type: String,
    },
  },
  { timestamps: true }
);

User.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

User.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

User.methods.createJWT = function () {
  return jwt.sign({ userId: this._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_SECRET_EXPIRY,
  });
};

export default mongoose.model("User", User);
