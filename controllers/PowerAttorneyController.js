const PowerAttorney = require('../models/PowerAttorney')
const asyncHandler = require('express-async-handler')
const User = require('../models/User')
const Employee = require('../models/employee')

const getAllPowerAttorney = asyncHandler(async (req, res) => {
    const allPowerAttorney = await PowerAttorney.find({
        $and: [
            { softdelete: { $ne: true } }
        ]
    }).sort({ _id: "descending" })
    if (!allPowerAttorney?.length) {
        return res.status(400).json({ message: "No Power of Attorney found" })
    }
    const customerIds = allPowerAttorney.map(customer => customer?.customer_id).filter(id => id);
    const employeeIds = allPowerAttorney.map(employee => employee.createdBy);
    const employeeIdsUpdatedBy = allPowerAttorney.map(employee => employee.updatedBy);

    try {
        const customers = await User.find({ _id: { $in: customerIds } });
        const employeeData = await Employee.find({ _id: { $in: employeeIds } });
        const employeeDataUpdatedBy = await Employee.find({ _id: { $in: employeeIdsUpdatedBy } });


        const allPowerAttorneyAllData = allPowerAttorney.map(PowerAttorney => {
            const tenantObject = PowerAttorney.toObject();
            const { _id, customer_id, poa_taker_name, poa_language, date_of_issue, expiry_date, date_of_revalidation, revalidation_expiry_date, type_of_poa, specific_reason, poa_status, nominated, buying, selling, gifting, renting, management, visa, code_power_no, code_power_branch, no_poa_with_us, poa_done, court_fees, service_fees, updated_in_cloud, softdelete, createdBy, updatedBy, attachment_doc, total_no_customer, other_customer, createdAt, updatedAt } = tenantObject;
            const updatedallPowerAttorney = { _id, customer_id, poa_taker_name, poa_language, date_of_issue, expiry_date, date_of_revalidation, revalidation_expiry_date, type_of_poa, specific_reason, poa_status, nominated, buying, selling, gifting, renting, management, visa, code_power_no, code_power_branch, no_poa_with_us, poa_done, court_fees, service_fees, updated_in_cloud, softdelete, createdBy, updatedBy, attachment_doc, total_no_customer, other_customer, createdAt, updatedAt };
            if (customer_id) {
                const customerid = customers.find(customerid => String(customerid._id) === String(customer_id));
                updatedallPowerAttorney.customer_name = (customerid?.firstname) + (customerid?.lastname ? " " + customerid?.lastname : "");
                updatedallPowerAttorney.customer_email = customerid?.email;
                updatedallPowerAttorney.customer_passportnumber = customerid?.passportidno;
                updatedallPowerAttorney.customer_nationality = customerid?.passportno;
                updatedallPowerAttorney.customer_mobilenumber = customerid?.whatsappno;
            }

            const employee = employeeData.find(employee => String(employee._id) === String(createdBy));
            if (employee) {
                updatedallPowerAttorney.employee_email_createdBy = employee?.email;
            }
            const employeeUpdatedBy = employeeDataUpdatedBy.find(employee => String(employee._id) === String(updatedBy));
            if (employeeUpdatedBy) {
                updatedallPowerAttorney.employee_email_updatedBy = employeeUpdatedBy?.email;
            }
            return updatedallPowerAttorney;
        });

        res.json(allPowerAttorneyAllData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
})

const getPowerAttorneyById = asyncHandler(async (req, res) => {
    const PowerAttorneyById = await PowerAttorney.findById(req.params.id)
    if (!PowerAttorneyById) {
        return res.status(400).json({ message: "No Power of Attorney found" })
    }

    const UserData = await User.findById(PowerAttorneyById.customer_id);
    const updatedPowerAttorneyById = {
        ...PowerAttorneyById.toObject(),
        customer_name: UserData?.firstname + " " + UserData?.lastname,
        customer_email: UserData?.email,
        customer_passportnumber: UserData?.passportidno,
        customer_nationality: UserData?.passportno,
        customer_mobilenumber: UserData?.whatsappno,
        customer_passportpdf: UserData?.passportpdf,
    };

    res.json(updatedPowerAttorneyById)
})

const createPowerAttorney = asyncHandler(async (req, res) => {
    const { customer_id, poa_taker_name, poa_language, date_of_issue, expiry_date, date_of_revalidation, revalidation_expiry_date, type_of_poa, specific_reason, poa_status, nominated, buying, selling, gifting, renting, management, visa, code_power_no, code_power_branch, no_poa_with_us, poa_done, court_fees, service_fees, updated_in_cloud, softdelete, createdBy, updatedBy, attachment_doc, total_no_customer, other_customer } = req.body
    // if (!PowerAttorney) {
    //     return res.status(400).json({ message: 'All fields are required' })
    // }

    // let duplicate = await PowerAttorney.findOne({ PowerAttorney }).lean().exec()

    // if (duplicate) {
    //     return res.status(409).json({ message: "Duplicate Power of Attorney" })
    // }

    const PowerAttorneyObject = { customer_id, poa_taker_name, poa_language, date_of_issue, expiry_date, date_of_revalidation, revalidation_expiry_date, type_of_poa, specific_reason, poa_status, nominated, buying, selling, gifting, renting, management, visa, code_power_no, code_power_branch, no_poa_with_us, poa_done, court_fees, service_fees, updated_in_cloud, softdelete, createdBy, updatedBy, attachment_doc, total_no_customer, other_customer }
    const createPowerAttorney = await PowerAttorney.create(PowerAttorneyObject)

    if (createPowerAttorney) {
        return res.status(200).json({ message: `New Power of Attorney created` })
    } else {
        return res.status(400).json({ message: 'Invalid Power of Attorney data received' })
    }
})

const updatePowerAttorney = asyncHandler(async (req, res) => {
    const { _id, customer_id, poa_taker_name, poa_language, date_of_issue, expiry_date, date_of_revalidation, revalidation_expiry_date, type_of_poa, specific_reason, poa_status, nominated, buying, selling, gifting, renting, management, visa, code_power_no, code_power_branch, no_poa_with_us, poa_done, court_fees, service_fees, updated_in_cloud, softdelete, createdBy, updatedBy, attachment_doc, total_no_customer, other_customer } = req.body

    if (!_id) {
        return res.status(400).json({ message: '_id is required' })
    }

    const updatePowerAttorney = await PowerAttorney.findById(_id).exec()
    if (!updatePowerAttorney) {
        return res.status(400).json({ message: 'Power of Attorney not found' })
    }

    // const duplicate = await PowerAttorney.findOne({ PowerAttorney }).lean().exec()
    // if (duplicate && duplicate?._id.toString() !== _id) {
    //     return res.status(400).json({ message: 'Duplicate PowerAttorney Name' })
    // }

    updatePowerAttorney.customer_id = customer_id
    updatePowerAttorney.poa_taker_name = poa_taker_name
    updatePowerAttorney.poa_language = poa_language
    updatePowerAttorney.date_of_issue = date_of_issue
    updatePowerAttorney.expiry_date = expiry_date
    updatePowerAttorney.date_of_revalidation = date_of_revalidation
    updatePowerAttorney.revalidation_expiry_date = revalidation_expiry_date
    updatePowerAttorney.type_of_poa = type_of_poa
    updatePowerAttorney.specific_reason = specific_reason
    updatePowerAttorney.poa_status = poa_status
    updatePowerAttorney.nominated = nominated
    updatePowerAttorney.buying = buying
    updatePowerAttorney.selling = selling
    updatePowerAttorney.gifting = gifting
    updatePowerAttorney.renting = renting
    updatePowerAttorney.management = management
    updatePowerAttorney.visa = visa
    updatePowerAttorney.code_power_no = code_power_no
    updatePowerAttorney.code_power_branch = code_power_branch
    updatePowerAttorney.no_poa_with_us = no_poa_with_us
    updatePowerAttorney.poa_done = poa_done
    updatePowerAttorney.court_fees = court_fees
    updatePowerAttorney.service_fees = service_fees
    updatePowerAttorney.attachment_doc = attachment_doc
    updatePowerAttorney.updated_in_cloud = updated_in_cloud
    updatePowerAttorney.softdelete = softdelete
    updatePowerAttorney.total_no_customer = total_no_customer
    updatePowerAttorney.other_customer = other_customer
    updatePowerAttorney.createdBy = createdBy
    updatePowerAttorney.updatedBy = updatedBy

    await updatePowerAttorney.save()

    res.json({ message: `Power of Attorney updated` })
})

const updatePowerAttorneySoftDelete = asyncHandler(async (req, res) => {
    const { _id, ...updateData } = req.body;

    const existingPowerAttorney = await PowerAttorney.findById(_id).exec();
    if (!existingPowerAttorney) {
        return res.status(400).json({ message: 'Power of Attorney not found' });
    }

    Object.assign(existingPowerAttorney, updateData);

    const updatedPowerAttorney = await existingPowerAttorney.save();

    return res.json({ message: `${updatedPowerAttorney._id} updated` });
});

const deletePowerAttorney = asyncHandler(async (req, res) => {
    const { _id } = req.body

    if (!_id) {
        return res.status(400).json({ message: "Id is required" })
    }

    const deletedPowerAttorney = await PowerAttorney.findById(_id).exec()

    if (!deletedPowerAttorney) {
        return res.status(400).json({ message: 'Power of Attorney Name not found' })
    }

    const result = await deletedPowerAttorney.deleteOne()
    const reply = `Power of Attorney with Id ${result?._id} deleted`

    res.json(reply)
})

module.exports = {
    getAllPowerAttorney,
    getPowerAttorneyById,
    createPowerAttorney,
    updatePowerAttorney,
    deletePowerAttorney,
    updatePowerAttorneySoftDelete
}

//deploying on dev-rare that's why changing in this