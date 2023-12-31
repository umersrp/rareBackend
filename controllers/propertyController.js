const AddProperty = require('../models/addProperty')
const BuildingName = require('../models/buildingName')
const User = require('../models/User')
const CommunityName = require('../models/communityname')
const ProjectName = require('../models/projectName')
const SubType = require('../models/subType')
const DeveloperName = require('../models/developerName')
const TenantContract = require('../models/tenantContract')
const asyncHandler = require('express-async-handler')
const sendEmail = require('../utils/sendEmail')
const cron = require('node-cron');
const Employee = require('../models/employee')
const managementContract = require('../models/managementContract')
const rentpurchase = require('../models/rentpurchase')
const tenantContract = require('../models/tenantContract')

const getAllProperty = asyncHandler(async (req, res) => {
    // let filteringfilter = req.query.filteringfilter
    // let sort = parseInt(req.query.sort || 1)
    const allProperties = await AddProperty.find({
        $and: [
            { owner_changed: { $ne: true } },
            { softdelete: { $ne: true } } // Filter out softdeleted bookings
        ],
        // $and: [
        //     { owner_changed: { $ne: true } } // Filter out softdeleted bookings
        // ]
    }).sort({ _id: "descending" })
    // .sort({ filteringfilter: sort })
    if (!allProperties?.length) {
        return res.status(400).json({ message: "No Unit found" })
    }
    return res.json(allProperties)
})

const getAllPropertyConnect = async (req, res) => {
    const limit = req.query.limit || 50;
    const offset = req.query.offset || 1;
   
    const skip = (offset - 1) * limit 
    try{
        const allProperties = await AddProperty.find({
            $and: [
                { softdelete: { $ne: true } },
                { owner_changed: { $ne: true } } // Filter out softdeleted bookings
            ]
        }).limit(limit).skip(skip)

        if (!allProperties.length) {
            return res.status(400).json({ message: "No Unit found" });
        }
    
        const propertyIds = allProperties.map(property => property.buildingid);
        const ownerId = allProperties.map(property => property.customerid);
        const ownerRepresentativeId = allProperties.map(property => property.owner_representative_id);
        const communityId = allProperties.map(property => property.communityid);
        const projectnameId = allProperties.map(property => property.projectnameid);
        const subtypeId = allProperties.map(property => property.subtypeid);
        const develpoerId = allProperties.map(property => property?.developerid);
        const availableId = allProperties.map(property => property?.available_id);
        const employeeCreatedBy = allProperties.map(employee => employee.createdBy);
        const employeeIdsUpdatedBy = allProperties.map(employee => employee.updatedBy);
    
        const buildingData = await BuildingName.find({ _id: { $in: propertyIds } });
        const userData = await User.find({ _id: { $in: ownerId } });
        const RepresentativeId = await User.find({ _id: { $in: ownerRepresentativeId } });
        const communityData = await CommunityName.find({ _id: { $in: communityId } });
        const projectnameData = await ProjectName.find({ _id: { $in: projectnameId } });
        const subtypeData = await SubType.find({ _id: { $in: subtypeId } });
        const developerData = await DeveloperName.find({ _id: { $in: develpoerId } });
        const avaiabilityData = await rentpurchase.find({ _id: { $in: availableId } });
        const employeeDataCreatedBy = await Employee.find({ _id: { $in: employeeCreatedBy } });
        const employeeDataUpdatedBy = await Employee.find({ _id: { $in: employeeIdsUpdatedBy } });
    
        const updatedProperties = allProperties.map(property => {
            const propertyObject = property.toObject();
            const { buildingid, customerid, communityid, projectnameid, subtypeid, developerid, unitnumber, createdAt, _id, usage, propertytype, projectstatus, transactiontype, typelayout, tenancystatus, floor, sizearea, plotsize, ownerassociation, nobathroom, halfbathroom, furnished, kitchen, noparking, balcony, dewapremises, district, parkingbay, propertyview, purchasedate, ownernamedeed, purchasevaue, totalbathroom, totalbedroom, streetnumber, maidroom, storeroom, bedroomensuite, bathroomensuite, driverroom, otherroom, ensuite, is_available, available_for, unlisted, available_id, owner_representative_name, owner_representative_id, titledeeddocument, propertyimages, floorplan, typicalfloorplan, buildingelevation, amenitiesimages, unitplanattachment, plotplanattachment, builduparea, youtubelink, measure_units, propertylocation, no_ownernamedeed, createdBy, updatedBy, updatedAt, OwnerNameAsPerDeed } = propertyObject;
            const updatedProperty = { buildingid, customerid, communityid, projectnameid, subtypeid, developerid, unitnumber, createdAt, _id, usage, propertytype, projectstatus, transactiontype, typelayout, tenancystatus, floor, sizearea, plotsize, ownerassociation, nobathroom, halfbathroom, furnished, kitchen, noparking, balcony, dewapremises, district, parkingbay, propertyview, purchasedate, ownernamedeed, purchasevaue, totalbathroom, totalbedroom, streetnumber, maidroom, storeroom, bedroomensuite, bathroomensuite, driverroom, otherroom, ensuite, is_available, available_for, unlisted, available_id, owner_representative_name, owner_representative_id, titledeeddocument, propertyimages, floorplan, typicalfloorplan, buildingelevation, amenitiesimages, unitplanattachment, plotplanattachment, builduparea, youtubelink, measure_units, propertylocation, no_ownernamedeed, createdBy, updatedBy, updatedAt, OwnerNameAsPerDeed };
    
            if (buildingid) {
                const building = buildingData.find(building => building._id.toHexString() === buildingid.toHexString());
                updatedProperty.building_name = building?.buildingname;
            }
    
            if (customerid) {
                const user = userData.find(owner => owner._id.toHexString() === customerid.toHexString());
                updatedProperty.owner_name = user?.firstname + " " + user?.lastname;
                updatedProperty.owner_email = user?.email;
            }
    
            if (owner_representative_id) {
                const user = RepresentativeId.find(owner => owner._id.toHexString() === owner_representative_id.toHexString());
                updatedProperty.owner_representative_name = user?.firstname + " " + user?.lastname;
                updatedProperty.owner_representative_email = user?.email;
            }
    
            if (communityid) {
                const community = communityData.find(community => community._id.toHexString() === communityid.toHexString());
                updatedProperty.community_name = community?.communityname
            }
    
            if (projectnameid) {
                const projectname = projectnameData.find(projectname => projectname._id.toHexString() === projectnameid.toHexString());
                updatedProperty.project_name = projectname?.projectName
            }
    
            if (subtypeid) {
                const subtype = subtypeData.find(subtype => subtype._id.toHexString() === subtypeid.toHexString());
                updatedProperty.subtype_name = subtype?.subtypename
            }
    
            if (developerid) {
                const developer = developerData.find(developer => developer._id.toHexString() === developerid.toHexString());
                updatedProperty.developer_name = developer?.developername
            }
    
            if (availableId) {
                const avaiability = avaiabilityData.find(avaiability => String(avaiability?.porpertyid) === _id.toHexString());
                updatedProperty.multivaluation = avaiability?.multivaluation;
                updatedProperty.propertystatus = avaiability?.propertystatus;
                updatedProperty.unlisted = avaiability?.unlisted;
                updatedProperty.un_listed = avaiability?.unlisted;
                updatedProperty.multi_propertyvaluation = avaiability?.multi_propertyvaluation;
            }
    
            const employeeCreatedBy = employeeDataCreatedBy.find(employee => String(employee._id) === String(createdBy));
            if (employeeCreatedBy) {
                updatedProperty.employee_email_createdBy = employeeCreatedBy?.email;
            }
            const employeeUpdatedBy = employeeDataUpdatedBy.find(employee => String(employee._id) === String(updatedBy));
            if (employeeUpdatedBy) {
                updatedProperty.employee_email_updatedBy = employeeUpdatedBy?.email;
            }
            return updatedProperty;
        });
    
         res
         .status(200)
         .json({
            message: `${updatedProperties.length} Properties data fetched successfully` , 
            status:true,
            data : updatedProperties
        })
    }catch(err){
        console.log("lll",err)
        res.status(500).json({message: `no property found` , status:false});
    }
    
};

