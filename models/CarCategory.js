import mongoose from "mongoose";

const carCategorySchema = new mongoose.Schema({
    carCategory: {
        type:String,
        trim:true
    },
},
{
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
})

const carCategoryModel = mongoose.model('Location',carCategorySchema);
export default carCategoryModel;