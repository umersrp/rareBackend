const Employee = require('../models/employee')
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')
const Token = require('../models/employeeToken')
const sendEmail = require('../utils/sendEmail')
const crypto = require('crypto')
const axios = require('axios');
const Roles = require('../models/roles')

// const cron = require('node-cron');

// const cronSchedule = '0 0 * * *'; // Runs every hour at the beginning of the hour


// const dataSyncJob = cron.schedule(cronSchedule, async (res, req) => {
//     try {
//         const header = {
//             "Authorization": process.env.ERP_TOKEN,
//             "Content-Type": "application/json"
//         }

//         // console.log('cron job chali hai')

//         // Make a request to the API to fetch the latest data
//         const response = await axios.get(`${process.env.ERP_URL}/Employee/`, { headers: header });
//         const newData = response.data.data;

//         for (const employeeData of newData) {
//             const { name } = employeeData;

//             // console.log('loop me agya data')
//             // console.log(name, 'name')

//             // Check if the employee already exists in your MongoDB database
//             const existingEmployee = await Employee.findOne({ email: employeeData.user_id });

//             // console.log(existingEmployee, "existingEmployee")
//             // console.log(existingEmployee?.erp_id, "existingEmployee?.erp_id")

//             if (!existingEmployee) {
//                 // console.log('user nhi mila usko')
//                 // clg
//                 // Make a request to the API for the specific employee's data
//                 const specificEmployeeResponse = await axios.get(`${process.env.ERP_URL}/Employee/${name}`, { headers: header });
//                 const specificEmployeeData = specificEmployeeResponse.data.data;

//                 // Process and save the new employee data to your MongoDB database
//                 const employeeToSave = {
//                     email: specificEmployeeData.user_id,
//                     designation: specificEmployeeData.designations,
//                     password: specificEmployeeData.password,
//                     confirmpass: specificEmployeeData.confirmpass,
//                     employeeid: specificEmployeeData.employee_id,
//                     roleid: specificEmployeeData.roleid,
//                     rolename: specificEmployeeData.role_name,
//                     firstname: specificEmployeeData.first_name,
//                     lastname: specificEmployeeData.last_name,
//                     contactno: specificEmployeeData.phone_number,
//                     employeecode: specificEmployeeData.employee_code,
//                     joiningdate: specificEmployeeData.date_of_joining,
//                     visaexpirydate: specificEmployeeData.visa_expiry_date,
//                     contractexpirydate: specificEmployeeData.contract_end_date,
//                     date_of_birth: specificEmployeeData.date_of_birth,
//                     gender: specificEmployeeData.gender,
//                     employment_type: specificEmployeeData.employment_type,
//                     erp_id: specificEmployeeData.name,
//                     // Add other relevant fields from the specific employee's data as needed
//                 };

//                 const cronJobEmployee = await Employee.create(employeeToSave);
//                 if (cronJobEmployee) {
//                     // console.log('mere pass user create ho gya')
//                     try {
//                         // console.log('erp me create kye liye chala gya')
//                         const apiUrl = `${process.env.ERP_URL}/Employee/${cronJobEmployee?.erp_id}`;

//                         const apiData = {
//                             // Add the necessary data from the `employee` object to update the API
//                             // email: employee.email,
//                             // designation: employee.designation,
//                             _id: cronJobEmployee._id,
//                             // Include other required fields based on the API documentation
//                             // ...
//                         };

//                         const header = {
//                             "Authorization": process.env.ERP_TOKEN,
//                             "Content-Type": "application/json"
//                         }

//                         // Make an HTTP PUT request to update the API data
//                         await axios.put(apiUrl, apiData, { headers: header });

//                         // Handle the response from the third-party API if needed
//                         // console.log(apiResponse.data, "employee from erp");

//                         // res.status(200).json(cronJobEmployee)
//                         // ...existing code...

//                         console.log(`New employee '${specificEmployeeData.name}' saved to the database & updated as well`);
//                     } catch (error) {
//                         // console.log(error, "error employee from erp");
//                         // res.status(500).json(error)
//                         console.log(error, "error")
//                         // Handle any error that occurred during the API update
//                         // ...
//                     }

//                 }
//             }
//         }

//         console.log('Data sync completed');
//     } catch (error) {
//         console.error('Error syncing data:', error);
//     }
// });

// dataSyncJob.start();

// process.on('SIGINT', () => {
//     dataSyncJob.stop();
//     process.exit();
// });

const getAllEmployees = asyncHandler(async (req, res) => {
    const employees = await Employee.find({
        $and: [
            { softdelete: { $ne: true } } // Filter out softdeleted bookings
        ]
    }).sort({ _id: "descending" })
    if (!employees?.length) {
        return res.status(400).json({ message: 'No employee found' })
    }

    const roleId = employees.map(employee => employee.roleid);
    const roleData = await Roles.find({ _id: { $in: roleId } });
    const updatedEmployees = employees.map(employee => {
        const employeeObject = employee.toObject();
        const { firstname, lastname, email, designation, roleid, verified, createdAt, _id, erp_id, company } = employeeObject;
        const updatedEmployee = { firstname, lastname, email, designation, roleid, verified, createdAt, _id, erp_id, company };

        if (roleid) {
            const role = roleData.find(role => role._id.toHexString() === roleid.toHexString());
            updatedEmployee.role_name = role?.rolename;
        }
        return updatedEmployee;
    });

    res.json(updatedEmployees)
})

