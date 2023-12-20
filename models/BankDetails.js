const mongoose = require('mongoose')

const BankDetailsSchema = new mongoose.Schema({
    customer_id: {
        type: String,
        require: true,
    },
    total_no_accounts: {
        type: Number,
        require: true,
    },
    all_accounts: [{
        account_title: String,
        bank_name: String,
        branch_name: String,
        country: String,
        branch_code: String,
        swift_code: String,
        account_number: String,
        currency_name: String,
        iban_number: String,
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

module.exports = mongoose.model('BankDetails', BankDetailsSchema)