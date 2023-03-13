import express, { Express } from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import dataBaseConnect from "../configs/connectDB";
import initRoutes from "../routes/route";

const app: Express = express();
app.use(cors());
app.use(express.json());

console.assert(dataBaseConnect);
dotenv.config();
initRoutes(app);

app.listen(3000, async () => {
  console.log('API Server Running at Port Number 3000');
});
