import { Router } from "express";
import { UserController } from "../controllers/UserController";

const router = Router();
const userController = new UserController();

router.post("/users", (req, res) => userController.createUser(req, res));
router.get("/users/:id", (req, res) => userController.getUser(req, res));
router.post("/login", (req, res) => userController.login(req, res)); // 新增 login 路由

export default router;