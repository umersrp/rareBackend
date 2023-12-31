const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const path = require('path')
const corsOptions = require('./config/corsOptions')
const connectDB = require('./config/dbConn')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const multer = require('multer')
const upload = multer();

const app = express()
dotenv.config()
const PORT = process.env.PORT || 3600


connectDB()
.then((res) => console.log(`database connected successfully`))
.catch((err)=> console.log(`database not connected`))

app.use(cors({ origin: "*" }))

// app.use(express.json())
// app.use(express.json()); 
app.use(cookieParser())
// app.use(upload.any());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/users', require('./routes/userRoutes'))
app.use('/roles', require('./routes/rolesRoute'))
app.use('/employees', require('./routes/employeeRoute'))
app.use('/login', require('./routes/loginRoute'))
app.use('/upload', require('./routes/uploadRoutes'))
app.use('/projectname', require('./routes/projectNameRoute'))
app.use('/buildingname', require('./routes/buildingNameRoute'))
app.use('/subtype', require('./routes/subTypeRoute'))
app.use('/community', require('./routes/communityRoute'))
app.use('/developer', require('./routes/developerRoute'))
app.use('/property', require('./routes/propertyRoute'))
app.use('/amenities', require('./routes/amenitiesRoute'))
app.use('/booking', require('./routes/bookingRoute'))
app.use('/propertyupload', require('./routes/propertyUpload'))
app.use('/notification', require('./routes/notificationRoute'))
app.use('/rentpurchase', require('./routes/rentPurchaseRoute'))
app.use('/managementcontract', require('./routes/managementContractRoute'))
app.use('/tenantcontract', require('./routes/tenantContractRoute'))
app.use('/note', require('./routes/notesRoute'))
app.use('/maintenancemanagement', require('./routes/maintenanceManagementRoute'))
app.use('/saleregister', require('./routes/SaleRegisterRoute'))
app.use('/powerattorney', require('./routes/PowerAttorneyRoute'))
app.use('/bankdetails', require('./routes/BankDetailsRoute'))

app.use(express.static(path.join(__dirname, "./build")));
app.use('/public', express.static(path.join('public')))
// app.get('/', function (req, res) {
//     return res.sendFile(path.resolve(__dirname, './build', 'index.html'));
// });
// app.use(() => (err, req, res, next) => {
//     if (err instanceof multer.MulterError) {
//         return res.status(418).send(err.code);
//     }
// });


    app
    .listen(PORT, () => console.log(`Server is running on PORT ${PORT}`))