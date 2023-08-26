import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({   
    name:{
        type:String,
        required:[true, "Name is must"],
        trim:true,
    },
    email:{
        type:String,
        unique: [true, "Email already exist"],
        required:[true, "Email is must"],
        trim:true,
    },
    phone:{
        type:String,
        unique: true,
        required:[true, "Phone is must"],
        trim:true,
    },
    password:{
        type:String,
        required:[true, "Password is must"],
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
    },
    {
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
    }
)

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
      next()
    }
  
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

const UserModel = mongoose.model('User',userSchema);
export default UserModel;