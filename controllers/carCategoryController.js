<<<<<<< HEAD
import CarCatModel from '../models/CarCategory/carCategory.js';

=======
import CarCatModel from "../models/CarCategory.js";
>>>>>>> e6f7a51fc190c8825b897af7ae8c531e4cde727d
const addCarCategory= async (req,res)=>{
    const {carCategory}=req.body;
    if(carCategory){
        const carCat = await CarCatModel.findOne({ carCategory:carCategory });
    if(carCat){
<<<<<<< HEAD
        res.json({ status: "failed", message: "car Category already exists" });
=======
        res.status(400).json({message: "car Category already exists" });
>>>>>>> e6f7a51fc190c8825b897af7ae8c531e4cde727d
    }
    else{
        try{
            const newCarCategory = new CarCatModel({
                carCategory:carCategory,
            });
<<<<<<< HEAD
            await  newCarCategory.save();
            res.json({status:"success", message:"car category is added"});
        }
        catch(error){
            console.log(error);
            res.json({ status: "failed", message: "Unable to add car category"});
        }
    }
    }else{
        res.json({ status: "failed", message: "Provide car category" });
=======
            const carCatDoc = await  newCarCategory.save();
            res.status(200).json({  message:"car category is added",carCatDoc});
        }
        catch(error){
            console.log(error);
            res.status(400).json({error:error, message: "Unable to add car category"});
        }
    }
    }else{
        res.status(400).json({ message: "Provide car category" });
>>>>>>> e6f7a51fc190c8825b897af7ae8c531e4cde727d
    }
    
}

const deleteCarCategory = async (req,res)=>{
<<<<<<< HEAD
    const {carCategory}=req.body;
    if(carCategory){
        const carCat = await CarCatModel.findOne({ carCategory:carCategory });
    if(carCat){
        
                try{
                const result= await CarCatModel.deleteOne({carCategory});
                console.log(result);
                res.json({ status: "success", message: "car category deleted" });
                }catch(err){
                console.log(err);
                res.json({ status: "failed", message: "Unable to delete location"});
                }  
        }
        else{
            res.json({ status: "failed", message: "car Category doesn't exists" });
        }
    }else{
        res.json({ status: "failed", message: "Provide Car Category." });
=======
    const {id}=req.params.id;
    if(id){
        const carCat = await CarCatModel.findById(id);
    if(carCat){
        
                try{
                const result= await CarCatModel.deleteOne({id});
                console.log(result);
                res.status(200).json({  message: "car category deleted" });
                }catch(err){
                console.log(err);
                res.status(400).json({error:err, message: "Unable to delete location"});
                }  
        }
        else{
            res.status(400).json({ message: "car Category doesn't exists" });
        }
    }else{
        res.status(400).json({ message: "Provide Car Category." });
>>>>>>> e6f7a51fc190c8825b897af7ae8c531e4cde727d
    }
}

const updateCarCatCategory = async (req,res)=>{
<<<<<<< HEAD
    const {carCategory,newcarCategory} = req.body;
    if(carCategory){
        const carCat = await CarCatModel.findOne({carCategory: carCategory });
        if(carCat){
                try{
=======
    const {id}=req.params.id;
    const {newcarCategory,noOfSeats,categoryDescription} = req.body;
    if(id){
        const carCat = await CarCatModel.findById(id);
        if(carCat){
                try{
                if(!newcarCategory){
                    newcarCategory=carCat.carCategory;
                }
                if(!noOfSeats){
                    noOfSeats=carCat.noOfSeats;
                }
                if(!categoryDescription){
                    categoryDescription=carCat.categoryDescription;
                }
>>>>>>> e6f7a51fc190c8825b897af7ae8c531e4cde727d
                const result= await CarCatModel.findByIdAndUpdate(
                    { _id: carCat.id },
                    {
                        carCategory:newcarCategory,
<<<<<<< HEAD
                    }
                );
                console.log(result);
                res.json({ status: "success", message: "car category updated" });
                }catch(err){
                console.log(err);
                res.json({ status: "failed", message: "Unable to update car category"});
                }  
        }
        else{
            res.json({ status: "failed", message: "car category doesn't exists" });
        }
    }else{
        res.json({ status: "failed", message: "Provide car category" });
    }
}

export {addCarCategory, updateCarCatCategory, deleteCarCategory};
=======
                    },
                    {
                        noOfSeats:noOfSeats,
                    },
                    {
                        categoryDescription:categoryDescription,
                    }
                );
                console.log(result);
                res.status(200).json({  message: "car category updated",result });
                }catch(err){
                console.log(err);
                res.status(400).json({error:err, message: "Unable to update car category"});
                }  
        }
        else{
            res.status(400).json({message: "car category doesn't exists" });
        }
    }else{
        res.status(400).json({ message: "Provide car category" });
    }
}

const allCarCategory=async(req,res)=>{
    try {
        const categories = await CarCatModel.find({},'carCatgory'); 
        if(categories===0){
            res.status(400).json({message:"No categories found"});
        }else{
            res.status(200).json({categories});
        }
    } catch (error) {
        console.log(error);
        res.status(400).json({message:"retry please."});
    }
}

export {addCarCategory, updateCarCatCategory, deleteCarCategory,allCarCategory};
>>>>>>> e6f7a51fc190c8825b897af7ae8c531e4cde727d
