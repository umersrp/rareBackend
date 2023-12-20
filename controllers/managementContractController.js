const ManagementContract = require('../models/managementContract')
const asyncHandler = require('express-async-handler')
const AddProperty = require('../models/addProperty')
const BuildingName = require('../models/buildingName')
const ProjectName = require('../models/projectName')
const CommunityName = require('../models/communityname')
const SubType = require('../models/subType')
const axios = require('axios');
const Employee = require('../models/employee')
const User = require('../models/User')
const sendEmail = require('../utils/sendEmail')
const moment = require('moment-timezone');

const getAllManagementContract = asyncHandler(async (req, res) => {
    const managementContract = await ManagementContract.find({
        $and: [
            { softdelete: { $ne: true } } // Filter out softdeleted bookings
        ]
    }).sort({ _id: "descending" })
    if (!managementContract?.length) {
        return res.status(400).json({ message: "No Management Contract found" })
    }
    const propertyIds = managementContract.map(property => property?.propertyid);
    const employeeIds = managementContract.map(employee => employee.createdBy);
    const employeeIdsUpdatedBy = managementContract.map(employee => employee.updatedBy);

    try {
        const properties = await AddProperty.find({ _id: { $in: propertyIds } });
        const buildingIds = properties.map(property => property?.buildingid);
        const projectnameId = properties.map(property => property?.projectnameid);
        const communityId = properties.map(property => property?.communityid);
        const subtypeId = properties.map(property => property?.subtypeid);
        const ownerId = properties.map(property => property.customerid);

        const buildings = await BuildingName.find({ _id: { $in: buildingIds } });
        const projectnames = await ProjectName.find({ _id: { $in: projectnameId } });
        const communityData = await CommunityName.find({ _id: { $in: communityId } });
        const subtypeData = await SubType.find({ _id: { $in: subtypeId } });
        const employeeData = await Employee.find({ _id: { $in: employeeIds } });
        const employeeDataUpdatedBy = await Employee.find({ _id: { $in: employeeIdsUpdatedBy } });
        const userData = await User.find({ _id: { $in: ownerId } });

        const mamagementContractAllData = managementContract.map(propertyData => {
            const managementObject = propertyData.toObject();
            const { _id, propertyid, contractperiod, contractstartdate, contractenddate, createdBy, updatedBy, managementfee, minimum_managementfee, management_contract, variable_amount, fixed_amount, createdAt, updatedAt, contractupdation, intermpercentage_amount, interm_percent, doc_un_signed, doc_signed, commencement_date } = managementObject;
            const updatedManagementContract = { _id, propertyid, contractperiod, contractstartdate, contractenddate, createdBy, updatedBy, managementfee, minimum_managementfee, management_contract, variable_amount, fixed_amount, createdAt, updatedAt, contractupdation, intermpercentage_amount, interm_percent, doc_un_signed, doc_signed, commencement_date };
            if (propertyid) {
                const property = properties.find(property => String(property._id) === String(propertyData.propertyid));
                if (property) {
                    updatedManagementContract.unitnumber = property.unitnumber;
                    updatedManagementContract.floor = property.floor;

                    const building = buildings.find(building => String(building._id) === String(property.buildingid));
                    if (building) {
                        updatedManagementContract.building_name = building.buildingname;
                        updatedManagementContract.buildingid = building._id;
                    }

                    const projectname = projectnames.find(project => String(project._id) === String(property.projectnameid));
                    if (projectname) {
                        updatedManagementContract.project_name = projectname.projectName;
                        updatedManagementContract.projectnameid = projectname._id;
                    }

                    const community = communityData.find(community => String(community._id) === String(property.communityid));
                    if (community) {
                        updatedManagementContract.community_name = community.communityname;
                        updatedManagementContract.communityid = community._id;
                    }

                    const subtype = subtypeData.find(subtype => String(subtype._id) === String(property.subtypeid));
                    if (subtype) {
                        updatedManagementContract.subtype_name = subtype.subtypename;
                    }

                    const customerid = userData.find(customerid => String(customerid._id) === String(property?.customerid));
                    if (customerid) {
                        updatedManagementContract.owner_name = (customerid?.firstname) + (customerid?.lastname ? " " + customerid?.lastname : "") + (customerid?.email ? " | " + customerid?.email : "");
                        updatedManagementContract.owner_email = customerid?.email;
                        updatedManagementContract.owner_id = customerid?._id;
                    }

                }
            }

            const employee = employeeData.find(employee => String(employee._id) === String(createdBy));
            if (employee) {
                updatedManagementContract.employee_email_createdBy = employee?.email;
            }
            const employeeUpdatedBy = employeeDataUpdatedBy.find(employee => String(employee._id) === String(updatedBy));
            if (employeeUpdatedBy) {
                updatedManagementContract.employee_email_updatedBy = employeeUpdatedBy?.email;
            }
            return updatedManagementContract;
        });

        const formattedDate = mamagementContractAllData?.map(mamagementContract => {
            //     const formattedcontractstartdate = mamagementContract.contractstartdate ? new Date(mamagementContract.contractstartdate).toDateString() : ''
            //     const formattedcontractenddate = mamagementContract.contractenddate ? new Date(mamagementContract.contractenddate).toDateString() : ''
            //     const formattedCreatedAt = mamagementContract.createdAt ? new Date(mamagementContract.createdAt).toDateString() : ''

            const formattedcontractstartdate = mamagementContract.contractstartdate ? moment(mamagementContract.contractstartdate).tz('Asia/Dubai').format('DD MMM YYYY') : '';
            const formattedcontractenddate = mamagementContract.contractenddate ? moment(mamagementContract.contractenddate).tz('Asia/Dubai').format('DD MMM YYYY') : '';
            const formattedCreatedAt = mamagementContract.createdAt ? moment(mamagementContract.createdAt).tz('Asia/Dubai').format('DD MMM YYYY') : '';
            const formattedupdatedAt = mamagementContract.updatedAt ? moment(mamagementContract.updatedAt).tz('Asia/Dubai').format('DD MMM YYYY') : '';

            const completed_data = mamagementContract?.propertyid && mamagementContract?.contractperiod && mamagementContract?.contractstartdate && mamagementContract?.contractenddate && mamagementContract?.managementfee && mamagementContract?.minimum_managementfee ? true : false
            return { ...mamagementContract, contractstart_date: formattedcontractstartdate, Created_At: formattedCreatedAt, contractend_date: formattedcontractenddate, updatedAt: formattedupdatedAt, contractstartdate: formattedcontractstartdate, createdAt: formattedCreatedAt, contractenddate: formattedcontractenddate, completed_data: completed_data }
        })

        res.json(formattedDate);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
})

const getManagementContractById = asyncHandler(async (req, res) => {
    const managementContractById = await ManagementContract.findById(req.params.id)
    if (!managementContractById) {
        return res.status(400).json({ message: "No Management Contract found" })
    }

    try {
        const propertyResponse = await axios.get(`${process.env.OWN_SERVER}/property/${managementContractById.propertyid}`);
        const propertyData = propertyResponse.data;

        const result = {
            managementContract: managementContractById,
            property: propertyData
        };

        res.json(result);
    } catch (error) {
        // Handle error if the property request fails
        res.status(500).json({ message: "Error retrieving property data" });
    }
});

const getManagementContractProperty = asyncHandler(async (req, res) => {
    try {
        const ManagementContractData = await ManagementContract.find({
            $and: [
                { softdelete: { $ne: true } } // Filter out softdeleted bookings
            ],
            "$or": [
                req.query,
            ]
            // propertyid: req.query.propertyid
        })
        const propertyIds = ManagementContractData.map(property => property?.propertyid);
        const employeeIds = ManagementContractData.map(employee => employee.createdBy);
        const employeeIdsUpdatedBy = ManagementContractData.map(employee => employee.updatedBy);

        const properties = await AddProperty.find({ _id: { $in: propertyIds } });
        const buildingIds = properties.map(property => property?.buildingid);
        const projectnameId = properties.map(property => property?.projectnameid);
        const communityId = properties.map(property => property?.communityid);
        const subtypeId = properties.map(property => property?.subtypeid);
        const ownerId = properties.map(property => property.customerid);

        const buildings = await BuildingName.find({ _id: { $in: buildingIds } });
        const projectnames = await ProjectName.find({ _id: { $in: projectnameId } });
        const communityData = await CommunityName.find({ _id: { $in: communityId } });
        const subtypeData = await SubType.find({ _id: { $in: subtypeId } });
        const employeeData = await Employee.find({ _id: { $in: employeeIds } });
        const employeeDataUpdatedBy = await Employee.find({ _id: { $in: employeeIdsUpdatedBy } });
        const userData = await User.find({ _id: { $in: ownerId } });

        const mamagementContractAllData = ManagementContractData.map(propertyData => {
            const managementObject = propertyData.toObject();
            const { _id, propertyid, contractperiod, contractstartdate, contractenddate, createdBy, updatedBy, managementfee, minimum_managementfee, management_contract, variable_amount, fixed_amount, createdAt, updatedAt, contractupdation, intermpercentage_amount, interm_percent, doc_un_signed, doc_signed, commencement_date } = managementObject;
            const updatedManagementContract = { _id, propertyid, contractperiod, contractstartdate, contractenddate, createdBy, updatedBy, managementfee, minimum_managementfee, management_contract, variable_amount, fixed_amount, createdAt, updatedAt, contractupdation, intermpercentage_amount, interm_percent, doc_un_signed, doc_signed, commencement_date };
            if (propertyid) {
                const property = properties.find(property => String(property._id) === String(propertyData.propertyid));
                if (property) {
                    updatedManagementContract.unitnumber = property.unitnumber;
                    updatedManagementContract.floor = property.floor;

                    const building = buildings.find(building => String(building._id) === String(property.buildingid));
                    if (building) {
                        updatedManagementContract.building_name = building.buildingname;
                        updatedManagementContract.buildingid = building._id;
                    }

                    const projectname = projectnames.find(project => String(project._id) === String(property.projectnameid));
                    if (projectname) {
                        updatedManagementContract.project_name = projectname.projectName;
                        updatedManagementContract.projectnameid = projectname._id;
                    }

                    const community = communityData.find(community => String(community._id) === String(property.communityid));
                    if (community) {
                        updatedManagementContract.community_name = community.communityname;
                        updatedManagementContract.communityid = community._id;
                    }

                    const subtype = subtypeData.find(subtype => String(subtype._id) === String(property.subtypeid));
                    if (subtype) {
                        updatedManagementContract.subtype_name = subtype.subtypename;
                    }

                    const customerid = userData.find(customerid => String(customerid._id) === String(property?.customerid));
                    if (customerid) {
                        updatedManagementContract.owner_name = (customerid?.firstname) + (customerid?.lastname ? " " + customerid?.lastname : "") + (customerid?.email ? " | " + customerid?.email : "");
                        updatedManagementContract.owner_email = customerid?.email;
                        updatedManagementContract.owner_id = customerid?._id;
                    }
                }
            }

            const employee = employeeData.find(employee => String(employee._id) === String(createdBy));
            if (employee) {
                updatedManagementContract.employee_email_createdBy = employee?.email;
            }
            const employeeUpdatedBy = employeeDataUpdatedBy.find(employee => String(employee._id) === String(updatedBy));
            if (employeeUpdatedBy) {
                updatedManagementContract.employee_email_updatedBy = employeeUpdatedBy?.email;
            }
            return updatedManagementContract;
        });

        const formattedDate = mamagementContractAllData?.map(mamagementContract => {
            //     const formattedcontractstartdate = mamagementContract.contractstartdate ? new Date(mamagementContract.contractstartdate).toDateString() : ''
            //     const formattedcontractenddate = mamagementContract.contractenddate ? new Date(mamagementContract.contractenddate).toDateString() : ''
            //     const formattedCreatedAt = mamagementContract.createdAt ? new Date(mamagementContract.createdAt).toDateString() : ''

            const formattedcontractstartdate = mamagementContract.contractstartdate ? moment(mamagementContract.contractstartdate).tz('Asia/Dubai').format('DD MMM YYYY') : '';
            const formattedcontractenddate = mamagementContract.contractenddate ? moment(mamagementContract.contractenddate).tz('Asia/Dubai').format('DD MMM YYYY') : '';
            const formattedCreatedAt = mamagementContract.createdAt ? moment(mamagementContract.createdAt).tz('Asia/Dubai').format('DD MMM YYYY') : '';
            const formattedupdatedAt = mamagementContract.updatedAt ? moment(mamagementContract.updatedAt).tz('Asia/Dubai').format('DD MMM YYYY') : '';

            const completed_data = mamagementContract?.propertyid && mamagementContract?.contractperiod && mamagementContract?.contractstartdate && mamagementContract?.contractenddate && mamagementContract?.managementfee && mamagementContract?.minimum_managementfee ? true : false
            return { ...mamagementContract, contractstart_date: formattedcontractstartdate, Created_At: formattedCreatedAt, contractend_date: formattedcontractenddate, updatedAt: formattedupdatedAt, contractstartdate: formattedcontractstartdate, createdAt: formattedCreatedAt, contractenddate: formattedcontractenddate, completed_data: completed_data }
        })

        res.json(formattedDate);

        // return res.status(200).json(ManagementContractData)
    } catch (err) {
        res.status(400).json({
            err: `Error getting data: ${err.message}`
        })
    }
})

const getOwnerContract = asyncHandler(async (req, res) => {
    // console.log(req.query);
    try {
        const managementContractById = await ManagementContract.find({
            $and: [
                { softdelete: { $ne: true } } // Filter out softdeleted bookings
            ],
            $or: [req.query],
        });

        if (managementContractById.length === 0) {
            return res.status(404).json({ message: "No contract found" });
        }

        const [managementContract] = managementContractById;
        let propertyData;


        if (managementContract.propertyid) {
            const propertyResponse = await axios.get(
                `${process.env.OWN_SERVER}/property/${String(managementContract.propertyid)}`
            );
            propertyData = propertyResponse.data;
        }

        const result = {
            managementContract,
            property: propertyData,
        };

        res.json(result);
    } catch (error) {
        // console.error("Error getting owner contract:", error);
        res.status(500).json({ message: "Error retrieving owner contract" });
    }
});

const createManagementContract = asyncHandler(async (req, res) => {
    const { propertyid, contractperiod, contractstartdate, contractenddate, createdBy, updatedBy, managementfee, minimum_managementfee, management_contract, variable_amount, fixed_amount, contractupdation, intermpercentage_amount, interm_percent, doc_un_signed, doc_signed, commencement_date } = req.body
    if (!propertyid) {
        return res.status(400).json({ message: "Management Contract is requires" })
    }

    // let duplicate = await ManagementContract.findOne({ propertyid }).lean().exec()
    // if (duplicate) {
    //     return res.status(409).json({ message: 'Duplicate Management Contract' })
    // }

    const managementContractObject = { propertyid, contractperiod, contractstartdate, contractenddate, createdBy, updatedBy, managementfee, minimum_managementfee, management_contract, variable_amount, fixed_amount, contractupdation, intermpercentage_amount, interm_percent, doc_un_signed, doc_signed, commencement_date }
    const createManagementContract = await ManagementContract.create(managementContractObject)

    if (createManagementContract) {
        if (createManagementContract?.propertyid) {
            const properties = await AddProperty.find({ _id: { $in: createManagementContract?.propertyid } });
            const property = properties.find(property => property._id.toHexString() === createManagementContract?.propertyid?.toHexString());
            const userData = await User.find({ _id: { $in: property?.customerid } });
            const user = userData.find(owner => owner._id.toHexString() === property?.customerid?.toHexString());
            const owner_email = user?.email
            let contentPara = `We would like to inform you that a new management contract for your property, with the unit number "${property?.unitnumber}" has been added to your dashboard. Kindly take a moment to verify the status of your Management Contract by accessing the provided link.`
            if (owner_email) {
                const owner_name = user?.firstname + " " + user?.lastname
                let contentHeading = `Hello ${owner_name},`
                const url = `${process.env.BASE_URL}view-managementcontract/${createManagementContract?._id}`
                let property = true
                await sendEmail(owner_email, "Your Property Management Contract Added Recently", url, property, contentHeading, contentPara)
            }
        }
        res.status(200).json({ message: `New Management Contract ${propertyid} created` })
    } else {
        res.status(400).json({ message: 'Invalid Management Contract received' })
    }
})

const updateManagementContract = asyncHandler(async (req, res) => {
    const { _id, propertyid, contractperiod, contractstartdate, contractenddate, createdBy, updatedBy, managementfee, minimum_managementfee, management_contract, variable_amount, fixed_amount, contractupdation, intermpercentage_amount, interm_percent, doc_un_signed, doc_signed, commencement_date } = req.body

    if (!_id) {
        return res.status(400).json({ message: "Id Name is requires" })
    } else if (!propertyid) {
        return res.status(400).json({ message: "property id is requires" })
    }

    const managementContractNames = await ManagementContract.findById(_id).exec()

    if (!managementContractNames) {
        res.status(400).json({ message: 'Project Name not found' })
    }

    const duplicate = await ManagementContract.findOne({ propertyid }).lean().exec()

    if (duplicate && duplicate?._id.toString() !== _id) {
        return res.status(409).json({ message: 'Duplicate Sub Type Name' })
    }

    managementContractNames.propertyid = propertyid
    managementContractNames.contractperiod = contractperiod
    managementContractNames.contractstartdate = contractstartdate
    managementContractNames.contractenddate = contractenddate
    managementContractNames.managementfee = managementfee
    managementContractNames.minimum_managementfee = minimum_managementfee
    managementContractNames.fixed_amount = fixed_amount
    managementContractNames.variable_amount = variable_amount
    managementContractNames.management_contract = management_contract
    managementContractNames.createdBy = createdBy
    managementContractNames.updatedBy = updatedBy
    managementContractNames.contractupdation = contractupdation
    managementContractNames.intermpercentage_amount = intermpercentage_amount
    managementContractNames.interm_percent = interm_percent
    managementContractNames.doc_signed = doc_signed
    managementContractNames.doc_un_signed = doc_un_signed
    managementContractNames.commencement_date = commencement_date

    const managementContractN = await managementContractNames.save()

    if (managementContractN?.propertyid) {
        const properties = await AddProperty.find({ _id: { $in: managementContractN?.propertyid } });
        const property = properties.find(property => property._id.toHexString() === managementContractN?.propertyid?.toHexString());
        const userData = await User.find({ _id: { $in: property?.customerid } });
        const user = userData.find(owner => owner._id.toHexString() === property?.customerid?.toHexString());
        const owner_email = user?.email
        let contentPara = `A recent update has been made to your property unit number "${property?.unitnumber}" management contract. We kindly ask you to take a moment to verify the current status of your property's management contract by accessing the provided link.`
        if (owner_email) {
            const owner_name = user?.firstname + " " + user?.lastname
            let contentHeading = `Hello ${owner_name},`
            const url = `${process.env.BASE_URL}view-managementcontract/${managementContractN?._id}`
            let property = true
            await sendEmail(owner_email, "Your Property Managment Contract Updated Recently", url, property, contentHeading, contentPara)
        }
    }

    res.json({ message: `${managementContractN.propertyid} updated` })
})

const updateManagementContractCancel = asyncHandler(async (req, res) => {
    // console.log(req.body, "req.body");
    const { _id, ...updateData } = req.body;

    const existingManagementContract = await ManagementContract.findById(_id).exec();
    if (!existingManagementContract) {
        return res.status(400).json({ message: 'ManagementContract not found' });
    }

    Object.assign(existingManagementContract, updateData);

    const updatedManagementContract = await existingManagementContract.save();

    if (updatedManagementContract?.propertyid) {
        const properties = await AddProperty.find({ _id: { $in: updatedManagementContract?.propertyid } });
        const property = properties.find(property => property._id.toHexString() === updatedManagementContract?.propertyid?.toHexString());
        const userData = await User.find({ _id: { $in: property?.customerid } });
        const user = userData.find(owner => owner._id.toHexString() === property?.customerid?.toHexString());
        const owner_email = user?.email
        let contentPara = `A recent update has been made to your property unit number "${property?.unitnumber}" management contract. We kindly ask you to take a moment to verify the current status of your property's management contract by accessing the provided link.`
        if (owner_email) {
            const owner_name = user?.firstname + " " + user?.lastname
            let contentHeading = `Hello ${owner_name},`
            const url = `${process.env.BASE_URL}view-managementcontract/${updatedManagementContract?._id}`
            let property = true
            await sendEmail(owner_email, "Your Property Managment Contract Updated Recently", url, property, contentHeading, contentPara)
        }
    }

    return res.json({ message: `${updatedManagementContract._id} updated` });
});

const deleteManagementContract = asyncHandler(async (req, res) => {
    const { _id } = req.body
    if (!_id) {
        res.status(400).json({ message: 'Tenant ID requires' })
    }

    const managementContract = await ManagementContract.findById(_id).exec()

    if (!managementContract) {
        return res.status(400).json({ message: "managementContract not found" })
    }

    const result = await managementContract.deleteOne()

    const reply = `managementContract with id ${result._id} deleted`

    res.json(reply)
})

module.exports = {
    getAllManagementContract,
    getManagementContractById,
    getOwnerContract,
    createManagementContract,
    updateManagementContract,
    deleteManagementContract,
    getManagementContractProperty,
    updateManagementContractCancel
}