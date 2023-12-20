const AmenitiesName = require('../models/amenities')
const asyncHandler = require('express-async-handler')

const getAllAmenitiesName = asyncHandler(async (req, res) => {
    const allAmenitiesName = await AmenitiesName.find()
    if (!allAmenitiesName?.length) {
        return res.status(400).json({ message: "No Amenities Name found" })
    }
    res.json(allAmenitiesName)
})

const getAllAmenitiesNameSearchApp = asyncHandler(async (req, res) => {
    const params = req.params.key
    const allAmenitiesName = await AmenitiesName.find()
    if (!allAmenitiesName?.length) {
        return res.status(400).json({ message: "No Amenities Name found" })
    }
    // res.json(allAmenitiesName)
    const formattedAmenities = allAmenitiesName.map(Amenities => {
        const formattedCreatedAt = Amenities.createdAt
            ? new Date(Amenities.createdAt).toDateString()
            : '';
        return { ...Amenities.toObject(), Created_At: formattedCreatedAt };
    });

    if (allAmenitiesName) {
        const filteredAmenitiesNames = formattedAmenities?.filter(Amenities => {
            return Object.values(Amenities).some(value => {
                if (typeof value === 'string' && value.toLowerCase().includes(params.toLowerCase())) {
                    return true;
                }
                return false;
            });
        });
        res.json(filteredAmenitiesNames);
    } else {
        res.status(400).json({
            message: `not found`
        })

    }


})

const getPaginationAmenities = asyncHandler(async (req, res) => {
    const page = parseInt(req.query.page || 0)
    const perPage = req.query.perPage || 10
    const sort = req.query.sort
    try {
        const count = await AmenitiesName.countDocuments()
        const amenities = await AmenitiesName.find({
            "$or": [
                req.query
            ],
        })
            .sort({ _id: sort })
            .skip(perPage * page)
            .limit(parseInt(perPage))
        res.status(200).json({
            count: Math.ceil(count / perPage),
            amenities
        })
    } catch (err) {
        res.status(400).json({
            err: `Error getting data: ${err.message}`
        })
    }
})

const getPaginationAmenitiesWithDate = asyncHandler(async (req, res) => {
    const page = parseInt(req.query.page || 0)
    const perPage = req.query.perPage || 10
    const sort = req.query.sort
    const fromDate = req.query.fromDate
    const toDate = req.query.toDate
    try {
        const count = await AmenitiesName.countDocuments()
        const amenities = await AmenitiesName.find({
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
            amenities
        })
    } catch (err) {
        res.status(400).json({
            err: `Error getting data: ${err.message}`
        })
    }
})

const getSearchAmenities = asyncHandler(async (req, res) => {
    const page = parseInt(req.query.page || 0)
    const perPage = req.query.perPage || 10
    const sort = req.query.sort
    try {
        const count = await AmenitiesName.countDocuments()
        const amenities = await AmenitiesName.find({
            "$or": [
                { "amenitiesname": { $regex: req.params.key, $options: 'i' } },
                { "amenitiescode": { $regex: req.params.key, $options: 'i' } },
            ]
        })
            .sort({ _id: sort })
            .skip(perPage * page)
            .limit(parseInt(perPage))
        res.status(200).json({
            count: Math.ceil(amenities / perPage),
            amenities
        })
    } catch (err) {
        res.status(400).json({
            err: `Error getting data: ${err.message}`
        })
    }
})

const getAmenitiesNameById = asyncHandler(async (req, res) => {
    const amenitiesNameById = await AmenitiesName.findById(req.params.id)
    if (!amenitiesNameById) {
        return res.status(400).json({ message: "No Amenities Name found" })
    }
    res.json(amenitiesNameById)
})

const createAmenitiesName = asyncHandler(async (req, res) => {
    const { amenitiesname, amenitiescode } = req.body
    if (!amenitiesname) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    let duplicate = await AmenitiesName.findOne({ amenitiesname }).lean().exec()

    if (duplicate) {
        return res.status(409).json({ message: "Duplicate Amenities Name" })
    }

    const amenitiesNameObject = { amenitiesname, amenitiescode }
    const createAmenitiesName = await AmenitiesName.create(amenitiesNameObject)

    if (createAmenitiesName) {
        return res.status(200).json({ message: `New Amenities ${amenitiesname} created` })
    } else {
        return res.status(400).json({ message: 'Invalid Amenities Name data received' })
    }
})

const updateamenitiesName = asyncHandler(async (req, res) => {
    const { _id, amenitiesname, amenitiescode } = req.body

    if (!_id || !amenitiesname) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    const updateamenitiesName = await AmenitiesName.findById(_id).exec()
    if (!updateamenitiesName) {
        return res.status(400).json({ message: 'Amenities Name not found' })
    }

    const duplicate = await AmenitiesName.findOne({ amenitiesname }).lean().exec()
    if (duplicate && duplicate?._id.toString() !== _id) {
        return res.status(400).json({ message: 'Duplicate Amenities Name' })
    }

    updateamenitiesName.amenitiesname = amenitiesname
    updateamenitiesName.amenitiescode = amenitiescode

    const updatedAmenitiesN = await updateamenitiesName.save()

    res.json({ message: `${updatedAmenitiesN.amenitiesname} updated` })
})

const deleteAmenitiesName = asyncHandler(async (req, res) => {
    const { _id } = req.body

    if (!_id) {
        return res.status(400).json({ message: "Id is required" })
    }

    const deletedAmenities = await AmenitiesName.findById(_id).exec()

    if (!deletedAmenities) {
        return res.status(400).json({ message: 'Amenities Name not found' })
    }

    const result = await deletedAmenities.deleteOne()
    const reply = `Project name ${result?.amenitiesname} with Id ${result?._id} deleted`

    res.json(reply)
})

module.exports = {
    getAllAmenitiesName,
    getAmenitiesNameById,
    createAmenitiesName,
    updateamenitiesName,
    deleteAmenitiesName,
    getPaginationAmenities,
    getSearchAmenities,
    getPaginationAmenitiesWithDate,
    getAllAmenitiesNameSearchApp
}