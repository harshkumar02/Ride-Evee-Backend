import CarCatModel from "../models/CarCategory.js";
const addCarCategory= async (req,res)=>{
    const {carCategory}=req.body;
    if(carCategory){
        const carCat = await CarCatModel.findOne({ carCategory:carCategory });
    if(carCat){
        res.status(400).json({message: "car Category already exists" });
    }
    else{
        try{
            const newCarCategory = new CarCatModel({
                carCategory:carCategory,
            });
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
    }
    
}

const deleteCarCategory = async (req,res)=>{
    const {carCategory}=req.body;
    if(carCategory){
        const carCat = await CarCatModel.findOne({ carCategory:carCategory });
    if(carCat){
        
                try{
                const result= await CarCatModel.deleteOne({carCategory});
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
    }
}

const updateCarCatCategory = async (req,res)=>{
    const {carCategory,newcarCategory,noOfSeats,categoryDescription} = req.body;
    if(carCategory){
        const carCat = await CarCatModel.findOne({carCategory: carCategory });
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
                const result= await CarCatModel.findByIdAndUpdate(
                    { _id: carCat.id },
                    {
                        carCategory:newcarCategory,
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

export {addCarCategory, updateCarCatCategory, deleteCarCategory};