const getPaginationProperty = asyncHandler(async (req, res) => {
    const page = parseInt(req.query.page || 0)
    const perPage = req.query.perPage || 10
    const sort = req.query.sort
    // console.log(req.query)
    try {
        const count = await AddProperty.countDocuments()
        const property = await AddProperty.find({
            $and: [
                { softdelete: { $ne: true } },
                { owner_changed: { $ne: true } } // Filter out softdeleted bookings
            ]
        })
            // .sort(req.query)
            .sort({ _id: sort })
            .skip(perPage * page)
            .limit(parseInt(perPage))
        return res.status(200).json({
            count: Math.ceil(count / perPage),
            property
        })
    } catch (err) {
        res.status(400).json({
            err: `Error getting data: ${err.message}`
        })
    }
})

const getBetweenDateProperty = asyncHandler(async (req, res) => {
    const fromDate = req.query.fromDate
    const toDate = req.query.toDate
    const page = parseInt(req.query.page || 0)
    const perPage = req.query.perPage || 10
    const sort = req.query.sort
    try {
        const count = await AddProperty.countDocuments()
        const property = await AddProperty.find({
            createdAt: { '$gte': new Date(fromDate), "$lte": new Date(toDate) },
            // toDate: { '$lte': new Date(toDate) }
        })
            .sort({ _id: sort })
            .skip(perPage * page)
            .limit(parseInt(perPage))
        return res.status(200).json({
            count: Math.ceil(count / perPage),
            property
        })
    } catch (err) {
        res.status(400).json({
            err: `Error getting data: ${err.message}`
        })
    }
})

const getSearchProperty = asyncHandler(async (req, res) => {
    try {
        const property = await AddProperty.find({
            "$or": [
                { "unitnumber": { $regex: req.params.key, $options: 'i' } },
                { "projectname": { $regex: req.params.key, $options: 'i' } },
                { "buildingname": { $regex: req.params.key, $options: 'i' } },
                { "develpoername": { $regex: req.params.key, $options: 'i' } },
                { "communityname": { $regex: req.params.key, $options: 'i' } },
                { "customername": { $regex: req.params.key, $options: 'i' } },
            ]
        })
            .collation({ locale: "en" })
        return res.status(200).json(property)
    } catch (err) {
        res.status(400).json({
            err: `Error getting data: ${err.message}`
        })
    }
})

const getSearchPropertyMobile = asyncHandler(async (req, res) => {
    const params = req.params.key
    const allProperties = await AddProperty.find({
        $and: [
            { softdelete: { $ne: true } },
            { owner_changed: { $ne: true } } // Filter out softdeleted bookings
        ]
    }).sort({ _id: "descending" });

    if (!allProperties?.length) {
        return res.status(400).json({ message: "No Unit found" });
    }

    const propertyIds = allProperties.map(property => property.buildingid);
    const ownerId = allProperties.map(property => property.customerid);
    const ownerRepresentativeId = allProperties.map(property => property.owner_representative_id);
    const communityId = allProperties.map(property => property.communityid);
    const projectnameId = allProperties.map(property => property.projectnameid);
    const subtypeId = allProperties.map(property => property.subtypeid);
    const develpoerId = allProperties.map(property => property?.developerid);
    const employeeCreatedBy = allProperties.map(employee => employee.createdBy);
    const employeeIdsUpdatedBy = allProperties.map(employee => employee.updatedBy);

    const buildingData = await BuildingName.find({ _id: { $in: propertyIds } });
    const userData = await User.find({ _id: { $in: ownerId } });
    const RepresentativeId = await User.find({ _id: { $in: ownerRepresentativeId } });
    const communityData = await CommunityName.find({ _id: { $in: communityId } });
    const projectnameData = await ProjectName.find({ _id: { $in: projectnameId } });
    const subtypeData = await SubType.find({ _id: { $in: subtypeId } });
    const developerData = await DeveloperName.find({ _id: { $in: develpoerId } });
    const employeeDataCreatedBy = await Employee.find({ _id: { $in: employeeCreatedBy } });
    const employeeDataUpdatedBy = await Employee.find({ _id: { $in: employeeIdsUpdatedBy } });

    const updatedProperties = allProperties.map(property => {
        const propertyObject = property.toObject();
        const { buildingid, customerid, communityid, projectnameid, subtypeid, developerid, unitnumber, createdAt, _id, usage, propertytype, projectstatus, transactiontype, typelayout, tenancystatus, floor, sizearea, plotsize, ownerassociation, nobathroom, halfbathroom, furnished, kitchen, noparking, balcony, dewapremises, district, parkingbay, propertyview, purchasedate, ownernamedeed, purchasevaue, totalbathroom, totalbedroom, streetnumber, maidroom, storeroom, bedroomensuite, bathroomensuite, driverroom, otherroom, ensuite, is_available, available_for, unlisted, available_id, owner_representative_name, owner_representative_id, titledeeddocument, propertyimages, floorplan, typicalfloorplan, buildingelevation, amenitiesimages, unitplanattachment, plotplanattachment, builduparea, youtubelink, measure_units, propertylocation, no_ownernamedeed, createdBy, updatedBy, updatedAt, OwnerNameAsPerDeed } = propertyObject;
        const updatedProperty = { buildingid, customerid, communityid, projectnameid, subtypeid, developerid, unitnumber, createdAt, _id, usage, propertytype, projectstatus, transactiontype, typelayout, tenancystatus, floor, sizearea, plotsize, ownerassociation, nobathroom, halfbathroom, furnished, kitchen, noparking, balcony, dewapremises, district, parkingbay, propertyview, purchasedate, ownernamedeed, purchasevaue, totalbathroom, totalbedroom, streetnumber, maidroom, storeroom, bedroomensuite, bathroomensuite, driverroom, otherroom, ensuite, is_available, available_for, unlisted, available_id, owner_representative_name, owner_representative_id, titledeeddocument, propertyimages, floorplan, typicalfloorplan, buildingelevation, amenitiesimages, unitplanattachment, plotplanattachment, builduparea, youtubelink, measure_units, propertylocation, no_ownernamedeed, createdBy, updatedBy, updatedAt, OwnerNameAsPerDeed };

        if (buildingid) {
            const building = buildingData.find(building => building._id.toHexString() === buildingid.toHexString());
            updatedProperty.building_name = building?.buildingname;
        }

        if (customerid) {
            const user = userData.find(owner => owner._id.toHexString() === customerid.toHexString());
            updatedProperty.owner_name = user?.firstname + " " + user?.lastname;
            updatedProperty.owner_email = user?.email;
        }

        if (owner_representative_id) {
            const user = RepresentativeId.find(owner => owner._id.toHexString() === owner_representative_id.toHexString());
            updatedProperty.owner_representative_name = user?.firstname + " " + user?.lastname;
            updatedProperty.owner_representative_email = user?.email;
        }

        if (communityid) {
            const community = communityData.find(community => community._id.toHexString() === communityid.toHexString());
            updatedProperty.community_name = community?.communityname
        }

        if (projectnameid) {
            const projectname = projectnameData.find(projectname => projectname._id.toHexString() === projectnameid.toHexString());
            updatedProperty.project_name = projectname?.projectName
        }

        if (subtypeid) {
            const subtype = subtypeData.find(subtype => subtype._id.toHexString() === subtypeid.toHexString());
            updatedProperty.subtype_name = subtype?.subtypename
        }

        if (developerid) {
            const developer = developerData.find(developer => developer._id.toHexString() === developerid.toHexString());
            updatedProperty.developer_name = developer?.developername
        }

        const employeeCreatedBy = employeeDataCreatedBy.find(employee => String(employee._id) === String(createdBy));
        if (employeeCreatedBy) {
            updatedProperty.employee_email_createdBy = employeeCreatedBy?.email;
        }
        const employeeUpdatedBy = employeeDataUpdatedBy.find(employee => String(employee._id) === String(updatedBy));
        if (employeeUpdatedBy) {
            updatedProperty.employee_email_updatedBy = employeeUpdatedBy?.email;
        }
        return updatedProperty;
    });

    // return res.json(updatedProperties);
    // Filter updatedProperties based on params
    const filteredProperties = updatedProperties.filter(property => {
        return Object.values(property).some(value => {
            if (typeof value === 'string' && value.toLowerCase().includes(params.toLowerCase())) {
                return true;
            }
            return false;
        });
    });

    return res.json(filteredProperties);
})

