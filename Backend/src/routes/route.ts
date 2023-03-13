//  eslint-disable sort-imports 
import { Express } from "express";
import initDeviceRoutes from "../routes/Praan-device.routes";
import initUserRoutes from "./user.routes";

const initRoutes = (app: Express) => {
  app.use("/user", initUserRoutes());
  app.use("/device", initDeviceRoutes());
  app.get("/", (req, res) => res.send("Serving Praan - backend API"));
};

export default initRoutes;