const getAllEmployeesWithErpId = asyncHandler(async (req, res) => {
    const employees = await Employee.find({
        $and: [
            { softdelete: { $ne: true } } // Filter out softdeleted bookings
        ],
    }).sort({ _id: "descending" });
    if (!employees?.length) {
        return res.status(400).json({ message: 'No employee found' });
    }

    const roleId = employees.map(employee => employee.roleid);
    const roleData = await Roles.find({ _id: { $in: roleId } });

    const updatedEmployees = employees.map(employee => {
        const employeeObject = employee.toObject();
        const { firstname, lastname, email, designation, roleid, verified, createdAt, _id, company, erp_id } = employeeObject;
        const updatedEmployee = { firstname, lastname, email, designation, roleid, verified, createdAt, _id, company };

        if (roleid) {
            const role = roleData.find(role => role._id.toHexString() === roleid.toHexString());
            updatedEmployee.role_name = role?.rolename;
        }

        // Set erp_id to an empty string if it doesn't exist
        updatedEmployee.erp_id = erp_id || '';

        return updatedEmployee;
    });

    // Filter the array to keep only unique employees based on their erp_id
    const uniqueEmployees = updatedEmployees.filter((employee, index, self) =>
        employee.erp_id !== '' && index === self.findIndex(e => e.erp_id === employee.erp_id)
    );

    res.json(uniqueEmployees);
});

const getPaginationEmployee = asyncHandler(async (req, res) => {
    const page = parseInt(req.query.page || 0)
    const perPage = req.query.perPage || 10
    const sort = req.query.sort
    try {
        const count = await Employee.countDocuments()
        const employees = await Employee.find({
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
            employees
        })
    } catch (err) {
        res.status(400).json({
            err: `Error getting data: ${err.message}`
        })
    }
})

const getRolesForEmployee = asyncHandler(async (req, res) => {
    try {
        const employees = await Employee.find({
            $and: [
                { softdelete: { $ne: true } } // Filter out softdeleted bookings
            ],
            "$or": [
                req.query
            ],
        })
        res.status(200).json(employees)
    } catch (err) {
        res.status(400).json({
            err: `Error getting data: ${err.message}`
        })
    }
})

const getEmployeeSearhed = asyncHandler(async (req, res) => {
    const params = req.params.key
    const employees = await Employee.find({
        $and: [
            { softdelete: { $ne: true } } // Filter out softdeleted bookings
        ]
    }).sort({ _id: "descending" })
    if (!employees?.length) {
        return res.status(400).json({ message: 'No employee found' })
    }

    const roleId = employees.map(employee => employee.roleid);
    const roleData = await Roles.find({ _id: { $in: roleId } });
    const updatedEmployees = employees.map(employee => {
        const employeeObject = employee.toObject();
        const { firstname, lastname, email, designation, roleid, verified, createdAt, _id, erp_id, company } = employeeObject;
        const updatedEmployee = { firstname, lastname, email, designation, roleid, verified, createdAt, _id, erp_id, company };

        if (roleid) {
            const role = roleData.find(role => role._id.toHexString() === roleid.toHexString());
            updatedEmployee.role_name = role?.rolename;
        }
        return updatedEmployee;
    });

    const formattedEmployees = updatedEmployees.map(employee => {
        const formattedCreatedAt = employee.createdAt ? new Date(employee.createdAt).toDateString() : ''
        const formattedUpdatedBy = employee.updatedBy ? new Date(employee.updatedBy).toDateString() : ''
        const full_name = employee?.firstname + (employee?.lastname ? " " + employee?.lastname : "")
        return { ...employee, createdAt: formattedCreatedAt, updatedBy: formattedUpdatedBy, full_name: full_name }
    })

    const filteredEmployees = formattedEmployees.filter(employee => {
        return Object.values(employee).some(value => {
            if (typeof value === 'string' && value.toLowerCase().includes(params.toLowerCase())) {
                return true;
            }
            return false;
        });
    });

    res.json(filteredEmployees)
})

const getPaginationEmployeeWithDate = asyncHandler(async (req, res) => {
    const page = parseInt(req.query.page || 0)
    const perPage = req.query.perPage || 10
    const sort = req.query.sort
    const fromDate = req.query.fromDate
    const toDate = req.query.toDate
    try {
        const count = await Employee.countDocuments()
        const employees = await Employee.find({
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
            employees
        })
    } catch (err) {
        res.status(400).json({
            err: `Error getting data: ${err.message}`
        })
    }
})

