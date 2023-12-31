const Booking = require('../models/booking')
const asyncHandler = require('express-async-handler')
const mongoose = require('mongoose')
const AddProperty = require('../models/addProperty')
const BuildingName = require('../models/buildingName')
const ProjectName = require('../models/projectName')
const CommunityName = require('../models/communityname')
const SubType = require('../models/subType')
const User = require('../models/User')
const Employee = require('../models/employee')
const sendEmail = require('../utils/sendEmail')
const guestBooking = require('../utils/guestBooking')
const moment = require('moment-timezone');
const bookingCreateUpdateEmail = require('../utils/bookingCreateUpdateEmail')
const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const axios = require('axios');

const getAllBookingTest = asyncHandler(async (req, res) => {
    const allbooking = await Booking.find({
        $and: [
            { softdelete: { $ne: true } } // Filter out softdeleted bookings
        ]
    })
        .sort({ _id: "descending" })
    if (!allbooking?.length) {
        return res.status(400).json({ message: "No Booking found" })
    }

    const propertyIds = allbooking.map(property => property?.propertyid);
    // const customerIds = allbooking.map(customer => customer?.customerid);
    const employeeIds = allbooking.map(employee => employee.createdBy);
    const employeeIdsUpdatedBy = allbooking.map(employee => employee.updatedBy);

    try {
        const properties = await AddProperty.find({ _id: { $in: propertyIds } });
        const buildingIds = properties.map(property => property?.buildingid);
        const projectnameId = properties.map(property => property?.projectnameid);
        const communityId = properties.map(property => property?.communityid);
        const subtypeId = properties.map(property => property?.subtypeid);
        const customerId = properties.map(property => property?.customerid);

        const buildings = await BuildingName.find({ _id: { $in: buildingIds } });
        const projectnames = await ProjectName.find({ _id: { $in: projectnameId } });
        const communityData = await CommunityName.find({ _id: { $in: communityId } });
        const subtypeData = await SubType.find({ _id: { $in: subtypeId } });
        const userData = await User.find({ _id: { $in: customerId } });
        const employeeData = await Employee.find({ _id: { $in: employeeIds } });
        const employeeDataUpdatedBy = await Employee.find({ _id: { $in: employeeIdsUpdatedBy } });
        // const customerData = await User.find({ _id: { $in: customerIds } });


        const bookingWithAllData = allbooking.map(propertyData => {
            const propertyObject = propertyData.toObject();
            const { _id, bookingnumber, cancelled, propertyid, ownerid, guestname, checkintype, nationality, passportnumber, mobilenumber, email, noadults, nochildern, totaloccupants, confirmationcode, reservationdate, bookingagent, modepayment, checkindate, checkoutdate, nonight, tourismfee, securitydeposit, totalpayout, hostservicefee, totalcollectall, cleaningfee, totaladditionalfee, roomrentamount, guestservicefee, guestmanagementfee, vatperbookingrent, vatperservicefee, vatpercleaningfee, vatperguestmanagementfee, vatperhostmanagementfee, totalvatper, totalroomrent, hostmanagementfee, roomrenthostpayable, auditdiff, createdAt, guestservicepercent, createdBy, updatedAt, updatedBy, softdelete, dtcm_uploaded, passortid_collected, sign_verified, smartcode_provided, payment_collected, payment_received, other_passports, customertype } = propertyObject;
            const updatedBooking = { _id, bookingnumber, cancelled, propertyid, ownerid, guestname, checkintype, nationality, passportnumber, mobilenumber, email, noadults, nochildern, totaloccupants, confirmationcode, reservationdate, bookingagent, modepayment, checkindate, checkoutdate, nonight, tourismfee, securitydeposit, totalpayout, hostservicefee, totalcollectall, cleaningfee, totaladditionalfee, roomrentamount, guestservicefee, guestmanagementfee, vatperbookingrent, vatperservicefee, vatpercleaningfee, vatperguestmanagementfee, vatperhostmanagementfee, totalvatper, totalroomrent, hostmanagementfee, roomrenthostpayable, auditdiff, createdAt, guestservicepercent, createdBy, updatedAt, updatedBy, softdelete, dtcm_uploaded, passortid_collected, sign_verified, smartcode_provided, payment_collected, payment_received, other_passports, customertype };
            if (propertyid) {
                const property = properties.find(property => String(property._id) === String(propertyData.propertyid));
                if (property) {
                    updatedBooking.unitnumber = property.unitnumber;
                    updatedBooking.floor = property.floor;

                    const building = buildings.find(building => String(building._id) === String(property.buildingid));
                    if (building) {
                        updatedBooking.building_name = building.buildingname;
                        updatedBooking.buildingid = building._id;
                    }

                    const projectname = projectnames.find(project => String(project._id) === String(property.projectnameid));
                    if (projectname) {
                        updatedBooking.project_name = projectname.projectName;
                        updatedBooking.projectnameid = projectname._id;
                    }

                    const community = communityData.find(community => String(community._id) === String(property.communityid));
                    if (community) {
                        updatedBooking.community_name = community.communityname;
                        updatedBooking.communityid = community._id;
                    }

                    const subtype = subtypeData.find(subtype => String(subtype._id) === String(property.subtypeid));
                    if (subtype) {
                        updatedBooking.subtype_name = subtype.subtypename;
                    }

                    const user = userData.find(userData => String(userData._id) === String(property.customerid));
                    if (user) {
                        updatedBooking.owner_name = user?.firstname + " " + user?.lastname;
                        updatedBooking.customer_id = user?._id;
                    }

                }
            }

            // let customer_id;
            if (customertype === "New Customer") {
                console.log('New Customer')
                try {
                    const user = User.findOne({ email: email });
                    // console.log(user?._id, "user?._id")
                    if (user) {
                        console.log('user')
                        updatedBooking.customer_id = user?._id
                    }
                } catch (error) {
                    console.error(error);
                }
            }

            const employee = employeeData.find(employee => String(employee._id) === String(createdBy));
            if (employee) {
                updatedBooking.employee_email_createdBy = employee?.email;
            }
            const employeeUpdatedBy = employeeDataUpdatedBy.find(employee => String(employee._id) === String(updatedBy));
            if (employeeUpdatedBy) {
                updatedBooking.employee_email_updatedBy = employeeUpdatedBy?.email;
            }

            // if(customerData) {
            //     const user = customerData.find(user => String(user._id) === String(propertyData.customerid));
            //     if(user) {
            //         updatedBooking.guest_name = user?.firstname + " " + user?.lastname;
            //     }
            // }

            return updatedBooking;
        });

        const formattedDate = bookingWithAllData?.map(bookingDateSet => {
            const additionalDate = moment().tz('Asia/Dubai').add(1, 'day').format('DD MMM YYYY');
            // const formattedreservationdate = bookingDateSet.reservationdate ? new Date(bookingDateSet.checkindate).toDateString() : ''
            // const formattedreservationdate = bookingDateSet.reservationdate ? new Date(bookingDateSet.reservationdate).toISOString().split('T')[0] : '';
            const formattedreservationdate = bookingDateSet.reservationdate ? moment.tz(bookingDateSet.reservationdate, 'Asia/Karachi').format('DD MMM YYYY') : '';
            const formattedcheckindate = bookingDateSet.checkindate ? moment.tz(bookingDateSet.checkindate, 'Asia/Karachi').format('DD MMM YYYY') : ''
            const formattedcheckoutdate = bookingDateSet.checkoutdate ? moment.tz(bookingDateSet.checkoutdate, 'Asia/Karachi').format('DD MMM YYYY') : ''
            // const formattedCreatedAt = bookingDateSet.createdAt ? new Date(bookingDateSet.createdAt).toDateString() : ''
            // const formattedreservationdate = bookingDateSet.reservationdate ? moment(bookingDateSet.reservationdate).tz('Asia/Dubai').format('DD MMM YYYY') : '';
            // const formattedcheckindate = bookingDateSet.checkindate ? moment(bookingDateSet.checkindate).tz('Asia/Dubai').format('DD MMM YYYY') : '';
            // const formattedcheckoutdate = bookingDateSet.checkoutdate ? moment(bookingDateSet.checkoutdate).tz('Asia/Dubai').format('DD MMM YYYY') : '';
            // const formattedreservationdate = bookingDateSet.reservationdate ? moment(bookingDateSet.reservationdate).tz('Asia/Dubai').subtract(1, 'day').format('DD MMM YYYY') : '';
            // const formattedcheckindate = bookingDateSet.checkindate ? moment(bookingDateSet.checkindate).tz('Asia/Dubai').add(1, 'day').format('DD MMM YYYY') : '';
            // const formattedcheckoutdate = bookingDateSet.checkoutdate ? moment(bookingDateSet.checkoutdate).tz('Asia/Dubai').add(1, 'day').format('DD MMM YYYY') : '';
            // const formattedCreatedAt = bookingDateSet.createdAt ? moment(bookingDateSet.createdAt).tz('Asia/Dubai').format('DD MMM YYYY') : '';
            // const formattedupdatedAt = bookingDateSet.updatedAt ? moment(bookingDateSet.updatedAt).tz('Asia/Dubai').format('DD MMM YYYY') : '';
            // const formattedreservationdate = bookingDateSet.reservationdate ? moment.tz(bookingDateSet.reservationdate, 'Asia/Dubai').format('DD MMM YYYY') : '';
            // const formattedcheckindate = bookingDateSet.checkindate ? moment.tz(bookingDateSet.checkindate, 'Asia/Dubai').format('DD MMM YYYY') : '';
            // const formattedcheckoutdate = bookingDateSet.checkoutdate ? moment.tz(bookingDateSet.checkoutdate, 'Asia/Dubai').format('DD MMM YYYY') : '';
            const formattedCreatedAt = bookingDateSet.createdAt ? moment.tz(bookingDateSet.createdAt, 'Asia/Dubai').format('DD MMM YYYY') : '';
            const formattedupdatedAt = bookingDateSet.updatedAt ? moment.tz(bookingDateSet.updatedAt, 'Asia/Dubai').format('DD MMM YYYY') : '';
            // const bookingDateSet_age = bookingDateSet.datebirth ? calculateAge(bookingDateSet.datebirth) : ""
            return { ...bookingDateSet, customer_id: customer_id, reservation_date: formattedreservationdate, checkout_date: formattedcheckoutdate, Created_At: formattedCreatedAt, checkin_date: formattedcheckindate, updated_At: formattedupdatedAt, createdAt: formattedCreatedAt, updatedAt: formattedupdatedAt, reservationdate: formattedreservationdate, checkindate: formattedcheckindate, checkoutdate: formattedcheckoutdate }
        })


        res.json(formattedDate);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }

    // return res.json(allbooking)
})

