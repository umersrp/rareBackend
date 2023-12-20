const TenantUpload = require('../controllers/tenantUploadController');

var tenantUpload = require("express").Router();

tenantUpload.post("/tenantimages", TenantUpload.uploadImage);
// tenantUpload.delete("/removePdf/:id", upload.deletePdf);

module.exports = tenantUpload;
