const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.json('message: DuitDojo API is here!!!');
    res.status(200);
});

app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/expenses', require('./routes/expenseRoutes'))
app.use('/api/incomes', require('./routes/incomeRoutes'))

app.use(errorHandler)

// app.listen(port, () => console.log(`Server started on port ${port}`))
app.listen(process.env.PORT || 4000, function () {
    console.log("Ready to GO!");
});