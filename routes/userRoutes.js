import express from "express";
const router = express.Router();
import UserController from "../controllers/userControllers.js";
// import checkUserAuth from "../middlewares/auth-middleware.js";

router.post("/register", UserController.userRegistration);
router.post("/login", UserController.userLogin);
router.put("/update",UserController.userProfileUpdate);

export default router;
