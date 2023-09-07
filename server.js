import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/connectdb.js";
import userRoutes from "./routes/userRoutes.js";
import driverRoutes from "./routes/driverRoutes.js";
import cookieSession from "cookie-session";
import passport from "passport";
import cors from "cors";
import passportSetup from "./utils/passport.js";
import GoogleAuth from "./routes/googleAuthRoutes.js";

dotenv.config();
const MONGO_URI = process.env.MONGO_URI;
const KEYS = process.env.KEY;
connectDB(MONGO_URI);

const app = express();

app.use(express.json());
app.use(
  cookieSession({
    name: "session",
    keys: [KEYS],
    maxAge: 24 * 60 * 60 * 100,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET, POST,PUT,DELETE,UPDATE",
    credential: true,
  })
);

app.get("/", (req, res) => {
  res.send("API is running....");
});
// routes
app.use("/api/user", userRoutes);
app.use("/api/driver", driverRoutes);
app.use("/googleAuth", GoogleAuth);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in mode on port http://localhost:${PORT}`)
);
