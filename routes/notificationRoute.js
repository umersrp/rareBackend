const express = require('express')
const router = express.Router()
const notificationController = require('../controllers/notificationController')

router.route('/')
    .get(notificationController.getAllNotification)
    .post(notificationController.createNotification)
    .patch(notificationController.updateNotification)

module.exports = router