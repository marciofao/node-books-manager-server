const { Router } = require('express')
const { getBooks, getBook, postBook } = require('../controllers/book')

const router = Router()

router.get('/', getBooks)

router.get('/:id', getBook)

router.post('/', postBook)

router.patch('/', (req, res) => {
    res.send('You sent a PATCH request')
})

router.delete('/', (req, res) => {
    res.send('You sent a DELETE request')
})


module.exports = router
