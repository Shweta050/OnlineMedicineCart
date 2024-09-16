const express = require('express');
const req = require('express/lib/request');
const router = express.Router();
const Cart = require("../../models/cart");
const APIFeatures = require('../../utils/apiFeatures');



        router.route('/:id').get((req,res)=>{
            Cart.find({_id:req.params.id}) 
            .then(Cart => res.json(Cart))
            .catch(err => res.status(400).json('Error: ' + err));
            });

      router.post("/cart", async (req, res) => {
        const { productId, quantity, name, price } = req.body;
      
        const userId = req.userId; //TODO: the logged in user id
      
        try {
          let cart = await Cart.findOne({ userId });
      
          if (cart) {
            //cart exists for user
            let itemIndex = cart.products.findIndex(p => p.productId == productId);
      
            if (itemIndex > -1) {
              //product exists in the cart, update the quantity
              let productItem = cart.products[itemIndex];
              productItem.quantity = quantity;
              cart.products[itemIndex] = productItem;
            } else {
              //product does not exists in cart, add new item
              cart.products.push({ productId, quantity, name, price });
            }
            cart = await cart.save();
            return res.status(201).send(cart);
          } else {
            //no cart for user, create new cart
            const newCart = await Cart.create({
              userId,
              products: [{ productId, quantity, name, price }]
            });
      
            return res.status(201).send(newCart);
          }
        } catch (err) {
          console.log(err);
          res.status(500).send("Something went wrong");
        }
      });

module.exports = router;