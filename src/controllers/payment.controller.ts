import { Request, Response } from "express";
import {
  cancelledPayment,
  createPayment,
  getAllPayments,
  getOnePayment,
  paidPayment,
  pendingPayment,
} from "../models/payments.model";
import response from "../utils/response";

export default {
  findAll: async (req: Request, res: Response) => {
    try {
      const payments = await getAllPayments();

      response.success(res, payments, "Get All Payments success");
    } catch (err) {
      response.error(res, err, "Failed to get Payments");
    }
  },

  getOnebyId: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const payment = await getOnePayment(Number(id));

      if (payment) {
        response.success(res, payment, "Get Payment by ID success");
      } else {
        response.notFound(res, "Payment not found");
      }
    } catch (err) {
      response.error(res, err, "Failed to get Payment by ID");
    }
  },

  createPayment: async (req: Request, res: Response) => {
    try {
      const product = await createPayment(req.body);

      response.success(res, product, "Create Payment success");
    } catch (err) {
      response.error(res, err, "Failed to get create Payment");
    }
  },

  updateStatusPaid: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const payment = await paidPayment(Number(id));

      response.success(res, payment, "Update Payment paid success");
    } catch (err) {
      response.error(res, err, "Failed to update Payment paid");
    }
  },

  updateStatusCancelled: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const payment = await cancelledPayment(Number(id));

      response.success(res, payment, "Update Payment cancelled success");
    } catch (err) {
      response.error(res, err, "Failed to update cancelled Payment");
    }
  },

  updateStatusPending: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const payment = await pendingPayment(Number(id));

      response.success(res, payment, "Update Payment pending success");
    } catch (err) {
      response.error(res, err, "Failed to update pending Payment");
    }
  },
};
