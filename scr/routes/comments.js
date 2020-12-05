const express = require('express');
const router = express.Router();
const { commentsController } = require('../controller');
console.log(commentsController,'통과')
router.post('/comments', commentsController.comments)
router.post('/deletecomment', commentsController.deletecomment)
// router.get('/pick', commentsController.pick)

module.exports = router;
