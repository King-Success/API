import { Router } from "express";
import Controller from "../controller";

const router = Router();

router.get("/api/stocks", Controller.getAll);

export default router;
