// import http protocol from node.js
const http = require('http')
const { PORT } = require('./lib/index')
const app = require('./app')

// create the server
const httpServer = http.createServer(app)

const startServer = (req, res) => {
  httpServer.listen(4000, () => {
    console.log(`Hello Node.js running on port: ${PORT}`)
    return `<h1>Hello Node!!!!</h1>\n`
    // res.status(200).json({ message: 'successful' })
  })
}
// start server by calling the startServer function
startServer()
