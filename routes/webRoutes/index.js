const router = require('express').Router();
const path = require('path')
const url = require("url");

router.use("*", function (req, res, next) {
    res.locals.absoluteUrl = process.env.BASE_URL + 'web'; // Note, you'll need to calculate this yourself
    next();
});
router.use('/property', require('./propertyRoutes'))

router.use('/', function (req, res) {
    let uri = url.parse(req.url).path;
    return path.parse(req.url).base ? res.sendFile(path.resolve(__dirname, './../../web/'+ uri)) :  res.render(path.resolve(__dirname, './../../views/' + 'main'), { layout: 'index' });
});

module.exports = router

