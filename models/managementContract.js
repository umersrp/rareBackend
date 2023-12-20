const mongoose = require('mongoose')

const managementContractSchema = new mongoose.Schema({
    propertyid: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'addProperty'
    },
    contractperiod: {
        type: String,
        require: true
    },
    contractstartdate: {
        type: Date,
        require: true
    },
    contractenddate: {
        type: Date,
        require: true
    },
    commencement_date: {
        type: Date,
        require: true
    },
    managementfee: {
        type: String,
        require: true
    },
    minimum_managementfee: {
        type: String,
        require: true
    },
    fixed_amount: {
        type: String,
        require: true
    },
    variable_amount: {
        type: String,
        require: true
    },
    softdelete: {
        type: Boolean,
        require: true,
        default: false
    },
    contractupdation: {
        type: String,
        require: true
    },
    management_contract: {
        type: String,
        require: true
    },
    interm_percent: {
        type: Boolean,
        require: true
    },
    doc_signed: {
        type: Boolean,
        require: true
    },
    doc_un_signed: {
        type: Boolean,
        require: true
    },
    intermpercentage_amount: {
        type: String,
        require: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'employee'
    },
    updatedBy: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'employee'
    },
}, {
    timestamps: true,
})

module.exports = mongoose.model('ManagementContract', managementContractSchema)