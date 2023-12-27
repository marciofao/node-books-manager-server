const { Router } = require('express')

const router = Router()

router.get('/', (req, res) => {
    try{
        res.send('Hello World, it works!')
    }catch(error){
        res.status(500)
        res.send(error.message)
    }
})

router.post('/', (req, res) => {
    res.send('You sent a POST request')
})

router.patch('/', (req, res) => {
    res.send('You sent a PATCH request')
})

router.delete('/', (req, res) => {
    res.send('You sent a DELETE request')
})

module.exports = router