const getAllBooking = asyncHandler(async (req, res) => {
    const allbooking = await Booking.find({
        $and: [
            { softdelete: { $ne: true } } // Filter out softdeleted bookings
        ]
    })
        .sort({ _id: "descending" })
    if (!allbooking?.length) {
        return res.status(400).json({ message: "No Booking found" })
    }

    const propertyIds = allbooking.map(property => property?.propertyid);
    const customerIds = allbooking.map(customer => customer?.email).filter(Boolean);
    const employeeIds = allbooking.map(employee => employee.createdBy);
    const employeeIdsUpdatedBy = allbooking.map(employee => employee.updatedBy);

    try {
        const properties = await AddProperty.find({ _id: { $in: propertyIds } });
        const buildingIds = properties.map(property => property?.buildingid);
        const projectnameId = properties.map(property => property?.projectnameid);
        const communityId = properties.map(property => property?.communityid);
        const subtypeId = properties.map(property => property?.subtypeid);
        const customerId = properties.map(property => property?.customerid);

        const buildings = await BuildingName.find({ _id: { $in: buildingIds } });
        const projectnames = await ProjectName.find({ _id: { $in: projectnameId } });
        const communityData = await CommunityName.find({ _id: { $in: communityId } });
        const subtypeData = await SubType.find({ _id: { $in: subtypeId } });
        const userData = await User.find({ _id: { $in: customerId } });
        const employeeData = await Employee.find({ _id: { $in: employeeIds } });
        const employeeDataUpdatedBy = await Employee.find({ _id: { $in: employeeIdsUpdatedBy } });
        const customerEmails = await User.find({ email: { $in: customerIds } });
        // const customerData = await User.find({ _id: { $in: customerIds } });


        const bookingWithAllData = allbooking.map(propertyData => {
            const propertyObject = propertyData.toObject();
            const { _id, bookingnumber, cancelled, propertyid, customerid, ownerid, guestname, checkintype, nationality, passportnumber, mobilenumber, email, noadults, nochildern, totaloccupants, confirmationcode, reservationdate, bookingagent, modepayment, checkindate, checkoutdate, nonight, tourismfee, securitydeposit, totalpayout, hostservicefee, totalcollectall, cleaningfee, totaladditionalfee, roomrentamount, guestservicefee, guestmanagementfee, vatperbookingrent, vatperservicefee, vatpercleaningfee, vatperguestmanagementfee, vatperhostmanagementfee, totalvatper, totalroomrent, hostmanagementfee, roomrenthostpayable, auditdiff, createdAt, guestservicepercent, createdBy, updatedAt, updatedBy, softdelete, dtcm_uploaded, passortid_collected, sign_verified, smartcode_provided, payment_collected, payment_received, other_passports, customertype } = propertyObject;
            const updatedBooking = { _id, bookingnumber, cancelled, propertyid, customerid, ownerid, guestname, checkintype, nationality, passportnumber, mobilenumber, email, noadults, nochildern, totaloccupants, confirmationcode, reservationdate, bookingagent, modepayment, checkindate, checkoutdate, nonight, tourismfee, securitydeposit, totalpayout, hostservicefee, totalcollectall, cleaningfee, totaladditionalfee, roomrentamount, guestservicefee, guestmanagementfee, vatperbookingrent, vatperservicefee, vatpercleaningfee, vatperguestmanagementfee, vatperhostmanagementfee, totalvatper, totalroomrent, hostmanagementfee, roomrenthostpayable, auditdiff, createdAt, guestservicepercent, createdBy, updatedAt, updatedBy, softdelete, dtcm_uploaded, passortid_collected, sign_verified, smartcode_provided, payment_collected, payment_received, other_passports, customertype };
            if (propertyid) {
                const property = properties.find(property => String(property._id) === String(propertyData.propertyid));
                if (property) {
                    updatedBooking.unitnumber = property.unitnumber;
                    updatedBooking.floor = property.floor;

                    const building = buildings.find(building => String(building._id) === String(property.buildingid));
                    if (building) {
                        updatedBooking.building_name = building.buildingname;
                        updatedBooking.buildingid = building._id;
                    }

                    const projectname = projectnames.find(project => String(project._id) === String(property.projectnameid));
                    if (projectname) {
                        updatedBooking.project_name = projectname.projectName;
                        updatedBooking.projectnameid = projectname._id;
                    }

                    const community = communityData.find(community => String(community._id) === String(property.communityid));
                    if (community) {
                        updatedBooking.community_name = community.communityname;
                        updatedBooking.communityid = community._id;
                    }

                    const subtype = subtypeData.find(subtype => String(subtype._id) === String(property.subtypeid));
                    if (subtype) {
                        updatedBooking.subtype_name = subtype.subtypename;
                    }

                    const user = userData.find(userData => String(userData._id) === String(property.customerid));
                    if (user) {
                        updatedBooking.owner_name = user?.firstname + " " + user?.lastname;
                        updatedBooking.owner_email = user?.email;
                        updatedBooking.customer_id = user?._id;
                    }

                }
            }

            const user = customerEmails.find(customer => customer.email === email);
            if (user) {
                // console.log(user?._id, 'user');
                updatedBooking.guest_id = user?._id;
                updatedBooking.guestname = (user?.firstname) + " " + (user?.lastname ? user?.lastname : "");
                updatedBooking.nationality = user?.passportno;
                updatedBooking.passportnumber = user?.passportidno;
                updatedBooking.mobilenumber = user?.whatsappno;
            }

            const employee = employeeData.find(employee => String(employee._id) === String(createdBy));
            if (employee) {
                updatedBooking.employee_email_createdBy = employee?.email;
            }
            const employeeUpdatedBy = employeeDataUpdatedBy.find(employee => String(employee._id) === String(updatedBy));
            if (employeeUpdatedBy) {
                updatedBooking.employee_email_updatedBy = employeeUpdatedBy?.email;
            }

            // if(customerData) {
            //     const user = customerData.find(user => String(user._id) === String(propertyData.customerid));
            //     if(user) {
            //         updatedBooking.guest_name = user?.firstname + " " + user?.lastname;
            //     }
            // }

            return updatedBooking;
        });

        const formattedDate = bookingWithAllData?.map(bookingDateSet => {
            const additionalDate = moment().tz('Asia/Dubai').add(1, 'day').format('DD MMM YYYY');
            // const formattedreservationdate = bookingDateSet.reservationdate ? new Date(bookingDateSet.checkindate).toDateString() : ''
            // const formattedreservationdate = bookingDateSet.reservationdate ? new Date(bookingDateSet.reservationdate).toISOString().split('T')[0] : '';
            const formattedreservationdate = bookingDateSet.reservationdate ? moment.tz(bookingDateSet.reservationdate, 'Asia/Karachi').format('DD MMM YYYY') : '';
            const formattedcheckindate = bookingDateSet.checkindate ? moment.tz(bookingDateSet.checkindate, 'Asia/Karachi').format('DD MMM YYYY') : ''
            const formattedcheckoutdate = bookingDateSet.checkoutdate ? moment.tz(bookingDateSet.checkoutdate, 'Asia/Karachi').format('DD MMM YYYY') : ''
            // const formattedCreatedAt = bookingDateSet.createdAt ? new Date(bookingDateSet.createdAt).toDateString() : ''
            // const formattedreservationdate = bookingDateSet.reservationdate ? moment(bookingDateSet.reservationdate).tz('Asia/Dubai').format('DD MMM YYYY') : '';
            // const formattedcheckindate = bookingDateSet.checkindate ? moment(bookingDateSet.checkindate).tz('Asia/Dubai').format('DD MMM YYYY') : '';
            // const formattedcheckoutdate = bookingDateSet.checkoutdate ? moment(bookingDateSet.checkoutdate).tz('Asia/Dubai').format('DD MMM YYYY') : '';
            // const formattedreservationdate = bookingDateSet.reservationdate ? moment(bookingDateSet.reservationdate).tz('Asia/Dubai').subtract(1, 'day').format('DD MMM YYYY') : '';
            // const formattedcheckindate = bookingDateSet.checkindate ? moment(bookingDateSet.checkindate).tz('Asia/Dubai').add(1, 'day').format('DD MMM YYYY') : '';
            // const formattedcheckoutdate = bookingDateSet.checkoutdate ? moment(bookingDateSet.checkoutdate).tz('Asia/Dubai').add(1, 'day').format('DD MMM YYYY') : '';
            // const formattedCreatedAt = bookingDateSet.createdAt ? moment(bookingDateSet.createdAt).tz('Asia/Dubai').format('DD MMM YYYY') : '';
            // const formattedupdatedAt = bookingDateSet.updatedAt ? moment(bookingDateSet.updatedAt).tz('Asia/Dubai').format('DD MMM YYYY') : '';
            // const formattedreservationdate = bookingDateSet.reservationdate ? moment.tz(bookingDateSet.reservationdate, 'Asia/Dubai').format('DD MMM YYYY') : '';
            // const formattedcheckindate = bookingDateSet.checkindate ? moment.tz(bookingDateSet.checkindate, 'Asia/Dubai').format('DD MMM YYYY') : '';
            // const formattedcheckoutdate = bookingDateSet.checkoutdate ? moment.tz(bookingDateSet.checkoutdate, 'Asia/Dubai').format('DD MMM YYYY') : '';
            const formattedCreatedAt = bookingDateSet.createdAt ? moment.tz(bookingDateSet.createdAt, 'Asia/Dubai').format('DD MMM YYYY') : '';
            const formattedupdatedAt = bookingDateSet.updatedAt ? moment.tz(bookingDateSet.updatedAt, 'Asia/Dubai').format('DD MMM YYYY') : '';
            // const bookingDateSet_age = bookingDateSet.datebirth ? calculateAge(bookingDateSet.datebirth) : ""
            return { ...bookingDateSet, reservation_date: formattedreservationdate, checkout_date: formattedcheckoutdate, Created_At: formattedCreatedAt, checkin_date: formattedcheckindate, updated_At: formattedupdatedAt, createdAt: formattedCreatedAt, updatedAt: formattedupdatedAt, reservationdate: formattedreservationdate, checkindate: formattedcheckindate, checkoutdate: formattedcheckoutdate }
        })


        res.json(formattedDate);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }

    // return res.json(allbooking)
})

const getAllBookingWithoutSoftdelete = asyncHandler(async (req, res) => {
    const allbooking = await Booking.find()
        .sort({ _id: "descending" })
    if (!allbooking?.length) {
        return res.status(400).json({ message: "No Booking found" })
    }

    const propertyIds = allbooking.map(property => property?.propertyid);
    const customerIds = allbooking.map(customer => customer?.email).filter(Boolean);;
    // const customerIds = allbooking.map(customer => customer?.customerid);
    const employeeIds = allbooking.map(employee => employee.createdBy);
    const employeeIdsUpdatedBy = allbooking.map(employee => employee.updatedBy);
    try {
        const properties = await AddProperty.find({ _id: { $in: propertyIds } });
        const buildingIds = properties.map(property => property?.buildingid);
        const projectnameId = properties.map(property => property?.projectnameid);
        const communityId = properties.map(property => property?.communityid);
        const subtypeId = properties.map(property => property?.subtypeid);
        const customerId = properties.map(property => property?.customerid);

        const buildings = await BuildingName.find({ _id: { $in: buildingIds } });
        const projectnames = await ProjectName.find({ _id: { $in: projectnameId } });
        const communityData = await CommunityName.find({ _id: { $in: communityId } });
        const subtypeData = await SubType.find({ _id: { $in: subtypeId } });
        const userData = await User.find({ _id: { $in: customerId } });
        const employeeData = await Employee.find({ _id: { $in: employeeIds } });
        const employeeDataUpdatedBy = await Employee.find({ _id: { $in: employeeIdsUpdatedBy } });
        const customerEmails = await User.find({ email: { $in: customerIds } });
        // const customerData = await User.find({ _id: { $in: customerIds } });


        const bookingWithAllData = allbooking.map(propertyData => {
            const propertyObject = propertyData.toObject();
            const { _id, bookingnumber, cancelled, propertyid, customerid, ownerid, guestname, checkintype, nationality, passportnumber, mobilenumber, email, noadults, nochildern, totaloccupants, confirmationcode, reservationdate, bookingagent, modepayment, checkindate, checkoutdate, nonight, tourismfee, securitydeposit, totalpayout, hostservicefee, totalcollectall, cleaningfee, totaladditionalfee, roomrentamount, guestservicefee, guestmanagementfee, vatperbookingrent, vatperservicefee, vatpercleaningfee, vatperguestmanagementfee, vatperhostmanagementfee, totalvatper, totalroomrent, hostmanagementfee, roomrenthostpayable, auditdiff, createdAt, guestservicepercent, createdBy, updatedBy, softdelete, dtcm_uploaded, passortid_collected, sign_verified, smartcode_provided, payment_collected, payment_received, other_passports } = propertyObject;
            const updatedBooking = { _id, bookingnumber, cancelled, propertyid, customerid, ownerid, guestname, checkintype, nationality, passportnumber, mobilenumber, email, noadults, nochildern, totaloccupants, confirmationcode, reservationdate, bookingagent, modepayment, checkindate, checkoutdate, nonight, tourismfee, securitydeposit, totalpayout, hostservicefee, totalcollectall, cleaningfee, totaladditionalfee, roomrentamount, guestservicefee, guestmanagementfee, vatperbookingrent, vatperservicefee, vatpercleaningfee, vatperguestmanagementfee, vatperhostmanagementfee, totalvatper, totalroomrent, hostmanagementfee, roomrenthostpayable, auditdiff, createdAt, guestservicepercent, createdBy, updatedBy, softdelete, dtcm_uploaded, passortid_collected, sign_verified, smartcode_provided, payment_collected, payment_received, other_passports };
            if (propertyid) {
                const property = properties.find(property => String(property._id) === String(propertyData.propertyid));
                if (property) {
                    updatedBooking.unitnumber = property.unitnumber;
                    updatedBooking.floor = property.floor;

                    const building = buildings.find(building => String(building._id) === String(property.buildingid));
                    if (building) {
                        updatedBooking.building_name = building.buildingname;
                    }

                    const projectname = projectnames.find(project => String(project._id) === String(property.projectnameid));
                    if (projectname) {
                        updatedBooking.project_name = projectname.projectName;
                    }

                    const community = communityData.find(community => String(community._id) === String(property.communityid));
                    if (community) {
                        updatedBooking.community_name = community.communityname;
                    }

                    const subtype = subtypeData.find(subtype => String(subtype._id) === String(property.subtypeid));
                    if (subtype) {
                        updatedBooking.subtype_name = subtype.subtypename;
                    }

                    const user = userData.find(userData => String(userData._id) === String(property.customerid));
                    if (user) {
                        updatedBooking.owner_name = user?.firstname + " " + user?.lastname;
                        updatedBooking.owner_email = user?.email;
                    }
                }
            }

            // if (customertype === "New Customer") {
            //     const user = customerEmails.find(customer => customer.email === email);
            //     if (user) {
            //         // console.log(user?._id, 'user');
            //         updatedBooking.guest_id = user?._id;
            //     }
            // }
            const user = customerEmails.find(customer => customer.email === email);
            if (user) {
                // console.log(user?._id, 'user');
                updatedBooking.guest_id = user?._id;
                updatedBooking.guestname = (user?.firstname) + " " + (user?.lastname ? user?.lastname : "");
                updatedBooking.nationality = user?.passportno;
                updatedBooking.passportnumber = user?.passportidno;
                updatedBooking.mobilenumber = user?.whatsappno;
            }

            const employee = employeeData.find(employee => String(employee._id) === String(createdBy));
            if (employee) {
                updatedBooking.employee_email_createdBy = employee?.email;
            }
            const employeeUpdatedBy = employeeDataUpdatedBy.find(employee => String(employee._id) === String(updatedBy));
            if (employeeUpdatedBy) {
                updatedBooking.employee_email_updatedBy = employeeUpdatedBy?.email;
            }
            // if(customerData) {
            //     const user = customerData.find(user => String(user._id) === String(propertyData.customerid));
            //     if(user) {
            //         updatedBooking.guest_name = user?.firstname + " " + user?.lastname;
            //     }
            // }

            return updatedBooking;
        });

        const formattedDate = bookingWithAllData?.map(bookingDateSet => {
            const formattedreservationdate = bookingDateSet.reservationdate ? moment.tz(bookingDateSet.reservationdate, 'Asia/Karachi').format('DD MMM YYYY') : '';
            const formattedcheckindate = bookingDateSet.checkindate ? moment.tz(bookingDateSet.checkindate, 'Asia/Karachi').format('DD MMM YYYY') : ''
            const formattedcheckoutdate = bookingDateSet.checkoutdate ? moment.tz(bookingDateSet.checkoutdate, 'Asia/Karachi').format('DD MMM YYYY') : ''
            // const formattedCreatedAt = bookingDateSet.createdAt ? new Date(bookingDateSet.createdAt).toDateString() : ''
            // const formattedreservationdate = bookingDateSet.reservationdate ? moment(bookingDateSet.reservationdate).tz('Asia/Dubai').format('DD MMM YYYY') : '';
            // const formattedcheckindate = bookingDateSet.checkindate ? moment(bookingDateSet.checkindate).tz('Asia/Dubai').format('DD MMM YYYY') : '';
            // const formattedcheckoutdate = bookingDateSet.checkoutdate ? moment(bookingDateSet.checkoutdate).tz('Asia/Dubai').format('DD MMM YYYY') : '';
            const formattedCreatedAt = bookingDateSet.createdAt ? moment(bookingDateSet.createdAt).tz('Asia/Dubai').format('DD MMM YYYY') : '';
            const formattedupdatedAt = bookingDateSet.updatedAt ? moment(bookingDateSet.updatedAt).tz('Asia/Dubai').format('DD MMM YYYY') : '';
            // const bookingDateSet_age = bookingDateSet.datebirth ? calculateAge(bookingDateSet.datebirth) : ""
            return { ...bookingDateSet, reservation_date: formattedreservationdate, checkout_date: formattedcheckoutdate, Created_At: formattedCreatedAt, checkin_date: formattedcheckindate, updated_At: formattedupdatedAt, createdAt: formattedCreatedAt, updatedAt: formattedupdatedAt, reservationdate: formattedreservationdate, checkindate: formattedcheckindate, checkoutdate: formattedcheckoutdate }
        })

        res.json(formattedDate);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }

    // return res.json(allbooking)
})

const convertCustomerIdToObjectId = asyncHandler(async (req, res) => {
    // const bookings = await Booking.find({});
    // bookings.forEach(async (booking) => {
    //     if (typeof booking.customerid === 'string') {
    //         booking.customerid = mongoose.Types.ObjectId(booking.customerid);
    //         await booking.save();
    //     }
    // });
    // return res.json({ message: 'Conversion complete' });
    // console.log("isme araha hai?")
    const bookings = await Booking.find();
    for (const booking of bookings) {
        // console.log("loop me araha hai?")
        // console.log(booking?.customerid)
        // console.log(typeof booking?.customerid === String)
        // if (typeof booking.customerid === 'string') {
        //     console.log("condition me araha hai?")
        // booking.reservationdate = new Date(booking.reservationdate);
        booking.customerid = mongoose.Types.ObjectId(booking.customerid);
        // booking.reservationdate = new Date(booking.reservationdate).toISOString()
        // if (booking.reservationdate) {
        //     // throw new Error(`Invalid date value: ${booking.reservationdate}`);

        //     const date = new Date(booking.reservationdate);
        //     if (isNaN(date.getTime())) {
        //         throw new Error(`Invalid date value: ${booking.reservationdate}`);
        //     }
        //     if (date.getFullYear() < 1000 || date.getFullYear() > 9999) {
        //         throw new Error(`Invalid year value: ${date.getFullYear()}`);
        //     }
        // }
        await booking.save();
        // }
    }
    return res.json({ message: 'Conversion complete' });
});

const getAllBookingData = asyncHandler(async (req, res) => {
    const allbooking = await Booking.aggregate([
        {
            $lookup: {
                from: "users",
                localField: "customerid",
                foreignField: "_id",
                as: "user",
            }
        },
        {
            $lookup: {
                from: "addproperties",
                localField: "propertyid",
                foreignField: "_id",
                as: "property"
            },
        }
    ])
        .sort({ _id: "descending" })
    if (!allbooking?.length) {
        return res.status(400).json({ message: "No Booking found" })
    }
    return res.json(allbooking)
})

