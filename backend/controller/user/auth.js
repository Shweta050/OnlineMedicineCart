const User = require("../../models/userModel");
const asyncHandler = require('express-async-handler');
const generateToken  = require("../../utils/generateToken");

exports.signup = (req, res) => {
    User.findOne({ email: req.body.email }).exec(async (error, user) => {
      if (user)
        return res.status(400).json({
          error: "User already registered",
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
            message: "Mobile number already used",
          });
        }
  
        if (user) {
          const { _id, name, email, password, phone, role, isAdmin,token } = user;
          return res.status(201).json({
            user: { _id, name, email, password, phone, role ,isAdmin,
              token:generateToken(user._id)},
          });
        }
      });
    });
  };

//   exports.login = (req, res) => {

//     const {
//         email,
//         password
//     } = req.body;

//     User.find({
//         email: email,
//         password: password
//     }).then(result => {
//         if (result.length > 0) {
//             res.status(200).json({
//                 message: 'User logged in Successfully !!',
//                 isLoggedIn: true,
//                 user: result[0]
//             });
//         } else {
//             res.status(400).json({
//                 message: 'Email or password is wrong',
//                 isLoggedIn: false
//             });
//         }
//     }).catch(error => {
//         res.status(500).json({
//             message: 'Something went wrong',
//             error: error
//         });
//     });
// }

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
exports.login =  asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (user && (await user.matchPassword(password))) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    })
console.log(user);

  } else {
                res.status(401).json({
                message: 'Email or password is wrong',
                isLoggedIn: false
            });
    // new Error('Invalid email or password')
  }
})

exports.getUserProfile =  asyncHandler(async (req, res) => {

  const user = await User.findById(req.user._id)

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