const getSearchEmployee = asyncHandler(async (req, res) => {
    const page = parseInt(req.query.page || 0)
    const perPage = req.query.perPage || 10
    const sort = req.query.sort
    try {
        const count = await Employee.countDocuments()
        const employees = await Employee.find({
            $and: [
                { softdelete: { $ne: true } } // Filter out softdeleted bookings
            ],
            "$or": [
                { "email": { $regex: req.params.key, $options: 'i' } },
                { "designation": { $regex: req.params.key, $options: 'i' } },
                { "rolename": { $regex: req.params.key, $options: 'i' } },
                { "employeeid": { $regex: req.params.key, $options: 'i' } },
                { "roleid": { $regex: req.params.key, $options: 'i' } },
            ]
        })
            .sort({ _id: sort })
            .skip(perPage * page)
            .limit(parseInt(perPage))
        res.status(200).json({
            count: Math.ceil(employees / perPage),
            employees
        })
    } catch (err) {
        res.status(400).json({
            err: `Error getting data: ${err.message}`
        })
    }
})

const getEmployee = asyncHandler(async (req, res) => {
    const employee = await Employee.findById(req.params.id)
    if (!employee) {
        return res.status(400).json({ message: 'No user found' })
    }
    res.json(employee)
})

const createNewEmployee = asyncHandler(async (req, res) => {
    const { email, designation, password, employeeid, roleid, rolename, firstname, lastname, mobileno, joiningdate, visaexpirydate, contractexpirydate, confirmpass, date_of_birth, gender, erproles, contactno, employeecode, employment_type, erp_id, created_by, updated_by, employee_number, company } = req.body

    if (!email) {
        return res.status(400).json({ message: "email fields are require" })
    } else if (!designation) {
        return res.status(400).json({ message: "designation fields are require" })
    }
    // else if (!password) {
    //     return res.status(400).json({ message: "password fields are require" })
    // } 
    else if (!employeeid) {
        return res.status(400).json({ message: "employeeid fields are require" })
    }
    // else if (!rolename) {
    //     return res.status(400).json({ message: "rolename fields are require" })
    // }
    else if (!roleid) {
        return res.status(400).json({ message: "roleid fields are require" })
    }

    const duplicate = await Employee.findOne({ email }).lean().exec()
    if (duplicate) {
        return res.status(409).json({ message: "Duplicate email" })
    }

    // let erpRoles = [];
    // if (erproles.length) {
    //     erpRoles = JSON.parse(erproles);
    // }
    // erproles = erpRoles


    // const hashedPassword = await bcrypt.hash(password, 10)

    const employeeObject = { email, designation, password, employeeid, rolename, roleid, firstname, lastname, mobileno, joiningdate, visaexpirydate, contractexpirydate, confirmpass, date_of_birth, gender, erproles, contactno, employeecode, employment_type, erp_id, created_by, updated_by, employee_number, company }

    const employee = await Employee.create(employeeObject)

    const token = await new Token({
        employeeId: employee._id,
        token: crypto.randomBytes(32).toString("hex")
    }).save()

    const url = `${process.env.BASE_URL}employees-user/${employee._id}/verify/${token.token}`
    await sendEmail(employee.email, "verify email", url)

    if (employee) {
        res.status(200).json(employee)
    } else {
        res.status(400).json({ message: "Invalid user data received" })
    }
})

const createNewEmployeeFromERP = asyncHandler(async (req, res) => {
    // ...existing code...
    const { email, designation, password, employeeid, roleid, rolename, firstname, lastname, mobileno, joiningdate, visaexpirydate, contractexpirydate, confirmpass, date_of_birth, gender, erproles, contactno, employeecode, employment_type, erp_id, created_by, updated_by, employee_number, company } = req.body

    if (!email) {
        return res.status(400).json({ message: "email fields are require" })
    } else if (!designation) {
        return res.status(400).json({ message: "designation fields are require" })
    }
    // else if (!password) {
    //     return res.status(400).json({ message: "password fields are require" })
    // } 
    else if (!employeeid) {
        return res.status(400).json({ message: "employeeid fields are require" })
    }
    // else if (!rolename) {
    //     return res.status(400).json({ message: "rolename fields are require" })
    // }
    else if (!roleid) {
        return res.status(400).json({ message: "roleid fields are require" })
    }

    const duplicate = await Employee.findOne({ email }).lean().exec()
    if (duplicate) {
        return res.status(409).json({ message: "Duplicate email" })
    }

    // let erpRoles = [];
    // if (erproles.length) {
    //     erpRoles = JSON.parse(erproles);
    // }
    // erproles = erpRoles


    // const hashedPassword = await bcrypt.hash(password, 10)

    const employeeObject = { email, designation, password, employeeid, rolename, roleid, firstname, lastname, mobileno, joiningdate, visaexpirydate, contractexpirydate, confirmpass, date_of_birth, gender, erproles, contactno, employeecode, employment_type, erp_id, created_by, updated_by, employee_number, company }

    // Create the employee in your database
    const employee = await Employee.create(employeeObject);

    // Update the third-party API with the employee data
    if (employee) {
        try {
            const apiUrl = `${process.env.ERP_URL}/Employee/${employee?.erp_id}`;

            const apiData = {
                // Add the necessary data from the `employee` object to update the API
                // email: employee.email,
                // designation: employee.designation,
                _id: employee._id,
                // Include other required fields based on the API documentation
                // ...
            };

            const header = {
                "Authorization": process.env.ERP_TOKEN,
                "Content-Type": "application/json"
            }

            // Make an HTTP PUT request to update the API data
            await axios.put(apiUrl, apiData, { headers: header });

            // Handle the response from the third-party API if needed
            // console.log(apiResponse.data, "employee from erp");

            res.status(200).json(employee)
            // ...existing code...

        } catch (error) {
            // console.log(error, "error employee from erp");
            res.status(500).json(error)
            // Handle any error that occurred during the API update
            // ...
        }
    }
    // if (employee) {
    //     res.status(200).json(employee)
    // } else {
    //     res.status(400).json({ message: "Invalid user data received" })
    // }

});

