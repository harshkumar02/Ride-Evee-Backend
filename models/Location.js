import mongoose from "mongoose";

const locationSchema = new mongoose.Schema({
    location: {
        type:String,
        trim:true
    },
},
{
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
})

const LocationModel = mongoose.model('Location',locationSchema);
export default LocationModel;