const getPaginationBooking = asyncHandler(async (req, res) => {
    const page = parseInt(req.query.page || 0)
    const perPage = req.query.perPage || 10
    const sort = req.query.sort
    // console.log(req.query)
    try {
        const count = await Booking.countDocuments(req.query)
        const booking = await Booking.find({
            $and: [
                req.query,
                { softdelete: { $ne: true } } // Filter out softdeleted bookings
            ]
            // propertyid: req.query.propertyid
        })
            .sort({ _id: "descending" })
            .skip(perPage * page)
            .limit(parseInt(perPage))
        return res.status(200).json(
            {
                count: Math.ceil(count / perPage),
                booking
            }
        )
    } catch (err) {
        res.status(400).json({
            err: `Error getting data: ${err.message}`
        })
    }
})

const getBookingProperty = asyncHandler(async (req, res) => {
    // console.log(req.query)
    try {
        const booking = await Booking.find({
            $and: [
                req.query,
                { softdelete: { $ne: true } } // Filter out softdeleted bookings
            ]
            // propertyid: req.query.propertyid
        })
        return res.status(200).json(booking)
    } catch (err) {
        res.status(400).json({
            err: `Error getting data: ${err.message}`
        })
    }
})

const getPaginationBookingOwnerRep = asyncHandler(async (req, res) => {
    const page = parseInt(req.query.page || 0)
    const perPage = req.query.perPage || 10
    const sort = req.query.sort
    // console.log(req.query)
    try {
        const count = await Booking.countDocuments(req.query)
        const booking = await Booking.find({
            $and: [
                req.query,
                { softdelete: { $ne: true } } // Filter out softdeleted bookings
            ]
            // propertyid: req.query.propertyid
        })
            .sort({ _id: "descending" })
            .skip(perPage * page)
            .limit(parseInt(perPage))
        return res.status(200).json(
            // {
            // count: Math.ceil(count / perPage),
            booking
            // }
        )
    } catch (err) {
        res.status(400).json({
            err: `Error getting data: ${err.message}`
        })
    }
})

const getPaginationBookingWithDate = asyncHandler(async (req, res) => {
    const page = parseInt(req.query.page || 0)
    const perPage = req.query.perPage || 10
    const sort = req.query.sort
    const fromDate = req.query.fromDate
    const toDate = req.query.toDate
    try {
        const booking = await Booking.find({
            $and: [
                req.query,
                { softdelete: { $ne: true } } // Filter out softdeleted bookings
            ]
        })
            .find({
                createdAt: { '$gte': new Date(fromDate), "$lte": new Date(toDate) },
            })
            .sort({ _id: "descending" })
            .skip(perPage * page)
            .limit(parseInt(perPage))
        const count = await Booking.countDocuments(booking)
        // console.log(count, "count")
        return res.status(200).json({
            count: Math.ceil(count / perPage),
            booking
        })
    } catch (err) {
        res.status(400).json({
            err: `Error getting data: ${err.message}`
        })
    }
})

const getAllBookingApproved = asyncHandler(async (req, res) => {
    const allbooking = await Booking.find({
        $and: [
            { cancelled: { $ne: true } },
            { softdelete: { $ne: true } }
        ]
    }).sort({ _id: "descending" })
    if (!allbooking?.length) {
        return res.status(400).json({ message: "No Booking found" })
    }

    const propertyIds = allbooking.map(property => property?.propertyid);
    // const customerIds = allbooking.map(customer => customer?.customerid);
    const employeeIds = allbooking.map(employee => employee.createdBy);
    const employeeIdsUpdatedBy = allbooking.map(employee => employee.updatedBy);
    const customerIds = allbooking.map(customer => customer?.email).filter(Boolean);
    try {
        const properties = await AddProperty.find({ _id: { $in: propertyIds } });
        const buildingIds = properties.map(property => property?.buildingid);
        const projectnameId = properties.map(property => property?.projectnameid);
        const communityId = properties.map(property => property?.communityid);
        const subtypeId = properties.map(property => property?.subtypeid);
        const customerId = properties.map(property => property?.customerid);

        const buildings = await BuildingName.find({ _id: { $in: buildingIds } });
        const projectnames = await ProjectName.find({ _id: { $in: projectnameId } });
        const communityData = await CommunityName.find({ _id: { $in: communityId } });
        const subtypeData = await SubType.find({ _id: { $in: subtypeId } });
        const userData = await User.find({ _id: { $in: customerId } });
        // const customerData = await User.find({ _id: { $in: customerIds } });
        const employeeData = await Employee.find({ _id: { $in: employeeIds } });
        const employeeDataUpdatedBy = await Employee.find({ _id: { $in: employeeIdsUpdatedBy } });
        const customerEmails = await User.find({ email: { $in: customerIds } });
        const bookingWithAllData = allbooking.map(propertyData => {
            const propertyObject = propertyData.toObject();
            const { _id, bookingnumber, cancelled, propertyid, customerid, ownerid, guestname, checkintype, nationality, passportnumber, mobilenumber, email, noadults, nochildern, totaloccupants, confirmationcode, reservationdate, bookingagent, modepayment, checkindate, checkoutdate, nonight, tourismfee, securitydeposit, totalpayout, hostservicefee, totalcollectall, cleaningfee, totaladditionalfee, roomrentamount, guestservicefee, guestmanagementfee, vatperbookingrent, vatperservicefee, vatpercleaningfee, vatperguestmanagementfee, totalvatper, totalroomrent, hostmanagementfee, roomrenthostpayable, auditdiff, createdAt, guestservicepercent, createdBy, updatedBy, softdelete, dtcm_uploaded, passortid_collected, sign_verified, smartcode_provided, payment_collected, payment_received, other_passports } = propertyObject;
            const updatedBooking = { _id, bookingnumber, cancelled, propertyid, customerid, ownerid, guestname, checkintype, nationality, passportnumber, mobilenumber, email, noadults, nochildern, totaloccupants, confirmationcode, reservationdate, bookingagent, modepayment, checkindate, checkoutdate, nonight, tourismfee, securitydeposit, totalpayout, hostservicefee, totalcollectall, cleaningfee, totaladditionalfee, roomrentamount, guestservicefee, guestmanagementfee, vatperbookingrent, vatperservicefee, vatpercleaningfee, vatperguestmanagementfee, totalvatper, totalroomrent, hostmanagementfee, roomrenthostpayable, auditdiff, createdAt, guestservicepercent, createdBy, updatedBy, softdelete, dtcm_uploaded, passortid_collected, sign_verified, smartcode_provided, payment_collected, payment_received, other_passports };
            if (propertyid) {
                const property = properties.find(property => String(property._id) === String(propertyData.propertyid));
                if (property) {
                    updatedBooking.unitnumber = property.unitnumber;
                    updatedBooking.floor = property.floor;

                    const building = buildings.find(building => String(building._id) === String(property.buildingid));
                    if (building) {
                        updatedBooking.building_name = building.buildingname;
                    }

                    const projectname = projectnames.find(project => String(project._id) === String(property.projectnameid));
                    if (projectname) {
                        updatedBooking.project_name = projectname.projectName;
                    }

                    const community = communityData.find(community => String(community._id) === String(property.communityid));
                    if (community) {
                        updatedBooking.community_name = community.communityname;
                    }

                    const subtype = subtypeData.find(subtype => String(subtype._id) === String(property.subtypeid));
                    if (subtype) {
                        updatedBooking.subtype_name = subtype.subtypename;
                    }

                    const user = userData.find(userData => String(userData._id) === String(property.customerid));
                    if (user) {
                        updatedBooking.owner_name = user?.firstname + " " + user?.lastname;
                    }
                }
            }
            // if (customertype === "New Customer") {
            //     const user = customerEmails.find(customer => customer.email === email);
            //     if (user) {
            //         // console.log(user?._id, 'user');
            //         updatedBooking.guest_id = user?._id;
            //     }
            // }
            const user = customerEmails.find(customer => customer.email === email);
            if (user) {
                // console.log(user?._id, 'user');
                updatedBooking.guest_id = user?._id;
                updatedBooking.guestname = (user?.firstname) + " " + (user?.lastname ? user?.lastname : "");
                updatedBooking.nationality = user?.passportno;
                updatedBooking.passportnumber = user?.passportidno;
                updatedBooking.mobilenumber = user?.whatsappno;
            }

            const employee = employeeData.find(employee => String(employee._id) === String(createdBy));
            if (employee) {
                updatedBooking.employee_email_createdBy = employee?.email;
            }
            const employeeUpdatedBy = employeeDataUpdatedBy.find(employee => String(employee._id) === String(updatedBy));
            if (employeeUpdatedBy) {
                updatedBooking.employee_email_updatedBy = employeeUpdatedBy?.email;
            }
            // if(customerData) {
            //     const user = customerData.find(user => String(user._id) === String(propertyData.customerid));
            //     if(user) {
            //         updatedBooking.guest_name = user?.firstname + " " + user?.lastname;
            //     }
            // }

            return updatedBooking;
        });

        const formattedDate = bookingWithAllData?.map(bookingDateSet => {
            const formattedreservationdate = bookingDateSet.reservationdate ? moment.tz(bookingDateSet.reservationdate, 'Asia/Karachi').format('DD MMM YYYY') : '';
            const formattedcheckindate = bookingDateSet.checkindate ? moment.tz(bookingDateSet.checkindate, 'Asia/Karachi').format('DD MMM YYYY') : ''
            const formattedcheckoutdate = bookingDateSet.checkoutdate ? moment.tz(bookingDateSet.checkoutdate, 'Asia/Karachi').format('DD MMM YYYY') : ''
            // const formattedCreatedAt = bookingDateSet.createdAt ? new Date(bookingDateSet.createdAt).toDateString() : ''
            // const formattedreservationdate = bookingDateSet.reservationdate ? moment(bookingDateSet.reservationdate).tz('Asia/Dubai').format('DD MMM YYYY') : '';
            // const formattedcheckindate = bookingDateSet.checkindate ? moment(bookingDateSet.checkindate).tz('Asia/Dubai').format('DD MMM YYYY') : '';
            // const formattedcheckoutdate = bookingDateSet.checkoutdate ? moment(bookingDateSet.checkoutdate).tz('Asia/Dubai').format('DD MMM YYYY') : '';
            const formattedCreatedAt = bookingDateSet.createdAt ? moment(bookingDateSet.createdAt).tz('Asia/Dubai').format('DD MMM YYYY') : '';
            const formattedupdatedAt = bookingDateSet.updatedAt ? moment(bookingDateSet.updatedAt).tz('Asia/Dubai').format('DD MMM YYYY') : '';
            // const bookingDateSet_age = bookingDateSet.datebirth ? calculateAge(bookingDateSet.datebirth) : ""
            return { ...bookingDateSet, reservation_date: formattedreservationdate, checkout_date: formattedcheckoutdate, Created_At: formattedCreatedAt, checkin_date: formattedcheckindate, updated_At: formattedupdatedAt, createdAt: formattedCreatedAt, updatedAt: formattedupdatedAt, reservationdate: formattedreservationdate, checkindate: formattedcheckindate, checkoutdate: formattedcheckoutdate }
        })
        res.json(formattedDate);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }

    // return res.json(allbooking)
})

const getAllBookingCancelled = asyncHandler(async (req, res) => {
    const allbooking = await Booking.find({
        $and: [
            req.query,
            { softdelete: { $ne: true } }
        ]
    }).sort({ _id: "descending" })
    if (!allbooking?.length) {
        return res.status(400).json({ message: "No Booking found" })
    }

    const propertyIds = allbooking.map(property => property?.propertyid);
    // const customerIds = allbooking.map(customer => customer?.customerid);
    const employeeIds = allbooking.map(employee => employee.createdBy);
    const employeeIdsUpdatedBy = allbooking.map(employee => employee.updatedBy);
    const customerIds = allbooking.map(customer => customer?.email).filter(Boolean);
    try {
        const properties = await AddProperty.find({ _id: { $in: propertyIds } });
        const buildingIds = properties.map(property => property?.buildingid);
        const projectnameId = properties.map(property => property?.projectnameid);
        const communityId = properties.map(property => property?.communityid);
        const subtypeId = properties.map(property => property?.subtypeid);
        const customerId = properties.map(property => property?.customerid);

        const buildings = await BuildingName.find({ _id: { $in: buildingIds } });
        const projectnames = await ProjectName.find({ _id: { $in: projectnameId } });
        const communityData = await CommunityName.find({ _id: { $in: communityId } });
        const subtypeData = await SubType.find({ _id: { $in: subtypeId } });
        const userData = await User.find({ _id: { $in: customerId } });
        // const customerData = await User.find({ _id: { $in: customerIds } });
        const employeeData = await Employee.find({ _id: { $in: employeeIds } });
        const employeeDataUpdatedBy = await Employee.find({ _id: { $in: employeeIdsUpdatedBy } });
        const customerEmails = await User.find({ email: { $in: customerIds } });
        const bookingWithAllData = allbooking.map(propertyData => {
            const propertyObject = propertyData.toObject();
            const { _id, bookingnumber, cancelled, propertyid, customerid, ownerid, guestname, checkintype, nationality, passportnumber, mobilenumber, email, noadults, nochildern, totaloccupants, confirmationcode, reservationdate, bookingagent, modepayment, checkindate, checkoutdate, nonight, tourismfee, securitydeposit, totalpayout, hostservicefee, totalcollectall, cleaningfee, totaladditionalfee, roomrentamount, guestservicefee, guestmanagementfee, vatperbookingrent, vatperservicefee, vatpercleaningfee, vatperguestmanagementfee, totalvatper, totalroomrent, hostmanagementfee, roomrenthostpayable, auditdiff, createdAt, guestservicepercent, createdBy, updatedBy, softdelete, dtcm_uploaded, passortid_collected, sign_verified, smartcode_provided, payment_collected, payment_received, other_passports } = propertyObject;
            const updatedBooking = { _id, bookingnumber, cancelled, propertyid, customerid, ownerid, guestname, checkintype, nationality, passportnumber, mobilenumber, email, noadults, nochildern, totaloccupants, confirmationcode, reservationdate, bookingagent, modepayment, checkindate, checkoutdate, nonight, tourismfee, securitydeposit, totalpayout, hostservicefee, totalcollectall, cleaningfee, totaladditionalfee, roomrentamount, guestservicefee, guestmanagementfee, vatperbookingrent, vatperservicefee, vatpercleaningfee, vatperguestmanagementfee, totalvatper, totalroomrent, hostmanagementfee, roomrenthostpayable, auditdiff, createdAt, guestservicepercent, createdBy, updatedBy, softdelete, dtcm_uploaded, passortid_collected, sign_verified, smartcode_provided, payment_collected, payment_received, other_passports };
            if (propertyid) {
                const property = properties.find(property => String(property._id) === String(propertyData.propertyid));
                if (property) {
                    updatedBooking.unitnumber = property.unitnumber;
                    updatedBooking.floor = property.floor;

                    const building = buildings.find(building => String(building._id) === String(property.buildingid));
                    if (building) {
                        updatedBooking.building_name = building.buildingname;
                    }

                    const projectname = projectnames.find(project => String(project._id) === String(property.projectnameid));
                    if (projectname) {
                        updatedBooking.project_name = projectname.projectName;
                    }

                    const community = communityData.find(community => String(community._id) === String(property.communityid));
                    if (community) {
                        updatedBooking.community_name = community.communityname;
                    }

                    const subtype = subtypeData.find(subtype => String(subtype._id) === String(property.subtypeid));
                    if (subtype) {
                        updatedBooking.subtype_name = subtype.subtypename;
                    }

                    const user = userData.find(userData => String(userData._id) === String(property.customerid));
                    if (user) {
                        updatedBooking.owner_name = user?.firstname + " " + user?.lastname;
                    }
                }
            }
            // if (customertype === "New Customer") {
            //     const user = customerEmails.find(customer => customer.email === email);
            //     if (user) {
            //         // console.log(user?._id, 'user');
            //         updatedBooking.guest_id = user?._id;
            //     }
            // }

            const user = customerEmails.find(customer => customer.email === email);
            if (user) {
                // console.log(user?._id, 'user');
                updatedBooking.guest_id = user?._id;
                updatedBooking.guestname = (user?.firstname) + " " + (user?.lastname ? user?.lastname : "");
                updatedBooking.nationality = user?.passportno;
                updatedBooking.passportnumber = user?.passportidno;
                updatedBooking.mobilenumber = user?.whatsappno;
            }

            const employee = employeeData.find(employee => String(employee._id) === String(createdBy));
            if (employee) {
                updatedBooking.employee_email_createdBy = employee?.email;
            }
            const employeeUpdatedBy = employeeDataUpdatedBy.find(employee => String(employee._id) === String(updatedBy));
            if (employeeUpdatedBy) {
                updatedBooking.employee_email_updatedBy = employeeUpdatedBy?.email;
            }
            // if(customerData) {
            //     const user = customerData.find(user => String(user._id) === String(propertyData.customerid));
            //     if(user) {
            //         updatedBooking.guest_name = user?.firstname + " " + user?.lastname;
            //     }
            // }

            return updatedBooking;
        });

        const formattedDate = bookingWithAllData?.map(bookingDateSet => {
            const formattedreservationdate = bookingDateSet.reservationdate ? moment.tz(bookingDateSet.reservationdate, 'Asia/Karachi').format('DD MMM YYYY') : '';
            const formattedcheckindate = bookingDateSet.checkindate ? moment.tz(bookingDateSet.checkindate, 'Asia/Karachi').format('DD MMM YYYY') : ''
            const formattedcheckoutdate = bookingDateSet.checkoutdate ? moment.tz(bookingDateSet.checkoutdate, 'Asia/Karachi').format('DD MMM YYYY') : ''
            // const formattedCreatedAt = bookingDateSet.createdAt ? new Date(bookingDateSet.createdAt).toDateString() : ''
            // const formattedreservationdate = bookingDateSet.reservationdate ? moment(bookingDateSet.reservationdate).tz('Asia/Dubai').format('DD MMM YYYY') : '';
            // const formattedcheckindate = bookingDateSet.checkindate ? moment(bookingDateSet.checkindate).tz('Asia/Dubai').format('DD MMM YYYY') : '';
            // const formattedcheckoutdate = bookingDateSet.checkoutdate ? moment(bookingDateSet.checkoutdate).tz('Asia/Dubai').format('DD MMM YYYY') : '';
            const formattedCreatedAt = bookingDateSet.createdAt ? moment(bookingDateSet.createdAt).tz('Asia/Dubai').format('DD MMM YYYY') : '';
            const formattedupdatedAt = bookingDateSet.updatedAt ? moment(bookingDateSet.updatedAt).tz('Asia/Dubai').format('DD MMM YYYY') : '';
            // const bookingDateSet_age = bookingDateSet.datebirth ? calculateAge(bookingDateSet.datebirth) : ""
            return { ...bookingDateSet, reservation_date: formattedreservationdate, checkout_date: formattedcheckoutdate, Created_At: formattedCreatedAt, checkin_date: formattedcheckindate, updated_At: formattedupdatedAt, createdAt: formattedCreatedAt, updatedAt: formattedupdatedAt, reservationdate: formattedreservationdate, checkindate: formattedcheckindate, checkoutdate: formattedcheckoutdate }
        })
        res.json(formattedDate);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }

    // return res.json(allbooking)
})

