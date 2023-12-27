const fs = require('fs')

function getAllBooks() {
    return JSON.parse(fs.readFileSync('booksDb.json'))
}

module.exports = {
    getAllBooks
}