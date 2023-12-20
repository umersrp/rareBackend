const mongoose = require('mongoose')

const maintenanceManagementSchema = new mongoose.Schema({
    city: {
        type: String,
        require: true
    },
    company: {
        type: String,
        require: true
    },
    emirate: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    house_type: {
        type: String,
        require: true
    },
    qoutation_date: {
        type: String,
        require: true
    },
    invoice_number: {
        type: String,
        require: true
    },
    propertyid: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'addProperty'
    },
    qtn_number: {
        type: String,
        require: true
    },
    trn_number: {
        type: String,
        require: true
    },
    total_amount_aed: {
        type: Number,
        require: true
    },
    total_count: {
        type: Number,
        require: true
    },
    total_price: {
        type: Number,
        require: true
    },
    vat_amount_aed: {
        type: Number,
        require: true
    },
    multiDescription: [{
        description: String,
        total_amount_aed: Number,
        total_child_count: Number,
        total_price: Number,
        unit_price: String,
        vat_amount_aed: Number,
        vat_per: String,
        quantity: String,
        child_description: [{
            description: String,
            total_amount_aed: Number,
            total_child_count: Number,
            total_price: Number,
            unit_price: String,
            vat_amount_aed: Number,
            vat_per: String,
            quantity: String,
        }],
    }],
    converted_invoice: {
        type: Boolean,
        require: true,
        default: false
    },
    softdelete: {
        type: Boolean,
        require: true,
        default: false
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        // type: String,
        require: true,
        ref: 'employee'
    },
    updatedBy: {
        type: mongoose.Schema.Types.ObjectId,
        // type: String,
        require: true,
        ref: 'employee'
    },
    quotation_attachment: {
        type: String,
        require: true
    },
    invoice_attachment: {
        type: String,
        require: true
    },
    quotation_status: {
        type: String,
        require: true
    },
}, {
    timestamps: true,
})

module.exports = mongoose.model("maintenanceManagement", maintenanceManagementSchema)