const User = require('../models/User')
const Employee = require('../models/employee')
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')
const Token = require('../models/token')
const sendEmail = require('../utils/sendEmail')
const forgetPass = require('../utils/forgetPass')
const crypto = require('crypto')
const ForgetPassword = require('../models/forgerPassword')
const employee = require('../models/employee')
const customerEmail = require('../utils/customerEmail')
const Roles = require('../models/roles')

const getAllUsers = asyncHandler(async (req, res) => {
    const match = { type: req.query.type }
    const page = parseInt(req.query.page || 0)
    const perPage = req.query.perPage || 10
    const sort = req.query.sort
    const fromDate = req.query.fromDate
    const toDate = req.query.toDate
    // const verifyTrue = { verified: req.query.verified || both }
    // console.log(req.query)
    try {
        const count = await User.countDocuments({ type: req.query.type })
        const users = await User.find(match)
            .find({
                $and: [
                    { softdelete: { $ne: true } } // Filter out softdeleted bookings
                ],
                "$or": [
                    req.query
                    // {createdAt: { '$gte': new Date(fromDate), "$lte": new Date(toDate) }}
                ],
                // "$or": [
                //     { unitnumber, projectname, developername, buildingname, communityname, usage, propertytype, projectstatus, transactiontype, subtype, typelayout, tenancystatus, floor, sizearea, plotsize, nobathroom, halfbathroom, furnished, kitchen, balcony, dewapremises, district, parkingbay, propertyview, propertycountry, propertycity, amenities },
                //     // {createdAt: { '$gte': new Date(fromDate), "$lte": new Date(toDate) }}
                // ],
                // createdAt: { '$gte': new Date(fromDate), "$lte": new Date(toDate) }
            })
            .find({
                createdAt: { '$gte': new Date(fromDate), "$lte": new Date(toDate) },
                // toDate: { '$lte': new Date(toDate) }
            })
            // .find(verifyTrue)
            .sort({ _id: sort })
            .skip(perPage * page)
            .limit(parseInt(perPage))
        res.status(200).json({
            count: Math.ceil(users / perPage),
            users
        })
    } catch (error) {
        res.status(400).json({
            error: `Error getting data: ${error.message}`
        })
    }

    // if (req.query.type) {
    //     match.type = req.query.type
    // }
    // const users = await User.find(match).select('-password').lean()
    // if (!users?.length) {
    //     return res.status(400).json({ message: 'No user found' })
    // }

    // res.json(users)
})

const getAllUserRedux = asyncHandler(async (req, res) => {
    const users = await User.find({
        $and: [
            { softdelete: { $ne: true } } // Filter out softdeleted bookings
        ]
    })
    if (!users?.length) {
        return res.status(400).json({ message: "No user found" })
    }
    res.json(users)
})

// const getAllUserswithoutDate = asyncHandler(async (req, res) => {
//     // const match = { type: req.query.type }
//     const match = { $and: [] }
//     const page = parseInt(req.query.page || 0)
//     const perPage = req.query.perPage || 5
//     const sort = req.query.sort
//     // const verifyTrue = { verified: req.query.verified || both }
//     // console.log(req.query)
//     try {
//         const count = await User.countDocuments({})
//         const users = await User.find(match)
//             // .find({
//             //     "$or": [
//             //         req.query
//             //         // {createdAt: { '$gte': new Date(fromDate), "$lte": new Date(toDate) }}
//             //     ],
//             //     // "$or": [
//             //     //     { unitnumber, projectname, developername, buildingname, communityname, usage, propertytype, projectstatus, transactiontype, subtype, typelayout, tenancystatus, floor, sizearea, plotsize, nobathroom, halfbathroom, furnished, kitchen, balcony, dewapremises, district, parkingbay, propertyview, propertycountry, propertycity, amenities },
//             //     //     // {createdAt: { '$gte': new Date(fromDate), "$lte": new Date(toDate) }}
//             //     // ],
//             //     // createdAt: { '$gte': new Date(fromDate), "$lte": new Date(toDate) }
//             // })
//             .find({
//                 $and: [
//                     // { type: { $ne: 'lead' } },
//                     { $or: [req.query] }
//                     // Add additional conditions if needed
//                 ],
//             })
//             // .find(verifyTrue)
//             .sort({ _id: sort })
//             .skip(perPage * page)
//             .limit(parseInt(perPage))

//         const formattedUsers = users.map(user => {
//             const formattedDate = user.datebirth ? new Date(user.datebirth).toDateString() : ''
//             const createAtFormate = user.createdAt ? new Date(user.createdAt).toDateString() : ''
//             return { ...user, datebirth: formattedDate, createdAt: createAtFormate }
//         })

//         res.status(200).json({
//             count: Math.ceil(count / perPage),
//             users: formattedUsers
//         })
//     } catch (error) {
//         res.status(400).json({
//             error: `Error getting data: ${error.message}`
//         })
//     }

//     // if (req.query.type) {
//     //     match.type = req.query.type
//     // }
//     // const users = await User.find(match).select('-password').lean()
//     // if (!users?.length) {
//     //     return res.status(400).json({ message: 'No user found' })
//     // }

//     // res.json(users)
// })

