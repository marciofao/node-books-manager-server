const fs = require('fs')

function getAllBooks() {
    return JSON.parse(fs.readFileSync('booksDb.json'))
}

function getBookById(id) {
    const books = JSON.parse(fs.readFileSync('booksDb.json'))
    const filteredBook = books.filter(book => book.id === id)[0]
    return filteredBook
}

module.exports = {
    getAllBooks,
    getBookById
}