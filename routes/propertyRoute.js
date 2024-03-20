const express = require('express')
const router = express.Router()
const propertyController = require('../controllers/propertyController')
const { upload } = require('../utils/forImagesData')
// const multer = require('multer')


// const upload = multer({
//     storage: multer.diskStorage({
//         destination: function (req, file, cd) {
//             cd(null, 'public/propertyimages')
//         },
//         filename: function (req, file, cb) {

//             cb(null, Date.now() + "_" + file.originalname)
//         }
//     })
// }).any()



router.route('/shortterm').get(propertyController.allShorttermProperties)
router.route('/shortterm/:ownerid').get(propertyController.OwnerShorttermProperties)
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
router.route('/api/status/:propertyid').put(propertyController.ChangePropertyStatus)
router.route('/activecontract/:propertyid').get(propertyController.ActiveContract)
router.route('/api/softdelete/:id').put(propertyController.Softdeleted)


router.route('/api/ownerproperty/:customerid').get(propertyController.getownerProperty)

router.route('/')
    .get(propertyController.getAllProperty)
    .post(upload, propertyController.createProperty)
    .patch(upload, propertyController.updateProperty)
    .delete(propertyController.deleteProperty)

    router.route('/update/:id').put(upload,propertyController.updateNewProperty)
    router.route('/ownerchanged').put(upload,propertyController.PropertyOwnerChanged)
    router.route('/api/property/:id').get(upload,propertyController.getProprtybyId)


    router.route('/api/ownerpropertiesbyownerId/:customerid').get(propertyController.ownerProperty)
    router.route('/api/ownerbookingdbyowneremail/:owneremail').get(propertyController.ownerBookings)

    router.route('/api/propertyoverview').get(propertyController.PropertyOverview)
    router.route('/api/propertyoverview/:customerid').get(propertyController.OwnerPropertyOverview)

module.exports = router