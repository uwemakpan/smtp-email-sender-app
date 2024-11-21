const express = require('express')
const app = express()

// app.use('./index.html')
const userRoutes = require('./routes/user.route')

app.use(express.json())

// server health check
app.use('/', userRoutes)

module.exports = app
