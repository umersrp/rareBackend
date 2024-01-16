const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({
    propertyid: {
        type: mongoose.Schema.Types.ObjectId,
        // type: String,
        require: true,
        ref: 'AddProperty'
    },
    unitnumber: {
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
    buildingnumber: {
        type: String,
        require: true
    },
    propertylocation: {
        type: String,
        require: true
    },
    communityname: {
        type: String,
        require: true
    },
    city: {
        type: String,
        require: true
    },
    customerid: {
        type: mongoose.Schema.Types.ObjectId,
        // type: String,
        require: true,
        ref: 'users'
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
    checkintype: {
        type: String,
        require: true
    },
    nooccupants: {
        type: Number,
        require: true
    },
    noadults: {
        type: Number,
        require: true
    },
    nochildern: {
        type: Number,
        require: true
    },
    totaloccupants: {
        type: Number,
        require: true
    },
    confirmationcode: {
        type: String,
        require: true
    },
    bookingagent: {
        type: String,
        require: true
    },
    checkindate: {
        type: Date,
        require: true
    },
    nonight: {
        type: Number,
        require: true
    },
    reservationdate: {
        type: Date,
        require: true
    },
    modepayment: {
        type: String,
        require: true
    },
    checkoutdate: {
        type: Date,
        require: true
    },
    tourismfee: {
        type: Number,
        require: true
    },
    totalpayout: {
        type: Number,
        require: true
    },
    securitydeposit: {
        type: Number,
        require: true
    },
    hostservicefee: {
        type: Number,
        require: true
    },
    cleaningfee: {
        type: Number,
        require: true
    },
    tourismfeetillmonth: {
        type: Number,
        require: true
    },
    tourismfeeacceleratedmonth: {
        type: String,
        require: true
    },
    totaladditionalfee: {
        type: Number,
        require: true
    },
    totalcollectall: {
        type: Number,
        require: true
    },
    totalroomrent: {
        type: Number,
        require: true
    },
    roomrentamount: {
        type: Number,
        require: true
    },
    guestservicefee: {
        type: Number,
        require: true
    },
    guestmanagementfee: {
        type: Number,
        require: true
    },
    totalguestservices: {
        type: Number,
        require: true
    },
    vatperbookingrent: {
        type: Number,
        require: true
    },
    vatperservicefee: {
        type: Number,
        require: true
    },
    vatpercleaningfee: {
        type: Number,
        require: true
    },
    vatperguestmanagementfee: {
        type: Number,
        require: true
    },
    totalvatper: {
        type: Number,
        require: true
    },
    bookingnumber: {
        type: String,
        require: true
    },
    totalcollectallincl: {
        type: Number,
        require: true
    },
    totalroomrentvat: {
        type: Number,
        require: true
    },
    auditdiff: {
        type: Number,
        require: true
    },
    customertype: {
        type: String,
        require: true
    },
    passportpdf: {
        type: String,
        require: true
    },
    ownerid: {
        type: String,
        require: true
    },
    guestpercentage: {
        type: Number,
        require: true
    },
    hostmanagementfee: {
        type: Number,
        require: true
    },
    vatperhostmanagementfee: {
        type: String,
        require: true
    },
    // firstdays: [{
    //     type: String,
    //     require: true
    // }],
    // moremonths: [{
    //     type: String,
    //     require: true
    // }],
    // moremonths: {
    //     type: [String],
    //     required: true
    // },
    firstdays: [{
        month: String,
        nights: String
    }],
    moremonths: [{
        month: String,
        nights: String
    }],
    cancelled: {
        type: Boolean,
        require: true,
        default: false
    },
    guestservicepercent: {
        type: String,
        require: true
    },
    hostmanagementpercent: {
        type: Number,
        require: true
    },
    roomrenthostpayable: {
        type: String,
        require: true
    },
    dtcm_uploaded: {
        type: Boolean,
        require: true,
        default: false
    },
    passortid_collected: {
        type: Boolean,
        require: true,
        default: false
    },
    sign_verified: {
        type: Boolean,
        require: true,
        default: false
    },
    smartcode_provided: {
        type: Boolean,
        require: true,
        default: false
    },
    payment_collected: {
        type: Boolean,
        require: true,
        default: false
    },
    payment_received: {
        type: Boolean,
        require: true,
        default: false
    },
    softdelete: {
        type: Boolean,
        require: true,
        default: false
    },
    new_customer: {
        type: Boolean,
        require: true,
        default: false
    },
    other_passports: [{
        type: String,
        require: true
    }],
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

module.exports = mongoose.model("Booking", bookingSchema)
