const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const multer = require('multer')
const path = require('path')

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         console.log(path.resolve(__dirname + '../public/files'))
//         console.log(file, "file")
//         cb(null, path.resolve(__dirname + '../public/files'))
//     },
//     filename: (req, file, cb) => {
//         cb(null, file.originalname + new Date().toISOString())
//         // cb(null, Date.now() + '_' + file.originalname)
//     }
// })

// const upload = multer({ storage: storage })
// upload.single('passportpdf'),
const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cd) {
            if (file.fieldname === "passportpdf") {
                cd(null, 'public/passport')
            } else if (file.fieldname === "nationalidpdf") {
                cd(null, 'public/nationalid')
            }
        },
        filename: function (req, file, cb) {

            cb(null, Date.now() + "_" + file.originalname)
        }
    })
}).fields([
    { name: 'passportpdf', maxCount: 1 },
    { name: 'nationalidpdf', maxCount: 1 },
])

// const uploadpdf = multer({
//     storage: multer.diskStorage({
//         destination: function (req, file, cd) {
//             cd(null, 'public/files')
//         },
//         filename: function (req, file, cb) {
//             cb(null, file.fieldname + "_" + Date.now() + '.pdf')
//         }
//     })
// }).single('nationalidpdf')

router.route("/search/:key").get(userController.SearchByEmail)
router.route("/:id").get(userController.getUser)
router.route("/api/verified/").get(userController.getAllUsersVerified)
router.route("/api/verified/search/:key").get(userController.getUsersVerifiedSearch)
router.route("/api/allusers").get(userController.getAllUsersWP)
router.route('/:id/verify/:token').get(userController.verifyEmail)
router.route('/login').post(userController.logInUser)
router.route('/login/app').post(userController.logInUserAPP)
router.route('/api/login').get(userController.logInFromERP)
router.route('/forgetpassword').post(userController.forgetPassword)
router.route('/convertcustomer').patch(userController.converToCustomer)
router.route('/api/customers').get(userController.getAllOnlyCustomer)
router.route('/api/customer/withoutdate').get(userController.getAllUserswithoutDate)
router.route('/api/customer/app').get(userController.getAllUsersApp)
router.route('/api/verified/withdate').get(userController.getVerifiedUserDate)
router.route('/api/redux').get(userController.getAllUserRedux)
router.route('/api/logout/method').get(userController.logOutFromERP)
router.route('/api/search/mobile/:key').get(userController.getSearchedCustomerMobile)
router.route('/api/search/mobile/lead/:key').get(userController.getSearchedLeadMobile)
router.route('/api/specific/userupdate').patch(userController.updateUserSpecific)
router.route('/api/ownerlist').get(userController.allOwners);
// router.route('/lead/verified:').get(userController.getAllUsersVerified)
// router.route('/upload').post(upload)

router.route('/')
    .get(userController.getAllUsers)
    .post(upload, userController.createNewUser)
    .patch(upload, userController.updateUser)
    .delete(userController.deleteUser)



module.exports = router