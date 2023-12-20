const mongoose = require('mongoose')

const tokenSchema = new mongoose.Schema({
    userId: {
        type: String,
        // type: mongoose.Schema.Types.ObjectId,
        require: true,
        // ref: 'user',
        // unique: false
    },
    token: {
        type: String,
        require: true
    },
    createAt: {
        type: Date,
        default: Date.now(),
        expire: 3600
    }
})

module.exports = mongoose.model('token', tokenSchema)