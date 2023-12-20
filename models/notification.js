const mongoose = require('mongoose')

const notificationSchema = new mongoose.Schema({
    customerid: {
        type: String,
        require: true
    },
    notificationtype: {
        type: String,
        require: true
    },
    passportexpirydate: {
        type: String,
        require: true
    },
    read: {
        type: Boolean,
        require: true,
        default: false
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model("Notification", notificationSchema)