const mongoose = require('mongoose')

const developerNameSchema = new mongoose.Schema({
    developername: {
        type: String,
        require: true
    },
    developercode: {
        type: String,
        require: true
    },
    softdelete: {
        type: Boolean,
        require: true,
        default: false
    },
}, {
    timestamps: true,
})

module.exports = mongoose.model('DeveloperName', developerNameSchema)