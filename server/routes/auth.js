const express = require('express');
const router = express.Router();
const { signup, accountActivation, signin } = require('../controllers/auth')

const {userSignupValidator, userSigninValidator} = require('../validators/authValidator');
const {runValidation} = require('../validators');

router.post('/signup', userSignupValidator, runValidation, signup);
router.post('/account-activation', accountActivation);
router.post('/signin', userSigninValidator, runValidation, signin);

module.exports = router;