const fs = require('fs')

function getAllBooks() {
    return JSON.parse(fs.readFileSync('booksDb.json'))
}

function getBookById(id) {
    const books = JSON.parse(fs.readFileSync('booksDb.json'))
    const filteredBook = books.filter(book => book.id === id)[0]
    return filteredBook
}

function insertBook(newBook) {
    const books = JSON.parse(fs.readFileSync('booksDb.json'))
    const newBooksList = [...books, newBook]
    fs.writeFileSync('booksDb.json', JSON.stringify(newBooksList))
}

module.exports = {
    getAllBooks,
    getBookById,
    insertBook
}