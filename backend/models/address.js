// import mongoose
const mongoose = require('mongoose');


// create a schema
const Schema = mongoose.Schema;

// we need to declare the fields present in the mongodb collection
const addressSchema = new Schema(
    {
        houseno: {
            type: String,
            required: true
        },
        street: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true,
        },
        pincode: {
            type: Number,
            required: true

          }
    }
);

// create a model using the schema, connect to MongoDB and export the model
module.exports = mongoose.model('Address', addressSchema, 'Address');