const express = require('express');
const router = express.Router();
const Product = require("../../models/product");

router.route('/').get((req,res)=>{
  Product.find() 
  .then(Product => res.json(Product))
  .catch(err => res.status(400).json('Error: ' + err));
    });

router.route('/:id').get((req,res)=>{
Product.find({_id:req.params.id}) 
.then(Product => res.json(Product))
.catch(err => res.status(400).json('Error: ' + err));
  });

router.route('/:name').get((req,res)=>{
    Product.findOne({name:req.params.name}) 
    .then(Product => res.json(Product))
    .catch(err => res.status(400).json('Error: ' + err));
      });

// router.route('/add').post((req, res) => {
//     const name = req.body.name;
//     const price = req.body.email;
//     const categoryid = req.body.password;
//     const companyid = req.body.phone;
//     const brandid=req.body.brandid;
//     const sellerid=req.body.sellerid;
//     const quantity=req.body.quantity;
//     const rating= req.body.rating;
//     const status=req.body.status;
//     const reviews=req.body.reviews;
  
//     const newProduct = new Product({
//         name,
//         price,
//         categoryid,
//         companyid,
//         brandid,
//         sellerid,
//         quantity,
//         rating,
//         status,
//         reviews
//     });
  
//     newProduct.save()
//       .then(() => res.json('Product added!'))
//       .catch(err => res.status(400).json('Error: ' + err));
//   });

module.exports = router;