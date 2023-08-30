import CarCatModel from '../models/CarCategory/carCategory.js';

const addCarCategory= async (req,res)=>{
    const {carCategory}=req.body;
    if(carCategory){
        const carCat = await CarCatModel.findOne({ carCategory:carCategory });
    if(carCat){
        res.json({ status: "failed", message: "car Category already exists" });
    }
    else{
        try{
            const newCarCategory = new CarCatModel({
                carCategory:carCategory,
            });
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
    }
}

const updateCarCatCategory = async (req,res)=>{
    const {carCategory,newcarCategory} = req.body;
    if(carCategory){
        const carCat = await CarCatModel.findOne({carCategory: carCategory });
        if(carCat){
                try{
                const result= await CarCatModel.findByIdAndUpdate(
                    { _id: carCat.id },
                    {
                        carCategory:newcarCategory,
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