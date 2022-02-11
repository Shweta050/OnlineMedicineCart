const express = require('express');
const req = require('express/lib/request');
const router = express.Router();
const Product = require("../../models/productModel");
const APIFeatures = require('../../utils/apiFeatures');



      router.route('/').get((req,res)=>{
       // const queryobj =  {...req.query}
       // console.log(queryobj)
//          Product.find(queryobj) 
    // EXECUTE QUERY
    const features = new APIFeatures(Product.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    const products = features.query;
    products.then(Product => res.json(Product))
          .catch(err => res.status(400).json('Error: ' + err));
            });

      router.route('/:id').get((req,res)=>{
        Product.findById({_id:req.params.id}) 
        .then(Product => res.json(Product))
        .catch(err => res.status(400).json('Error: ' + err));
          });

      router.route('/:name').get((req,res)=>{
            Product.findOne({name:req.params.name}) 
            .then(Product => res.json(Product))
            .catch(err => res.status(400).json('Error: ' + err));
              });
router.route('/add').post((req, res) => {

   console.log(req);
    const name = req.body.name;
    const price = req.body.price;
    const categoryid = req.body.categoryid;
    const companyid = req.body.companyid;
    const brandid=req.body.brandid;
    const sellerid=req.body.sellerid;
    const quantity=req.body.quantity;
    const rating= req.body.rating;
    const status=req.body.status;
    const reviews=req.body.reviews;
  
    const newProduct = new Product({
        name,
        price,
        categoryid,
        companyid,
        brandid,
        sellerid,
        quantity,
        rating,
        status,
        reviews
    });
  
    newProduct.save()
      .then(() => res.json('Product added!'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;