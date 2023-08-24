import mongoose from 'mongoose';

// Schema
const driverSchema = new mongoose.Schema(
    {
        DriverId: {
            type:String,
            required:[true,"id must be provided"] ,
            trim:true
        },
        name : {
            type:String,
            required:[true,"name must be provided"] ,
            trim:true
        },
        pnumber : {
            type:Number,
            minlength: 10,
            required:[true,"number must be provided"] ,
            trim:true,
        },
        email:{
            type:String,
            unique: [true, "Email already exist"],
            required:[true,"email must be provided"],
            trim:true,
        },
        licen:{
            type:String,
            required:[true,"license must be provided"],
            trim:true,
        },
        adhaar :{
            type:String,
            required:[true,"adhaar must be provided"],
            trim:true,
        },
        photoL :{
            type:String,
            required:[true,"photo link must be provided"],
            trim:true,
        },
        currentLocation:{
            type:String,
            trim:true,
        },
        address :{
            city :{
                type:String,
                required:true,
                trim:true,
            },
            state:{
                type:String,
                required:true,
                trim:true,
            },
            pincode:{
                type:String,
                required:true,
                trim:true,
            },
            location:{
                type:String,
                required:true,
                trim:true,
            },
        },
        availability:{
            type:Boolean,
            default:false
        },
        createdAt:{
            type:Date,
            default:Date.now(),
        }
    }
);
// Modelling
const drivermodel= mongoose.model('driver',driverSchema);

export default drivermodel;