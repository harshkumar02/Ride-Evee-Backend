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
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
    },
    driverID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Driver', 
    },
    startLocation:{
        type:String,
        trim:true,
    },
    endLocation:{
        type:String,
        trim:true,
    },
    carID:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Car', 
    },
    tariffID:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Tariff',
    },
    approxAmount:{
        type:Number,
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