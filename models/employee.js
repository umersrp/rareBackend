const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true
    },
    designation: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    confirmpass: {
        type: String,
        require: true
    },
    employeeid: {
        type: String,
        require: true
    },
    roleid: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'roles'
    },
    rolename: {
        type: String,
        require: true
    },
    verified: {
        type: Boolean,
        default: false
    },
    firstname: {
        type: String,
        require: true
    },
    lastname: {
        type: String,
        require: true
    },
    mobileno: {
        type: String,
        require: true
    },
    employeecode: {
        type: String,
        require: true
    },
    contactno: {
        type: String,
        require: true
    },
    joiningdate: {
        type: String,
        require: true
    },
    visaexpirydate: {
        type: String,
        require: true
    },
    contractexpirydate: {
        type: String,
        require: true
    },
    date_of_birth: {
        type: String,
        require: true
    },
    gender: {
        type: String,
        require: true
    },
    employment_type: {
        type: String,
        require: true
    },
    erp_id: {
        type: String,
        require: true
    },
    company: {
        type: String,
        require: true
    },
    erproles: [{
        role: String,
        doctype: Number,
        label: String,
        value: String
    }],
    created_by: {
        type: String,
        require: true
    },
    updated_by: {
        type: String,
        require: true
    },
    employee_number: {
        type: String,
        require: true
    },
    softdelete: {
        type: Boolean,
        require: true,
        default: false
    },
}, {
    timestamps: true,
})

module.exports = mongoose.model('employee', employeeSchema)