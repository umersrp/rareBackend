const express = require('express')
const router = express.Router()
const tenantContractController = require('../controllers/tenantContractController')
const multer = require('multer')
const { upload } = require('../utils/forImagesData')
// const upload = multer({
//   storage: multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, 'public/chequeimage');
//     },
//     filename: function (req, file, cb) {
//       cb(null, Date.now() + "_" + file.originalname);
//     }
//   }),
//   limits: {
//     fileSize: 30 * 1024 * 1024, 
//   },
//   fileFilter: function (req, file, cb) {
//     const allowedFileTypes = /jpeg|jpg|pdf|png/;

//     const extname = allowedFileTypes.test(file.mimetype);
//     const mimetype = allowedFileTypes.test(file.mimetype);

//     if (file.size > 30 * 1024 * 1024) {
//         cb(new Error('File size exceeds 10 MB limit!'));
//       } else if (mimetype && extname) {
//         cb(null, true);
//       } else {
//         cb(new Error('Only jpeg, jpg, pdf, and png files are allowed!'));
//       }
//   }
// }).any();

router.route('/updatews').get(tenantContractController.updateManys)
router.route('/:id').get(tenantContractController.getTenantContractById)
router.route('/api/ownercontract/').get(tenantContractController.getOwnerContract)
router.route('/api/propertydelete/').get(tenantContractController.getTenantContractProperty)
router.route('/api/app/search/:key').get(tenantContractController.getTenantContractSearch)
router.route('/api/tenantcontractdelete/:id').patch(tenantContractController.updateTenantContractCancel)
router.route('/report/:propertyid').get(tenantContractController.createTenantReport)
router.route('/tenantsummaryreportbydates/:propertyid').get(tenantContractController.tenantSummaryReportByDates)
router.route('/tenantsummaryreport/:propertyid').get(tenantContractController.tenantSummaryReport)
router.route('/api/tenant/overview').get(tenantContractController.Tenant_Overview)
//router.route('/update').get(tenantContractController.allTenantRequest )

router.route('/')
    .get(tenantContractController.getAllTenantContract)
    .post(upload, tenantContractController.createTenantContract)
    .put(upload, tenantContractController.updateTenantContract)
    .delete(tenantContractController.deleteTenant)

module.exports = router