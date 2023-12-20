const RentPurchase = require('../models/rentpurchase')
const asyncHandler = require('express-async-handler')
const AddProperty = require('../models/addProperty')
const BuildingName = require('../models/buildingName')
const ProjectName = require('../models/projectName')
const CommunityName = require('../models/communityname')
const SubType = require('../models/subType')
const Employee = require('../models/employee')
const { default: axios } = require('axios')
const tenantContract = require('../models/tenantContract')
const User = require('../models/User')

// const getAllRentpurchase = asyncHandler(async (req, res) => {
//     const rentPurchase = await RentPurchase.find().sort({ _id: "descending" })
//     if (!rentPurchase?.length) {
//         return res.status(400).json({ message: "No Project Name found" })
//     }

//     const propertyIds = rentPurchase.map(property => property.porpertyid);

//     res.json(rentPurchase)
// })

// const getAllRentpurchase = asyncHandler(async (req, res) => {
//     const rentPurchase = await RentPurchase.find().sort({ _id: "descending" })
//     if (!rentPurchase?.length) {
//         return res.status(400).json({ message: "No Project Name found" })
//     }

//     const propertyIds = rentPurchase.map(property => property.porpertyid);

//     // Retrieve the buildings based on property IDs
//     const properties = await AddProperty.find({ _id: { $in: propertyIds } });
//     const buildingIds = properties.map(property => property.buildingid);

//     // Retrieve the building names based on building IDs
//     const buildings = await BuildingName.find({ _id: { $in: buildingIds } });

//     // Assign the building name to the corresponding rentPurchase object
//     const rentPurchaseWithBuilding = rentPurchase.map(rent => {
//         const property = properties.find(property => property._id.toHexString() === rent.porpertyid?.toHexString());
//         const building = buildings.find(building => building._id.toHexString() === property.buildingid.toHexString());
//         return { ...rent._doc, building_name: building.buildingname };
//     });

//     res.json(rentPurchaseWithBuilding);
// });

// const getAllRentpurchase = asyncHandler(async (req, res) => {
//     const rentPurchase = await RentPurchase.find().sort({ _id: "descending" });
//     if (!rentPurchase?.length) {
//         return res.status(400).json({ message: "No Project Name found" });
//     }

//     const propertyIds = rentPurchase.map(property => property.porpertyid);

//     try {
//         const properties = await AddProperty.find({ _id: { $in: propertyIds } });
//         const buildingIds = properties.map(property => property?.buildingid);
//         const projectnameId = properties.map(property => property?.projectnameid);
//         // const userIds = properties.map(property => property.buildingid);

//         const buildings = await BuildingName.find({ _id: { $in: buildingIds } });
//         const projectname = await ProjectName.find({ _id: { $in: projectnameId } });
//         // const Users = await User.find({ _id: { $in: userIds } });

//         const rentPurchaseWithBuilding = rentPurchase.map(rent => {
//             const availabilityObject = rent.toObject();
//             const { porpertyid, propertyvaluation, maintenance, listingtype, key_location, noof_key, listingsource, createdAt, _id } = availabilityObject;
//             const updatedAvailability = { porpertyid, propertyvaluation, maintenance, listingtype, key_location, noof_key, listingsource, createdAt, _id };

//             if (porpertyid) {
//                 const property = properties.find(property => String(property._id) === String(rent.porpertyid));

//                 // if (!property) {
//                 //     return { ...rent._doc, building_name: "", owner_email: '' };
//                 // }

//                 const building = buildings.find(building => String(building._id) === String(property.buildingid));
//                 if (building) {
//                     // return { ...rent._doc, building_name: "" };
//                     updatedAvailability.building_name = building.buildingname
//                 }

//                 const project = projectname.find(project => String(project._id) === String(property.projectnameid));
//                 if (project) {
//                     // return { ...rent._doc, building_name: "" };
//                     updatedAvailability.project_name = project.projectName
//                 }

//                 // const owner = Users.find(owner => String(owner._id) === String(property.customerid));
//                 // if (owner) {
//                 //     // return { ...rent._doc, owner_email: "" };
//                 //     updatedAvailability.building_name = building.buildingname
//                 // }
//             }
//             return availabilityObject;

//             // return { ...rent._doc, building_name: building.buildingname, unit_number: property?.unitnumber, owner_email: owner?.email };
//         });

//         res.json(rentPurchaseWithBuilding);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Server Error" });
//     }
// });

