import mongoose from 'mongoose';

const PaymentSchema = new mongoose.Schema({
    paymentDate: {
        type: Date.now(),
        required: true,
    },
    paymentAmount: {
        type: Number,
        required: true,
    },
    paymentMethod: {
        type: String,
        required: true,
        trim: true,
    },
    paymentDescription:{
        type:String,
        trim:true,
    },
});

const BookingSchema = new mongoose.Schema({
    userID:{
        type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User',
    },
    driverID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Driver', 
    },
    startLocation:{
        type:String,
        required:[true,"Starting point must be provided"],
        trim:true,
    },
    endLocation:{
        type:String,
        required:[true,"Destination must be provided"],
        trim:true,
    },
    carID:{
        type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Car', 
    },
    tariffID:{
        type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Tariff',
    },
    approxAmount:{
        type:Number,
        required:[true,"Expected Complete Charge"],
        trim:true,
    },
    finalAmount:{
        type:Number,
        trim:true,
    },
    payment: [PaymentSchema],
},
{
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
})

const BookingModel = mongoose.model('Booking',BookingSchema);
export default BookingModel;