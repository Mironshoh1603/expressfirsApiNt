import { Router } from "express";
import fs from "fs";
import {
  loginController,
  registerController,
  allUsersController,
  GetUserByUsername,
  createUserController,
} from "../controllers/user.controller.js";
import checkBasicAuth from "../middlewares/basic.middleware.js";

let router = new Router();
// router.get("/", (req, res) => {
//   res.json({ data: "useralr" });
// });

router.post("/register", registerController);
router.post("/login", loginController);
router.get("/", checkBasicAuth, allUsersController);
router.post("/", checkBasicAuth, createUserController);

router.get("/:username", checkBasicAuth, GetUserByUsername);
export default router;
