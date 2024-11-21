// Write and read file  operations
const fs = require('fs')

// Step 1: Create and write to the file
// fs.writeFile('welcome.txt', 'Hello Node 😯', (err) => {
//   if (err) {
//     console.error('Error writing file:', err)
//     return
//   }

//   console.log('File "welcome.txt" created and written successfully')
// })

// Step 2: Read and log the content of the file
fs.readFile('welcome.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err)
  } else {
    console.log('File content:', data)
  }
})
