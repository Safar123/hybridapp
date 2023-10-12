const { Double } = require('mongodb');
const mongoose =require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    PID:{
        type: String,
        required: true,
        unique: true,
    },
    price: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    unit: {
        type: String,
        required: true,
    },

    created_on: {
        type: Date,
        default: new Date(),
    },

})

var product=mongoose.model('products',productSchema);
module.exports= product;