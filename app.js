const express = require('express');
const app = express();
const port = 8000;
app.get('/', (req, res) => {
    res.send('Hello World, it works!')
})

app.listen(port, () => { 
    console.log(`listening port ${port}`)
})