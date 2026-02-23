import express from "express";

import bodyParser from "body-parser";

import carRouter from "./routes/car.route.js";
import userRouter from "./routes/user.route.js";
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log("request tushdi");
  next();
});

app.use("/api/v1/cars", carRouter);
app.use("/api/v1/users", userRouter);

app.use((err, req, res, next) => {
  console.log(process.env.NODE_ENV);
  let isDev = process.env.NODE_ENV === "DEVELOPMENT";
  // res.status(404).send(`Error texti : ${err.message}`);
  res.status(404).json({
    status: "Failed",
    message: err.message,
    ...(isDev && { stack: err.stack }),
  });
});

export default app;