const getSearchPropertyForCustomer = asyncHandler(async (req, res) => {
    const page = parseInt(req.query.page || 0)
    const perPage = req.query.perPage || 10
    const sort = req.query.sort
    try {
        const count = await AddProperty.countDocuments()
        const property = await AddProperty.find({
            "$or": [
                { "unitnumber": { $regex: req.params.key, $options: 'i' } },
                { "projectname": { $regex: req.params.key, $options: 'i' } },
                { "buildingname": { $regex: req.params.key, $options: 'i' } },
                { "develpoername": { $regex: req.params.key, $options: 'i' } },
                { "communityname": { $regex: req.params.key, $options: 'i' } },
            ]
        })
            .find(({ customerid: req.query.customerid }))
            .collation({ locale: "en" })
            .sort({ _id: sort })
            .skip(perPage * page)
            .limit(parseInt(perPage))
        return res.status(200).json({
            count: Math.ceil(property / perPage),
            property
        })
    } catch (err) {
        res.status(400).json({
            err: `Error getting data: ${err.message}`
        })
    }
})

const getAdvanceSearchOwner = asyncHandler(async (req, res) => {
    const params = req.params.key

    try {
        const allProperties = await AddProperty
            .find({
                $and: [
                    { owner_changed: { $ne: true } },
                    { softdelete: { $ne: true } }
                ]
            })
            .sort({ _id: -1 }); // Sorting by _id in descending order
        if (!allProperties?.length) {
            return res.status(400).json({ message: "No Unit found" });
        }

        const propertyIdForTenant = allProperties.map(property => property._id);
        const propertyIds = allProperties.map(property => property.buildingid);
        const ownerId = allProperties.map(property => property.customerid);
        const ownerRepresentativeId = allProperties.map(property => property.owner_representative_id);
        const communityId = allProperties.map(property => property.communityid);
        const projectnameId = allProperties.map(property => property.projectnameid);
        const subtypeId = allProperties.map(property => property.subtypeid);
        const develpoerId = allProperties.map(property => property?.developerid);
        const employeeCreatedBy = allProperties.map(employee => employee.createdBy);
        const employeeIdsUpdatedBy = allProperties.map(employee => employee.updatedBy);
        const availableId = allProperties.map(property => property?._id);

        const avaiabilityData = await rentpurchase.find({ porpertyid: { $in: availableId } });
        const propertyIdTenant = await TenantContract.find({ propertyid: { $in: propertyIdForTenant } });
        const propertyIdManagementContract = await managementContract.find({ propertyid: { $in: propertyIdForTenant } });
        const propertyIdAvailability = await rentpurchase.find({ porpertyid: { $in: propertyIdForTenant } });
        const buildingData = await BuildingName.find({ _id: { $in: propertyIds } });
        const userData = await User.find({ _id: { $in: ownerId } });
        const RepresentativeId = await User.find({ _id: { $in: ownerRepresentativeId } });
        const communityData = await CommunityName.find({ _id: { $in: communityId } });
        const projectnameData = await ProjectName.find({ _id: { $in: projectnameId } });
        const subtypeData = await SubType.find({ _id: { $in: subtypeId } });
        const developerData = await DeveloperName.find({ _id: { $in: develpoerId } });
        const employeeDataCreatedBy = await Employee.find({ _id: { $in: employeeCreatedBy } });
        const employeeDataUpdatedBy = await Employee.find({ _id: { $in: employeeIdsUpdatedBy } });
        // const tenantDataIds = await tenantContract.find({ propertyid: { $in: employeeIdsUpdatedBy } });

        const updatedProperties = allProperties.map(property => {
            const propertyObject = property.toObject();
            const { buildingid, customerid, communityid, projectnameid, subtypeid, developerid, unitnumber, createdAt, _id, usage, propertytype, projectstatus, transactiontype, typelayout, tenancystatus, floor, sizearea, plotsize, ownerassociation, nobathroom, halfbathroom, furnished, kitchen, noparking, balcony, dewapremises, district, parkingbay, propertyview, purchasedate, ownernamedeed, purchasevaue, totalbathroom, totalbedroom, streetnumber, maidroom, storeroom, bedroomensuite, bathroomensuite, driverroom, otherroom, ensuite, is_available, available_for, unlisted, available_id, propertylocation, owner_representative_name, owner_representative_id, titledeeddocument, propertyimages, floorplan, typicalfloorplan, buildingelevation, amenitiesimages, youtubelink, unitplanattachment, plotplanattachment, builduparea, no_ownernamedeed, measure_units, OwnerNameAsPerDeed, createdBy, updatedBy, updatedAt } = propertyObject;
            const updatedProperty = { buildingid, customerid, communityid, projectnameid, subtypeid, developerid, unitnumber, createdAt, _id, usage, propertytype, projectstatus, transactiontype, typelayout, tenancystatus, floor, sizearea, plotsize, ownerassociation, nobathroom, halfbathroom, furnished, kitchen, noparking, balcony, dewapremises, district, parkingbay, propertyview, purchasedate, ownernamedeed, purchasevaue, totalbathroom, totalbedroom, streetnumber, maidroom, storeroom, bedroomensuite, bathroomensuite, driverroom, otherroom, ensuite, is_available, available_for, unlisted, available_id, propertylocation, owner_representative_name, owner_representative_id, titledeeddocument, propertyimages, floorplan, typicalfloorplan, buildingelevation, youtubelink, amenitiesimages, unitplanattachment, plotplanattachment, builduparea, no_ownernamedeed, measure_units, OwnerNameAsPerDeed, createdBy, updatedBy, updatedAt };

            if (_id) {
                const tenancy_id = propertyIdTenant.find(tenancy => tenancy.propertyid.toHexString() === _id.toHexString());
                updatedProperty.tenant_id = tenancy_id?._id;
                const management_id = propertyIdManagementContract.find(management => management.propertyid.toHexString() === _id.toHexString());
                updatedProperty.management_id = management_id?._id;
                const avaiability_id = propertyIdAvailability.find(avaiability => avaiability.porpertyid === _id.toHexString());
                if (avaiability_id?.propertystatus !== "Multiple" && (avaiability_id?.propertystatus === "Sale" || avaiability_id?.propertystatus === "Rent") && avaiability_id?.unlisted === false && avaiability_id?.softdelete === false) {
                    updatedProperty.propertyvaluation = avaiability_id?.propertyvaluation;
                }
            }

            if (buildingid) {
                const building = buildingData.find(building => building._id.toHexString() === buildingid.toHexString());
                updatedProperty.building_name = building?.buildingname;
            }

            if (customerid) {
                const user = userData.find(owner => owner._id.toHexString() === customerid.toHexString());
                updatedProperty.owner_name = user?.firstname + " " + user?.lastname;
                updatedProperty.owner_email = user?.email;
            }

            if (owner_representative_id) {
                const user = RepresentativeId.find(owner => owner._id.toHexString() === owner_representative_id.toHexString());
                updatedProperty.owner_representative_name = user?.firstname + " " + user?.lastname;
                updatedProperty.owner_representative_email = user?.email;
            }

            if (communityid) {
                const community = communityData.find(community => community._id.toHexString() === communityid.toHexString());
                updatedProperty.community_name = community?.communityname
            }

            if (projectnameid) {
                const projectname = projectnameData.find(projectname => projectname._id.toHexString() === projectnameid.toHexString());
                updatedProperty.project_name = projectname?.projectName
            }

            if (subtypeid) {
                const subtype = subtypeData.find(subtype => subtype._id.toHexString() === subtypeid.toHexString());
                updatedProperty.subtype_name = subtype?.subtypename
            }

            if (developerid) {
                const developer = developerData.find(developer => developer._id.toHexString() === developerid.toHexString());
                updatedProperty.developer_name = developer?.developername
            }

            if (availableId) {
                const avaiability = avaiabilityData.find(avaiability => String(avaiability?.porpertyid) === _id.toHexString());
                // updatedProperty.multivaluation = avaiability?.multivaluation;
                // updatedProperty.propertystatus = avaiability?.propertystatus;
                // updatedProperty.unlisted = avaiability?.unlisted;
                // updatedProperty.multi_propertyvaluation = avaiability?.multi_propertyvaluation;
                // console.log(avaiability, "avaiability")
                if (avaiability) {
                    // Condition 1: avaiability with property ID found
                    updatedProperty.multivaluation = avaiability?.multivaluation;
                    updatedProperty.propertystatus = avaiability?.propertystatus;
                    updatedProperty.unlisted = avaiability?.unlisted;
                    updatedProperty.multi_propertyvaluation = avaiability?.multi_propertyvaluation;
                    updatedProperty.propertyvaluation = avaiability?.propertyvaluation;
                }

            }

            const employeeCreatedBy = employeeDataCreatedBy.find(employee => String(employee._id) === String(createdBy));
            if (employeeCreatedBy) {
                updatedProperty.employee_email_createdBy = employeeCreatedBy?.email;
            }
            const employeeUpdatedBy = employeeDataUpdatedBy.find(employee => String(employee._id) === String(updatedBy));
            if (employeeUpdatedBy) {
                updatedProperty.employee_email_updatedBy = employeeUpdatedBy?.email;
            }
            return updatedProperty;
        });
        const filteredpropertys = updatedProperties.filter(property => {
            return Object.values(property).some(value => {
                if (typeof value === 'string' && value.toLowerCase().includes(params.toLowerCase())) {
                    return true;
                }
                return false;
            });
        });

        res.json(filteredpropertys);

    } catch (error) {
        res.status(400).json({
            err: `Error getting data: ${err.message}`
        })
    }
})

