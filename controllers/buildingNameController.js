const BuildingName = require('../models/buildingName')
const asyncHandler = require('express-async-handler')
const ProjectName = require('../models/projectName')
const CommunityName = require('../models/communityname')
const moment = require('moment-timezone');
const amenities = require('../models/amenities');

const getAllBuildingName = asyncHandler(async (req, res) => {
    const allBuildingName = await BuildingName.find({
        $and: [
            { softdelete: { $ne: true } } // Filter out softdeleted bookings
        ]
    })
        .sort({ _id: "descending" })
    if (!allBuildingName?.length) {
        return res.status(400).json({ message: "No Building Name found" })
    }

    const projectIds = allBuildingName.map(project => project.projectnameid);

    try {
        const projects = await ProjectName.find({ _id: { $in: projectIds } });
        const communityId = projects.map(project => project?.communityid);

        const communityData = await CommunityName.find({ _id: { $in: communityId } });

        const amenitiesIds = allBuildingName.reduce((acc, building) => {
            if (building.amenities && building.amenities.length > 0) {
                acc.push(...building.amenities);
            }
            return acc;
        }, []);

        const amenitiesData = await amenities.find({ _id: { $in: amenitiesIds } });

        const buildingNamewithProjectandCommunity = allBuildingName.map(building => {
            const buildingObject = building.toObject();
            const { buildingname, buildingcode, projectname, projectnameid, _id, createdAt, typicalfloorplan, buildingelevation, amenitiesimages } = buildingObject;
            const updatedAvailability = { buildingname, buildingcode, projectname, projectnameid, _id, createdAt, typicalfloorplan, buildingelevation, amenitiesimages };
            if (projectnameid) {
                const property = projects.find(project => String(project._id) === String(building.projectnameid));
                if (property) {
                    updatedAvailability.project_name = property.projectName;

                    const community = communityData.find(community => String(community._id) === String(property.communityid));
                    if (community) {
                        updatedAvailability.community_name = community.communityname;
                    }
                }

            }
            if (building.amenities && building.amenities.length > 0) {
                updatedAvailability.amenities_data = amenitiesData.filter(amenity => building.amenities.includes(String(amenity._id)));
            }

            return updatedAvailability;
        });

        const formattedDate = buildingNamewithProjectandCommunity?.map(Building_Name => {
            const formattedCreatedAt = Building_Name.createdAt ? moment(Building_Name.createdAt).tz('Asia/Dubai').format('DD MMM YYYY') : '';
            return { ...Building_Name, Created_At: formattedCreatedAt, createdAt: formattedCreatedAt, }
        })

        res.json(formattedDate);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }

    // return res.json(allBuildingName)
})

const getAllBuildingNameSearchApp = asyncHandler(async (req, res) => {
    const params = req.params.key
    const allBuildingName = await BuildingName.find({
        $and: [
            { softdelete: { $ne: true } } // Filter out softdeleted bookings
        ]
    })
        .sort({ _id: "descending" })
    if (!allBuildingName?.length) {
        return res.status(400).json({ message: "No Building Name found" })
    }

    const projectIds = allBuildingName.map(project => project.projectnameid);

    try {
        const projects = await ProjectName.find({ _id: { $in: projectIds } });
        const communityId = projects.map(project => project?.communityid);

        const communityData = await CommunityName.find({ _id: { $in: communityId } });

        const amenitiesIds = allBuildingName.reduce((acc, building) => {
            if (building.amenities && building.amenities.length > 0) {
                acc.push(...building.amenities);
            }
            return acc;
        }, []);

        const amenitiesData = await amenities.find({ _id: { $in: amenitiesIds } });

        const buildingNamewithProjectandCommunity = allBuildingName.map(building => {
            const buildingObject = building.toObject();
            const { buildingname, buildingcode, projectname, projectnameid, _id, createdAt, typicalfloorplan, buildingelevation, amenitiesimages } = buildingObject;
            const updatedAvailability = { buildingname, buildingcode, projectname, projectnameid, _id, createdAt, typicalfloorplan, buildingelevation, amenitiesimages };
            if (projectnameid) {
                const property = projects.find(project => String(project._id) === String(building.projectnameid));
                if (property) {
                    updatedAvailability.project_name = property.projectName;

                    const community = communityData.find(community => String(community._id) === String(property.communityid));
                    if (community) {
                        updatedAvailability.community_name = community.communityname;
                    }
                }

            }
            if (building.amenities && building.amenities.length > 0) {
                updatedAvailability.amenities_data = amenitiesData.filter(amenity => building.amenities.includes(String(amenity._id)));
            }

            return updatedAvailability;
        });

        const formattedDate = buildingNamewithProjectandCommunity?.map(Building_Name => {
            const formattedCreatedAt = Building_Name.createdAt ? moment(Building_Name.createdAt).tz('Asia/Dubai').format('DD MMM YYYY') : '';
            return { ...Building_Name, Created_At: formattedCreatedAt, createdAt: formattedCreatedAt, }
        })

        // res.json(formattedDate);
        // Send the formatted community names as the response
        const filteredbuildings = formattedDate.filter(building => {
            return Object.values(building).some(value => {
                if (typeof value === 'string' && value.toLowerCase().includes(params.toLowerCase())) {
                    return true;
                }
                return false;
            });
        });
        res.json(filteredbuildings);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }

    // return res.json(allBuildingName)
})

