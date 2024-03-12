const SaleRegister = require('../models/SaleRegister')
const asyncHandler = require('express-async-handler')
const mongoose = require('mongoose')
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
    const sellerIds = allSaleRegister.map(seller => seller?.seller_id).filter(id => id);
    const propertyIds = allSaleRegister.map(property => property?.propertyid).filter(id => id);
    const employeeIds = allSaleRegister.map(employee => employee.createdBy);
    const employeeIdsUpdatedBy = allSaleRegister.map(employee => employee.updatedBy);

    try {
        const buyers = await User.find({ _id: { $in: buyerIds } });
        const seller = await User.find({ _id: { $in: sellerIds } });
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
            const { _id, propertyid, property_type, unitnumber, communityname,buyerids, projectname, buildingname, floor, sold_for, noc_charges, trustee_fee_amount, trustee_buyer, trustee_seller, trustee_both, transfer_fee_amount, transfer_buyer, transfer_seller, transfer_both, commission_amount, vat_on_commission, buyer_name, buyer_inhouse_agent_name, buyer_outside_agent_name, transaction_type, exoected_transfer_date, createdBy, updatedBy, property_new, buyer_new, buyer_type, buyer_id, check_option_cash, check_option_mortage, noccharges_both, noccharges_buyer, noccharges_seller, contract_B_attachment, title_deed_fee, seller_id,    seller_name , seller_email , seller_passportnumber , seller_nationality , seller_mobilenumber ,buyer_passportnumber, seller_new, seller_type, contract_A_attachment,buyer_mobilenumber, sales_contract_attachment, notes, createdAt, updatedAt } = tenantObject;
            const updatedallSaleRegister = { _id, propertyid, property_type,buyerids, unitnumber, communityname, projectname, buildingname, floor, sold_for, noc_charges, trustee_fee_amount, trustee_buyer, trustee_seller, trustee_both, transfer_fee_amount, transfer_buyer, transfer_seller, transfer_both, commission_amount, vat_on_commission, buyer_name, buyer_inhouse_agent_name, buyer_outside_agent_name, transaction_type, exoected_transfer_date, createdBy, updatedBy, property_new, buyer_new, buyer_type, buyer_id, check_option_cash, check_option_mortage, noccharges_both, noccharges_buyer, noccharges_seller, contract_B_attachment, title_deed_fee, seller_id,   seller_name , seller_email , seller_passportnumber , seller_nationality , seller_mobilenumber ,buyer_passportnumber, seller_new, seller_type,buyer_mobilenumber, contract_A_attachment, sales_contract_attachment, notes, createdAt, updatedAt };
         
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
                const customerid = buyers.find(customerid => String(customerid._id) === String(buyer_id)) || "";
                updateSaleRegister.buyerids = customerid._id
                updatedallSaleRegister.buyer_name = (customerid?.firstname) + (customerid?.lastname ? " " + customerid?.lastname : "");
                updatedallSaleRegister.buyer_email = customerid?.email;
                updatedallSaleRegister.buyer_passportnumber = customerid?.passportidno;
                updatedallSaleRegister.buyer_nationality = customerid?.passportno;
                updatedallSaleRegister.buyer_mobilenumber = customerid?.whatsappno;
            }else{
              console.log("checking.....")
            }
            
            if(seller_id){
                const customerid = seller.find(customerid => String(customerid._id) === String(seller_id));
                updatedallSaleRegister.seller_name = (customerid?.firstname) + (customerid?.lastname ? " " + customerid?.lastname : "");
                updatedallSaleRegister.seller_email = customerid?.email;
                updatedallSaleRegister.seller_passportnumber = customerid?.passportidno;
                updatedallSaleRegister.seller_nationality = customerid?.passportno;
                updatedallSaleRegister.seller_mobilenumber = customerid?.whatsappno;
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
    const {
       propertyid, property_type, unitnumber, communityname, projectname, buildingname, floor, 
       sold_for, noc_charges, trustee_fee_amount, trustee_buyer, trustee_seller, trustee_both, 
       transfer_fee_amount, transfer_buyer, transfer_seller, transfer_both, commission_amount, vat_on_commission, 
       buyer_name, buyer_inhouse_agent_name, buyer_outside_agent_name, transaction_type, exoected_transfer_date, 
       createdBy, updatedBy, property_new, buyer_new, buyer_type, 
       buyer_id ,
       check_option_cash, 
       check_option_mortage, noccharges_both, noccharges_buyer, noccharges_seller, 
       title_deed_fee, seller_id, seller_new, seller_type, 
        notes } = req.body

       const {contract_A_attachment , contract_B_attachment , sales_contract_attachment } = req.files;

       
    // if (!SaleRegister) {
    //     return res.status(400).json({ message: 'All fields are required' })
    // }

    // let duplicate = await SaleRegister.findOne({ SaleRegister }).lean().exec()

    // if (duplicate) {
    //     return res.status(409).json({ message: "Duplicate Sale Register" })
    // }

    const SaleRegisterObject = { 
      propertyid, property_type, unitnumber, communityname, projectname, buildingname, floor, sold_for, noc_charges, 
      trustee_fee_amount, trustee_buyer, trustee_seller, trustee_both, transfer_fee_amount, transfer_buyer, transfer_seller, 
      transfer_both, commission_amount, vat_on_commission, buyer_name, buyer_inhouse_agent_name, buyer_outside_agent_name, 
      transaction_type, exoected_transfer_date, createdBy, updatedBy, property_new, buyer_new, buyer_type, buyer_id : buyer_id || "000000000000000000000000" ,  
      check_option_cash, check_option_mortage, noccharges_both, noccharges_buyer, noccharges_seller, 
      title_deed_fee, seller_id, notes,
      seller_new, seller_type, 
      contract_A_attachment : contract_A_attachment ? req.files.contract_A_attachment.map((data) =>"/"+data.path.replace(/\\/g, '/')).pop() : "" , 
      contract_B_attachment : contract_B_attachment ? req.files.contract_B_attachment.map((data) => "/"+data.path.replace(/\\/g, '/')).pop() : "" , 
      sales_contract_attachment : sales_contract_attachment ? req.files.sales_contract_attachment.map((data) => "/"+data.path.replace(/\\/g, '/')).pop() : ""
     }

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

const SearchSaleRegisterByQuery = async (req, res, next) => {
    try {
        const { unitnumber, seller_email, buyer_email, communityid, projectnameid, buildingid } = req.query;
        console.log(req.query)
        // Constructing match conditions
        const matchConditions = {
            'softdelete': false
        };

        if (unitnumber) matchConditions['propertyid.unitnumber'] = unitnumber;
        if (seller_email) matchConditions['seller_id.email'] = seller_email;
        if (buyer_email) matchConditions['buyer_id.email'] = buyer_email;
        if (communityid) matchConditions['propertyid.communityid'] = new mongoose.Types.ObjectId(communityid);
        if (projectnameid) matchConditions['propertyid.projectnameid'] = new mongoose.Types.ObjectId(projectnameid);
        if (buildingid) matchConditions['propertyid.buildingid'] = new mongoose.Types.ObjectId(buildingid);

        
        
        const data = [
           
            { '$lookup': { 'from': 'addproperties', 'localField': 'propertyid', 'foreignField': '_id', 'as': 'propertyid' } },
            { '$lookup': { 'from': 'users', 'localField': 'buyer_id', 'foreignField': '_id', 'as': 'buyer_id' } },
            { '$lookup': { 'from': 'users', 'localField': 'seller_id', 'foreignField': '_id', 'as': 'seller_id' } },
            { '$unwind': { 'path': '$propertyid', 'preserveNullAndEmptyArrays': true } },
            { '$unwind': { 'path': '$buyer_id', 'preserveNullAndEmptyArrays': true } },
            { '$unwind': { 'path': '$seller_id', 'preserveNullAndEmptyArrays': true } },
            { '$match': matchConditions },
            {
                '$project': {
                    'unitnumber': '$propertyid.unitnumber',
                    'communityid': '$propertyid.communityid',
                    'buildingid': '$propertyid.buildingid',
                    'projectnameid': '$propertyid.projectnameid',
                    'seller_name': { '$concat': ['$seller_id.firstname', ' ', '$seller_id.lastname'] },
                    'seller_email': '$seller_id.email',
                    'seller_mobilenumber': '$seller_id.contactno',
                    'seller_nationality': '$seller_id.countryofresidence',
                    'seller_passportnumber': '$seller_id.passportidno',
                    'buyer_name': { '$concat': ['$buyer_id.firstname', ' ', '$buyer_id.lastname'] },
                    'buyer_email': '$buyer_id.email',
                    'buyer_mobilenumber': '$buyer_id.contactno',
                    'communityname': 1,
                    'projectname': 1,
                    'buildingname': 1,
                    'floor': 1,
                    'sold_for': 1,
                    'noc_charges': 1,
                    'trustee_fee_amount': 1,
                    'commission_amount': 1,
                    'title_deed_fee': 1,
                    'buyer_inhouse_agent_name': 1,
                    'buyer_outside_agent_name': 1,
                    'createdAt': 1
                }
            },
            { '$sort': { 'createdAt': -1 } }
        ];

        const search_sale_register = await SaleRegister.aggregate(data);
        res.status(200).json({
            total: search_sale_register.length,
            message: "Search results",
            status: true,
            data: search_sale_register
        });
    } catch (err) {
        console.error("Error:", err);
        res.status(500).json({
            message: "No Search results",
            status: false
        });
    }
};


const AllCounts = async (req, res, next) => {
    try {
        const allproperty = await SaleRegister.find({ softdelete: false });

        
        const validSoldValues = allproperty
            .filter(data => data.sold_for !== null && data.sold_for !== undefined)
            .map(data => {
                const { sold_for } = data;
                const sold = Number(sold_for);
                return sold;
            });
            const sold_for = validSoldValues.reduce((acc, data) => acc + data, 0);

            const property = await SaleRegister.find( {$and :[{propertyid : { $ne: null }} , {softdelete : false }] } ).count()
           

           const data = [
                {
                  '$match': {
                    'softdelete': false, 
                    '$and': [
                      {
                        'buyer_id': {
                          '$ne': null
                        }
                      }, {
                        'buyer_id': {
                          '$exists': true
                        }
                      }, {
                        'buyer_id': {
                          '$ne': ''
                        }
                      }
                    ]
                  }
                }, {
                  '$group': {
                    '_id': '$buyer_id', 
                    'buyername': {
                      '$first': '$buyer_name'
                    }
                  }
                }, {
                  '$count': 'totalBuyers'
                }
              ]
           const data1 =   [
                {
                  '$match': {
                    'softdelete': false, 
                    '$and': [
                      {
                        'seller_id': {
                          '$ne': null
                        }
                      }, {
                        'seller_id': {
                          '$exists': true
                        }
                      }, {
                        'seller_id': {
                          '$ne': ''
                        }
                      }
                    ]
                  }
                }, {
                  '$addFields': {
                    'seller_id_str': {
                      '$toString': '$seller_id'
                    }
                  }
                }, {
                  '$group': {
                    '_id': '$seller_id_str'
                  }
                }, {
                  '$count': 'totalSellers'
                }
              ]
          const buyer = await SaleRegister.aggregate(data)
            const seller = await SaleRegister.aggregate(data1)

        
        res.status(200).json({
            total: allproperty.length,
            message: "All Counts founds",
            status: true,
            data: { 
            sold_for , 
            property,
            buyer : buyer.map(data => data.totalBuyers).pop(),
            seller:seller.map(data => data.totalSellers).pop() 
            },
        });
    } catch (err) {
        console.log("=========>",err)
        res.status(200).json({
            message: "NO Counts founds",
            status: false,
        });
    }
};


module.exports = {
    getAllSaleRegister,
    getSaleRegisterById,
    createSaleRegister,
    updateSaleRegister,
    deleteSaleRegister,
    updateSaleRegisterSoftDelete,
    SearchSaleRegisterByQuery,
    AllCounts
}

//deploying on dev-rare that's why changing in this