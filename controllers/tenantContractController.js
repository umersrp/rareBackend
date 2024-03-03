const TenantContract = require('../models/tenantContract')
const asyncHandler = require('express-async-handler')
const User = require('../models/User')
const mongoose = require('mongoose')
// const { axios } = require('axios')
const axios = require('axios');
const AddProperty = require('../models/addProperty')
const BuildingName = require('../models/buildingName')
const ProjectName = require('../models/projectName')
const CommunityName = require('../models/communityname')
const SubType = require('../models/subType');
const Bookings = require('../models/booking');
const rentpurchase =require('../models/rentpurchase')
const Employee = require('../models/employee')
const sendEmail = require('../utils/sendEmail');
const moment = require('moment-timezone');
const {TenantDataOverview , TenantPropertyData} = require('../utils/overviewData')
const Alltenants = async (req,res,next) => {
  try{
    const data = [
      {
        '$lookup': {
          'from': 'addproperties', 
          'localField': 'propertyid', 
          'foreignField': '_id', 
          'as': 'propertyid'
        }
      }, 
      {
        '$unwind': {
          'path': '$propertyid', 
          'preserveNullAndEmptyArrays': true
        }
      }, 
      {
        '$project': {
          'propertyid': 1,
          "contractenddate"  :1,
          'softdelete'  :1
        }
      }, 
    ]

   
    
   const datas = await TenantContract.aggregate(data)

   if(!datas.length) {
    AddProperty.updateOne({_id : datas.map((data) => data.propertyid._id.toString()).pop()},{ $set : { status : "Pending" }},{new : true}).then(res => res)
  }
   const allproperties = datas.map((data) => data.propertyid._id)
   const Booking = await  Bookings.find({  propertyid : {$in : allproperties }}).sort({ createdAt : -1})

   datas.forEach(async(data) => {

   if(data !== undefined && data.propertyid._id != undefined){

    if(data.propertyid.status === "Occupied"){
      return;
    }

    if(data.propertyid.status === "Vacant"){
      return;
    }

    if(data.propertyid.status === "Contract_Occupied_Pending") {
    
  
      if(data.softdelete === false){
          if(new Date(data.contractenddate ) > new Date()){
           await AddProperty.updateOne({_id : data.propertyid._id.toString()},{ $set : { status : "Occupied" }},{new : true})
          }
      }
    }

    if(data.propertyid.status === "Pending") {
      if(data.softdelete === true){                 
        await  AddProperty.updateOne({_id :  data.propertyid._id.toString()},{ $set : { status : "Pending" }},{new : true})
      }
  
      if(data.softdelete === false){
          if(new Date(data.contractenddate ) > new Date()){
           await AddProperty.updateOne({_id : data.propertyid._id.toString()},{ $set : { status : "Occupied" }},{new : true})
          }else if(new Date(data.contractenddate ) < new Date()){
          await  AddProperty.updateOne({_id : data.propertyid._id.toString()},{ $set : { status : "Vacant" }},{new : true})
        }
      }
    }

    
      

       
   }


   })


   Booking.forEach((data) => {
    if(data !== undefined && data.propertyid._id != undefined ){
      AddProperty.updateOne({_id : data.propertyid._id.toString()},{ $set : { propertyType : "Short-term" }},{new : true}).then(res => res)
    }
    // else{
    //     RentPurchase.updateOne({porpertyid : data.propertyid.toString()},{ $set : { propertyType : "Long-term" }},{new : true}).then(res => res)
    // }
})

        
    } 
    catch (error) {
        console.error("==============><",error);
        // res.json({ message: "Server Error" });
    }
}



