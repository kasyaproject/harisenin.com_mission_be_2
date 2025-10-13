export interface IUser {
  id?: number;
  fullName: string;
  email: string;
  noTelp: string;
  profileImg: string;
  password: string;
  confirmPassword: string;
  role: "admin" | "student";
}

interface IProduct {
  id: string;
  image: string | null | undefined;
  title: string;
  desc: string;
  category: string[];

  author: string;
  authorImage: string;
  authorTitle: string;
  authorCompany: string;

  rating: number;
  review: number;
  price: number;
  discount: number;
}

export type { IProduct };
