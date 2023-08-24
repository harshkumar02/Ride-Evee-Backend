import mongoose from 'mongoose';

// schema
const CarSchema = new mongoose.Schema({
    c_id:{
        type:String,
        required:true,
        trim:true,
    },
    car_model:{
        type:String,
        required:true,
        trim:true,
    },
    car_brand:{
        type:String,
        required:true,
        trim:true,
    },
    car_cat:{
        type:String,
        required:true,
        trim:true,
    },
    reg_num:{
        type:String,
        required:true,
        trim:true,
    },
    assoc_driver:{
        driver_id:{
            type:String,
            required:true,
            trim:true,
        },
        driver_name:{
            type:String,
            required:true,
            trim:true,
        },
    },
    current_location:{
        type:String,
        required:true,
        trim:true,
    },
    insurance_det_link:{
        type:String,
        required:true,
        trim:true,
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    }
});

// Model

const CarModel =new mongoose.model('Car',CarSchema);

export default CarModel;