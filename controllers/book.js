const { getAllBooks, getBookById, insertBook, updateBook, removeBook } = require('../services/book')

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
        if (id && Number(id)) {
            const book = getBookById(id)
            res.send(book)
        } else {
            res.status(422)
            res.send('Invalid book id')
        }


    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postBook(req, res) {
    try {
        const newBook = req.body
        if (req.body.name) {
            const insert = insertBook(newBook)
            if (insert && insert.type === 'Error') {
                res.status(503)
                res.send(insert.message)
                return false;
            }
            res.send('Book sucessfully added')
        } else {
            res.status(422)
            res.send('Invalid book name')
        }

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function patchBook(req, res) {
    try {
        const id = req.params.id

        if (id && Number(id)) {
            const body = req.body
            const edited = updateBook(body, id)
            console.log(typeof(edited))
            if ( edited  && edited.type === 'Error') {
                res.status(422)
                res.send('Invalid book id')
            }else{
                res.send('Book ' + id + ' sucessfully updated')
            }
            
        } else {
            res.status(422)
            res.send('Invalid book id')
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteBook(req, res) {
    try {
        const id = req.params.id

        if (id && Number(id)) {
            removeBook(id)
            res.send('Book ' + id + ' deleted')
        } else {
            res.status(422)
            res.send('Invalid book id')
        }

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}


module.exports = {
    getBooks,
    getBook,
    postBook,
    patchBook,
    deleteBook
}