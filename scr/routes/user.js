const express = require('express');
const router = express.Router();
const { userController } = require('../controller');
const middleware = require('../token/middleware')
console.log('통과')
router.post('/signup', userController.signup);
router.post('/signin', userController.signup);
router.post('/deleteuser', userController.deleteuser);
router.get('/auth', middleware);
router.get('/user_post',userController.user_post);


module.exports = router;