const getAdvanceSearch = asyncHandler(async (req, res) => {

    try {
        const allProperties = await AddProperty
            .find({
                $and: [
                    { owner_changed: { $ne: true } },
                    { softdelete: { $ne: true } }
                ]
            })
            .or([
                req.query,
                // Other conditions can be added here as needed
            ])
            .sort({ _id: -1 }); // Sorting by _id in descending order
        if (!allProperties?.length) {
            return res.status(400).json({ message: "No Unit found" });
        }

        const propertyIdForTenant = allProperties.map(property => property._id);
        const propertyIdForavailityId = allProperties.map(property => property.available_id);
       // console.log(propertyIdForTenant,"propertyIdForTenant",propertyIdForavailityId)
        const propertyIds = allProperties.map(property => property.buildingid);
        const ownerId = allProperties.map(property => property.customerid);
        const ownerRepresentativeId = allProperties.map(property => property.owner_representative_id);
        const communityId = allProperties.map(property => property.communityid);
        const projectnameId = allProperties.map(property => property.projectnameid);
        const subtypeId = allProperties.map(property => property.subtypeid);
        const develpoerId = allProperties.map(property => property?.developerid);
        const employeeCreatedBy = allProperties.map(employee => employee.createdBy);
        const employeeIdsUpdatedBy = allProperties.map(employee => employee.updatedBy);
        const availableId = allProperties.map(property => property?._id);

        const avaiabilityData = await rentpurchase.find({ _id: { $in: propertyIdForavailityId } });
        const propertyIdTenant = await TenantContract.find({ propertyid: { $in: propertyIdForTenant } });
        const propertyIdManagementContract = await managementContract.find({ propertyid: { $in: propertyIdForTenant } });
        const propertyIdAvailability = await rentpurchase.find({ porpertyid: { $in: propertyIdForTenant } });
        const buildingData = await BuildingName.find({ _id: { $in: propertyIds } });
        const userData = await User.find({ _id: { $in: ownerId } });
        const RepresentativeId = await User.find({ _id: { $in: ownerRepresentativeId } });
        const communityData = await CommunityName.find({ _id: { $in: communityId } });
        const projectnameData = await ProjectName.find({ _id: { $in: projectnameId } });
        const subtypeData = await SubType.find({ _id: { $in: subtypeId } });
        const developerData = await DeveloperName.find({ _id: { $in: develpoerId } });
        const employeeDataCreatedBy = await Employee.find({ _id: { $in: employeeCreatedBy } });
        const employeeDataUpdatedBy = await Employee.find({ _id: { $in: employeeIdsUpdatedBy } });
        // const tenantDataIds = await tenantContract.find({ propertyid: { $in: employeeIdsUpdatedBy } });
      
        const updatedProperties = allProperties.map(property => {
            const propertyObject = property.toObject();
            const { buildingid, customerid, communityid, projectnameid, subtypeid, developerid, unitnumber, createdAt, _id, usage, propertytype, projectstatus, transactiontype, typelayout, tenancystatus, floor, sizearea, plotsize, ownerassociation, nobathroom, halfbathroom, furnished, kitchen, noparking, balcony, dewapremises, district, parkingbay, propertyview, purchasedate, ownernamedeed, purchasevaue, totalbathroom, totalbedroom, streetnumber, maidroom, storeroom, bedroomensuite, bathroomensuite, driverroom, otherroom, ensuite, is_available, available_for, unlisted, available_id, propertylocation, owner_representative_name, owner_representative_id, titledeeddocument, propertyimages, floorplan, typicalfloorplan, buildingelevation, amenitiesimages, youtubelink, unitplanattachment, plotplanattachment, builduparea, no_ownernamedeed, measure_units, OwnerNameAsPerDeed, createdBy, updatedBy, updatedAt } = propertyObject;
            const updatedProperty = { buildingid, customerid, communityid, projectnameid, subtypeid, developerid, unitnumber, createdAt, _id, usage, propertytype, projectstatus, transactiontype, typelayout, tenancystatus, floor, sizearea, plotsize, ownerassociation, nobathroom, halfbathroom, furnished, kitchen, noparking, balcony, dewapremises, district, parkingbay, propertyview, purchasedate, ownernamedeed, purchasevaue, totalbathroom, totalbedroom, streetnumber, maidroom, storeroom, bedroomensuite, bathroomensuite, driverroom, otherroom, ensuite, is_available, available_for, unlisted, available_id, propertylocation, owner_representative_name, owner_representative_id, titledeeddocument, propertyimages, floorplan, typicalfloorplan, buildingelevation, youtubelink, amenitiesimages, unitplanattachment, plotplanattachment, builduparea, no_ownernamedeed, measure_units, OwnerNameAsPerDeed, createdBy, updatedBy, updatedAt };

            if (_id) {
                const tenancy_id = propertyIdTenant.find(tenancy => tenancy.propertyid.toHexString() === _id.toHexString());
                updatedProperty.tenant_id = tenancy_id?._id;
                const management_id = propertyIdManagementContract.find(management => management.propertyid.toHexString() === _id.toHexString());
                updatedProperty.management_id = management_id?._id;
                const avaiability_id = propertyIdAvailability.find(avaiability => avaiability.porpertyid === _id.toHexString());
                if (avaiability_id?.propertystatus !== "Multiple" && (avaiability_id?.propertystatus === "Sale" || avaiability_id?.propertystatus === "Rent") && avaiability_id?.unlisted === false && avaiability_id?.softdelete === false) {
                    updatedProperty.propertyvaluation = avaiability_id?.propertyvaluation;
                }
            }

            if (buildingid) {
                const building = buildingData.find(building => building._id.toHexString() === buildingid.toHexString());
                updatedProperty.building_name = building?.buildingname;
            }

            if (customerid) {
                const user = userData.find(owner => owner._id.toHexString() === customerid.toHexString());
                updatedProperty.owner_name = user?.firstname + " " + user?.lastname;
                updatedProperty.owner_email = user?.email;
            }

            if (owner_representative_id) {
                const user = RepresentativeId.find(owner => owner._id.toHexString() === owner_representative_id.toHexString());
                updatedProperty.owner_representative_name = user?.firstname + " " + user?.lastname;
                updatedProperty.owner_representative_email = user?.email;
            }

            if (communityid) {
                const community = communityData.find(community => community._id.toHexString() === communityid.toHexString());
                updatedProperty.community_name = community?.communityname
            }

            if (projectnameid) {
                const projectname = projectnameData.find(projectname => projectname._id.toHexString() === projectnameid.toHexString());
                updatedProperty.project_name = projectname?.projectName
            }

            if (subtypeid) {
                const subtype = subtypeData.find(subtype => subtype._id.toHexString() === subtypeid.toHexString());
                updatedProperty.subtype_name = subtype?.subtypename
            }

            if (developerid) {
                const developer = developerData.find(developer => developer._id.toHexString() === developerid.toHexString());
                updatedProperty.developer_name = developer?.developername
            }
         
            if (availableId) {
                 const avaiability  = avaiabilityData.find(avaiability =>avaiability?.porpertyid === _id.toString());



                // updatedProperty.multivaluation = avaiability?.multivaluation;
                // updatedProperty.propertystatus = avaiability?.propertystatus;
                // updatedProperty.unlisted = avaiability?.unlisted;
                // updatedProperty.multi_propertyvaluation = avaiability?.multi_propertyvaluation;
               
                if (avaiability) {
                    // Condition 1: avaiability with property ID found
                    updatedProperty.multivaluation = avaiability?.multivaluation?.filter(data => data.unlisted === false ? data : null);
                    updatedProperty.propertystatus = avaiability?.propertystatus;
                    updatedProperty.unlisted = avaiability?.unlisted;
                    updatedProperty.multi_propertyvaluation = avaiability?.multi_propertyvaluation;
                }

            }

            const employeeCreatedBy = employeeDataCreatedBy.find(employee => String(employee._id) === String(createdBy));
            if (employeeCreatedBy) {
                updatedProperty.employee_email_createdBy = employeeCreatedBy?.email;
            }
            const employeeUpdatedBy = employeeDataUpdatedBy.find(employee => String(employee._id) === String(updatedBy));
            if (employeeUpdatedBy) {
                updatedProperty.employee_email_updatedBy = employeeUpdatedBy?.email;
            }
            return updatedProperty;
        });

        return res.json(updatedProperties);

    } catch (err) {
        res.status(400).json({
            err: `Error getting data: ${err.message}`
        })
    }
})