// const getBookingReservation = asyncHandler(async (req, res) => {
//     const page = parseInt(req.query.page || 0)
//     const perPage = req.query.perPage || 10
//     const sort = req.query.sort
//     // const fromDate = new Date('2023-01-01');
//     const ownerid = req.query.ownerid
//     const toDate = new Date('2023-01-31').toUTCString();
//     const fromDate = req.query.fromDate
//     console.log(fromDate, "fromDate")
//     console.log(toDate, "toDate")
//     // const toDate = req.query.toDate
//     console.log(req.query)
//     console.log(new Date(fromDate), "req.query.fromDate")
//     console.log(new Date(toDate), "req.query.toDate")
//     try {
//         const booking = await Booking
//             .find({
//                 "$or": [
//                     { "ownerid": { $regex: req.query.ownerid} },
//                 ],
//             })
//             // .find({ reservationdate: { '$gte': fromDate } })
//             .find({
//                 "reservationdate": { $gte: fromDate },
//                 // "reservationdate": { $gte: fromDate, $lte: toDate },
//             })
//         // .toArray(function (err, docs) {
//         //     if (err) throw err;
//         //     console.log(docs);
//         //     // client.close();
//         // });
//         return res.json(booking)
//         // .sort({ _id: "descending" })
//         // .skip(perPage * page)
//         // .limit(parseInt(perPage))
//         // const count = await Booking.countDocuments(booking)
//         // console.log(count, "count")
//         // return res.status(200).json({
//         //     // count: Math.ceil(count / perPage),
//         //     booking
//         // })
//         // return res.json(booking)
//     } catch (err) {
//         res.status(400).json({
//             err: `Error getting data: ${err.message}`
//         })
//     }
// })

const getBookingReservation = asyncHandler(async (req, res) => {
    // const fromDate = new Date(req.query.fromDate) // convert to Date object
    // const toDate = new Date(req.query.toDate) // use hardcoded date for now
    const fromdate = req.query.fromdate
    const toDate = req.query.toDate

    try {
        // const booking = await Booking
        //     .find({
        //         "$or": [
        //             req.query
        //         ],
        //         // ownerid: req.query.ownerid,
        //         "$or": [
        //             // { ownerid: { $regex: req.query.ownerid } },
        //             { reservationdate: { $gte: fromDate, $lte: toDate } }
        //         ]// query by date range
        //     }).sort({ _id: "descending" }).exec() // execute the query
        const booking = await Booking.find({
            $and: [
                { reservationdate: { $gte: fromdate, $lte: toDate } },
                { softdelete: { $ne: true } }
            ]
        }).sort({ _id: "descending" })

        // console.log(booking, "booking")


        // if (booking.length === 0) {
        //     return res.status(404).json({
        //         message: 'No bookings found',
        //     });
        // }
        // return res.status(200).json({
        //     booking
        // })
        if (booking.length === 0) {
            return res.status(404).json({
                message: 'No bookings found',
            });
        }
        if (!booking?.length) {
            return res.status(400).json({ message: "No Booking found" })
        }

        const propertyIds = booking.map(property => property?.propertyid);
        // const customerIds = booking.map(customer => customer?.customerid);

        try {
            const properties = await AddProperty.find({ _id: { $in: propertyIds } });
            const buildingIds = properties.map(property => property?.buildingid);
            const projectnameId = properties.map(property => property?.projectnameid);
            const communityId = properties.map(property => property?.communityid);
            const subtypeId = properties.map(property => property?.subtypeid);
            const customerId = properties.map(property => property?.customerid);
            const customerIds = properties.map(customer => customer?.email).filter(Boolean);
            const customerEmails = await User.find({ email: { $in: customerIds } });
            const buildings = await BuildingName.find({ _id: { $in: buildingIds } });
            const projectnames = await ProjectName.find({ _id: { $in: projectnameId } });
            const communityData = await CommunityName.find({ _id: { $in: communityId } });
            const subtypeData = await SubType.find({ _id: { $in: subtypeId } });
            const userData = await User.find({ _id: { $in: customerId } });
            // const customerData = await User.find({ _id: { $in: customerIds } });


            const bookingWithAllData = booking.map(propertyData => {
                const propertyObject = propertyData.toObject();
                const { _id, bookingnumber, cancelled, propertyid, customerid, ownerid, guestname, checkintype, nationality, passportnumber, mobilenumber, email, noadults, nochildern, totaloccupants, confirmationcode, reservationdate, bookingagent, modepayment, checkindate, checkoutdate, nonight, tourismfee, securitydeposit, totalpayout, hostservicefee, totalcollectall, cleaningfee, totaladditionalfee, roomrentamount, guestservicefee, guestmanagementfee, vatperbookingrent, vatperservicefee, vatpercleaningfee, vatperguestmanagementfee, vatperhostmanagementfee, totalvatper, totalroomrent, hostmanagementfee, roomrenthostpayable, auditdiff, createdAt, guestservicepercent, createdBy, updatedBy, softdelete, dtcm_uploaded, passortid_collected, sign_verified, smartcode_provided, payment_collected, payment_received, other_passports } = propertyObject;
                const updatedBooking = { _id, bookingnumber, cancelled, propertyid, customerid, ownerid, guestname, checkintype, nationality, passportnumber, mobilenumber, email, noadults, nochildern, totaloccupants, confirmationcode, reservationdate, bookingagent, modepayment, checkindate, checkoutdate, nonight, tourismfee, securitydeposit, totalpayout, hostservicefee, totalcollectall, cleaningfee, totaladditionalfee, roomrentamount, guestservicefee, guestmanagementfee, vatperbookingrent, vatperservicefee, vatpercleaningfee, vatperguestmanagementfee, vatperhostmanagementfee, totalvatper, totalroomrent, hostmanagementfee, roomrenthostpayable, auditdiff, createdAt, guestservicepercent, createdBy, updatedBy, softdelete, dtcm_uploaded, passortid_collected, sign_verified, smartcode_provided, payment_collected, payment_received, other_passports };
                if (propertyid) {
                    const property = properties.find(property => String(property._id) === String(propertyData.propertyid));
                    if (property) {
                        updatedBooking.unitnumber = property.unitnumber;
                        updatedBooking.floor = property.floor;

                        const building = buildings.find(building => String(building._id) === String(property.buildingid));
                        if (building) {
                            updatedBooking.building_name = building.buildingname;
                        }

                        const projectname = projectnames.find(project => String(project._id) === String(property.projectnameid));
                        if (projectname) {
                            updatedBooking.project_name = projectname.projectName;
                        }

                        const community = communityData.find(community => String(community._id) === String(property.communityid));
                        if (community) {
                            updatedBooking.community_name = community.communityname;
                        }

                        const subtype = subtypeData.find(subtype => String(subtype._id) === String(property.subtypeid));
                        if (subtype) {
                            updatedBooking.subtype_name = subtype.subtypename;
                        }

                        const user = userData.find(userData => String(userData._id) === String(property.customerid));
                        if (user) {
                            updatedBooking.owner_name = user?.firstname + " " + user?.lastname;
                        }
                    }
                }

                // if (customertype === "New Customer") {
                //     const user = customerEmails.find(customer => customer.email === email);
                //     if (user) {
                //         // console.log(user?._id, 'user');
                //         updatedBooking.guest_id = user?._id;
                //     }
                // }

                const user = customerEmails.find(customer => customer.email === email);
                if (user) {
                    // console.log(user?._id, 'user');
                    updatedBooking.guest_id = user?._id;
                    updatedBooking.guestname = (user?.firstname) + " " + (user?.lastname ? user?.lastname : "");
                    updatedBooking.nationality = user?.passportno;
                    updatedBooking.passportnumber = user?.passportidno;
                    updatedBooking.mobilenumber = user?.whatsappno;
                }

                // if(customerData) {
                //     const user = customerData.find(user => String(user._id) === String(propertyData.customerid));
                //     if(user) {
                //         updatedBooking.guest_name = user?.firstname + " " + user?.lastname;
                //     }
                // }

                return updatedBooking;
            });

            const formattedDate = bookingWithAllData?.map(bookingDateSet => {
                const additionalDate = moment().tz('Asia/Dubai').add(1, 'day').format('DD MMM YYYY');
                const formattedreservationdate = bookingDateSet.reservationdate ? moment.tz(bookingDateSet.reservationdate, 'Asia/Karachi').format('DD MMM YYYY') : '';
                const formattedcheckindate = bookingDateSet.checkindate ? moment.tz(bookingDateSet.checkindate, 'Asia/Karachi').format('DD MMM YYYY') : ''
                const formattedcheckoutdate = bookingDateSet.checkoutdate ? moment.tz(bookingDateSet.checkoutdate, 'Asia/Karachi').format('DD MMM YYYY') : ''
                // const formattedCreatedAt = bookingDateSet.createdAt ? new Date(bookingDateSet.createdAt).toDateString() : ''
                // const formattedreservationdate = bookingDateSet.reservationdate ? moment(bookingDateSet.reservationdate).tz('Asia/Dubai').format('DD MMM YYYY') : '';
                // const formattedcheckindate = bookingDateSet.checkindate ? moment(bookingDateSet.checkindate).tz('Asia/Dubai').format('DD MMM YYYY') : '';
                // const formattedcheckoutdate = bookingDateSet.checkoutdate ? moment(bookingDateSet.checkoutdate).tz('Asia/Dubai').format('DD MMM YYYY') : '';
                // const formattedreservationdate = bookingDateSet.reservationdate ? moment(bookingDateSet.reservationdate).tz('Asia/Dubai').subtract(1, 'day').format('DD MMM YYYY') : '';
                // const formattedcheckindate = bookingDateSet.checkindate ? moment(bookingDateSet.checkindate).tz('Asia/Dubai').add(1, 'day').format('DD MMM YYYY') : '';
                // const formattedcheckoutdate = bookingDateSet.checkoutdate ? moment(bookingDateSet.checkoutdate).tz('Asia/Dubai').add(1, 'day').format('DD MMM YYYY') : '';
                // const formattedCreatedAt = bookingDateSet.createdAt ? moment(bookingDateSet.createdAt).tz('Asia/Dubai').format('DD MMM YYYY') : '';
                // const formattedupdatedAt = bookingDateSet.updatedAt ? moment(bookingDateSet.updatedAt).tz('Asia/Dubai').format('DD MMM YYYY') : '';
                // const formattedreservationdate = bookingDateSet.reservationdate ? moment.tz(bookingDateSet.reservationdate, 'Asia/Dubai').format('DD MMM YYYY') : '';
                // const formattedcheckindate = bookingDateSet.checkindate ? moment.tz(bookingDateSet.checkindate, 'Asia/Dubai').format('DD MMM YYYY') : '';
                // const formattedcheckoutdate = bookingDateSet.checkoutdate ? moment.tz(bookingDateSet.checkoutdate, 'Asia/Dubai').format('DD MMM YYYY') : '';
                const formattedCreatedAt = bookingDateSet.createdAt ? moment.tz(bookingDateSet.createdAt, 'Asia/Dubai').format('DD MMM YYYY') : '';
                const formattedupdatedAt = bookingDateSet.updatedAt ? moment.tz(bookingDateSet.updatedAt, 'Asia/Dubai').format('DD MMM YYYY') : '';
                // const bookingDateSet_age = bookingDateSet.datebirth ? calculateAge(bookingDateSet.datebirth) : ""
                return { ...bookingDateSet, reservation_date: formattedreservationdate, checkout_date: formattedcheckoutdate, Created_At: formattedCreatedAt, checkin_date: formattedcheckindate, updated_At: formattedupdatedAt, createdAt: formattedCreatedAt, updatedAt: formattedupdatedAt, reservationdate: formattedreservationdate, checkindate: formattedcheckindate, checkoutdate: formattedcheckoutdate }
            })
            res.json(formattedDate);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Server Error" });
        }
    } catch (err) {
        res.status(400).json({
            err: `Error getting data: ${err.message}`
        })
    }
})

