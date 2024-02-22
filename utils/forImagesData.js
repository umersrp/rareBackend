const multer = require('multer')


    
        const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            if (file.fieldname === "expenseAttachment") {
            cb(null, "./public/expsenseImgae/");
            } else if (file.fieldname === "tenancy_contract_doc") {
            cb(null, "./public/tenancy_contract_doc#/");
            } else if (file.fieldname === "key_receipt_doc") {
            cb(null, "./public/key_receipt_doc/");
            }else if (file.fieldname === "ejari_certificate_doc") {
                cb(null, "./public/ejari_certificate_doc/");
            }else if (file.fieldname === "addendum_doc") {
                cb(null, "./public/addendum_doc/");
            }else if (file.fieldname === "chequeimage") {
                cb(null, "./public/chequeimage/");
            }
        },
        filename: function (req, file, cb) {
            if (file.fieldname === "expenseAttachment") {
            const filename = file.originalname.split(" ").join("-");
            cb(null, `${filename}`);
            } else if (file.fieldname === "tenancy_contract_doc") {
            const filename = file.originalname.split(" ").join("-");
            cb(null, `${filename}`);
            } else if (file.fieldname === "key_receipt_doc") {
                const filename = file.originalname.split(" ").join("-");
                cb(null, `${filename}`);
            }else if (file.fieldname === "ejari_certificate_doc") {
            const filename = file.originalname.split(" ").join("-");
            cb(null, `${filename}`);
            }else if (file.fieldname === "addendum_doc") {
                const filename = file.originalname.split(" ").join("-");
                cb(null, `${filename}`);
            }else if (file.fieldname === "chequeimage") {
                const filename = file.originalname.split(" ").join("-");
                cb(null, `${filename}`);
            }

        },

        limits: {
            fileSize: 30 * 1024 * 1024, 
        },
        fileFilter: function (req, file, cb) {
            const allowedFileTypes = /jpeg|jpg|pdf|png/;

            const extname = allowedFileTypes.test(file.mimetype);
            const mimetype = allowedFileTypes.test(file.mimetype);

            if (file.size > 30 * 1024 * 1024) {
                cb(new Error('File size exceeds 10 MB limit!'));
            } else if (mimetype && extname) {
                cb(null, true);
            } else {
                cb(new Error('Only jpeg, jpg, pdf, and png files are allowed!'));
            }
        }
        });

const upload = multer({
  storage: storage,
}).fields([
  { name: "expenseAttachment", maxCount: 8 },
  { name: "tenancy_contract_doc", maxCount: 8 },
  { name: "key_receipt_doc", maxCount: 8 },
  { name: "ejari_certificate_doc", maxCount: 8 },
  { name: "addendum_doc", maxCount: 8 },
  { name: "chequeimage", maxCount: 8 }
]);

// const singleupload = multer({
//     storage: storage,
// }).single('expenseAttachment')

module.exports = { upload};
