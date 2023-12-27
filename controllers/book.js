const fs = require('fs')
function getBooks(req, res){
    try{
        const books = JSON.parse(fs.readFileSync('booksDb.json'))
        res.send(books)
    }catch(error){
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getBooks
}