const Notification = require('../models/notification')
const asyncHandler = require('express-async-handler')

const getAllNotification = asyncHandler(async (req, res) => {
    const allNotification = await Notification.find()
    if (!allNotification?.length) {
        return res.status(400).json({ message: "No Notification Found" })
    }
    res.json(allNotification)
})

const createNotification = asyncHandler(async (req, res) => {
    // console.log(req.body, "req")
    const { customerid, notificationtype, passportexpirydate, read } = req.body
    if (!customerid ) {
        return res.status(400).json({ message: "customerid fields are required" })
    } else if (!notificationtype) {
        return res.status(400).json({ message: "notificationtype fields are required" })
    }

    let duplicate = await Notification.findOne({ customerid }).lean().exec()
    let duplicateExpiry = await Notification.findOne({ passportexpirydate }).lean().exec()
    if (duplicate && duplicateExpiry) {
        return res.status(400).json({ message: "Duplicate Notification" })
    }

    const notificationObject = { customerid, notificationtype, passportexpirydate, read }
    const createNotification = await Notification.create(notificationObject)

    if (createNotification) {
        return res.status(200).json({ message: `New Notification created` })
    } else {
        return res.status(400).json({ message: 'Invalid Notification data received' })
    }
})

const updateNotification = asyncHandler(async (req, res) => {
    const { _id, customerid, notificationtype, passportexpirydate, read } = req.body
    if (!_id) {
        return res.status(400).json({ message: "id fields are required" })
    }
    const NotificationUpdate = await Notification.findById(_id).exec()

    NotificationUpdate.customerid = customerid
    NotificationUpdate.notificationtype = notificationtype
    NotificationUpdate.passportexpirydate = passportexpirydate
    NotificationUpdate.read = read

    const updateNotification = await NotificationUpdate.save()

    res.json({ message: `${updateNotification.customerid} updated` })
})

module.exports = {
    getAllNotification,
    createNotification,
    updateNotification
}