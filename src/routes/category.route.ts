import express from "express";
import categoryController from "../controllers/category.controller";

const router = express.Router();

router.get("/categories", categoryController.findAll);
router.get("/categories/:id", categoryController.getCategoryById);
router.post("/categories", categoryController.createCategory);
router.put("/categories/:id", categoryController.updateCategory);
router.delete("/categories/:id", categoryController.deleteCategory);

export default router;
