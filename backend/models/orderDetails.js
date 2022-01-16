// import mongoose
const mongoose = require('mongoose');


// create a schema
const Schema = mongoose.Schema;

// we need to declare the fields present in the mongodb collection
const orderDetailsSchema = new Schema(
    {
        productid: {
            type: Number,
            required: true
        },
        orderid: {
            type: Number,
            required: true,
        },
        quantity: {
            type: Number,
            required: true
        },
        price: {
            type: Number,
            required: true,
        }
    }
);

// create a model using the schema, connect to MongoDB and export the model
module.exports = mongoose.model('OrderDetails', orderDetailsSchema, 'OrderDetails');