const Roles = require('../models/roles')
const asyncHandler = require('express-async-handler')

const getAllRoles = asyncHandler(async (req, res) => {
    const roles = await Roles.find({
        $and: [
            { softdelete: { $ne: true } } // Filter out softdeleted bookings
        ]
    }).lean().sort({ _id: "descending" })
    if (!roles?.length) {
        return res.status(400).json({ message: "No Roles Found" })
    }
    res.json(roles)
})

const getAllRolesForApp = asyncHandler(async (req, res) => {
    const roles = await Roles.find({
        $and: [
            { softdelete: { $ne: true } } // Filter out softdeleted bookings
        ]
    }).lean();

    if (!roles?.length) {
        return res.status(400).json({ message: "No Roles Found" });
    }

    const updatedRoles = roles.map((role) => ({
        ...role,
        createlead: role.createlead || false,
        readlead: role.readlead || false,
        updatelead: role.updatelead || false,
        deletelead: role.deletelead || false,
        convertocustomer: role.convertocustomer || false,
        createcommunity: role.createcommunity || false,
        readcommunity: role.readcommunity || false,
        updatecommunity: role.updatecommunity || false,
        deletecommunity: role.deletecommunity || false,
        createproject: role.createproject || false,
        readproject: role.readproject || false,
        updateproject: role.updateproject || false,
        deleteproject: role.deleteproject || false,
        createbuilding: role.createbuilding || false,
        readbuilding: role.readbuilding || false,
        updatebuilding: role.updatebuilding || false,
        deletebuilding: role.deletebuilding || false,
        createsubtype: role.createsubtype || false,
        readsubtype: role.readsubtype || false,
        updatesubtype: role.updatesubtype || false,
        deletesubtype: role.deletesubtype || false,
        createdeveloper: role.createdeveloper || false,
        readdeveloper: role.readdeveloper || false,
        updatedeveloper: role.updatedeveloper || false,
        deletedeveloper: role.deletedeveloper || false,
        createamenities: role.createamenities || false,
        readamenities: role.readamenities || false,
        updateamenities: role.updateamenities || false,
        deleteamenities: role.deleteamenities || false,
        createpropert: role.createpropert || false,
        readpropert: role.readpropert || false,
        updatepropert: role.updatepropert || false,
        deletepropert: role.deletepropert || false,
        createemployee: role.createemployee || false,
        reademployee: role.reademployee || false,
        updateemployee: role.updateemployee || false,
        deleteemployee: role.deleteemployee || false,
        createrole: role.createrole || false,
        readrole: role.readrole || false,
        updaterole: role.updaterole || false,
        deleterole: role.deleterole || false,
        createcustomer: role.createcustomer || false,
        readcustomer: role.readcustomer || false,
        updatecustomer: role.updatecustomer || false,
        deletecustomer: role.deletecustomer || false,
        createbooking: role.createbooking || false,
        readbooking: role.readbooking || false,
        updatebooking: role.updatebooking || false,
        deletebooking: role.deletebooking || false,
        createavailability: role.createavailability || false,
        readavailability: role.readavailability || false,
        updateavailability: role.updateavailability || false,
        deleteavailability: role.deleteavailability || false,
        createsaleregister: role.createsaleregister || false,
        readsaleregister: role.readsaleregister || false,
        updatesaleregister: role.updatesaleregister || false,
        deletesaleregister: role.deletesaleregister || false,
        createbankdetails: role.createbankdetails || false,
        readbankdetails: role.readbankdetails || false,
        updatebankdetails: role.updatebankdetails || false,
        deletebankdetails: role.deletebankdetails || false,
        createpoa: role.createpoa || false,
        readpoa: role.readpoa || false,
        updatepoa: role.updatepoa || false,
        deletepoa: role.deletepoa || false,
        viewhrmate: role.viewhrmate || false,
        hrmaodule: role.hrmaodule || false,
        createdAt: role.createdAt || "Not Available",
        updatedAt: role.updatedAt || "Not Available",
    }));

    res.json(updatedRoles);
})

