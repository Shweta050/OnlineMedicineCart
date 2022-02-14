const Seller = require("../../models/seller");

exports.signup = (req, res) => {
    Seller.findOne({ email: req.body.email }).exec(async (error, seller) => {
      if (seller)
        return res.status(400).json({
          error: "Seller already registered",
        });
  
      const { name, email, password, phone, role } = req.body;
      const _seller = new Seller({
        name, 
        email, 
        password, 
        phone,
        address
      });
  
      _seller.save((error, seller) => {
        if (error) {
          return res.status(400).json({
            message: "Mobile number already used",
          });
        }
  
        if (seller) {
          const { _id, name, email, password, phone, address } = seller;
          return res.status(201).json({
            seller: { _id, name, email, password, phone, address },
          });
        }
      });
    });
  };