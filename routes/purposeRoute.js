const express = require('express')
const router = express.Router()
const purposeController = require('../controllers/purposeController')


router.route('/create').post(purposeController.createPurposeData)
router.route('/get').get(purposeController.getall)
router.route('/get/:id').get(purposeController.getByid)
router.route('/update/:id').put(purposeController.updateRecord)
router.route('/delete/:id').delete(purposeController.deleteRecord)



module.exports = router