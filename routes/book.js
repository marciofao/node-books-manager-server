const { Router } = require('express')
const { getBooks } = require('../controllers/book')

const router = Router()

router.get('/', getBooks)

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
