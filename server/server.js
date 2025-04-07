//server.js

const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors())

app.listen(8080, () => {
    console.log('server is listening on port 8080')
})

app.get('/', (req, res) => {
    res.send("Hello world!")
})