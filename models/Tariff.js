import mongoose from 'mongoose';

const fareDetailsSubSchema = new mongoose.Schema({
    minFare: Number,
    extraKmCharge: Number,
    extraHrsCharge: Number,
    nightDriverAllowance: Number,
    dayDriverAllowance: Number,
    gstRate: Number,
    minKmPerDay: Number,
    perKmCharge: Number,
})

const tariffSchema = new mongoose.Schema({
    location: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Location',
    },
    carCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'carCategory',
    },
    tripType: {
        type: String,
        trim: true,
        enum: {
            values: ["Local", "Out Station", "Airport Transfer"],
            message: `trip is not supported`,
        },
    },
    subTripType: {
        type: String,
        trim: true,
        validate: function () {
            // Ensure that subTripType is valid based on tripType
            if (this.tripType === "Local") {
                const validSubTypes = ["8hrs/80km", "12hrs/120km", "4hrs/40km", "2hrs/20km"];
                return validSubTypes.includes(this.subTripType);
            } else if (this.tripType === "Out Station") {
                const validSubTypes = ["Oneway", "Roundtrip"];
                return validSubTypes.includes(this.subTripType);
            } else if (this.tripType === "Airport Transfer") {
                const validSubTypes = ["Cab from Airport", "Cab to Airport"];
                return validSubTypes.includes(this.subTripType);
            }
            return false;
        },
        message: `Invalid sub trip type for the selected trip type`,
    },
    fareDetails: {
        type: fareDetailsSubSchema,
    },
},
{
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
})

tariffSchema.virtual('categoryCode', {
    ref: 'carCategory',
    localField: 'carCategory',
    foreignField: '_id',
    justOne: true,
    autopopulate: { select: 'category' },
})

tariffSchema.virtual('locationId', {
    ref: 'Location',
    localField: 'location',
    foreignField: '_id',
    justOne: true,
    autopopulate: { select: 'cityState' },
})

tariffSchema.set('toObject', { virtuals: true })
tariffSchema.set('toJSON', { virtuals: true })

const TariffModel = mongoose.model("Tariff", tariffSchema)
export default TariffModel