import express from "express";
const router = express.Router();
import { addLocation,deleteLocation,updateLocation,allLocation } from "../controllers/locationController";

// Routes
router.get("/location", allLocation);
router.post("/location", addLocation);
router.delete("/location/:id",deleteLocation);
router.put("/location/:id",updateLocation);

export default router;