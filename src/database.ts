import mongoose from "mongoose";

mongoose
  .connect(`${process.env.MONGODB_URL}`)
  .then((db) => console.log("db is connected"))
  .catch((err) => console.log(err));
