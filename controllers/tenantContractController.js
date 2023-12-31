const TenantContract = require('../models/tenantContract')
const asyncHandler = require('express-async-handler')
const User = require('../models/User')
// const { axios } = require('axios')
const axios = require('axios');
const AddProperty = require('../models/addProperty')
const BuildingName = require('../models/buildingName')
const ProjectName = require('../models/projectName')
const CommunityName = require('../models/communityname')
const SubType = require('../models/subType');
const Employee = require('../models/employee')
const sendEmail = require('../utils/sendEmail');
const moment = require('moment-timezone');

const getAllTenantContract = asyncHandler(async (req, res) => {
    const tenantContract = await TenantContract.find({
        $and: [
            { softdelete: { $ne: true } } // Filter out softdeleted bookings
        ]
    }).sort({ _id: "descending" })
    if (!tenantContract?.length) {
        return res.status(400).json({ message: "No Tenant Contract found" })
    }
    const customerIds = tenantContract.map(customer => customer?.customerid);
    const customerEmail = tenantContract.map(customer => customer?.email);
    const propertyIds = tenantContract.map(property => property?.propertyid);
    const employeeIds = tenantContract.map(employee => employee.createdBy);
    const employeeIdsUpdatedBy = tenantContract.map(employee => employee.updatedBy);

    try {
        const customers = await User.find({ _id: { $in: customerIds } });
        const customersEmails = await User.find({ email: { $in: customerEmail } });
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

        // console.log(customers, "customers")

        const tenantContractAllData = tenantContract.map(customerData => {
            const tenantObject = customerData.toObject();
            const { _id, propertyid, customerid, guestname, passportnumber, customertype, nationality, mobilenumber, email, contractstartdate, contractenddate, createdBy, updatedBy, contractvalue, chequenumbe, chequedate, totalamount, chequeimage, rentalamount, securitydepositamount, noofchequeorinstallment, commission, contractexecutiondate, passportpdf, key_receipt_doc, tenancy_contract_doc, contractupdation, ejari_certificate_doc, addendum_doc, chequeDetails, createdAt, updatedAt } = tenantObject;
            const updatedTenantContract = { _id, propertyid, customerid, guestname, passportnumber, customertype, nationality, mobilenumber, email, contractstartdate, contractenddate, createdBy, updatedBy, contractvalue, chequenumbe, chequedate, totalamount, chequeimage, rentalamount, securitydepositamount, noofchequeorinstallment, commission, contractexecutiondate, passportpdf, key_receipt_doc, tenancy_contract_doc, contractupdation, ejari_certificate_doc, addendum_doc, chequeDetails, createdAt, updatedAt };
            if (propertyid) {
                const property = properties.find(property => String(property._id) === String(customerData.propertyid));
                if (property) {
                    updatedTenantContract.unitnumber = property.unitnumber;
                    updatedTenantContract.floor = property.floor;
                    updatedTenantContract.OwnerNameAsPerDeed = property.OwnerNameAsPerDeed;

                    const building = buildings.find(building => String(building._id) === String(property.buildingid));
                    if (building) {
                        updatedTenantContract.building_name = building.buildingname;
                        updatedTenantContract.buildingid = building._id;
                    }

                    const projectname = projectnames.find(project => String(project._id) === String(property.projectnameid));
                    if (projectname) {
                        updatedTenantContract.project_name = projectname.projectName;
                        updatedTenantContract.projectnameid = projectname._id;
                    }

                    const community = communityData.find(community => String(community._id) === String(property.communityid));
                    if (community) {
                        updatedTenantContract.community_name = community.communityname;
                        updatedTenantContract.communityid = community._id;
                    }

                    const subtype = subtypeData.find(subtype => String(subtype._id) === String(property.subtypeid));
                    if (subtype) {
                        updatedTenantContract.subtype_name = subtype.subtypename;
                    }

                    const customerid = userData.find(customerid => String(customerid._id) === String(property?.customerid));
                    if (customerid) {
                        updatedTenantContract.property_owner_name = (customerid?.firstname) + (customerid?.lastname ? " " + customerid?.lastname : "") + (customerid?.email ? " | " + customerid?.email : "");
                        updatedTenantContract.property_owner_email = customerid?.email;
                        updatedTenantContract.property_owner_id = customerid?._id;
                    }
                }
            }
            if (customerid) {
                const customer = customers.find(customer => String(customer._id) === String(customerData.customerid));
                updatedTenantContract.owner_name = customer?.firstname + " " + customer?.lastname;
                updatedTenantContract.owner_email = customer?.email;
                updatedTenantContract.owner_nationality = customer?.passportno;
                updatedTenantContract.owner_passportidno = customer?.passportidno;
                updatedTenantContract.owner_mobilenumber = customer?.whatsappno;
            } else {
                const customer = customersEmails.find(customer => customer.email === customerData.email);
                updatedTenantContract.owner_name = guestname;
                updatedTenantContract.owner_passportidno = passportnumber;
                updatedTenantContract.owner_email = email;
                updatedTenantContract.owner_nationality = nationality;
                updatedTenantContract.owner_mobilenumber = mobilenumber;
                updatedTenantContract.customerid = customer?._id;
            }

            const employee = employeeData.find(employee => String(employee._id) === String(createdBy));
            if (employee) {
                updatedTenantContract.employee_email_createdBy = employee?.email;
            }
            const employeeUpdatedBy = employeeDataUpdatedBy.find(employee => String(employee._id) === String(updatedBy));
            if (employeeUpdatedBy) {
                updatedTenantContract.employee_email_updatedBy = employeeUpdatedBy?.email;
            }


            return updatedTenantContract;
        });

        const formattedDate = tenantContractAllData?.map(tenantContract => {
            // const formattedcontractstartdate = tenantContract.contractstartdate ? new Date(tenantContract.contractstartdate).toDateString() : ''
            // const formattedcontractstartdate = tenantContract.contractstartdate && tenantContract?.contractstartdate !== null ? String(tenantContract.contractstartdate)?.split('T') : ''
            // console.log(tenantContract.contractstartdate, 'tenantContract.contractstartdate')
            // console.log(formattedcontractstartdate[0], "formattedcontractstartdate[0]")
            // console.log(formattedcontractstartdate[1], "formattedcontractstartdate[1]")
            const formattedcontractstartdate = tenantContract.contractstartdate ? new Date(tenantContract.contractstartdate).toDateString() : '';
            const formattedcontractenddate = tenantContract.contractenddate ? new Date(tenantContract.contractenddate).toDateString() : ''
            const formattedcontractexecutiondate = tenantContract.contractexecutiondate ? new Date(tenantContract.contractexecutiondate).toDateString() : ''
            const formattedCreatedAt = tenantContract.createdAt ? new Date(tenantContract.createdAt).toDateString() : ''
            const formattedupdatedAt = tenantContract.updatedAt ? new Date(tenantContract.updatedAt).toDateString() : ''

            // const formattedcontractstartdate = tenantContract.contractstartdate ? moment(tenantContract.contractstartdate).tz('Asia/Dubai').format('DD MMM YYYY') : '';
            // const formattedcontractenddate = tenantContract.contractenddate ? moment(tenantContract.contractenddate).tz('Asia/Dubai').format('DD MMM YYYY') : '';
            // const formattedcontractexecutiondate = tenantContract.contractexecutiondate ? moment(tenantContract.contractexecutiondate).tz('Asia/Dubai').format('DD MMM YYYY') : '';
            // const formattedCreatedAt = tenantContract.createdAt ? moment(tenantContract.createdAt).tz('Asia/Dubai').format('DD MMM YYYY') : '';
            // const formattedupdatedAt = tenantContract.updatedAt ? moment(tenantContract.updatedAt).tz('Asia/Dubai').format('DD MMM YYYY') : '';

            const completed_data = tenantContract?.propertyid && tenantContract?.email && tenantContract?.customertype && tenantContract?.contractstartdate && tenantContract?.contractenddate && tenantContract?.rentalamount && tenantContract?.securitydepositamount && tenantContract?.noofchequeorinstallment && tenantContract?.contractexecutiondate && tenantContract?.ejari_certificate_doc && tenantContract?.tenancy_contract_doc && tenantContract?.addendum_doc && tenantContract?.key_receipt_doc && tenantContract?.chequeDetails?.length ? true : false
            return { ...tenantContract, contractstart_date: formattedcontractstartdate, Created_At: formattedCreatedAt, contractend_date: formattedcontractenddate, contractexecution_date: formattedcontractexecutiondate, updatedAt: formattedupdatedAt, createdAt: formattedCreatedAt, completed_data: completed_data }
        })

        res.json(formattedDate);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
})

const getTenantContractSearch = asyncHandler(async (req, res) => {
    const params = req.params.key
    const tenantContract = await TenantContract.find({
        $and: [
            { softdelete: { $ne: true } } // Filter out softdeleted bookings
        ]
    }).sort({ _id: "descending" })
    if (!tenantContract?.length) {
        return res.status(400).json({ message: "No Tenant Contract found" })
    }
    const customerIds = tenantContract.map(customer => customer?.customerid);
    const customerEmail = tenantContract.map(customer => customer?.email);
    const propertyIds = tenantContract.map(property => property?.propertyid);
    const employeeIds = tenantContract.map(employee => employee.createdBy);
    const employeeIdsUpdatedBy = tenantContract.map(employee => employee.updatedBy);

    try {
        const customers = await User.find({ _id: { $in: customerIds } });
        const customersEmails = await User.find({ email: { $in: customerEmail } });
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

        // console.log(customers, "customers")

        const tenantContractAllData = tenantContract.map(customerData => {
            const tenantObject = customerData.toObject();
            const { _id, propertyid, customerid, guestname, passportnumber, customertype, nationality, mobilenumber, email, contractstartdate, contractenddate, createdBy, updatedBy, contractvalue, chequenumbe, chequedate, totalamount, chequeimage, rentalamount, securitydepositamount, noofchequeorinstallment, commission, contractexecutiondate, passportpdf, key_receipt_doc, tenancy_contract_doc, contractupdation, ejari_certificate_doc, addendum_doc, chequeDetails, createdAt, updatedAt } = tenantObject;
            const updatedTenantContract = { _id, propertyid, customerid, guestname, passportnumber, customertype, nationality, mobilenumber, email, contractstartdate, contractenddate, createdBy, updatedBy, contractvalue, chequenumbe, chequedate, totalamount, chequeimage, rentalamount, securitydepositamount, noofchequeorinstallment, commission, contractexecutiondate, passportpdf, key_receipt_doc, tenancy_contract_doc, contractupdation, ejari_certificate_doc, addendum_doc, chequeDetails, createdAt, updatedAt };
            if (propertyid) {
                const property = properties.find(property => String(property._id) === String(customerData.propertyid));
                if (property) {
                    updatedTenantContract.unitnumber = property.unitnumber;
                    updatedTenantContract.floor = property.floor;

                    const building = buildings.find(building => String(building._id) === String(property.buildingid));
                    if (building) {
                        updatedTenantContract.building_name = building.buildingname;
                        updatedTenantContract.buildingid = building._id;
                    }

                    const projectname = projectnames.find(project => String(project._id) === String(property.projectnameid));
                    if (projectname) {
                        updatedTenantContract.project_name = projectname.projectName;
                        updatedTenantContract.projectnameid = projectname._id;
                    }

                    const community = communityData.find(community => String(community._id) === String(property.communityid));
                    if (community) {
                        updatedTenantContract.community_name = community.communityname;
                        updatedTenantContract.communityid = community._id;
                    }

                    const subtype = subtypeData.find(subtype => String(subtype._id) === String(property.subtypeid));
                    if (subtype) {
                        updatedTenantContract.subtype_name = subtype.subtypename;
                    }

                    const customerid = userData.find(customerid => String(customerid._id) === String(property?.customerid));
                    if (customerid) {
                        updatedTenantContract.property_owner_name = (customerid?.firstname) + (customerid?.lastname ? " " + customerid?.lastname : "") + (customerid?.email ? " | " + customerid?.email : "");
                        updatedTenantContract.property_owner_email = customerid?.email;
                        updatedTenantContract.property_owner_id = customerid?._id;
                    }
                }
            }
            if (customerid) {
                const customer = customers.find(customer => String(customer._id) === String(customerData.customerid));
                updatedTenantContract.owner_name = customer?.firstname + " " + customer?.lastname;
                updatedTenantContract.owner_email = customer?.email;
                updatedTenantContract.owner_nationality = customer?.passportno;
                updatedTenantContract.owner_passportidno = customer?.passportidno;
                updatedTenantContract.owner_mobilenumber = customer?.whatsappno;
            } else {
                const customer = customersEmails.find(customer => customer.email === customerData.email);
                updatedTenantContract.owner_name = guestname;
                updatedTenantContract.owner_passportidno = passportnumber;
                updatedTenantContract.owner_email = email;
                updatedTenantContract.owner_nationality = nationality;
                updatedTenantContract.owner_mobilenumber = mobilenumber;
                updatedTenantContract.customerid = customer?._id;
            }

            const employee = employeeData.find(employee => String(employee._id) === String(createdBy));
            if (employee) {
                updatedTenantContract.employee_email_createdBy = employee?.email;
            }
            const employeeUpdatedBy = employeeDataUpdatedBy.find(employee => String(employee._id) === String(updatedBy));
            if (employeeUpdatedBy) {
                updatedTenantContract.employee_email_updatedBy = employeeUpdatedBy?.email;
            }


            return updatedTenantContract;
        });

        const formattedDate = tenantContractAllData?.map(tenantContract => {
            // const formattedcontractstartdate = tenantContract.contractstartdate ? new Date(tenantContract.contractstartdate).toDateString() : ''
            // const formattedcontractstartdate = tenantContract.contractstartdate && tenantContract?.contractstartdate !== null ? String(tenantContract.contractstartdate)?.split('T') : ''
            // console.log(tenantContract.contractstartdate, 'tenantContract.contractstartdate')
            // console.log(formattedcontractstartdate[0], "formattedcontractstartdate[0]")
            // console.log(formattedcontractstartdate[1], "formattedcontractstartdate[1]")
            const formattedcontractstartdate = tenantContract.contractstartdate ? new Date(tenantContract.contractstartdate).toDateString() : '';
            const formattedcontractenddate = tenantContract.contractenddate ? new Date(tenantContract.contractenddate).toDateString() : ''
            const formattedcontractexecutiondate = tenantContract.contractexecutiondate ? new Date(tenantContract.contractexecutiondate).toDateString() : ''
            const formattedCreatedAt = tenantContract.createdAt ? new Date(tenantContract.createdAt).toDateString() : ''
            const formattedupdatedAt = tenantContract.updatedAt ? new Date(tenantContract.updatedAt).toDateString() : ''

            // const formattedcontractstartdate = tenantContract.contractstartdate ? moment(tenantContract.contractstartdate).tz('Asia/Dubai').format('DD MMM YYYY') : '';
            // const formattedcontractenddate = tenantContract.contractenddate ? moment(tenantContract.contractenddate).tz('Asia/Dubai').format('DD MMM YYYY') : '';
            // const formattedcontractexecutiondate = tenantContract.contractexecutiondate ? moment(tenantContract.contractexecutiondate).tz('Asia/Dubai').format('DD MMM YYYY') : '';
            // const formattedCreatedAt = tenantContract.createdAt ? moment(tenantContract.createdAt).tz('Asia/Dubai').format('DD MMM YYYY') : '';
            // const formattedupdatedAt = tenantContract.updatedAt ? moment(tenantContract.updatedAt).tz('Asia/Dubai').format('DD MMM YYYY') : '';

            const completed_data = tenantContract?.propertyid && tenantContract?.email && tenantContract?.customertype && tenantContract?.contractstartdate && tenantContract?.contractenddate && tenantContract?.rentalamount && tenantContract?.securitydepositamount && tenantContract?.noofchequeorinstallment && tenantContract?.contractexecutiondate && tenantContract?.ejari_certificate_doc && tenantContract?.tenancy_contract_doc && tenantContract?.addendum_doc && tenantContract?.key_receipt_doc && tenantContract?.chequeDetails?.length ? true : false
            return { ...tenantContract, contractstart_date: formattedcontractstartdate, Created_At: formattedCreatedAt, contractend_date: formattedcontractenddate, contractexecution_date: formattedcontractexecutiondate, updatedAt: formattedupdatedAt, createdAt: formattedCreatedAt, completed_data: completed_data }
        })

        const filteredtenancys = formattedDate.filter(tenancy => {
            return Object.values(tenancy).some(value => {
                if (typeof value === 'string' && value.toLowerCase().includes(params.toLowerCase())) {
                    return true;
                }
                return false;
            });
        });

        // console.log(req.query.email, "req.query.email")
        // const filteredBookings = formattedDate.filter(tenancy => {
        //     let match = true;

        //     if (req.query.email && tenancy.property_owner_email !== req.query.email) {
        //         match = false;
        //     }

        //     // console.log(match, "match")
        //     return match;
        // });
        // console.log(filteredtenancys, "filteredtenancys")
        res.json(filteredtenancys);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
})

const getTenantContractById = asyncHandler(async (req, res) => {
    const tenantContractById = await TenantContract.findById(req.params.id)
    if (!tenantContractById) {
        return res.status(400).json({ message: "No Tenant Contract found" })
    }

    if (tenantContractById?.customerid) {
        // console.log(tenantContractById?.customerid)
        try {
            const ownerResponse = await axios.get(`${process.env.OWN_SERVER}/users/${String(tenantContractById?.customerid)}`);
            const ownerData = ownerResponse.data;

            let propertyData;

            if (tenantContractById?.propertyid) {
                const propertyResponse = await axios.get(`${process.env.OWN_SERVER}/property/${String(tenantContractById?.propertyid)}`);
                propertyData = propertyResponse.data;
            }

            const result = {
                tenantContract: tenantContractById,
                owner: ownerData,
                property: propertyData
            };

            res.json(result);
        } catch (error) {
            res.status(500).json({ message: "Error retrieving owner data" });
        }
    } else {
        let propertyData;
        let ownerData;
        if (tenantContractById?.propertyid) {
            const propertyResponse = await axios.get(`${process.env.OWN_SERVER}/property/${String(tenantContractById?.propertyid)}`);
            propertyData = propertyResponse.data;
        }

        if (tenantContractById?.email) {
            const ownerResponse = await axios.get(`${process.env.OWN_SERVER}/users/api/customer/withoutdate?sort=descending&email=${tenantContractById?.email}&page=0&perPage=all`);
            ownerData = ownerResponse.data?.users;

            if (ownerData && ownerData.length > 0) {
                const ownerCustomerId = ownerData[0]._id;
                tenantContractById.customerid = ownerCustomerId;
                tenantContractById.customertype = "Existing Tenant";
            }
        }
        const result = {
            tenantContract: tenantContractById,
            owner: ownerData[0],
            property: propertyData
        };

        res.json(result);
    }
});

const getTenantContractProperty = asyncHandler(async (req, res) => {
    try {
        const TenantContractData = await TenantContract.find({
            $and: [
                { softdelete: { $ne: true } } // Filter out softdeleted bookings
            ],
            "$or": [
                req.query,
            ]
            // propertyid: req.query.propertyid
        })
        const propertyIds = TenantContractData.map(property => property.propertyid);
        const properties = await AddProperty.find({ _id: { $in: propertyIds } });

        const TenantContractWithProperty = TenantContractData.map(rent => {
            const availabilityObject = rent.toObject();
            const { _id, propertyid, customerid, guestname, passportnumber, customertype, nationality, mobilenumber, email, contractstartdate, contractenddate, createdBy, updatedBy, contractvalue, rentalamount, securitydepositamount, noofchequeorinstallment, commission, contractexecutiondate, passportpdf, key_receipt_doc, tenancy_contract_doc, contractupdation, ejari_certificate_doc, addendum_doc, chequeDetails } = availabilityObject;
            const updatedAvailability = { _id, propertyid, customerid, guestname, passportnumber, customertype, nationality, mobilenumber, email, contractstartdate, contractenddate, createdBy, updatedBy, contractvalue, rentalamount, securitydepositamount, noofchequeorinstallment, commission, contractexecutiondate, passportpdf, key_receipt_doc, tenancy_contract_doc, contractupdation, ejari_certificate_doc, addendum_doc, chequeDetails };
            if (propertyid) {
                const property = properties.find(property => String(property._id) === String(rent.propertyid));
                if (property) {
                    updatedAvailability.unitnumber = property.unitnumber;
                }

            }

            return updatedAvailability;
        });

        res.json(TenantContractWithProperty);

        // return res.status(200).json(TenantContractData)
    } catch (err) {
        res.status(400).json({
            err: `Error getting data: ${err.message}`
        })
    }
})

const getOwnerContract = asyncHandler(async (req, res) => {
    // console.log(req.query);
    try {
        const tenantContractById = await TenantContract.find({
            $and: [
                { softdelete: { $ne: true } } // Filter out softdeleted bookings
            ],
            $or: [req.query],
        });

        if (tenantContractById.length === 0) {
            return res.status(404).json({ message: "No contract found" });
        }

        const [tenantContract] = tenantContractById;
        let ownerData;
        let propertyData;

        if (tenantContract.customerid) {
            const ownerResponse = await axios.get(
                `${process.env.OWN_SERVER}/users/${String(tenantContract.customerid)}`
            );
            ownerData = ownerResponse.data;

            if (tenantContract.propertyid) {
                const propertyResponse = await axios.get(
                    `${process.env.OWN_SERVER}/property/${String(tenantContract.propertyid)}`
                );
                propertyData = propertyResponse.data;
            }
        } else if (tenantContract.email) {
            const ownerResponse = await axios.get(
                `${process.env.OWN_SERVER}/users/api/customer/withoutdate?sort=descending&email=${tenantContract.email}&page=0&perPage=all`
            );
            ownerData = ownerResponse.data?.users;

            if (ownerData && ownerData.length > 0) {
                const ownerCustomerId = ownerData[0]._id;
                tenantContract.customerid = ownerCustomerId;
                tenantContract.customertype = "Existing Tenant";
            }
            if (tenantContract.propertyid) {
                const propertyResponse = await axios.get(
                    `${process.env.OWN_SERVER}/property/${String(tenantContract.propertyid)}`
                );
                propertyData = propertyResponse.data;
            }
        }

        const result = {
            tenantContract,
            owner: ownerData,
            property: propertyData,
        };

        res.json(result);
    } catch (error) {
        // console.error("Error getting owner contract:", error);
        res.status(500).json({ message: "Error retrieving owner contract" });
    }
});

const createTenantContract = asyncHandler(async (req, res) => {
    // console.log(req.body);
    const { propertyid, customerid, guestname, passportnumber, customertype, nationality, mobilenumber, email, contractstartdate, contractenddate, createdBy, updatedBy, contractvalue, rentalamount, securitydepositamount, noofchequeorinstallment, commission, contractexecutiondate, passportpdf, key_receipt_doc, tenancy_contract_doc, contractupdation, ejari_certificate_doc, addendum_doc, chequeDetails, } = req.body
    // let duplicate = await TenantContract.findOne({ customerid }).lean().exec()
    // if (duplicate) {
    //     return res.status(409).json({ message: 'Duplicate Tenant Contract' })
    // }

    const contractenddateObject = new Date(contractstartdate);
    const contractstartdateObject = new Date(contractenddate);
    const oneDayBeforeCheckout = new Date(contractenddateObject.getTime() + (24 * 60 * 60 * 1000));
    const oneDayBeforeCheckIN = new Date(contractstartdateObject.getTime() - (24 * 60 * 60 * 1000));

    const existingTenantContract = await TenantContract.findOne({
        propertyid,
        $or: [
            {
                contractstartdate: {
                    $lt: contractenddate,
                },
                contractenddate: {
                    $gte: oneDayBeforeCheckout,
                },
            },
        ],
    });

    // If a duplicate TenantContract already exists, return an error response
    if (existingTenantContract) {
        // console.log(existingTenantContract)
        return res.status(409).json({ message: 'Duplicate Contract' });
    }

    let chequeDetailsParse

    if (chequeDetails) {
        chequeDetailsParse = JSON.parse(chequeDetails)
    }

    const tenantContractObject = { propertyid, customerid, guestname, passportnumber, customertype, nationality, mobilenumber, email, contractstartdate, contractenddate, createdBy, updatedBy, contractvalue, rentalamount, securitydepositamount, noofchequeorinstallment, commission, contractexecutiondate, passportpdf, key_receipt_doc, tenancy_contract_doc, contractupdation, ejari_certificate_doc, addendum_doc, chequeDetails: chequeDetailsParse, }
    const createTenantContract = await TenantContract.create(tenantContractObject)

    if (createTenantContract) {
        // if (createTenantContract?.propertyid) {
        //     const properties = await AddProperty.find({ _id: { $in: createTenantContract?.propertyid } });
        //     const property = properties.find(property => property._id.toHexString() === createTenantContract?.propertyid?.toHexString());
        //     const userData = await User.find({ _id: { $in: property?.customerid } });
        //     const user = userData.find(owner => owner._id.toHexString() === property?.customerid?.toHexString());
        //     const owner_email = user?.email
        //     let contentPara = `We would like to inform you that a new tenancy contract for your property, with the unit number "${property?.unitnumber}" has been added to your dashboard. Kindly take a moment to verify the status of your property's tenancy contract by accessing the provided link.`
        //     if (owner_email) {
        //         const owner_name = user?.firstname + " " + user?.lastname
        //         let contentHeading = `Hello ${owner_name},`
        //         const url = `${process.env.BASE_URL}view-tenantcontract/${createTenantContract?._id}`
        //         let property = true
        //         await sendEmail(owner_email, "Your Property Tenancy Contract Added Recently", url, property, contentHeading, contentPara)
        //     }
        // }
        res.status(200).json({ message: `New Tenant Contract created` })
    } else {
        res.status(400).json({ message: 'Invalid Tenant Contract received' })
    }
})

const updateTenantContract = asyncHandler(async (req, res) => {
    const { _id, propertyid, customerid, guestname, passportnumber, customertype, nationality, mobilenumber, email, contractstartdate, contractenddate, createdBy, updatedBy, contractvalue, rentalamount, securitydepositamount, noofchequeorinstallment, commission, contractexecutiondate, passportpdf, key_receipt_doc, tenancy_contract_doc, contractupdation, ejari_certificate_doc, addendum_doc, chequeDetails, } = req.body

    if (!_id) {
        return res.status(400).json({ message: "Id is requires" })
    }

    const tenantContractNames = await TenantContract.findById(_id).exec()

    if (!tenantContractNames) {
        res.status(400).json({ message: 'Tenant Contract not found' })
    }

    // const duplicate = await TenantContract.findOne({ customerid }).lean().exec()

    // if (duplicate?._id.toString() !== _id) {
    //     return res.status(409).json({ message: 'Duplicate customerid' })
    // }

    tenantContractNames.propertyid = propertyid
    tenantContractNames.customerid = customerid
    tenantContractNames.guestname = guestname
    tenantContractNames.passportnumber = passportnumber
    tenantContractNames.nationality = nationality
    tenantContractNames.mobilenumber = mobilenumber
    tenantContractNames.email = email
    tenantContractNames.contractstartdate = contractstartdate
    tenantContractNames.contractenddate = contractenddate
    tenantContractNames.contractexecutiondate = contractexecutiondate
    tenantContractNames.contractvalue = contractvalue
    // tenantContractNames.chequenumbe = chequenumbe
    // tenantContractNames.chequedate = chequedate
    // tenantContractNames.totalamount = totalamount
    // tenantContractNames.chequeimage = chequeimage
    tenantContractNames.customertype = customertype
    tenantContractNames.rentalamount = rentalamount
    tenantContractNames.securitydepositamount = securitydepositamount
    tenantContractNames.noofchequeorinstallment = noofchequeorinstallment
    tenantContractNames.commission = commission
    tenantContractNames.passportpdf = passportpdf
    tenantContractNames.ejari_certificate_doc = ejari_certificate_doc
    tenantContractNames.tenancy_contract_doc = tenancy_contract_doc
    tenantContractNames.addendum_doc = addendum_doc
    tenantContractNames.key_receipt_doc = key_receipt_doc
    tenantContractNames.contractupdation = contractupdation
    tenantContractNames.createdBy = createdBy
    tenantContractNames.updatedBy = updatedBy
    tenantContractNames.chequeDetails = JSON.parse(chequeDetails)

    const tenantContractN = await tenantContractNames.save()

    // if (tenantContractN?.propertyid) {
    //     const properties = await AddProperty.find({ _id: { $in: tenantContractN?.propertyid } });
    //     const property = properties.find(property => property._id.toHexString() === tenantContractN?.propertyid?.toHexString());
    //     const userData = await User.find({ _id: { $in: property?.customerid } });
    //     const user = userData.find(owner => owner._id.toHexString() === property?.customerid?.toHexString());
    //     const owner_email = user?.email
    //     let contentPara = `A recent update has been made to your property unit number "${property?.unitnumber}" tenancy contract. We kindly ask you to take a moment to verify the current status of your property's tenancy contract by accessing the provided link.`
    //     if (owner_email) {
    //         const owner_name = user?.firstname + " " + user?.lastname
    //         let contentHeading = `Hello ${owner_name},`
    //         const url = `${process.env.BASE_URL}view-tenantcontract/${tenantContractN?._id}`
    //         let property = true
    //         await sendEmail(owner_email, "Your Property Tenancy Contract Updated Recently", url, property, contentHeading, contentPara)
    //     }
    // }

    res.json({ message: `Tenant Contract ${tenantContractN?._id} updated` })
})

const updateTenantContractCancel = asyncHandler(async (req, res) => {
    // console.log(req.body, "req.body");
    const { _id, ...updateData } = req.body;

    const existingTenantContract = await TenantContract.findById(_id).exec();
    if (!existingTenantContract) {
        return res.status(400).json({ message: 'TenantContract not found' });
    }

    Object.assign(existingTenantContract, updateData);

    const updatedTenantContract = await existingTenantContract.save();

    return res.json({ message: `${updatedTenantContract._id} updated` });
});

const deleteTenant = asyncHandler(async (req, res) => {
    const { _id } = req.body
    if (!_id) {
        res.status(400).json({ message: 'Tenant ID requires' })
    }

    const tenant = await TenantContract.findById(_id).exec()

    if (!tenant) {
        return res.status(400).json({ message: "Tenant not found" })
    }

    const result = await tenant.deleteOne()

    const reply = `Tenant with id ${result._id} deleted`

    res.json(reply)
})

module.exports = {
    getAllTenantContract,
    getTenantContractById,
    getOwnerContract,
    createTenantContract,
    updateTenantContract,
    deleteTenant,
    getTenantContractProperty,
    updateTenantContractCancel,
    getTenantContractSearch
}