const getAllUserswithoutDate = asyncHandler(async (req, res) => {
    const match = { $and: [] }
    const page = parseInt(req.query.page || 0)
    const perPage = req.query.perPage || 5
    const sort = req.query.sort

    try {
        const count = await User.countDocuments({})
        const users = await User.find(match)
            .find({
                $and: [
                    { $or: [req.query] },
                    { softdelete: { $ne: true } }
                ],
            })
            .sort({ _id: sort })
            .skip(perPage * page)
            .limit(parseInt(perPage))
            .lean()

        // Format the datebirth and createdAt fields and calculate age
        const employeeIds = users.map(employee => employee.employeeid);
        const employeeIdsCreateBy = users.map(employee => employee.createdBy);
        const employeeIdsUpdatedBy = users.map(employee => employee.updatedBy);

        const employeeData = await employee.find({ _id: { $in: employeeIds } });
        const employeeDataCreate = await employee.find({ _id: { $in: employeeIdsCreateBy } });
        const employeeDataUpdatedBy = await employee.find({ _id: { $in: employeeIdsUpdatedBy } });

        const usersWithEmployee = users.map(customer => {
            const usersObject = customer;
            const { _id, employeeid, firstname, lastname, email, type,subType, contactno, passportno, createdBy, updatedBy, remarks, checkindate, checkoutdate, location, no_guests, lead_status, frombooking, datebirth, password, roles, purchasetype, nameonpassport, memberid, countryofresidence, postaladdress, whatsappno, primaryno, passportidno, passportexpiry, passportissue, nationalidissuedate, nationalidno, nationalidexpiry, passportpdf, nationalidpdf, altemail, altmobilenumber, confirmpass, residentstatus, createdAt, updatedAt } = usersObject;
            const updatedUser = { _id, employeeid, firstname, lastname, email, type,subType, contactno, passportno, createdBy, updatedBy, remarks, checkindate, checkoutdate, location, no_guests, lead_status, frombooking, datebirth, password, roles, purchasetype, nameonpassport, memberid, countryofresidence, postaladdress, whatsappno, primaryno, passportidno, passportexpiry, passportissue, nationalidissuedate, nationalidno, nationalidexpiry, passportpdf, nationalidpdf, altemail, altmobilenumber, confirmpass, residentstatus, createdAt, updatedAt };
            if (employeeid) {
                const employee = employeeData.find(employee => String(employee._id) === String(employeeid));
                if (employee) {
                    updatedUser.employee_email = employee?.email;
                }

            }

            const employee = employeeDataCreate.find(employee => String(employee._id) === String(createdBy));
            if (employee) {
                updatedUser.employee_email_createdBy = employee?.email;
            }
            const employeeUpdatedBy = employeeDataUpdatedBy.find(employee => String(employee._id) === String(updatedBy));
            if (employeeUpdatedBy) {
                updatedUser.employee_email_updatedBy = employeeUpdatedBy?.email;
            }
            return updatedUser;
        });

        const formattedUsers = usersWithEmployee.map(user => {
            const formattedDatebirth = user.datebirth ? new Date(user.datebirth).toDateString() : ''
            const formattedCreatedAt = user.createdAt ? new Date(user.createdAt).toDateString() : ''
            const formattedUpdatedBy = user.updatedBy ? new Date(user.updatedBy).toDateString() : ''
            const user_age = user.datebirth ? calculateAge(user.datebirth) : ""
            const forDropdown = (user?.firstname) + (user?.lastname ? " " + user?.lastname : "") + (user?.email ? " | " + user?.email : "") + (user?.passportidno ? " | " + user?.passportidno : "") + (user?.whatsappno ? " | " + user?.whatsappno : "")
            return { ...user, datebirth: formattedDatebirth, createdAt: formattedCreatedAt, user_age, updatedBy: formattedUpdatedBy, for_dropdown: forDropdown }
        })

        res.status(200).json({
            count: Math.ceil(count / perPage),
            users: formattedUsers
        })
    } catch (error) {
        res.status(400).json({
            error: `Error getting data: ${error.message}`
        })
    }
})

const getSearchedLeadMobile = asyncHandler(async (req, res) => {
    const match = { $and: [] }
    const sort = req.query.sort
    const params = req.params.key

    try {
        const users = await User.find(match)
            .find({
                $and: [
                    // { $or: [req.query] },
                    { type: 'lead' },
                    { softdelete: { $ne: true } }
                ],
            })
            .sort({ _id: sort })

        // Format the datebirth and createdAt fields and calculate age
        const employeeIds = users.map(employee => employee.employeeid);
        const employeeIdsCreateBy = users.map(employee => employee.createdBy);
        const employeeIdsUpdatedBy = users.map(employee => employee.updatedBy);

        const employeeData = await employee.find({ _id: { $in: employeeIds } });
        const employeeDataCreate = await employee.find({ _id: { $in: employeeIdsCreateBy } });
        const employeeDataUpdatedBy = await employee.find({ _id: { $in: employeeIdsUpdatedBy } });

        const usersWithEmployee = users.map(customer => {
            const usersObject = customer;
            const { _id, employeeid, firstname, lastname, email, type, contactno, passportno, createdBy, updatedBy, remarks, checkindate, checkoutdate, location, no_guests, lead_status, frombooking, datebirth, password, roles, purchasetype, nameonpassport, memberid, countryofresidence, postaladdress, whatsappno, primaryno, passportidno, passportexpiry, passportissue, nationalidissuedate, nationalidno, nationalidexpiry, passportpdf, nationalidpdf, altemail, altmobilenumber, confirmpass, residentstatus, createdAt, updatedAt } = usersObject;
            const updatedUser = { _id, employeeid, firstname, lastname, email, type, contactno, passportno, createdBy, updatedBy, remarks, checkindate, checkoutdate, location, no_guests, lead_status, frombooking, datebirth, password, roles, purchasetype, nameonpassport, memberid, countryofresidence, postaladdress, whatsappno, primaryno, passportidno, passportexpiry, passportissue, nationalidissuedate, nationalidno, nationalidexpiry, passportpdf, nationalidpdf, altemail, altmobilenumber, confirmpass, residentstatus, createdAt, updatedAt };
            if (employeeid) {
                const employee = employeeData.find(employee => String(employee._id) === String(employeeid));
                if (employee) {
                    updatedUser.employee_email = employee?.email;
                }

            }

            const employee = employeeDataCreate.find(employee => String(employee._id) === String(createdBy));
            if (employee) {
                updatedUser.employee_email_createdBy = employee?.email;
            }
            const employeeUpdatedBy = employeeDataUpdatedBy.find(employee => String(employee._id) === String(updatedBy));
            if (employeeUpdatedBy) {
                updatedUser.employee_email_updatedBy = employeeUpdatedBy?.email;
            }
            return updatedUser;
        });

        const formattedUsers = usersWithEmployee.map(user => {
            const formattedDatebirth = user.datebirth ? new Date(user.datebirth).toDateString() : ''
            const formattedCreatedAt = user.createdAt ? new Date(user.createdAt).toDateString() : ''
            const formattedUpdatedBy = user.updatedBy ? new Date(user.updatedBy).toDateString() : ''
            const user_age = user.datebirth ? calculateAge(user.datebirth) : ""
            const forDropdown = (user?.firstname) + (user?.lastname ? " " + user?.lastname : "") + (user?.email ? " | " + user?.email : "") + (user?.passportidno ? " | " + user?.passportidno : "") + (user?.whatsappno ? " | " + user?.whatsappno : "")
            const full_name = user?.firstname + (user?.lastname ? " " + user?.lastname : "")
            return { ...user, datebirth: formattedDatebirth, createdAt: formattedCreatedAt, user_age, updatedBy: formattedUpdatedBy, for_dropdown: forDropdown, full_name: full_name }
        })

        const filteredUsers = formattedUsers.filter(user => {
            return Object.values(user).some(value => {
                if (typeof value === 'string' && value.toLowerCase().includes(params.toLowerCase())) {
                    return true;
                }
                return false;
            });
        });

        res.status(200).json(filteredUsers)
    } catch (error) {
        res.status(400).json({
            error: `Error getting data: ${error.message}`
        })
    }
})

