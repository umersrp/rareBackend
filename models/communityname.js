const mongoose = require('mongoose')

const communityNameSchema = new mongoose.Schema({
    communityname: {
        type: String,
        require: true
    },
    communitycode: {
        type: String,
        require: true
    },
    country: {
        type: String,
        require: true
    },
    city: {
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

module.exports = mongoose.model('CommunityName', communityNameSchema)