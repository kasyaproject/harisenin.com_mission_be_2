import { Request, Response } from "express";
import response from "../utils/response";
import {
  addReviewtoProduct,
  getReviewbyProduct,
  removeReviewFromProduct,
} from "../models/product_reviews.model";

export default {
  getReviewsbyProduct: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const reviews = await getReviewbyProduct(Number(id));

      response.success(res, reviews, "Get Reviews by Product ID success");
    } catch (err) {
      response.error(res, err, "Failed to get Reviews by Product ID");
    }
  },

  addReviewProduct: async (req: Request, res: Response) => {
    try {
      const review = await addReviewtoProduct(req.body);

      response.success(res, review, "Add Review Product success");
    } catch (err) {
      response.error(res, err, "Failed to add Review Product");
    }
  },

  removeReviewFromProduct: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      await removeReviewFromProduct(Number(id), req.body);

      response.success(res, null, "Delete Review success");
    } catch (err) {
      response.error(res, err, "Failed to delete Review");
    }
  },
};
