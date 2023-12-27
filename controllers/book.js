function getBooks(req, res) => {
    try{
        res.send('Hello World, it works!')
    }catch(error){
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getBooks
}