const getAllTenantContract = asyncHandler(async (req, res) => {
  const tenantContract = await TenantContract
  .find({ softdelete: {$ne : true} })
  .limit(10)
  .sort({ _id: -1 })
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
      Alltenants()
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
  try{

    const { 
      propertyid, customerid, guestname, passportnumber, customertype, 
      nationality, mobilenumber, email, contractstartdate, contractenddate, createdBy, updatedBy, 
      contractvalue, rentalamount, securitydepositamount, noofchequeorinstallment, commission, 
      contractexecutiondate,contractupdation,
      chequeDetails
  } = req.body
     
   
      const {
        key_receipt_doc,
        tenancy_contract_doc,  
        ejari_certificate_doc, 
        addendum_doc, 
        passportpdf,
        chequeDetailsImages
      } = req.files
     
      const contractenddateObject = new Date(contractstartdate);
      const contractstartdateObject = new Date(contractenddate);
      const oneDayBeforeCheckout = new Date(contractenddateObject.getTime() + (24 * 60 * 60 * 1000));
      const oneDayBeforeCheckIN = new Date(contractstartdateObject.getTime() - (24 * 60 * 60 * 1000));



  
     
  
      const existingTenantContract = await TenantContract.findOne({$and:[{ propertyid } , { $or : [ {
          contractstartdate: {
              $lt: contractenddate,
          },
          contractenddate: {
              $gte: oneDayBeforeCheckout,
          },
      },]  }]})


      console.log("existingTenantContract",existingTenantContract)
  
      // If a duplicate TenantContract already exists, return an error response
      if (existingTenantContract) {
          // console.log(existingTenantContract)
          return res.status(400).json({ message: 'Duplicate Contract for this Property' });
      }
  
      

      let chequeDetailsParse
  
      if (chequeDetails) {
          chequeDetailsParse = JSON.parse(chequeDetails)
        chequeDetailsImages?.map((x,i)=>{  return  chequeDetailsParse[i].chequeimage = x.path.replace(/\\/g, '/') })
       
      }
  
      const tenantContractObject =  { 
        propertyid, customerid, guestname, passportnumber, 
        customertype, nationality, mobilenumber, email, 
        contractstartdate : new Date(contractstartdate).toISOString(), 
        contractenddate : new Date(contractenddate).toISOString(), 
        contractexecutiondate : new Date(contractexecutiondate).toISOString(),
        createdBy, updatedBy, contractvalue, rentalamount, 
        securitydepositamount, noofchequeorinstallment, commission, passportpdf,  contractupdation,
        key_receipt_doc : key_receipt_doc ?  req.files.key_receipt_doc.map((data) => data.path.replace(/\\/g, '/')).pop() : null , 
        tenancy_contract_doc : tenancy_contract_doc ? req.files.tenancy_contract_doc.map((data) => data.path.replace(/\\/g, '/')).pop() : null ,
        ejari_certificate_doc : ejari_certificate_doc ? req.files.ejari_certificate_doc.map((data) => data.path.replace(/\\/g, '/')).pop() : null , 
        addendum_doc : addendum_doc ? req.files.addendum_doc.map((data) => data.path.replace(/\\/g, '/')).pop() : null ,
        passportpdf : passportpdf ? req.files.passportpdf.map((data) => data.path.replace(/\\/g, '/')).pop() : null ,
        chequeDetails: chequeDetailsParse 
      }

        
          if(email ){
           //const name = guestname?.split(' ')[0]
           await User.updateOne({ email : email  },{$set: { subType : "tenant" , type : "customer"}} , { new : true})     
       }
        if(customerid){
           await User.updateOne({ _id : customerid },{$set: { subType : "tenant" , type : "customer"}} , { new : true})
       }
          
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
         return res.status(200).json({ message: `New Tenant Contract created`,status:true })
      } else {
        return  res.status(400).json({ message: 'Invalid Tenant Contract received' , status : false })
      }
  }catch(err){
    console.log("===========>",err)
      res.status(500).json({ message : "No Tenant found" , status : false})
  }

})



