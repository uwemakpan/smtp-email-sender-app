const { USER_EMAIL } = require('../lib/index')
const transport = require('../helpers/smtpTransport')

// check health of the controller functionality
const getAllUsers = (request, response) => {
  try {
    response.send('Mailer app is about to be launched 📧')
    // return response.status(200).json({ message: 'Connection succeeded ✅' })
  } catch (error) {
    return response.status(404).json({ message: 'Internal Server Error' })
  }
}

const sendMail = async (request, response) => {
  const { email, message } = request.body

  const mailOptions = {
    to: email,
    from: USER_EMAIL,
    subject: 'Test smtp email message',
    html: `<h3> This message is a message sent from google api and nodemailer </h3>`,
  }

  // use the transport to call the sendEmail function
  try {
    await transport.sendMail(mailOptions)

    return response
      .status(200)
      .json({ message: 'Message sent successfully ✅' })
  } catch (error) {
    response.status(404).json({ message: 'Internal Server Error 🛑' })
  }
}

module.exports = { getAllUsers, sendMail }
