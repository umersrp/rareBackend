const express = require('express')
const router = express.Router()
const buildingNameController = require('../controllers/buildingNameController')
const multer = require('multer')

const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cd) {
            cd(null, 'public/buildingimages')
        },
        filename: function (req, file, cb) {

            cb(null, Date.now() + "_" + file.originalname)
        }
    })
}).any()

router.route('/:id').get(buildingNameController.getBuildingNameById)
router.route('/pagination/pages').get(buildingNameController.getPaginationBuilding)
router.route('/api/withdate').get(buildingNameController.getPaginationBuildingWithDat)
router.route('/api/search/:key').get(buildingNameController.getSearchBuilding)
router.route('/api/buildingname/:key').get(buildingNameController.getBuildingByName)
router.route('/api/projectname/').get(buildingNameController.getSearchBuildingNameProject)
router.route('/api/projectnamedelete/').get(buildingNameController.getBuildingProjectName)
router.route('/api/app/search/:key').get(buildingNameController.getAllBuildingNameSearchApp)
router.route('/api/buildingdelete/').patch(buildingNameController.updateBuildingNameCancel)

router.route('/')
    .get(buildingNameController.getAllBuildingName)
    .post(upload, buildingNameController.createBuildingName)
    .patch(upload, buildingNameController.updateBuilidingName)
    .delete(buildingNameController.deleteBuildingName)

module.exports = router