const express = require('express')
const propertyRouter = express.Router()
const propertyController = require('../../controllers/propertyController')
const path = require('path')
const viewDir = path.resolve(__dirname, './../../views/layouts/', 'property');


propertyRouter.route('/listing').get(async (req, res) => {
    let listing = await propertyController.getWebListing()
    res.render(path.resolve(viewDir + '/listing'), { layout: 'index', properties: listing })

})

propertyRouter.route('/').get(async (req, res) => {
    let listing = await propertyController.getWebListing()
    res.render(path.resolve(viewDir + '/listing'), { layout: 'index', properties: listing })

})

module.exports = propertyRouter


