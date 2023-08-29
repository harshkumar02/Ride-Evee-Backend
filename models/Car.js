import mongoose from 'mongoose';

const CarSchema = new mongoose.Schema({
    carModel:{
        type:String,
        trim:true,
    },
    carBrand:{
        type:String,
        trim:true,
    },
    carCategory:{
        type:String,
        trim:true,
    },
    registrationNumber:{
        type:String,
        trim:true,
    },
    driverID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Driver', 
    },
    currentLocation:{
        type:String,
        trim:true,
    },
    insuranceDetailLink:{
        type:String,
        trim:true,
    },
},
{
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

const CarModel = mongoose.model('Car',CarSchema);
export default CarModel;