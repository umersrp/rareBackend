const express = require("express")
const router = express.Router()
const rolesController = require('../controllers/rolesController')

router.route("/:id").get(rolesController.getRole)
router.route("/pagination/pages").get(rolesController.getPaginationRoles)
router.route("/api/withdate").get(rolesController.getPaginationRolesWithDate)
router.route("/api/search/:key").get(rolesController.getSearchRoles)
router.route("/api/app").get(rolesController.getAllRolesForApp)
router.route("/api/app/search/:key").get(rolesController.getAllRolesForAppSearch)
router.route('/api/rolesdelete').patch(rolesController.updateRolesCancel)

router.route('/')
    .get(rolesController.getAllRoles)
    .post(rolesController.createNewRoles)
    .patch(rolesController.updateRole)
    .delete(rolesController.deleteRole)

module.exports = router