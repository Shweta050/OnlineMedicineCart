const express = require('express');
const router = express.Router();
const Product = require("../../models/product");

      router.route('/').get((req,res)=>{
        console.log("Called from here");
          Product.find({blocked : false}) 
          .then(Product => res.json(Product))
          .catch(err => res.status(400).json('Error: ' + err));
            });

      router.route('/:id').get((req,res)=>{
        Product.find({_id:req.params.id}) 
        .then(Product => res.json(Product))
        .catch(err => res.status(400).json('Error: ' + err));
          });

      router.route('/search/:name').get((req,res)=>{
        Product.find(
          { name: { "$regex": req.params.name, "$options": "i" } })
          .then((Product) => {
            console.log("Backend accessed, output is "+Product);
            res.json(Product);
          })
          .catch((err) => {
            res.status(400).json(`Error : ${err}`);
          });
        // Product.find({name:req.params.name}) 
        // .then(Product => res.json(Product))
        // .catch(err => res.status(400).json('Error: ' + err));
              });

        router.route('/updateid/:id').post((req, res) => {
          Product.findById(req.params.id)
            .then(product => {
              product.blocked = true;        
              product.save()
                .then(() => res.json('product blocked!'))
                .catch(err => res.status(400).json('Error: ' + err));
            })
            .catch(err => res.status(400).json('Error: ' + err));
        });
        router.route('/update/:prodName').post((req, res) => {
          Product.findOne({name: req.params.prodName}, function(err, product) {
            if(!err) {
                if(!product) {
                    console.log("Product not found");
                }
                // contact.status = request.status;
                product.blocked=true;
                product.save(function(err) {
                    if(!err) {
                        console.log("product " + product.name + " blocked");
                        res.json("Successfully blocked product " + product.name);
                    }
                    else {
                        console.log("Error: could not block product " + product.name);
                    }
                });
            }
        });

          // Product.find( {name: req.params.prodName} )
          //   .then(product => {
          //     product.blocked = req.body.blocked;
          //     product.update()
          //       .then(() => res.json('Product blocked!'))
          //       .catch(err => res.status(400).json('Error: ' + err));
          //   })
          //   // })
          //   .catch((err) => {
          //     res.status(400).json(`Error : ${err}`);
          //   });
        });    
        
        router.route('/delete/:prodName').delete((req, res) => {

            Product.findOne({name: req.params.prodName}, function(err, product) {
              if(!err) {
                  if(!product) {
                      console.log("Product not found");
                  }
                  product.blocked=true;
                  product.delete(function(err) {
                      if(!err) {
                          console.log("product " + product.name + " deleted");
                          res.json("Successfully deleted product " + product.name);
                      }
                      else {
                          console.log("Error: could not delete product " + product.name);
                      }
                  });
              }
        });
      });

      router.route('/update/:prodName/:quant').post((req, res) => {
        Product.findOne({name: req.params.prodName}, function(err, product) {
          if(!err) {
              if(!product) {
                  console.log("Product not found");
              }
              // contact.status = request.status;
              product.quantity= Number(product.quantity) + Number(req.params.quant);
              product.save(function(err) {
                  if(!err) {
                      console.log("quantity " + product.quantity + " updated "+" -> "+product.name);
                      res.json("Successfully updated product " + product.name);
                  }
                  else {
                      console.log("Error: could not block product " + product.name);
                  }
              });
          }
      });
    });
router.route('/add').post((req, res) => {
    const name = req.body.name;
    const price = req.body.price;
    // const category = req.body.password;
    // const sellerid=req.body.sellerid;
    const quantity=req.body.quantity;
    const brandName=req.body.brandName;
    const newProduct = new Product({
        name,
        price,
        // categoryid,
        // companyid,
        // brandid,
        brandName,
        // sellerid,
        quantity
        // rating,
        // status,
        // reviews
    });
  
    newProduct.save()
      .then(() => res.json('Product added!'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;