const getBookingCheckIn = asyncHandler(async (req, res) => {
    const fromdate = req.query.fromdate
    const toDate = req.query.toDate
    // const fromdate = new Date(req.query.fromdate)
    // const toDate = new Date(req.query.toDate)

    // console.log(req.query)
    // console.log(fromdate, "fromdate")
    // console.log(toDate, "toDate")
    try {
        const booking = await Booking.find({
            $and: [
                { checkindate: { $gte: fromdate, $lte: toDate } },
                { softdelete: { $ne: true } }
            ]
        }).sort({ _id: "descending" }).exec()

        if (booking.length === 0) {
            return res.status(404).json({
                message: 'No bookings found',
            });
        }
        if (!booking?.length) {
            return res.status(400).json({ message: "No Booking found" })
        }

        const propertyIds = booking.map(property => property?.propertyid);
        // const customerIds = booking.map(customer => customer?.customerid);

        try {
            const properties = await AddProperty.find({ _id: { $in: propertyIds } });
            const buildingIds = properties.map(property => property?.buildingid);
            const projectnameId = properties.map(property => property?.projectnameid);
            const communityId = properties.map(property => property?.communityid);
            const subtypeId = properties.map(property => property?.subtypeid);
            const customerId = properties.map(property => property?.customerid);
            const customerIds = allbooking.map(customer => customer?.email).filter(Boolean);
            const customerEmails = await User.find({ email: { $in: customerIds } });

            const buildings = await BuildingName.find({ _id: { $in: buildingIds } });
            const projectnames = await ProjectName.find({ _id: { $in: projectnameId } });
            const communityData = await CommunityName.find({ _id: { $in: communityId } });
            const subtypeData = await SubType.find({ _id: { $in: subtypeId } });
            const userData = await User.find({ _id: { $in: customerId } });
            // const customerData = await User.find({ _id: { $in: customerIds } });


            const bookingWithAllData = booking.map(propertyData => {
                const propertyObject = propertyData.toObject();
                const { _id, bookingnumber, cancelled, propertyid, customerid, ownerid, guestname, checkintype, nationality, passportnumber, mobilenumber, email, noadults, nochildern, totaloccupants, confirmationcode, reservationdate, bookingagent, modepayment, checkindate, checkoutdate, nonight, tourismfee, securitydeposit, totalpayout, hostservicefee, totalcollectall, cleaningfee, totaladditionalfee, roomrentamount, guestservicefee, guestmanagementfee, vatperbookingrent, vatperservicefee, vatpercleaningfee, vatperguestmanagementfee, vatperhostmanagementfee, totalvatper, totalroomrent, hostmanagementfee, roomrenthostpayable, auditdiff, createdAt, guestservicepercent, createdBy, updatedBy, softdelete, dtcm_uploaded, passortid_collected, sign_verified, smartcode_provided, payment_collected, payment_received, other_passports } = propertyObject;
                const updatedBooking = { _id, bookingnumber, cancelled, propertyid, customerid, ownerid, guestname, checkintype, nationality, passportnumber, mobilenumber, email, noadults, nochildern, totaloccupants, confirmationcode, reservationdate, bookingagent, modepayment, checkindate, checkoutdate, nonight, tourismfee, securitydeposit, totalpayout, hostservicefee, totalcollectall, cleaningfee, totaladditionalfee, roomrentamount, guestservicefee, guestmanagementfee, vatperbookingrent, vatperservicefee, vatpercleaningfee, vatperguestmanagementfee, vatperhostmanagementfee, totalvatper, totalroomrent, hostmanagementfee, roomrenthostpayable, auditdiff, createdAt, guestservicepercent, createdBy, updatedBy, softdelete, dtcm_uploaded, passortid_collected, sign_verified, smartcode_provided, payment_collected, payment_received, other_passports };
                if (propertyid) {
                    const property = properties.find(property => String(property._id) === String(propertyData.propertyid));
                    if (property) {
                        updatedBooking.unitnumber = property.unitnumber;
                        updatedBooking.floor = property.floor;

                        const building = buildings.find(building => String(building._id) === String(property.buildingid));
                        if (building) {
                            updatedBooking.building_name = building.buildingname;
                        }

                        const projectname = projectnames.find(project => String(project._id) === String(property.projectnameid));
                        if (projectname) {
                            updatedBooking.project_name = projectname.projectName;
                        }

                        const community = communityData.find(community => String(community._id) === String(property.communityid));
                        if (community) {
                            updatedBooking.community_name = community.communityname;
                        }

                        const subtype = subtypeData.find(subtype => String(subtype._id) === String(property.subtypeid));
                        if (subtype) {
                            updatedBooking.subtype_name = subtype.subtypename;
                        }

                        const user = userData.find(userData => String(userData._id) === String(property.customerid));
                        if (user) {
                            updatedBooking.owner_name = user?.firstname + " " + user?.lastname;
                        }
                    }
                }
                // if (customertype === "New Customer") {
                //     const user = customerEmails.find(customer => customer.email === email);
                //     if (user) {
                //         // console.log(user?._id, 'user');
                //         updatedBooking.guest_id = user?._id;
                //     }
                // }

                const user = customerEmails.find(customer => customer.email === email);
                if (user) {
                    // console.log(user?._id, 'user');
                    updatedBooking.guest_id = user?._id;
                    updatedBooking.guestname = (user?.firstname) + " " + (user?.lastname ? user?.lastname : "");
                    updatedBooking.nationality = user?.passportno;
                    updatedBooking.passportnumber = user?.passportidno;
                    updatedBooking.mobilenumber = user?.whatsappno;
                }

                // if(customerData) {
                //     const user = customerData.find(user => String(user._id) === String(propertyData.customerid));
                //     if(user) {
                //         updatedBooking.guest_name = user?.firstname + " " + user?.lastname;
                //     }
                // }

                return updatedBooking;
            });

            const formattedDate = bookingWithAllData?.map(bookingDateSet => {
                const additionalDate = moment().tz('Asia/Dubai').add(1, 'day').format('DD MMM YYYY');
                const formattedreservationdate = bookingDateSet.reservationdate ? moment.tz(bookingDateSet.reservationdate, 'Asia/Karachi').format('DD MMM YYYY') : '';
                const formattedcheckindate = bookingDateSet.checkindate ? moment.tz(bookingDateSet.checkindate, 'Asia/Karachi').format('DD MMM YYYY') : ''
                const formattedcheckoutdate = bookingDateSet.checkoutdate ? moment.tz(bookingDateSet.checkoutdate, 'Asia/Karachi').format('DD MMM YYYY') : ''
                // const formattedCreatedAt = bookingDateSet.createdAt ? new Date(bookingDateSet.createdAt).toDateString() : ''
                // const formattedreservationdate = bookingDateSet.reservationdate ? moment(bookingDateSet.reservationdate).tz('Asia/Dubai').format('DD MMM YYYY') : '';
                // const formattedcheckindate = bookingDateSet.checkindate ? moment(bookingDateSet.checkindate).tz('Asia/Dubai').format('DD MMM YYYY') : '';
                // const formattedcheckoutdate = bookingDateSet.checkoutdate ? moment(bookingDateSet.checkoutdate).tz('Asia/Dubai').format('DD MMM YYYY') : '';
                // const formattedreservationdate = bookingDateSet.reservationdate ? moment(bookingDateSet.reservationdate).tz('Asia/Dubai').subtract(1, 'day').format('DD MMM YYYY') : '';
                // const formattedcheckindate = bookingDateSet.checkindate ? moment(bookingDateSet.checkindate).tz('Asia/Dubai').add(1, 'day').format('DD MMM YYYY') : '';
                // const formattedcheckoutdate = bookingDateSet.checkoutdate ? moment(bookingDateSet.checkoutdate).tz('Asia/Dubai').add(1, 'day').format('DD MMM YYYY') : '';
                // const formattedCreatedAt = bookingDateSet.createdAt ? moment(bookingDateSet.createdAt).tz('Asia/Dubai').format('DD MMM YYYY') : '';
                // const formattedupdatedAt = bookingDateSet.updatedAt ? moment(bookingDateSet.updatedAt).tz('Asia/Dubai').format('DD MMM YYYY') : '';
                // const formattedreservationdate = bookingDateSet.reservationdate ? moment.tz(bookingDateSet.reservationdate, 'Asia/Dubai').format('DD MMM YYYY') : '';
                // const formattedcheckindate = bookingDateSet.checkindate ? moment.tz(bookingDateSet.checkindate, 'Asia/Dubai').format('DD MMM YYYY') : '';
                // const formattedcheckoutdate = bookingDateSet.checkoutdate ? moment.tz(bookingDateSet.checkoutdate, 'Asia/Dubai').format('DD MMM YYYY') : '';
                const formattedCreatedAt = bookingDateSet.createdAt ? moment.tz(bookingDateSet.createdAt, 'Asia/Dubai').format('DD MMM YYYY') : '';
                const formattedupdatedAt = bookingDateSet.updatedAt ? moment.tz(bookingDateSet.updatedAt, 'Asia/Dubai').format('DD MMM YYYY') : '';
                // const bookingDateSet_age = bookingDateSet.datebirth ? calculateAge(bookingDateSet.datebirth) : ""
                return { ...bookingDateSet, reservation_date: formattedreservationdate, checkout_date: formattedcheckoutdate, Created_At: formattedCreatedAt, checkin_date: formattedcheckindate, updated_At: formattedupdatedAt, createdAt: formattedCreatedAt, updatedAt: formattedupdatedAt, reservationdate: formattedreservationdate, checkindate: formattedcheckindate, checkoutdate: formattedcheckoutdate }
            })
            res.json(formattedDate);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Server Error" });
        }
    } catch (error) {
        res.status(400).json({
            err: `Error getting data: ${err.message}`
        })
    }
})

const getBookingCheckOut = asyncHandler(async (req, res) => {
    const fromdate = req.query.fromdate
    const toDate = req.query.toDate
    try {
        // const booking = await Booking.find({
        //     "$or": [
        //         { checkoutdate: { $gte: fromdate, $lte: toDate } }
        //     ]
        // }).sort({ _id: "descending" }).exec()
        const booking = await Booking.find({
            $and: [
                { checkoutdate: { $gte: fromdate, $lte: toDate } },
                { softdelete: { $ne: true } }
            ]
        }).sort({ _id: "descending" }).exec()

        // if (booking.length === 0) {
        //     return res.status(404).json({
        //         message: 'No bookings found',
        //     });
        // }
        // return res.status(200).json({
        //     booking
        // })
        if (booking.length === 0) {
            return res.status(404).json({
                message: 'No bookings found',
            });
        }
        if (!booking?.length) {
            return res.status(400).json({ message: "No Booking found" })
        }

        const propertyIds = booking.map(property => property?.propertyid);
        // const customerIds = booking.map(customer => customer?.customerid);

        try {
            const properties = await AddProperty.find({ _id: { $in: propertyIds } });
            const buildingIds = properties.map(property => property?.buildingid);
            const projectnameId = properties.map(property => property?.projectnameid);
            const communityId = properties.map(property => property?.communityid);
            const subtypeId = properties.map(property => property?.subtypeid);
            const customerId = properties.map(property => property?.customerid);

            const buildings = await BuildingName.find({ _id: { $in: buildingIds } });
            const projectnames = await ProjectName.find({ _id: { $in: projectnameId } });
            const communityData = await CommunityName.find({ _id: { $in: communityId } });
            const subtypeData = await SubType.find({ _id: { $in: subtypeId } });
            const userData = await User.find({ _id: { $in: customerId } });
            // const customerData = await User.find({ _id: { $in: customerIds } });
            const customerIds = allbooking.map(customer => customer?.email).filter(Boolean);
            const customerEmails = await User.find({ email: { $in: customerIds } });


            const bookingWithAllData = booking.map(propertyData => {
                const propertyObject = propertyData.toObject();
                const { _id, bookingnumber, cancelled, propertyid, customerid, ownerid, guestname, checkintype, nationality, passportnumber, mobilenumber, email, noadults, nochildern, totaloccupants, confirmationcode, reservationdate, bookingagent, modepayment, checkindate, checkoutdate, nonight, tourismfee, securitydeposit, totalpayout, hostservicefee, totalcollectall, cleaningfee, totaladditionalfee, roomrentamount, guestservicefee, guestmanagementfee, vatperbookingrent, vatperservicefee, vatpercleaningfee, vatperguestmanagementfee, vatperhostmanagementfee, totalvatper, totalroomrent, hostmanagementfee, roomrenthostpayable, auditdiff, createdAt, guestservicepercent, createdBy, updatedBy, softdelete, dtcm_uploaded, passortid_collected, sign_verified, smartcode_provided, payment_collected, payment_received, other_passports } = propertyObject;
                const updatedBooking = { _id, bookingnumber, cancelled, propertyid, customerid, ownerid, guestname, checkintype, nationality, passportnumber, mobilenumber, email, noadults, nochildern, totaloccupants, confirmationcode, reservationdate, bookingagent, modepayment, checkindate, checkoutdate, nonight, tourismfee, securitydeposit, totalpayout, hostservicefee, totalcollectall, cleaningfee, totaladditionalfee, roomrentamount, guestservicefee, guestmanagementfee, vatperbookingrent, vatperservicefee, vatpercleaningfee, vatperguestmanagementfee, vatperhostmanagementfee, totalvatper, totalroomrent, hostmanagementfee, roomrenthostpayable, auditdiff, createdAt, guestservicepercent, createdBy, updatedBy, softdelete, dtcm_uploaded, passortid_collected, sign_verified, smartcode_provided, payment_collected, payment_received, other_passports };
                if (propertyid) {
                    const property = properties.find(property => String(property._id) === String(propertyData.propertyid));
                    if (property) {
                        updatedBooking.unitnumber = property.unitnumber;
                        updatedBooking.floor = property.floor;

                        const building = buildings.find(building => String(building._id) === String(property.buildingid));
                        if (building) {
                            updatedBooking.building_name = building.buildingname;
                        }

                        const projectname = projectnames.find(project => String(project._id) === String(property.projectnameid));
                        if (projectname) {
                            updatedBooking.project_name = projectname.projectName;
                        }

                        const community = communityData.find(community => String(community._id) === String(property.communityid));
                        if (community) {
                            updatedBooking.community_name = community.communityname;
                        }

                        const subtype = subtypeData.find(subtype => String(subtype._id) === String(property.subtypeid));
                        if (subtype) {
                            updatedBooking.subtype_name = subtype.subtypename;
                        }

                        const user = userData.find(userData => String(userData._id) === String(property.customerid));
                        if (user) {
                            updatedBooking.owner_name = user?.firstname + " " + user?.lastname;
                        }
                    }
                }
                // if (customertype === "New Customer") {
                //     const user = customerEmails.find(customer => customer.email === email);
                //     if (user) {
                //         // console.log(user?._id, 'user');
                //         updatedBooking.guest_id = user?._id;
                //     }
                // }

                const user = customerEmails.find(customer => customer.email === email);
                if (user) {
                    // console.log(user?._id, 'user');
                    updatedBooking.guest_id = user?._id;
                    updatedBooking.guestname = (user?.firstname) + " " + (user?.lastname ? user?.lastname : "");
                    updatedBooking.nationality = user?.passportno;
                    updatedBooking.passportnumber = user?.passportidno;
                    updatedBooking.mobilenumber = user?.whatsappno;
                }

                // if(customerData) {
                //     const user = customerData.find(user => String(user._id) === String(propertyData.customerid));
                //     if(user) {
                //         updatedBooking.guest_name = user?.firstname + " " + user?.lastname;
                //     }
                // }

                return updatedBooking;
            });

            const formattedDate = bookingWithAllData?.map(bookingDateSet => {
                const additionalDate = moment().tz('Asia/Dubai').add(1, 'day').format('DD MMM YYYY');
                const formattedreservationdate = bookingDateSet.reservationdate ? moment.tz(bookingDateSet.reservationdate, 'Asia/Karachi').format('DD MMM YYYY') : '';
                const formattedcheckindate = bookingDateSet.checkindate ? moment.tz(bookingDateSet.checkindate, 'Asia/Karachi').format('DD MMM YYYY') : ''
                const formattedcheckoutdate = bookingDateSet.checkoutdate ? moment.tz(bookingDateSet.checkoutdate, 'Asia/Karachi').format('DD MMM YYYY') : ''
                // const formattedCreatedAt = bookingDateSet.createdAt ? new Date(bookingDateSet.createdAt).toDateString() : ''
                // const formattedreservationdate = bookingDateSet.reservationdate ? moment(bookingDateSet.reservationdate).tz('Asia/Dubai').format('DD MMM YYYY') : '';
                // const formattedcheckindate = bookingDateSet.checkindate ? moment(bookingDateSet.checkindate).tz('Asia/Dubai').format('DD MMM YYYY') : '';
                // const formattedcheckoutdate = bookingDateSet.checkoutdate ? moment(bookingDateSet.checkoutdate).tz('Asia/Dubai').format('DD MMM YYYY') : '';
                // const formattedreservationdate = bookingDateSet.reservationdate ? moment(bookingDateSet.reservationdate).tz('Asia/Dubai').subtract(1, 'day').format('DD MMM YYYY') : '';
                // const formattedcheckindate = bookingDateSet.checkindate ? moment(bookingDateSet.checkindate).tz('Asia/Dubai').add(1, 'day').format('DD MMM YYYY') : '';
                // const formattedcheckoutdate = bookingDateSet.checkoutdate ? moment(bookingDateSet.checkoutdate).tz('Asia/Dubai').add(1, 'day').format('DD MMM YYYY') : '';
                // const formattedCreatedAt = bookingDateSet.createdAt ? moment(bookingDateSet.createdAt).tz('Asia/Dubai').format('DD MMM YYYY') : '';
                // const formattedupdatedAt = bookingDateSet.updatedAt ? moment(bookingDateSet.updatedAt).tz('Asia/Dubai').format('DD MMM YYYY') : '';
                // const formattedreservationdate = bookingDateSet.reservationdate ? moment.tz(bookingDateSet.reservationdate, 'Asia/Dubai').format('DD MMM YYYY') : '';
                // const formattedcheckindate = bookingDateSet.checkindate ? moment.tz(bookingDateSet.checkindate, 'Asia/Dubai').format('DD MMM YYYY') : '';
                // const formattedcheckoutdate = bookingDateSet.checkoutdate ? moment.tz(bookingDateSet.checkoutdate, 'Asia/Dubai').format('DD MMM YYYY') : '';
                const formattedCreatedAt = bookingDateSet.createdAt ? moment.tz(bookingDateSet.createdAt, 'Asia/Dubai').format('DD MMM YYYY') : '';
                const formattedupdatedAt = bookingDateSet.updatedAt ? moment.tz(bookingDateSet.updatedAt, 'Asia/Dubai').format('DD MMM YYYY') : '';
                // const bookingDateSet_age = bookingDateSet.datebirth ? calculateAge(bookingDateSet.datebirth) : ""
                return { ...bookingDateSet, reservation_date: formattedreservationdate, checkout_date: formattedcheckoutdate, Created_At: formattedCreatedAt, checkin_date: formattedcheckindate, updated_At: formattedupdatedAt, createdAt: formattedCreatedAt, updatedAt: formattedupdatedAt, reservationdate: formattedreservationdate, checkindate: formattedcheckindate, checkoutdate: formattedcheckoutdate }
            })
            res.json(formattedDate);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Server Error" });
        }
    } catch (error) {
        res.status(400).json({
            err: `Error getting data: ${err.message}`
        })
    }
})

