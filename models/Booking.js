import mongoose from 'mongoose';

// Schema

const BookingSchema = new mongoose.Schema({
    b_id:{
        type:String,
        required:true,
    },
    u_id:{
        type:String,
        required:true,
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
    carCat:{
        type:String,
        required:[true, "Which car to choose"],
        trim:true,
        enum:{
            values: ["sedan","mini suv 4 seater","mini suv 7 seater","suv","premium sedan","premium suv","tampo traveller 13 seater","tampo traveller 17 seater"],
            message:`Car is not supported`,
        },
    },
    tripType:{
        type:String,
        required:[true, "Type of trip"],
        trim:true,
        enum:{
            values: ["local","out station","airport transfer"],
            message:`trip is not supported`,
        },
    },
    subTripType:{
        type:String,
        required:[true, "select sub trip type"],
        trim:true,
        enum:{
            values: ["8hrs/80km","12hrs/120km","oneway","roundtrip","cab from airport","cab to airport"],
            message:`UnFunctioned Sub Trip`,
        },
    },
    minFare:{
        type:Number,
        required:[true,"provide minimum fare"],
        trim:true,
    },
    exKmCharge:{
        type:Number,
        required:[true,"provide extra charge per km"],
        trim:true,
    },
    exHrCharge:{
        type:Number,
        required:[true,"provide extra charge per hour"],
        trim:true,
    },
    nightAllowance:{
        type:Number,
        required:[true,"provide Night allowance data for driver if applicable"],
        trim:true,
    },
    gst:{
        type:Number,
        required:[true,"provide total expected gst"],
        trim:true,
    },
    expectedCompleteCharge:{
        type:Number,
        required:[true,"Expected Complete Charge"],
        trim:true,
    },
    actualCompleteCharge:{
        type:Number,
        trim:true,
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    }
})

// Modelling

const BookingModel = mongoose.model('Booking',BookingSchema);

export default BookingModel;