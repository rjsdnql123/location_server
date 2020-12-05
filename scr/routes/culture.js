const express = require('express');
const router = express.Router();
const { cultureController } = require('../controller');
console.log('통과')

router.get('/pick', cultureController.pick)
module.exports = router;
