const maintenanceManagement = require('../models/maintenanceManagement')
const AddProperty = require('../models/addProperty')
const BuildingName = require('../models/buildingName')
const ProjectName = require('../models/projectName')
const CommunityName = require('../models/communityname')
const SubType = require('../models/subType');
const Employee = require('../models/employee')
const asyncHandler = require('express-async-handler')

const createmaintenanceManagement = asyncHandler(async (req, res) => {
    const { city, company, house_type, invoice_number, propertyid, qtn_number, trn_number, total_amount_aed, total_count, total_price, vat_amount_aed, qoutation_date, multiDescription, emirate, email, createdBy, updatedBy, converted_invoice, quotation_attachment, invoice_attachment, quotation_status } = req.body
    if (!propertyid) {
        return res.status(400).json({ message: 'property id field is required' })
    }

    const maintenanceManagementObject = { city, company, house_type, invoice_number, propertyid, qtn_number, trn_number, total_amount_aed, total_count, total_price, vat_amount_aed, qoutation_date, multiDescription, emirate, email, createdBy, updatedBy, converted_invoice, quotation_attachment, invoice_attachment, quotation_status }
    const createmaintenanceManagement = await maintenanceManagement.create(maintenanceManagementObject)

    if (createmaintenanceManagement) {
        return res.status(200).json(createmaintenanceManagement)
    } else {
        return res.status(400).json({ message: 'Invalid Maintenanc eManagement  data received' })
    }
})

const updatemaintenanceManagement = asyncHandler(async (req, res) => {
    const { _id, city, company, house_type, invoice_number, propertyid, qtn_number, trn_number, total_amount_aed, total_count, total_price, vat_amount_aed, qoutation_date, multiDescription, emirate, email, createdBy, updatedBy, converted_invoice, quotation_attachment, invoice_attachment, quotation_status } = req.body

    if (!_id || !propertyid) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    const updatemaintenanceManagement = await maintenanceManagement.findById(_id).exec()
    if (!updatemaintenanceManagement) {
        return res.status(400).json({ message: 'maintenanceManagement Name not found' })
    }

    updatemaintenanceManagement._id = _id
    updatemaintenanceManagement.city = city
    updatemaintenanceManagement.company = company
    updatemaintenanceManagement.house_type = house_type
    updatemaintenanceManagement.invoice_number = invoice_number
    updatemaintenanceManagement.propertyid = propertyid
    updatemaintenanceManagement.propertyid = propertyid
    updatemaintenanceManagement.qtn_number = qtn_number
    updatemaintenanceManagement.trn_number = trn_number
    updatemaintenanceManagement.total_amount_aed = total_amount_aed
    updatemaintenanceManagement.total_count = total_count
    updatemaintenanceManagement.total_price = total_price
    updatemaintenanceManagement.vat_amount_aed = vat_amount_aed
    updatemaintenanceManagement.qoutation_date = qoutation_date
    updatemaintenanceManagement.multiDescription = multiDescription
    updatemaintenanceManagement.emirate = emirate
    updatemaintenanceManagement.email = email
    updatemaintenanceManagement.createdBy = createdBy
    updatemaintenanceManagement.updatedBy = updatedBy
    updatemaintenanceManagement.converted_invoice = converted_invoice
    updatemaintenanceManagement.invoice_attachment = invoice_attachment
    updatemaintenanceManagement.quotation_attachment = quotation_attachment
    updatemaintenanceManagement.quotation_status = quotation_status

    await updatemaintenanceManagement.save()

    res.json({ message: `updated` })
})

