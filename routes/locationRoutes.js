import express from "express";
const router = express.Router();
<<<<<<< HEAD
import { addLocation,deleteLocation,updateLocation } from "../controllers/locationController";

// Routes
router.post("/addLocation", addLocation);
router.delete("/deleteLocation/:id",deleteLocation);
router.put("/updateLocation/:id",updateLocation);
=======
import { addLocation,deleteLocation,updateLocation,allLocation } from "../controllers/locationController";

// Routes
router.get("/location", allLocation);
router.post("/location", addLocation);
router.delete("/location/:id",deleteLocation);
router.put("/location/:id",updateLocation);
>>>>>>> e6f7a51fc190c8825b897af7ae8c531e4cde727d

export default router;