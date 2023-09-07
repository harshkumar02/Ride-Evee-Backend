import LocationModel from "../models/Location.js";

const addLocation= async (req,res)=>{
    const {location}=req.body;
    if(location){
        const loc = await LocationModel.findOne({ location: location });
    if(loc){
<<<<<<< HEAD
        res.json({ status: "failed", message: "Location already exists" });
=======
        res.status(400).json({ message: "Location already exists" });
>>>>>>> e6f7a51fc190c8825b897af7ae8c531e4cde727d
    }
    else{
        try{
            const newLocation = new LocationModel({
                location:location,
            });
<<<<<<< HEAD
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
=======
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
>>>>>>> e6f7a51fc190c8825b897af7ae8c531e4cde727d
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
<<<<<<< HEAD
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
=======
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
>>>>>>> e6f7a51fc190c8825b897af7ae8c531e4cde727d
    }
}

const updateLocation = async (req,res)=>{
<<<<<<< HEAD
    const {location,newLocation} = req.body;
=======
    const {location,newLocation,newStatus} = req.body;
>>>>>>> e6f7a51fc190c8825b897af7ae8c531e4cde727d
    if(location){
        const loc = await LocationModel.findOne({ location: location });
        if(loc){
                try{
                const result= await LocationModel.findByIdAndUpdate(
                    { _id: loc.id },
                    {
                        location:newLocation,
<<<<<<< HEAD
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
=======
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
>>>>>>> e6f7a51fc190c8825b897af7ae8c531e4cde727d
