const express = require('express');
const router = express.Router();
const Users = require("../../models/userModel");

router.route('/').get((req,res)=>{
    Users.find() 
    .then(User => res.json(User))
    .catch(err => res.status(400).json('Error: ' + err));
      });

router.route('/:id').get((req, res) => {
    Users.findById(req.params.id)
      .then(user => res.json(user))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/:id').delete((req, res) => {
    Users.findByIdAndDelete(req.params.id)
      .then(() => res.json('User deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/update/:id').post((req, res) => {
    Users.findById(req.params.id)
      .then(user => {
        user.name = req.body.name;
        user.email = req.body.email;
        user.password = req.body.password;
        user.phone = Number(req.body.phone);
        user.role = req.body.role;
  
        user.save()
          .then(() => res.json('User updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

  module.exports = router;