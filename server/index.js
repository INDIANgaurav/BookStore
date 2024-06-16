import express from "express";
import dotenv from "dotenv";
const app = express();
import cors from "cors";
import bookRoute from "./routes/bookRoute.js";
import userRoute from "./routes/userRoute.js";
dotenv.config();
import { connectDB } from "./connectDb/connectDB.js";
const PORT = process.env.PORT || 5000;
connectDB();
app.use(express.json());
app.use(
  cors({
    origin:"http://localhost:5173"
  } )
);
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/book", bookRoute);
app.use("/user" , userRoute)
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
