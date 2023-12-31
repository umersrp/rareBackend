const express = require('express')
const router = express.Router()
const propertyController = require('../controllers/propertyController')
const multer = require('multer')


const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cd) {
            cd(null, 'public/propertyimages')
        },
        filename: function (req, file, cb) {

            cb(null, Date.now() + "_" + file.originalname)
        }
    })
}).any()

router.route('/:id').get(propertyController.getPropertyById)
router.route('/pagination/pages').get(propertyController.getPaginationProperty)
router.route('/api/search/:key').get(propertyController.getSearchProperty)
router.route('/api/search/mobile/:key').get(propertyController.getSearchPropertyMobile)
router.route('/api/searchforcustomer/:key').get(propertyController.getSearchPropertyForCustomer)
router.route('/api/advancesearch/').get(propertyController.getAdvanceSearch)
router.route('/api/betweendate/').get(propertyController.getBetweenDateProperty)
router.route('/api/advanvesearchwithdate/').get(propertyController.getAdvanceSearchwithDate)
router.route('/api/sortingalphabetical/').get(propertyController.SortingTesting)
router.route('/api/connectdb/').get(propertyController.getAllPropertyConnect)
router.route('/api/connectdb/:id').get(propertyController.getPropertyByIdConnect)
router.route('/api/app/search/:key').get(propertyController.getAdvanceSearchOwner)
router.route('/api/availability/').patch(upload, propertyController.updatePropertyAvailability)


router.route('/')
    .get(propertyController.getAllProperty)
    .post(upload, propertyController.createProperty)
    .patch(upload, propertyController.updateProperty)
    .delete(propertyController.deleteProperty)

module.exports = router