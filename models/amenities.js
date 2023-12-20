const mongoose = require('mongoose')

const amenitiesSchema = new mongoose.Schema({
    amenitiesname: {
        type: String,
        require: true
    },
    amenitiescode: {
        type: String,
        require: true
    },
}, {
    timestamps: true,
})

module.exports = mongoose.model("AmenitiesName", amenitiesSchema)