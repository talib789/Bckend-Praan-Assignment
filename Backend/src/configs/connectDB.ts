import mongoose, { Connection } from "mongoose";
const dataBaseConnect: Connection = mongoose.createConnection(
  "mongodb://localhost:27017/Praan--assignment"
);

dataBaseConnect.on("error", (err) => {
  console.log(`Error occured while connecting database`);
  throw new Error(`Database error occured ${err}`);
});

dataBaseConnect.once("open", () => {
  console.log(`Database connected successfully`);
});
export default dataBaseConnect;
