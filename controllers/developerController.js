const DeveloperName = require('../models/developerName')
const asyncHandler = require('express-async-handler')

const getAlDeveloper = asyncHandler(async (req, res) => {
    const developerName = await DeveloperName.find({
        $and: [
            { softdelete: { $ne: true } } // Filter out softdeleted bookings
        ]
    })
        .sort({ _id: "descending" })
    if (!developerName?.length) {
        return res.status(400).json({ message: "No Developer Name found" })
    }

    const formatteddeveloperName = developerName.map(developerNames => {
        const formattedCreatedAt = developerNames.createdAt
            ? new Date(developerNames.createdAt).toDateString()
            : '';
        return { ...developerNames.toObject(), Created_At: formattedCreatedAt };
    });
    res.json(formatteddeveloperName)
})

const getAlDeveloperSearchApp = asyncHandler(async (req, res) => {
    const params = req.params.key
    const developerName = await DeveloperName.find({
        $and: [
            { softdelete: { $ne: true } } // Filter out softdeleted bookings
        ]
    })
        .sort({ _id: "descending" })
    if (!developerName?.length) {
        return res.status(400).json({ message: "No Developer Name found" })
    }

    const formatteddeveloperName = developerName.map(developerNames => {
        const formattedCreatedAt = developerNames.createdAt
            ? new Date(developerNames.createdAt).toDateString()
            : '';
        return { ...developerNames.toObject(), Created_At: formattedCreatedAt };
    });
    // res.json(formatteddeveloperName)
    const filtereddeveloperNames = formatteddeveloperName.filter(developerName => {
        return Object.values(developerName).some(value => {
            if (typeof value === 'string' && value.toLowerCase().includes(params.toLowerCase())) {
                return true;
            }
            return false;
        });
    });
    res.json(filtereddeveloperNames);
})

const getPaginationDeveloper = asyncHandler(async (req, res) => {
    const page = parseInt(req.query.page || 0)
    const perPage = req.query.perPage || 10
    const sort = req.query.sort
    try {
        const count = await DeveloperName.countDocuments()
        const developers = await DeveloperName.find({
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
            developers
        })
    } catch (err) {
        res.status(400).json({
            err: `Error getting data: ${err.message}`
        })
    }
})

const getPaginationDeveloperWithDate = asyncHandler(async (req, res) => {
    const page = parseInt(req.query.page || 0)
    const perPage = req.query.perPage || 10
    const sort = req.query.sort
    const fromDate = req.query.fromDate
    const toDate = req.query.toDate
    try {
        const count = await DeveloperName.countDocuments()
        const developers = await DeveloperName.find({
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
            developers
        })
    } catch (err) {
        res.status(400).json({
            err: `Error getting data: ${err.message}`
        })
    }
})

const getSearchDeveloper = asyncHandler(async (req, res) => {
    const page = parseInt(req.query.page || 0)
    const perPage = req.query.perPage || 10
    const sort = req.query.sort
    try {
        const count = await DeveloperName.countDocuments()
        const developers = await DeveloperName.find({
            $and: [
                { softdelete: { $ne: true } } // Filter out softdeleted bookings
            ],
            "$or": [
                { "developername": { $regex: req.params.key, $options: 'i' } }
            ]
        })
            .sort({ _id: sort })
            .skip(perPage * page)
            .limit(parseInt(perPage))
        res.status(200).json({
            count: Math.ceil(developers / perPage),
            developers
        })
    } catch (err) {
        res.status(400).json({
            err: `Error getting data: ${err.message}`
        })
    }
})

const getDeveloperNameById = asyncHandler(async (req, res) => {
    const developerNameById = await DeveloperName.findById(req.params.id)
    if (!developerNameById) {
        return res.status(400).json({ message: "No Developer Name found" })
    }
    res.json(developerNameById)
})

const createDeveloper = asyncHandler(async (req, res) => {
    const { developername, developercode } = req.body
    if (!developername) {
        return res.status(400).json({ message: "Developer Name is requires" })
    }
    // else if (!developercode) {
    //     return res.status(400).json({ message: "Developer Code is required" })
    // }

    let duplicate = await DeveloperName.findOne({ developername }).lean().exec()
    if (duplicate) {
        return res.status(409).json({ message: 'Duplicate Developer Name' })
    }

    const developerObject = { developername, developercode }
    const createDeveloper = await DeveloperName.create(developerObject)

    if (createDeveloper) {
        res.status(200).json({ message: `New user ${developername} created` })
    } else {
        res.status(400).json({ message: 'Invalid Developer Name data received' })
    }
})

const updateDeveloper = asyncHandler(async (req, res) => {
    const { _id, developername, developercode } = req.body

    if (!_id) {
        return res.status(400).json({ message: "Id Name is requires" })
    } else if (!developername) {
        return res.status(400).json({ message: "Developer Name is requires" })
    }
    //  else if (!developercode) {
    //     return res.status(400).json({ message: "Developer Code is required" })
    // }

    const developernames = await DeveloperName.findById(_id).exec()

    if (!developernames) {
        res.status(400).json({ message: 'Developer Name not found' })
    }

    const duplicate = await DeveloperName.findOne({ developername }).lean().exec()

    if (duplicate && duplicate?._id.toString() !== _id) {
        return res.status(409).json({ message: 'Duplicate Developer Name' })
    }

    developernames.developername = developername
    developernames.developercode = developercode

    const developerN = await developernames.save()

    res.json({ message: `${developerN.developername} updated` })
})

const updateDeveloperNameCancel = asyncHandler(async (req, res) => {
    // console.log(req.body, "req.body");
    const { _id, ...updateData } = req.body;

    const existingDeveloperName = await DeveloperName.findById(_id).exec();
    if (!existingDeveloperName) {
        return res.status(400).json({ message: 'DeveloperName not found' });
    }

    Object.assign(existingDeveloperName, updateData);

    const updatedDeveloperName = await existingDeveloperName.save();

    return res.json({ message: `${updatedDeveloperName._id} updated` });
});

const deleteDeveloper = asyncHandler(async (req, res) => {
    const { _id } = req.body

    if (!_id) {
        return res.status(400).json({ message: "Developer name Id required" })
    }

    const developerNames = await DeveloperName.findById(_id).exec()

    if (!developerNames) {
        return res.status(400).json({ message: 'Developer name not found' })
    }

    const result = await developerNames.deleteOne()

    const reply = `Developer name ${result?.developername} with Id ${result?._id} deleted`

    res.json(reply)
})

module.exports = {
    getAlDeveloper,
    getDeveloperNameById,
    createDeveloper,
    updateDeveloper,
    deleteDeveloper,
    getPaginationDeveloper,
    getSearchDeveloper,
    getPaginationDeveloperWithDate,
    updateDeveloperNameCancel,
    getAlDeveloperSearchApp
}