const getAllRolesForAppSearch = asyncHandler(async (req, res) => {
    const params = req.params.key
    const roles = await Roles.find({
        $and: [
            { softdelete: { $ne: true } } // Filter out softdeleted bookings
        ]
    }).lean();

    if (!roles?.length) {
        return res.status(400).json({ message: "No Roles Found" });
    }

    const updatedRoles = roles.map((role) => ({
        ...role,
        createlead: role.createlead || false,
        readlead: role.readlead || false,
        updatelead: role.updatelead || false,
        deletelead: role.deletelead || false,
        convertocustomer: role.convertocustomer || false,
        createcommunity: role.createcommunity || false,
        readcommunity: role.readcommunity || false,
        updatecommunity: role.updatecommunity || false,
        deletecommunity: role.deletecommunity || false,
        createproject: role.createproject || false,
        readproject: role.readproject || false,
        updateproject: role.updateproject || false,
        deleteproject: role.deleteproject || false,
        createbuilding: role.createbuilding || false,
        readbuilding: role.readbuilding || false,
        updatebuilding: role.updatebuilding || false,
        deletebuilding: role.deletebuilding || false,
        createsubtype: role.createsubtype || false,
        readsubtype: role.readsubtype || false,
        updatesubtype: role.updatesubtype || false,
        deletesubtype: role.deletesubtype || false,
        createdeveloper: role.createdeveloper || false,
        readdeveloper: role.readdeveloper || false,
        updatedeveloper: role.updatedeveloper || false,
        deletedeveloper: role.deletedeveloper || false,
        createamenities: role.createamenities || false,
        readamenities: role.readamenities || false,
        updateamenities: role.updateamenities || false,
        deleteamenities: role.deleteamenities || false,
        createpropert: role.createpropert || false,
        readpropert: role.readpropert || false,
        updatepropert: role.updatepropert || false,
        deletepropert: role.deletepropert || false,
        createemployee: role.createemployee || false,
        reademployee: role.reademployee || false,
        updateemployee: role.updateemployee || false,
        deleteemployee: role.deleteemployee || false,
        createrole: role.createrole || false,
        readrole: role.readrole || false,
        updaterole: role.updaterole || false,
        deleterole: role.deleterole || false,
        createcustomer: role.createcustomer || false,
        readcustomer: role.readcustomer || false,
        updatecustomer: role.updatecustomer || false,
        deletecustomer: role.deletecustomer || false,
        createbooking: role.createbooking || false,
        readbooking: role.readbooking || false,
        updatebooking: role.updatebooking || false,
        deletebooking: role.deletebooking || false,
        createavailability: role.createavailability || false,
        readavailability: role.readavailability || false,
        updateavailability: role.updateavailability || false,
        deleteavailability: role.deleteavailability || false,
        createsaleregister: role.createsaleregister || false,
        readsaleregister: role.readsaleregister || false,
        updatesaleregister: role.updatesaleregister || false,
        deletesaleregister: role.deletesaleregister || false,
        createbankdetails: role.createbankdetails || false,
        readbankdetails: role.readbankdetails || false,
        updatebankdetails: role.updatebankdetails || false,
        deletebankdetails: role.deletebankdetails || false,
        createpoa: role.createpoa || false,
        readpoa: role.readpoa || false,
        updatepoa: role.updatepoa || false,
        deletepoa: role.deletepoa || false,
        viewhrmate: role.viewhrmate || false,
        hrmaodule: role.hrmaodule || false,
        createdAt: role.createdAt || "Not Available",
        updatedAt: role.updatedAt || "Not Available",
    }));

    const filteredroles = updatedRoles.filter(role => {
        return Object.values(role).some(value => {
            if (typeof value === 'string' && value.toLowerCase().includes(params.toLowerCase())) {
                return true;
            }
            return false;
        });
    });
    res.json(filteredroles);
})

