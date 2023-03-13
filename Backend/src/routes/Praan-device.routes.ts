import { Router } from "express";
import { authenticateUser } from "../middleware/auth";
import PraanDeviceController from "../controllers/Praan-device.controller";
import multer from "multer";

const initDeviceRoutes = () => {
  const DeviceRouter: Router = Router();

  // Route to pull data for specific devices
  DeviceRouter.get("/", authenticateUser, PraanDeviceController.getDeviceData);

  // Route to pull PM1 data from device
  DeviceRouter.get("/pm1", authenticateUser, PraanDeviceController.getPM1);

  // Route to pull PM25 data from device
  DeviceRouter.get("/pm25", authenticateUser, PraanDeviceController.getPM25);

  // Route to pull PM10 data from device
  DeviceRouter.get("/pm10", authenticateUser, PraanDeviceController.getPM10);

  // Route to filter device data based on date
  DeviceRouter.post("/filter", authenticateUser, PraanDeviceController.filter);

  DeviceRouter.post(
    "/upload",
    multer().single("file"),
    authenticateUser,
    PraanDeviceController.upload
  );

  return DeviceRouter;
};

export default initDeviceRoutes;
