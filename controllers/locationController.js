import LocationModel from "../models/Location.js";

const addLocation= async (req,res)=>{
    const {location}=req.body;
    if(location){
        const loc = await LocationModel.findOne({ location: location });
    if(loc){
        res.json({ status: "failed", message: "Location already exists" });
    }
    else{
        try{
            const newLocation = new LocationModel({
                location:location,
            });
            await newLocation.save();
            res.json({status:"success", message:"Location is added"});
        }
        catch(error){
            console.log(error);
            res.json({ status: "failed", message: "Unable to add location"});
        }
    }
    }else{
        res.json({ status: "failed", message: "Provide Location" });
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
                res.json({ status: "success", message: "Location deleted" });
                }catch(err){
                console.log(err);
                res.json({ status: "failed", message: "Unable to delete location"});
                }  
        }
        else{
            res.json({ status: "failed", message: "Location doesn't exists" });
        }
    }else{
        res.json({ status: "failed", message: "Provide Location" });
    }
}

const updateLocation = async (req,res)=>{
    const {location,newLocation} = req.body;
    if(location){
        const loc = await LocationModel.findOne({ location: location });
        if(loc){
                try{
                const result= await LocationModel.findByIdAndUpdate(
                    { _id: loc.id },
                    {
                        location:newLocation,
                    }
                );
                console.log(result);
                res.json({ status: "success", message: "Location updated" });
                }catch(err){
                console.log(err);
                res.json({ status: "failed", message: "Unable to update location"});
                }  
        }
        else{
            res.json({ status: "failed", message: "Location doesn't exists" });
        }
    }else{
        res.json({ status: "failed", message: "Provide Location" });
    }
}

export {addLocation,deleteLocation,updateLocation}