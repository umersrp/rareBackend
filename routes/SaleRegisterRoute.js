const express = require('express')
const router = express.Router()
const SaleRegisterController = require('../controllers/SaleRegisterController')

router.route('/:id').get(SaleRegisterController.getSaleRegisterById)
router.route('/api/softdelete').patch(SaleRegisterController.updateSaleRegisterSoftDelete)
router.route('/api/total').get(SaleRegisterController.AllCounts)
router.route('/')
    .get(SaleRegisterController.getAllSaleRegister)
    .post(SaleRegisterController.createSaleRegister)
    .patch(SaleRegisterController.updateSaleRegister)
    .delete(SaleRegisterController.deleteSaleRegister)

module.exports = router