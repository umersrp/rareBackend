const mongoose = require('mongoose')

const SaleRegisterSchema = new mongoose.Schema({
    propertyid: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'AddProperty'
    },
    buyer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    seller_id: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'User'
    },
    property_new: {
        type: Boolean,
        require: true,
        default: false
    },
    buyer_new: {
        type: Boolean,
        require: true,
        default: false
    },
    seller_new: {
        type: Boolean,
        require: true,
        default: false
    },
    property_type: {
        type: String,
        require: true
    },
    buyer_type: {
        type: String,
        require: true
    },
    seller_type: {
        type: String,
        require: true
    },
    unitnumber: {
        type: String,
        require: true
    },
    communityname: {
        type: String,
        require: true
    },
    projectname: {
        type: String,
        require: true
    },
    buildingname: {
        type: String,
        require: true
    },
    floor: {
        type: String,
        require: true
    },
    sold_for: {
        type: String,
        require: true
    },
    noc_charges: {
        type: String,
        require: true
    },
    trustee_fee_amount: {
        type: String,
        require: true
    },
    trustee_buyer: {
        type: Boolean,
        require: true,
        default: false
    },
    trustee_seller: {
        type: Boolean,
        require: true,
        default: false
    },
    trustee_both: {
        type: Boolean,
        require: true,
        default: false
    },
    transfer_fee_amount: {
        type: String,
        require: true,
    },
    transfer_buyer: {
        type: Boolean,
        require: true,
        default: false
    },
    transfer_seller: {
        type: Boolean,
        require: true,
        default: false
    },
    transfer_both: {
        type: Boolean,
        require: true,
        default: false
    },
    noccharges_buyer: {
        type: Boolean,
        require: true,
        default: false
    },
    noccharges_seller: {
        type: Boolean,
        require: true,
        default: false
    },
    noccharges_both: {
        type: Boolean,
        require: true,
        default: false
    },
    check_option_cash: {
        type: Boolean,
        require: true,
        default: false
    },
    check_option_mortage: {
        type: Boolean,
        require: true,
        default: false
    },
    commission_amount: {
        type: String,
        require: true,
    },
    contract_B_attachment: {
        type: String,
        // require: true,
    },
    sales_contract_attachment: {
        type: String,
        // require: true,
    },
    contract_A_attachment: {
        type: String,
        // require: true,
    },
    title_deed_fee: {
        type: String,
        require: true,
    },
    notes: {
        type: String,
        require: true,
    },
    vat_on_commission: {
        type: Boolean,
        require: true,
        default: false
    },
    buyer_name: {
        type: String,
        require: true,
    },
    buyer_inhouse_agent_name: {
        type: String,
        require: true,
    },
    buyer_outside_agent_name: {
        type: String,
        require: true,
    },
    transaction_type: {
        type: String,
        require: true,
    },
    exoected_transfer_date: {
        type: String,
        require: true,
    },
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

module.exports = mongoose.model('SaleRegister', SaleRegisterSchema)