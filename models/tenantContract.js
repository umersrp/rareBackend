const mongoose = require('mongoose')

const tenantContractSchema = new mongoose.Schema({
    propertyid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'AddProperty',
        available_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'RentPurchase'
        }
    },
    customerid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    tenantcontractno:{
        type :String,
        default:""
    },
    customertype: {
        type: String,
        require: true
    },
    guestname: {
        type: String,
        require: true
    },
    passportnumber: {
        type: String,
        require: true
    },
    nationality: {
        type: String,
        require: true
    },
    mobilenumber: {
        type: Number,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    passportpdf: {
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
    contractexecutiondate: {
        type: Date,
        require: true
    },
    contractvalue: {
        type: String,
        require: true
    },
    // chequenumbe: {
    //     type: String,
    //     require: true
    // },
    // chequedate: {
    //     type: Date,
    //     require: true
    // },
    // totalamount: {
    //     type: String,
    //     require: true
    // },
    // chequeimage: {
    //     type: String,
    //     require: true
    // },
    chequeDetails: [{
        chequenumbe: String,
        chequedate: Date,
        totalamount: String,
        chequeimage: String
    }],
    rentalamount: {
        type: String,
        require: true
    },
    securitydepositamount: {
        type: String,
        require: true
    },
    noofchequeorinstallment: {
        type: String,
        require: true
    },
    commission: {
        type: String,
        require: true
    },
    ejari_certificate_doc: {
        type: String,
        require: true
    },
    tenancy_contract_doc: {
        type: String,
        require: true
    },
    addendum_doc: {
        type: String,
        require: true
    },
    key_receipt_doc: {
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
        require: true,
        default:""
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

module.exports = mongoose.model('TenantContract', tenantContractSchema)