const getAllRentpurchaseSearchApp = asyncHandler(async (req, res) => {
    const params = req.params.key
    const rentPurchase = await RentPurchase.find({
        $and: [
            { softdelete: { $ne: true } } // Filter out softdeleted bookings
        ]
    }).sort({ _id: "descending" });
    if (!rentPurchase?.length) {
        return res.status(400).json({ message: "No Project Name found" });
    }

    const propertyIds = rentPurchase.map(property => property.porpertyid);
    const employeeIds = rentPurchase.map(employee => employee.employeeid);
    const employeeCreatedBy = rentPurchase.map(employee => employee.createdBy);
    const employeeIdsUpdatedBy = rentPurchase.map(employee => employee.updatedBy);

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
        const employeeDataCreatedBy = await Employee.find({ _id: { $in: employeeCreatedBy } });
        const employeeDataUpdatedBy = await Employee.find({ _id: { $in: employeeIdsUpdatedBy } });
        const userData = await User.find({ _id: { $in: ownerId } });
        const tenantDetails = await tenantContract.find({ propertyid: { $in: propertyIds } });
        // const tenantDetailsCustomer = await tenantContract.find({ _id: { $in: propertyIds } });
        // const customerIds = tenantDetailsCustomer.map(tenants => tenants?.customerid)

        const rentPurchaseWithBuilding = rentPurchase.map(rent => {
            const availabilityObject = rent.toObject();
            const { porpertyid, employeeid, propertyvaluation, maintenance, listingtype, key_location, noof_key, listingsource, createdAt, _id, propertystatus, unlisted, again_available, createdBy, updatedBy, updatedAt, multi_propertyvaluation, multivaluation, property_reference, transaction_status } = availabilityObject;
            const updatedAvailability = { porpertyid, employeeid, propertyvaluation, maintenance, listingtype, key_location, noof_key, listingsource, createdAt, _id, propertystatus, unlisted, again_available, createdBy, updatedBy, updatedAt, multi_propertyvaluation, multivaluation, property_reference, transaction_status };
            if (porpertyid) {
                const property = properties.find(property => String(property._id) === String(rent.porpertyid));
                if (property) {
                    updatedAvailability.unitnumber = property.unitnumber;
                    updatedAvailability.floor = property.floor;
                    updatedAvailability.balcony = property.balcony;
                    updatedAvailability.kitchen = property.kitchen;
                    updatedAvailability.projectstatus = property.projectstatus;
                    updatedAvailability.furnished = property.furnished;
                    updatedAvailability.halfbathroom = property.halfbathroom;
                    updatedAvailability.nobathroom = property.nobathroom;
                    updatedAvailability.plotsize = property.plotsize;
                    updatedAvailability.projectstatus = property.projectstatus;
                    updatedAvailability.propertytype = property.propertytype;
                    updatedAvailability.noparking = property.noparking;
                    updatedAvailability.builduparea = property.builduparea;
                    updatedAvailability.measure_units = property.measure_units;

                    if (propertystatus !== "Multiple" && propertystatus === "Rent") {
                        const tenant = tenantDetails.find(tenant => String(tenant.propertyid) === String(porpertyid) && tenant.contractupdation !== "terminated" && tenant.softdelete === false);
                        if (tenant) {
                            updatedAvailability.contract_startdate = tenant.contractstartdate;
                            updatedAvailability.contract_enddate = tenant.contractenddate;
                            updatedAvailability.tenantid = tenant._id;
                            updatedAvailability.rental_amount = tenant.rentalamount;
                            updatedAvailability.tenat_email = tenant.email;
                            updatedAvailability.tenant_name = tenant.guestname;
                            updatedAvailability.tenant_passport = tenant.passportnumber;
                            updatedAvailability.tenant_nationality = tenant.nationality;
                            updatedAvailability.tenant_mobilenumber = tenant.mobilenumber;
                        }
                    }

                    const building = buildings.find(building => String(building._id) === String(property.buildingid));
                    if (building) {
                        updatedAvailability.building_name = building.buildingname;
                        updatedAvailability.buildingid = building._id;
                    }

                    const projectname = projectnames.find(project => String(project._id) === String(property.projectnameid));
                    if (projectname) {
                        updatedAvailability.project_name = projectname.projectName;
                        updatedAvailability.projectnameid = projectname._id;
                    }

                    const community = communityData.find(community => String(community._id) === String(property.communityid));
                    if (community) {
                        updatedAvailability.community_name = community.communityname;
                        updatedAvailability.communityid = community._id;
                    }

                    const subtype = subtypeData.find(subtype => String(subtype._id) === String(property.subtypeid));
                    if (subtype) {
                        updatedAvailability.subtype_name = subtype.subtypename;
                    }

                    const customerid = userData.find(customerid => String(customerid._id) === String(property?.customerid));
                    if (customerid) {
                        updatedAvailability.property_owner_name = (customerid?.firstname) + (customerid?.lastname ? " " + customerid?.lastname : "") + (customerid?.email ? " | " + customerid?.email : "");
                        updatedAvailability.property_owner_email = customerid?.email;
                        updatedAvailability.property_owner_id = customerid?._id;
                    }

                    const employee = employeeData.find(employee => String(employee._id) === String(employeeid));
                    if (employee) {
                        updatedAvailability.employee_email = employee?.softdelete === false ? employee?.email : "";
                    }

                    const employeeCreatedBy = employeeDataCreatedBy.find(employee => String(employee._id) === String(createdBy));
                    if (employeeCreatedBy) {
                        updatedAvailability.employee_email_createdBy = employeeCreatedBy?.email;
                    }
                    const employeeUpdatedBy = employeeDataUpdatedBy.find(employee => String(employee._id) === String(updatedBy));
                    if (employeeUpdatedBy) {
                        updatedAvailability.employee_email_updatedBy = employeeUpdatedBy?.email;
                    }
                }

            }

            return updatedAvailability;
        });

        const employeeIdsMultiValuation = [];

        for (const rent of rentPurchase) {
            if (rent.multivaluation && Array.isArray(rent.multivaluation)) {
                for (const valuation of rent.multivaluation) {
                    if (valuation.employeeid) {
                        employeeIdsMultiValuation.push(valuation.employeeid); // Corrected line
                    }
                }
            }
        }

        const employeeDataMultiValuation = await Employee.find({ _id: { $in: employeeIdsMultiValuation } });
        const rentPurchaseWithEmail = rentPurchaseWithBuilding.map(rent => {
            const updatedRent = { ...rent };

            if (updatedRent.multivaluation) {
                updatedRent.multivaluation = updatedRent.multivaluation.map(valuation => {
                    const updatedValuation = { ...valuation };

                    if (valuation.employeeid) {
                        const employee = employeeDataMultiValuation.find(employee => String(employee._id) === String(valuation.employeeid));
                        if (employee && employee.softdelete === false) {
                            updatedValuation.employee_email = employee.email;
                        }
                    }

                    if (valuation.propertystatus === "Rent") {
                        const tenant = tenantDetails.find(tenant => String(tenant.propertyid) === String(rent?.porpertyid) && tenant.contractupdation !== "terminated" && tenant.softdelete === false);
                        if (tenant) {
                            updatedValuation.contract_startdate = tenant.contractstartdate;
                            updatedValuation.contract_enddate = tenant.contractenddate;
                            updatedValuation.tenantid = tenant._id;
                            updatedValuation.rental_amount = tenant.rentalamount;
                            updatedValuation.tenat_email = tenant.email;
                            updatedValuation.tenant_name = tenant.guestname;
                            updatedValuation.tenant_passport = tenant.passportnumber;
                            updatedValuation.tenant_nationality = tenant.nationality;
                            updatedValuation.tenant_mobilenumber = tenant.mobilenumber;
                        }
                    }

                    return updatedValuation;
                });
            }

            return updatedRent;
        });

        // res.json(rentPurchaseWithEmail);
        const filteredrentPurchas = rentPurchaseWithEmail?.filter(rentPurchas => {
            return Object.values(rentPurchas).some(value => {
                if (typeof value === 'string' && value.toLowerCase().includes(params.toLowerCase())) {
                    return true;
                }
                return false;
            });
        });
        res.json(filteredrentPurchas);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});

