// import mongoose
const mongoose = require('mongoose');


// create a schema
const Schema = mongoose.Schema;

// we need to declare the fields present in the mongodb collection
const feedbackSchema = new Schema(
    {
        productid: {
            type: Number,
            required: true
        },
        userid: {
            type: Number,
            required: true,
        },
        productid: {
            type: Number,
            required: true
        },
        comments: {
            type: String,
            required: true,
        },
        date: {
            type: String,
            required: true

          }
    }
);

// create a model using the schema, connect to MongoDB and export the model
module.exports = mongoose.model('Feedback', feedbackSchema, 'Feedback');