import mongoose from 'mongoose';

// Schema

const BookingSchema = new mongoose.Schema({
    u_id:{
        type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User',
    },
    assoc_driver:{
        driver_id:{
            type: mongoose.Schema.Types.ObjectId, required: true, ref: 'driver', 
        },
        driver_name:{
            type: mongoose.Schema.Types.ObjectId, required: true, ref: 'name', 
         },
    },
    start_from:{
        type:String,
        required:[true,"Starting point must be provided"],
        trim:true,
    },
    destination:{
        type:String,
        required:[true,"Destination must be provided"],
        trim:true,
    },
    carCategory:{
        type: mongoose.Schema.Types.carCategory, required: true, ref: 'Car', 
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
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
})

// Modelling

const BookingModel = mongoose.model('Booking',BookingSchema);

export default BookingModel;