const getBookingYearly = asyncHandler(async (req, res) => {
    const year = parseInt(req.query.year);
    const fromDate = new Date(`${year}-01-01`) // convert to Date object
    const toDate = new Date(`${year}-12-31`) // use hardcoded date for now
    try {
        const booking = await Booking.find({
            "$or": [{
                checkindate: { $gte: fromDate, $lte: toDate },
                checkoutdate: { $gte: fromDate, $lte: toDate }
            },
            { softdelete: { $ne: true } } // Filter out softdeleted bookings
            ],

        }).sort({ _id: "descending" }).exec() // execute the query
        if (booking.length === 0) {
            return res.status(404).json({
                message: 'No bookings found',
            });
        }
        return res.status(200).json({
            booking
        })
    } catch (err) {
        res.status(400).json({
            err: `Error getting data: ${err.message}`
        })
    }
})

// Booking.updateMany(
//     { reservationdate: { $type: "Date" } },
//     { $set: { reservationdate: { $dateString: "reservationdate" } } },
//     (err, result) => {
//         if (err) throw err;
//         console.log(`${result.modifiedCount} documents updated`);
//     }
// );

// Booking.collection.updateMany(
//     { reservationdate: { $type: "string" } },
//     { $set: { reservationdate: { $dateFromString: { dateString: "$reservationdate" } } } }
// )

const getSearchBookingByCustomer = asyncHandler(async (req, res) => {
    const page = parseInt(req.query.page || 0)
    const perPage = req.query.perPage || 10
    const sort = req.query.sort
    try {
        const count = await Booking.countDocuments()
        const booking = await Booking.find({
            "$or": [
                { "confirmationcode": { $regex: req.params.key, $options: 'i' } },
                { "unitnumber": { $regex: req.params.key, $options: 'i' } },
                { "bookingnumber": { $regex: req.params.key, $options: 'i' } },
                { "guestname": { $regex: req.params.key, $options: 'i' } },
                { "buildingname": { $regex: req.params.key, $options: 'i' } },
                { "email": { $regex: req.params.key, $options: 'i' } },
                { "bookingagent": { $regex: req.params.key, $options: 'i' } },
                { "propertyid": { $regex: req.params.key, $options: 'i' } },
            ]
        })
            .find(({ customerid: req.query.customerid }))
            .sort({ _id: "descending" })
            .skip(perPage * page)
            .limit(parseInt(perPage))
        return res.status(200).json({
            count: Math.ceil(booking / perPage),
            booking
        })
    } catch (err) {
        res.status(400).json({
            err: `Error getting data: ${err.message}`
        })
    }
})

const getSearchBooking = asyncHandler(async (req, res) => {
    console.log(req.query.propertyid, "req.query.propertyid");
    const page = parseInt(req.query.page || 0)
    const perPage = req.query.perPage || 10
    const sort = req.query.sort
    try {
        const count = await Booking.countDocuments()
        const booking = await Booking.find({
            "$or": [
                { "confirmationcode": { $regex: req.params.key, $options: 'i' } },
                { "unitnumber": { $regex: req.params.key, $options: 'i' } },
                { "bookingnumber": { $regex: req.params.key, $options: 'i' } },
                { "guestname": { $regex: req.params.key, $options: 'i' } },
                { "buildingname": { $regex: req.params.key, $options: 'i' } },
                { "email": { $regex: req.params.key, $options: 'i' } },
                { "bookingagent": { $regex: req.params.key, $options: 'i' } },
                { "propertyid": { $regex: req.params.key, $options: 'i' } },
            ]
        })
            .find(({ propertyid: req.query.propertyid }))
            .sort({ _id: "descending" })
            .skip(perPage * page)
            .limit(parseInt(perPage))
        return res.status(200).json({
            count: Math.ceil(booking / perPage),
            booking
        })
    } catch (err) {
        res.status(400).json({
            err: `Error getting data: ${err.message}`
        })
    }
})

const getBookingById = asyncHandler(async (req, res) => {
    // console.log(req.params.id, "req.params.id")
    const bookingById = await Booking.findById(req.params.id)
    if (!bookingById) {
        return res.status(400).json({ message: "No Booking found" })
    }
    const formattedreservationdate = bookingById.reservationdate ? moment.tz(bookingById.reservationdate, 'Asia/Karachi').format('DD MMM YYYY') : '';
    const formattedcheckindate = bookingById.checkindate ? moment.tz(bookingById.checkindate, 'Asia/Karachi').format('DD MMM YYYY') : '';
    const formattedcheckoutdate = bookingById.checkoutdate ? moment.tz(bookingById.checkoutdate, 'Asia/Karachi').format('DD MMM YYYY') : '';

    if (bookingById && bookingById?.customertype === "New Customer") {
        // console.log("New Customer")
        try {
            const user = await User.findOne({ email: bookingById?.email });
            if (user) {
                // console.log("user")
                const response = {
                    ...bookingById.toObject(), // Convert Mongoose document to plain JavaScript object
                    reservationdate: formattedreservationdate,
                    checkindate: formattedcheckindate,
                    checkoutdate: formattedcheckoutdate,
                    customerid: user?._id,
                    customertype: "Existing Customer",
                    new_customer: true
                };

                return res.json(response)
            } else if (!user) {
                // console.log("!user")
                const response = {
                    ...bookingById.toObject(), // Convert Mongoose document to plain JavaScript object
                    reservationdate: formattedreservationdate,
                    checkindate: formattedcheckindate,
                    checkoutdate: formattedcheckoutdate
                };

                return res.json(response)
            }
        } catch (error) {
            console.error(error);
            // Handle the error (e.g., log it, send an error response, etc.)
        }
    } else if (bookingById && bookingById?.customertype === "Existing Customer") {
        // console.log("Existing Customer")
        const response = {
            ...bookingById.toObject(), // Convert Mongoose document to plain JavaScript object
            reservationdate: formattedreservationdate,
            checkindate: formattedcheckindate,
            checkoutdate: formattedcheckoutdate
        };

        return res.json(response)
    }

})

// const getBookingByPropertyId = asyncHandler(async (req, res) => {
//     const bookingById = await Booking.find({
//         "$or": [
//             { "propertyid": { $regex: req.params.key, $options: 'i' } },
//         ]
//     })
//     if (!bookingById) {
//         return res.status(400).json({ message: "No Booking found" })
//     }
//     return res.json(bookingById)
// })

const getBookingByPropertyId = asyncHandler(async (req, res) => {
    // const { propertyId } = req.params;
    // console.log(propertyId, 'propertyId')
    // console.log(req.params, 'req.params')
    const bookingById = await Booking.find({
        propertyid: req.params.key
    });

    if (bookingById.length === 0) {
        return res.status(400).json({ message: "No Booking found" });
    }

    return res.json(bookingById);
});

