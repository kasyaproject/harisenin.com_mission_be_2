import { Request, Response } from "express";
import {
  createMateri,
  getAllMateris,
  getOneMateri,
  removeMateri,
  updateMateri,
} from "../models/materis.model";
import response from "../utils/response";

export default {
  findAll: async (req: Request, res: Response) => {
    try {
      const materi = await getAllMateris();

      response.success(res, materi, "Get All Materi success");
    } catch (err) {
      response.error(res, err, "Failed to get Materi");
    }
  },

  getOnebyId: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const materi = await getOneMateri(Number(id));

      if (materi) {
        response.success(res, materi, "Get Materi by ID success");
      } else {
        response.notFound(res, "Materi not found");
      }
    } catch (err) {
      response.error(res, err, "Failed to get Materi by ID");
    }
  },

  createMateri: async (req: Request, res: Response) => {
    try {
      const materi = await createMateri(req.body);

      response.success(res, materi, "Create Materi success");
    } catch (err) {
      response.error(res, err, "Failed to create Materi");
    }
  },

  updateMateri: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const materi = await updateMateri(Number(id), req.body);

      response.success(res, materi, "Update Materi success");
    } catch (err) {
      response.error(res, err, "Failed to update Materi");
    }
  },

  deleteMateri: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      await removeMateri(Number(id));

      response.success(res, null, "Delete Materi success");
    } catch (err) {
      response.error(res, err, "Failed to delete Materi");
    }
  },
};
