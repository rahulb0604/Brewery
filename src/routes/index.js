import express from "express";
import userRoute from "./user.route.js"
import reviewRoute from "./review.route.js"

const router = express.Router();

const path = "/api-v1/";

router.use(`${path}user`,userRoute);
router.use(`${path}review`,reviewRoute);

export default router;