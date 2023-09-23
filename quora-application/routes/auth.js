const express = require('express');
const router = express.Router();    //  class to create modular, mountable route handlers



const AuthController = require('../controllers/auth_controller');   //  initialised the auth_controller

router.get('/',AuthController.index);
router.get('/login',AuthController.index);
router.get('/sign-up',AuthController.sign_up)

module.exports = router;
