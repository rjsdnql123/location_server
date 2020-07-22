const express = require('express');
const router = express.Router();
const { userController } = require('../controller');
console.log('통과')
router.post('/signup', userController.signup);
router.post('/signin', userController.signin);
router.post('/deleteuser', userController.deleteuser);

module.exports = router;
