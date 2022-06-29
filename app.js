import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes.js";
const app = express();

app.use(express.json());

// GGd6blofS1PbB7FI

app.use("/api", router);

mongoose
  .connect(
    "mongodb+srv://admin:GGd6blofS1PbB7FI@cluster0.ubm3vpa.mongodb.net/mern-auth?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(3333);
    console.log("Database is connected ");
  })
  .catch((err) => {
    console.log("luanda" + err.message);
  });