const getAdvanceSearchwithDate = asyncHandler(async (req, res) => {
    const page = parseInt(req.query.page || 0)
    const perPage = req.query.perPage || 10
    const sort = req.query.sort

    // console.log(req.query)
    const fromDate = req.query.fromDate
    const toDate = req.query.toDate
    // const unitnumber = { $regex: req.query.unitnumber, $options: 'i' }
    // const projectname = { $regex: req.query.projectname, $options: 'i' }
    // const developername = { $regex: req.query.developername, $options: 'i' }
    // const buildingname = { $regex: req.query.buildingname, $options: 'i' }
    // const communityname = { $regex: req.query.communityname, $options: 'i' }
    // const usage = { $regex: req.query.usage, $options: 'i' }
    // const propertytype = { $regex: req.query.propertytype, $options: 'i' }
    // const projectstatus = { $regex: req.query.projectstatus, $options: 'i' }
    // const transactiontype = { $regex: req.query.transactiontype, $options: 'i' }
    // const subtype = { $regex: req.query.subtype, $options: 'i' }
    // const typelayout = { $regex: req.query.typelayout, $options: 'i' }
    // const tenancystatus = { $regex: req.query.tenancystatus, $options: 'i' }
    // const floor = { $regex: req.query.floor, $options: 'i' }
    // const sizearea = { $regex: req.query.sizearea, $options: 'i' }
    // const plotsize = { $regex: req.query.plotsize, $options: 'i' }
    // const nobathroom = { $regex: req.query.nobathroom, $options: 'i' }
    // const halfbathroom = { $regex: req.query.halfbathroom, $options: 'i' }
    // const furnished = { $regex: req.query.furnished, $options: 'i' }
    // const kitchen = { $regex: req.query.kitchen, $options: 'i' }
    // const balcony = { $regex: req.query.balcony, $options: 'i' }
    // const dewapremises = { $regex: req.query.dewapremises, $options: 'i' }
    // const district = { $regex: req.query.district, $options: 'i' }
    // const parkingbay = { $regex: req.query.parkingbay, $options: 'i' }
    // const propertyview = { $regex: req.query.propertyview, $options: 'i' }
    // const propertycountry = { $regex: req.query.propertycountry, $options: 'i' }
    // const propertycity = { $regex: req.query.propertycity, $options: 'i' }
    // const amenities = { $regex: req.query.amenities, $options: 'i' }

    try {
        const count = await AddProperty.countDocuments()
        const property = await AddProperty
            .find({
                "$or": [
                    req.query
                    // { unitnumber, projectname, developername, buildingname, communityname, usage, propertytype, projectstatus, transactiontype, subtype, typelayout, tenancystatus, floor, sizearea, plotsize, nobathroom, halfbathroom, furnished, kitchen, balcony, dewapremises, district, parkingbay, propertyview, propertycountry, propertycity, amenities },
                    // {createdAt: { '$gte': new Date(fromDate), "$lte": new Date(toDate) }}
                ],
                // createdAt: { '$gte': new Date(fromDate), "$lte": new Date(toDate) }
            })
            // .find({
            //     "$or": [
            //         { unitnumber, projectname, developername, buildingname, communityname, usage, propertytype, projectstatus, transactiontype, subtype, typelayout, tenancystatus, floor, sizearea, plotsize, ownerassociation, nobathroom, halfbathroom, furnished, kitchen, noparking, balcony, dewapremises, district, parkingbay, propertyview, propertycountry, propertycity, amenities }
            //     ]
            // }).
            .find({
                createdAt: { '$gte': new Date(fromDate), "$lte": new Date(toDate) },
                // toDate: { '$lte': new Date(toDate) }
            })
            // .sort({ _id: sort })
            .skip(perPage * page)
            .limit(parseInt(perPage))
        return res.status(200).json({
            count: Math.ceil(count / perPage),
            property
        })
    } catch (error) {
        res.status(400).json({
            err: `Error getting data: ${err.message}`
        })
    }
})