// const createNewEmployeeFromERPApp = asyncHandler(async (req, res) => {
//     // ...existing code...
//     const { email, designation, password, employeeid, roleid, rolename, firstname, lastname, mobileno, joiningdate, visaexpirydate, contractexpirydate, confirmpass, date_of_birth, gender, erproles, contactno, employeecode, employment_type, erp_id, created_by, updated_by, employee_number } = req.body

//     if (!email) {
//         return res.status(400).json({ message: "email fields are require" })
//     } else if (!designation) {
//         return res.status(400).json({ message: "designation fields are require" })
//     }
//     // else if (!password) {
//     //     return res.status(400).json({ message: "password fields are require" })
//     // } 
//     else if (!employeeid) {
//         return res.status(400).json({ message: "employeeid fields are require" })
//     }
//     // else if (!rolename) {
//     //     return res.status(400).json({ message: "rolename fields are require" })
//     // }
//     else if (!roleid) {
//         return res.status(400).json({ message: "roleid fields are require" })
//     }

//     const duplicate = await Employee.findOne({ email }).lean().exec()
//     if (duplicate) {
//         return res.status(409).json({ message: "Duplicate email" })
//     }

//     // let erpRoles = [];
//     // if (erproles.length) {
//     //     erpRoles = JSON.parse(erproles);
//     // }
//     // erproles = erpRoles


//     // const hashedPassword = await bcrypt.hash(password, 10)

//     const employeeObject = { email, designation, password, employeeid, rolename, roleid, firstname, lastname, mobileno, joiningdate, visaexpirydate, contractexpirydate, confirmpass, date_of_birth, gender, erproles, contactno, employeecode, employment_type, erp_id, created_by, updated_by, employee_number }

//     let erp_id_name

//     if (employeeObject) {
//         try {
//             // const apiUrl = `${process.env.ERP_URL}/Employee/${employee?.erp_id}`;

//             // const apiData = {
//             //     // Add the necessary data from the `employee` object to update the API
//             //     // email: employee.email,
//             //     // designation: employee.designation,
//             //     _id: employee._id,
//             //     // Include other required fields based on the API documentation
//             //     // ...
//             // };

//             // const header = {
//             //     "Authorization": process.env.ERP_TOKEN,
//             //     "Content-Type": "application/json"
//             // }

//             // // Make an HTTP PUT request to update the API data
//             // await axios.put(apiUrl, apiData, { headers: header });

//             // // Handle the response from the third-party API if needed
//             // // console.log(apiResponse.data, "employee from erp");

//             // res.status(200).json(employee)
//             const userApiUrl = `${process.env.ERP_URL}/User`;

//             const userData = {
//                 email: employeeObject.email,
//                 first_name: employeeObject?.firstname,
//                 last_name: employeeObject?.lastname,
//                 password: employeeObject?.password,
//                 roles: employeeObject?.erproles
//             }

//             const header = {
//                 "Authorization": process.env.ERP_TOKEN,
//                 "Content-Type": "application/json"
//             }

//             await axios.post(userApiUrl, userData, { headers: header });

//             // // ...existing code...
//             // await axios.post(process.env.ERP_URL + '/User', {
//             //     email: employeeObject.email,
//             //     first_name: employeeObject?.firstname,
//             //     last_name: employeeObject?.lastname,
//             //     password: employeeObject?.password,
//             //     roles: employeeObject?.erproles
//             // },
//             //     {
//             //         headers: {
//             //             "Authorization": process.env.ERP_TOKEN,
//             //             "Content-Type": "application/json"
//             //         },
//             //     }
//             // )

//             const employeeDataErp = {
//                 first_name: employeeObject?.firstname,
//                 last_name: employeeObject?.lastname,
//                 designations: employeeObject?.designation,
//                 password: employeeObject?.password,
//                 company: "Test",
//                 gender: employeeObject?.gender,
//                 phone_number: employeeObject?.contactno,
//                 employment_type: employeeObject?.employment_type,
//                 employee_id: employeeObject?.employeeid,
//                 employee_code: employeeObject?.employeecode,
//                 visa_expiry_date: employeeObject?.visaexpirydate,
//                 date_of_birth: employeeObject?.date_of_birth,
//                 date_of_joining: employeeObject?.joiningdate,
//                 user_id: employeeObject?.email,
//                 contract_end_date: employeeObject?.contractexpirydate,
//                 roleid: employeeObject?.roleid,
//                 role_name: employeeObject?.rolename,
//                 employee_number: employeeObject?.employee_number,
//                 created_by: "PMS System"
//             }

//             const apiEmployeeUrl = process.env.ERP_URL + '/Employee'

