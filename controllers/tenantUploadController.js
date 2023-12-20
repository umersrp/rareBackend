const fs = require("fs");
const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({

    destination: async function (req, file, next) {
        let pathName = path.resolve("public/" + file.fieldname);
        if (!fs.existsSync(pathName)) {
            fs.mkdirSync(pathName, { recursive: true }, (err) => {
                if (err) {
                    return next(err)
                }

            });
        }
        // return next(pathName)
        // console.log(pathName, "pathName")
        return next(null, pathName)
    },
    filename: async function (req, file, next) {
        // next(Date.parse(new Date().toISOString()) + '-' + file.originalname);
        next(null, Date.parse(new Date().toISOString()) + '-' + file.originalname);
        // console.log(file.fieldname + '-' + Date.parse(new Date().toISOString()) + '-' + file.originalname, "Date.parse(new Date().toISOString()) + '-' + file.originalname")
    },

});

const multerFilter = (req, file, cb) => {
    if (file.mimetype.split("/")[1] === "pdf" || file.mimetype.split("/")[1] === "png" || file.mimetype.split("/")[1] === "jpeg" || file.mimetype.split("/")[1] === "jpg") {
        // cb(true);
        cb(null, true);
    } else {
        cb(new Error("Not a PDF File!!"), false);
    }
};

const fileUploader = multer({
    storage: storage,
    limits: { fileSize: parseInt(7 * 1024 * 1024) },
    fileFilter: multerFilter

}).any();

const uploadImage = async (req, res) => {
    try {

        fileUploader(req, res, (err) => {

            if (err instanceof multer.MulterError) {
                // A Multer error occurred when uploading.
                return res.status(400).send({ status: "error", msg: err });// to display filesize error

            } else if (err) {
                return res.status(400).send({ status: "error", msg: 'Error in uploading' });// to display filesize error
            }


            if (typeof req.fileSizeError != "undefined") {
                console.log('size error')
                //if file size exceeds max size respond max size error
                res.status(400).send({ status: "error", msg: "max upload size is " + (process.env.maxUploadSize / (1024 * 1024)) + ' MB' });// to display filesize error
            } else {

                // console.log(req.files, "req");
                // console.log(req.files.filename, "filename");
                // console.log(req.files[0].path, "path")
                if ((req.files && req.files.length)) {

                    let files = [];

                    // let promises = 
                    req.files.map(async file => {

                        // files.push(file.path.replace(/\\/g, '/').split('rare_server')[1])
                        files.push(file.path.replace(/\\/g, '/').split('server')[1])
                        // files.push(await File.create({
                        //     filename: file.filename,
                        //     baseUrl: process.env.baseUrlBackend,
                        //     path: filePath.substr(1, filePath.length - 1),
                        //     type: req.body.type ? req.body.type : 'journalDoc'
                        // }));
                        // console.log(files.path, "path")
                        // console.log(files, "files")
                    })
                    // await Promise.all(promises)

                    res.send({ status: 'ok', files: files, message: "Document uploaded successfully!" });

                }
                else {
                    console.log('no body');
                    res.status(400).send({ status: 'error', message: "No document to upload" });
                }
            }
        })
    } catch (err) {
        console.log('catch', err);
        res.status(500).send({ status: 'error', message: err.errors });
    };
};

module.exports = {
    uploadImage
}