const sendEmailPDF = asyncHandler(async (req, res) => {
    let { bookingid, email } = req.body
    const bookingById = await Booking.findById(bookingid)
    if (!bookingById) {
        return res.status(400).json({ message: "No Booking found" })
    }
    const properties = await AddProperty.find({ _id: { $in: bookingById?.propertyid } });
    const property = properties.find(property => property._id.toHexString() === bookingById?.propertyid?.toHexString());
    // console.log(property, "property")

    if (bookingById?.propertyid && property) {
        let formattedreservationdate = bookingById.reservationdate ? moment.tz(bookingById.reservationdate, 'Asia/Karachi').format('DD MMM YYYY') : '';
        let formattedcheckindate = bookingById.checkindate ? moment.tz(bookingById.checkindate, 'Asia/Karachi').format('DD MMM YYYY') : '';
        let formattedcheckoutdate = bookingById.checkoutdate ? moment.tz(bookingById.checkoutdate, 'Asia/Karachi').format('DD MMM YYYY') : '';

        // console.log('bookingById?.propertyid conditoin me data mil gya')
        //    Open from here
        try {
            // const userData = await User.find({ _id: { $in: property?.customerid } });
            // const user = userData.find(owner => owner._id.toHexString() === property?.customerid?.toHexString());
            const htmlContent = `
            <html>

            <head>
                <title>Invoice</title>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
                <style>
                    /* Add your custom CSS styles here */
                    body {
                        font-family: 'Arial', sans-serif;
                        padding: 40px;
                    }

                    .invoice-table {
                        width: 100%;
                        border-collapse: collapse;
                        margin-top: 40px;
                    }

                    .invoice-table th,
                    .invoice-table td {
                        border: 1px solid #ccc;
                        padding: 8px;
                        text-align: center;
                    }

                    .flex {
                        display: flex;
                        column-gap: 25px;
                    }

                    .header {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                    }

                    .header img {
                        width: 150px;
                    }

                    .second-section {
                        margin-top: 40px;
                        display: flex;
                        justify-content: space-between;
                        align-items: flex-start;
                    }

                    p {
                        margin-bottom: 0;
                        font-size: 14px;
                    }

                    .font-bold {
                        font-weight: bold;
                    }

                    .guest-section {
                        margin-top: 20px;
                    }
                </style>
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet">
            </head>

            <body>
                <div class="header">
                    <img src="https://srp.ai/assets/images/rare-logo.png" alt="rare-logo">
                    <!-- <h1>Invoice</h1> -->
                </div>
                <div class="second-section">
                    <div>
                        <h4>PROPERTY DETAILS</h4>

                        <p>Unit no: <span class="font-bold">${property?.unitnumber ? property?.unitnumber : "Not Available"}</span></p>
                        <p>Community Name: <span class="font-bold">${property?.communityname ? property?.communityname : "Not Available"}</span></p>
                        <p>Project Name: <span class="font-bold">${property?.projectname ? property?.projectname : "Not Available"}</span></p>
                        <p>Building Name: <span class="font-bold">${property?.buildingname ? property?.buildingname : "Not Available"}</span></p>
                        <p>Floor: <span class="font-bold">${property?.floor ? property?.floor : "Not Available"}</span></p>
                        <div class="guest-section">
                        <h4>GUEST DETAILS</h4>

                        <p>Guest Name: <span class="font-bold">${bookingById?.guestname ? bookingById?.guestname : "Not Available"}</span></p>
                        <p>Email: <span class="font-bold">${bookingById?.email ? bookingById?.email : "Not Available"}</span></p>
                        <p>Passport No: <span class="font-bold">${bookingById?.passportnumber ? bookingById?.passportnumber : "Not Available"}</span></p>
                        <p>Mobile Number: <span class="font-bold">${bookingById?.mobilenumber ? bookingById?.mobilenumber : "Not Available"}</span></p>
                        <p>Nationality: <span class="font-bold">${bookingById?.nationality ? bookingById?.nationality : "Not Available"}</span></p>
                        <p>No. Of Occupants: <span class="font-bold">${bookingById?.totaloccupants ? bookingById?.totaloccupants : "Not Available"}</span></p>
                    </div>    
                    </div>
                    <div>
                        <h4>RESERVATION DETAILS</h4>

                        <p>Confirmation Code/ Ref: <span class="font-bold">${bookingById?.confirmationcode ? bookingById?.confirmationcode : "Not Available"}</span></p>
                        <p>Booking Agent: <span class="font-bold">${bookingById?.bookingagent ? bookingById?.bookingagent : "Not Available"}</span></p>
                        <p>Mode Of Payment: <span class="font-bold">${bookingById?.modepayment ? bookingById?.modepayment : "Not Available"}</span></p>
                        <p>Reservation Date: <span class="font-bold">${bookingById?.reservationdate ? new Date(formattedreservationdate).toDateString() : "Not Available"}</span></p>
                        <p>Check-In Date: <span class="font-bold">${bookingById?.checkindate ? new Date(formattedcheckindate).toDateString() : "Not Available"}</span></p>
                        <p>Check-Out Date: <span class="font-bold">${bookingById?.checkoutdate ? new Date(formattedcheckoutdate).toDateString() : "Not Available"}</span></p>
                        <p>No. Of Nights: <span class="font-bold">${bookingById?.nonight ? bookingById?.nonight : "Not Available"}</span></p>
                        <p>Tourism Fee /Unit: <span class="font-bold">${bookingById?.tourismfee ? bookingById?.tourismfee : "Not Available"}</span></p>
                    </div>
                </div>
                <table class="invoice-table">
                    <tr>
                        <th>RESERVATION PAYOUT DETAILS</th>
                        <th>Amount</th>
                    </tr>
                    <tr>
                        <td>Security Deposit Amount</td>
                        <td>${bookingById?.securitydeposit ? bookingById?.securitydeposit.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " AED" : "0.00"}</td>
                    </tr>
                    <tr>
                        <td class="font-bold">TOTAL PAYOUT</td>
                        <td class="font-bold">${bookingById?.totalpayout ? bookingById?.totalpayout.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " AED" : "0.00"}</td>
                    </tr>
                    <tr>
                        <td>Host Service Fee (Portal)</td>
                        <td>${bookingById?.hostservicefee ? bookingById?.hostservicefee.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " AED" : "0.00"}</td>
                    </tr>
                    <tr>
                        <td class="font-bold">Total Collection All Incl</td>
                        <td class="font-bold">${bookingById?.totalcollectall ? bookingById?.totalcollectall.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " AED" : "0.00"}</td>
                    </tr>
                    <tr>
                        <td>Cleaning Fee</td>
                        <td>${bookingById?.cleaningfee ? bookingById?.cleaningfee.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " AED" : "0.00"}</td>
                    </tr>
                    <tr>
                        <td class="font-bold">TOTAL ADDITIONAL FEE</td>
                        <td class="font-bold">${bookingById?.totaladditionalfee ? bookingById?.totaladditionalfee.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " AED" : "0.00"}</td>
                    </tr>
                    <tr>
                        <td class="font-bold">Total Room Rent + GM+VAT</td>
                        <td class="font-bold">${bookingById?.totalroomrent ? bookingById?.totalroomrent.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " AED" : "0.00"}</td>
                    </tr>
                    <tr>
                        <td>Room Rent Amount: ( Incl. Portal Fee)</td>
                        <td>${bookingById?.roomrentamount ? bookingById?.roomrentamount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " AED" : "0.00"}</td>
                    </tr>
                    <tr>
                        <td>Room Rent Amount: (Host Payable)</td>
                        <td>${bookingById?.roomrenthostpayable ? parseFloat(bookingById?.roomrenthostpayable).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " AED" : "0.00"}</td>
                    </tr>
                    <tr>
                        <td>Guest Service Fee</td>
                        <td>${bookingById?.guestservicefee ? bookingById?.guestservicefee.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " AED" : "0.00"}</td>
                    </tr>
                    <tr>
                        <td>Guest Management Fee</td>
                        <td>${bookingById?.guestmanagementfee ? bookingById?.guestmanagementfee.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " AED" : "0.00"}</td>
                    </tr>
                    <tr>
                        <td>Host Management Fee</td>
                        <td>${bookingById?.hostmanagementfee ? bookingById?.hostmanagementfee.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " AED" : "0.00"}</td>
                    </tr>
                    <tr>
                        <td class="font-bold">Total Room Rent Amount (Incl. GM FEE)</td>
                        <td class="font-bold">${bookingById?.guestservicefee && bookingById?.guestservicefee > 0 ?
                    (parseFloat(bookingById?.roomrentamount ? bookingById?.roomrentamount : 0) + parseFloat(bookingById?.guestmanagementfee ? bookingById?.guestmanagementfee : 0) + parseFloat(bookingById?.guestservicefee ? bookingById?.guestservicefee : 0)).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " AED" :
                    (parseFloat(bookingById?.roomrentamount ? bookingById?.roomrentamount : 0) + parseFloat(bookingById?.guestmanagementfee ? bookingById?.guestmanagementfee : 0)).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " AED"
                }</td>
                    </tr>
                    <tr>
                        <td>VAT 5% On Booking Room Rent</td>
                        <td>${bookingById?.vatperbookingrent ? bookingById?.vatperbookingrent.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " AED" : "0.00"}</td>
                    </tr>
                    <tr>
                        <td>VAT 5% On Service Fee</td>
                        <td>${bookingById?.vatperservicefee ? bookingById?.vatperservicefee.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " AED" : "0.00"}</td>
                    </tr>
                    <tr>
                        <td>VAT 5% On Cleaning Fee</td>
                        <td>${bookingById?.vatpercleaningfee ? bookingById?.vatpercleaningfee.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " AED" : "0.00"}</td>
                    </tr>
                    <tr>
                        <td>VAT 5% On Guest Management</td>
                        <td>${bookingById?.vatperguestmanagementfee ? bookingById?.vatperguestmanagementfee.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " AED" : "0.00"}</td>
                    </tr>
                    <tr>
                        <td>VAT 5% On Host Management Fee</td>
                        <td>${bookingById?.vatperhostmanagementfee ? bookingById?.vatperhostmanagementfee.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " AED" : "0.00"}</td>
                    </tr>
                    <tr>
                        <td class="font-bold">Total Payout Vat</td>
                        <td class="font-bold">${bookingById?.totalvatper ? bookingById?.totalvatper.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " AED" : "0.00"}</td>
                    </tr>
                    <tr>
                        <td class="font-bold">Total Room Rent + GM+VAT</td>
                        <td class="font-bold">${bookingById?.totalroomrent ? bookingById?.totalroomrent.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " AED" : "0.00"}</td>
                    </tr>
                    <tr>
                        <td>Audit Difference</td>
                        <td>0.00</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td class="font-bold">Total Collection All Incl</td>
                        <td class="font-bold">${bookingById?.totalcollectall ? bookingById?.totalcollectall.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " AED" : "0.00"}</td>
                    </tr>
                </table>
            </body>

            </html>        `;

            // const htmlContent = `
            // <html>

            // <head>
            //     <title>Invoice</title>
            // </head>

            // <body>
            //     <div class="">
            //         hello world
            //     </div>
            // </body>

            // </html>        `;

            // const pdfFilePath = 'public/bookings-pdf/booking-detail.pdf'; // Define the file path
            const pdfDirectory = 'public/bookings-pdf/';
            const pdfFilePath = path.join(pdfDirectory, 'booking-detail.pdf'); // Define the file path

            // Ensure the directory exists, create it if it doesn't
            if (!fs.existsSync(pdfDirectory)) {
                fs.mkdirSync(pdfDirectory, { recursive: true });
            }

            // console.log('public/bookings-pdf/ me chala gya')
            // Generate PDF from HTML content
            // const browser = await puppeteer.launch();
            const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-setuid-sandbox'] }); // Specify headless mode as "new"
            // console.log('browser hogya')
            if (!browser) {
                console.error('Failed to launch browser.');
                return;
            }
            // console.log('browser hogya')
            await new Promise(resolve => setTimeout(resolve, 5000));
            const page = await browser.newPage();
            // console.log('Before creating new page');
            // console.log('After creating new page');
            // console.log('page hogya')
            await page.setContent(htmlContent);
            // console.log('page2 hogya hogya')
            await page.pdf({ path: pdfFilePath, format: 'A4' });
            // console.log('page pdf hogya hogya')
            await browser.close();
            // console.log('closd hogya')

            // console.log("file creatiion ka kam hogya")

            // Read the generated PDF
            return res.status(200).json(pdfFilePath)
        } catch (error) {
            console.log('catch me aya hai')
            console.log(error, "error")
        }
    }

})

const createBooking = asyncHandler(async (req, res) => {
    let { propertyid, unitnumber, buildingname, floor, buildingnumber, communityname, city, customerid, guestname, passportnumber, nationality, mobilenumber, email, checkintype, nooccupants, noadults, totaloccupants, nochildern, confirmationcode, bookingagent, checkindate, nonight, reservationdate, modepayment, checkoutdate, tourismfee, totalpayout, securitydeposit, hostservicefee, cleaningfee, tourismfeetillmonth, tourismfeeacceleratedmonth, totaladditionalfee, totalcollectall, totalroomrent, roomrentamount, guestservicefee, guestmanagementfee, totalguestservices, vatperbookingrent, vatperservicefee, vatpercleaningfee, vatperguestmanagementfee, totalvatper, totalcollectallincl, totalroomrentvat, auditdiff, customertype, passportpdf, ownerid, guestpercentage, hostmanagementfee, vatperhostmanagementfee, firstdays, moremonths, cancelled, hostmanagementpercent, roomrenthostpayable, guestservicepercent, createdBy, updatedBy, softdelete, dtcm_uploaded, passortid_collected, sign_verified, smartcode_provided, payment_collected, payment_received, other_passports } = req.body
    if (!propertyid || !checkindate || !checkoutdate) {
        return res.status(400).json({ message: 'All fields are required' })
    }
    // let duplicate = await Booking.findOne({ unitnumber }).lean().exec()

    // if (duplicate) {
    //     return res.status(409).json({ message: "Duplicate unitnumber" })
    // }

    // Check for overlapping bookings
    const checkoutDateObject = new Date(checkindate);
    const checkInDateObject = new Date(checkoutdate);
    const oneDayBeforeCheckout = new Date(checkoutDateObject.getTime() + (24 * 60 * 60 * 1000));
    const oneDayBeforeCheckIN = new Date(checkInDateObject.getTime() - (24 * 60 * 60 * 1000));

    const existingBooking = await Booking.findOne({
        propertyid,
        cancelled: false,
        softdelete: false,
        $or: [
            {
                checkindate: {
                    $lt: checkoutdate,
                },
                checkoutdate: {
                    $gte: oneDayBeforeCheckout,
                },
            },
        ],
    });

    // If a duplicate booking already exists, return an error response
    if (existingBooking) {
        // console.log(existingBooking)
        return res.status(409).json({ message: 'Property is already booked for these dates' });
    }


    let parsedFirstDays = [];
    if (firstdays?.length) {
        parsedFirstDays = JSON.parse(firstdays);
    }
    firstdays = parsedFirstDays

    let parsedMoreMonths = [];
    if (moremonths?.length) {
        parsedMoreMonths = JSON.parse(moremonths);
    }
    moremonths = parsedMoreMonths

    const bookingObject = { propertyid, unitnumber, buildingname, floor, buildingnumber, communityname, city, customerid, guestname, passportnumber, nationality, mobilenumber, email, checkintype, nooccupants, noadults, totaloccupants, nochildern, confirmationcode, bookingagent, checkindate, nonight, reservationdate, modepayment, checkoutdate, tourismfee, totalpayout, securitydeposit, hostservicefee, cleaningfee, tourismfeetillmonth, tourismfeeacceleratedmonth, totaladditionalfee, totalcollectall, totalroomrent, roomrentamount, guestservicefee, guestmanagementfee, totalguestservices, vatperbookingrent, vatperservicefee, vatpercleaningfee, vatperguestmanagementfee, totalvatper, totalcollectallincl, totalroomrentvat, auditdiff, customertype, passportpdf, ownerid, guestpercentage, hostmanagementfee, vatperhostmanagementfee, parsedFirstDays, parsedMoreMonths, firstdays, moremonths, cancelled, hostmanagementpercent, roomrenthostpayable, guestservicepercent, createdBy, updatedBy, softdelete, dtcm_uploaded, passortid_collected, sign_verified, smartcode_provided, payment_collected, payment_received, other_passports }
    const bookingProperty = await Booking.create(bookingObject)

    const currentYear = new Date().getFullYear()
    const lastDigit = currentYear.toString().split(0)
    const generateCode = (new Date()).getTime().toString(36)
    let bookingNumber = "BN-" + lastDigit[1] + "-" + generateCode
    // console.log(bookingNumber, "bookingNumber")
    await bookingProperty.updateOne({ bookingnumber: bookingNumber })

    if (bookingProperty?.propertyid) {
        // console.log(bookingProperty?.propertyid, 'bookingProperty?.propertyid')
        // const properties = await AddProperty.find({ _id: { $in: bookingProperty?.propertyid } });
        const properties = await AddProperty.find({ _id: { $in: bookingProperty?.propertyid } });
        const property = properties.find(property => property._id.toHexString() === bookingProperty?.propertyid?.toHexString());
        const formattedreservationdate = bookingProperty.reservationdate ? moment.tz(bookingProperty.reservationdate, 'Asia/Karachi').format('DD MMM YYYY') : '';
        const formattedcheckindate = bookingProperty.checkindate ? moment.tz(bookingProperty.checkindate, 'Asia/Karachi').format('DD MMM YYYY') : ''
        const formattedcheckoutdate = bookingProperty.checkoutdate ? moment.tz(bookingProperty.checkoutdate, 'Asia/Karachi').format('DD MMM YYYY') : ''

        const response = {
            ...bookingProperty.toObject(),
            reservationdate: formattedreservationdate,
            checkindate: formattedcheckindate,
            checkoutdate: formattedcheckoutdate,
        };

        const url = process.env.BASE_URL === "http://dev-rare.srp.ai/" ? "http://dev-rare.srp.ai/update-booking/" + bookingProperty?._id : "http://stg.srp.ai/update-booking/" + bookingProperty?._id
        // console.log(owner_email, "owner_email")
        let contentPara = `This is to inform you about an upcoming booking for one of our holiday homes. Details have been attached.  Please ensure that the necessary arrangements are made by the maintenance department.`
        if (url) {
            let contentHeading = `Dear Accounts Department,`
            await bookingCreateUpdateEmail(`Booking Updated Recently "${bookingProperty?.confirmationcode}"`, contentHeading, contentPara, url, response, property)
            // await bookingCreateUpdateEmail(`Booking Updated Recently "${bookingProperty?.confirmationcode}"`, contentHeading, contentPara, url, {bookingProperty}, property)
            console.log("Email send")
            // return res.status(200).json({ message: `Property ${updatedProperty.unitnumber} updated` })
        }
    }
    return res.status(200).json({ message: `New Booking` })

})