const getPaginationRoles = asyncHandler(async (req, res) => {
    const page = parseInt(req.query.page || 0)
    const perPage = req.query.perPage || 10
    const sort = req.query.sort
    try {
        const count = await Roles.countDocuments()
        const roles = await Roles.find({
            $and: [
                { softdelete: { $ne: true } } // Filter out softdeleted bookings
            ],
            "$or": [
                req.query
            ],
        })
            .sort({ _id: sort })
            .skip(perPage * page)
            .limit(parseInt(perPage))
        res.status(200).json({
            count: Math.ceil(count / perPage),
            roles
        })
    } catch (err) {
        res.status(400).json({
            err: `Error getting data: ${err.message}`
        })
    }
})

const getPaginationRolesWithDate = asyncHandler(async (req, res) => {
    const page = parseInt(req.query.page || 0)
    const perPage = req.query.perPage || 10
    const sort = req.query.sort
    const fromDate = req.query.fromDate
    const toDate = req.query.toDate
    try {
        const count = await Roles.countDocuments()
        const roles = await Roles.find({
            $and: [
                { softdelete: { $ne: true } } // Filter out softdeleted bookings
            ],
            "$or": [
                req.query
            ],
        })
            .find({
                createdAt: { '$gte': new Date(fromDate), "$lte": new Date(toDate) },
            })
            .sort({ _id: sort })
            .skip(perPage * page)
            .limit(parseInt(perPage))
        res.status(200).json({
            count: Math.ceil(count / perPage),
            roles
        })
    } catch (err) {
        res.status(400).json({
            err: `Error getting data: ${err.message}`
        })
    }
})

const getSearchRoles = asyncHandler(async (req, res) => {
    const page = parseInt(req.query.page || 0)
    const perPage = req.query.perPage || 10
    const sort = req.query.sort
    try {
        const count = await Roles.countDocuments()
        const roles = await Roles.find({
            $and: [
                { softdelete: { $ne: true } } // Filter out softdeleted bookings
            ],
            "$or": [
                { "rolename": { $regex: req.params.key, $options: 'i' } }
            ]
        })
            .sort({ _id: sort })
            .skip(perPage * page)
            .limit(parseInt(perPage))
        res.status(200).json({
            count: Math.ceil(roles / perPage),
            roles
        })
    } catch (err) {
        res.status(400).json({
            err: `Error getting data: ${err.message}`
        })
    }
})

const getRole = asyncHandler(async (req, res) => {
    const user = await Roles.findById(req.params.id)
    if (!user) {
        return res.status(400).json({ message: 'No user found' })
    }
    res.json(user)
})

