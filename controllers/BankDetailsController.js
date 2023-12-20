const BankDetails = require('../models/BankDetails')
const asyncHandler = require('express-async-handler')
const User = require('../models/User')
const Employee = require('../models/employee')

const getAllBankDetails = asyncHandler(async (req, res) => {
    const allBankDetails = await BankDetails.find({
        $and: [
            { softdelete: { $ne: true } }
        ]
    }).sort({ _id: "descending" })
    if (!allBankDetails?.length) {
        return res.status(400).json({ message: "No Bank Details found" })
    }
    const customerIds = allBankDetails.map(customer => customer?.customer_id).filter(id => id);
    const employeeIds = allBankDetails.map(employee => employee.createdBy);
    const employeeIdsUpdatedBy = allBankDetails.map(employee => employee.updatedBy);

    try {
        const customers = await User.find({ _id: { $in: customerIds } });
        const employeeData = await Employee.find({ _id: { $in: employeeIds } });
        const employeeDataUpdatedBy = await Employee.find({ _id: { $in: employeeIdsUpdatedBy } });


        const allBankDetailsAllData = allBankDetails.map(BankDetails => {
            const tenantObject = BankDetails.toObject();
            const { _id, customer_id, total_no_accounts, all_accounts, softdelete, createdBy, updatedBy, createdAt, updatedAt } = tenantObject;
            const updatedallBankDetails = { _id, customer_id, total_no_accounts, all_accounts, softdelete, createdBy, updatedBy, createdAt, updatedAt };
            if (customer_id) {
                const customerid = customers.find(customerid => String(customerid._id) === String(customer_id));
                updatedallBankDetails.customer_name = (customerid?.firstname) + (customerid?.lastname ? " " + customerid?.lastname : "");
                updatedallBankDetails.customer_email = customerid?.email;
                updatedallBankDetails.customer_passportnumber = customerid?.passportidno;
                updatedallBankDetails.customer_nationality = customerid?.passportno;
                updatedallBankDetails.customer_mobilenumber = customerid?.whatsappno;
            }

            const employee = employeeData.find(employee => String(employee._id) === String(createdBy));
            if (employee) {
                updatedallBankDetails.employee_email_createdBy = employee?.email;
            }
            const employeeUpdatedBy = employeeDataUpdatedBy.find(employee => String(employee._id) === String(updatedBy));
            if (employeeUpdatedBy) {
                updatedallBankDetails.employee_email_updatedBy = employeeUpdatedBy?.email;
            }
            return updatedallBankDetails;
        });

        res.json(allBankDetailsAllData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
})

const getBankDetailsById = asyncHandler(async (req, res) => {
    const BankDetailsById = await BankDetails.findById(req.params.id)
    if (!BankDetailsById) {
        return res.status(400).json({ message: "No Bank Details found" })
    }

    const UserData = await User.findById(BankDetailsById.customer_id);
    const updatedBankDetailsById = {
        ...BankDetailsById.toObject(),
        customer_name: UserData?.firstname + " " + UserData?.lastname,
        customer_email: UserData?.email,
        customer_passportnumber: UserData?.passportidno,
        customer_nationality: UserData?.passportno,
        customer_mobilenumber: UserData?.whatsappno,
        customer_passportpdf: UserData?.passportpdf,
    };

    res.json(updatedBankDetailsById)
})

const getBankDetailscustomer = asyncHandler(async (req, res) => {
    const bankDetailsById = await BankDetails.findOne({
        $and: [
            { softdelete: { $ne: true } },
            { $or: [req.query] },
        ],
    });

    if (!bankDetailsById) {
        return res.status(400).json({ message: "No Bank Details found" });
    }

    const userData = await User.findById(bankDetailsById.customer_id);

    if (!userData) {
        return res.status(400).json({ message: "User not found for the given Bank Details" });
    }

    const updatedBankDetailsById = {
        ...bankDetailsById.toObject(),
        customer_name: `${userData.firstname} ${userData.lastname}`,
        customer_email: userData.email,
        customer_passportnumber: userData.passportidno,
        customer_nationality: userData.passportno,
        customer_mobilenumber: userData.whatsappno,
        customer_passportpdf: userData.passportpdf,
    };

    res.json(updatedBankDetailsById);
});

const createBankDetails = asyncHandler(async (req, res) => {
    const { customer_id, total_no_accounts, all_accounts, softdelete, createdBy, updatedBy } = req.body
    // if (!BankDetails) {
    //     return res.status(400).json({ message: 'All fields are required' })
    // }

    // let duplicate = await BankDetails.findOne({ BankDetails }).lean().exec()

    // if (duplicate) {
    //     return res.status(409).json({ message: "Duplicate Bank Details" })
    // }

    const BankDetailsObject = { customer_id, total_no_accounts, all_accounts, softdelete, createdBy, updatedBy }
    const createBankDetails = await BankDetails.create(BankDetailsObject)

    if (createBankDetails) {
        return res.status(200).json({ message: `New Bank Details created` })
    } else {
        return res.status(400).json({ message: 'Invalid Bank Details data received' })
    }
})

const updateBankDetails = asyncHandler(async (req, res) => {
    const { _id, customer_id, total_no_accounts, all_accounts, softdelete, createdBy, updatedBy } = req.body

    if (!_id) {
        return res.status(400).json({ message: '_id is required' })
    }

    const updateBankDetails = await BankDetails.findById(_id).exec()
    if (!updateBankDetails) {
        return res.status(400).json({ message: 'Bank Details not found' })
    }

    // const duplicate = await BankDetails.findOne({ BankDetails }).lean().exec()
    // if (duplicate && duplicate?._id.toString() !== _id) {
    //     return res.status(400).json({ message: 'Duplicate BankDetails Name' })
    // }

    updateBankDetails.customer_id = customer_id
    updateBankDetails.total_no_accounts = total_no_accounts
    updateBankDetails.all_accounts = all_accounts
    updateBankDetails.softdelete = softdelete
    updateBankDetails.createdBy = createdBy
    updateBankDetails.updatedBy = updatedBy

    await updateBankDetails.save()

    res.json({ message: `Bank Details updated` })
})

const updateBankDetailsSoftDelete = asyncHandler(async (req, res) => {
    const { _id, ...updateData } = req.body;

    const existingBankDetails = await BankDetails.findById(_id).exec();
    if (!existingBankDetails) {
        return res.status(400).json({ message: 'Bank Details not found' });
    }

    Object.assign(existingBankDetails, updateData);

    const updatedBankDetails = await existingBankDetails.save();

    return res.json({ message: `${updatedBankDetails._id} updated` });
});

const deleteBankDetails = asyncHandler(async (req, res) => {
    const { _id } = req.body

    if (!_id) {
        return res.status(400).json({ message: "Id is required" })
    }

    const deletedBankDetails = await BankDetails.findById(_id).exec()

    if (!deletedBankDetails) {
        return res.status(400).json({ message: 'Bank Details Name not found' })
    }

    const result = await deletedBankDetails.deleteOne()
    const reply = `Bank Details with Id ${result?._id} deleted`

    res.json(reply)
})

module.exports = {
    getAllBankDetails,
    getBankDetailsById,
    createBankDetails,
    updateBankDetails,
    deleteBankDetails,
    updateBankDetailsSoftDelete,
    getBankDetailscustomer
}