const express = require('express');
const category = require('../../models/category');
const router = express.Router();

router.route('/add').post((req, res) => {
    const name = req.body.name;
  
    const newCategory = new category({
        name
    });
  
    newCategory.save()
      .then(() => res.json('Category added!'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/').get((req,res)=>{
    category.find() 
    .then(category => res.json(category))
    .catch(err => res.status(400).json('Error: ' + err));
      });

  module.exports = router;