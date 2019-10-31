import { Router } from "express";
import StockController from "../controller";
import UserController from "../controller/users";
import { verifyUser } from "../helper";

const router = Router();

router.get("/api/stocks", StockController.getAll);
router.post("/api/users/register", UserController.register);
router.post("/api/users/login", UserController.login);
router.get("/api/users/dashboard", verifyUser, StockController.myStock);
// router.get()

export default router;
