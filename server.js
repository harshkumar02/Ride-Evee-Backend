import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/connectdb.js";
import userRoutes from "./routes/userRoutes.js";
import driverRoutes from "./routes/driverRoutes.js";

dotenv.config();
const MONGO_URI = process.env.MONGO_URI;
connectDB(MONGO_URI);

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running....");
});
// routes
app.use("/api/user", userRoutes);
app.use("/api/driver", driverRoutes);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in mode on port http://localhost:${PORT}`)
);
