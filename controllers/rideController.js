import BookingModel from '../models/Booking.js';
const rideOne = async (req,res)=>{
    const rideId = req.params.id;
    try{
    const ride = await BookingModel.findById(rideId);
    if(!ride)
        res.status(400).json({ message: "Please provide right ID" });
    
        res.status(200).json({ message:"Ride is fetched",data: ride });
    }catch(err){
        console.log(err);
        res.status(400).json({error:err, message:"data is not responded"});
    }
}

const rideQuery = async (req, res)=>{
    const {id,date,startLocation,endLocation} = req.query;
    const query = {};
    if (date) {
      query.date = new Date(date);
    }
    if (id) {
      query.id = parseInt(id);
    }
    if(startLocation){
        query.startLocation=startLocation;
    }
    if(endLocation){
        query.endLocation=endLocation;
    }
    if(query){
        console.log(query);
        const rides = await BookingModel.find(query);
        if (rides.length === 0) {
            res.status(404).json({ message: "No matching rides found." });
        }
        else{
            try{
                res.status(200).json(rides);
            }catch(err){
                console.log(err);
                res.status(400).json({error:err, message:"data is not responded"});
            }
        }
    }else {
        res.json("Please provide ID.");
      }
}

export {rideOne,rideQuery};