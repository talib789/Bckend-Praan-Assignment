import { Schema } from "mongoose";
import dataBaseConnect from "../configs/connectDB";

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      minlength: 4,
      maxlength: 50,
    },
    password: {
      type: String,
      required: true,
      minlength: 4,
      maxlength: 10,
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = dataBaseConnect.model("user", UserSchema);
export default UserModel;
