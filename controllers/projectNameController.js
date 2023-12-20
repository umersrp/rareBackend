const ProjectName = require('../models/projectName')
const asyncHandler = require('express-async-handler')
const CommunityName = require('../models/communityname')

const getAllProjectName = asyncHandler(async (req, res) => {
    const projectNames = await ProjectName.find({
        $and: [
            { softdelete: { $ne: true } } // Filter out softdeleted bookings
        ]
    })
        .sort({ _id: "descending" })

    if (!projectNames?.length) {
        return res.status(400).json({ message: "No Project Name found" })
    }

    const communityId = projectNames.map(property => property.communityid);
    const communityData = await CommunityName.find({ _id: { $in: communityId } });

    const updatedProjectName = projectNames.map(property => {
        const propertyObject = property.toObject();
        const { communityid, _id, projectName, projectCode, communityname, createdAt } = propertyObject;
        const updatedProperty = { communityid, _id, projectName, projectCode, communityname, createdAt };

        if (communityid) {
            const community = communityData.find(community => community._id.toHexString() === communityid.toHexString());
            updatedProperty.community_name = community?.communityname
        }

        return updatedProperty;
    });

    // return res.json(updatedProjectName);

    const formattedDate = updatedProjectName?.map(ProjectName => {
        const formattedCreatedAt = ProjectName.createdAt ? new Date(ProjectName.createdAt).toDateString() : ''
        return { ...ProjectName, Created_At: formattedCreatedAt }
    })

    return res.json(formattedDate);
})

const getAllProjectNameSearch = asyncHandler(async (req, res) => {
    const params = req.params.key
    const projectNames = await ProjectName.find({
        $and: [
            { softdelete: { $ne: true } } // Filter out softdeleted bookings
        ]
    })
        .sort({ _id: "descending" })

    if (!projectNames?.length) {
        return res.status(400).json({ message: "No Project Name found" })
    }

    const communityId = projectNames.map(property => property.communityid);
    const communityData = await CommunityName.find({ _id: { $in: communityId } });

    const updatedProjectName = projectNames.map(property => {
        const propertyObject = property.toObject();
        const { communityid, _id, projectName, projectCode, communityname, createdAt } = propertyObject;
        const updatedProperty = { communityid, _id, projectName, projectCode, communityname, createdAt };

        if (communityid) {
            const community = communityData.find(community => community._id.toHexString() === communityid.toHexString());
            updatedProperty.community_name = community?.communityname
        }

        return updatedProperty;
    });

    // return res.json(updatedProjectName);

    const formattedDate = updatedProjectName?.map(ProjectName => {
        const formattedCreatedAt = ProjectName.createdAt ? new Date(ProjectName.createdAt).toDateString() : ''
        return { ...ProjectName, Created_At: formattedCreatedAt }
    })

    const filteredprojectnames = formattedDate.filter(projectname => {
        return Object.values(projectname).some(value => {
            if (typeof value === 'string' && value.toLowerCase().includes(params.toLowerCase())) {
                return true;
            }
            return false;
        });
    });

    return res.json(filteredprojectnames);
})

const getPaginationProjectName = asyncHandler(async (req, res) => {
    // console.log(req.query);
    try {
        const projects = await ProjectName.find({
            $and: [
                { softdelete: { $ne: true } } // Filter out softdeleted bookings
            ],
            "$or": [
                req.query
            ],
        })
            .sort({ _id: "descending" })
        // .sort({ _id: sort })
        // .skip(perPage * page)
        // .limit(parseInt(perPage))
        const communityId = projects.map(property => property.communityid);
        const communityData = await CommunityName.find({ _id: { $in: communityId } });

        const updatedProjectName = projects.map(property => {
            const propertyObject = property.toObject();
            const { communityid, _id, projectName, projectCode, communityname } = propertyObject;
            const updatedProperty = { communityid, _id, projectName, projectCode, communityname };

            if (communityid) {
                const community = communityData.find(community => community._id.toHexString() === communityid.toHexString());
                updatedProperty.community_name = community?.communityname
            }

            return updatedProperty;
        });

        return res.json(updatedProjectName);
    } catch (err) {
        res.status(400).json({
            err: `Error getting data: ${err.message}`
        })
    }
})

const getPaginationProjectNameWithDate = asyncHandler(async (req, res) => {
    const page = parseInt(req.query.page || 0)
    const perPage = req.query.perPage || 10
    const sort = req.query.sort
    const fromDate = req.query.fromDate
    const toDate = req.query.toDate
    try {
        const count = await ProjectName.countDocuments()
        const projects = await ProjectName.find({
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
            projects
        })
    } catch (err) {
        res.status(400).json({
            err: `Error getting data: ${err.message}`
        })
    }
})

