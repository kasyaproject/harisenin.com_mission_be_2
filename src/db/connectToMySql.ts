import mysql from "mysql2/promise";
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_USER } from "../utils/env";

export const connectToMySql = async () => {
  const db = await mysql.createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
  });

  console.log("✅ Connected to MySQL Database (Pool)");

  return db;
};
