const asyncHandler = require('express-async-handler')

const Income = require('../models/incomeModel')
const User = require('../models/userModel')

// @desc    Get incomes
// @route   GET /api/incomes
// @access  Private
const getIncomes = asyncHandler(async (req, res) => {
    const incomes = await Income.find({user: req.user.id})

    res.status(200).json(incomes)
})

// @desc    Set income
// @route   POST /api/incomes
// @access  Private
const setIncome = asyncHandler(async (req, res) => {

    const income = await Income.create({
        namaPemasukan: req.body.namaPemasukan,
        besarPemasukan: req.body.besarPemasukan,
        tanggal: req.body.tanggal,
        jenisPemasukan: req.body.jenisPemasukan,
        dompet: req.body.dompet,
        note: req.body.note,
        user: req.user.id,
    })

    res.status(200).json(income)
})

// @desc    Update income
// @route   PUT /api/incomes/:id
// @access  Private
const updateIncome = asyncHandler(async (req, res) => {
    const income = await Income.findById(req.params.id)

    if(!income){
        res.status(400)
        throw new Error('Income not found')
    }

    const user = await User.findById(req.user.id)

    // Check for user
    if (!user) {
        res.status(401)
        throw new Error('User not found')
    }

    // Make sure the logged in user matches the income user
    if (income.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    const updatedIncome = await Income.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatedIncome)
})

// @desc    Delete income
// @route   DELETE /api/incomes/:id
// @access  Private
const deleteIncome = asyncHandler(async (req, res) => {
    const income = await Income.findById(req.params.id)

    if(!income){
        res.status(400)
        throw new Error('Income not found')
    }

    const user = await User.findById(req.user.id)

    // Check for user
    if (!user) {
        res.status(401)
        throw new Error('User not found')
    }

    // Make sure the logged in user matches the income user
    if (income.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    await income.deleteOne()

    res.status(200).json({id: req.params.id})
})

module.exports = {
    getIncomes,
    setIncome,
    updateIncome, 
    deleteIncome,
}