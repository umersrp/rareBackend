

const upload = require('../controllers/uploadController.js');

var uploadRouter = require("express").Router();

uploadRouter.post("/uploadPdf", upload.uploadDoc);
// uploadRouter.delete("/removePdf/:id", upload.deletePdf);

module.exports = uploadRouter;
