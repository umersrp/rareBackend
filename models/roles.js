const mongoose = require('mongoose')

const rolesSchema = new mongoose.Schema({
    rolename: {
        type: String,
        trime: true,
        required: true,
        unique: true
    },
    createlead: {
        type: Boolean,
        require: true,
        default: false
    },
    readlead: {
        type: Boolean,
        require: true,
        default: false
    },
    updatelead: {
        type: Boolean,
        require: true,
        default: false
    },
    deletelead: {
        type: Boolean,
        require: true,
        default: false
    },
    convertocustomer: {
        type: Boolean,
        require: true,
        default: false
    },
    createcommunity: {
        type: Boolean,
        require: true,
        default: false
    },
    readcommunity: {
        type: Boolean,
        require: true,
        default: false
    },
    updatecommunity: {
        type: Boolean,
        require: true,
        default: false
    },
    deletecommunity: {
        type: Boolean,
        require: true,
        default: false
    },
    createproject: {
        type: Boolean,
        require: true,
        default: false
    },
    readproject: {
        type: Boolean,
        require: true,
        default: false
    },
    updateproject: {
        type: Boolean,
        require: true,
        default: false
    },
    deleteproject: {
        type: Boolean,
        require: true,
        default: false
    },
    createbuilding: {
        type: Boolean,
        require: true,
        default: false
    },
    readbuilding: {
        type: Boolean,
        require: true,
        default: false
    },
    updatebuilding: {
        type: Boolean,
        require: true,
        default: false
    },
    deletebuilding: {
        type: Boolean,
        require: true,
        default: false
    },
    createsubtype: {
        type: Boolean,
        require: true,
        default: false
    },
    readsubtype: {
        type: Boolean,
        require: true,
        default: false
    },
    updatesubtype: {
        type: Boolean,
        require: true,
        default: false
    },
    deletesubtype: {
        type: Boolean,
        require: true,
        default: false
    },
    createdeveloper: {
        type: Boolean,
        require: true,
        default: false
    },
    readdeveloper: {
        type: Boolean,
        require: true,
        default: false
    },
    updatedeveloper: {
        type: Boolean,
        require: true,
        default: false
    },
    deletedeveloper: {
        type: Boolean,
        require: true,
        default: false
    },
    createamenities: {
        type: Boolean,
        require: true,
        default: false
    },
    readamenities: {
        type: Boolean,
        require: true,
        default: false
    },
    updateamenities: {
        type: Boolean,
        require: true,
        default: false
    },
    deleteamenities: {
        type: Boolean,
        require: true,
        default: false
    },
    createpropert: {
        type: Boolean,
        require: true,
        default: false
    },
    readpropert: {
        type: Boolean,
        require: true,
        default: false
    },
    updatepropert: {
        type: Boolean,
        require: true,
        default: false
    },
    deletepropert: {
        type: Boolean,
        require: true,
        default: false
    },
    createemployee: {
        type: Boolean,
        require: true,
        default: false
    },
    reademployee: {
        type: Boolean,
        require: true,
        default: false
    },
    updateemployee: {
        type: Boolean,
        require: true,
        default: false
    },
    deleteemployee: {
        type: Boolean,
        require: true,
        default: false
    },
    createrole: {
        type: Boolean,
        require: true,
        default: false
    },
    readrole: {
        type: Boolean,
        require: true,
        default: false
    },
    updaterole: {
        type: Boolean,
        require: true,
        default: false
    },
    deleterole: {
        type: Boolean,
        require: true,
        default: false
    },
    createcustomer: {
        type: Boolean,
        require: true,
        default: false
    },
    readcustomer: {
        type: Boolean,
        require: true,
        default: false
    },
    updatecustomer: {
        type: Boolean,
        require: true,
        default: false
    },
    deletecustomer: {
        type: Boolean,
        require: true,
        default: false
    },
    createbooking: {
        type: Boolean,
        require: true,
        default: false
    },
    readbooking: {
        type: Boolean,
        require: true,
        default: false
    },
    updatebooking: {
        type: Boolean,
        require: true,
        default: false
    },
    deletebooking: {
        type: Boolean,
        require: true,
        default: false
    },
    createavailability: {
        type: Boolean,
        require: true,
        default: false
    },
    readavailability: {
        type: Boolean,
        require: true,
        default: false
    },
    updateavailability: {
        type: Boolean,
        require: true,
        default: false
    },
    deleteavailability: {
        type: Boolean,
        require: true,
        default: false
    },
    createmanagement: {
        type: Boolean,
        require: true,
        default: false
    },
    readmanagement: {
        type: Boolean,
        require: true,
        default: false
    },
    updatemanagement: {
        type: Boolean,
        require: true,
        default: false
    },
    deletemanagement: {
        type: Boolean,
        require: true,
        default: false
    },
    createtenant: {
        type: Boolean,
        require: true,
        default: false
    },
    readtenant: {
        type: Boolean,
        require: true,
        default: false
    },
    updatetenant: {
        type: Boolean,
        require: true,
        default: false
    },
    deletetenant: {
        type: Boolean,
        require: true,
        default: false
    },
    createsaleregister: {
        type: Boolean,
        require: true,
        default: false
    },
    readsaleregister: {
        type: Boolean,
        require: true,
        default: false
    },
    updatesaleregister: {
        type: Boolean,
        require: true,
        default: false
    },
    deletesaleregister: {
        type: Boolean,
        require: true,
        default: false
    },
    createbankdetails: {
        type: Boolean,
        require: true,
        default: false
    },
    readbankdetails: {
        type: Boolean,
        require: true,
        default: false
    },
    updatebankdetails: {
        type: Boolean,
        require: true,
        default: false
    },
    deletebankdetails: {
        type: Boolean,
        require: true,
        default: false
    },
    createpoa: {
        type: Boolean,
        require: true,
        default: false
    },
    readpoa: {
        type: Boolean,
        require: true,
        default: false
    },
    updatepoa: {
        type: Boolean,
        require: true,
        default: false
    },
    deletepoa: {
        type: Boolean,
        require: true,
        default: false
    },
    hrmaodule: {
        type: Boolean,
        require: true,
        default: false
    },
    softdelete: {
        type: Boolean,
        require: true,
        default: false
    },
}, {
    timestamps: true,
})

module.exports = mongoose.model("Roles", rolesSchema)
