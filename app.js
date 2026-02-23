import express from "express";

import bodyParser from "body-parser";

import carRouter from "./routes/car.route.js";
import userRouter from "./routes/user.route.js";
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/v1/cars", carRouter);
app.use("/api/v1/users", userRouter);

app.use((req, res, next) => {
  console.log("request tushdi");
  next();
});

export default app;
