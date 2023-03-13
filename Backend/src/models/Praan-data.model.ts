import { Schema } from "mongoose";
import dataBaseConnect from "../configs/connectDB";

const DataSchema = new Schema(
  {
    device: {
      type: String,
      required: true,
    },
    t: {
      type: String,
      required: true,
    },
    w: {
      type: Number,
      required: true,
    },
    h: {
      type: String,
      required: true,
    },
    p1: {
      type: Number,
      required: true,
    },
    p25: {
      type: Number,
      required: true,
    },
    p10: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const DeviceData = dataBaseConnect.model("DeviceData", DataSchema);
export default DeviceData;
