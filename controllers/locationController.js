import LocationModel from "../models/Location.js";

const addLocation= async (req,res)=>{
    const {location}=req.body;
    if(location){
        const loc = await LocationModel.findOne({ location: location });
    if(loc){
        res.status(400).json({ message: "Location already exists" });
    }
    else{
        try{
            const newLocation = new LocationModel({
                location:location,
            });
            const result=await newLocation.save();
            res.status(200).json({ message:"Location is added", result});
        }
        catch(error){
            console.log(error);
            res.status(400).json({ error:error, message: "Unable to add location"});
        }
    }
    }else{
        res.status(400).json({ message: "Provide Location" });
    }
    
}

const deleteLocation = async (req,res)=>{
    const {location} = req.body;
    if(location){
        const loc = await LocationModel.findOne({ location: location });
        if(loc){
                try{
                const result= await LocationModel.deleteOne({location});
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
    const {location,newLocation,newStatus} = req.body;
    if(location){
        const loc = await LocationModel.findOne({ location: location });
        if(loc){
                try{
                const result= await LocationModel.findByIdAndUpdate(
                    { _id: loc.id },
                    {
                        location:newLocation,
                    },
                    {
                        status:newStatus,
                    },
                );
                console.log(result);
                res.status(200).json({  message: "Location updated" });
                }catch(err){
                console.log(err);
                res.status(400).json({ error:err, message: "Unable to update location"});
                }  
        }
        else{
            res.status(400).json({ message: "Location doesn't exists" });
        }
    }else{
        res.status(400).json({message: "Provide Location" });
    }
}

const allLocation = async (req,res)=>{
    try{
        const locations= await LocationModel.find();
        res.status(200).json(locations);
    }catch(err){
        console.log(err);
        res.status(400).json({ error:err, message: "No data is there." });
    }
}

export {addLocation,deleteLocation,updateLocation,allLocation};