const express = require('express')
const router = express.Router()
const rentPurchaseController = require('../controllers/rentPurchaseController')

router.route('/:id').get(rentPurchaseController.getRentpurchaseById)
router.route('/pagination/pages').get(rentPurchaseController.getPaginationRentpurchase)
router.route('/api/withdate').get(rentPurchaseController.getPaginationRentpurchaseWithDate)
router.route('/api/search/').get(rentPurchaseController.getSearchRentpurchase)
router.route('/api/search/owner/').get(rentPurchaseController.getSearchRentpurchaseOwner)
router.route('/api/property').patch(rentPurchaseController.updatePropertyAvailability)
router.route('/api/propertydelete').get(rentPurchaseController.getRentPurchaseProperty)
router.route('/api/app/search/:key').get(rentPurchaseController.getAllRentpurchaseSearchApp)

router.route('/')
    .get(rentPurchaseController.getAllRentpurchase)
    .post(rentPurchaseController.createRentpurchase)
    .patch(rentPurchaseController.updateRentpurchase)
    .delete(rentPurchaseController.deleteRentpurchase)

module.exports = router