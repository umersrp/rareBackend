const express = require('express')
const router = express.Router()
const PowerAttorneyController = require('../controllers/PowerAttorneyController')

router.route('/:id').get(PowerAttorneyController.getPowerAttorneyById)
router.route('/api/softdelete').patch(PowerAttorneyController.updatePowerAttorneySoftDelete)
router.route('/')
    .get(PowerAttorneyController.getAllPowerAttorney)
    .post(PowerAttorneyController.createPowerAttorney)
    .patch(PowerAttorneyController.updatePowerAttorney)
    .delete(PowerAttorneyController.deletePowerAttorney)

module.exports = router