const express = require('express')

const bookController = require('../../controller/controllerBook')

const router = express.Router();

router.get('/', bookController.getAllBooks)


module.exports = router;