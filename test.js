const fs = require('fs')
const currentData = JSON.parse(fs.readFileSync('booksDb.json'))
const newData = {id: '3', name: 'Even better book' }

fs.writeFileSync('booksDb.json', JSON.stringify([...currentData, newData ])) 

console.log(JSON.parse(fs.readFileSync('booksDb.json')))