const getSearchedCustomerMobile = asyncHandler(async (req, res) => {
    const match = { $and: [] }
    const sort = req.query.sort
    const params = req.params.key

    try {
        const users = await User.find(match)
            .find({
                $and: [
                    { $or: [req.query] },
                    { softdelete: { $ne: true } }
                ],
            })
            .sort({ _id: sort })

        // Format the datebirth and createdAt fields and calculate age
        const employeeIds = users.map(employee => employee.employeeid);
        const employeeIdsCreateBy = users.map(employee => employee.createdBy);
        const employeeIdsUpdatedBy = users.map(employee => employee.updatedBy);

        const employeeData = await employee.find({ _id: { $in: employeeIds } });
        const employeeDataCreate = await employee.find({ _id: { $in: employeeIdsCreateBy } });
        const employeeDataUpdatedBy = await employee.find({ _id: { $in: employeeIdsUpdatedBy } });

        const usersWithEmployee = users.map(customer => {
            const usersObject = customer;
            const { _id, employeeid, firstname, lastname, email, type, contactno, passportno, createdBy, updatedBy, remarks, checkindate, checkoutdate, location, no_guests, lead_status, frombooking, datebirth, password, roles, purchasetype, nameonpassport, memberid, countryofresidence, postaladdress, whatsappno, primaryno, passportidno, passportexpiry, passportissue, nationalidissuedate, nationalidno, nationalidexpiry, passportpdf, nationalidpdf, altemail, altmobilenumber, confirmpass, residentstatus, createdAt, updatedAt } = usersObject;
            const updatedUser = { _id, employeeid, firstname, lastname, email, type, contactno, passportno, createdBy, updatedBy, remarks, checkindate, checkoutdate, location, no_guests, lead_status, frombooking, datebirth, password, roles, purchasetype, nameonpassport, memberid, countryofresidence, postaladdress, whatsappno, primaryno, passportidno, passportexpiry, passportissue, nationalidissuedate, nationalidno, nationalidexpiry, passportpdf, nationalidpdf, altemail, altmobilenumber, confirmpass, residentstatus, createdAt, updatedAt };
            if (employeeid) {
                const employee = employeeData.find(employee => String(employee._id) === String(employeeid));
                if (employee) {
                    updatedUser.employee_email = employee?.email;
                }

            }

            const employee = employeeDataCreate.find(employee => String(employee._id) === String(createdBy));
            if (employee) {
                updatedUser.employee_email_createdBy = employee?.email;
            }
            const employeeUpdatedBy = employeeDataUpdatedBy.find(employee => String(employee._id) === String(updatedBy));
            if (employeeUpdatedBy) {
                updatedUser.employee_email_updatedBy = employeeUpdatedBy?.email;
            }
            return updatedUser;
        });

        const formattedUsers = usersWithEmployee.map(user => {
            const formattedDatebirth = user.datebirth ? new Date(user.datebirth).toDateString() : ''
            const formattedCreatedAt = user.createdAt ? new Date(user.createdAt).toDateString() : ''
            const formattedUpdatedBy = user.updatedBy ? new Date(user.updatedBy).toDateString() : ''
            const user_age = user.datebirth ? calculateAge(user.datebirth) : ""
            const forDropdown = (user?.firstname) + (user?.lastname ? " " + user?.lastname : "") + (user?.email ? " | " + user?.email : "") + (user?.passportidno ? " | " + user?.passportidno : "") + (user?.whatsappno ? " | " + user?.whatsappno : "")
            const full_name = user?.firstname + (user?.lastname ? " " + user?.lastname : "")
            return { ...user, datebirth: formattedDatebirth, createdAt: formattedCreatedAt, user_age, updatedBy: formattedUpdatedBy, for_dropdown: forDropdown, full_name: full_name }
        })

        const filteredUsers = formattedUsers.filter(user => {
            return Object.values(user).some(value => {
                if (typeof value === 'string' && value.toLowerCase().includes(params.toLowerCase())) {
                    return true;
                }
                return false;
            });
        });

        res.status(200).json(filteredUsers)
    } catch (error) {
        res.status(400).json({
            error: `Error getting data: ${error.message}`
        })
    }
})

