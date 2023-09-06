import express from "express";
const router = express.Router();

import { rideOne, rideQuery } from "../controllers/rideController.js";

router.get("/ride/:id",rideOne);
router.get("/ride",rideQuery);

export default router;