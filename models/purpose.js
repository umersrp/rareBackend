const mongoose = require('mongoose')

const purposeSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
  
  
}, {
    timestamps: true,
})

module.exports = mongoose.model("purposeSchema", purposeSchema)