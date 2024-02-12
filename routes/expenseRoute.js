const express = require('express')
const router = express.Router()
const expenseController = require('../controllers/expenseController')
const { upload } = require('../utils/forImagesData');





router.route('/create').post(upload , expenseController.createExpenseData)
router.route('/get').get(expenseController.getallExpsenses)
router.route('/get/:id').get(expenseController.getByidExpense)
router.route('/update/:id').put(upload , expenseController.updateExpenseRecord)
router.route('/softdelete/:id').put(expenseController.SoftdeleteExpenseRecord)
router.route('/delete/:id').delete(expenseController.deleteExpenseRecord)



module.exports = routers