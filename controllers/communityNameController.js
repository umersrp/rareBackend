const CommunityName = require('../models/communityname')
const asyncHandler = require('express-async-handler')
let Country = require('country-state-city').Country;
let City = require('country-state-city').City;
// const CountryStatePicker = require('country-state-picker');
// let State = require('country-state-city').State;

// const getAlCommunityName = asyncHandler(async (req, res) => {
//     const communityName = await CommunityName.find({
//         $and: [
//             { softdelete: { $ne: true } } // Filter out softdeleted bookings
//         ]
//     })
//         .sort({ _id: "descending" })
//     if (!communityName?.length) {
//         return res.status(400).json({ message: "No Community Name found" })
//     }

//     const formattedDate = communityName?.map(community_Name => {
//         const formattedCreatedAt = community_Name.createdAt ? new Date(community_Name.createdAt).toDateString() : ''
//         return { ...community_Name, Created_At: formattedCreatedAt }
//     })

//     // res.json(communityName)
//     res.json(formattedDate)
// })

const getAlCommunityName = asyncHandler(async (req, res) => {
    try {
        // Retrieve community names and filter out soft-deleted entries
        const communityNames = await CommunityName.find({
            softdelete: { $ne: true } // Filter out softdeleted bookings
        }).sort({ _id: "descending" });

        if (!communityNames.length) {
            return res.status(404).json({ message: "No Community Name found" });
        }

        // Format the createdAt date for each community name
        const formattedCommunityNames = communityNames.map(communityName => {
            const formattedCreatedAt = communityName.createdAt
                ? new Date(communityName.createdAt).toDateString()
                : '';
            return { ...communityName.toObject(), Created_At: formattedCreatedAt };
        });

        // Send the formatted community names as the response
        res.json(formattedCommunityNames);
    } catch (error) {
        console.error("Error fetching community names:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

const getAlCommunityNameSearch = asyncHandler(async (req, res) => {
    const params = req.params.key
    try {
        // Retrieve community names and filter out soft-deleted entries
        const communityNames = await CommunityName.find({
            softdelete: { $ne: true } // Filter out softdeleted bookings
        }).sort({ _id: "descending" });

        if (!communityNames.length) {
            return res.status(404).json({ message: "No Community Name found" });
        }

        // Format the createdAt date for each community name
        const formattedCommunityNames = communityNames.map(communityName => {
            const formattedCreatedAt = communityName.createdAt
                ? new Date(communityName.createdAt).toDateString()
                : '';
            return { ...communityName.toObject(), Created_At: formattedCreatedAt };
        });

        // Send the formatted community names as the response
        const filteredCommunitys = formattedCommunityNames.filter(community => {
            return Object.values(community).some(value => {
                if (typeof value === 'string' && value.toLowerCase().includes(params.toLowerCase())) {
                    return true;
                }
                return false;
            });
        });
        res.json(filteredCommunitys);
    } catch (error) {
        console.error("Error fetching community names:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

const getPaginationCommunity = asyncHandler(async (req, res) => {
    const page = parseInt(req.query.page || 0)
    const perPage = req.query.perPage || 10
    const sort = req.query.sort
    try {
        const count = await CommunityName.countDocuments()
        const communities = await CommunityName.find({
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
            communities
        })
    } catch (err) {
        res.status(400).json({
            err: `Error getting data: ${err.message}`
        })
    }
})

const getPaginationCommunityWithDate = asyncHandler(async (req, res) => {
    const page = parseInt(req.query.page || 0)
    const perPage = req.query.perPage || 10
    const sort = req.query.sort
    const fromDate = req.query.fromDate
    const toDate = req.query.toDate
    try {
        const count = await CommunityName.countDocuments()
        const communities = await CommunityName.find({
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
            communities
        })
    } catch (err) {
        res.status(400).json({
            err: `Error getting data: ${err.message}`
        })
    }
})

const getSearchCommunity = asyncHandler(async (req, res) => {
    const page = parseInt(req.query.page || 0)
    const perPage = req.query.perPage || 10
    const sort = req.query.sort
    try {
        const count = await CommunityName.countDocuments()
        const communities = await CommunityName.find({
            $and: [
                { softdelete: { $ne: true } } // Filter out softdeleted bookings
            ],
            "$or": [
                { "communityname": { $regex: req.params.key, $options: 'i' } },
                { "communitycode": { $regex: req.params.key, $options: 'i' } },
            ]
        })
            .sort({ _id: sort })
            .skip(perPage * page)
            .limit(parseInt(perPage))
        res.status(200).json({
            count: Math.ceil(communities / perPage),
            communities
        })
    } catch (err) {
        res.status(400).json({
            err: `Error getting data: ${err.message}`
        })
    }
})

const getCommunityNameById = asyncHandler(async (req, res) => {
    const CommunityNameById = await CommunityName.findById(req.params.id)
    if (!CommunityNameById) {
        return res.status(400).json({ message: "No Community Name found" })
    }
    res.json(CommunityNameById)
})

const createCommunity = asyncHandler(async (req, res) => {
    const { communityname, communitycode, city, country } = req.body
    if (!communityname) {
        return res.status(400).json({ message: "Community Name is requires" })
    }
    // else if (!communitycode) {
    //     return res.status(400).json({ message: "Community Code is required" })
    // }

    let duplicate = await CommunityName.findOne({ communityname }).lean().exec()
    if (duplicate) {
        return res.status(409).json({ message: 'Duplicate Community Name' })
    }

    const communityObject = { communityname, communitycode, city, country }
    const createCommunity = await CommunityName.create(communityObject)

    if (createCommunity) {
        res.status(200).json({ message: `New user ${communityname} created` })
    } else {
        res.status(400).json({ message: 'Invalid Community Name data received' })
    }
})

const updateCommunity = asyncHandler(async (req, res) => {
    const { _id, communityname, communitycode, city, country } = req.body

    if (!_id) {
        return res.status(400).json({ message: "Id Name is requires" })
    } else if (!communityname) {
        return res.status(400).json({ message: "Community Name is requires" })
    }
    // else if (!communitycode) {
    //     return res.status(400).json({ message: "Community Code is required" })
    // }

    const communitynames = await CommunityName.findById(_id).exec()

    if (!communitynames) {
        res.status(400).json({ message: 'Community Name not found' })
    }

    const duplicate = await CommunityName.findOne({ communityname }).lean().exec()

    if (duplicate && duplicate?._id.toString() !== _id) {
        return res.status(409).json({ message: 'Duplicate Community Name' })
    }

    communitynames.communityname = communityname
    communitynames.communitycode = communitycode
    communitynames.country = country
    communitynames.city = city

    const communityeN = await communitynames.save()

    res.json({ message: `${communityeN.communityname} updated` })
})

const updateCommunityNameCancel = asyncHandler(async (req, res) => {
    // console.log(req.body, "req.body");
    const { _id, ...updateData } = req.body;

    const existingCommunityName = await CommunityName.findById(_id).exec();
    if (!existingCommunityName) {
        return res.status(400).json({ message: 'CommunityName not found' });
    }

    Object.assign(existingCommunityName, updateData);

    const updatedCommunityName = await existingCommunityName.save();

    return res.json({ message: `${updatedCommunityName._id} updated` });
});

const deleteCommunityName = asyncHandler(async (req, res) => {
    const { _id } = req.body

    if (!_id) {
        return res.status(400).json({ message: "Community name Id required" })
    }

    const CommunityNames = await CommunityName.findById(_id).exec()

    if (!CommunityNames) {
        return res.status(400).json({ message: 'Community name not found' })
    }

    const result = await CommunityNames.deleteOne()

    const reply = `Community name ${result?.communityname} with Id ${result?._id} deleted`

    res.json(reply)
})

const getAllCountry = (req, res) => {
    let allCountries = Country.getAllCountries()
    const simplifiedCountries = allCountries.map(country => ({
        name: country.name,
        isoCode: country.isoCode
    }));
    res.json(simplifiedCountries);
};

const getCitiesInCountry = (req, res) => {
    const { country } = req.params;
    let city = City.getCitiesOfCountry(country)
    const simplifiedCities = city.map(country => ({
        name: country.name,
        countryCode: country.countryCode
    }));
    res.json(simplifiedCities);
};

module.exports = {
    getAlCommunityName,
    getCommunityNameById,
    createCommunity,
    updateCommunity,
    deleteCommunityName,
    getPaginationCommunity,
    getSearchCommunity,
    getPaginationCommunityWithDate,
    updateCommunityNameCancel,
    getAllCountry,
    getCitiesInCountry,
    getAlCommunityNameSearch
}