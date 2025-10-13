import express from "express";
import userController from "../controllers/user.controller";

const router = express.Router();

router.get("/users", userController.findAll);
router.get("/users/:id", userController.getUserById);
router.post("/users", userController.createUser);
router.put("/users/:id", userController.updateUser);
router.delete("/users/:id", userController.deleteUser);

export default router;
