const multer = require('multer')


    
        const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            if (file.fieldname === "expenseAttachment") {
            cb(null, "./public/expsenseImgae/");
            } else if (file.fieldname === "category_image") {
            cb(null, "./public/Category/");
            } else if (file.fieldname === "product_image") {
            cb(null, "./public/Product/");
            }
        },
        filename: function (req, file, cb) {
            if (file.fieldname === "expenseAttachment") {
            const filename = file.originalname.split(" ").join("-");
            cb(null, `${filename}`);
            } else if (file.fieldname === "category_image") {
            const filename = file.originalname.split(" ").join("-");
            cb(null, `${filename}`);
            } else if (file.fieldname === "product_image") {
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
  { name: "category_image", maxCount: 8 },
  { name: "product_image", maxCount: 8 },
]);

// const singleupload = multer({
//     storage: storage,
// }).single('expenseAttachment')

module.exports = { upload};
