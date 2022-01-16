// import mongoose
const mongoose = require('mongoose');


// create a schema
const Schema = mongoose.Schema;

// we need to declare the fields present in the mongodb collection
const brandSchema = new Schema(
    {
        brandName: {
            type: String,
            required: true
        },
        company: {
            type: String,
            required: true,
        }

    }
);

// create a model using the schema, connect to MongoDB and export the model
module.exports = mongoose.model('Brand', brandSchema, 'Brand');