const getAllRentpurchase = asyncHandler(async (req, res) => {
    const rentPurchase = await RentPurchase.find({
        $and: [
            { softdelete: { $ne: true } } // Filter out softdeleted bookings
        ]
    }).sort({ _id: "descending" });
    if (!rentPurchase?.length) {
        return res.status(400).json({ message: "No Project Name found" });
    }

    const propertyIds = rentPurchase.map(property => property.porpertyid);
    const employeeIds = rentPurchase.map(employee => employee.employeeid);
    const employeeCreatedBy = rentPurchase.map(employee => employee.createdBy);
    const employeeIdsUpdatedBy = rentPurchase.map(employee => employee.updatedBy);

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
        const employeeDataCreatedBy = await Employee.find({ _id: { $in: employeeCreatedBy } });
        const employeeDataUpdatedBy = await Employee.find({ _id: { $in: employeeIdsUpdatedBy } });
        const userData = await User.find({ _id: { $in: ownerId } });
        const tenantDetails = await tenantContract.find({ propertyid: { $in: propertyIds } });
        // const tenantDetailsCustomer = await tenantContract.find({ _id: { $in: propertyIds } });
        // const customerIds = tenantDetailsCustomer.map(tenants => tenants?.customerid)

        const rentPurchaseWithBuilding = rentPurchase.map(rent => {
            const availabilityObject = rent.toObject();
            const { porpertyid, employeeid, propertyvaluation, maintenance, listingtype, key_location, noof_key, listingsource, createdAt, _id, propertystatus, unlisted, again_available, createdBy, updatedBy, updatedAt, multi_propertyvaluation, multivaluation, property_reference, transaction_status } = availabilityObject;
            const updatedAvailability = { porpertyid, employeeid, propertyvaluation, maintenance, listingtype, key_location, noof_key, listingsource, createdAt, _id, propertystatus, unlisted, again_available, createdBy, updatedBy, updatedAt, multi_propertyvaluation, multivaluation, property_reference, transaction_status };
            if (porpertyid) {
                const property = properties.find(property => String(property._id) === String(rent.porpertyid));
                if (property) {
                    updatedAvailability.unitnumber = property.unitnumber;
                    updatedAvailability.floor = property.floor;
                    updatedAvailability.balcony = property.balcony;
                    updatedAvailability.kitchen = property.kitchen;
                    updatedAvailability.projectstatus = property.projectstatus;
                    updatedAvailability.furnished = property.furnished;
                    updatedAvailability.halfbathroom = property.halfbathroom;
                    updatedAvailability.nobathroom = property.nobathroom;
                    updatedAvailability.plotsize = property.plotsize;
                    updatedAvailability.projectstatus = property.projectstatus;
                    updatedAvailability.propertytype = property.propertytype;
                    updatedAvailability.noparking = property.noparking;
                    updatedAvailability.builduparea = property.builduparea;
                    updatedAvailability.measure_units = property.measure_units;

                    if (propertystatus !== "Multiple" && propertystatus === "Rent") {
                        const tenant = tenantDetails.find(tenant => String(tenant.propertyid) === String(porpertyid) && tenant.contractupdation !== "terminated" && tenant.softdelete === false);
                        if (tenant) {
                            updatedAvailability.contract_startdate = tenant.contractstartdate;
                            updatedAvailability.contract_enddate = tenant.contractenddate;
                            updatedAvailability.tenantid = tenant._id;
                            updatedAvailability.rental_amount = tenant.rentalamount;
                            updatedAvailability.tenat_email = tenant.email;
                            updatedAvailability.tenant_name = tenant.guestname;
                            updatedAvailability.tenant_passport = tenant.passportnumber;
                            updatedAvailability.tenant_nationality = tenant.nationality;
                            updatedAvailability.tenant_mobilenumber = tenant.mobilenumber;
                        }
                    }

                    const building = buildings.find(building => String(building._id) === String(property.buildingid));
                    if (building) {
                        updatedAvailability.building_name = building.buildingname;
                        updatedAvailability.buildingid = building._id;
                    }

                    const projectname = projectnames.find(project => String(project._id) === String(property.projectnameid));
                    if (projectname) {
                        updatedAvailability.project_name = projectname.projectName;
                        updatedAvailability.projectnameid = projectname._id;
                    }

                    const community = communityData.find(community => String(community._id) === String(property.communityid));
                    if (community) {
                        updatedAvailability.community_name = community.communityname;
                        updatedAvailability.communityid = community._id;
                    }

                    const subtype = subtypeData.find(subtype => String(subtype._id) === String(property.subtypeid));
                    if (subtype) {
                        updatedAvailability.subtype_name = subtype.subtypename;
                    }

                    const customerid = userData.find(customerid => String(customerid._id) === String(property?.customerid));
                    if (customerid) {
                        updatedAvailability.property_owner_name = (customerid?.firstname) + (customerid?.lastname ? " " + customerid?.lastname : "") + (customerid?.email ? " | " + customerid?.email : "");
                        updatedAvailability.property_owner_email = customerid?.email;
                        updatedAvailability.property_owner_id = customerid?._id;
                    }

                    const employee = employeeData.find(employee => String(employee._id) === String(employeeid));
                    if (employee) {
                        updatedAvailability.employee_email = employee?.softdelete === false ? employee?.email : "";
                    }

                    const employeeCreatedBy = employeeDataCreatedBy.find(employee => String(employee._id) === String(createdBy));
                    if (employeeCreatedBy) {
                        updatedAvailability.employee_email_createdBy = employeeCreatedBy?.email;
                    }
                    const employeeUpdatedBy = employeeDataUpdatedBy.find(employee => String(employee._id) === String(updatedBy));
                    if (employeeUpdatedBy) {
                        updatedAvailability.employee_email_updatedBy = employeeUpdatedBy?.email;
                    }
                }

            }

            return updatedAvailability;
        });

        const employeeIdsMultiValuation = [];

        for (const rent of rentPurchase) {
            if (rent.multivaluation && Array.isArray(rent.multivaluation)) {
                for (const valuation of rent.multivaluation) {
                    if (valuation.employeeid) {
                        employeeIdsMultiValuation.push(valuation.employeeid); // Corrected line
                    }
                }
            }
        }

        const employeeDataMultiValuation = await Employee.find({ _id: { $in: employeeIdsMultiValuation } });
        const rentPurchaseWithEmail = rentPurchaseWithBuilding.map(rent => {
            const updatedRent = { ...rent };

            if (updatedRent.multivaluation) {
                updatedRent.multivaluation = updatedRent.multivaluation.map(valuation => {
                    const updatedValuation = { ...valuation };

                    if (valuation.employeeid) {
                        const employee = employeeDataMultiValuation.find(employee => String(employee._id) === String(valuation.employeeid));
                        if (employee && employee.softdelete === false) {
                            updatedValuation.employee_email = employee.email;
                        }
                    }

                    if (valuation.propertystatus === "Rent") {
                        const tenant = tenantDetails.find(tenant => String(tenant.propertyid) === String(rent?.porpertyid) && tenant.contractupdation !== "terminated" && tenant.softdelete === false);
                        if (tenant) {
                            updatedValuation.contract_startdate = tenant.contractstartdate;
                            updatedValuation.contract_enddate = tenant.contractenddate;
                            updatedValuation.tenantid = tenant._id;
                            updatedValuation.rental_amount = tenant.rentalamount;
                            updatedValuation.tenat_email = tenant.email;
                            updatedValuation.tenant_name = tenant.guestname;
                            updatedValuation.tenant_passport = tenant.passportnumber;
                            updatedValuation.tenant_nationality = tenant.nationality;
                            updatedValuation.tenant_mobilenumber = tenant.mobilenumber;
                        }
                    }

                    return updatedValuation;
                });
            }

            return updatedRent;
        });

        res.json(rentPurchaseWithEmail);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});

