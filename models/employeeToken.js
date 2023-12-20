const mongoose = require('mongoose')

const employeeTokenSchema = new mongoose.Schema({
    employeeId: {
        type: mongoose.Schema.Types.ObjectId,
        require: false,
        ref: 'employee',
        unique: true
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

module.exports = mongoose.model('employeetoken', employeeTokenSchema)