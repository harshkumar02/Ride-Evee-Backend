import mongoose from 'mongoose';

// schema

const tariffSchema = new mongoose.Schema({
    location:{
        type:String,
        required:[true, "location is must"],
        trim:true,
        enum:{
            values: ["lucknow","kanpur","allahabad","varanasi","gorakhpur","mumbai","pune","kalyan","bangalore"],
            message:`City is not supported`,
        },
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
        }
    },
    min_fare:{
        type:Number,
        required:[true, "Minimum Fare of Ride"],
        trim:true,
    },
    perKM:{
        type:Number,
        required:[true, "Per KM Fare of Ride"],
        trim:true,
    },
    perKMnight:{
        type:Number,
        required:[true, "Per KM fare of Night Ride"],
        trim:true,
    },
    exKM:{
        type:Number,
        required:[true, "Extra KM Fare of Ride"],
        trim:true,
    },
    exHrs:{
        type:Number,
        required:[true, "Extra Hrs Charge of Ride"],
        trim:true,
    },
    driverAllowance:{
        type:Number,
        required:[true, "Driver Allowance for one way Ride"],
        trim:true,
    },
    nightAllowance:{
        type:Number,
        required:[true, "Night Allowance for Driver"],
        trim:true,
    },
    gstper:{
        type:Number,
        required:[true, "GST percent of Ride"],
        trim:true,
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    }

});

// Modelling

const TariffModel = mongoose.model("Tariff",tariffSchema);

export default TariffModel;