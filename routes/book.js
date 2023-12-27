const {router} = require('express')

const router = Router()


app.get('/', (req, res) => {
    res.send('Hello World, it works!')
})

module.exports = router
