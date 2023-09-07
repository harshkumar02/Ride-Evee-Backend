import mongoose from "mongoose";

const locationSchema = new mongoose.Schema({
    cityState: {
        type:String,
        trim:true
    },
    pincode: {
        type:String,
        trim:true
    },
    status: {
        type: Boolean,
        default: true
    }
},
{
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
})

const LocationModel = mongoose.model('Location',locationSchema);
export default LocationModel;