const express = require('express')
const router = express.Router()
const developerController = require('../controllers/developerController')

router.route('/:id').get(developerController.getDeveloperNameById)
router.route('/pagination/pages').get(developerController.getPaginationDeveloper)
router.route('/api/withdate').get(developerController.getPaginationDeveloperWithDate)
router.route('/api/search/:key').get(developerController.getSearchDeveloper)
router.route('/api/app/search/:key').get(developerController.getAlDeveloperSearchApp)
router.route('/api/developerdelete').patch(developerController.updateDeveloperNameCancel)

router.route('/')
    .get(developerController.getAlDeveloper)
    .post(developerController.createDeveloper)
    .patch(developerController.updateDeveloper)
    .delete(developerController.deleteDeveloper)

module.exports = router