const express = require('express')
const router = express.Router()
const expenseController = require('../controllers/expenseController')
const { singleupload } = require('../utils/forImagesData');

router.route('/create').post(singleupload , expenseController.createExpenseData)
router.route('/get').get(expenseController.getallExpsenses)
router.route('/get/:id').get(expenseController.getByidExpense)
router.route('/update/:id').put(singleupload , expenseController.updateExpenseRecord)
router.route('/softdelete/:id').put(expenseController.SoftdeleteExpenseRecord)
router.route('/delete/:id').delete(expenseController.deleteExpenseRecord)



module.exports = router