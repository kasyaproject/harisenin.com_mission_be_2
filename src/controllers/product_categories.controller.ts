import { Request, Response } from "express";
import response from "../utils/response";
import {
  addCategorytoProduct,
  getCategorybyProduct,
  removeCategoryFromProduct,
} from "../models/product_categories.model";

export default {
  getCategorybyProduct: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const modul = await getCategorybyProduct(Number(id));

      response.success(res, modul, "Get Modul by Product ID success");
    } catch (err) {
      response.error(res, err, "Failed to get Modul by Product ID");
    }
  },

  addCategoryProduct: async (req: Request, res: Response) => {
    try {
      const modul = await addCategorytoProduct(req.body);

      response.success(res, modul, "Add Modul Product success");
    } catch (err) {
      response.error(res, err, "Failed to add Modul Product");
    }
  },

  removeCategoryFromProduct: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      await removeCategoryFromProduct(Number(id), req.body);

      response.success(res, null, "Delete Modul success");
    } catch (err) {
      response.error(res, err, "Failed to delete Modul");
    }
  },
};
