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
            required: true
        },
        companyid: {
            type: Number,
            required: true,
        },
        brandid: {
            type: Number,
            required: true

          },
          sellerid: {
            type: Number,
            required: true

          },
          quantity: {
            type: Number,
            required: true

          },
          rating: {
            type: Number,
            required: true

          },
          status: {
            type: String,
            required: true

          },
          reviews: {
            type: String,
            required: true

          },
            pictureUrl: {
            type: String,
            required: false

          }
    }
);

// create a model using the schema, connect to MongoDB and export the model
module.exports = mongoose.model('Product', productSchema, 'Product');