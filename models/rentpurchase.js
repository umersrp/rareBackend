const mongoose = require('mongoose')

const rentPurchaseSchema = new mongoose.Schema({
    porpertyid: {
        type: String,
        require: true
    },
    propertystatus: {
        type: String,
        require: true
    },
    propertyvaluation: {
        type: String,
        require: true
    },
    employeeid: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'employees'
    },
    employeename: {
        type: String,
        require: true,
    },
    listingsource: {
        type: String,
        require: true,
    },
    listingtype: {
        type: String,
        require: true,
    },
    keylocation: {
        type: String,
        require: true,
    },
    numberkeys: {
        type: String,
        require: true,
    },
    numberaccesscard: {
        type: String,
        require: true,
    },
    maintenance: {
        type: String,
        require: true,
    },
    wardrobe: {
        type: String,
        require: true,
    },
    remarks: {
        type: String,
        require: true,
    },
    trakheesipermit: {
        type: String,
        require: true,
    },
    contractA: {
        type: String,
        require: true,
    },
    parking: {
        type: String,
        require: true,
    },
    unlisted: {
        type: Boolean,
        require: true,
        default: false
    },
    unlist_date: {
        type: String,
        require: true
    },
    again_available: {
        type: String,
        require: true
    },
    key_location: {
        type: String,
        require: true
    },
    noof_key: {
        type: String,
        require: true
    },
    multi_propertyvaluation: {
        type: String,
        require: true
    },
    property_reference: {
        type: String,
        require: true
    },
    transaction_status: {
        type: String,
        require: true
    },
    multivaluation: [{
        propertystatus: String,
        propertyvaluation: String,
        employeeid: mongoose.Schema.Types.ObjectId,
        listingsource: String,
        unlist_date: String,
        again_available: String,
        unlisted: {
            type: Boolean,
            default: false
        },
    }],
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
}, {
    timestamps: true,
})

module.exports = mongoose.model("RentPurchase", rentPurchaseSchema)