const getPaginationRentpurchase = asyncHandler(async (req, res) => {
    const page = parseInt(req.query.page || 0)
    const perPage = req.query.perPage || 10
    const sort = req.query.sort
    try {
        const count = await RentPurchase.countDocuments()
        const rentpurchase = await RentPurchase.find({
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
            rentpurchase
        })
    } catch (err) {
        res.status(400).json({
            err: `Error getting data: ${err.message}`
        })
    }
})

const getRentPurchaseProperty = asyncHandler(async (req, res) => {
    try {
        const RentPurchaseData = await RentPurchase.find({
            $and: [
                { softdelete: { $ne: true } } // Filter out softdeleted bookings
            ],
            $or: [
                req.query,
            ]
            // propertyid: req.query.propertyid
        })
        return res.status(200).json(RentPurchaseData)
    } catch (err) {
        res.status(400).json({
            err: `Error getting data: ${err.message}`
        })
    }
})

const getPaginationRentpurchaseWithDate = asyncHandler(async (req, res) => {
    const page = parseInt(req.query.page || 0)
    const perPage = req.query.perPage || 10
    const sort = req.query.sort
    const fromDate = req.query.fromDate
    const toDate = req.query.toDate
    try {
        const count = await RentPurchase.countDocuments()
        const rentpurchase = await RentPurchase.find({
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
            rentpurchase
        })
    } catch (err) {
        res.status(400).json({
            err: `Error getting data: ${err.message}`
        })
    }
})

