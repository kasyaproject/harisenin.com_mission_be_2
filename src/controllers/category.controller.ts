import { Request, Response } from "express";
import {
  createCategory,
  deleteCategory,
  getAllCategories,
  getOneCategory,
  updateCategory,
} from "../models/categories.model";
import response from "../utils/response";

export default {
  async findAll(req: Request, res: Response) {
    try {
      const category = await getAllCategories();

      response.success(res, category, "Get All Category success");
    } catch (err) {
      response.error(res, err, "Failed to get Category");
    }
  },

  async getCategoryById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const category = await getOneCategory(Number(id));

      if (category) {
        response.success(res, category, "Get Category by ID success");
      } else {
        response.notFound(res, "Category not found");
      }
    } catch (err) {
      response.error(res, err, "Failed to get Category by ID");
    }
  },

  async createCategory(req: Request, res: Response) {
    try {
      const category = await createCategory(req.body);

      response.success(res, category, "Create Category success");
    } catch (err) {
      response.error(res, err, "Failed to create Category");
    }
  },

  async updateCategory(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const category = await updateCategory(Number(id), req.body);

      response.success(res, category, "Update Category success");
    } catch (err) {
      response.error(res, err, "Failed to update Category");
    }
  },

  async deleteCategory(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await deleteCategory(Number(id));

      response.success(res, null, "Delete Category success");
    } catch (err) {
      response.error(res, err, "Failed to delete Category");
    }
  },
};
