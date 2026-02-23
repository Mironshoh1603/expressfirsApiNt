import env from "dotenv";
env.config();

const port = process.env.PORT || 3000;

import app from "./app.js";
import connectDb from "./config/db.js";

connectDb();
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
