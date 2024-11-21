const express = require('express')
const { getAllUsers, sendMail } = require('../controllers/user.controller')

const userRoutes = express.Router()

// test getAllUsers controller
userRoutes.get('/', getAllUsers)

// send a new email
userRoutes.post('/email/send', sendMail)

module.exports = userRoutes