const updateTenantContract = asyncHandler(async (req, res) => {
  // Destructure request body and files
  const { 
    _id, propertyid, customerid, guestname, 
    passportnumber, customertype, nationality, mobilenumber, 
    email, contractstartdate, contractenddate, createdBy, updatedBy, 
    contractvalue, rentalamount, securitydepositamount, noofchequeorinstallment, 
    commission, contractexecutiondate, passportpdf, 
    contractupdation, chequeDetails,
  } = req.body;

  const {
    key_receipt_doc,
    tenancy_contract_doc,  
    ejari_certificate_doc, 
    addendum_doc,
    chequeDetailsImages
  } = req.files;

  // Check if _id is provided
  if (!_id) {
      return res.status(400).json({ message: "Id is required" });
  }

  // Find the tenant contract by _id
  const tenantContract = await TenantContract.findById(_id).exec();
  if (!tenantContract) {
      return res.status(404).json({ message: 'Tenant Contract not found' });
  }

  // Parse chequeDetails if provided
  let chequeDetailsParse;
  if (chequeDetails) {
      try {
          chequeDetailsParse = JSON.parse(chequeDetails);
      } catch (error) {
          return res.status(400).json({ message: 'Invalid chequeDetails format' });
      }
  }

  // Map chequeDetailsImages to chequeDetailsParse if both are provided
  if (chequeDetailsParse && chequeDetailsImages) {
      chequeDetailsParse.forEach((chequeDetail, index) => {
          if (chequeDetail && chequeDetail.chequeimage && chequeDetailsImages[index]) {
              // Assign the path of the corresponding cheque image
              chequeDetail.chequeimage = chequeDetailsImages[index].path.replace(/\\/g, '/');
              console.log(chequeDetail.chequeimage,"#####",chequeDetailsImages[index].path.replace(/\\/g, '/'))
          }
      });
  }


  console.log("chequeDetailsParse",chequeDetailsParse)

  // Update tenant contract fields
  tenantContract.propertyid = propertyid;
  tenantContract.customerid = customerid;
  tenantContract.guestname = guestname;
  tenantContract.passportnumber = passportnumber;
  tenantContract.nationality = nationality;
  tenantContract.mobilenumber = mobilenumber;
  tenantContract.email = email;
  tenantContract.contractstartdate = new Date(contractstartdate).toISOString();
  tenantContract.contractenddate = new Date(contractenddate).toISOString();
  tenantContract.contractexecutiondate = new Date(contractexecutiondate).toISOString();
  tenantContract.contractvalue = contractvalue;
  tenantContract.customertype = customertype;
  tenantContract.rentalamount = rentalamount;
  tenantContract.securitydepositamount = securitydepositamount;
  tenantContract.noofchequeorinstallment = noofchequeorinstallment;
  tenantContract.commission = commission;
  tenantContract.passportpdf = passportpdf;
  tenantContract.ejari_certificate_doc = ejari_certificate_doc ? ejari_certificate_doc.map((data) => data.path.replace(/\\/g, '/')).pop() : tenantContract.ejari_certificate_doc;
  tenantContract.tenancy_contract_doc = tenancy_contract_doc ? tenancy_contract_doc.map((data) => data.path.replace(/\\/g, '/')).pop() : tenantContract.tenancy_contract_doc;
  tenantContract.addendum_doc = addendum_doc ? addendum_doc.map((data) => data.path.replace(/\\/g, '/')).pop() : tenantContract.addendum_doc;
  tenantContract.key_receipt_doc = key_receipt_doc ? key_receipt_doc.map((data) => data.path.replace(/\\/g, '/')).pop() : tenantContract.key_receipt_doc;
  tenantContract.contractupdation = contractupdation;
  tenantContract.createdBy = createdBy;
  tenantContract.updatedBy = updatedBy;
  tenantContract.chequeDetails = chequeDetailsParse || []; // Use parsed chequeDetailsParse or empty array if not provided

  // Save the updated tenant contract
  const updatedTenantContract = await tenantContract.save();

  res.json({ message: `Tenant Contract ${updatedTenantContract._id} updated` });
});


// const updateTenantContract = asyncHandler(async (req, res) => {
//   try {
//       const { 
//           _id, propertyid, customerid, guestname, 
//           passportnumber, customertype, nationality, mobilenumber, 
//           email, contractstartdate, contractenddate, createdBy, updatedBy, 
//           contractvalue, rentalamount, securitydepositamount, noofchequeorinstallment, 
//           commission, contractexecutiondate, passportpdf, 
//           contractupdation,  
//           chequeDetails 
//       } = req.body;

