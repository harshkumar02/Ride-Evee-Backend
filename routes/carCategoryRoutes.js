import express from "express";
const router = express.Router();
import { addCarCategory,updateCarCatCategory,deleteCarCategory } from "../controllers/carCategoryController";

router.post("/addCarCategory",addCarCategory);
router.put("/updateCarCategory/:id",updateCarCatCategory);
router.delete("/deleteCarCategory/:id",deleteCarCategory);

export default router;