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

function updateBook(changes, id) {
    let currentBooks = JSON.parse(fs.readFileSync('booksDb.json'))
    const updatedIndex = currentBooks.findIndex(book => book.id === id)
    const updatedContent = {...currentBooks[updatedIndex],...changes}
    currentBooks[updatedIndex] = updatedContent
    fs.writeFileSync('booksDb.json', JSON.stringify(currentBooks))
}

function removeBook(id) {
    const books = JSON.parse(fs.readFileSync('booksDb.json'))
    const filteredBooks = books.filter(book => book.id !== id)
    fs.writeFileSync('booksDb.json', JSON.stringify(filteredBooks))
}

module.exports = {
    getAllBooks,
    getBookById,
    insertBook,
    updateBook,
    removeBook
}