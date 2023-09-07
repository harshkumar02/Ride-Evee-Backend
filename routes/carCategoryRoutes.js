import express from "express";
const router = express.Router();
<<<<<<< HEAD
import { addCarCategory,updateCarCatCategory,deleteCarCategory } from "../controllers/carCategoryController";

router.post("/addCarCategory",addCarCategory);
router.put("/updateCarCategory/:id",updateCarCatCategory);
router.delete("/deleteCarCategory/:id",deleteCarCategory);
=======
import { addCarCategory,updateCarCatCategory,deleteCarCategory } from "../controllers/carCategoryController.js";

router.post("/carCategory",addCarCategory);
router.put("/carCategory/:id",updateCarCatCategory);
router.delete("carCategory/:id",deleteCarCategory);
>>>>>>> e6f7a51fc190c8825b897af7ae8c531e4cde727d

export default router;