const SortingTesting = asyncHandler(async (req, res) => {
    const page = parseInt(req.query.page || 0)
    const perPage = req.query.perPage || 10
    // const unitatoz = req.query.unitatoz || 1
    // const buildingnameatoz = req.query.buildingnameatoz || 1
    // console.log(req.query, "filter key")
    // console.log(req.query[query], "filter")

    try {
        const count = await AddProperty.countDocuments()
        const property = await AddProperty.find()
            .collation({ locale: "en" })
            // .sort({unitnumber: req.query.unitatoz})
            .sort({ buildingname: req.query.buildingnameatoz })
            .skip(perPage * page)
            .limit(parseInt(perPage))
        return res.status(200).json({
            count: Math.ceil(count / perPage),
            property
        })
    } catch (error) {
        res.status(400).json({
            err: `Error getting data: ${err.message}`
        })
    }
})

// const getPropertyById = asyncHandler(async (req, res) => {
//     const propertyById = await AddProperty.findById(req.params.id)
//     if (!propertyById) {
//         return res.status(400).json({ message: "No Property found" })
//     }
//     return res.json(propertyById)
// })

const getPropertyById = asyncHandler(async (req, res) => {
    const propertyById = await AddProperty.findById(req.params.id)
    if (!propertyById) {
        return res.status(400).json({ message: "No Property found" })
    }

    const buildingData = await BuildingName.findById(propertyById.buildingid);
    const userData = await User.findById(propertyById.customerid);
    const communityData = await CommunityName.findById(propertyById.communityid);
    const projectnameData = await ProjectName.findById(propertyById.projectnameid);
    const subtypeData = await SubType.findById(propertyById.subtypeid);
    const developerData = await DeveloperName.findById(propertyById.developerid);

    const updatedProperty = {
        ...propertyById.toObject(),
        building_name: buildingData?.buildingname,
        owner_name: userData?.firstname + " " + userData?.lastname,
        owner_email: userData?.email,
        community_name: communityData?.communityname,
        project_name: projectnameData?.projectName,
        subtype_name: subtypeData?.subtypename,
        developer_name: developerData?.developername
    };

    return res.json(updatedProperty);
});

// const getPropertyByIdConnect = asyncHandler(async (req, res) => {
//     try {
//         const propertyById = await AddProperty.findById(req.params.id);

//         if (!propertyById) {
//             return res.status(400).json({ message: 'No Property found' });
//         }

//         const building = await BuildingName.findById(propertyById.buildingid);
//         const community = await CommunityName.findById(propertyById.communityid);
//         const project = await ProjectName.findById(propertyById.projectnameid);
//         const subtype = await SubType.findById(propertyById.subtypeid);
//         const developer = await DeveloperName.findById(propertyById.developerid);
//         const customer = await User.findById(propertyById.customerid);

//         if (!building) {
//             return res.status(400).json({ message: 'No Building found for the Property' });
//         }

//         const propertyWithBuilding = {
//             ...propertyById.toObject(),
//             building_name: building?.buildingname,
//             community_name: community?.communityname,
//             project_name: project?.projectName,
//             subtype_name: subtype?.subtypename,
//             developer_name: developer?.developername,
//             owner_name: customer?.firstname + " " + customer?.lastname,
//         };

//         return res.json(propertyWithBuilding);
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ message: 'Server Error' });
//     }
// })

const getPropertyByIdConnect = asyncHandler(async (req, res) => {
    try {
        const propertyById = await AddProperty.findById(req.params.id);

        if (!propertyById) {
            return res.status(400).json({ message: 'No Property found' });
        }

        const propertyIdConnected = {
            ...propertyById.toObject(),
        };

        const building = await BuildingName.findById(propertyById.buildingid);
        if (building) {
            propertyIdConnected.building_name = building.buildingname;
        }

        const community = await CommunityName.findById(propertyById.communityid);
        if (community) {
            propertyIdConnected.community_name = community.communityname;
        }

        const project = await ProjectName.findById(propertyById.projectnameid);
        if (project) {
            propertyIdConnected.project_name = project.projectName;
        }

        const subtype = await SubType.findById(propertyById.subtypeid);
        if (subtype) {
            propertyIdConnected.subtype_name = subtype.subtypename;
        }

        const developer = await DeveloperName.findById(propertyById.developerid);
        if (developer) {
            propertyIdConnected.developer_name = developer.developername;
        }

        const customer = await User.findById(propertyById.customerid);
        if (customer) {
            propertyIdConnected.owner_name = `${customer.firstname} ${customer.lastname}`;
        }

        const representative = await User.findById(propertyById.owner_representative_id);
        if (representative) {
            propertyIdConnected.representative_name = `${representative.firstname} ${representative.lastname}`;
        }

        return res.json(propertyIdConnected);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server Error' });
    }
});


const createProperty = asyncHandler(async (req, res) => {
    const { usage, propertytype, projectstatus, transactiontype, projectname, buildingname, subtype, typelayout, tenancystatus, floor, unitnumber, sizearea, plotsize, communityname, ownerassociation, develpoername, amenities, nobathroom, halfbathroom, propertycountry, propertycity, furnished, kitchen, noparking, balcony, dewapremises, district, parkingbay, youtubelink, propertyview, propertyimages, propertylocation, floorplan, typicalfloorplan, buildingelevation, amenitiesimages, unitplanattachment, plotplanattachment, builduparea, customerid, measure_units, customername, purchasedate, ownernamedeed, purchasevaue, communityid, projectnameid, buildingid, subtypeid, developerid, totalbathroom, bathroomensuite, maidroom, driverroom, storeroom, otherroom, ensuite, bedroomensuite, totalbedroom, streetnumber, is_available, available_for, unlisted, available_id, owner_representative_name, owner_representative_id, createdBy, updatedBy, titledeeddocument, OwnerNameAsPerDeed, no_ownernamedeed } = req.body
    if (!unitnumber || !communityid || !projectnameid) {
        return res.status(400).json({ message: 'All fields are required' })
    }
    // console.log(req),
    // console.log(req.body)
    // if (!unitnumber) {
    //     return res.status(400).json({ message: 'unitnumber fields is required' })
    // }


    // let duplicate = await AddProperty.findOne({ unitnumber }).lean().exec()

    // if (duplicate) {
    //     return res.status(409).json({ message: "Duplicate unitnumber" })
    // }

    // Check for duplicates in the database
    const existingProperty = await AddProperty.findOne({
        unitnumber,
        communityid,
        projectnameid,
        buildingid,
        owner_changed: false,
        softdelete: false,
    });

    // If a duplicate property already exists, return an error response
    if (existingProperty) {
        return res.status(400).json({ message: 'Property already exists' });
    }

    let OwnerNameAsPerDeedParse

    if (OwnerNameAsPerDeed) {
        OwnerNameAsPerDeedParse = JSON.parse(OwnerNameAsPerDeed)
    }

    const propertyObject = { usage, propertytype, projectstatus, transactiontype, projectname, buildingname, subtype, typelayout, tenancystatus, floor, unitnumber, sizearea, plotsize, communityname, ownerassociation, develpoername, amenities, nobathroom, halfbathroom, propertycountry, propertycity, furnished, kitchen, noparking, balcony, dewapremises, district, parkingbay, youtubelink, propertyview, propertyimages, propertylocation, floorplan, typicalfloorplan, buildingelevation, amenitiesimages, unitplanattachment, plotplanattachment, builduparea, customerid, measure_units, customername, purchasedate, ownernamedeed, purchasevaue, communityid, projectnameid, buildingid, subtypeid, developerid, totalbathroom, bathroomensuite, maidroom, driverroom, storeroom, otherroom, ensuite, bedroomensuite, totalbedroom, streetnumber, is_available, available_for, unlisted, available_id, owner_representative_name, owner_representative_id, createdBy, updatedBy, titledeeddocument, no_ownernamedeed, OwnerNameAsPerDeed: OwnerNameAsPerDeedParse }
    const createProperty = await AddProperty.create(propertyObject)

    if (createProperty) {
        // console.log('createProperty me araha hai')
        // if (createProperty?.customerid) {
        //     // console.log('createProperty?.customerid me araha hai')
        //     const userData = await User.find({ _id: { $in: createProperty?.customerid } });
        //     const user = userData.find(owner => owner._id.toHexString() === createProperty?.customerid?.toHexString());
        //     const owner_email = user?.email
        //     let contentPara = `We would like to inform you that a new property, "Property Unit Number: ${createProperty?.unitnumber}" has been added to your dashboard. Kindly take a moment to verify the status of your property by accessing the provided link.`

        //     const userDataRep = await User.find({ _id: { $in: createProperty?.owner_representative_id } });
        //     const userRep = userDataRep.find(owner => owner._id.toHexString() === createProperty?.owner_representative_id?.toHexString());
        //     const owner_emailRep = userRep?.email
        //     // console.log(owner_email, "owner_email")
        //     if (owner_email) {
        //         // console.log('owner_email me araha hai')
        //         const owner_name = user?.firstname + " " + user?.lastname
        //         let contentHeading = `Hello ${owner_name},`
        //         const url = `${process.env.BASE_URL}view-property/${createProperty?._id}/`
        //         // console.log(url, "url")
        //         await sendEmail(owner_email, "New Property has been Added", url, property = true, contentHeading, contentPara)
        //         // console.log("Email send")
        //     }

        //     if (owner_emailRep) {
        //         // console.log('owner_email me araha hai')
        //         const owner_name = userRep?.firstname + " " + userRep?.lastname
        //         let contentHeading = `Hello ${owner_name},`
        //         const url = `${process.env.BASE_URL}view-property/${createProperty?._id}/`
        //         // console.log(url, "url")
        //         await sendEmail(owner_emailRep, "Your Representative Property Added Recently", url, property = true, contentHeading, contentPara)
        //         // console.log("Email send")
        //     }

        //     return res.status(200).json({ message: `New Property ${unitnumber} created` })
        // } else {
        //     // console.log('comming into else portion')
        //     return res.status(200).json({ message: `New Property ${unitnumber} created` })
        // }
        return res.status(200).json(createProperty)
    } else {
        return res.status(400).json({ message: 'Invalid Property data received' })
    }
})

