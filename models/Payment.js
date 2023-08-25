import mongoose from 'mongoose';

// Schema
const PaymentSchema= new mongoose.Schema({
    driverID:{
        type: mongoose.Schema.Types.ObjectId, required: true, ref: 'driver', 
    },
    userID: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User', },
    tariffID: { type: mongoose.Schema.Types.ObjectId,  required: true, ref: 'Tariff', },
    bookingID:{ type: mongoose.Schema.Types.ObjectId,  required: true, ref: 'Booking',},
    paymentDescription:{
        type:String,
        trim:true,
    },
    paymentStatus:{
        type:Boolean,
        default:false
    },
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }

});

// Modellimg
const PaymentModel = mongoose.model('Payment',PaymentSchema);

export default PaymentModel;