const express = require('express')
const router = express.Router()
const communityNameController = require('../controllers/communityNameController')

router.route('/:id').get(communityNameController.getCommunityNameById)
router.route('/pagination/pages').get(communityNameController.getPaginationCommunity)
router.route('/api/withdate').get(communityNameController.getPaginationCommunityWithDate)
router.route('/api/search/:key').get(communityNameController.getSearchCommunity)
router.route('/api/app/search/:key').get(communityNameController.getAlCommunityNameSearch)
router.route('/api/communitydelete').patch(communityNameController.updateCommunityNameCancel)
router.route('/api/all-countries').get(communityNameController.getAllCountry)
router.route('/api/countries/:country/cities').get(communityNameController.getCitiesInCountry)

router.route('/')
    .get(communityNameController.getAlCommunityName)
    .post(communityNameController.createCommunity)
    .patch(communityNameController.updateCommunity)
    .delete(communityNameController.deleteCommunityName)

module.exports = router