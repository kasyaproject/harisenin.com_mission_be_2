import { connectToMySql } from "../db/connectToMySql";
import { IProduct } from "../utils/interface";

export const getAllProducts = async () => {
  const db = await connectToMySql();
  const [rows] = await db.query("SELECT * FROM products");

  return rows as IProduct[];
};
