import mongoose from 'mongoose';

// schema
const CarSchema = new mongoose.Schema({
    carModel:{
        type:String,
        required:true,
        trim:true,
    },
    carBrand:{
        type:String,
        required:true,
        trim:true,
    },
    carCategory:{
        type:String,
        required:true,
        trim:true,
    },
    registrationNumber:{
        type:String,
        required:true,
        trim:true,
    },
    associatedDriver:{
        driver_id:{
            type: mongoose.Schema.Types.ObjectId, required: true, ref: 'driver', 
        },
        driver_name:{
            type: mongoose.Schema.Types.name, required: true, ref: 'driver', 
         },
    },
    currentLocation:{
        type:String,
        trim:true,
    },
    insuranceDetailLink:{
        type:String,
        required:true,
        trim:true,
    },
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

// Model

const CarModel =new mongoose.model('Car',CarSchema);

export default CarModel;