// const express = require('express');
// const brand = require('../../models/brand');
// const router = express.Router();

// router.route('/add').post((req, res) => {
//     const name = req.body.name;
  
//     const newBrand = new brand({
//         name
//     });
  
//     newBrand.save()
//       .then(() => res.json('Brand added!'))
//       .catch(err => res.status(400).json('Error: ' + err));
//   });

//   module.exports = router;