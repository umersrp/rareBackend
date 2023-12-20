const express = require('express')
const router = express.Router()
const projectNameController = require('../controllers/projectNameController')

router.route('/:id').get(projectNameController.getProjectNameById)
router.route('/pagination/pages').get(projectNameController.getPaginationProjectName)
router.route('/api/withdate').get(projectNameController.getPaginationProjectNameWithDate)
router.route('/api/search/:key').get(projectNameController.getSearchProjectName)
router.route('/api/app/search/:key').get(projectNameController.getAllProjectNameSearch)
router.route('/api/community').get(projectNameController.getSearchProjectNameCommunity)
router.route('/api/projectdelete').patch(projectNameController.updateProjectNameCancel)

router.route('/')
    .get(projectNameController.getAllProjectName)
    .post(projectNameController.createProjectName)
    .patch(projectNameController.updateProjectName)
    .delete(projectNameController.deleteProjectName)

module.exports = router