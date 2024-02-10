const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        require: true
    },
    lastname: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    contactno: {
        type: Number,
        require: true
    },
    passportno: {
        type: String,
        require: true
    },
    datebirth: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    type: {
        type: String,
        require: true
    },
    subType:{
        type : String,
        enum:['tenant','owner','guest','owner-representative','customer'],
        default : 'customer',
        require : false
    },
    isLead: {
        type: Boolean,
        default: false,
    },
    roles: [{
        type: String,
        default: "User"
    }],
    active: {
        type: Boolean,
        default: true
    },
    purchasetype: {
        type: String,
        require: true
    },
    nameonpassport: {
        type: String,
        require: true
    },
    memberid: {
        type: String,
        require: true
    },
    countryofresidence: {
        type: String,
        require: true
    },
    postaladdress: {
        type: String,
        require: true
    },
    whatsappno: {
        type: Number,
        require: true
    },
    primaryno: {
        type: Number,
        require: true
    },
    passportidno: {
        type: String,
        require: true
    },
    passportexpiry: {
        type: String,
        require: true
    },
    passportissue: {
        type: String,
        require: true
    },
    nationalidissuedate: {
        type: String,
        require: true
    },
    nationalidno: {
        type: String,
        require: true
    },
    nationalidexpiry: {
        type: String,
        require: true
    },
    passportpdf: {
        type: String,
        require: true
    },
    nationalidpdf: {
        type: String,
        require: true
    },
    altemail: {
        type: String,
        require: true
    },
    altmobilenumber: {
        type: String,
        require: true
    },
    verified: {
        type: Boolean,
        default: false
    },
    isCpmleted: {
        type: Boolean,
        default: false
    },
    confirmpass: {
        type: String,
        require: true
    },
    residentstatus: {
        type: String,
        require: true
    },
    profile_pic: {
        type: String,
        require: true
    },
    softdelete: {
        type: Boolean,
        require: true,
        default: false
    },
    frombooking: {
        type: Boolean,
        require: true,
        default: false
    },
    employeeid: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'employees'
    },
    // notes_data: [{
    //     note_text: String,
    // }, {
    //     timestamps: true,
    //     toJSON: { virtuals: true }
    // }],
    remarks: {
        type: String,
        require: true
    },
    checkindate: {
        type: String,
        require: true
    },
    checkoutdate: {
        type: String,
        require: true
    },
    location: {
        type: String,
        require: true
    },
    no_guests: {
        type: String,
        require: true
    },
    lead_status: {
        type: String,
        require: true
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
    toJSON: { virtuals: true }
})

module.exports = mongoose.model("User", userSchema)