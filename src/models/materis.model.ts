import * as yup from "yup";
import { ResultSetHeader } from "mysql2";
import { connectToMySql } from "../db/connectToMySql";
import { IMateri } from "../utils/interface";

// Schema validasi menggunakan Yup
export const createMateriDTO = yup.object({
  title: yup.string().required("Title is required"),
  content: yup.string().required("Content is required"),
  video_url: yup.string().required("Video URL is required"),
});

export type CreateMateriDto = yup.InferType<typeof createMateriDTO>;

export const getAllMateris = async () => {
  const db = await connectToMySql();
  const [rows] = await db.query("SELECT * FROM materis");

  return rows as IMateri[];
};

export const getOneMateri = async (id: number): Promise<IMateri | null> => {
  const db = await connectToMySql();
  const [rows]: any = await db.query("SELECT * FROM materis WHERE id = ?", [
    id,
  ]);

  return rows.length ? (rows[0] as IMateri) : null;
};

export const createMateri = async (data: CreateMateriDto): Promise<IMateri> => {
  // ✅ Validasi data menggunakan Yup
  const validatedData = await createMateriDTO.validate(data, {});

  const db = await connectToMySql();
  const [result] = await db.query<ResultSetHeader>(
    "INSERT INTO materis (title, content, video_url) VALUES (?, ?, ?)",
    [validatedData.title, validatedData.content, validatedData.video_url]
  );

  return {
    id: result.insertId,
    ...validatedData,
  } as IMateri;
};

export const updateMateri = async (
  id: number,
  data: CreateMateriDto
): Promise<IMateri> => {
  // ✅ Validasi data menggunakan Yup
  const validatedData = await createMateriDTO.validate(data, {});

  const db = await connectToMySql();
  const [result] = await db.query<ResultSetHeader>(
    "UPDATE materis SET title = ?, content = ?, video_url = ? WHERE id = ?",
    [validatedData.title, validatedData.content, validatedData.video_url, id]
  );

  if (result.affectedRows === 0) {
    throw new Error("Materi not found");
  }

  const updatedMateri = await getOneMateri(id);

  if (!updatedMateri) {
    throw new Error("Materi not found after update");
  }

  return updatedMateri;
};

export const removeMateri = async (id: number): Promise<void> => {
  const db = await connectToMySql();
  const [result] = await db.query<ResultSetHeader>(
    "DELETE FROM materis WHERE id = ?",
    [id]
  );

  if (result.affectedRows === 0) {
    throw new Error("Materi not found");
  }
};
