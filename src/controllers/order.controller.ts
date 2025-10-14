import { Request, Response } from "express";
import {
  createOrder,
  getAllOrders,
  getOneOrder,
  getOrderbyUser,
} from "../models/orders.model";
import response from "../utils/response";

export default {
  findAll: async (req: Request, res: Response) => {
    try {
      const orders = await getAllOrders();

      response.success(res, orders, "Get All Orders success");
    } catch (err) {
      response.error(res, err, "Failed to get Orders");
    }
  },

  getOrderbyId: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const order = await getOneOrder(Number(id));

      if (order) {
        response.success(res, order, "Get Order by ID success");
      } else {
        response.notFound(res, "Order not found");
      }
    } catch (err) {
      response.error(res, err, "Failed to get Order by ID");
    }
  },

  getOrderbyUser: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const order = await getOrderbyUser(Number(id));

      if (order.length > 0) {
        response.success(res, order, "Get Order by User ID success");
      } else if (order.length === 0) {
        response.notFound(res, "Order not yet created");
      } else {
        response.notFound(res, "Order not found");
      }
    } catch (err) {
      response.error(res, err, "Failed to get Order by User ID");
    }
  },

  createOrder: async (req: Request, res: Response) => {
    try {
      const order = await createOrder(req.body);

      response.success(res, order, "Create Order success");
    } catch (err) {
      response.error(res, err, "Failed to create Order");
    }
  },
};