const createNewRoles = asyncHandler(async (req, res) => {
    const { rolename, alloperationlead, createlead, readlead, updatelead, deletelead, convertocustomer, createcommunity, readcommunity, updatecommunity, deletecommunity, createproject, readproject, updateproject, deleteproject, createbuilding, readbuilding, updatebuilding, deletebuilding, createsubtype, readsubtype, updatesubtype, deletesubtype, createdeveloper, readdeveloper, updatedeveloper, deletedeveloper, createamenities, readamenities, updateamenities, deleteamenities, createpropert, readpropert, updatepropert, deletepropert, createemployee, reademployee, updateemployee, deleteemployee, createrole, readrole, updaterole, deleterole, createcustomer, readcustomer, updatecustomer, deletecustomer, createbooking, readbooking, updatebooking, deletebooking, createavailability, readavailability, updateavailability, deleteavailability, createmanagement, readmanagement, updatemanagement, deletemanagement, createtenant, readtenant, updatetenant, deletetenant, createsaleregister, readsaleregister, updatesaleregister, deletesaleregister, createbankdetails, readbankdetails, updatebankdetails, deletebankdetails, createpoa, readpoa, updatepoa, deletepoa, viewhrmate, hrmaodule } = req.body

    //confirming data
    if (!rolename) {
        return res.status(400).json({ message: "All Fields are required" })
    }

    //checking duplicate
    const duplicate = await Roles.findOne({ rolename }).lean().exec()
    if (duplicate) {
        return res.status(400).json({ message: "Duplicate Role Name" })
    }

    const rolesObject = { rolename, alloperationlead, createlead, readlead, updatelead, deletelead, convertocustomer, createcommunity, readcommunity, updatecommunity, deletecommunity, createproject, readproject, updateproject, deleteproject, createbuilding, readbuilding, updatebuilding, deletebuilding, createsubtype, readsubtype, updatesubtype, deletesubtype, createdeveloper, readdeveloper, updatedeveloper, deletedeveloper, createamenities, readamenities, updateamenities, deleteamenities, createpropert, readpropert, updatepropert, deletepropert, createemployee, reademployee, updateemployee, deleteemployee, createrole, readrole, updaterole, deleterole, createcustomer, readcustomer, updatecustomer, deletecustomer, createbooking, readbooking, updatebooking, deletebooking, createavailability, readavailability, updateavailability, deleteavailability, createmanagement, readmanagement, updatemanagement, deletemanagement, createtenant, readtenant, updatetenant, deletetenant, createsaleregister, readsaleregister, updatesaleregister, deletesaleregister, createbankdetails, readbankdetails, updatebankdetails, deletebankdetails, createpoa, readpoa, updatepoa, deletepoa, viewhrmate, hrmaodule }

    const roles = await Roles.create(rolesObject)

    if (roles) {
        res.status(200).json(roles)
    } else {
        res.status(400).json({ message: "Invalid user data received" })
    }
})

