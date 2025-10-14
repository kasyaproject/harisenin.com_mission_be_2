import { Request, Response } from "express";
import {
  createModul,
  getAllModuls,
  getOneModul,
  removeModul,
  updateModul,
} from "../models/moduls.model";
import response from "../utils/response";

export default {
  findAll: async (req: Request, res: Response) => {
    try {
      const moduls = await getAllModuls();

      response.success(res, moduls, "Get All Moduls success");
    } catch (error) {
      response.error(res, error, "Failed to get Moduls");
    }
  },

  getOnebyId: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const modul = await getOneModul(Number(id));

      if (modul) {
        response.success(res, modul, "Get Modul by ID success");
      } else {
        response.notFound(res, "Modul not found");
      }
    } catch (err) {
      response.error(res, err, "Failed to get Modul by ID");
    }
  },

  createModul: async (req: Request, res: Response) => {
    try {
      const modul = await createModul(req.body);

      response.success(res, modul, "Create Modul success");
    } catch (err) {
      response.error(res, err, "Failed to create Modul");
    }
  },

  updateModul: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const modul = await updateModul(Number(id), req.body);

      response.success(res, modul, "Update Modul success");
    } catch (err) {
      response.error(res, err, "Failed to update Modul");
    }
  },

  deleteModul: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      await removeModul(Number(id));

      response.success(res, null, "Delete Modul success");
    } catch (err) {
      response.error(res, err, "Failed to delete Modul");
    }
  },
};