const getSearchRentpurchase = asyncHandler(async (req, res) => {
    // console.log(req?.query)
    try {
        const rentpurchase = await RentPurchase.find({
            $and: [
                { softdelete: { $ne: true } }
            ],
            "$or": [
                req.query,
                { "multivaluation.propertystatus": req.query.propertystatus },
            ]
        }).sort({ _id: "descending" });

        // console.log(rentpurchase, "rentpurchase")

        const propertyIds = rentpurchase.map(property => property.porpertyid);
        const employeeIds = rentpurchase.map(employee => employee.employeeid);
        const properties = await AddProperty.find({ _id: { $in: propertyIds } });
        const buildingIds = properties.map(property => property?.buildingid);
        const projectnameId = properties.map(property => property?.projectnameid);
        const communityId = properties.map(property => property?.communityid);
        const subtypeId = properties.map(property => property?.subtypeid);
        const ownerId = properties.map(property => property.customerid);
        const employeeCreatedBy = rentpurchase.map(employee => employee.createdBy);
        const employeeIdsUpdatedBy = rentpurchase.map(employee => employee.updatedBy);

        const buildings = await BuildingName.find({ _id: { $in: buildingIds } });
        const projectnames = await ProjectName.find({ _id: { $in: projectnameId } });
        const communityData = await CommunityName.find({ _id: { $in: communityId } });
        const subtypeData = await SubType.find({ _id: { $in: subtypeId } });
        const employeeData = await Employee.find({ _id: { $in: employeeIds } });
        const employeeDataCreatedBy = await Employee.find({ _id: { $in: employeeCreatedBy } });
        const employeeDataUpdatedBy = await Employee.find({ _id: { $in: employeeIdsUpdatedBy } });
        const tenantDetails = await tenantContract.find({ propertyid: { $in: propertyIds } });
        const userData = await User.find({ _id: { $in: ownerId } });

        const rentPurchaseWithBuilding = rentpurchase.map(rent => {
            const availabilityObject = rent.toObject();
            const { porpertyid, employeeid, propertyvaluation, maintenance, listingtype, key_location, noof_key, listingsource, createdAt, _id, propertystatus, unlisted, unlist_date, again_available, createdBy, updatedBy, updatedAt, multi_propertyvaluation, multivaluation, property_reference, transaction_status } = availabilityObject;
            const updatedAvailability = { porpertyid, employeeid, propertyvaluation, maintenance, listingtype, key_location, noof_key, listingsource, createdAt, _id, propertystatus, unlisted, unlist_date, again_available, createdBy, updatedBy, updatedAt, multi_propertyvaluation, multivaluation, property_reference, transaction_status };
            if (porpertyid) {
                const property = properties.find(property => String(property._id) === String(rent.porpertyid));
                if (property) {
                    updatedAvailability.unitnumber = property.unitnumber;
                    updatedAvailability.floor = property.floor;
                    updatedAvailability.balcony = property.balcony;
                    updatedAvailability.kitchen = property.kitchen;
                    updatedAvailability.projectstatus = property.projectstatus;
                    updatedAvailability.furnished = property.furnished;
                    updatedAvailability.halfbathroom = property.halfbathroom;
                    updatedAvailability.nobathroom = property.nobathroom;
                    updatedAvailability.plotsize = property.plotsize;
                    updatedAvailability.projectstatus = property.projectstatus;
                    updatedAvailability.propertytype = property.propertytype;
                    updatedAvailability.noparking = property.noparking;
                    updatedAvailability.builduparea = property.builduparea;
                    updatedAvailability.measure_units = property.measure_units;

                    if (propertystatus !== "Multiple" && propertystatus === "Rent") {
                        const tenant = tenantDetails.find(tenant => String(tenant.propertyid) === String(porpertyid) && tenant.contractupdation !== "terminated" && tenant.softdelete === false);
                        if (tenant) {
                            updatedAvailability.contract_startdate = tenant.contractstartdate;
                            updatedAvailability.contract_enddate = tenant.contractenddate;
                            updatedAvailability.tenantid = tenant._id;
                            updatedAvailability.rental_amount = tenant.rentalamount;
                            updatedAvailability.tenat_email = tenant.email;
                            updatedAvailability.tenant_name = tenant.guestname;
                            updatedAvailability.tenant_passport = tenant.passportnumber;
                            updatedAvailability.tenant_nationality = tenant.nationality;
                            updatedAvailability.tenant_mobilenumber = tenant.mobilenumber
                        }
                    }

                    const building = buildings.find(building => String(building._id) === String(property.buildingid));
                    if (building) {
                        updatedAvailability.building_name = building.buildingname;
                        updatedAvailability.buildingid = building._id;
                    }

                    const projectname = projectnames.find(project => String(project._id) === String(property.projectnameid));
                    if (projectname) {
                        updatedAvailability.project_name = projectname.projectName;
                        updatedAvailability.projectnameid = projectname._id;
                    }

                    const community = communityData.find(community => String(community._id) === String(property.communityid));
                    if (community) {
                        updatedAvailability.community_name = community.communityname;
                        updatedAvailability.communityid = community._id;
                    }

                    const subtype = subtypeData.find(subtype => String(subtype._id) === String(property.subtypeid));
                    if (subtype) {
                        updatedAvailability.subtype_name = subtype.subtypename;
                    }

                    const customerid = userData.find(customerid => String(customerid._id) === String(property?.customerid));
                    if (customerid) {
                        updatedAvailability.property_owner_name = (customerid?.firstname) + (customerid?.lastname ? " " + customerid?.lastname : "") + (customerid?.email ? " | " + customerid?.email : "");
                        updatedAvailability.property_owner_email = customerid?.email;
                        updatedAvailability.property_owner_id = customerid?._id;
                    }

                    const employee = employeeData.find(employee => String(employee._id) === String(employeeid));
                    if (employee) {
                        updatedAvailability.employee_email = employee?.softdelete === false ? employee?.email : "";
                    }

                    const employeeCreatedBy = employeeDataCreatedBy.find(employee => String(employee._id) === String(createdBy));
                    if (employeeCreatedBy) {
                        updatedAvailability.employee_email_createdBy = employeeCreatedBy?.email;
                    }
                    const employeeUpdatedBy = employeeDataUpdatedBy.find(employee => String(employee._id) === String(updatedBy));
                    if (employeeUpdatedBy) {
                        updatedAvailability.employee_email_updatedBy = employeeUpdatedBy?.email;
                    }
                }

            }

            return updatedAvailability;
        });

        // res.json(rentPurchaseWithBuilding);
        const employeeIdsMultiValuation = [];

        for (const rent of rentpurchase) {
            if (rent.multivaluation && Array.isArray(rent.multivaluation)) {
                for (const valuation of rent.multivaluation) {
                    if (valuation.employeeid) {
                        employeeIdsMultiValuation.push(valuation.employeeid); // Corrected line
                    }
                }
            }
        }

        const employeeDataMultiValuation = await Employee.find({ _id: { $in: employeeIdsMultiValuation } });
        const rentPurchaseWithEmail = rentPurchaseWithBuilding.map(rent => {
            const updatedRent = { ...rent };

            if (updatedRent.multivaluation) {
                updatedRent.multivaluation = updatedRent.multivaluation.map(valuation => {
                    const updatedValuation = { ...valuation };

                    if (valuation.employeeid) {
                        const employee = employeeDataMultiValuation.find(employee => String(employee._id) === String(valuation.employeeid));
                        if (employee && employee.softdelete === false) {
                            updatedValuation.employee_email = employee.email;
                        }
                        if (valuation.propertystatus === "Rent") {
                            const tenant = tenantDetails.find(tenant => String(tenant.propertyid) === String(rent?.porpertyid) && tenant.contractupdation !== "terminated" && tenant.softdelete === false);
                            if (tenant) {
                                updatedValuation.contract_startdate = tenant.contractstartdate;
                                updatedValuation.contract_enddate = tenant.contractenddate;
                                updatedValuation.tenantid = tenant._id;
                                updatedValuation.rental_amount = tenant.rentalamount;
                                updatedValuation.tenat_email = tenant.email;
                                updatedValuation.tenant_name = tenant.guestname;
                                updatedValuation.tenant_passport = tenant.passportnumber;
                                updatedValuation.tenant_nationality = tenant.nationality;
                                updatedValuation.tenant_mobilenumber = tenant.mobilenumber
                            }
                        }
                    }

                    return updatedValuation;
                });
            }

            return updatedRent;
        });

        // console.log('updatedRentPurchase se bahar chal raha hai?')
        const updatedRentPurchase = rentPurchaseWithEmail
            .filter(item => item.unlisted === false)
            .map(item => {
                // console.log('map me arhaa hai?')
                if (item.propertystatus === 'Multiple' && req.query.propertystatus) {
                    // console.log("propertystatus me araha hai")
                    const filteredMultivaluation = item.multivaluation.filter(subItem => {
                        return subItem.propertystatus === req.query.propertystatus;
                    }).filter(item => { return item.unlisted === false });

                    return {
                        ...item,
                        multivaluation: filteredMultivaluation
                    };
                } else if (item.propertystatus === 'Multiple' && req.query.unlisted) {
                    // console.log("unlisted me araha hai")
                    const filteredMultivaluation = item.multivaluation.filter(item => { return item.unlisted === false });
                    return {
                        ...item,
                        multivaluation: filteredMultivaluation
                    };
                }
                // else {
                //     console.log('else me araha hai?')
                //     const filteredMultivaluation = item.multivaluation.filter(item => { return item.unlisted === false });
                //     return {
                //         ...item,
                //         multivaluation: filteredMultivaluation
                //     };
                // }

                return item;
            });

        const updateAvailabilityAgain = updatedRentPurchase.filter(item => {
            return !(item.propertystatus === 'Multiple' && !item.multivaluation?.length);
        });
        res.json(updateAvailabilityAgain);
        // res.status(200).json(rentPurchaseWithBuilding)
    } catch (err) {
        res.status(400).json({
            err: `Error getting data: ${err.message}`
        })
        console.log(err)
    }
})

