const mongoose = require('mongoose')

const subTypeSchema = new mongoose.Schema({
    subtypename: {
        type: String,
        require: true
    },
    subtypecode: {
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

module.exports = mongoose.model('SubType', subTypeSchema)