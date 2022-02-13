const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//routes
const userRoutes= require('../routes/userAuth');
// const sellerRoutes = require('../routes/sellerAuth');
const userControllerRoutes= require('../controller/user/user.controller');
const categoryRoutes= require('../controller/category/category');
const productRoutes= require('../controller/product/product');


//Environment Variable
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

//const uri = process.env.ATLAS_URI;
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

mongoose.connect(
    'mongodb+srv://Shweta:12345@cluster0.ryxyo.mongodb.net/OnlineMedicalCart?retryWrites=true&w=majority',
    {
        useNewUrlParser: false,
        useUnifiedTopology: true
    }
).then(success => {

    console.log('Connected to MongoDB !!');

    // start the server
    app.listen(port, () => {
        console.log(`Server is up and running on port: ${port}`);
    })

}).catch(err => {
    console.log('Error connecting to MongoDB : ' + err);
});
app.use(bodyParser.json());
app.use("/", userRoutes);
// app.use("/seller", sellerRoutes);
app.use("/user", userControllerRoutes);
app.use("/category", categoryRoutes);
app.use("/product", productRoutes);

