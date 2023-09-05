import mongoose from "mongoose";

const carCategorySchema = new mongoose.Schema({
    category: {
        type:String,
        unique: true,
        trim:true
    },
    includes: {
        type:String,
        trim:true
    },
    noOfSeats: {
        type:Number,
        trim:true
    },
},
{
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
})

const carCategoryModel = mongoose.model('CarCategory',carCategorySchema);
export default carCategoryModel;