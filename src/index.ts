import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { PORT } from "./utils/env";
import { connectToMySql } from "./db/connectToMySql";

import productsRouter from "./routes/product.route";
import userRouter from "./routes/user.route";
import categoryRouter from "./routes/category.route";

async function init() {
  try {
    // Koneksi ke MySQL
    connectToMySql();

    const app = express();

    dotenv.config();
    app.use(cors());
    app.use(bodyParser.json()); // Untuk membaca json dari req.body
    app.use(express.urlencoded({ extended: true })); // (Opsional) Untuk form-data

    app.get("/", (req, res) => {
      res.status(200).json({
        message: "Welcome to API for App Video Belajar by Andika Syamsiana ☕",
      });
    });
    // Import routes
    app.use("/api", [userRouter, categoryRouter, productsRouter]);

    // Jalankan server
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

init();
