const mongoose = require('mongoose')

const PowerAttorneySchema = new mongoose.Schema({
    customer_id: {
        type: String,
        require: true,
    },
    poa_taker_name: {
        type: String,
        require: true,
    },
    poa_language: {
        type: String,
        require: true,
    },
    date_of_issue: {
        type: String,
        require: true,
    },
    expiry_date: {
        type: String,
        require: true,
    },
    date_of_revalidation: {
        type: String,
        require: true,
    },
    revalidation_expiry_date: {
        type: String,
        require: true,
    },
    type_of_poa: {
        type: String,
        require: true,
    },
    specific_reason: {
        type: String,
        require: true,
    },
    poa_status: {
        type: Boolean,
        require: true,
        default: false
    },
    nominated: {
        type: Boolean,
        require: true,
        default: false
    },
    buying: {
        type: Boolean,
        require: true,
        default: false
    },
    selling: {
        type: Boolean,
        require: true,
        default: false
    },
    gifting: {
        type: Boolean,
        require: true,
        default: false
    },
    renting: {
        type: Boolean,
        require: true,
        default: false
    },
    management: {
        type: Boolean,
        require: true,
        default: false
    },
    visa: {
        type: Boolean,
        require: true,
        default: false
    },
    code_power_no: {
        type: String,
        require: true,
    },
    code_power_branch: {
        type: String,
        require: true,
    },
    no_poa_with_us: {
        type: String,
        require: true,
    },
    poa_done: {
        type: String,
        require: true,
    },
    court_fees: {
        type: String,
        require: true,
    },
    service_fees: {
        type: String,
        require: true,
    },
    attachment_doc: {
        type: String,
        require: true,
    },
    updated_in_cloud: {
        type: Boolean,
        require: true,
        default: false
    },
    total_no_customer: {
        type: String,
        require: true,
    },
    other_customer: [{
        customer_id: String,
        customer_name: String,
        customer_passportnumber: String,
        customer_email: String,
        customer_nationality: String,
        customer_mobilenumber: String,
        customer_passportpdf: String,
    }],
    softdelete: {
        type: Boolean,
        require: true,
        default: false
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

module.exports = mongoose.model('PowerAttorney', PowerAttorneySchema)