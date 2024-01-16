const SaleRegister = require('../models/SaleRegister')
const asyncHandler = require('express-async-handler')
const User = require('../models/User')
const AddProperty = require('../models/addProperty')
const BuildingName = require('../models/buildingName')
const ProjectName = require('../models/projectName')
const CommunityName = require('../models/communityname')
const SubType = require('../models/subType');
const Employee = require('../models/employee')

const getAllSaleRegister = asyncHandler(async (req, res) => {
    const allSaleRegister = await SaleRegister.find({
        $and: [
            { softdelete: { $ne: true } }
        ]
    }).sort({ _id: "descending" })
    if (!allSaleRegister?.length) {
        return res.status(400).json({ message: "No Sale Register found" })
    }
    const buyerIds = allSaleRegister.map(buyer => buyer?.buyer_id).filter(id => id);
    const propertyIds = allSaleRegister.map(property => property?.propertyid).filter(id => id);
    const employeeIds = allSaleRegister.map(employee => employee.createdBy);
    const employeeIdsUpdatedBy = allSaleRegister.map(employee => employee.updatedBy);

    try {
        const buyers = await User.find({ _id: { $in: buyerIds } });
        const properties = await AddProperty.find({ _id: { $in: propertyIds } });
        const buildingIds = properties.map(property => property?.buildingid).filter(id => id);
        const projectnameId = properties.map(property => property?.projectnameid).filter(id => id);
        const communityId = properties.map(property => property?.communityid).filter(id => id);
        const subtypeId = properties.map(property => property?.subtypeid).filter(id => id);

        const buildings = await BuildingName.find({ _id: { $in: buildingIds } });
        const projectnames = await ProjectName.find({ _id: { $in: projectnameId } });
        const communityData = await CommunityName.find({ _id: { $in: communityId } });
        const subtypeData = await SubType.find({ _id: { $in: subtypeId } });
        const employeeData = await Employee.find({ _id: { $in: employeeIds } });
        const employeeDataUpdatedBy = await Employee.find({ _id: { $in: employeeIdsUpdatedBy } });


        const allSaleRegisterAllData = allSaleRegister.map(saleregister => {
            const tenantObject = saleregister.toObject();
            const { _id, propertyid, property_type, unitnumber, communityname, projectname, buildingname, floor, sold_for, noc_charges, trustee_fee_amount, trustee_buyer, trustee_seller, trustee_both, transfer_fee_amount, transfer_buyer, transfer_seller, transfer_both, commission_amount, vat_on_commission, buyer_name, buyer_inhouse_agent_name, buyer_outside_agent_name, transaction_type, exoected_transfer_date, createdBy, updatedBy, property_new, buyer_new, buyer_type, buyer_id, check_option_cash, check_option_mortage, noccharges_both, noccharges_buyer, noccharges_seller, contract_B_attachment, title_deed_fee, seller_id, seller_new, seller_type, contract_A_attachment, sales_contract_attachment, notes, createdAt, updatedAt } = tenantObject;
            const updatedallSaleRegister = { _id, propertyid, property_type, unitnumber, communityname, projectname, buildingname, floor, sold_for, noc_charges, trustee_fee_amount, trustee_buyer, trustee_seller, trustee_both, transfer_fee_amount, transfer_buyer, transfer_seller, transfer_both, commission_amount, vat_on_commission, buyer_name, buyer_inhouse_agent_name, buyer_outside_agent_name, transaction_type, exoected_transfer_date, createdBy, updatedBy, property_new, buyer_new, buyer_type, buyer_id, check_option_cash, check_option_mortage, noccharges_both, noccharges_buyer, noccharges_seller, contract_B_attachment, title_deed_fee, seller_id, seller_new, seller_type, contract_A_attachment, sales_contract_attachment, notes, createdAt, updatedAt };
            if (propertyid) {
                const property = properties.find(property => String(property._id) === String(saleregister.propertyid));
                if (property) {
                    updatedallSaleRegister.unitnumber = property.unitnumber;
                    updatedallSaleRegister.floor = property.floor;

                    const building = buildings.find(building => String(building._id) === String(property.buildingid));
                    if (building) {
                        updatedallSaleRegister.buildingname = building.buildingname;
                        updatedallSaleRegister.buildingid = building._id;
                    }

                    const projectname = projectnames.find(project => String(project._id) === String(property.projectnameid));
                    if (projectname) {
                        updatedallSaleRegister.projectname = projectname.projectName;
                        updatedallSaleRegister.projectnameid = projectname._id;
                    }

                    const community = communityData.find(community => String(community._id) === String(property.communityid));
                    if (community) {
                        updatedallSaleRegister.communityname = community.communityname;
                        updatedallSaleRegister.communityid = community._id;
                    }

                    const subtype = subtypeData.find(subtype => String(subtype._id) === String(property.subtypeid));
                    if (subtype) {
                        updatedallSaleRegister.subtype_name = subtype.subtypename;
                    }
                }
            }
            if (buyer_id) {
                const customerid = buyers.find(customerid => String(customerid._id) === String(buyer_id));
                updatedallSaleRegister.buyer_name = (customerid?.firstname) + (customerid?.lastname ? " " + customerid?.lastname : "");
                updatedallSaleRegister.buyer_email = customerid?.email;
                updatedallSaleRegister.buyer_passportnumber = customerid?.passportidno;
                updatedallSaleRegister.buyer_nationality = customerid?.passportno;
                updatedallSaleRegister.buyer_mobilenumber = customerid?.whatsappno;
            }

            const employee = employeeData.find(employee => String(employee._id) === String(createdBy));
            if (employee) {
                updatedallSaleRegister.employee_email_createdBy = employee?.email;
            }
            const employeeUpdatedBy = employeeDataUpdatedBy.find(employee => String(employee._id) === String(updatedBy));
            if (employeeUpdatedBy) {
                updatedallSaleRegister.employee_email_updatedBy = employeeUpdatedBy?.email;
            }
            return updatedallSaleRegister;
        });

        res.json(allSaleRegisterAllData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
})

const getSaleRegisterById = asyncHandler(async (req, res) => {
    const id = req.params.id
    const SaleRegisterById = await SaleRegister.findOne({ _id : id}).populate('seller_id')
   // console.log("SaleRegisterById",SaleRegisterById)
    if (!SaleRegisterById) {
        return res.status(400).json({ message: "No Sale Register found" })
    }

    const UserData = await User.findOne({ buyer_id : SaleRegisterById.buyer_id });

    if(UserData == ''){
        return res.status(400).json({ message: "No Buyers data found" })
    }

    const updatedSaleRegisterById = {
        ...SaleRegisterById.toObject(),
        buyer_name: UserData?.firstname + " " + UserData?.lastname,
        buyer_email: UserData?.email,
        buyer_passportnumber: UserData?.passportidno,
        buyer_nationality: UserData?.passportno,
        buyer_mobilenumber: UserData?.whatsappno,
        buyer_passportpdf: UserData?.passportpdf,
    };

    res.json(updatedSaleRegisterById)
})

const createSaleRegister = asyncHandler(async (req, res) => {
    const { propertyid, property_type, unitnumber, communityname, projectname, buildingname, floor, sold_for, noc_charges, trustee_fee_amount, trustee_buyer, trustee_seller, trustee_both, transfer_fee_amount, transfer_buyer, transfer_seller, transfer_both, commission_amount, vat_on_commission, buyer_name, buyer_inhouse_agent_name, buyer_outside_agent_name, transaction_type, exoected_transfer_date, createdBy, updatedBy, property_new, buyer_new, buyer_type, buyer_id, check_option_cash, check_option_mortage, noccharges_both, noccharges_buyer, noccharges_seller, contract_B_attachment, title_deed_fee, seller_id, seller_new, seller_type, contract_A_attachment, sales_contract_attachment, notes } = req.body
    // if (!SaleRegister) {
    //     return res.status(400).json({ message: 'All fields are required' })
    // }

    // let duplicate = await SaleRegister.findOne({ SaleRegister }).lean().exec()

    // if (duplicate) {
    //     return res.status(409).json({ message: "Duplicate Sale Register" })
    // }

    const SaleRegisterObject = { propertyid, property_type, unitnumber, communityname, projectname, buildingname, floor, sold_for, noc_charges, trustee_fee_amount, trustee_buyer, trustee_seller, trustee_both, transfer_fee_amount, transfer_buyer, transfer_seller, transfer_both, commission_amount, vat_on_commission, buyer_name, buyer_inhouse_agent_name, buyer_outside_agent_name, transaction_type, exoected_transfer_date, createdBy, updatedBy, property_new, buyer_new, buyer_type, buyer_id, check_option_cash, check_option_mortage, noccharges_both, noccharges_buyer, noccharges_seller, contract_B_attachment, title_deed_fee, seller_id, seller_new, seller_type, contract_A_attachment, sales_contract_attachment, notes }
    const createSaleRegister = await SaleRegister.create(SaleRegisterObject)

    if (createSaleRegister) {
        return res.status(200).json({ message: `New Sale Register created` })
    } else {
        return res.status(400).json({ message: 'Invalid Sale Register data received' })
    }
})

const updateSaleRegister = asyncHandler(async (req, res) => {
    const { _id, propertyid, property_type, unitnumber, communityname, projectname, buildingname, floor, sold_for, noc_charges, trustee_fee_amount, trustee_buyer, trustee_seller, trustee_both, transfer_fee_amount, transfer_buyer, transfer_seller, transfer_both, commission_amount, vat_on_commission, buyer_name, buyer_inhouse_agent_name, buyer_outside_agent_name, transaction_type, exoected_transfer_date, createdBy, updatedBy, property_new, buyer_new, buyer_type, buyer_id, check_option_cash, check_option_mortage, noccharges_both, noccharges_buyer, noccharges_seller, contract_B_attachment, title_deed_fee, seller_id, seller_new, seller_type, contract_A_attachment, sales_contract_attachment, notes } = req.body

    if (!_id) {
        return res.status(400).json({ message: '_id is required' })
    }

    const updateSaleRegister = await SaleRegister.findById(_id).exec()
    if (!updateSaleRegister) {
        return res.status(400).json({ message: 'Sale Register not found' })
    }

    // const duplicate = await SaleRegister.findOne({ SaleRegister }).lean().exec()
    // if (duplicate && duplicate?._id.toString() !== _id) {
    //     return res.status(400).json({ message: 'Duplicate SaleRegister Name' })
    // }

    updateSaleRegister.property_type = property_type
    updateSaleRegister.propertyid = propertyid
    updateSaleRegister.unitnumber = unitnumber
    updateSaleRegister.communityname = communityname
    updateSaleRegister.projectname = projectname
    updateSaleRegister.buildingname = buildingname
    updateSaleRegister.floor = floor
    updateSaleRegister.sold_for = sold_for
    updateSaleRegister.noc_charges = noc_charges
    updateSaleRegister.trustee_fee_amount = trustee_fee_amount
    updateSaleRegister.trustee_buyer = trustee_buyer
    updateSaleRegister.trustee_seller = trustee_seller
    updateSaleRegister.trustee_both = trustee_both
    updateSaleRegister.transfer_fee_amount = transfer_fee_amount
    updateSaleRegister.transfer_buyer = transfer_buyer
    updateSaleRegister.transfer_seller = transfer_seller
    updateSaleRegister.transfer_both = transfer_both
    updateSaleRegister.commission_amount = commission_amount
    updateSaleRegister.vat_on_commission = vat_on_commission
    updateSaleRegister.buyer_name = buyer_name
    updateSaleRegister.buyer_inhouse_agent_name = buyer_inhouse_agent_name
    updateSaleRegister.buyer_outside_agent_name = buyer_outside_agent_name
    updateSaleRegister.transaction_type = transaction_type
    updateSaleRegister.exoected_transfer_date = exoected_transfer_date
    updateSaleRegister.createdBy = createdBy
    updateSaleRegister.updatedBy = updatedBy
    updateSaleRegister.property_new = property_new
    updateSaleRegister.buyer_new = buyer_new
    updateSaleRegister.buyer_type = buyer_type
    updateSaleRegister.buyer_id = buyer_id
    updateSaleRegister.check_option_cash = check_option_cash
    updateSaleRegister.check_option_mortage = check_option_mortage
    updateSaleRegister.noccharges_buyer = noccharges_buyer
    updateSaleRegister.noccharges_seller = noccharges_seller
    updateSaleRegister.noccharges_both = noccharges_both
    updateSaleRegister.contract_B_attachment = contract_B_attachment
    updateSaleRegister.title_deed_fee = title_deed_fee
    updateSaleRegister.seller_id = seller_id
    updateSaleRegister.seller_new = seller_new
    updateSaleRegister.seller_type = seller_type
    updateSaleRegister.sales_contract_attachment = sales_contract_attachment
    updateSaleRegister.contract_A_attachment = contract_A_attachment
    updateSaleRegister.notes = notes

    await updateSaleRegister.save()

    res.json({ message: `Sale Register updated` })
})

const updateSaleRegisterSoftDelete = asyncHandler(async (req, res) => {
    // console.log(req.body, "req.body");
    const { _id, ...updateData } = req.body;

    const existingSaleRegister = await SaleRegister.findById(_id).exec();
    if (!existingSaleRegister) {
        return res.status(400).json({ message: 'SaleRegister not found' });
    }

    Object.assign(existingSaleRegister, updateData);

    const updatedSaleRegister = await existingSaleRegister.save();

    return res.json({ message: `${updatedSaleRegister._id} updated` });
});

const deleteSaleRegister = asyncHandler(async (req, res) => {
    const { _id } = req.body

    if (!_id) {
        return res.status(400).json({ message: "Id is required" })
    }

    const deletedSaleRegister = await SaleRegister.findById(_id).exec()

    if (!deletedSaleRegister) {
        return res.status(400).json({ message: 'SaleRegister Name not found' })
    }

    const result = await deletedSaleRegister.deleteOne()
    const reply = `Sale Register with Id ${result?._id} deleted`

    res.json(reply)
})

module.exports = {
    getAllSaleRegister,
    getSaleRegisterById,
    createSaleRegister,
    updateSaleRegister,
    deleteSaleRegister,
    updateSaleRegisterSoftDelete
}

//deploying on dev-rare that's why changing in this