const express = require('express')
const router = express.Router()
const tenantContractController = require('../controllers/tenantContractController')
const multer = require('multer')


const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cd) {
            cd(null, 'public/chequeimage')
        },
        filename: function (req, file, cb) {

            cb(null, Date.now() + "_" + file.originalname)
        }
    })
}).any()

router.route('/:id').get(tenantContractController.getTenantContractById)
router.route('/api/ownercontract/').get(tenantContractController.getOwnerContract)
router.route('/api/propertydelete/').get(tenantContractController.getTenantContractProperty)
router.route('/api/app/search/:key').get(tenantContractController.getTenantContractSearch)
router.route('/api/tenantcontractdelete').patch(tenantContractController.updateTenantContractCancel)

router.route('/')
    .get(tenantContractController.getAllTenantContract)
    .post(upload, tenantContractController.createTenantContract)
    .patch(upload, tenantContractController.updateTenantContract)
    .delete(tenantContractController.deleteTenant)

module.exports = router