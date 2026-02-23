import { Router } from "express";
import fs from "fs";
import { registerController } from "../controllers/user.controller.js";

let router = new Router();
// router.get("/", (req, res) => {
//   res.json({ data: "useralr" });
// });

router.post("/register", registerController);
export default router;
