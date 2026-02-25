import express from "express";

import bodyParser from "body-parser";

import carRouter from "./routes/car.route.js";
import userRouter from "./routes/user.route.js";
import errorHandler from "./middlewares/errror.middleware.js";
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log("request tushdi");
  next();
});

app.use("/api/v1/cars", carRouter);
app.use("/api/v1/users", userRouter);

app.use(errorHandler);

export default app;