const getSearchRentpurchaseOwner = asyncHandler(async (req, res) => {
    // console.log(req?.query)
    try {
        const rentpurchase = await RentPurchase.find({
            $and: [
                { softdelete: { $ne: true } }
            ],
            "$or": [
                req.query,
            ]
        }).sort({ _id: "descending" });

        // console.log(rentpurchase, "rentpurchase")

        const propertyIds = rentpurchase.map(property => property.porpertyid);
        const employeeIds = rentpurchase.map(employee => employee.employeeid);
        const properties = await AddProperty.find({ _id: { $in: propertyIds } });
        const buildingIds = properties.map(property => property?.buildingid);
        const projectnameId = properties.map(property => property?.projectnameid);
        const communityId = properties.map(property => property?.communityid);
        const subtypeId = properties.map(property => property?.subtypeid);
        const employeeCreatedBy = rentpurchase.map(employee => employee.createdBy);
        const employeeIdsUpdatedBy = rentpurchase.map(employee => employee.updatedBy);
        const ownerId = properties.map(property => property.customerid);

        const buildings = await BuildingName.find({ _id: { $in: buildingIds } });
        const projectnames = await ProjectName.find({ _id: { $in: projectnameId } });
        const communityData = await CommunityName.find({ _id: { $in: communityId } });
        const subtypeData = await SubType.find({ _id: { $in: subtypeId } });
        const employeeData = await Employee.find({ _id: { $in: employeeIds } });
        const employeeDataCreatedBy = await Employee.find({ _id: { $in: employeeCreatedBy } });
        const employeeDataUpdatedBy = await Employee.find({ _id: { $in: employeeIdsUpdatedBy } });
        const tenantDetails = await tenantContract.find({ propertyid: { $in: propertyIds } });
        const userData = await User.find({ _id: { $in: ownerId } });

        const rentPurchaseWithBuilding = rentpurchase.map(rent => {
            const availabilityObject = rent.toObject();
            const { porpertyid, employeeid, propertyvaluation, maintenance, listingtype, key_location, noof_key, listingsource, createdAt, _id, propertystatus, unlisted, unlist_date, again_available, createdBy, updatedBy, updatedAt, multi_propertyvaluation, multivaluation, property_reference, transaction_status } = availabilityObject;
            const updatedAvailability = { porpertyid, employeeid, propertyvaluation, maintenance, listingtype, key_location, noof_key, listingsource, createdAt, _id, propertystatus, unlisted, unlist_date, again_available, createdBy, updatedBy, updatedAt, multi_propertyvaluation, multivaluation, property_reference, transaction_status };
            if (porpertyid) {
                const property = properties.find(property => String(property._id) === String(rent.porpertyid));
                if (property) {
                    updatedAvailability.unitnumber = property.unitnumber;
                    updatedAvailability.floor = property.floor;
                    updatedAvailability.balcony = property.balcony;
                    updatedAvailability.kitchen = property.kitchen;
                    updatedAvailability.projectstatus = property.projectstatus;
                    updatedAvailability.furnished = property.furnished;
                    updatedAvailability.halfbathroom = property.halfbathroom;
                    updatedAvailability.nobathroom = property.nobathroom;
                    updatedAvailability.plotsize = property.plotsize;
                    updatedAvailability.projectstatus = property.projectstatus;
                    updatedAvailability.propertytype = property.propertytype;
                    updatedAvailability.noparking = property.noparking;
                    updatedAvailability.builduparea = property.builduparea;
                    updatedAvailability.measure_units = property.measure_units;

                    if (propertystatus !== "Multiple" && propertystatus === "Rent") {
                        const tenant = tenantDetails.find(tenant => String(tenant.propertyid) === String(porpertyid) && tenant.contractupdation !== "terminated" && tenant.softdelete === false);
                        if (tenant) {
                            updatedAvailability.contract_startdate = tenant.contractstartdate;
                            updatedAvailability.contract_enddate = tenant.contractenddate;
                            updatedAvailability.tenantid = tenant._id;
                            updatedAvailability.rental_amount = tenant.rentalamount;
                            updatedAvailability.tenat_email = tenant.email;
                            updatedAvailability.tenant_name = tenant.guestname;
                            updatedAvailability.tenant_passport = tenant.passportnumber;
                            updatedAvailability.tenant_nationality = tenant.nationality;
                            updatedAvailability.tenant_mobilenumber = tenant.mobilenumber
                        }
                    }

                    const building = buildings.find(building => String(building._id) === String(property.buildingid));
                    if (building) {
                        updatedAvailability.building_name = building.buildingname;
                        updatedAvailability.buildingid = building._id;
                    }

                    const projectname = projectnames.find(project => String(project._id) === String(property.projectnameid));
                    if (projectname) {
                        updatedAvailability.project_name = projectname.projectName;
                        updatedAvailability.projectnameid = projectname._id;
                    }

                    const community = communityData.find(community => String(community._id) === String(property.communityid));
                    if (community) {
                        updatedAvailability.community_name = community.communityname;
                        updatedAvailability.communityid = community._id;
                    }

                    const subtype = subtypeData.find(subtype => String(subtype._id) === String(property.subtypeid));
                    if (subtype) {
                        updatedAvailability.subtype_name = subtype.subtypename;
                    }

                    const customerid = userData.find(customerid => String(customerid._id) === String(property?.customerid));
                    if (customerid) {
                        updatedAvailability.property_owner_name = (customerid?.firstname) + (customerid?.lastname ? " " + customerid?.lastname : "") + (customerid?.email ? " | " + customerid?.email : "");
                        updatedAvailability.property_owner_email = customerid?.email;
                        updatedAvailability.property_owner_id = customerid?._id;
                    }

                    const employee = employeeData.find(employee => String(employee._id) === String(employeeid));
                    if (employee) {
                        updatedAvailability.employee_email = employee?.softdelete === false ? employee?.email : "";
                    }

                    const employeeCreatedBy = employeeDataCreatedBy.find(employee => String(employee._id) === String(createdBy));
                    if (employeeCreatedBy) {
                        updatedAvailability.employee_email_createdBy = employeeCreatedBy?.email;
                    }
                    const employeeUpdatedBy = employeeDataUpdatedBy.find(employee => String(employee._id) === String(updatedBy));
                    if (employeeUpdatedBy) {
                        updatedAvailability.employee_email_updatedBy = employeeUpdatedBy?.email;
                    }
                }

            }

            return updatedAvailability;
        });

        // res.json(rentPurchaseWithBuilding);
        const employeeIdsMultiValuation = [];

        for (const rent of rentpurchase) {
            if (rent.multivaluation && Array.isArray(rent.multivaluation)) {
                for (const valuation of rent.multivaluation) {
                    if (valuation.employeeid) {
                        employeeIdsMultiValuation.push(valuation.employeeid); // Corrected line
                    }
                }
            }
        }

        const employeeDataMultiValuation = await Employee.find({ _id: { $in: employeeIdsMultiValuation } });
        const rentPurchaseWithEmail = rentPurchaseWithBuilding.map(rent => {
            const updatedRent = { ...rent };

            if (updatedRent.multivaluation) {
                updatedRent.multivaluation = updatedRent.multivaluation.map(valuation => {
                    const updatedValuation = { ...valuation };

                    if (valuation.employeeid) {
                        const employee = employeeDataMultiValuation.find(employee => String(employee._id) === String(valuation.employeeid));
                        if (employee && employee.softdelete === false) {
                            updatedValuation.employee_email = employee.email;
                        }
                        if (valuation.propertystatus === "Rent") {
                            const tenant = tenantDetails.find(tenant => String(tenant.propertyid) === String(rent?.porpertyid) && tenant.contractupdation !== "terminated" && tenant.softdelete === false);
                            if (tenant) {
                                updatedValuation.contract_startdate = tenant.contractstartdate;
                                updatedValuation.contract_enddate = tenant.contractenddate;
                                updatedValuation.tenantid = tenant._id;
                                updatedValuation.rental_amount = tenant.rentalamount;
                                updatedValuation.tenat_email = tenant.email;
                                updatedValuation.tenant_name = tenant.guestname;
                                updatedValuation.tenant_passport = tenant.passportnumber;
                                updatedValuation.tenant_nationality = tenant.nationality;
                                updatedValuation.tenant_mobilenumber = tenant.mobilenumber
                            }
                        }
                    }

                    return updatedValuation;
                });
            }

            return updatedRent;
        });

        // console.log('updatedRentPurchase se bahar chal raha hai?')
        const updatedRentPurchase = rentPurchaseWithEmail
            .filter(item => item.unlisted === false)
            .map(item => {
                // console.log('map me arhaa hai?')
                if (item.propertystatus === 'Multiple' && req.query.propertystatus) {
                    // console.log("propertystatus me araha hai")
                    const filteredMultivaluation = item.multivaluation.filter(subItem => {
                        return subItem.propertystatus === req.query.propertystatus;
                    }).filter(item => { return item.unlisted === false });

                    return {
                        ...item,
                        multivaluation: filteredMultivaluation
                    };
                } else if (item.propertystatus === 'Multiple' && req.query.unlisted) {
                    // console.log("unlisted me araha hai")
                    const filteredMultivaluation = item.multivaluation.filter(item => { return item.unlisted === false });
                    return {
                        ...item,
                        multivaluation: filteredMultivaluation
                    };
                }
                // else {
                //     console.log('else me araha hai?')
                //     const filteredMultivaluation = item.multivaluation.filter(item => { return item.unlisted === false });
                //     return {
                //         ...item,
                //         multivaluation: filteredMultivaluation
                //     };
                // }

                return item;
            });

        const updateAvailabilityAgain = updatedRentPurchase.filter(item => {
            return !(item.propertystatus === 'Multiple' && !item.multivaluation?.length);
        });
        res.json(updateAvailabilityAgain);
        // res.status(200).json(rentPurchaseWithBuilding)
    } catch (err) {
        res.status(400).json({
            err: `Error getting data: ${err.message}`
        })
        console.log(err)
    }
})