//       const {
//           key_receipt_doc,
//           tenancy_contract_doc,  
//           ejari_certificate_doc, 
//           addendum_doc,
//           chequeDetailsImages
//       } = req.files;

//       if (!_id) {
//           return res.status(400).json({ message: "Id is required" });
//       }

//       let tenantContract = await TenantContract.findById(_id);

//       if (!tenantContract) {
//           return res.status(400).json({ message: 'Tenant Contract not found' });
//       }


//       let chequeDetailsParse
  
//       if (chequeDetails) {
//           chequeDetailsParse = JSON.parse(chequeDetails)
//         chequeDetailsImages.map((x,i)=>{  return  chequeDetailsParse[i].chequeimage = x.path.replace(/\\/g, '/') })
       
//       }
  

//       // Update tenant contract fields
//       tenantContract = {
//           ...tenantContract.toObject(),
//           propertyid, customerid, guestname, passportnumber, nationality,
//           mobilenumber, email, contractstartdate: new Date(contractstartdate).toISOString(),
//           contractenddate: new Date(contractenddate).toISOString(), contractexecutiondate: new Date(contractexecutiondate).toISOString(),
//           createdBy, updatedBy, contractvalue, customertype, rentalamount,
//           securitydepositamount, noofchequeorinstallment, commission, passportpdf, contractupdation,
//           key_receipt_doc: key_receipt_doc ? key_receipt_doc.map(data => data.path.replace(/\\/g, '/')).pop() : tenantContract.key_receipt_doc,
//           tenancy_contract_doc: tenancy_contract_doc ? tenancy_contract_doc.map(data => data.path.replace(/\\/g, '/')).pop() : tenantContract.tenancy_contract_doc,
//           ejari_certificate_doc: ejari_certificate_doc ? ejari_certificate_doc.map(data => data.path.replace(/\\/g, '/')).pop() : tenantContract.ejari_certificate_doc,
//           addendum_doc: addendum_doc ? addendum_doc.map(data => data.path.replace(/\\/g, '/')).pop() : tenantContract.addendum_doc,
//           chequeDetails: 
//       };

//       // Save updated tenant contract
//       const updatedTenantContract = await TenantContract.findByIdAndUpdate(_id, tenantContract, { new: true });

//       if (updatedTenantContract) {
//           return res.status(200).json({ message: `Tenant Contract ${updatedTenantContract._id} updated`, status: true });
//       } else {
//           return res.status(400).json({ message: 'Invalid Tenant Contract received', status: false });
//       }
//   } catch (err) {
//       console.error(err);
//       res.status(500).json({ message: "Server Error", status: false });
//   }
// });