const updateProperty = asyncHandler(async (req, res) => {
    const { _id, usage, propertytype, projectstatus, transactiontype, projectname, buildingname, subtype, typelayout, tenancystatus, floor, unitnumber, sizearea, plotsize, communityname, ownerassociation, develpoername, amenities, nobathroom, halfbathroom, propertycountry, propertycity, furnished, kitchen, noparking, balcony, dewapremises, district, parkingbay, youtubelink, propertyview, propertyimages, propertylocation, floorplan, typicalfloorplan, buildingelevation, amenitiesimages, unitplanattachment, plotplanattachment, builduparea, customerid, measure_units, customername, purchasedate, ownernamedeed, purchasevaue, communityid, projectnameid, buildingid, subtypeid, developerid, totalbathroom, bathroomensuite, maidroom, driverroom, storeroom, otherroom, ensuite, bedroomensuite, totalbedroom, streetnumber, is_available, available_for, unlisted, available_id, owner_representative_name, owner_representative_id, createdBy, updatedBy, titledeeddocument, owner_changed, no_ownernamedeed, OwnerNameAsPerDeed } = req.body

    // if (!_id || !usage || !propertytype || !projectstatus || !transactiontype || !projectname || !buildingname || !tenancystatus || !floor || !unitnumber || !sizearea || !communityname || !develpoername || !nobathroom || !furnished || !kitchen || !noparking || !dewapremises || !district) {
    //     return res.status(400).json({ message: 'All fields are required' })
    // }

    const updateProperty = await AddProperty.findById(_id).exec()
    if (!updateProperty) {
        return res.status(400).json({ message: 'Property not found' })
    }

    // const duplicate = await AddProperty.findOne({ unitnumber }).lean().exec()
    // if (duplicate && duplicate?._id.toString() !== _id) {
    //     return res.status(400).json({ message: 'Duplicate Property' })
    // }

    // updateProperty.propertname = propertname
    updateProperty.usage = usage
    updateProperty.propertytype = propertytype
    updateProperty.projectstatus = projectstatus
    updateProperty.transactiontype = transactiontype
    updateProperty.projectname = projectname
    updateProperty.subtype = subtype
    updateProperty.typelayout = typelayout
    updateProperty.tenancystatus = tenancystatus
    updateProperty.floor = floor
    updateProperty.unitnumber = unitnumber
    updateProperty.sizearea = sizearea
    updateProperty.plotsize = plotsize
    updateProperty.communityname = communityname
    updateProperty.buildingname = buildingname
    updateProperty.ownerassociation = ownerassociation
    updateProperty.develpoername = develpoername
    updateProperty.amenities = amenities
    updateProperty.nobathroom = nobathroom
    updateProperty.halfbathroom = halfbathroom
    updateProperty.propertycountry = propertycountry
    updateProperty.propertycity = propertycity
    updateProperty.furnished = furnished
    updateProperty.kitchen = kitchen
    updateProperty.noparking = noparking
    updateProperty.balcony = balcony
    updateProperty.dewapremises = dewapremises
    updateProperty.district = district
    updateProperty.youtubelink = youtubelink
    updateProperty.parkingbay = parkingbay
    updateProperty.propertyview = propertyview
    updateProperty.propertyimages = propertyimages
    updateProperty.propertylocation = propertylocation
    updateProperty.floorplan = floorplan
    updateProperty.typicalfloorplan = typicalfloorplan
    updateProperty.buildingelevation = buildingelevation
    updateProperty.amenitiesimages = amenitiesimages
    updateProperty.unitplanattachment = unitplanattachment
    updateProperty.plotplanattachment = plotplanattachment
    updateProperty.customerid = customerid
    updateProperty.customername = customername
    updateProperty.purchasedate = purchasedate
    updateProperty.ownernamedeed = ownernamedeed
    updateProperty.purchasevaue = purchasevaue
    updateProperty.communityid = communityid
    updateProperty.projectnameid = projectnameid
    updateProperty.buildingid = buildingid
    updateProperty.subtypeid = subtypeid
    updateProperty.developerid = developerid
    updateProperty.totalbathroom = totalbathroom
    updateProperty.bathroomensuite = bathroomensuite
    updateProperty.maidroom = maidroom
    updateProperty.driverroom = driverroom
    updateProperty.storeroom = storeroom
    updateProperty.otherroom = otherroom
    updateProperty.ensuite = ensuite
    updateProperty.totalbedroom = totalbedroom
    updateProperty.bedroomensuite = bedroomensuite
    updateProperty.streetnumber = streetnumber
    updateProperty.is_available = is_available
    updateProperty.available_for = available_for
    updateProperty.unlisted = unlisted
    updateProperty.available_id = available_id
    updateProperty.owner_changed = owner_changed
    updateProperty.owner_representative_id = owner_representative_id
    updateProperty.owner_representative_name = owner_representative_name
    updateProperty.titledeeddocument = titledeeddocument
    updateProperty.builduparea = builduparea
    updateProperty.no_ownernamedeed = no_ownernamedeed
    updateProperty.createdBy = createdBy
    updateProperty.updatedBy = updatedBy
    updateProperty.measure_units = measure_units
    updateProperty.OwnerNameAsPerDeed = JSON.parse(OwnerNameAsPerDeed)

    const updatedPropertyN = await updateProperty.save()

    return res.json({ message: `${updatedPropertyN.unitnumber} updated` })
})

