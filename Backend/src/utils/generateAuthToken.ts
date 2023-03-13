import { User } from "./types";

const jwt = require("jsonwebtoken");

export const generateAuthToken = (user: User) => {
  const jwtSecretKey ="43798498ru9ur434575987u58u494320949";
  const token = jwt.sign({ _id: user._id, email: user.email }, jwtSecretKey);
  return token;
};
