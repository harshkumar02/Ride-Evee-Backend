import mongoose from "mongoose";

const driverSchema = new mongoose.Schema({
        name: {
            type:String,
            required:[true,"name must be provided"],
            trim:true
        },
        phone: {
            type:Number,
            minlength: 10,
            trim:true,
        },
        email:{
            type:String,
            unique: [true, "Email already exist"],
            required:[true,"email must be provided"],
            trim:true,
        },
        password:{
            type:String,
            trim:true,
        },
        licenseID:{
            type:String,
            trim:true,
        },
        aadharID:{
            type:String,
            trim:true,
        },
        photo:{
            type:String,
            trim:true,
        },
        currentLocation:{
            type:String,
            trim:true,
        },
        address :{
            city :{
                type:String,
                trim:true,
            },
            state:{
                type:String,
                trim:true,
            },
            pincode:{
                type:String,
                trim:true,
            },
            location:{
                type:String,
                trim:true,
            },
        },
        availability:{
            type:Boolean,
            default:false
        },
},
{
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
})

const driverModel= mongoose.model('driver',driverSchema);
export default driverModel;
