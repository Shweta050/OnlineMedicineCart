// import mongoose
const mongoose = require('mongoose');


// create a schema
const Schema = mongoose.Schema;

// we need to declare the fields present in the mongodb collection
const productSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true,
        },
        categoryid: {
            type: Number,
            required: false,
        },
        companyid: {
            type: Number,
            required: false,
        },
        brandid: {
            type: Number,
            required: false

          },
          sellerid: {
            type: Number,
            required: false

          },
          quantity: {
            type: Number,
            required: true

          },
          rating: {
            type: Number,
            required: false

          },
          status: {
            type: String,
            required: false

          },
          reviews: {
            type: String,
            required: false

          },
          pictureUrl: {
            type: String,
            required: false
          },
          blocked:{ 
            type: Boolean,
            required: false,
            default: false
          }
    }
);

// create a model using the schema, connect to MongoDB and export the model
module.exports = mongoose.model('Product', productSchema, 'Product');