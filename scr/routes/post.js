const express = require('express');
const router = express.Router();
const { postController } = require('../controller');
console.log('통과')
router.post('/post', postController.post)
router.get('/getpost', postController.getpost)
router.get('/allpost', postController.allpost)
router.post('/deletepost', postController.deletepost)
module.exports = router;
