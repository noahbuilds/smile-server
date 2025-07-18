import express from "express";
import cors from "cors";
import livenessRoutes from "./routes/liveness.routes";
import errorHandler from "./middlewares/error.middleware";

export const app = express();

app.use(cors());
app.use(express.json({ limit: "5mb" }));

app.use("/api/v1/liveness", livenessRoutes);
app.get("*", (req, res) => {
  res.status(404).json({ message: "Route not found" });
});
app.use(errorHandler);
