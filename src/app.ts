import express from "express";
import cors from "cors";
import livenessRoutes from "./routes/liveness.routes";
import errorHandler from "./middlewares/error.middleware";

export const app = express();

app.use(cors());
app.use(express.json({ limit: "5mb" }));

app.use("/api/v1/liveness", livenessRoutes);
app.use(errorHandler);
