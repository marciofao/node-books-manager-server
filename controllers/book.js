<<<<<<< HEAD
function getBooks(req, res){
    try{
        //throw new Error('This is a custom error')
=======
function getBooks(req, res) => {
    try{
>>>>>>> 797567f5191f6e5f099c25e1ef771ea1461911bf
        res.send('Hello World, it works!')
    }catch(error){
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getBooks
}