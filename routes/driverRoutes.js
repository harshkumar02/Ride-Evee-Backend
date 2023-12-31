import express from "express";
const router = express.Router();
import DriverController from "../controllers/driverController.js";

router.post("/register", DriverController.driverRegistration);
router.post("/login", DriverController.driverLogin);
router.put("/:id",DriverController.driverUpdateProfile);

export default router;
