import express, { Application } from "express";
import authRoutes from "./routes/auth";
import morgan from "morgan";

const app: Application = express();

//settings
app.set("port", process.env.PORT);

//middlewares
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/auth", authRoutes);

export default app;
