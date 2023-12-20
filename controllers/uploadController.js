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
        return next(null, pathName)
    },
    filename: async function (req, file, next) {
        next(null, Date.parse(new Date().toISOString()) + '-' + file.originalname);
    },

});

const multerFilter = (req, file, cb) => {
    const fileExtension = path.extname(file.originalname).toLowerCase();
    // console.log(file, "file")
    if (file.mimetype.split("/")[1] === "pdf" || file.mimetype.split("/")[1] === "png" || file.mimetype.split("/")[1] === "jpeg" || file.mimetype.split("/")[1] === "jpg") {
        cb(null, true);
    } else if (fileExtension === ".pdf" || fileExtension === ".png" || fileExtension === ".jpeg" || fileExtension === ".jpg") {
        cb(null, true);
    } else {
        cb(new Error("Not a PDF File!!"), false);
    }
};

const fileUploader = multer({
    storage: storage,
    limits: { fileSize: parseInt(process.env.maxUploadSize) },
    fileFilter: multerFilter

}).any();

exports.uploadDoc = async (req, res) => {
    try {
        // console.log(req.files, "req.files")
        fileUploader(req, res, (err) => {

            if (err instanceof multer.MulterError) {
                // A Multer error occurred when uploading.
                return res.status(400).send({ status: "error", msg: err });// to display filesize error

            } else if (err) {
                console.log(err, "err")
                return res.status(400).send({ status: "error", msg: 'Error in uploading' });// to display filesize error
            }


            if (typeof req.fileSizeError != "undefined") {
                console.log('size error')
                //if file size exceeds max size respond max size error
                res.status(400).send({ status: "error", msg: "max upload size is " + (process.env.maxUploadSize / (1024 * 1024)) + ' MB' });// to display filesize error
            } else {

                // console.log(req.files);
                if ((req.files && req.files.length)) {

                    let files = [];

                    // let promises = 
                    req.files.map(async file => {

                        files.push(file.path.replace(/\\/g, '/').split('rare_server')[1])
                        // files.push(file.path.replace(/\\/g, '/').split('server')[1])
                        // files.push(await File.create({
                        //     filename: file.filename,
                        //     baseUrl: process.env.baseUrlBackend,
                        //     path: filePath.substr(1, filePath.length - 1),
                        //     type: req.body.type ? req.body.type : 'journalDoc'
                        // }));
                    })
                    // await Promise.all(promises)

                    res.send({ status: 'ok', files: files, message: "Document uploaded successfully!" });

                }
                else {
                    // console.log('no body');
                    res.status(400).send({ status: 'error', message: "No document to upload" });
                }
            }
        })
    } catch (err) {
        console.log('catch', err);
        res.status(500).send({ status: 'error', message: err.errors });
    };
};


// Delete a file with the specified id in the request
// exports.deletePdf = async (req, res) => {
    // try {

    //     if (!req.params.id) {
    //         res.status(500).send({ status: 'error', message: 'id required' })
    //         return
    //     }

    //     let file = await File.findOne({
    //         where: {
    //             id: req.params.id
    //         }
    //     });

    //     if (file) {
    //         let directoryPath = path.resolve(__dirname + '/../' + file.path)
    //         fs.unlink(directoryPath, async (err) => {
    //             if (err) {
    //                 console.log('error in deleting file from path', err)
    //                 res.status(500).send({ message: "document not found" });
    //             }
    //             else {

    //                 let deleted = await File.destroy({
    //                     where: {
    //                         id: req.params.id
    //                     }
    //                 });
    //                 if (deleted) res.send({ status: 'ok', message: "Document deleted successfully!" });
    //                 else res.status(400).send({ status: 'error', message: "cannot delete document" });

    //             }
    //         })
    //     }
    //     else {
    //         res.status(400).send({ status: 'error', message: "document not found" });
    //     }

    // } catch (error) {
    //     console.log('error in deleting file', error);
    //     res.status(500).send({ status: 'error', message: "error in deleting file" });
    // }
// };


