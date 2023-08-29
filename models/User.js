import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({   
    name:{
        type: String,
        trim: true,
    },
    email:{
        type: String,
        unique: true,
        trim: true,
    },
    phone:{
        type:String,
        unique: true,
        trim:true,
    },
    password:{
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
    isAdmin:{
        type:Boolean,
        default:false
    },
    },
{
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
})

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
      next()
    }
  
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

const UserModel = mongoose.model('User', userSchema);
export default UserModel;