function calculateAge(dateString) {
    const today = new Date()
    const birthDate = new Date(dateString)
    let age = today.getFullYear() - birthDate.getFullYear()
    const monthDifference = today.getMonth() - birthDate.getMonth()
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--
    }
    return age
}

const getAllUsersApp = asyncHandler(async (req, res) => {
    const match = { type: req.query.type }
    const page = parseInt(req.query.page || 0)
    const perPage = req.query.perPage || 5
    const sort = req.query.sort
    // const verifyTrue = { verified: req.query.verified || both }
    // console.log(req.query)
    try {
        const count = await User.countDocuments({ type: req.query.type })
        const users = await User.find(match)
            .find({
                $and: [
                    { softdelete: { $ne: true } } // Filter out softdeleted bookings
                ],
                "$or": [
                    req.query
                    // {createdAt: { '$gte': new Date(fromDate), "$lte": new Date(toDate) }}
                ],
                // "$or": [
                //     { unitnumber, projectname, developername, buildingname, communityname, usage, propertytype, projectstatus, transactiontype, subtype, typelayout, tenancystatus, floor, sizearea, plotsize, nobathroom, halfbathroom, furnished, kitchen, balcony, dewapremises, district, parkingbay, propertyview, propertycountry, propertycity, amenities },
                //     // {createdAt: { '$gte': new Date(fromDate), "$lte": new Date(toDate) }}
                // ],
                // createdAt: { '$gte': new Date(fromDate), "$lte": new Date(toDate) }
            })
            // .find(verifyTrue)
            .sort({ _id: sort })
            .skip(perPage * page)
            .limit(parseInt(perPage))
        res.status(200).json(users)
    } catch (error) {
        res.status(400).json({
            error: `Error getting data: ${error.message}`
        })
    }

    // if (req.query.type) {
    //     match.type = req.query.type
    // }
    // const users = await User.find(match).select('-password').lean()
    // if (!users?.length) {
    //     return res.status(400).json({ message: 'No user found' })
    // }

    // res.json(users)
})

const getVerifiedUserDate = asyncHandler(async (req, res) => {
    const match = { type: req.query.type }
    const page = parseInt(req.query.page || 0)
    const perPage = req.query.perPage || 10
    const sort = req.query.sort
    const fromDate = req.query.fromDate
    const toDate = req.query.toDate
    // const verifyTrue = { verified: req.query.verified || both }
    // console.log(req.query)
    try {
        const count = await User.countDocuments({ type: req.query.type })
        const users = await User.find(match)
            .find({
                $and: [
                    { softdelete: { $ne: true } } // Filter out softdeleted bookings
                ],
                "$or": [
                    req.query
                    // {createdAt: { '$gte': new Date(fromDate), "$lte": new Date(toDate) }}
                ],
                // "$or": [
                //     { unitnumber, projectname, developername, buildingname, communityname, usage, propertytype, projectstatus, transactiontype, subtype, typelayout, tenancystatus, floor, sizearea, plotsize, nobathroom, halfbathroom, furnished, kitchen, balcony, dewapremises, district, parkingbay, propertyview, propertycountry, propertycity, amenities },
                //     // {createdAt: { '$gte': new Date(fromDate), "$lte": new Date(toDate) }}
                // ],
                // createdAt: { '$gte': new Date(fromDate), "$lte": new Date(toDate) }
            })
            .find({
                createdAt: { '$gte': new Date(fromDate), "$lte": new Date(toDate) },
                // toDate: { '$lte': new Date(toDate) }
            })
            // .find(verifyTrue)
            .sort({ _id: sort })
            .skip(perPage * page)
            .limit(parseInt(perPage))
        res.status(200).json({
            count: Math.ceil(users / perPage),
            users
        })
    } catch (error) {
        res.status(400).json({
            error: `Error getting data: ${error.message}`
        })
    }

    // if (req.query.type) {
    //     match.type = req.query.type
    // }
    // const users = await User.find(match).select('-password').lean()
    // if (!users?.length) {
    //     return res.status(400).json({ message: 'No user found' })
    // }

    // res.json(users)
})

const getAllUsersWP = asyncHandler(async (req, res) => {
    const match = {}
    const users = await User.find(match).sort({ _id: 'descending' })
    res.json({ users })
})

const getAllOnlyCustomer = asyncHandler(async (req, res) => {
    // const match = { type: req.query.type }
    const match = { $and: [] }
    const users = await User.find(match)
        .find({
            $and: [
                { type: { $ne: 'lead' } },
                { softdelete: { $ne: true } } // Filter out softdeleted bookings
                // Add additional conditions if needed
            ],
        })
        .sort({ _id: 'descending' })
    // .find({
    //     "$or": [
    //         { "email": { $regex: req.params.key, $options: 'i' } },
    //         { "firstname": { $regex: req.params.key, $options: 'i' } },
    //         { "lastname": { $regex: req.params.key, $options: 'i' } },
    //     ]
    // })
    res.json({ users })
})

