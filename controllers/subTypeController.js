const SubType = require('../models/subType')
const asyncHandler = require('express-async-handler')

const getAlSubTypeName = asyncHandler(async (req, res) => {
    const subTypes = await SubType.find({
        $and: [
            { softdelete: { $ne: true } } // Filter out softdeleted bookings
        ]
    })
        .sort({ _id: "descending" })
    if (!subTypes?.length) {
        return res.status(400).json({ message: "No Sub Type found" })
    }

    const formattedsubTypes = subTypes.map(subTypess => {
        const formattedCreatedAt = subTypess.createdAt
            ? new Date(subTypess.createdAt).toDateString()
            : '';
        return { ...subTypess.toObject(), Created_At: formattedCreatedAt };
    });
    res.json(formattedsubTypes)
})

const getAlSubTypeNameSearchApp = asyncHandler(async (req, res) => {
    const params = req.params.key
    const subTypes = await SubType.find({
        $and: [
            { softdelete: { $ne: true } } // Filter out softdeleted bookings
        ]
    })
        .sort({ _id: "descending" })
    if (!subTypes?.length) {
        return res.status(400).json({ message: "No Sub Type found" })
    }

    const formattedsubTypes = subTypes.map(subTypess => {
        const formattedCreatedAt = subTypess.createdAt
            ? new Date(subTypess.createdAt).toDateString()
            : '';
        return { ...subTypess.toObject(), Created_At: formattedCreatedAt };
    });
    // res.json(formattedsubTypes)
    // Send the formatted community names as the response
    const filteredsubTypes = formattedsubTypes.filter(subType => {
        return Object.values(subType).some(value => {
            if (typeof value === 'string' && value.toLowerCase().includes(params.toLowerCase())) {
                return true;
            }
            return false;
        });
    });
    res.json(filteredsubTypes);
})

const getPaginationSubType = asyncHandler(async (req, res) => {
    const page = parseInt(req.query.page || 0)
    const perPage = req.query.perPage || 10
    const sort = req.query.sort
    try {
        const count = await SubType.countDocuments()
        const subtype = await SubType.find({
            $and: [
                { softdelete: { $ne: true } } // Filter out softdeleted bookings
            ],
            "$or": [
                req.query
            ],
        })
            .sort({ _id: "descending" })
            .skip(perPage * page)
            .limit(parseInt(perPage))
        res.status(200).json({
            count: Math.ceil(count / perPage),
            subtype
        })
    } catch (err) {
        res.status(400).json({
            err: `Error getting data: ${err.message}`
        })
    }
})

const getPaginationSubTypeWithDate = asyncHandler(async (req, res) => {
    const page = parseInt(req.query.page || 0)
    const perPage = req.query.perPage || 10
    const sort = req.query.sort
    const fromDate = req.query.fromDate
    const toDate = req.query.toDate
    try {
        const count = await SubType.countDocuments()
        const subtype = await SubType.find({
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
            .sort({ _id: "descending" })
            .skip(perPage * page)
            .limit(parseInt(perPage))
        res.status(200).json({
            count: Math.ceil(count / perPage),
            subtype
        })
    } catch (err) {
        res.status(400).json({
            err: `Error getting data: ${err.message}`
        })
    }
})

const getSearchSubType = asyncHandler(async (req, res) => {
    const page = parseInt(req.query.page || 0)
    const perPage = req.query.perPage || 10
    const sort = req.query.sort
    try {
        const count = await SubType.countDocuments()
        const subtype = await SubType.find({
            $and: [
                { softdelete: { $ne: true } } // Filter out softdeleted bookings
            ],
            "$or": [
                { "subtypename": { $regex: req.params.key, $options: 'i' } }
            ]
        })
            .sort({ _id: "descending" })
            .skip(perPage * page)
            .limit(parseInt(perPage))
        res.status(200).json({
            count: Math.ceil(subtype / perPage),
            subtype
        })
    } catch (err) {
        res.status(400).json({
            err: `Error getting data: ${err.message}`
        })
    }
})

const getSubTypeById = asyncHandler(async (req, res) => {
    const subTypeById = await SubType.findById(req.params.id)
    if (!subTypeById) {
        return res.status(400).json({ message: "No Sub Type found" })
    }
    res.json(subTypeById)
})

const createSubType = asyncHandler(async (req, res) => {
    const { subtypename, subtypecode } = req.body
    if (!subtypename) {
        return res.status(400).json({ message: "Sub Type Name is requires" })
    }
    // else if (!subtypecode) {
    //     return res.status(400).json({ message: "Sub Type Code is required" })
    // }

    let duplicate = await SubType.findOne({ subtypename }).lean().exec()
    if (duplicate) {
        return res.status(409).json({ message: 'Duplicate Sub Type Name' })
    }

    const subTypeObject = { subtypename, subtypecode }
    const createSubType = await SubType.create(subTypeObject)

    if (createSubType) {
        res.status(200).json({ message: `New user ${subtypename} created` })
    } else {
        res.status(400).json({ message: 'Invalid Project Name data received' })
    }
})

const updateSubType = asyncHandler(async (req, res) => {
    const { _id, subtypename, subtypecode } = req.body

    if (!_id) {
        return res.status(400).json({ message: "Id Name is requires" })
    } else if (!subtypename) {
        return res.status(400).json({ message: "Project Name is requires" })
    }
    // else if (!subtypecode) {
    //     return res.status(400).json({ message: "Project Code is required" })
    // }

    const subTypeNames = await SubType.findById(_id).exec()

    if (!subTypeNames) {
        res.status(400).json({ message: 'Project Name not found' })
    }

    const duplicate = await SubType.findOne({ subtypename }).lean().exec()

    if (duplicate && duplicate?._id.toString() !== _id) {
        return res.status(409).json({ message: 'Duplicate Sub Type Name' })
    }

    subTypeNames.subtypename = subtypename
    subTypeNames.subtypecode = subtypecode

    const subTypeN = await subTypeNames.save()

    res.json({ message: `${subTypeN.subtypename} updated` })
})

const updateSubTypeCancel = asyncHandler(async (req, res) => {
    // console.log(req.body, "req.body");
    const { _id, ...updateData } = req.body;

    const existingSubType = await SubType.findById(_id).exec();
    if (!existingSubType) {
        return res.status(400).json({ message: 'SubType not found' });
    }

    Object.assign(existingSubType, updateData);

    const updatedSubType = await existingSubType.save();

    return res.json({ message: `${updatedSubType._id} updated` });
});

const deleteSubType = asyncHandler(async (req, res) => {
    const { _id } = req.body

    if (!_id) {
        return res.status(400).json({ message: "Project name Id required" })
    }

    const subTypeN = await SubType.findById(_id).exec()

    if (!subTypeN) {
        return res.status(400).json({ message: 'Project name not found' })
    }

    const result = await subTypeN.deleteOne()

    const reply = `Sub Type name ${result?.subtypename} with Id ${result?._id} deleted`

    res.json(reply)
})

module.exports = {
    getAlSubTypeName,
    getSubTypeById,
    createSubType,
    updateSubType,
    deleteSubType,
    getPaginationSubType,
    getSearchSubType,
    getPaginationSubTypeWithDate,
    updateSubTypeCancel,
    getAlSubTypeNameSearchApp
}