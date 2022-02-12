const express = require('express');
const { signup, login ,getUserProfile} = require('../controller/user/auth');
const { protect} = require('../middleware/authMiddleware')

const { validateSignupRequest, isRequestValidated, validateLoginRequest } = require('../validators/auth');
const router = express.Router();


router.post('/signup',validateSignupRequest, isRequestValidated, signup);
router.post('/login',validateLoginRequest, isRequestValidated, login);
router.get('/profile',protect,getUserProfile);

module.exports = router;