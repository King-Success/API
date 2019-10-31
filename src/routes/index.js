import { Router } from "express";
import StockController from "../controller";
import UserController from "../controller/users";

const router = Router();

router.get("/api/stocks", StockController.getAll);
router.post("/api/users/register", UserController.register);
router.post("/api/users/login", UserController.login);

export default router;
