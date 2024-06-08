import User from "../models/User.model.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const auth = async (req, res, next) => {
  try {
    console.log(
      req.cookies?.accessToken ||
        req.header("Authorization")?.replace("Bearer ", "")
    );
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      throw new Error("Unauthorized request");
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const user = await User.findById(decodedToken?.userId);

    if (!user) {
      throw new Error("Invalid Access Token");
    }

    req.user = user;
    next();
  } catch (error) {
    console.log("ERROR: While Token Verification", error);
    res.status(401).json({
      success: false,
      error: error.message,
      message: "Invalid Token!!",
    });
  }
};
export default auth;
