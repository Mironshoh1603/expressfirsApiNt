import env from "dotenv";
env.config();

const port = process.env.PORT || 3000;
import app from "./app.js";
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
