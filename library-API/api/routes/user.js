const express = require ('express');
const router = express.Router();

const app = require('../../app');


router.get('/', (req, res, next) =>
{
    const user = {
        name: req.body.name,
        password: req.body.password
    }



    res.status(200).json({
        message: 'user get',
        userInfo : req.body
    })
})

module.exports = router;