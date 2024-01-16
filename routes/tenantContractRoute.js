const express = require('express')
const router = express.Router()
const tenantContractController = require('../controllers/tenantContractController')
const multer = require('multer')

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/chequeimage');
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + "_" + file.originalname);
    }
  }),
  limits: {
    fileSize: 10 * 1024 * 1024, 
  },
  fileFilter: function (req, file, cb) {
    const allowedFileTypes = /jpeg|jpg|pdf|png/;

    const extname = allowedFileTypes.test(file.mimetype);
    const mimetype = allowedFileTypes.test(file.mimetype);

    if (file.size > 10 * 1024 * 1024) {
        cb(new Error('File size exceeds 10 MB limit!'));
      } else if (mimetype && extname) {
        cb(null, true);
      } else {
        cb(new Error('Only jpeg, jpg, pdf, and png files are allowed!'));
      }
  }
}).any();


router.route('/:id').get(tenantContractController.getTenantContractById)
router.route('/api/ownercontract/').get(tenantContractController.getOwnerContract)
router.route('/api/propertydelete/').get(tenantContractController.getTenantContractProperty)
router.route('/api/app/search/:key').get(tenantContractController.getTenantContractSearch)
router.route('/api/tenantcontractdelete').patch(tenantContractController.updateTenantContractCancel)
router.route('/report/:propertyid').get(tenantContractController.createTenantReport)

router.route('/')
    .get(tenantContractController.getAllTenantContract)
    .post(upload, tenantContractController.createTenantContract)
    .patch(upload, tenantContractController.updateTenantContract)
    .delete(tenantContractController.deleteTenant)

module.exports = router