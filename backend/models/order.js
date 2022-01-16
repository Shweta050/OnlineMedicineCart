// import mongoose
const mongoose = require('mongoose');


// create a schema
const Schema = mongoose.Schema;

// we need to declare the fields present in the mongodb collection
const orderSchema = new Schema(
    {
        userid: {
            type: Number,
            required: true
        },
        orderDate: {
            type: String,
            required: true,
        },
        deliverDate: {
            type: String,
            required: true
        },
        status: {
            type: String,
            required: true,
        },
        totalprice: {
            type: Number,
            required: true
          },
          addressid: {
            type: Number,
            required: true,
        }
    }
);

// create a model using the schema, connect to MongoDB and export the model
module.exports = mongoose.model('Order', orderSchema, 'Order');