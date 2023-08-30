import express from "express";
const router = express.Router();
import { addLocation,deleteLocation,updateLocation } from "../controllers/locationController";

// Routes
router.post("/addLocation", addLocation);
router.delete("/deleteLocation/:id",deleteLocation);
router.put("/updateLocation/:id",updateLocation);

export default router;