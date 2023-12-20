const express = require('express')
const router = express.Router()
const amenitiesController = require('../controllers/amenitiesController')

router.route('/:id').get(amenitiesController.getAmenitiesNameById)
router.route('/pagination/pages').get(amenitiesController.getPaginationAmenities)
router.route('/api/withdate').get(amenitiesController.getPaginationAmenitiesWithDate)
router.route('/api/search/:key').get(amenitiesController.getSearchAmenities)
router.route('/api/app/search/:key').get(amenitiesController.getAllAmenitiesNameSearchApp)

router.route('/')
    .get(amenitiesController.getAllAmenitiesName)
    .post(amenitiesController.createAmenitiesName)
    .patch(amenitiesController.updateamenitiesName)
    .delete(amenitiesController.deleteAmenitiesName)

module.exports = router