//             // const response2 = await axios.post(process.env.ERP_URL + '/Employee', {
//             //     first_name: employeeObject?.firstname,
//             //     last_name: employeeObject?.lastname,
//             //     designations: employeeObject?.designation,
//             //     password: employeeObject?.password,
//             //     company: "Test",
//             //     gender: employeeObject?.gender,
//             //     phone_number: employeeObject?.contactno,
//             //     employment_type: employeeObject?.employment_type,
//             //     employee_id: employeeObject?.employeeid,
//             //     employee_code: employeeObject?.employeecode,
//             //     visa_expiry_date: employeeObject?.visaexpirydate,
//             //     date_of_birth: employeeObject?.date_of_birth,
//             //     date_of_joining: employeeObject?.joiningdate,
//             //     user_id: employeeObject?.email,
//             //     contract_end_date: employeeObject?.contractexpirydate,
//             //     roleid: employeeObject?.roleid,
//             //     role_name: employeeObject?.rolename,
//             //     employee_number: employeeObject?.employee_number,
//             //     created_by: "PMS System"
//             // },
//             //     {
//             //         headers: {
//             //             "Authorization": process.env.ERP_TOKEN,
//             //             "Content-Type": "application/json"
//             //         },
//             //     }
//             // )
//             const response2 = await axios.post(employeeDataErp, apiEmployeeUrl, { headers: header })
//             erp_id_name = response2?.data?.data


//         } catch (error) {
//             // console.log(error, "error employee from erp");
//             res.status(500).json(error)
//             // Handle any error that occurred during the API update
//             // ...
//         }
//     }


//     // Create the employee in your database
//     const employee = await Employee.create({ ...employeeObject, erp_id: erp_id_name, created_by: "PMS System" });

//     // Update the third-party API with the employee data
//     if (employee) {
//         try {
//             const apiUrl = `${process.env.ERP_URL}/Employee/${employee?.erp_id}`;

//             const apiData = {
//                 // Add the necessary data from the `employee` object to update the API
//                 // email: employee.email,
//                 // designation: employee.designation,
//                 _id: employee._id,
//                 // Include other required fields based on the API documentation
//                 // ...
//             };

//             const header = {
//                 "Authorization": process.env.ERP_TOKEN,
//                 "Content-Type": "application/json"
//             }

//             // Make an HTTP PUT request to update the API data
//             await axios.put(apiUrl, apiData, { headers: header });

//             // Handle the response from the third-party API if needed
//             // console.log(apiResponse.data, "employee from erp");

//             res.status(200).json(employee)
//             // ...existing code...

//         } catch (error) {
//             // console.log(error, "error employee from erp");
//             res.status(500).json(error)
//             // Handle any error that occurred during the API update
//             // ...
//         }
//     }
//     // if (employee) {
//     //     res.status(200).json(employee)
//     // } else {
//     //     res.status(400).json({ message: "Invalid user data received" })
//     // }

// });

// const createNewEmployeeFromERPApp = asyncHandler(async (req, res) => {
//     // ...existing code...
//     try {
//         const { email, designation, password, employeeid, roleid, rolename, firstname, lastname, mobileno, joiningdate, visaexpirydate, contractexpirydate, confirmpass, date_of_birth, gender, erproles, contactno, employeecode, employment_type, erp_id, created_by, updated_by, employee_number } = req.body

//         if (!email) {
//             return res.status(400).json({ message: "email fields are require" })
//         } else if (!designation) {
//             return res.status(400).json({ message: "designation fields are require" })
//         } else if (!employeeid) {
//             return res.status(400).json({ message: "employeeid fields are require" })
//         } else if (!roleid) {
//             return res.status(400).json({ message: "roleid fields are require" })
//         }

//         const duplicate = await Employee.findOne({ email }).lean().exec()
//         if (duplicate) {
//             return res.status(409).json({ message: "Duplicate email" })
//         }

//         const employeeObject = { email, designation, password, employeeid, rolename, roleid, firstname, lastname, mobileno, joiningdate, visaexpirydate, contractexpirydate, confirmpass, date_of_birth, gender, erproles, contactno, employeecode, employment_type, erp_id, created_by, updated_by, employee_number }

//         let erp_id_name

//         if (employeeObject) {
//             const userApiUrl = `${process.env.ERP_URL}/User`;

//             const userData = {
//                 email: employeeObject.email,
//                 first_name: employeeObject?.firstname,
//                 last_name: employeeObject?.lastname,
//                 password: employeeObject?.password,
//                 roles: employeeObject?.erproles
//             }

//             const header = {
//                 "Authorization": process.env.ERP_TOKEN,
//                 "Content-Type": "application/json"
//             }

//             await axios.post(userApiUrl, userData, { headers: header });

//             const employeeDataErp = {
//                 first_name: employeeObject?.firstname,
//                 last_name: employeeObject?.lastname,
//                 designations: employeeObject?.designation,
//                 password: employeeObject?.password,
//                 company: "Test",
//                 gender: employeeObject?.gender,
//                 phone_number: employeeObject?.contactno,
//                 employment_type: employeeObject?.employment_type,
//                 employee_id: employeeObject?.employeeid,
//                 employee_code: employeeObject?.employeecode,
//                 visa_expiry_date: employeeObject?.visaexpirydate,
//                 date_of_birth: employeeObject?.date_of_birth,
//                 date_of_joining: employeeObject?.joiningdate,
//                 user_id: employeeObject?.email,
//                 contract_end_date: employeeObject?.contractexpirydate,
//                 roleid: employeeObject?.roleid,
//                 role_name: employeeObject?.rolename,
//                 employee_number: employeeObject?.employee_number,
//                 created_by: "PMS System"
//             }

