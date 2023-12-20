

const PropertyUpload = require('../controllers/propertUploadController');

var propertyUpload = require("express").Router();

propertyUpload.post("/propertyimages", PropertyUpload.uploadImage);
// propertyUpload.delete("/removePdf/:id", upload.deletePdf);

module.exports = propertyUpload;
