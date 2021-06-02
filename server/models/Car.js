import mongoose from "mongoose";

const Car = new mongoose.Schema(
    {
        make: {type: String, required: true},
        model: {type: String, required: true},
        year: {type: Number, required: true},
        price: {type: Number, required: true},
        imgUrl: {type: String, default:"https://www.pinclipart.com/picdir/middle/548-5480712_generic-placeholder-image-transparent-car-accident-icon-clipart.png"},
        description: {type: String, required: true}
    },
    { timestamps: true, toJSON: {virtuals: true}}
);

export default Car;