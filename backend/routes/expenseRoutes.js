const express = require('express')
const router = express.Router()
const {
    getExpenses, 
    setExpense, 
    updateExpense, 
    deleteExpense
} = require('../controllers/expenseController')

router.route('/').get(getExpenses).post(setExpense)
router.route('/:id').delete(deleteExpense).put(updateExpense)

module.exports = router