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

export interface ICategory {
  id: number;
  name: string;
  description: string;
}

export interface ITutor {
  id: number;
  fullName: string;
  avatarImg: string;
  title: string;
  companyName: string;
  jobTitle: string;
}

export interface IPretest {
  id: number;
  question: string;
  options: string[]; // Simpan sebagai JSON string
  correct_answer: string;
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
