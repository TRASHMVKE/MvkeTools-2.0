import express from "express";
import cors from "cors";
import routes from "./Routes/routes.js";
import pagesRoutes from "./Routes/pages.routes.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors(
    { origin: "http://localhost:5173", credentials: true },
    { credentials: true }
  )
);
app.use(express.json());
app.use(cookieParser());

app.use("/auth", routes);
app.use("/page", pagesRoutes);

export default app;
