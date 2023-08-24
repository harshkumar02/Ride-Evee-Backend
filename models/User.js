import mongoose from 'mongoose';

// Schema

const userSchema = new mongoose.Schema(
    {   
        u_id:{
            type:String,
            required:[true, "User Id is must"],
            trim:true,
        },
        name:{
            type:String,
            required:[true, "Name is must"],
            trim:true,
        },
        email:{
            type:String,
            unique: [true, "Email already exist"],
            required:[true, "email is must"],
            trim:true,
        },
        phone:{
            type:String,
            minlength: 10,
            required:[true, "Phone is must"],
            trim:true,
        },
        password:{
            type:String,
            required:[true, "password is must"],
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
        isAdmin:{
            type:Boolean,
            default:false
        },
        isSuperAdmin:{
            type:Boolean,
            default:false
        },
        isPassenger:{
            type:Boolean,
            default:false
        },
        isDriver:{
            type:Boolean,
            default:false
        },
        createdAt:{
            type:Date,
            default:Date.now(),
        }
    }
)

// Modelling

const UserModel = mongoose.model('User',userSchema);

export default UserModel;