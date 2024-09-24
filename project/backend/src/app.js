import express, { json, urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const server = express();
server.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
server.use(json({ limit: "16kb" }));
server.use(urlencoded({ extended: true, limit: "16kb" }));
server.use(express.static("public"));
server.use(cookieParser());
export { server };
