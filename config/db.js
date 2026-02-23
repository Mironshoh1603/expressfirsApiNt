import mongoose from "mongoose";

let connectDb = () => {
  try {
    console.log("manmana");

    mongoose
      .connect(
        process.env.DB_URL.replace("<db_password>", process.env.DB_PASSWORD),
      )
      .then(() => {
        console.log("Db Connnected....");
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  } catch (error) {
    console.log("Db errro:", error);
  }
};

export default connectDb;
