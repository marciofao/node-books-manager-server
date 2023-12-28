const { getAllBooks, getBookById, insertBook } = require('../services/book')

function getBooks(req, res) {
    try {
        const books = getAllBooks()
        res.send(books)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function getBook(req, res) {
    try {
        const id = req.params.id
        const book = getBookById(id)
        res.send(book)
    } catch (error) {

    }
}

function postBook(req, res) {
    try { 
        const newBook = req.body
        insertBook(newBook)
        res.send('Book sucessfully added')
    } catch (error) { 
        res.status(500)
        res.send(error.message) 
    }
}


module.exports = {
    getBooks,
    getBook,
    postBook
}