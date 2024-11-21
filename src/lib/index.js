// import dotenv package
const dotenv = require('dotenv')
// initiate the config for dotenv
dotenv.config()

module.exports = {
  PORT: process.env.PORT,
  CLIENT_ID: process.env.CLIENT_ID,
  CLIENT_SECRET: process.env.CLIENT_SECRET,
  ACCESS_TOKEN: process.env.ACCESS_TOKEN,
  REFRESH_TOKEN: process.env.REFRESH_TOKEN,
  USER_EMAIL: process.env.USER_EMAIL,
}