const getAllUsersVerified = asyncHandler(async (req, res) => {
    const page = parseInt(req.query.page || 0)
    const perPage = req.query.perPage || 10
    const sort = req.query.sort
    // console.log(req.query)
    const users = await User.find({ verified: true })
        .sort({ _id: sort })
        .find({
            $and: [
                { softdelete: { $ne: true } } // Filter out softdeleted bookings
            ],
            "$or": [
                req.query
            ],
        })
        // .find(({ type: req.query.type }))
        .skip(perPage * page)
        .limit(parseInt(perPage))
    const count = await User.countDocuments({ verified: true })
    if (!users) {
        return res.status(400).json({ message: "Koi User nhi hai" })
    }
    res.json({
        count: Math.ceil(count / perPage),
        users
    })
})

const getUsersVerifiedSearch = asyncHandler(async (req, res) => {
    const page = parseInt(req.query.page || 0)
    const perPage = req.query.perPage || 5
    const sort = req.query.sort
    const count = await User.countDocuments({ verified: true })
    const users = await User.find({ verified: true })
        .find({
            $and: [
                { softdelete: { $ne: true } } // Filter out softdeleted bookings
            ],
            "$or": [
                { "email": { $regex: req.params.key, $options: 'i' } },
                { "firstname": { $regex: req.params.key, $options: 'i' } },
                { "lastname": { $regex: req.params.key, $options: 'i' } },
            ]
        })
        .find(({ type: req.query.type }))
        .sort({ _id: 'descending' })
        .skip(perPage * page)
        .limit(parseInt(perPage))
    if (!users) {
        return res.status(400).json({ message: "Koi User nhi hai" })
    }
    res.json({
        count: Math.ceil(users / perPage),
        users
    })
})

const getUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)
    if (!user) {
        return res.status(400).json({ message: 'No user found' })
    }
    res.json(user)
})

const createNewUser = asyncHandler(async (req, res) => {
    // let passportpdf = (req.file) ? req.file.filename : null
    // let nationalidpdf = (req.file) ? req.file.filename : null
    // console.log(req.file)
    // console.log(req.file, req.body, 33)
    const { firstname, lastname, email, type, contactno, passportno, datebirth, password, roles, purchasetype, nameonpassport, memberid, countryofresidence, postaladdress, whatsappno, primaryno, passportidno, passportexpiry, passportissue, nationalidissuedate, nationalidno, nationalidexpiry, passportpdf, nationalidpdf, altemail, altmobilenumber, confirmpass, residentstatus, employeeid, createdBy, updatedBy, remarks, checkindate, checkoutdate, location, no_guests, lead_status, frombooking } = req.body

    // confirming data || !Array.isArray(roles) || !roles.length
    // if (!firstname || !lastname || !email || !contactno || !passportno || !datebirth) {
    //     return res.status(400).json({ message: 'All fields are required' })
    // }
    if (!firstname) {
        return res.status(400).json({ message: 'Firstname fields are required' })
    } else if (!lastname) {
        return res.status(400).json({ message: 'lastname fields are required' })
    } else if (!email) {
        return res.status(400).json({ message: 'email fields are required' })
    }
    // else if (!contactno) {
    //     return res.status(400).json({ message: 'contact fields are required' })
    // } else if (!passportno) {
    //     return res.status(400).json({ message: 'passport fields are required' })
    // } 
    // else if (!datebirth) {
    //     return res.status(400).json({ message: 'datebirth fields are required' })
    // }

    //check for duplicate
    let duplicate = await User.findOne({ email }).lean().exec()
    if (duplicate) {
        return res.status(409).json({ message: 'Duplicate email' })
    }

    //Hash the password
    // const hashedPassword = await bcrypt.hash(password, 10) //salt rounds
    // const passportpdf = passportpdf;
    // passportpdf = req.files['passportpdf'][0].path
    // if (!passportpdf && !nationalidpdf) {
    //     console.log('if chal raha hai')
    // } else {
    //     console.log('else chal raha hai')
    // }
    // nationalidpdf = req.files['nationalidpdf'][0].path
    // console.log(passportpdf, 'passportpdf')
    // console.log(nationalidpdf, 'nationalidpdf')
    // const nationalidpdf = req.file.path
    const userObject = { firstname, lastname, email, type, password, contactno, passportno, roles, datebirth, purchasetype, nameonpassport, memberid, countryofresidence, postaladdress, whatsappno, primaryno, passportidno, passportexpiry, passportissue, nationalidissuedate, nationalidno, nationalidexpiry, passportpdf, nationalidpdf, altemail, altmobilenumber, confirmpass, residentstatus, employeeid, createdBy, updatedBy, remarks, checkindate, checkoutdate, location, no_guests, lead_status, frombooking }

    //Create & store user
    const user = await User.create(userObject)

    // const token = await new Token({
    //     userId: user._id,
    //     token: crypto.randomBytes(32).toString("hex")
    // }).save()

    // const url = `${process.env.BASE_URL}customer/${user._id}/verify/${token.token}`
    // await sendEmail(user.email, "Verify Your Email", url)

    if (firstname && lastname && email && contactno && passportno && datebirth && nameonpassport && countryofresidence && postaladdress && whatsappno && primaryno && passportidno && passportexpiry && passportissue && nationalidissuedate && nationalidno && nationalidexpiry) {
        await user.updateOne({ isCpmleted: true })
    }

    const currentYear = new Date().getFullYear()
    const lastDigit = currentYear.toString().split(0)

    if (type === "customer") {
        await user.updateOne({ memberid: "OWC-" + lastDigit[1] + "-" + user._id })
    }

    if (user) {
        //created
        if (email && type === "customer" && frombooking === false) {
            // console.log('owner_email me araha hai')
            const owner_name = firstname + " " + lastname
            let contentHeading = `Hello ${owner_name},`
            let contentPara = "Your account has been created on Rare (Property Management System). Your account credentials are mentioned below."
            let userName = email
            let passWard = password
            const url = `${process.env.BASE_URL}`
            // console.log(url, "url")
            await customerEmail(email, "Your Email has been Added on Rare Property Management", contentHeading, contentPara, userName, passWard, url)
            // console.log("Email send")
        }
        res.status(201).json(user)
    } else {
        res.status(400).json({ message: 'Invalid user data received' })
    }
})