//             const apiEmployeeUrl = process.env.ERP_URL + '/Employee'

//             const response2 = await axios.post(employeeDataErp, apiEmployeeUrl, { headers: header })
//             erp_id_name = response2?.data?.data


//         }


//         // Create the employee in your database
//         const employee = await Employee.create({ ...employeeObject, erp_id: erp_id_name, created_by: "PMS System" });

//         // Update the third-party API with the employee data
//         if (employee) {
//             // try {
//             const apiUrl = `${process.env.ERP_URL}/Employee/${employee?.erp_id}`;

//             const apiData = {
//                 _id: employee._id,
//             };

//             const header = {
//                 "Authorization": process.env.ERP_TOKEN,
//                 "Content-Type": "application/json"
//             }

//             await axios.put(apiUrl, apiData, { headers: header });

//             res.status(200).json(employee)

//         }
//     } catch (error) {
//         res.status(500).json(error)
//     }

// });

const createNewEmployeeFromERPApp = asyncHandler(async (req, res) => {
    try {
        const { email, designation, password, employeeid, roleid, rolename, firstname, lastname, mobileno, joiningdate, visaexpirydate, contractexpirydate, confirmpass, date_of_birth, gender, erproles, contactno, employeecode, employment_type, erp_id, created_by, updated_by, employee_number, company } = req.body;

        // Validate required fields
        if (!email || !designation || !employeeid || !roleid) {
            return res.status(400).json({ message: "Required fields are missing" });
        }

        // Check for duplicate email
        const duplicate = await Employee.findOne({ email }).lean().exec();
        if (duplicate) {
            return res.status(409).json({ message: "Duplicate email" });
        }

        const employeeObject = { email, designation, password, employeeid, rolename, roleid, firstname, lastname, mobileno, joiningdate, visaexpirydate, contractexpirydate, confirmpass, date_of_birth, gender, erproles, contactno, employeecode, employment_type, erp_id, created_by, updated_by, employee_number, company }

        // Call the ERP API to create a user
        const userApiUrl = `${process.env.ERP_URL}/User`;
        const userData = {
            email: employeeObject.email,
            first_name: employeeObject?.firstname,
            last_name: employeeObject?.lastname,
            password: employeeObject?.password,
            roles: employeeObject?.erproles
        };
        const header = {
            "Authorization": process.env.ERP_TOKEN,
            "Content-Type": "application/json"
        };
        await axios.post(userApiUrl, userData, { headers: header });

        // Call the ERP API to create an employee
        const employeeDataErp = {
            first_name: employeeObject?.firstname,
            last_name: employeeObject?.lastname,
            designations: employeeObject?.designation,
            password: employeeObject?.password,
            company: employeeObject?.company,
            gender: employeeObject?.gender,
            phone_number: employeeObject?.contactno,
            employment_type: employeeObject?.employment_type,
            employee_id: employeeObject?.employeeid,
            employee_code: employeeObject?.employeecode,
            visa_expiry_date: employeeObject?.visaexpirydate,
            date_of_birth: employeeObject?.date_of_birth,
            date_of_joining: employeeObject?.joiningdate,
            user_id: employeeObject?.email,
            contract_end_date: employeeObject?.contractexpirydate,
            roleid: employeeObject?.roleid,
            role_name: employeeObject?.rolename,
            employee_number: employeeObject?.employee_number,
            created_by: "PMS System"
        };
        const apiEmployeeUrl = `${process.env.ERP_URL}/Employee`;
        const response2 = await axios.post(apiEmployeeUrl, employeeDataErp, { headers: header });
        const erp_id_name = response2?.data?.data;

        // console.log(erp_id_name, "erp_id_name")
        // Create the employee in your database
        const employee = await Employee.create({ ...employeeObject, erp_id: erp_id_name?.name, created_by: "PMS System" });

        // Update the third-party API with the employee data
        if (employee) {
            const apiUrl = `${process.env.ERP_URL}/Employee/${employee?.erp_id}`;
            const apiData = {
                _id: employee._id
            };
            await axios.put(apiUrl, apiData, { headers: header });

            res.status(200).json(employee);
        }

    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "An error occurred" });
    }
});