const getSearchProjectName = asyncHandler(async (req, res) => {
    // console.log(req.params.key);
    // const page = parseInt(req.query.page || 0)
    // const perPage = req.query.perPage || 10
    // const sort = req.query.sort
    try {
        const count = await ProjectName.countDocuments()
        const projects = await ProjectName.find({
            $and: [
                { softdelete: { $ne: true } } // Filter out softdeleted bookings
            ],
            "$or": [
                { "projectName": { $regex: req.params.key, $options: 'i' } },
                { "communityname": { $regex: req.params.key, $options: 'i' } },
                { "communityid": { $regex: req.params.key, $options: 'i' } },
            ]
        })
        // .sort({ _id: sort })
        // .skip(perPage * page)
        // .limit(parseInt(perPage))
        res.status(200).json({
            count: Math.ceil(projects / perPage),
            projects
        })
    } catch (err) {
        res.status(400).json({
            err: `Error getting data: ${err.message}`
        })
    }
})

const getSearchProjectNameCommunity = asyncHandler(async (req, res) => {
    try {
        const projects = await ProjectName.find({ communityid: req.query.communityid })
        res.json(projects)
    } catch (err) {
        res.status(400).json({
            err: `Error getting data: ${err.message}`
        })
    }
})

const getProjectNameById = asyncHandler(async (req, res) => {
    const projectNameId = await ProjectName.findById(req.params.id)
    if (!projectNameId) {
        return res.status(400).json({ message: "No Project Name found" })
    }

    const communityData = await CommunityName.findById(projectNameId.communityid);

    const updatedProperty = {
        ...projectNameId.toObject(),
        community_name: communityData?.communityname,
    };

    return res.json(updatedProperty);

})

const createProjectName = asyncHandler(async (req, res) => {
    const { projectName, projectCode, communityname, communityid } = req.body
    if (!projectName) {
        return res.status(400).json({ message: "Project Name is requires" })
    }
    //  else if (!projectCode) {
    //     return res.status(400).json({ message: "Project Code is required" })
    // } 
    else if (!communityname) {
        return res.status(400).json({ message: "Community Name is required" })
    }

    // let duplicate = await ProjectName.findOne({ projectName }).lean().exec()
    // if (duplicate) {
    //     return res.status(409).json({ message: 'Duplicate Project Name' })
    // }

    const projectNameObject = { projectName, projectCode, communityid, communityname }
    const projectNames = await ProjectName.create(projectNameObject)

    if (projectNames) {
        res.status(200).json({ message: `New user ${projectName} created` })
    } else {
        res.status(400).json({ message: 'Invalid Project Name data received' })
    }
})

const updateProjectName = asyncHandler(async (req, res) => {
    const { _id, projectName, projectCode, communityname, communityid } = req.body

    if (!_id) {
        return res.status(400).json({ message: "Id Name is requires" })
    } else if (!projectName) {
        return res.status(400).json({ message: "Project Name is requires" })
    }
    //  else if (!projectCode) {
    //     return res.status(400).json({ message: "Project Code is required" })
    // } 
    else if (!communityname) {
        return res.status(400).json({ message: "Community Name is required" })
    }

    const projectNames = await ProjectName.findById(_id).exec()

    if (!projectName) {
        res.status(400).json({ message: 'Project Name not found' })
    }

    // const duplicate = await ProjectName.findOne({ projectName }).lean().exec()

    // if (duplicate && duplicate?._id.toString() !== _id) {
    //     return res.status(409).json({ message: 'Duplicate Project Name' })
    // }

    projectNames.projectName = projectName
    projectNames.projectCode = projectCode
    projectNames.communityid = communityid
    projectNames.communityname = communityname

    const updateProjectN = await projectNames.save()

    res.json({ message: `${updateProjectN.projectName} updated` })
})

const updateProjectNameCancel = asyncHandler(async (req, res) => {
    // console.log(req.body, "req.body");
    const { _id, ...updateData } = req.body;

    const existingProjectName = await ProjectName.findById(_id).exec();
    if (!existingProjectName) {
        return res.status(400).json({ message: 'ProjectName not found' });
    }

    Object.assign(existingProjectName, updateData);

    const updatedProjectName = await existingProjectName.save();

    return res.json({ message: `${updatedProjectName._id} updated` });
});

const deleteProjectName = asyncHandler(async (req, res) => {
    const { _id } = req.body

    if (!_id) {
        return res.status(400).json({ message: "Project name Id required" })
    }

    const projectN = await ProjectName.findById(_id).exec()

    if (!projectN) {
        return res.status(400).json({ message: 'Project name not found' })
    }

    const result = await projectN.deleteOne()

    const reply = `Project name ${result?.projectName} with Id ${result?._id} deleted`

    res.json(reply)
})

module.exports = {
    getAllProjectName,
    getProjectNameById,
    createProjectName,
    updateProjectName,
    deleteProjectName,
    getPaginationProjectName,
    getSearchProjectName,
    getPaginationProjectNameWithDate,
    getSearchProjectNameCommunity,
    updateProjectNameCancel,
    getAllProjectNameSearch
}