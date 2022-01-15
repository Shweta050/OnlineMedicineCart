const User = require("../../models/admin");

exports.signup = (req, res) => {
    User.findOne({ email: req.body.email }).exec(async (error, user) => {
      if (user)
        return res.status(400).json({
          error: "Admin already registered",
        });
  
      const { name, email, password, phone, role } = req.body;
      const _user = new User({
        name, 
        email, 
        password, 
        phone, 
        role
      });
  
      _user.save((error, user) => {
        if (error) {
          return res.status(400).json({
            message: "Something went wrong",
          });
        }
  
        if (user) {
          const { _id, name, email, password, phone, role } = user;
          return res.status(201).json({
            user: { _id, name, email, password, phone, role },
          });
        }
      });
    });
  };

  exports.login = (req, res) => {

    const {
        email,
        password
    } = req.body;

    User.find({
        email: email,
        password: password
    }).then(result => {
        if (result.length > 0) {
            res.status(200).json({
                message: 'Admin logged in Successfully !!',
                isLoggedIn: true,
                user: result[0]
            });
        } else {
            res.status(400).json({
                message: 'Email or password is wrong',
                isLoggedIn: false
            });
        }
    }).catch(error => {
        res.status(500).json({
            message: 'Something went wrong',
            error: error
        });
    });
}