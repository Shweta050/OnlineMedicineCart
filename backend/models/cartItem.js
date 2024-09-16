// import mongoose
const mongoose = require('mongoose');


// create a schema
const Schema = mongoose.Schema;

// we need to declare the fields present in the mongodb collection
const cartItemSchema = new Schema(
    {
        Quantity: {
            type: Number,
            required: true
        },
        Product:{
            type:[]
        }
    }
);

// create a model using the schema, connect to MongoDB and export the model
module.exports = mongoose.model('Cart', cartSchema, 'Cart');