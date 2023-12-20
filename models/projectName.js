const mongoose = require('mongoose')

const projectNameSchema = new mongoose.Schema({
    projectName: {
        type: String,
        require: true
    },
    projectCode: {
        type: String,
        require: true
    },
    communityid: {
        type: mongoose.Schema.Types.ObjectId,
        require: true
    },
    communityname: {
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

module.exports = mongoose.model("ProjectName", projectNameSchema)