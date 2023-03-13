import { Request, Response } from "express";
import UserModel from "../models/user.model";
import { generateAuthToken } from "../utils/generateAuthToken";
import { User } from "../utils/types";
const bcrypt = require("bcrypt");

const userController = () => {};

userController.register = async (req: Request, res: Response) => {
  const email: string = req.body.email;
  const password: string = req.body.password;
  if (!email && password) {
    return res.status(400).send("Please Enter Email/Password");
  }
  let user = await UserModel.findOne({ email });
  console.log(user);
  if (user) {
    return res.status(400).send("User already exists");
  }
  const salt = await bcrypt.genSalt(10);
  const hashPassword: string = await bcrypt.hash(password, salt);
  const newUser: User | any = await UserModel.create({
    email,
    password: hashPassword,
  });
  const token = generateAuthToken(newUser);
  return res.send(token);
};

userController.login = async (req: Request, res: Response) => {
  const email: string = req.body.email;
  const password: string = req.body.password;
  if (!email && password) {
    return res.status(400).send("Please Enter Email/Password");
  }
  let user: any = await UserModel.findOne({ email });
  if (!user) {
    return res.status(400).send("User does not exists");
  }
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) {
    return res.status(400).send("Invalid email or password...");
  }
  const token = generateAuthToken(user);
  res.send(token);
};


export default userController;
