import { Request, Response } from "express";
import { getAllProducts } from "../models/product.model";
import response from "../utils/response";

export default {
  async findAll(req: Request, res: Response) {
    try {
      const products = await getAllProducts();

      res.json(products);
    } catch (err) {
      response.error(res, err, "Failed to get Products");
    }
  },
};
