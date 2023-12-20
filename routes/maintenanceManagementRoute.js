const express = require('express')
const router = express.Router()
const maintenanceManagementController = require('../controllers/maintenanceManagementController')

router.route('/:id').get(maintenanceManagementController.getmaintenanceManagementById)
router.route('/api/q').get(maintenanceManagementController.getSearchedMaintenanceManagements)

router.route('/')
    .get(maintenanceManagementController.getAllmaintenanceManagement)
    .post(maintenanceManagementController.createmaintenanceManagement)
    .patch(maintenanceManagementController.updatemaintenanceManagement)
module.exports = router