const updatePropertyAvailability = asyncHandler(async (req, res) => {
    // console.log(req.body);
    const { _id, OwnerNameAsPerDeed, ...updateData } = req.body;

    const existingProperty = await AddProperty.findById(_id).exec();
    if (!existingProperty) {
        return res.status(400).json({ message: 'Property not found' });
    }

    let OwnerNameAsPerDeedParse

    if (OwnerNameAsPerDeed) {
        // Assuming OwnerNameAsPerDeed is an array of objects
        existingProperty.OwnerNameAsPerDeed = JSON.parse(OwnerNameAsPerDeed);
    }

    Object.assign(existingProperty, updateData, OwnerNameAsPerDeedParse);

    const updatedProperty = await existingProperty.save();

    // return res.json({ message: `${updatedProperty.unitnumber} updated` });
    if (updatedProperty) {
        // console.log('updatedProperty me araha hai')
        // if (updatedProperty?.customerid || updatedProperty?.owner_representative_id) {
        //     // console.log('updatedProperty?.customerid me araha hai')
        //     const userData = await User.find({ _id: { $in: updatedProperty?.customerid } });
        //     const user = userData.find(owner => owner._id.toHexString() === updatedProperty?.customerid?.toHexString());
        //     const owner_email = user?.email
        //     // const owner_name = user?.firstname + " " + user?.lastname
        //     // let contentHeading = `Hello ${owner_name},`
        //     let contentPara = `A recent update has been made to your "Property Unit Number: ${updatedProperty?.unitnumber}." We kindly ask you to take a moment to confirm the current status of your property by clicking the provided link.`

        //     const userDataRep = await User.find({ _id: { $in: updatedProperty?.owner_representative_id } });
        //     const userRep = userDataRep.find(owner => owner._id.toHexString() === updatedProperty?.owner_representative_id?.toHexString());
        //     const owner_emailRep = userRep?.email
        //     // console.log(owner_email, "owner_email")
        //     if (owner_email) {
        //         // console.log('owner_email me araha hai')
        //         const owner_name = user?.firstname + " " + user?.lastname
        //         let contentHeading = `Hello ${owner_name},`
        //         const url = `${process.env.BASE_URL}view-property/${updatedProperty?._id}/`
        //         // console.log(contentHeading, "contentHeading property controller")
        //         // console.log(contentPara, "contentPara property controller")
        //         await sendEmail(owner_email, "Your Property Updated Recently", url, property = true, contentHeading, contentPara)
        //         // console.log("Email send")
        //         // return res.status(200).json({ message: `Property ${updatedProperty.unitnumber} updated` })
        //     }

        //     if (owner_emailRep) {
        //         // console.log('owner_email me araha hai')
        //         const owner_name = userRep?.firstname + " " + userRep?.lastname
        //         let contentHeading = `Hello ${owner_name},`
        //         const url = `${process.env.BASE_URL}view-property/${updatedProperty?._id}/`
        //         // console.log(url, "url")
        //         await sendEmail(owner_email, "Your Representative Property Updated Recently", url, property = true, contentHeading, contentPara)
        //         // console.log("Email send")
        //     }
        //     return res.status(200).json({ message: `Property ${updatedProperty.unitnumber} updated` })
        // } else {
        //     // console.log('comming into else portion')
        //       return res.status(200).json({ message: `Property ${updatedProperty.unitnumber} updated` })
        // }
        return res.status(200).json({ message: `Property ${updatedProperty.unitnumber} updated` })
    } else {
        return res.status(400).json({ message: 'Invalid Property data received' })
    }

});

// Cron-Job for Property owner emails 

// cron.schedule('0 3 * * *', async () => {  // 3 Am
//     // cron.schedule('* * * * *', async () => {  // 1 Am
//     // cron.schedule('*/15 * * * * *', async () => {
//     const today = new Date();
//     today.setHours(0, 0, 0, 0); // Set time to beginning of the day

//     const propertiesUpdatedToday = await AddProperty.find({
//         $or: [
//             { updatedAt: { $gte: today } },
//             { createdAt: { $gte: today } }
//         ]
//     }).exec();

//     // You can adjust the logic to format the email content and recipients as needed
//     // ...

//     // console.log(propertiesUpdatedToday)

//     // Group property updates by customer ID
//     const updatesByCustomer = propertiesUpdatedToday.reduce((acc, property) => {
//         // console.log("reduce me araha hai?")
//         const customerId = property?.customerid?.toString(); // Assuming customerid is an ObjectId
//         // console.log(customerId, "customerId")
//         if (customerId) {
//             if (!acc[customerId]) {
//                 acc[customerId] = [];
//             }
//             acc[customerId].push(property);
//         }
//         return acc;
//     }, {});

//     // console.log(updatesByCustomer, "updatesByCustomer")

//     // Process and send emails for each customer's property updates
//     for (const customerId in updatesByCustomer) {
//         const customerProperties = updatesByCustomer[customerId];

//         // const userData = await User.find({ _id: { $in: updatesByCustomer } });
//         // const user = userData.find(owner => owner._id.toHexString() === updatesByCustomer?.toHexString());
//         // const owner_email = user?.email

//         // Find the user based on the customerId
//         const user = await User.findById(customerId).exec();
//         const owner_email = user?.email;
//         const owner_name = user?.firstname + " " + user?.lastname

//         // console.log(customerProperties, "customerProperties")
//         // console.log(owner_email)
//         // console.log(owner_name)

//         let contentHeading = `Hello ${owner_name},`
//         const url = `${process.env.BASE_URL}view-property/`
//         const subject = "Your Property Status Today"
//         // await sendEmail(owner_emailRep, "Your Representative Property Added Recently", url, property = true, contentHeading, contentPara)

//         // let contentPara = {
//         //     people: [
//         //         "Yehuda Katz",
//         //         "Alan Johnson",
//         //         "Charles Jolley",
//         //     ],
//         // }


//         // Construct email content and send email
//         // ...
//         try {
//             // await sendEmail(owner_email, subject, url, property = true, contentHeading, contentPara);
//             await sendEmail(owner_email, subject, url, property = true, contentHeading, customerProperties);
//             console.log(`Property updates email sent to customer ${customerId}`);
//         } catch (error) {
//             console.error(`Error sending email to customer ${customerId}:`, error);
//         }
//     }

//     // Send the email
//     // try {
//     //     await sendEmail(recipient, subject, emailContent);
//     //     console.log('Daily property updates email sent');
//     // } catch (error) {
//     //     console.error('Error sending email:', error);
//     // }
// });

const deleteProperty = asyncHandler(async (req, res) => {
    const { _id } = req.body

    if (!_id) {
        return res.status(400).json({ message: "Id is required" })
    }

    const deletedProperty = await AddProperty.findById(_id).exec()

    if (!deletedProperty) {
        return res.status(400).json({ message: 'Property not found' })
    }

    const result = await deletedProperty.deleteOne()
    const reply = `Project name ${result?.unitnumber} with Id ${result?._id} deleted`

    return res.json(reply)
})

module.exports = {
    getAllProperty,
    getPropertyById,
    createProperty,
    updateProperty,
    deleteProperty,
    getPaginationProperty,
    getSearchProperty,
    getAdvanceSearch,
    getBetweenDateProperty,
    getAdvanceSearchwithDate,
    SortingTesting,
    getSearchPropertyForCustomer,
    getAllPropertyConnect,
    getPropertyByIdConnect,
    updatePropertyAvailability,
    getSearchPropertyMobile,
    getAdvanceSearchOwner
}