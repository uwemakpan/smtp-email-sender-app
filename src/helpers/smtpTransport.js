const nodemailer = require('nodemailer')
const { google } = require('googleapis')

const envVariables = require('../lib/index')

const { CLIENT_ID, CLIENT_SECRET, ACCESS_TOKEN, REFRESH_TOKEN, USER_EMAIL } =
  envVariables

// getting the OAuth2 property from the google auth API
const OAuth2 = google.auth.OAuth2
const OAuth2Client = new OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  'https://developers.google.com/oauthplayground'
)

// set credentials for the OAuth Client
OAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN })

// Create transport for the nodemailer
const transport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: USER_EMAIL,
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    accessToken: ACCESS_TOKEN,
    refreshToken: REFRESH_TOKEN,
  },
})

// export the transport function
module.exports = transport
