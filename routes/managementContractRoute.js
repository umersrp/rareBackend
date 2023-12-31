const express = require('express')
const router = express.Router()
const managementContractController = require('../controllers/managementContractController')

router.route('/:id').get(managementContractController.getManagementContractById)
router.route('/api/ownercontract/').get(managementContractController.getOwnerContract)
router.route('/api/propertydelete/').get(managementContractController.getManagementContractProperty)
router.route('/api/managementcontractdelete').patch(managementContractController.updateManagementContractCancel)

router.route('/')
    .get(managementContractController.getAllManagementContract)
    .post(managementContractController.createManagementContract)
    .patch(managementContractController.updateManagementContract)
    .delete(managementContractController.deleteManagementContract)

module.exports = router