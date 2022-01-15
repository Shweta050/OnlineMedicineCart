// import mongoose
const mongoose = require('mongoose');


// create a schema
const Schema = mongoose.Schema;

// we need to declare the fields present in the mongodb collection
const userSchema = new Schema(
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
            default: "user",
          }
    }
);

// create a model using the schema, connect to MongoDB and export the model
module.exports = mongoose.model('User', userSchema, 'User');