import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import dbConnect from "./src/config/database.js";
import router from "./src/routes/index.js";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(
  cors({
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200,
  })
);
app.use(router);
app.use(cookieParser());

app.listen(process.env.PORT, () => {
  console.log(`Server is Started At PORT: ${process.env.PORT}`);
});

dbConnect();
