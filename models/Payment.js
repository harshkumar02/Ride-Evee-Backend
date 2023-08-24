import mongoose from 'mongoose';

// Schema
const PaymentSchema= new mongoose.Schema({
    p_id:{
        type:String,
        required:true,
        trim:true,
    },
    u_id:{
        type:String,
        required:[true,"Name/Id of associated user"],
        trim:true,
    },
    d_id:{
        type:String,
        required:[true,"Name/Id of associated driver"],
        trim:true,
    },
    p_amt:{
        type:Number,
        required:[true,"Amount of payment"],
        trim:true,
    },
    p_desc:{
        type:String,
        required:[true,"Payment Description"],
        trim:true,
    },
    p_status:{
        type:Boolean,
        default:false
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    }

});

// Modellimg
const PaymentModel = mongoose.model('Payment',PaymentSchema);

export default PaymentModel;