const employeeUpdate = asyncHandler(async (req, res) => {
    const { _id, email, designation, password, employeeid, roleid, rolename, firstname, lastname, mobileno, joiningdate, visaexpirydate, contractexpirydate, confirmpass, date_of_birth, gender, erproles, contactno, employeecode, employment_type, erp_id, created_by, updated_by, employee_number, company } = req.body

    if (!email) {
        return res.status(400).json({ message: "email fields are require" })
    } else if (!designation) {
        return res.status(400).json({ message: "designation fields are require" })
    }
    else if (!password) {
        return res.status(400).json({ message: "password fields are require" })
    }
    else if (!employeeid) {
        return res.status(400).json({ message: "employeeid fields are require" })
    }
    // else if (!rolename) {
    //     return res.status(400).json({ message: "rolename fields are require" })
    // }
    else if (!roleid) {
        return res.status(400).json({ message: "roleid fields are require" })
    }
    const employee = await Employee.findById(_id).exec()

    if (!email) {
        res.status(400).json({ message: 'User not Found' })
    }

    const duplicate = await Employee.findOne({ email }).lean().exec()

    if (duplicate && duplicate?._id.toString() !== _id) {
        return res.status(409).json({ message: "Duplicate email" })
    }

    // let erpRoles = [];
    // if (erproles?.length) {
    //     erpRoles = JSON.parse(erproles);
    // }


    employee.email = email
    employee.designation = designation
    employee.employeeid = employeeid
    employee.roleid = roleid
    employee.rolename = rolename
    employee.password = password
    employee.firstname = firstname
    employee.lastname = lastname
    employee.mobileno = mobileno
    employee.joiningdate = joiningdate
    employee.visaexpirydate = visaexpirydate
    employee.contractexpirydate = contractexpirydate
    employee.confirmpass = confirmpass
    employee.date_of_birth = date_of_birth
    employee.gender = gender
    employee.erproles = erproles
    employee.employeecode = employeecode
    employee.contactno = contactno
    employee.erp_id = erp_id
    employee.employment_type = employment_type
    employee.created_by = created_by
    employee.updated_by = updated_by
    employee.employee_number = employee_number
    employee.company = company

    // if (password) {
    //     employee.password = await bcrypt.hash(password, 10)

    const updateEmployee = await employee.save()
    res.json({ message: `${updateEmployee.email} update` })
    // }
})

const employeeUpdateErp = asyncHandler(async (req, res) => {
    const { _id, email, designation, password, employeeid, roleid, rolename, firstname, lastname, mobileno, joiningdate, visaexpirydate, contractexpirydate, confirmpass, date_of_birth, gender, erproles, contactno, employeecode, employment_type, erp_id, created_by, updated_by, employee_number, company } = req.body

    if (!email) {
        return res.status(400).json({ message: "email fields are require" })
    } else if (!designation) {
        return res.status(400).json({ message: "designation fields are require" })
    }
    else if (!password) {
        return res.status(400).json({ message: "password fields are require" })
    }
    else if (!employeeid) {
        return res.status(400).json({ message: "employeeid fields are require" })
    }
    // else if (!rolename) {
    //     return res.status(400).json({ message: "rolename fields are require" })
    // }
    else if (!roleid) {
        return res.status(400).json({ message: "roleid fields are require" })
    }
    const employee = await Employee.findById(_id).exec()

    if (!email) {
        res.status(400).json({ message: 'User not Found' })
    }

    const duplicate = await Employee.findOne({ email }).lean().exec()

    if (duplicate && duplicate?._id.toString() !== _id) {
        return res.status(409).json({ message: "Duplicate email" })
    }

    // let erpRoles = [];
    // if (erproles?.length) {
    //     erpRoles = JSON.parse(erproles);
    // }


    employee.email = email
    employee.designation = designation
    employee.employeeid = employeeid
    employee.roleid = roleid
    employee.rolename = rolename
    employee.password = password
    employee.firstname = firstname
    employee.lastname = lastname
    employee.mobileno = mobileno
    employee.joiningdate = joiningdate
    employee.visaexpirydate = visaexpirydate
    employee.contractexpirydate = contractexpirydate
    employee.confirmpass = confirmpass
    employee.date_of_birth = date_of_birth
    employee.gender = gender
    employee.erproles = erproles
    employee.employeecode = employeecode
    employee.contactno = contactno
    employee.erp_id = erp_id
    employee.employment_type = employment_type
    employee.created_by = created_by
    employee.updated_by = updated_by
    employee.employee_number = employee_number
    employee.company = company

    // if (password) {
    //     employee.password = await bcrypt.hash(password, 10)

    const updateEmployee = await employee.save()
    res.json({ message: `${updateEmployee.email} update` })
    // }
})

