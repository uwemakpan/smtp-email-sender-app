const randomPassword = require('generate-password')

const getPassword = () => {
  const pwd = randomPassword.generate()

  console.log(pwd)
}

// call the password function
getPassword()
