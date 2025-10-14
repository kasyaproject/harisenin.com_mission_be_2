import * as yup from "yup";
import { connectToMySql } from "../db/connectToMySql";
import { IPayment } from "../utils/interface";
import { ResultSetHeader } from "mysql2";

// Schema validasi menggunakan Yup
export const createPaymentDTO = yup.object({
  price: yup.number().required("Price is required"),
  discount: yup.number().required("Discount is required"),
  total_price: yup.number().required("Total Price is required"),
  status: yup.string().required("Status is required"),
  payment_method: yup.string().required("Payment Method is required"),
  payment_url: yup.string().required("Payment URL is required"),
});

export type CreatePaymentDto = yup.InferType<typeof createPaymentDTO>;

export const getAllPayments = async () => {
  const db = await connectToMySql();
  const [rows] = await db.query("SELECT * FROM payments");

  return rows as IPayment[];
};

export const getOnePayment = async (id: number): Promise<IPayment | null> => {
  const db = await connectToMySql();
  const [rows]: any = await db.query("SELECT * FROM payments WHERE id = ?", [
    id,
  ]);

  return rows.length ? (rows[0] as IPayment) : null;
};

export const createPayment = async (data: CreatePaymentDto) => {
  // ✅ Validasi data menggunakan Yup
  const validatedData = await createPaymentDTO.validate(data, {});

  const db = await connectToMySql();
  const [result] = await db.query<ResultSetHeader>(
    "INSERT INTO payments SET ?",
    [validatedData]
  );

  return {
    id: result.insertId,
    ...validatedData,
  } as IPayment;
};

export const paidPayment = async (id: number) => {
  try {
    const db = await connectToMySql();

    const [result] = await db.query<ResultSetHeader>(
      "UPDATE payments SET status = 'paid' WHERE id = ?",
      [id]
    );

    if (result.affectedRows === 0) {
      throw new Error("Payment not found");
    }

    const [rows]: any = await db.query("SELECT * FROM payments WHERE id = ?", [
      id,
    ]);

    if (!rows.length) {
      throw new Error("Failed to retrieve updated payment data");
    }

    return {
      message: "Payment status updated successfully",
      data: rows[0],
    };
  } catch (error) {
    console.error("Error updating payment status:", error);
    throw error;
  }
};

export const cancelledPayment = async (id: number) => {
  try {
    const db = await connectToMySql();

    const [result] = await db.query<ResultSetHeader>(
      "UPDATE payments SET status = 'cancelled' WHERE id = ?",
      [id]
    );

    if (result.affectedRows === 0) {
      throw new Error("Payment not found");
    }

    const [rows]: any = await db.query("SELECT * FROM payments WHERE id = ?", [
      id,
    ]);

    if (!rows.length) {
      throw new Error("Failed to retrieve updated payment data");
    }

    return {
      message: "Payment status updated successfully",
      data: rows[0],
    };
  } catch (error) {
    console.error("Error updating payment status:", error);
    throw error;
  }
};

export const pendingPayment = async (id: number) => {
  try {
    const db = await connectToMySql();

    const [result] = await db.query<ResultSetHeader>(
      "UPDATE payments SET status = 'pending' WHERE id = ?",
      [id]
    );

    if (result.affectedRows === 0) {
      throw new Error("Payment not found");
    }

    const [rows]: any = await db.query("SELECT * FROM payments WHERE id = ?", [
      id,
    ]);

    if (!rows.length) {
      throw new Error("Failed to retrieve updated payment data");
    }

    return {
      message: "Payment status updated successfully",
      data: rows[0],
    };
  } catch (error) {
    console.error("Error updating payment status:", error);
    throw error;
  }
};