const getAllmaintenanceManagement = asyncHandler(async (req, res) => {
    const allMaintenanceManagement = await maintenanceManagement.find({
        $and: [
            { softdelete: { $ne: true } } // Filter out softdeleted bookings
        ]
    }).sort({ _id: "descending" })
    if (!allMaintenanceManagement?.length) {
        return res.status(400).json({ message: "No Maintenance Management found" })
    }
    const propertyIds = allMaintenanceManagement.map(property => property?.propertyid);
    const employeeIds = allMaintenanceManagement.map(employee => employee?.createdBy);
    const employeeIdsUpdatedBy = allMaintenanceManagement.map(employee => employee?.updatedBy);

    try {
        const properties = await AddProperty.find({ _id: { $in: propertyIds } });
        const buildingIds = properties.map(property => property?.buildingid);
        const projectnameId = properties.map(property => property?.projectnameid);
        const communityId = properties.map(property => property?.communityid);
        const subtypeId = properties.map(property => property?.subtypeid);

        const buildings = await BuildingName.find({ _id: { $in: buildingIds } });
        const projectnames = await ProjectName.find({ _id: { $in: projectnameId } });
        const communityData = await CommunityName.find({ _id: { $in: communityId } });
        const subtypeData = await SubType.find({ _id: { $in: subtypeId } });
        const employeeData = await Employee.find({ _id: { $in: employeeIds } });
        const employeeDataUpdatedBy = await Employee.find({ _id: { $in: employeeIdsUpdatedBy } });

        const maintenanceManagementAllData = allMaintenanceManagement.map(customerData => {
            const tenantObject = customerData.toObject();
            const { _id, city, company, house_type, invoice_number, propertyid, qtn_number, trn_number, total_amount_aed, total_count, total_price, vat_amount_aed, qoutation_date, multiDescription, emirate, email, createdAt, updatedAt, createdBy, updatedBy, converted_invoice, quotation_attachment, invoice_attachment, quotation_status } = tenantObject;
            const updatedmaintenanceManagement = { _id, city, company, house_type, invoice_number, propertyid, qtn_number, trn_number, total_amount_aed, total_count, total_price, vat_amount_aed, qoutation_date, multiDescription, emirate, email, createdAt, updatedAt, createdBy, updatedBy, converted_invoice, quotation_attachment, invoice_attachment, quotation_status };
            if (propertyid) {
                const property = properties.find(property => String(property._id) === String(customerData.propertyid));
                if (property) {
                    updatedmaintenanceManagement.unitnumber = property.unitnumber;
                    updatedmaintenanceManagement.floor = property.floor;

                    const building = buildings.find(building => String(building._id) === String(property.buildingid));
                    if (building) {
                        updatedmaintenanceManagement.building_name = building.buildingname;
                        updatedmaintenanceManagement.buildingid = building._id;
                    }

                    const projectname = projectnames.find(project => String(project._id) === String(property.projectnameid));
                    if (projectname) {
                        updatedmaintenanceManagement.project_name = projectname.projectName;
                        updatedmaintenanceManagement.projectnameid = projectname._id;
                    }

                    const community = communityData.find(community => String(community._id) === String(property.communityid));
                    if (community) {
                        updatedmaintenanceManagement.community_name = community.communityname;
                        updatedmaintenanceManagement.communityid = community._id;
                    }

                    const subtype = subtypeData.find(subtype => String(subtype._id) === String(property.subtypeid));
                    if (subtype) {
                        updatedmaintenanceManagement.subtype_name = subtype.subtypename;
                    }
                }
            }
            const employee = employeeData.find(employee => String(employee._id) === String(customerData?.createdBy));
            if (employee) {
                updatedmaintenanceManagement.employee_email_createdBy = employee?.email;
            }
            const employeeUpdatedBy = employeeDataUpdatedBy.find(employee => String(employee._id) === String(customerData?.updatedBy));
            if (employeeUpdatedBy) {
                updatedmaintenanceManagement.employee_email_updatedBy = employeeUpdatedBy?.email;
            }
            return updatedmaintenanceManagement;
        });

        res.json(maintenanceManagementAllData);
    } catch (error) {
        // console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
})

const getmaintenanceManagementById = asyncHandler(async (req, res) => {
    const maintenanceManagementById = await maintenanceManagement.findById(req.params.id)
    if (!maintenanceManagementById) {
        return res.status(400).json({ message: "No maintenanceManagement Name found" })
    }
    res.json(maintenanceManagementById)
})

const getSearchedMaintenanceManagements = asyncHandler(async (req, res) => {
    try {
        const allMaintenanceManagement = await maintenanceManagement.find({
            $and: [
                { softdelete: { $ne: true } }
            ],
            "$or": [
                req.query,
            ]
        })
        if (!allMaintenanceManagement?.length) {
            return res.status(400).json({ message: "No Maintenance Management found" })
        }
        const propertyIds = allMaintenanceManagement.map(property => property?.propertyid);
        const employeeIds = allMaintenanceManagement.map(employee => employee?.createdBy);
        const employeeIdsUpdatedBy = allMaintenanceManagement.map(employee => employee?.updatedBy);


        const properties = await AddProperty.find({ _id: { $in: propertyIds } });
        const buildingIds = properties.map(property => property?.buildingid);
        const projectnameId = properties.map(property => property?.projectnameid);
        const communityId = properties.map(property => property?.communityid);
        const subtypeId = properties.map(property => property?.subtypeid);

        const buildings = await BuildingName.find({ _id: { $in: buildingIds } });
        const projectnames = await ProjectName.find({ _id: { $in: projectnameId } });
        const communityData = await CommunityName.find({ _id: { $in: communityId } });
        const subtypeData = await SubType.find({ _id: { $in: subtypeId } });
        const employeeData = await Employee.find({ _id: { $in: employeeIds } });
        const employeeDataUpdatedBy = await Employee.find({ _id: { $in: employeeIdsUpdatedBy } });

        const maintenanceManagementAllData = allMaintenanceManagement.map(customerData => {
            const tenantObject = customerData.toObject();
            const { _id, city, company, house_type, invoice_number, propertyid, qtn_number, trn_number, total_amount_aed, total_count, total_price, vat_amount_aed, qoutation_date, multiDescription, emirate, email, createdAt, updatedAt, createdBy, updatedBy, converted_invoice, quotation_attachment, invoice_attachment, quotation_status } = tenantObject;
            const updatedmaintenanceManagement = { _id, city, company, house_type, invoice_number, propertyid, qtn_number, trn_number, total_amount_aed, total_count, total_price, vat_amount_aed, qoutation_date, multiDescription, emirate, email, createdAt, updatedAt, createdBy, updatedBy, converted_invoice, quotation_attachment, invoice_attachment, quotation_status };
            if (propertyid) {
                const property = properties.find(property => String(property._id) === String(customerData.propertyid));
                if (property) {
                    updatedmaintenanceManagement.unitnumber = property.unitnumber;
                    updatedmaintenanceManagement.floor = property.floor;

                    const building = buildings.find(building => String(building._id) === String(property.buildingid));
                    if (building) {
                        updatedmaintenanceManagement.building_name = building.buildingname;
                        updatedmaintenanceManagement.buildingid = building._id;
                    }

                    const projectname = projectnames.find(project => String(project._id) === String(property.projectnameid));
                    if (projectname) {
                        updatedmaintenanceManagement.project_name = projectname.projectName;
                        updatedmaintenanceManagement.projectnameid = projectname._id;
                    }

                    const community = communityData.find(community => String(community._id) === String(property.communityid));
                    if (community) {
                        updatedmaintenanceManagement.community_name = community.communityname;
                        updatedmaintenanceManagement.communityid = community._id;
                    }

                    const subtype = subtypeData.find(subtype => String(subtype._id) === String(property.subtypeid));
                    if (subtype) {
                        updatedmaintenanceManagement.subtype_name = subtype.subtypename;
                    }
                }
            }
            const employee = employeeData.find(employee => String(employee._id) === String(customerData?.createdBy));
            if (employee) {
                updatedmaintenanceManagement.employee_email_createdBy = employee?.email;
            }
            const employeeUpdatedBy = employeeDataUpdatedBy.find(employee => String(employee._id) === String(customerData?.updatedBy));
            if (employeeUpdatedBy) {
                updatedmaintenanceManagement.employee_email_updatedBy = employeeUpdatedBy?.email;
            }
            return updatedmaintenanceManagement;
        });

        res.json(maintenanceManagementAllData);
    } catch (err) {
        res.status(400).json({
            err: `Error getting data: ${err.message}`
        })
    }
})

module.exports = {
    createmaintenanceManagement,
    updatemaintenanceManagement,
    getmaintenanceManagementById,
    getAllmaintenanceManagement,
    getSearchedMaintenanceManagements
}