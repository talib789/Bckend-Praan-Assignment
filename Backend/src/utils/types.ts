import { ObjectId } from "mongoose";

export type User = {
  _id: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
};