const updateTenantContractCancel = asyncHandler(async (req, res) => {
    // console.log(req.body, "req.body");
    const { id } = req.params;
    const { contractupdation } = req.query;
     const existingTenantContract = await TenantContract.findById(id).exec();
    
    if (!existingTenantContract) {
        return res.status(400).json({ message: 'TenantContract not found' });
    }
    
    if(contractupdation){
      await TenantContract.updateOne(
        {_id : id },
        {$set: { 
          contractupdation : "terminated"
         }},
        {new : true})
  
      return res.json({ message: `${id} contract terminated` });
    }
    
    await TenantContract.updateOne(
      {_id : id },
      {$set: { 
        softdelete : true,
        contractstartdate: new Date('0000-01-01T00:00:00.000Z'),
        contractenddate: new Date('0000-01-01T00:00:00.000Z')
       }},
      {new : true})

    return res.json({ message: `${id} updated` });
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


const createTenantReport = asyncHandler(async (req,res) => {
    const propertyid = req.params.propertyid;
    const fromdate =  new Date(req.query.contractstartdate)
    const toDate =  new Date (req.query.contractenddate)
    console.log(fromdate,"========>",toDate)
    try{
       const data = [
            {
              '$match': {
                'propertyid': new mongoose.Types.ObjectId(propertyid),
                'softdelete' : false,
                $or:[
                  {'contractenddate': { '$gte': toDate , '$lte' : fromdate }},
                  {'contractstartdate': { '$gte': fromdate,'$lte': toDate  }},
                  {'contractenddate': {'$lte': toDate , '$gte': fromdate }},
                  {
                    $and:[
                    {'contractstartdate': { '$gte': fromdate  }},
                    {'contractenddate': {'$lte': toDate }}
                  ]
                }
                ]
               
              } 
            }, {
              '$lookup': {
                'from': 'addproperties', 
                'localField': 'propertyid', 
                'foreignField': '_id', 
                'as': 'propertyid'
              }
            }, {
              '$unwind': {
                'path': '$propertyid', 
                'preserveNullAndEmptyArrays': true
              }
            }, {
              '$project': {
                '_id': 1, 
                'propertyid.projectname': 1, 
                'propertyid.buildingname': 1, 
                'propertyid.unitnumber': 1, 
                'propertyid.communityname': 1, 
                'propertyid.customername': 1, 
                'customerid': 1, 
                'customertype': 1, 
                'guestname': 1, 
                'passportnumber': 1, 
                'nationality': 1, 
                'mobilenumber': 1, 
                'contractstartdate': 1, 
                'contractenddate': 1, 
                'contractexecutiondate': 1, 
                'chequeDetails': 1, 
                'rentalamount': 1, 
                'noofchequeorinstallment': 1, 
                'softdelete': 1, 
                'createdBy': 1, 
                'propertycode': {
                  '$concat': [
                    'Rare/', {
                      '$reduce': {
                        'input': {
                          '$split': [
                            '$propertyid.communityname', ' '
                          ]
                        }, 
                        'initialValue': '', 
                        'in': {
                          '$concat': [
                            '$$value', {
                              '$substr': [
                                '$$this', 0, 1
                              ]
                            }
                          ]
                        }
                      }
                    }, '/', {
                      '$reduce': {
                        'input': {
                          '$split': [
                            '$propertyid.buildingname', ' '
                          ]
                        }, 
                        'initialValue': '', 
                        'in': {
                          '$concat': [
                            '$$value', '$$this'
                          ]
                        }
                      }
                    }, '/', '$propertyid.unitnumber'
                  ]
                }, 
                'tenantcontractno': {
                  '$concat': [
                    'Rare/', {
                      '$reduce': {
                        'input': {
                          '$split': [
                            '$propertyid.communityname', ' '
                          ]
                        }, 
                        'initialValue': '', 
                        'in': {
                          '$concat': [
                            '$$value', {
                              '$substr': [
                                '$$this', 0, 1
                              ]
                            }
                          ]
                        }
                      }
                    }, '/', {
                      '$reduce': {
                        'input': {
                          '$split': [
                            '$propertyid.buildingname', ' '
                          ]
                        }, 
                        'initialValue': '', 
                        'in': {
                          '$concat': [
                            '$$value', '$$this'
                          ]
                        }
                      }
                    }, '/', {
                      '$concat': [
                        '$propertyid.unitnumber', '-', {
                          '$toString': {
                            '$floor': {
                              '$multiply': [
                                100, {
                                  '$rand': {}
                                }
                              ]
                            }
                          }
                        }
                      ]
                    }
                  ]
                }
              }
            },{
                '$sort':{
                    'contractstartdate' : -1
                }
            }
          ]

      const reports =  await TenantContract.aggregate(data)

      res.status(200).json({
        message : "Tenant Reports Generated",
        status : true,
        data : reports
      })
    }catch(err){
        res.status(200).json({
            message : "No Tenant Reports Generated",
            status : false
          })
    }
})


const tenantSummaryReportByDates = async (req,res,next) => {
  const propertyid = req.params.propertyid;
  const fromdate =  new Date(req.query.contractstartdate)
  const toDate =  new Date (req.query.contractenddate)
try{


  const data = [
    {
      '$match': {
        'propertyid':new mongoose.Types.ObjectId(propertyid), 
        'softdelete' : false,
        $or:[
          {'contractstartdate': { '$gte': fromdate,'$lte': toDate  }},
          {'contractenddate': {'$lte': toDate , '$gte': fromdate }},
          {
            $and:[
            {'contractstartdate': { '$gte': fromdate  }},
            {'contractenddate': {'$lte': toDate }}
          ]
        }
        ]
      }
    }, {
      '$lookup': {
        'from': 'addproperties', 
        'localField': 'propertyid', 
        'foreignField': '_id', 
        'as': 'propertyid'
      }
    }, {
      '$unwind': {
        'path': '$propertyid', 
        'preserveNullAndEmptyArrays': true
      }
    }, {
      '$project': {
        'propertyid._id': 1, 
        'propertyid.communityname': 1, 
        'propertyid.buildingname': 1, 
        'propertyid.ownernamedeed': 1, 
        'propertyid.projectname': 1, 
        'propertyid.unitnumber': 1, 
        'tenantcontractno': 1, 
        'rentalamount': 1, 
        'contractstartdate': 1, 
        'contractenddate': 1, 
        'rentalamount': 1,
        'tenantcontractno': {
          '$concat': [
            'Rare/', {
              '$reduce': {
                'input': {
                  '$split': [
                    '$propertyid.communityname', ' '
                  ]
                }, 
                'initialValue': '', 
                'in': {
                  '$concat': [
                    '$$value', {
                      '$substr': [
                        '$$this', 0, 1
                      ]
                    }
                  ]
                }
              }
            }, '/', {
              '$reduce': {
                'input': {
                  '$split': [
                    '$propertyid.buildingname', ' '
                  ]
                }, 
                'initialValue': '', 
                'in': {
                  '$concat': [
                    '$$value', '$$this'
                  ]
                }
              }
            }, '/', {
              '$concat': [
                '$propertyid.unitnumber', '-', {
                  '$toString': {
                    '$floor': {
                      '$multiply': [
                        100, {
                          '$rand': {}
                        }
                      ]
                    }
                  }
                }
              ]
            }
          ]
        }
      }
    }, {
      '$sort': {
        'contractstartdate': -1
      }
    }
  ]
  
  const reports =  await TenantContract.aggregate(data)

  res.status(200).json({
    total : reports.length,
    message : "Tenant Reports Generated",
    status : true,
    data : reports
  })

}catch(err){
  res.status(200).json({
    message : "Tenant Reports Generated",
    status : true
  })
}
}

const tenantSummaryReport = async (req,res,next) => {
  const propertyid = req.params.propertyid;

try{
  const data = [
    {
      '$match': {
          'propertyid': new mongoose.Types.ObjectId(propertyid),
          'softdelete' : false
      }
    }, {
      '$lookup': {
        'from': 'addproperties', 
        'localField': 'propertyid', 
        'foreignField': '_id', 
        'as': 'propertyid'
      }
    }, {
      '$unwind': {
        'path': '$propertyid', 
        'preserveNullAndEmptyArrays': true
      }
    }, {
      '$project': {
        'propertyid._id': 1, 
        'propertyid.communityname': 1, 
        'propertyid.buildingname': 1, 
        'propertyid.ownernamedeed': 1, 
        'propertyid.projectname': 1, 
        'propertyid.unitnumber': 1, 
        'tenantcontractno': 1, 
        'rentalamount': 1, 
        'contractstartdate': 1, 
        'contractenddate': 1, 
        'rentalamount': 1,
        'tenantcontractno': {
          '$concat': [
            'Rare/', {
              '$reduce': {
                'input': {
                  '$split': [
                    '$propertyid.communityname', ' '
                  ]
                }, 
                'initialValue': '', 
                'in': {
                  '$concat': [
                    '$$value', {
                      '$substr': [
                        '$$this', 0, 1
                      ]
                    }
                  ]
                }
              }
            }, '/', {
              '$reduce': {
                'input': {
                  '$split': [
                    '$propertyid.buildingname', ' '
                  ]
                }, 
                'initialValue': '', 
                'in': {
                  '$concat': [
                    '$$value', '$$this'
                  ]
                }
              }
            }, '/', {
              '$concat': [
                '$propertyid.unitnumber', '-', {
                  '$toString': {
                    '$floor': {
                      '$multiply': [
                        100, {
                          '$rand': {}
                        }
                      ]
                    }
                  }
                }
              ]
            }
          ]
        }
      }
    }, {
      '$sort': {
        'contractstartdate': -1
      }
    }
  ]
  const reports =  await TenantContract.aggregate(data)

  res.status(200).json({
    total : reports.length,
    message : "Tenant Reports Generated",
    status : true,
    data : reports
  })

}catch(err){
  res.status(200).json({
    message : "Tenant Reports Generated",
    status : true
  })
}
}


const updateManys = async (req,res,next) => {
    try{
     const data =   [
            {
              '$lookup': {
                'from': 'addproperties', 
                'localField': 'propertyid', 
                'foreignField': '_id', 
                'as': 'propertyid'
              }
            }, {
              '$unwind': {
                'path': '$propertyid', 
                'preserveNullAndEmptyArrays': true
              }
            }, {
              '$project': {
                'propertyid': 1, 
                'tenantcontractno': {
                  '$concat': [
                    'Rare/', {
                      '$reduce': {
                        'input': {
                          '$split': [
                            '$propertyid.communityname', ' '
                          ]
                        }, 
                        'initialValue': '', 
                        'in': {
                          '$concat': [
                            '$$value', {
                              '$substr': [
                                '$$this', 0, 1
                              ]
                            }
                          ]
                        }
                      }
                    }, '/', {
                      '$reduce': {
                        'input': {
                          '$split': [
                            '$propertyid.buildingname', ' '
                          ]
                        }, 
                        'initialValue': '', 
                        'in': {
                          '$concat': [
                            '$$value', '$$this'
                          ]
                        }
                      }
                    }, '/', {
                      '$concat': [
                        '$propertyid.unitnumber', '-', {
                          '$toString': {
                            '$floor': {
                              '$multiply': [
                                100, {
                                  '$rand': {}
                                }
                              ]
                            }
                          }
                        }
                      ]
                    }
                  ]
                }
              }
            }
          ]

          const tenactContract = await TenantContract.aggregate(data);


         const done =  tenactContract.map(async(data) => {
            const { propertyid , tenantcontractno} = data
            await TenantContract.updateOne({propertyid : propertyid},{$set:{ propertyid: mongoose.Types.ObjectId(propertyid) }},{new : true})
          })

        
      
          res.status(200).json({
            message: 'TenantContract updated successfully now',
            status: true,
            data : done
          });

      
    }catch(err){
        console.log("tenactContract",err)
    }

}


const Tenant_Overview = async (req,res,next) => {
try{
  const data = [
    {
      '$match': {
        'status': 'Pending'
      }
    }, {
      '$project': {
        'unitnumber': 1, 
        'communityname': 1, 
        'projectname': 1, 
        'buildingname': 1, 
        'floor': 1, 
        'status': 1, 
        'customername' : 1,
        'propertyType': 1
      }
    }, {
      '$sort': {
        'createdAt': -1
      }
    }
  ]
  const tennatOverview = await TenantContract.find({softdelete: {$ne : true}});
  const tennatOverviews = await AddProperty.aggregate(data);
  const today = new Date();
  const alltenantsData = TenantDataOverview(today , tennatOverview)
  const tenantsPropertyData = TenantPropertyData(tennatOverviews)
  res.status(200).json({
    message : "Tenant Overview",
    status : true,
    data : {
      tenantData : alltenantsData,
      Propertydata : tenantsPropertyData
    }
  })

}catch(err){
  res.status(200).json({
    message : "No Tenant found",
    status : false
  })
}
}





module.exports = {
  Tenant_Overview,
    getAllTenantContract,
    getTenantContractById,
    getOwnerContract,
    createTenantContract,
    updateTenantContract,
    deleteTenant,
    getTenantContractProperty,
    updateTenantContractCancel,
    getTenantContractSearch,
    createTenantReport,
    tenantSummaryReport,
    tenantSummaryReportByDates,
    updateManys,
    Tenant_Overview
    // allTenantRequest
}