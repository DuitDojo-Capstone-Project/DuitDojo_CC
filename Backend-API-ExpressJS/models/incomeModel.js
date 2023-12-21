const mongoose = require('mongoose')

const incomeSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId, 
        required: true, 
        ref: 'User'
    },
    namaPemasukan: {
        type: String,
        required: [true, "Please enter a income name"]
    },
    besarPemasukan: {
        type: Number,
        required: true,
        default: 0
    },
    tanggal: {
        type: Date,
        required: true
    },
    jenisPemasukan: {
        type: [String], 
        required: true,
        enum: ['Salary', 'Bonus', 'Investment', 'Selling', 'Gift', 'Others']
    },
    dompet: {
        type: [String], 
        required: true,
        enum: ['Cash', 'E-money', 'Debit card', 'Credit card']
    },
    note: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Income', incomeSchema)