const employeeUpdateErpApp = asyncHandler(async (req, res) => {
    try {
        const { _id, email, designation, password, employeeid, roleid, rolename, firstname, lastname, mobileno, joiningdate, visaexpirydate, contractexpirydate, confirmpass, date_of_birth, gender, erproles, contactno, employeecode, employment_type, erp_id, created_by, updated_by, employee_number, company } = req.body

        if (!_id || !email || !erp_id || !designation || !password || !employeeid || !roleid || !company) {
            return res.status(400).json({ message: "All fields are require" })
        }

        const employee = await Employee.findById(_id).exec()

        if (!employee) {
            res.status(400).json({ message: 'employee not Found' })
        }

        const duplicate = await Employee.findOne({ email }).lean().exec()

        if (duplicate && duplicate?._id.toString() !== _id) {
            return res.status(409).json({ message: "Duplicate email" })
        }

        employee.email = email
        employee.designation = designation
        employee.employeeid = employeeid
        employee.roleid = roleid
        employee.rolename = rolename
        employee.password = password
        employee.firstname = firstname
        employee.lastname = lastname
        employee.mobileno = mobileno
        employee.joiningdate = joiningdate
        employee.visaexpirydate = visaexpirydate
        employee.contractexpirydate = contractexpirydate
        employee.confirmpass = confirmpass
        employee.date_of_birth = date_of_birth
        employee.gender = gender
        employee.erproles = erproles
        employee.employeecode = employeecode
        employee.contactno = contactno
        employee.erp_id = erp_id
        employee.employment_type = employment_type
        employee.created_by = created_by
        employee.updated_by = updated_by
        employee.employee_number = employee_number
        employee.company = company

        const updateEmployee = await employee.save()

        const userApiUrl = `${process.env.ERP_URL}/User/${updateEmployee.email}`;
        const userData = {
            email: updateEmployee.email,
            first_name: updateEmployee?.firstname,
            last_name: updateEmployee?.lastname,
            password: updateEmployee?.password,
            // roles: updateEmployee?.erproles
        };
        const header = {
            "Authorization": process.env.ERP_TOKEN,
            "Content-Type": "application/json"
        };
        await axios.put(userApiUrl, userData, { headers: header });

        // Call the ERP API to create an employee
        const employeeDataErp = {
            first_name: updateEmployee?.firstname,
            last_name: updateEmployee?.lastname,
            designations: updateEmployee?.designation,
            password: updateEmployee?.password,
            company: updateEmployee?.company,
            gender: updateEmployee?.gender,
            phone_number: updateEmployee?.contactno,
            employment_type: updateEmployee?.employment_type,
            employee_id: updateEmployee?.employeeid,
            employee_code: updateEmployee?.employeecode,
            visa_expiry_date: updateEmployee?.visaexpirydate,
            date_of_birth: updateEmployee?.date_of_birth,
            date_of_joining: updateEmployee?.joiningdate,
            user_id: updateEmployee?.email,
            contract_end_date: updateEmployee?.contractexpirydate,
            roleid: updateEmployee?.roleid,
            role_name: updateEmployee?.rolename,
            employee_number: updateEmployee?.employee_number,
            created_by: "PMS System",
            updated_by: "PMS System",
            _id: userData?._id,
        };
        const apiEmployeeUrl = `${process.env.ERP_URL}/Employee/${updateEmployee?.erp_id}`;
        await axios.put(apiEmployeeUrl, employeeDataErp, { headers: header });

        res.status(200).json({ message: `${updateEmployee.email} update` })
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "An error occurred" });
    }
})

const updateEmployeeCancel = asyncHandler(async (req, res) => {
    // console.log(req.body, "req.body");
    const { _id, ...updateData } = req.body;

    const existingEmployee = await Employee.findById(_id).exec();
    if (!existingEmployee) {
        return res.status(400).json({ message: 'Employee not found' });
    }

    Object.assign(existingEmployee, updateData);

    const updatedEmployee = await existingEmployee.save();

    return res.json({ message: `${updatedEmployee._id} updated` });
});

const deleteEmployee = asyncHandler(async (req, res) => {
    const { _id } = req.body
    if (!_id) {
        res.status(400).json({ message: 'User ID requires' })
    }

    const employee = await Employee.findById(_id).exec()

    if (!employee) {
        return res.status(400).json({ message: "User not found" })
    }

    const result = await employee.deleteOne()

    const reply = `Employee ${result.email} with id ${result._id} deleted`

    res.json(reply)
})

const logInRole = asyncHandler(async (req, res) => {
    if (req.body.password && req.body.email) {
        let employee = await Employee.findOne(req.body).select('-password').lean()
        if (employee) {
            res.send(employee)
        }
        if (employee && !employee.verified) {
            let token = await Token.findOne({ employeeId: employee._id })
            if (!token) {
                token = await new Token({
                    employeeId: employee._id,
                    token: crypto.randomBytes(32).toString("hex")
                }).save()

                const url = `${process.env.BASE_URL}employee/${employee.id}/verify/${token.token}`
                await sendEmail(employee.email, "verify email", url)
            }
            return res.status(400).send({ message: "Verified krwa phele" })
        }
        else {
            res.send({ result: "employee nhi mila" })
        }
    } else {
        res.send({ result: "No employee Found" })
    }
})

const verifyEmail = asyncHandler(async (req, res) => {
    try {
        const employee = await Employee.findOne({ _id: req.params.id })
        if (!employee) return res.status(400).send({ message: "Invalid user" })
        const token = await Token.findOne({
            employeeId: employee._id,
            token: req.params.token
        })
        if (!employee) return res.status(400).send({ message: "Invalid token" })
        await employee.updateOne({ verified: true })
        // await token.remove()
        res.status(200).send({ message: "Email verified successfully" })
    } catch (error) {
        console.log(error)
        res.status(500).send({ message: "Internal Server Error" })
    }
})

module.exports = {
    getAllEmployees,
    createNewEmployee,
    employeeUpdate,
    deleteEmployee,
    verifyEmail,
    getEmployee,
    logInRole,
    getPaginationEmployee,
    getSearchEmployee,
    getPaginationEmployeeWithDate,
    createNewEmployeeFromERP,
    employeeUpdateErp,
    getAllEmployeesWithErpId,
    getRolesForEmployee,
    updateEmployeeCancel,
    createNewEmployeeFromERPApp,
    employeeUpdateErpApp,
    getEmployeeSearhed
}