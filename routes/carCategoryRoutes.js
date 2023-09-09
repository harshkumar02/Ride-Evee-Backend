import express from "express";
const router = express.Router();
import { addCarCategory,updateCarCatCategory,deleteCarCategory } from "../controllers/carCategoryController.js";

router.post("/carCategory",addCarCategory);
router.put("/carCategory/:id",updateCarCatCategory);
router.delete("carCategory/:id",deleteCarCategory);

export default router;