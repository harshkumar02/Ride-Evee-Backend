import LocationModel from "../models/Location.js";

const addLocation= async (req,res)=>{
    const {cityState}=req.body;
    if(cityState){
        const location = await LocationModel.findOne({ cityState: cityState });
    if(location)
        res.status(400).json({ message: "Location already exists" })
    try{
        const newLocation = new LocationModel({
            cityState: cityState,
            status: true
        });
        const data = await newLocation.save();
        res.status(200).json({ message:"Location is added", data: data});
    }
    catch(error){
        console.log(error);
        res.status(400).json({ error: error, message: "Unable to add location"});
    }
    }else{
        res.status(400).json({ message: "Provide Location" });
    }
    
}

const deleteLocation = async (req,res)=>{
    const id = req.params.id
    const {cityState} = req.body;
    if(cityState){
        const location = await LocationModel.findById(id)
        if(location){
                try{
                const result= await LocationModel.deleteOne(id);
                console.log(result);
                res.status(200).json({  message: "Location deleted" });
                }catch(err){
                console.log(err);
                res.status(400).json({error:err, message: "Unable to delete location"});
                }  
        }
        else{
            res.status(400).json({message: "Location doesn't exists" });
        }
    }else{
        res.status(400).json({ message: "Provide Location" });
    }
}

const updateLocation = async (req,res)=>{
    const id = req.params.id
    const {status} = req.body
        const location = await LocationModel.findById(id)
        if(location){
                try{
                const data = await LocationModel.findByIdAndUpdate(
                    { _id: id },
                    {
                        status: status,
                    },
                );
                console.log(data)
                res.status(200).json({ message: "Location updated", data: data });
                }catch(err){
                console.log(err);
                res.status(400).json({ error: err, message: "Unable to update location"});
                }  
        }
        else{
            res.status(400).json({ message: "Location doesn't exists" });
        }
}

const allLocation = async (req,res)=>{
    try{
        const location = await LocationModel.find({});
        res.status(200).json(location);
    }catch(error){
        console.log(error)
        res.status(400).json({ error: error, message: "No data is there." });
    }
}

export {addLocation,deleteLocation,updateLocation,allLocation}