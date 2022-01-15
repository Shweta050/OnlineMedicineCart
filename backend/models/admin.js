// import mongoose
const mongoose = require('mongoose');


// create a schema
const Schema = mongoose.Schema;

// we need to declare the fields present in the mongodb collection
const adminSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        phone: {
            type: Number,
            required: true,
            unique: true
        },
        role: {
            type: String,
            enum: ["user", "admin", "seller"],
            default: "admin",
          }
    }
);

// create a model using the schema, connect to MongoDB and export the model
module.exports = mongoose.model('Admin', adminSchema, 'Admin');