const updateUser = asyncHandler(async (req, res) => {
    const { _id, firstname, lastname, email, password, contactno, passportno, datebirth, purchasetype, nameonpassport, countryofresidence, postaladdress, whatsappno, primaryno, passportidno, passportexpiry, passportissue, nationalidissuedate, nationalidno, nationalidexpiry, type, passportpdf, nationalidpdf, memberid, isLead, altmobilenumber, altemail, confirmpass, residentstatus, employeeid, createdBy, updatedBy, remarks, checkindate, checkoutdate, location, no_guests, lead_status, frombooking, profile_pic } = req.body
    // let { passportpdf } = req.files
    // let { passportpdf, nationalidpdf } = req.files
    // let { nationalidpdf } = req.files
    // console.log(email, 'email')
    // console.log(nationalidpdf, 'nationalidpdf controller')
    // console.log(passportpdf, 'passportpdf controller')
    // if (req.files['passportpdf']) {
    //     passportpdf = updateOne({ passportpdf: req.files['passportpdf'][0].path })
    // }
    // // else {
    // //     passportpdf = passportpdf
    // // }
    // if (req.files['nationalidpdf']) {
    //     nationalidpdf = updateOne({ nationalidpdf: req.files['passportpdf'][0].path })
    // }
    // else {
    //     nationalidpdf = nationalidpdf
    // }
    // if (req.files) {
    //     console.log(req.files, "req.file")
    //     if (req.files['passportpdf'] && req.files['nationalidpdf']) {
    //         console.log('both')
    //         passportpdf = req.files['passportpdf'][0].path
    //         nationalidpdf = req.files['nationalidpdf'][0].path
    //     } else if (req.files['passportpdf']) {
    //         console.log(req.files['passportpdf'], 'req.files["passportpdf"]')
    //         passportpdf = req.files['passportpdf'][0].path
    //     } else if (req.files['nationalidpdf']) {
    //         console.log(req.files['nationalidpdf'], "req.files['nationalidpdf']")
    //         nationalidpdf = req.files['nationalidpdf'][0].path
    //     }
    // } else {
    //     console.log('else me ja raha hai')
    // }




    // sdlkjfsdkjfsjfsjafkjflakjfdsl

    // confirm data
    if (!_id) {
        return res.status(400).json({ message: 'Id fields are required' })
    }
    else if (!firstname) {
        return res.status(400).json({ message: 'Firstname fields are required' })
    } else if (!lastname) {
        return res.status(400).json({ message: 'lastname fields are required' })
    } else if (!email) {
        return res.status(400).json({ message: 'email fields are required' })
    }


    // const lastDigit = currentYear.split(0)
    // else if (!contactno) {
    //     return res.status(400).json({ message: 'contact fields are required' })
    // } else if (!passportno) {
    //     return res.status(400).json({ message: 'passport fields are required' })
    // } 
    // else if (!datebirth) {
    //     return res.status(400).json({ message: 'datebirth fields are required' })
    // }
    // else if (!passportpdf) {
    //     return res.status(400).json({ message: 'passportpdf fields are required' })

    // } else if (!nationalidpdf) {
    //     return res.status(400).json({ message: 'nationalidpdf fields are required' })

    // }
    const user = await User.findById(_id).exec()
    const currentYear = new Date().getFullYear()
    const lastDigit = currentYear.toString().split(0)
    if (type === "customer") {
        await user.updateOne({ memberid: "OWC-" + lastDigit[1] + "-" + _id })
    }

    if (!email) {
        res.status(400).json({ message: 'User not found' })
    }

    // if (firstname, lastname, email, contactno, passportno, datebirth, purchasetype, nameonpassport, memberid, countryofresidence, postaladdress, whatsappno, primaryno, passportidno, passportexpiry, passportissue, nationalidissuedate, nationalidno, nationalidexpiry, passportpdf, nationalidpdf, altemail, altmobilenumber, confirmpass, type, isLead) {
    //     isLead = true,
    //     type = "customer"
    // }


    //check for duplicate
    const duplicate = await User.findOne({ email }).lean().exec()
    //All update to the original user
    if (duplicate && duplicate?._id.toString() !== _id) {
        return res.status(409).json({ message: 'Duplicate username' })
    }

    user.firstname = firstname
    user.lastname = lastname
    user.email = email
    user.password = password
    user.contactno = contactno
    user.passportno = passportno
    user.datebirth = datebirth
    user.purchasetype = purchasetype
    user.nameonpassport = nameonpassport
    user.memberid = memberid
    user.countryofresidence = countryofresidence
    user.postaladdress = postaladdress
    user.whatsappno = whatsappno
    user.primaryno = primaryno
    user.passportidno = passportidno
    user.passportexpiry = passportexpiry
    user.passportissue = passportissue
    user.nationalidissuedate = nationalidissuedate
    user.nationalidno = nationalidno
    user.nationalidexpiry = nationalidexpiry
    user.passportpdf = passportpdf
    user.nationalidpdf = nationalidpdf
    user.type = type
    user.altemail = altemail
    user.altmobilenumber = altmobilenumber
    user.confirmpass = confirmpass
    user.residentstatus = residentstatus
    user.employeeid = employeeid
    user.profile_pic = profile_pic
    user.createdBy = createdBy
    user.updatedBy = updatedBy
    user.remarks = remarks
    user.checkindate = checkindate
    user.checkoutdate = checkoutdate
    user.location = location
    user.no_guests = no_guests
    user.lead_status = lead_status
    user.frombooking = frombooking

    // if (password) {
    //hash password
    // user.password = await bcrypt.hash(password, 10) //salt rounds
    // }

    if (firstname && lastname && email && contactno && passportno && datebirth && nameonpassport && memberid && countryofresidence && postaladdress && whatsappno && primaryno && passportidno && passportexpiry && passportissue && nationalidissuedate && nationalidno && nationalidexpiry) {
        await user.updateOne({ isCpmleted: true })
    }

    const updateUser = await user.save()

    if (email && type === "customer" && frombooking === false) {
        // console.log('owner_email me araha hai')
        const owner_name = firstname + " " + lastname
        let contentHeading = `Hello ${owner_name},`
        let contentPara = "Your account has been updated on Rare (Property Management System). Your account credentials are mentioned below."
        let userName = email
        let passWard = password
        const url = `${process.env.BASE_URL}`
        // console.log(url, "url")
        await customerEmail(email, "Your Email has been Updated on Rare Property Management", contentHeading, contentPara, userName, passWard, url)
        // console.log("Email send")
    }
    res.status(200).json({ message: `${updateUser.email} updated` });


})

