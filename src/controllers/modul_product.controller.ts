import { Request, Response } from "express";
import {
  addModultoProduct,
  getModulbyProduct,
  removeModulFromProduct,
} from "../models/modul_products.model";
import response from "../utils/response";

export default {
  // Get modul by product id
  getModulbyProduct: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const modul = await getModulbyProduct(Number(id));

      response.success(res, modul, "Get Modul by Product ID success");
    } catch (err) {
      response.error(res, err, "Failed to get Modul by Product ID");
    }
  },

  addModulProduct: async (req: Request, res: Response) => {
    try {
      const modul = await addModultoProduct(req.body);

      response.success(res, modul, "Add Modul Product success");
    } catch (err) {
      response.error(res, err, "Failed to add Modul Product");
    }
  },

  // Hapus modul dari product berdasarkan id modul
  removeModulProduct: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      await removeModulFromProduct(Number(id), req.body);

      response.success(res, null, "Delete Modul success");
    } catch (err) {
      response.error(res, err, "Failed to delete Modul");
    }
  },
};
