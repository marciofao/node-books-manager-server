const { Router } = require('express')

const router = Router()

router.get('/', (req, res) => {
    res.send('Hello World, it works!')
})

module.exports = router