const getRentpurchaseById = asyncHandler(async (req, res) => {
    const rentpurchaseId = await RentPurchase.findById(req.params.id)
    if (!rentpurchaseId) {
        return res.status(400).json({ message: "No Project Name found" })
    }
    res.json(rentpurchaseId)
})

const createRentpurchase = asyncHandler(async (req, res) => {
    const { porpertyid, propertystatus, propertyvaluation, employeeid, employeename, listingsource, listingtype, noof_key, key_location, keylocation, numberkeys, numberaccesscard, maintenance, wardrobe, remarks, trakheesipermit, contractA, parking, unlisted, createdBy, updatedBy, multi_propertyvaluation, multivaluation, property_reference, transaction_status } = req.body
    if (!porpertyid || !propertystatus) {
        return res.status(400).json({ message: "All Fields are requires" })
    }
    const existingPropertyCheck = await RentPurchase.findOne({
        porpertyid,
        unlisted: false,
        softdelete: false,
    });

    if (existingPropertyCheck) {
        return res.status(400).json({ message: 'Availability is already exists' });
    }

    // let multivaluationParse

    // if (multivaluation) {
    //     multivaluationParse = JSON.parse(multivaluation)
    // }


    // Check if the property exists based on 'porpertyid'
    let existingProperty = await RentPurchase.findOne({ porpertyid });
    if (Array.isArray(existingProperty)) {
        // Multiple properties found with 'porpertyid'
        // Check if any property does not have an 'again_available' value
        const propertyToUpdate = existingProperty.find((property) => !property.again_available);

        if (propertyToUpdate) {
            // If a property with 'porpertyid' exists and does not have 'again_available', update its 'again_available' field with the current date
            propertyToUpdate.again_available = new Date();
            await propertyToUpdate.save();

            // Make the PATCH request to update 'again_available' through the API
            try {
                const apiData = new URLSearchParams();
                apiData.append('_id', propertyToUpdate._id);
                apiData.append('again_available', propertyToUpdate.again_available);

                const header = {
                    "Content-Type": "application/x-www-form-urlencoded"
                }

                const response = await axios.patch(`${process.env.OWN_SERVER}/rentpurchase/api/property/`, apiData.toString(), header);
                // console.log(response.status, "response.status");
                // console.log(response.data, "response.data");

                if (response.status !== 200) {
                    console.error("Error updating 'again_available' through the API:", response.data);
                }
            } catch (error) {
                console.error("Error updating 'again_available' through the API:", error);
            }
        }
    } else if (existingProperty) {
        // Single property found with 'porpertyid'
        // Check if it does not have an 'again_available' value
        existingProperty.again_available = new Date();
        await existingProperty.save();

        // Make the PATCH request to update 'again_available' through the API
        try {
            const apiData = new URLSearchParams();
            apiData.append('_id', existingProperty._id);
            apiData.append('again_available', existingProperty.again_available);

            const header = {
                "Content-Type": "application/x-www-form-urlencoded"
            }

            const response = await axios.patch(`${process.env.OWN_SERVER}/rentpurchase/api/property/`, apiData.toString(), header);
            // console.log(response.status, "response.status");
            // console.log(response.data, "response.data");

            if (response.status !== 200) {
                console.error("Error updating 'again_available' through the API:", response.data);
            }
        } catch (error) {
            console.error("Error updating 'again_available' through the API:", error);
        }
    }

    const rentpurchaseObject = { porpertyid, propertystatus, propertyvaluation, employeeid, employeename, listingsource, listingtype, noof_key, key_location, keylocation, numberkeys, numberaccesscard, maintenance, wardrobe, remarks, trakheesipermit, contractA, parking, unlisted, createdBy, updatedBy, multi_propertyvaluation, multivaluation, property_reference, transaction_status }
    const rentpurchases = await RentPurchase.create(rentpurchaseObject)

    const formData = new URLSearchParams();
    formData.append('_id', porpertyid);
    formData.append('is_available', true);
    formData.append('available_for', propertystatus);
    formData.append('available_id', rentpurchases?._id);
    formData.append('unlisted', false);

    try {
        const header = {
            "Content-Type": "application/json"
        }

        // Make the PATCH request to the specified endpoint 
        const response = await axios.patch(`${process.env.OWN_SERVER}/property/api/availability/`, formData.toString(), header);

        if (response.status === 200) {
            if (rentpurchases) {
                // res.status(200).json({ message: `New user ${porpertyid} created` });
                res.status(200).json({ message: `New Availablity ${porpertyid} created` })
            } else {
                res.status(400).json({ message: 'Invalid Project Name data received' })
            }
        } else {
            res.status(400).json({ message: 'Invalid Project Name data received' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
})

const updateRentpurchase = asyncHandler(async (req, res) => {
    // console.log(req.body)
    const { _id, porpertyid, propertystatus, propertyvaluation, employeeid, employeename, listingsource, listingtype, noof_key, key_location, keylocation, numberkeys, numberaccesscard, maintenance, wardrobe, remarks, trakheesipermit, contractA, parking, unlisted, createdBy, updatedBy, multi_propertyvaluation, multivaluation, property_reference, transaction_status } = req.body

    if (!_id || !porpertyid || !propertystatus) {
        return res.status(400).json({ message: "Id Name is requires" })
    }

    const rentpurchases = await RentPurchase.findById(_id).exec()

    // if (!rentpurchase) {
    //     res.status(400).json({ message: 'Project Name not found' })
    // }

    rentpurchases.porpertyid = porpertyid
    rentpurchases.propertystatus = propertystatus
    rentpurchases.propertyvaluation = propertyvaluation
    rentpurchases.employeeid = employeeid
    rentpurchases.employeename = employeename
    rentpurchases.listingsource = listingsource
    rentpurchases.listingtype = listingtype
    rentpurchases.keylocation = keylocation
    rentpurchases.numberkeys = numberkeys
    rentpurchases.numberaccesscard = numberaccesscard
    rentpurchases.maintenance = maintenance
    rentpurchases.wardrobe = wardrobe
    rentpurchases.remarks = remarks
    rentpurchases.trakheesipermit = trakheesipermit
    rentpurchases.contractA = contractA
    rentpurchases.parking = parking
    rentpurchases.unlisted = unlisted
    rentpurchases.key_location = key_location
    rentpurchases.noof_key = noof_key
    rentpurchases.createdBy = createdBy
    rentpurchases.updatedBy = updatedBy
    rentpurchases.multi_propertyvaluation = multi_propertyvaluation
    rentpurchases.multivaluation = multivaluation
    rentpurchases.transaction_status = transaction_status
    rentpurchases.property_reference = property_reference

    const updateProjectN = await rentpurchases.save()

    // Construct the data to be sent as form data
    const formData = new URLSearchParams();
    formData.append('_id', porpertyid);
    formData.append('is_available', true);
    formData.append('available_for', propertystatus);
    formData.append('available_id', _id);
    formData.append('unlisted', unlisted);

    try {
        const header = {
            "Content-Type": "application/json"
        }

        // Make the PATCH request to the specified endpoint 
        const response = await axios.patch(`${process.env.OWN_SERVER}/property/api/availability/`, formData.toString(), header);
        // console.log(response, "response")
        if (response.status === 200) {
            // console.log('if me araha hai?')
            // res.status(200).json({ message: `New user ${porpertyid} created` });
        } else {
            // console.log('else me araha hai?')
            res.status(400).json({ message: 'Invalid Project Name data received' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
    res.json({ message: `${updateProjectN.porpertyid} updated` })

})

const updatePropertyAvailability = asyncHandler(async (req, res) => {
    const { _id, ...updateData } = req.body;

    const existingProperty = await RentPurchase.findById(_id).exec();
    if (!existingProperty) {
        return res.status(400).json({ message: 'Property not found' });
    }

    Object.assign(existingProperty, updateData);

    const updatedProperty = await existingProperty.save();

    return res.json({ message: `${updatedProperty} updated` });
});

const deleteRentpurchase = asyncHandler(async (req, res) => {
    const { _id } = req.body

    if (!_id) {
        return res.status(400).json({ message: "Project name Id required" })
    }

    const projectN = await RentPurchase.findById(_id).exec()

    if (!projectN) {
        return res.status(400).json({ message: 'Project name not found' })
    }

    const result = await projectN.deleteOne()

    const reply = `Property Id ${result?.porpertyid} with Id ${result?._id} deleted`

    res.json(reply)
})

module.exports = {
    getAllRentpurchase,
    getRentpurchaseById,
    createRentpurchase,
    updateRentpurchase,
    deleteRentpurchase,
    getPaginationRentpurchase,
    getSearchRentpurchase,
    getPaginationRentpurchaseWithDate,
    updatePropertyAvailability,
    getRentPurchaseProperty,
    getSearchRentpurchaseOwner,
    getAllRentpurchaseSearchApp
}