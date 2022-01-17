const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//routes
const userRoutes= require('../routes/userAuth');
const userControllerRoutes= require('../controller/user/user.controller');
const categoryRoutes= require('../controller/category/category');
// const adminRoutes= require('../routes/adminAuth');


//Environment Variable
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

const uri = process.env.ATLAS_URI;

mongoose.connect(
    uri,
    {
        useNewUrlParser: true,
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
app.use("/user", userControllerRoutes);
app.use("/category", categoryRoutes);
// app.use("/", adminRoutes);

