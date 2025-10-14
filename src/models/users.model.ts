import * as yup from "yup";
import { ResultSetHeader } from "mysql2";
import { connectToMySql } from "../db/connectToMySql";
import { IUser } from "../utils/interface";

// Schema validasi menggunakan Yup
export const createUserDto = yup.object({
  fullName: yup
    .string()
    .required("Full name is required")
    .min(3, "Full name must be at least 3 characters"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  noTelp: yup
    .string()
    .required("Phone number is required")
    .matches(/^[0-9]+$/, "Phone must contain only digits"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
  profileImg: yup.string().nullable().default(null),
  role: yup.string().oneOf(["admin", "student"]).required("Role is required"),
});

export type CreateUserDto = yup.InferType<typeof createUserDto>;

// Fungsi untuk berinteraksi dengan database
export const getAllUser = async () => {
  const db = await connectToMySql();
  const [rows] = await db.query(
    "SELECT users.id, users.fullName, users.email, users.noTelp, users.role, users.profileImg FROM users"
  );

  return rows as IUser[];
};

export const getOneUser = async (id: number): Promise<IUser | null> => {
  const db = await connectToMySql();
  const [rows]: any = await db.query("SELECT * FROM Users WHERE id = ?", [id]);

  return rows.length ? (rows[0] as IUser) : null;
};

export const createUser = async (data: CreateUserDto): Promise<IUser> => {
  // ✅ Validasi data menggunakan Yup
  const validatedData = await createUserDto.validate(data, {});

  const db = await connectToMySql();
  const [result] = await db.query<ResultSetHeader>(
    "INSERT INTO users (fullName, email, noTelp, password, profileImg, role) VALUES (?, ?, ?, ?, ?, ?)",

    [
      validatedData.fullName,
      validatedData.email,
      validatedData.noTelp,
      validatedData.password,
      validatedData.profileImg,
      validatedData.role,
    ]
  );

  return {
    id: result.insertId,
    ...validatedData,
  } as IUser;
};

export const updateUser = async (
  id: number,
  data: CreateUserDto
): Promise<IUser> => {
  // ✅ Validasi data menggunakan Yup
  const validatedData = await createUserDto.validate(data, {});

  const db = await connectToMySql();
  const [result] = await db.query<ResultSetHeader>(
    "UPDATE users SET fullName = ?, email = ?, noTelp = ?, password = ?, profileImg = ?, role = ? WHERE id = ?",
    [
      validatedData.fullName,
      validatedData.email,
      validatedData.noTelp,
      validatedData.password,
      validatedData.profileImg,
      validatedData.role,
      id,
    ]
  );

  if (result.affectedRows === 0) {
    throw new Error("User not found");
  }

  const updatedUser = await getOneUser(id);

  if (!updatedUser) {
    throw new Error("User not found after update");
  }

  return updatedUser;
};

export const removeUser = async (id: number): Promise<boolean> => {
  const db = await connectToMySql();
  const [result]: any = await db.query("DELETE FROM Users WHERE id = ?", [id]);

  return result.affectedRows > 0;
};