const getPaginationBuilding = asyncHandler(async (req, res) => {
    const page = parseInt(req.query.page || 0)
    const perPage = req.query.perPage || 10
    const sort = req.query.sort
    try {
        const count = await BuildingName.countDocuments()
        const buildings = await BuildingName.find({
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
        return res.status(200).json({
            count: Math.ceil(count / perPage),
            buildings
        })
    } catch (err) {
        res.status(400).json({
            err: `Error getting data: ${err.message}`
        })
    }
})

const getBuildingProjectName = asyncHandler(async (req, res) => {
    try {
        const buildings = await BuildingName.find({
            $and: [
                { softdelete: { $ne: true } } // Filter out softdeleted bookings
            ],
            "$or": [
                req.query
            ],
        })
            .sort({ _id: "descending" })
        return res.status(200).json(buildings)
    } catch (err) {
        res.status(400).json({
            err: `Error getting data: ${err.message}`
        })
    }
})

const getPaginationBuildingWithDat = asyncHandler(async (req, res) => {
    const page = parseInt(req.query.page || 0)
    const perPage = req.query.perPage || 10
    const sort = req.query.sort
    const fromDate = req.query.fromDate
    const toDate = req.query.toDate
    try {
        const count = await BuildingName.countDocuments()
        const buildings = await BuildingName.find({
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
        return res.status(200).json({
            count: Math.ceil(count / perPage),
            buildings
        })
    } catch (err) {
        res.status(400).json({
            err: `Error getting data: ${err.message}`
        })
    }
})

const getSearchBuilding = asyncHandler(async (req, res) => {
    const page = parseInt(req.query.page || 0)
    const perPage = req.query.perPage || 10
    const sort = req.query.sort
    try {
        const count = await BuildingName.countDocuments()
        const buildings = await BuildingName.find({
            $and: [
                { softdelete: { $ne: true } } // Filter out softdeleted bookings
            ],
            "$or": [
                { "buildingname": { $regex: req.params.key, $options: 'i' } },
                { "projectname": { $regex: req.params.key, $options: 'i' } },
                { "buildingcode": { $regex: req.params.key, $options: 'i' } },
            ]
        })
            .sort({ _id: "descending" })
            .skip(perPage * page)
            .limit(parseInt(perPage))
        return res.status(200).json({
            count: Math.ceil(buildings / perPage),
            buildings
        })
    } catch (err) {
        res.status(400).json({
            err: `Error getting data: ${err.message}`
        })
    }
})

// const getBuildingNameById = asyncHandler(async (req, res) => {
//     const buildingNameById = await BuildingName.findById(req.params.id)
//     if (!buildingNameById) {
//         return res.status(400).json({ message: "No Building Name found" })
//     }
//     return res.json(buildingNameById)
// })

const getBuildingNameById = asyncHandler(async (req, res) => {
    try {
        const buildingNameById = await BuildingName.findById(req.params.id);

        if (!buildingNameById) {
            return res.status(400).json({ message: "No Building Name found" });
        }

        const amenitiesIds = buildingNameById.amenities || [];
        const amenitiesData = await amenities.find({ _id: { $in: amenitiesIds } });

        const buildingData = buildingNameById.toObject();

        if (amenitiesData.length > 0) {
            buildingData.amenities_data = amenitiesData;
        }

        return res.json(buildingData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});

const getBuildingByName = asyncHandler(async (req, res) => {
    const buildingName = await BuildingName.find({
        $and: [
            { softdelete: { $ne: true } } // Filter out softdeleted bookings
        ],
        "$or": [
            { "buildingname": { $regex: req.params.key, $options: 'i' } }
        ]
    })
        .sort({ _id: "descending" })
    return res.json(buildingName)
})

const getSearchBuildingNameProject = asyncHandler(async (req, res) => {
    try {
        // const building = await BuildingName.find({ projectnameid: req.query.projectnameid })
        const building = await BuildingName.find({
            $and: [
                { softdelete: { $ne: true } } // Filter out softdeleted bookings
            ],
            "$or": [
                req.query
            ],
        })
        res.json(building)
    } catch (err) {
        res.status(400).json({
            err: `Error getting data: ${err.message}`
        })
    }
})

const createBuildingName = asyncHandler(async (req, res) => {
    const { buildingname, buildingcode, projectname, projectnameid, typicalfloorplan, buildingelevation, amenitiesimages, amenities } = req.body
    if (!buildingname || !projectname || !projectnameid) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    // let duplicate = await BuildingName.findOne({ buildingname }).lean().exec()

    // if (duplicate) {
    //     return res.status(409).json({ message: "Duplicate Building Name" })
    // }
    const buildingNameObject = { buildingname, buildingcode, projectname, projectnameid, typicalfloorplan, buildingelevation, amenitiesimages, amenities }
    const createBuildingName = await BuildingName.create(buildingNameObject)

    if (createBuildingName) {
        return res.status(200).json({ message: `New Building ${buildingname} created` })
    } else {
        return res.status(400).json({ message: 'Invalid Building Name data received' })
    }
})

const updateBuilidingName = asyncHandler(async (req, res) => {
    const { _id, buildingname, buildingcode, projectname, projectnameid, typicalfloorplan, buildingelevation, amenitiesimages, amenities } = req.body

    if (!_id || !buildingname || !projectname || !projectnameid) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    const updateBuilidingName = await BuildingName.findById(_id).exec()
    if (!updateBuilidingName) {
        return res.status(400).json({ message: 'Building Name not found' })
    }

    // const duplicate = await BuildingName.findOne({ buildingname }).lean().exec()
    // if (duplicate && duplicate?._id.toString() !== _id) {
    //     return res.status(400).json({ message: 'Duplicate Building Name' })
    // }

    updateBuilidingName.buildingname = buildingname
    updateBuilidingName.buildingcode = buildingcode
    updateBuilidingName.projectnameid = projectnameid
    updateBuilidingName.projectname = projectname
    updateBuilidingName.typicalfloorplan = typicalfloorplan
    updateBuilidingName.buildingelevation = buildingelevation
    updateBuilidingName.amenitiesimages = amenitiesimages
    updateBuilidingName.amenities = amenities
    // updateBuilidingName.amenities = amenities

    const updatedBuildingN = await updateBuilidingName.save()

    return res.json({ message: `${updatedBuildingN.buildingname} updated` })
})

const updateBuildingNameCancel = asyncHandler(async (req, res) => {
    // console.log(req.body, "req.body");
    const { _id, ...updateData } = req.body;

    const existingBuildingName = await BuildingName.findById(_id).exec();
    if (!existingBuildingName) {
        return res.status(400).json({ message: 'BuildingName not found' });
    }

    Object.assign(existingBuildingName, updateData);

    const updatedBuildingName = await existingBuildingName.save();

    return res.json({ message: `${updatedBuildingName._id} updated` });
});

const deleteBuildingName = asyncHandler(async (req, res) => {
    const { _id } = req.body

    if (!_id) {
        return res.status(400).json({ message: "Id is required" })
    }

    const deletedBuilding = await BuildingName.findById(_id).exec()

    if (!deletedBuilding) {
        return res.status(400).json({ message: 'Building Name not found' })
    }

    const result = await deletedBuilding.deleteOne()
    const reply = `Project name ${result?.buildingname} with Id ${result?._id} deleted`

    return res.json(reply)
})

module.exports = {
    getAllBuildingName,
    getBuildingNameById,
    createBuildingName,
    updateBuilidingName,
    deleteBuildingName,
    getPaginationBuilding,
    getSearchBuilding,
    getBuildingByName,
    getPaginationBuildingWithDat,
    getSearchBuildingNameProject,
    getBuildingProjectName,
    updateBuildingNameCancel,
    getAllBuildingNameSearchApp
}