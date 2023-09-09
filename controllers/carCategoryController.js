import CarCatModel from "../models/CarCategory.js";
const addCarCategory= async (req,res)=>{
    const {category, includes, noOfSeats}=req.body;

        const carCat = await CarCatModel.findOne({ category: category });
    if(carCat){
        res.status(400).json({message: "car Category already exists" });
    }
        try{
            const newCarCategory = new CarCatModel({
                category: category,
                includes: includes,
                noOfSeats: noOfSeats,
            });
            const data = await newCarCategory.save();
            res.status(200).json({ message:"car category is added", data: data});
        }
        catch(error){
            console.log(error);
            res.status(400).json({error: error, message: "Unable to add car category"});
        }
}

const deleteCarCategory = async (req,res)=>{
    const id = req.params.id;
        const carCat = await CarCatModel.findById(id);
    if(carCat){
        try{
        const data = await CarCatModel.deleteOne(id);
        console.log(result);
        res.status(200).json({  message: "car category deleted" });
        }catch(err){
            console.log(err);
            res.status(400).json({error: err, message: "Unable to delete location"});
        }  
    }
    else{
        res.status(400).json({ message: "car Category doesn't exists" });
    }
}

const updateCarCatCategory = async (req,res)=>{
    const id = req.params.id;
    const {category, noOfSeats, includes} = req.body;
    if(id){
        const carCat = await CarCatModel.findById(id);
        if(carCat){
                try{
                if(!category){
                    category= carCat.category;
                }
                if(!noOfSeats){
                    noOfSeats = carCat.noOfSeats;
                }
                if(!includes){
                    includes = carCat.includes;
                }
                const data = await CarCatModel.findByIdAndUpdate(
                    { _id: carCat.id },
                    {
                        category: category,
                    },
                    {
                        noOfSeats: noOfSeats,
                    },
                    {
                        includes: includes,
                    }
                );
                console.log(data);
                res.status(200).json({ message: "car category updated", data: data });
                }catch(err){
                console.log(err);
                res.status(400).json({error: err, message: "Unable to update car category"});
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
        const categories = await CarCatModel.find({}); 
        if(!categories){
            res.status(400).json({message:"No categories found"});
        }else{
            res.status(200).json({ message: "All categories", data: categories });
        }
    } catch (error) {
        console.log(error);
        res.status(400).json({message:"retry please."});
    }
}

export {addCarCategory, updateCarCatCategory, deleteCarCategory,allCarCategory};
