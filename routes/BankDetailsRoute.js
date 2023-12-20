const express = require('express')
const router = express.Router()
const BankDetailsController = require('../controllers/BankDetailsController')

router.route('/:id').get(BankDetailsController.getBankDetailsById)
router.route('/api/softdelete').patch(BankDetailsController.updateBankDetailsSoftDelete)
router.route('/api/customer').get(BankDetailsController.getBankDetailscustomer)
router.route('/')
    .get(BankDetailsController.getAllBankDetails)
    .post(BankDetailsController.createBankDetails)
    .patch(BankDetailsController.updateBankDetails)
    .delete(BankDetailsController.deleteBankDetails)

module.exports = router