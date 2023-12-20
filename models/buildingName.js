const mongoose = require('mongoose')

const buildingNameSchema = new mongoose.Schema({
    buildingname: {
        type: String,
        require: true
    },
    buildingcode: {
        type: String,
        require: true
    },
    projectnameid: {
        type: mongoose.Schema.Types.ObjectId,
        require: true
    },
    projectname: {
        type: String,
        require: true
    },
    amenities: [{
        type: String,
        require: true
    }],
    typicalfloorplan: [{
        type: String,
        require: true
    }],
    buildingelevation: [{
        type: String,
        require: true
    }],
    amenitiesimages: [{
        type: String,
        require: true
    }],
    softdelete: {
        type: Boolean,
        require: true,
        default: false
    },
    // amenities: [{
    //     type: String,
    //     require: true
    // }],
}, {
    timestamps: true,
})

module.exports = mongoose.model("BuildingName", buildingNameSchema)