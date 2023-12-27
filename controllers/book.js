function getBooks(req, res){
    try{
        //throw new Error('This is a custom error')
        res.send('Hello World, it works!')
    }catch(error){
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getBooks
}