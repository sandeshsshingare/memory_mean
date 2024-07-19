import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import { router } from "./routes/posts.js";
const app = express();
const MONGO_CONNECT_STR =
  "mongodb+srv://sandeshshingare12:sandeshshingare@memory.mr73h69.mongodb.net/?retryWrites=true&w=majority&appName=memory";
const PORT = process.env.PORT || 8080;

app.use(cors());
//imports ends
app.use(express.json());
app.use("/posts", router);

mongoose
  .connect(MONGO_CONNECT_STR)
  .then(() => {
    console.log(`Mongo connection successfull...`);
  })
  .catch((err) => {
    console.log(err.message);
  });

app.listen(PORT, () => {
  console.log(`Server is running on PORT:${PORT}`);
});
