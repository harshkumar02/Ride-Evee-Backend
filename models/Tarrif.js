import mongoose from 'mongoose';

// schema

const tariffSchema = new mongoose.Schema({
    location:{
        type:String,
        trim:true,
        enum:{
            values: ["lucknow","kanpur","allahabad","varanasi","gorakhpur","mumbai","pune","kalyan","bangalore"],
            message:`City is not supported`,
        },
    },
    carCategory:{
        type:String,
        trim:true,
        enum:{
            values: ["sedan","mini suv 4 seater","mini suv 7 seater","suv","premium sedan","premium suv","tampo traveller 13 seater","tampo traveller 17 seater"],
            message:`Car is not supported`,
        },
    },
    tripType:{
        type:String,
        trim:true,
        enum:{
            values: ["local","out station","airport transfer"],
            message:`trip is not supported`,
        },
    },
    subTripType:{
        type:String,
        trim:true,
        enum:{
            values: ["8hrs/80km","12hrs/120km","oneway","roundtrip","cab from airport","cab to airport"],
            message:`UnFunctioned Sub Trip`,
        }
    },
    minimumFare:{
        type:Number,
        trim:true,
    },
    pricePerKM:{
        type:Number,
        trim:true,
    },
    pricePerNightKM:{
        type:Number,
        trim:true,
    },
    pricePerExtraKM:{
        type:Number,
        trim:true,
    },
    pricePerExtraHour:{
        type:Number,
        trim:true,
    },
    driverAllowance:{
        type:Number,
        trim:true,
    },
    nightAllowance:{
        type:Number,
        trim:true,
    },
    gstper:{
        type:Number,
        trim:true,
    },
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }

});

// Modelling

const TariffModel = mongoose.model("Tariff",tariffSchema);

export default TariffModel;