import { Router } from "express";
import { handleLiveness } from "../controllers/liveness.controller";

const router = Router();

router.post("/", handleLiveness);

export default router;