const updateBooking = asyncHandler(async (req, res) => {
    // console.log(req.body)
    const { _id, propertyid, unitnumber, buildingname, floor, buildingnumber, communityname, city, customerid, guestname, passportnumber, nationality, mobilenumber, email, checkintype, nooccupants, noadults, totaloccupants, nochildern, confirmationcode, bookingagent, checkindate, nonight, reservationdate, modepayment, checkoutdate, tourismfee, totalpayout, securitydeposit, hostservicefee, cleaningfee, tourismfeetillmonth, tourismfeeacceleratedmonth, totaladditionalfee, totalcollectall, totalroomrent, roomrentamount, guestservicefee, guestmanagementfee, totalguestservices, vatperbookingrent, vatperservicefee, vatpercleaningfee, vatperguestmanagementfee, totalvatper, totalcollectallincl, totalroomrentvat, auditdiff, customertype, passportpdf, ownerid, guestpercentage, hostmanagementfee, vatperhostmanagementfee, firstdays, moremonths, cancelled, hostmanagementpercent, roomrenthostpayable, guestservicepercent, createdBy, updatedBy, softdelete, dtcm_uploaded, passortid_collected, sign_verified, smartcode_provided, payment_collected, payment_received, other_passports } = req.body

    if (!_id) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    const bookingProperty = await Booking.findById(_id).exec()
    // console.log(bookingProperty, 'bookingProperty')
    if (!bookingProperty) {
        return res.status(400).json({ message: 'Booking not found' })
    }

    // const duplicate = await Booking.findOne({ unitnumber }).lean().exec()
    // if (duplicate && duplicate?._id.toString() !== _id) {
    //     return res.status(400).json({ message: 'Duplicate Property' })
    // }

    // console.log(firstdays, "firstdays")

    // console.log(other_passports, "other_passports")

    let parsedFirstDays = [];
    if (firstdays?.length) {
        parsedFirstDays = JSON.parse(firstdays);
    }
    let parsedMoreMonths = [];
    if (moremonths?.length) {
        parsedMoreMonths = JSON.parse(moremonths);
    }

    // bookingProperty.propertname = propertname
    bookingProperty.propertyid = propertyid
    bookingProperty.unitnumber = unitnumber
    bookingProperty.buildingname = buildingname
    bookingProperty.floor = floor
    bookingProperty.buildingnumber = buildingnumber
    bookingProperty.communityname = communityname
    bookingProperty.city = city
    bookingProperty.customerid = customerid
    bookingProperty.guestname = guestname
    bookingProperty.passportnumber = passportnumber
    bookingProperty.nationality = nationality
    bookingProperty.mobilenumber = mobilenumber
    bookingProperty.email = email
    bookingProperty.checkintype = checkintype
    bookingProperty.nooccupants = nooccupants
    bookingProperty.noadults = noadults
    bookingProperty.nochildern = nochildern
    bookingProperty.totaloccupants = totaloccupants
    bookingProperty.confirmationcode = confirmationcode
    bookingProperty.bookingagent = bookingagent
    bookingProperty.checkindate = checkindate
    bookingProperty.nonight = nonight
    bookingProperty.reservationdate = reservationdate
    bookingProperty.modepayment = modepayment
    bookingProperty.checkoutdate = checkoutdate
    bookingProperty.tourismfee = tourismfee
    bookingProperty.totalpayout = totalpayout
    bookingProperty.securitydeposit = securitydeposit
    bookingProperty.hostservicefee = hostservicefee
    bookingProperty.cleaningfee = cleaningfee
    bookingProperty.tourismfeetillmonth = tourismfeetillmonth
    bookingProperty.tourismfeeacceleratedmonth = tourismfeeacceleratedmonth
    bookingProperty.totaladditionalfee = totaladditionalfee
    bookingProperty.totalcollectall = totalcollectall
    bookingProperty.totalroomrent = totalroomrent
    bookingProperty.roomrentamount = roomrentamount
    bookingProperty.guestservicefee = guestservicefee
    bookingProperty.guestmanagementfee = guestmanagementfee
    bookingProperty.totalguestservices = totalguestservices
    bookingProperty.vatperbookingrent = vatperbookingrent
    bookingProperty.vatperservicefee = vatperservicefee
    bookingProperty.vatpercleaningfee = vatpercleaningfee
    bookingProperty.vatperguestmanagementfee = vatperguestmanagementfee
    bookingProperty.totalvatper = totalvatper
    bookingProperty.totalroomrentvat = totalroomrentvat
    bookingProperty.auditdiff = auditdiff
    bookingProperty.totalcollectallincl = totalcollectallincl
    bookingProperty.customertype = customertype
    bookingProperty.passportpdf = passportpdf
    bookingProperty.ownerid = ownerid
    bookingProperty.guestpercentage = guestpercentage
    bookingProperty.hostmanagementfee = hostmanagementfee
    bookingProperty.vatperhostmanagementfee = vatperhostmanagementfee
    bookingProperty.firstdays = parsedFirstDays
    bookingProperty.moremonths = parsedMoreMonths
    bookingProperty.cancelled = cancelled
    bookingProperty.hostmanagementpercent = hostmanagementpercent
    bookingProperty.roomrenthostpayable = roomrenthostpayable
    bookingProperty.guestservicepercent = guestservicepercent
    bookingProperty.createdBy = createdBy
    bookingProperty.updatedBy = updatedBy
    bookingProperty.softdelete = softdelete
    bookingProperty.dtcm_uploaded = dtcm_uploaded
    bookingProperty.passortid_collected = passortid_collected
    bookingProperty.sign_verified = sign_verified
    bookingProperty.smartcode_provided = smartcode_provided
    bookingProperty.payment_collected = payment_collected
    bookingProperty.payment_received = payment_received
    bookingProperty.other_passports = other_passports

    const updatedBookingM = await bookingProperty.save()

    if (bookingProperty?.propertyid) {
        // console.log(bookingProperty?.propertyid, 'bookingProperty?.propertyid')
        // const properties = await AddProperty.find({ _id: { $in: bookingProperty?.propertyid } });
        const properties = await AddProperty.find({ _id: { $in: bookingProperty?.propertyid } });
        const property = properties.find(property => property._id.toHexString() === bookingProperty?.propertyid?.toHexString());
        // console.log(properties, "properties")
        // console.log(property, "property")
        // const customerId = properties.map(property => property?.customerid);
        // const userData = await User.find({ _id: { $in: customerId } });
        // const userData = await User.find({ _id: { $in: property?.customerid } });
        // const user = userData.find(owner => owner._id.toHexString() === property?.customerid?.toHexString());
        const url = process.env.BASE_URL === "http://dev-rare.srp.ai/" ? "http://dev-rare.srp.ai/update-booking/" + bookingProperty?._id : "http://stg.srp.ai/update-booking/" + bookingProperty?._id
        // console.log(owner_email, "owner_email")
        let contentPara = `This is to inform you about a modified booking for one of our holiday homes. Details have been attached.  Please ensure that the necessary arrangements are made by the maintenance department.`

        const formattedreservationdate = bookingProperty.reservationdate ? moment.tz(bookingProperty.reservationdate, 'Asia/Karachi').format('DD MMM YYYY') : '';
        const formattedcheckindate = bookingProperty.checkindate ? moment.tz(bookingProperty.checkindate, 'Asia/Karachi').format('DD MMM YYYY') : ''
        const formattedcheckoutdate = bookingProperty.checkoutdate ? moment.tz(bookingProperty.checkoutdate, 'Asia/Karachi').format('DD MMM YYYY') : ''

        const response = {
            ...bookingProperty.toObject(), // Convert Mongoose document to plain JavaScript object
            reservationdate: formattedreservationdate,
            checkindate: formattedcheckindate,
            checkoutdate: formattedcheckoutdate,
        };

        if (url) {
            let contentHeading = `Dear Accounts Department,`
            await bookingCreateUpdateEmail(`Booking Updated Recently "${bookingProperty?.confirmationcode}"`, contentHeading, contentPara, url, response, property)
            // await bookingCreateUpdateEmail(`Booking Updated Recently "${bookingProperty?.confirmationcode}"`, contentHeading, contentPara, url, bookingProperty, property)
            console.log("Email send")
            // return res.status(200).json({ message: `Property ${updatedProperty.unitnumber} updated` })
        }
    }


    return res.json(updatedBookingM)
})

// const updateBookingCancel = asyncHandler(async (req, res) => {
//     console.log(req.body, "req.body");
//     const { _id, ...updateData } = req.body;

//     const existingBooking = await Booking.findById(_id).exec();
//     if (!existingBooking) {
//         return res.status(400).json({ message: 'Booking not found' });
//     }

//     console.log(updateData, "updateData");

//     if (req.body.softdelete !== undefined) {
//         updateData.softdelete = req.body.softdelete;
//         console.log('softdelete hai');
//     }

//     Object.assign(existingBooking, updateData);

//     const updatedBooking = await existingBooking.save();

//     return res.json({ message: `${updatedBooking._id} updated` });
// });

const updateBookingCancel = asyncHandler(async (req, res) => {
    // console.log(req.body, "req.body");
    const { _id, ...updateData } = req.body;

    const existingBooking = await Booking.findById(_id).exec();
    if (!existingBooking) {
        return res.status(400).json({ message: 'Booking not found' });
    }

    // console.log(updateData, "updateData");
    // console.log(existingBooking, "existingBooking");

    // if (softdelete !== undefined) {
    //     updateData.softdelete = softdelete;
    //     console.log('softdelete exists');
    // }

    Object.assign(existingBooking, updateData);

    const updatedBooking = await existingBooking.save();

    return res.json({ message: `${updatedBooking._id} updated` });
});

const deleteBooking = asyncHandler(async (req, res) => {
    const { _id } = req.body

    if (!_id) {
        return res.status(400).json({ message: "Id is required" })
    }

    const deletedBooking = await Booking.findById(_id).exec()

    if (!deletedBooking) {
        return res.status(400).json({ message: 'Booking not found' })
    }

    const result = await deletedBooking.deleteOne()
    const reply = `Booking ${result?.propertyid} with Id ${result?._id} deleted`

    return res.json(reply)
})

const getBookingSearch = asyncHandler(async (req, res) => {
    const params = req.params.key
    const allbooking = await Booking.find({
        $and: [
            { softdelete: { $ne: true } } // Filter out softdeleted bookings
        ]
    })
        .sort({ _id: "descending" })
    if (!allbooking?.length) {
        return res.status(400).json({ message: "No Booking found" })
    }

    const propertyIds = allbooking.map(property => property?.propertyid);
    // const customerIds = allbooking.map(customer => customer?.customerid);
    const employeeIds = allbooking.map(employee => employee.createdBy);
    const employeeIdsUpdatedBy = allbooking.map(employee => employee.updatedBy);

    try {
        const properties = await AddProperty.find({ _id: { $in: propertyIds } });
        const buildingIds = properties.map(property => property?.buildingid);
        const projectnameId = properties.map(property => property?.projectnameid);
        const communityId = properties.map(property => property?.communityid);
        const subtypeId = properties.map(property => property?.subtypeid);
        const customerId = properties.map(property => property?.customerid);

        const buildings = await BuildingName.find({ _id: { $in: buildingIds } });
        const projectnames = await ProjectName.find({ _id: { $in: projectnameId } });
        const communityData = await CommunityName.find({ _id: { $in: communityId } });
        const subtypeData = await SubType.find({ _id: { $in: subtypeId } });
        const userData = await User.find({ _id: { $in: customerId } });
        const employeeData = await Employee.find({ _id: { $in: employeeIds } });
        const employeeDataUpdatedBy = await Employee.find({ _id: { $in: employeeIdsUpdatedBy } });
        // const customerData = await User.find({ _id: { $in: customerIds } });


        const bookingWithAllData = allbooking.map(propertyData => {
            const propertyObject = propertyData.toObject();
            const { _id, bookingnumber, cancelled, propertyid, customerid, ownerid, guestname, checkintype, nationality, passportnumber, mobilenumber, email, noadults, nochildern, totaloccupants, confirmationcode, reservationdate, bookingagent, modepayment, checkindate, checkoutdate, nonight, tourismfee, securitydeposit, totalpayout, hostservicefee, totalcollectall, cleaningfee, totaladditionalfee, roomrentamount, guestservicefee, guestmanagementfee, vatperbookingrent, vatperservicefee, vatpercleaningfee, vatperguestmanagementfee, vatperhostmanagementfee, totalvatper, totalroomrent, hostmanagementfee, roomrenthostpayable, auditdiff, createdAt, guestservicepercent, createdBy, updatedAt, updatedBy, softdelete, dtcm_uploaded, passortid_collected, sign_verified, smartcode_provided, payment_collected, payment_received, other_passports } = propertyObject;
            const updatedBooking = { _id, bookingnumber, cancelled, propertyid, customerid, ownerid, guestname, checkintype, nationality, passportnumber, mobilenumber, email, noadults, nochildern, totaloccupants, confirmationcode, reservationdate, bookingagent, modepayment, checkindate, checkoutdate, nonight, tourismfee, securitydeposit, totalpayout, hostservicefee, totalcollectall, cleaningfee, totaladditionalfee, roomrentamount, guestservicefee, guestmanagementfee, vatperbookingrent, vatperservicefee, vatpercleaningfee, vatperguestmanagementfee, vatperhostmanagementfee, totalvatper, totalroomrent, hostmanagementfee, roomrenthostpayable, auditdiff, createdAt, guestservicepercent, createdBy, updatedAt, updatedBy, softdelete, dtcm_uploaded, passortid_collected, sign_verified, smartcode_provided, payment_collected, payment_received, other_passports };
            if (propertyid) {
                const property = properties.find(property => String(property._id) === String(propertyData.propertyid));
                if (property) {
                    updatedBooking.unitnumber = property.unitnumber;
                    updatedBooking.floor = property.floor;

                    const building = buildings.find(building => String(building._id) === String(property.buildingid));
                    if (building) {
                        updatedBooking.building_name = building.buildingname;
                        updatedBooking.buildingid = building._id;
                    }

                    const projectname = projectnames.find(project => String(project._id) === String(property.projectnameid));
                    if (projectname) {
                        updatedBooking.project_name = projectname.projectName;
                        updatedBooking.projectnameid = projectname._id;
                    }

                    const community = communityData.find(community => String(community._id) === String(property.communityid));
                    if (community) {
                        updatedBooking.community_name = community.communityname;
                        updatedBooking.communityid = community._id;
                    }

                    const subtype = subtypeData.find(subtype => String(subtype._id) === String(property.subtypeid));
                    if (subtype) {
                        updatedBooking.subtype_name = subtype.subtypename;
                    }

                    const user = userData.find(userData => String(userData._id) === String(property.customerid));
                    if (user) {
                        updatedBooking.owner_name = user?.firstname + " " + user?.lastname;
                        updatedBooking.customer_id = user?._id;
                        updatedBooking.owner_email = user?.email;
                    }

                }
            }
            const employee = employeeData.find(employee => String(employee._id) === String(createdBy));
            if (employee) {
                updatedBooking.employee_email_createdBy = employee?.email;
            }
            const employeeUpdatedBy = employeeDataUpdatedBy.find(employee => String(employee._id) === String(updatedBy));
            if (employeeUpdatedBy) {
                updatedBooking.employee_email_updatedBy = employeeUpdatedBy?.email;
            }

            return updatedBooking;
        });

        const formattedDate = bookingWithAllData?.map(bookingDateSet => {
            const additionalDate = moment().tz('Asia/Dubai').add(1, 'day').format('DD MMM YYYY');
            const formattedreservationdate = bookingDateSet.reservationdate ? new Date(bookingDateSet.checkindate).toDateString() : ''
            const formattedcheckindate = bookingDateSet.checkindate ? new Date(bookingDateSet.checkindate).toDateString() : ''
            const formattedcheckoutdate = bookingDateSet.checkoutdate ? new Date(bookingDateSet.checkoutdate).toDateString() : ''
            const formattedCreatedAt = bookingDateSet.createdAt ? moment.tz(bookingDateSet.createdAt, 'Asia/Dubai').format('DD MMM YYYY') : '';
            const formattedupdatedAt = bookingDateSet.updatedAt ? moment.tz(bookingDateSet.updatedAt, 'Asia/Dubai').format('DD MMM YYYY') : '';
            return { ...bookingDateSet, reservation_date: formattedreservationdate, checkout_date: formattedcheckoutdate, Created_At: formattedCreatedAt, checkin_date: formattedcheckindate, updated_At: formattedupdatedAt, createdAt: formattedCreatedAt, updatedAt: formattedupdatedAt }
        })

        const filteredBookings = formattedDate.filter(booking => {
            return Object.values(booking).some(value => {
                if (typeof value === 'string' && value.toLowerCase().includes(params.toLowerCase())) {
                    return true;
                }
                return false;
            });
        });

        res.json(filteredBookings);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }

})

module.exports = {
    getAllBooking,
    getBookingById,
    createBooking,
    updateBooking,
    deleteBooking,
    getPaginationBooking,
    getSearchBooking,
    getPaginationBookingWithDate,
    getSearchBookingByCustomer,
    getBookingReservation,
    getAllBookingData,
    convertCustomerIdToObjectId,
    getBookingYearly,
    getBookingCheckIn,
    getBookingCheckOut,
    getBookingByPropertyId,
    getAllBookingCancelled,
    updateBookingCancel,
    getAllBookingWithoutSoftdelete,
    getPaginationBookingOwnerRep,
    getBookingProperty,
    getAllBookingApproved,
    getBookingSearch,
    sendEmailPDF,
    getAllBookingTest
}

// just for the deployment on git adding this line
// again deployment kye liye add kr raha hn
// just for the deployment on git adding this line
// again deployment kye liye add kr raha hn
// just for the deployment on git adding this line
// again deployment kye liye add kr raha hn