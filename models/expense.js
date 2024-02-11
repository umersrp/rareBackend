const mongoose = require('mongoose')

const expenseSchema = new mongoose.Schema({
    propertyid: {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'AddProperty',
        require: true
    },
    purposeid: {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'purposeSchema',
        require: true
    },
    amount: {
        type: Number,
        require: true
    },
    d_o_p: {
        type: Date,
        require: true
    },
    expenseAttachment: {
        type: String,
        require: true
    },
    softdelete:{
        type : Boolean,
        default : false
    }

}, {
    timestamps: true,
})

module.exports = mongoose.model("Expense", expenseSchema)