const updateUserSpecific = asyncHandler(async (req, res) => {
    const { _id, ...updateData } = req.body;
    const existingProperty = await User.findById(_id).exec();
    if (!existingProperty) {
        return res.status(400).json({ message: 'User not found' });
    }

    Object.assign(existingProperty, updateData);

    const updatedProperty = await existingProperty.save();

    return res.json({ message: `${updatedProperty.email} updated` });
});

const converToCustomer = asyncHandler(async (req, res) => {
    // console.log(req.body)
    const { _id, firstname, lastname, email, password, contactno, passportno, datebirth, type } = req.body

    if (!_id || !type) {
        return res.status(400).res.json("All field are required")
    }
    const user = await User.findById(_id).exec()
    user.firstname = firstname
    user.lastname = lastname
    user.email = email
    user.password = password
    user.contactno = contactno
    user.passportno = passportno
    user.datebirth = datebirth
    user.type = type

    const updateUser = await user.save()

    res.json({ message: `${updateUser.email} updated` })
})

const deleteUser = asyncHandler(async (req, res) => {

    const { _id } = req.body
    if (!_id) {
        return res.status(400).json({ message: 'User ID required' })
    }

    const user = await User.findById(_id).exec()

    if (!user) {
        return res.status(400).json({ message: 'User not found' })
    }

    const result = await user.deleteOne()

    const reply = `Username ${result.email} with ID ${result._id} deleted`

    res.json(reply)
})

const SearchByEmail = asyncHandler(async (req, res) => {
    const match = { type: req.query.type }
    // const keyword = await User.find({firstname: req.query.firstname}+{lastname: req.query.lastname})
    const page = parseInt(req.query.page || 0)
    const perPage = req.query.perPage || 5
    const verifiedTrue = req.query.verified || 'all'
    const sort = req.query.sort
    const count = await User.countDocuments({ type: req.query.type })
    const users = await User
        // .createIndexes({ firstname: "text", lastname: "text" })
        // .find({
        //     $text: {
        //         $search: {
        //             'index': 'default',
        //             'text': {
        //                 'query': req.params.key,
        //                 'path': {
        //                     'wildcard': '*'
        //                 }
        //             }
        //         }
        //     }
        // })
        .find({
            $and: [
                { softdelete: { $ne: true } } // Filter out softdeleted bookings
            ],
            "$or": [
                { "email": { $regex: req.params.key, $options: 'i' } },
                { "firstname": { $regex: req.params.key, $options: 'i' } },
                { "lastname": { $regex: req.params.key, $options: 'i' } },
            ]
        })
        // .find({ firstname: req.params.key, lastname: req.params.key })
        // .find(({ lastname: req.query.lastname }))
        // .find({
        //     $and: [
        //         { "firstname": { $regex: req.params.key, $options: 'i' } },
        //         { "lastname": { $regex: req.params.key, $options: 'i' } }
        //     ]
        // })
        .find(({ type: req.query.type }))
        .sort({ _id: sort })
        // .find({ verifiedTrue })
        .skip(perPage * page)
        .limit(parseInt(perPage))
    res.status(200).json({
        count: Math.ceil(users / perPage),
        users
    })
    // .then((result) => {
    //     res.status(200).json(result)
    // })

})

const logInUserAPP = asyncHandler(async (req, res) => {

    if (req.body.password && req.body.email) {
        let user = await User.findOne(req.body) || await Employee.findOne(req.body)
        // console.log(user, "user")
        if (user) {
            if (user?.roleid) {
                const roleData = await Roles.findById(user?.roleid);
                const updatedProperty = {
                    ...user.toObject(),
                    ...roleData.toObject()
                };
                return res.send(updatedProperty)
            } else {
                return res.send(user)
            }
        }
        // if (user) {
        //     return res.send(user)
        // }
        if (user && !user.verified) {
            let token = await Token.findOne({ userId: user._id })
            if (!token) {
                token = await new Token({
                    userId: user._id,
                    token: crypto.randomBytes(32).toString("hex")
                }).save()

                const url = `${process.env.BASE_URL}customer/${user.id}/verify/${token.token}`
                await sendEmail(user.email, "Verify Your Email", url)
            }
            return res.status(400).send({ message: "Verified krwa phele" })
        }
        else {
            res.send({ result: "user nhi mila" })
        }
    } else if (req.body.password && req.body.contactno) {
        let user = await User.findOne(req.body) || await Employee.findOne(req.body)
        if (user) {
            return res.send(user)
        }
        if (user && !user.verified) {
            let token = await Token.findOne({ userId: user._id })
            if (!token) {
                token = await new Token({
                    userId: user._id,
                    token: crypto.randomBytes(32).toString("hex")
                }).save()

                const url = `${process.env.BASE_URL}customer/${user.id}/verify/${token.token}`
                await sendEmail(user.email, "Verify Your Email", url)
            }
            return res.status(400).send({ message: "Verified krwa phele" })
        }
        else {
            res.send({ result: "contact nhi mila" })
        }
    } else {
        res.send({ result: "No user Found" })
    }
})

