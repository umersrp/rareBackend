const express = require('express')
const router = express.Router()
const SaleRegisterController = require('../controllers/SaleRegisterController')
const { upload } = require('../utils/forImagesData')

router.route('/:id').get(SaleRegisterController.getSaleRegisterById)
router.route('/api/softdelete').patch(SaleRegisterController.updateSaleRegisterSoftDelete)
router.route('/api/search').get(SaleRegisterController.SearchSaleRegisterByQuery)
router.route('/api/total').get(SaleRegisterController.AllCounts)
router.route('/')
    .get(SaleRegisterController.getAllSaleRegister)
    .post(upload , SaleRegisterController.createSaleRegister)
    .patch(upload , SaleRegisterController.updateSaleRegister)
    .delete(SaleRegisterController.deleteSaleRegister)


router.route('/api/saleregister/overview').get(SaleRegisterController.SaleRegisterOverview)

module.exports = router