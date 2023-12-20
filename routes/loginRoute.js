
const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

router.route('/')
    .post(userController.logInUser)


module.exports = router