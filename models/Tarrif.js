import mongoose from 'mongoose';

const tariffSchema = new mongoose.Schema({
    location:{
        type:String,
        trim:true,
        enum:{
            values: ["Lucknow","Kanpur","Allahabad","Varanasi","Gorakhpur","Mumbai","Pune","Kalyan","Bangalore"],
            message:`City is not supported`,
        },
    },
    carCategory:{
        type:String,
        trim:true,
        enum:{
            values: ["Sedan",
                "Mini Suv 4 Seater",
                "Mini Suv 7 Seater",
                "SUV",
                "Premium Sedan",
                "Premium SUV",
                "Tampo Traveller 13 Seater",
                "Tampo Traveller 17 Seater"],
            message:`Car is not supported`,
        },
    },
    tripType:{
        type:String,
        trim:true,
        enum:{
            values: ["Local","Out Station","Airport Transfer"],
            message:`trip is not supported`,
        },
        required: true, // You might want to make this required
    },
    subTripType:{
        type:String,
        trim:true,
        validate: function() {
            if (this.tripType === "Local") {
                return this.subTripType === "8hrs/80km" || this.subTripType === "12hrs/120km";
            } else if (this.tripType === "Out Station") {
                return this.subTripType === "Oneway" || this.subTripType === "Roundtrip";
            } else if (this.tripType === "Airport Transfer") {
                return this.subTripType === "Cab from Airport" || this.subTripType === "ab to Airport";
            }
            return false;
        },
        message: `Invalid sub trip type for the selected trip type`,
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
},
{
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
}
)

const TariffModel = mongoose.model("Tariff",tariffSchema);
export default TariffModel;