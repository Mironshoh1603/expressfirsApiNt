import { Router } from "express";
import fs from "fs";
import {
  createCar,
  getAllCars,
  getCarColr,
  updatePathcCar,
  updatPutCar,
} from "../controllers/car.controller.js";

let router = new Router();

router.get("/", getAllCars).post("/", createCar);

router.get("/:color/:id", getCarColr);

router.patch("/:id", updatePathcCar).put("/:id", updatPutCar);

export default router;
