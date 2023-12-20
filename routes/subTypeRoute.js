const express = require('express')
const router = express.Router()
const subTypeController = require('../controllers/subTypeController')

router.route('/:id').get(subTypeController.getSubTypeById)
router.route('/pagination/pages').get(subTypeController.getPaginationSubType)
router.route('/api/withdate').get(subTypeController.getPaginationSubTypeWithDate)
router.route('/api/search/:key').get(subTypeController.getSearchSubType)
router.route('/api/app/search/:key').get(subTypeController.getAlSubTypeNameSearchApp)
router.route('/api/subtypedelete').patch(subTypeController.updateSubTypeCancel)

router.route('/')
    .get(subTypeController.getAlSubTypeName)
    .post(subTypeController.createSubType)
    .patch(subTypeController.updateSubType)
    .delete(subTypeController.deleteSubType)

module.exports = router