const logInUser = asyncHandler(async (req, res) => {

    if (req.body.password && req.body.email) {
        let user = await User.findOne(req.body) || await Employee.findOne(req.body)
        if (user) {
            return res.send(user)
        }
        if (user && !user.verified) {
            let token = await Token.findOne({ userId: user._id })
            if (!token) {
                token = await new Token({
                    userId: user._id,
                    token: crypto.randomBytes(32).toString("hex")
                }).save()

                const url = `${process.env.BASE_URL}customer/${user.id}/verify/${token.token}`
                await sendEmail(user.email, "Verify Your Email", url)
            }
            return res.status(400).send({ message: "Verified krwa phele" })
        }
        else {
            res.send({ result: "user nhi mila" })
        }
    } else if (req.body.password && req.body.contactno) {
        let user = await User.findOne(req.body) || await Employee.findOne(req.body)
        if (user) {
            return res.send(user)
        }
        if (user && !user.verified) {
            let token = await Token.findOne({ userId: user._id })
            if (!token) {
                token = await new Token({
                    userId: user._id,
                    token: crypto.randomBytes(32).toString("hex")
                }).save()

                const url = `${process.env.BASE_URL}customer/${user.id}/verify/${token.token}`
                await sendEmail(user.email, "Verify Your Email", url)
            }
            return res.status(400).send({ message: "Verified krwa phele" })
        }
        else {
            res.send({ result: "contact nhi mila" })
        }
    } else {
        res.send({ result: "No user Found" })
    }
})

const logInFromERP = asyncHandler(async (req, res) => {
    const { email, pass } = req.query;
    if (email && pass) {
        let user = await User.findOne({ email: email, password: pass }) || await Employee.findOne({ email: email, password: pass })
        if (user) {
            // window.localStorage.setItem("isAuth", JSON.stringify(user));
            // return res.redirect('http://127.0.0.1:5173/dashboard');
            return res.redirect(`${process.env.BASE_URL}?success=true&userData=${JSON.stringify(user)}`);
            // return res.send(user)
        } else {
            return res.redirect(`${process.env.BASE_URL}`);
            // res.send({ result: "user not found" })
        }
    } else {
        return res.redirect(`${process.env.BASE_URL}`);
        // res.send({ result: "No user Found" })
    }
})

const logOutFromERP = asyncHandler(async (req, res) => {
    return res.redirect(`${process.env.BASE_URL}?success=false`);
})

const forgetPassword = asyncHandler(async (req, res) => {
    // if (req.body.password && req.body.email) {
    //     if (user) {
    //         return res.send(user)
    //     }
    // console.log(req.body)
    const { email } = req.body
    // console.log(email, "email")
    let user = await User.findOne({ email: email })
    // let user = await User.findOne(email).select('-password').lean()
    // console.log(req.body)
    // console.log(user, "user")
    if (user && user.email) {
        // let token = await Token.findOne({ userId: user._id })
        // if (!token) {
        // console.log(user._id, "user._id")
        // let token = await new Token({
        //     userId: user._id,
        //     token: crypto.randomBytes(32).toString("hex")
        // }).save()

        const userName = `Hello ${user?.firstname + " " + user?.lastname}`
        // console.log(userName, "userName")
        const url = `${process.env.BASE_URL}owner/${user._id}/verify/`
        // console.log(url, "url")
        await forgetPass(user?.email, "Reset Your Password", userName, url)
        // console.log("email pr chala gya")
        // }
        return res.status(200).send({ message: "Verified krwa le" })
    }
    else {
        res.send({ message: "user nhi mila" })
    }

    // } else {
    //     res.send({ result: "No user Found" })
    // }
})

const verifyEmail = asyncHandler(async (req, res) => {
    try {
        // console.log(req, "verifyEmail")
        const user = await User.findOne({ _id: req.params.id })
        if (!user) return res.status(400).send({ message: "Invalid user" })
        const token = await Token.findOne({
            userId: user._id,
            token: req.params.token
        })
        if (!token) return res.status(400).send({ message: "Invalid token" })
        await user.updateOne({ verified: true })
        await token.remove()
        res.status(200).send({ message: "Email verified successfully" })
    } catch (error) {
        console.log(error)
        res.status(500).send({ message: "Internal Server Error" })
    }
})

// deployment krne kye liye add kr raha hn


const allOwners =  async(req,res,next) => {
try{
    const allOnsers = await User.find({ subType : "owner"})
    res.status(200).json({
        total : allOnsers.length,
        message : "All Owners Fetched Successfully",
        status : true,
        data : allOnsers
    })
}catch(err){
    res.status(500).json({
        message : "No Owners Found",
        status : false
    })
}
}

module.exports = {
    allOwners,
    getAllUsers,
    getAllUserRedux,
    getUser,
    createNewUser,
    updateUser,
    deleteUser,
    logInUser,
    verifyEmail,
    SearchByEmail,
    getAllUsersVerified,
    getUsersVerifiedSearch,
    getAllUsersWP,
    converToCustomer,
    getAllOnlyCustomer,
    getAllUserswithoutDate,
    getVerifiedUserDate,
    forgetPassword,
    getAllUsersApp,
    logInFromERP,
    logOutFromERP,
    updateUserSpecific,
    logInUserAPP,
    getSearchedCustomerMobile,
    getSearchedLeadMobile
}