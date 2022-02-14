const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require("cors")


//routes
const userRoutes= require('../routes/userAuth');
// const sellerRoutes = require('../routes/sellerAuth');
const userControllerRoutes= require('../controller/user/user.controller');
const categoryRoutes= require('../controller/category/category');
const productRoutes= require('../controller/product/product');
const cartRoutes= require('../controller/cart/cart');
const orderRoutes= require('../controller/order/orderController');


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

const whitelist = ["http://localhost:3000"]
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  },
  credentials: true,
}

app.use(cors(corsOptions))

mongoose.connect(
    'mongodb://127.0.0.1:27017/OnlineMedicineShop',
    // 'mongodb+srv://Shweta:12345@cluster0.ryxyo.mongodb.net/OnlineMedicalCart?retryWrites=true&w=majority',
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
app.use("/product:", productRoutes);

app.use("/cart", cartRoutes);
app.use("/order", orderRoutes);