const updateRole = asyncHandler(async (req, res) => {
    const { _id, rolename, alloperationlead, createlead, readlead, updatelead, deletelead, convertocustomer, createcommunity, readcommunity, updatecommunity, deletecommunity, createproject, readproject, updateproject, deleteproject, createbuilding, readbuilding, updatebuilding, deletebuilding, createsubtype, readsubtype, updatesubtype, deletesubtype, createdeveloper, readdeveloper, updatedeveloper, deletedeveloper, createamenities, readamenities, updateamenities, deleteamenities, createpropert, readpropert, updatepropert, deletepropert, createemployee, reademployee, updateemployee, deleteemployee, createrole, readrole, updaterole, deleterole, createcustomer, readcustomer, updatecustomer, deletecustomer, createbooking, readbooking, updatebooking, deletebooking, createavailability, readavailability, updateavailability, deleteavailability, createmanagement, readmanagement, updatemanagement, deletemanagement, createtenant, readtenant, updatetenant, deletetenant, createsaleregister, readsaleregister, updatesaleregister, deletesaleregister, createbankdetails, readbankdetails, updatebankdetails, deletebankdetails, createpoa, readpoa, updatepoa, deletepoa, viewhrmate, hrmaodule } = req.body

    // confirm data
    if (!_id) {
        return res.status(400).json({ message: 'Id fields are required' })
    }
    else if (!rolename) {
        return res.status(400).json({ message: 'Firstname fields are required' })
    }
    const user = await Roles.findById(_id).exec()

    if (!rolename) {
        res.status(400).json({ message: 'User not found' })
    }

    //check for duplicate
    const duplicate = await Roles.findOne({ rolename }).lean().exec()
    //All update to the original user
    if (duplicate && duplicate?._id.toString() !== _id) {
        return res.status(409).json({ message: 'Duplicate username' })
    }

    user.rolename = rolename
    user.alloperationlead = alloperationlead
    user.createlead = createlead
    user.readlead = readlead
    user.updatelead = updatelead
    user.deletelead = deletelead
    user.convertocustomer = convertocustomer
    user.createcommunity = createcommunity
    user.readcommunity = readcommunity
    user.updatecommunity = updatecommunity
    user.deletecommunity = deletecommunity
    user.createproject = createproject
    user.readproject = readproject
    user.updateproject = updateproject
    user.deleteproject = deleteproject
    user.createbuilding = createbuilding
    user.readbuilding = readbuilding
    user.updatebuilding = updatebuilding
    user.deletebuilding = deletebuilding
    user.createsubtype = createsubtype
    user.readsubtype = readsubtype
    user.updatesubtype = updatesubtype
    user.deletesubtype = deletesubtype
    user.createdeveloper = createdeveloper
    user.readdeveloper = readdeveloper
    user.updatedeveloper = updatedeveloper
    user.deletedeveloper = deletedeveloper
    user.createamenities = createamenities
    user.readamenities = readamenities
    user.updateamenities = updateamenities
    user.deleteamenities = deleteamenities
    user.createpropert = createpropert
    user.readpropert = readpropert
    user.updatepropert = updatepropert
    user.deletepropert = deletepropert
    user.createemployee = createemployee
    user.reademployee = reademployee
    user.updateemployee = updateemployee
    user.deleteemployee = deleteemployee
    user.createrole = createrole
    user.readrole = readrole
    user.updaterole = updaterole
    user.deleterole = deleterole
    user.createcustomer = createcustomer
    user.readcustomer = readcustomer
    user.updatecustomer = updatecustomer
    user.deletecustomer = deletecustomer
    user.createbooking = createbooking
    user.readbooking = readbooking
    user.updatebooking = updatebooking
    user.deletebooking = deletebooking
    user.createavailability = createavailability
    user.readavailability = readavailability
    user.updateavailability = updateavailability
    user.deleteavailability = deleteavailability
    user.createmanagement = createmanagement
    user.readmanagement = readmanagement
    user.updatemanagement = updatemanagement
    user.deletemanagement = deletemanagement
    user.createtenant = createtenant
    user.readtenant = readtenant
    user.updatetenant = updatetenant
    user.deletetenant = deletetenant
    user.createsaleregister = createsaleregister
    user.readsaleregister = readsaleregister
    user.updatesaleregister = updatesaleregister
    user.deletesaleregister = deletesaleregister
    user.createbankdetails = createbankdetails
    user.readbankdetails = readbankdetails
    user.updatebankdetails = updatebankdetails
    user.deletebankdetails = deletebankdetails
    user.createpoa = createpoa
    user.readpoa = readpoa
    user.updatepoa = updatepoa
    user.deletepoa = deletepoa
    user.viewhrmate = viewhrmate
    user.hrmaodule = hrmaodule

    const updateUser = await user.save()

    res.json({ message: `${updateUser.rolename} updated` })

})

const updateRolesCancel = asyncHandler(async (req, res) => {
    // console.log(req.body, "req.body");
    const { _id, ...updateData } = req.body;

    const existingRoles = await Roles.findById(_id).exec();
    if (!existingRoles) {
        return res.status(400).json({ message: 'Roles not found' });
    }

    Object.assign(existingRoles, updateData);

    const updatedRoles = await existingRoles.save();

    return res.json({ message: `${updatedRoles._id} updated` });
});

const deleteRole = asyncHandler(async (req, res) => {

    const { _id } = req.body
    if (!_id) {
        return res.status(400).json({ message: 'User ID required' })
    }

    const user = await Roles.findById(_id).exec()

    if (!user) {
        return res.status(400).json({ message: 'User not found' })
    }

    const result = await user.deleteOne()

    const reply = `Role with ID ${result._id} deleted`

    res.json(reply)
})

module.exports = {
    getAllRoles,
    createNewRoles,
    deleteRole,
    getRole,
    updateRole,
    getPaginationRoles,
    getSearchRoles,
    getPaginationRolesWithDate,
    getAllRolesForApp,
    updateRolesCancel,
    getAllRolesForAppSearch
}