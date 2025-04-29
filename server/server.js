//server.js

const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors())
app.use(express.json());

app.listen(8080, () => {
    console.log('server is listening on port 8080')
})

app.get('/api', (req, res) => {
    res.send("Hello world!")
})

app.post('/api', (req, res) => {
    console.log('Recieved data:', req.body);
    res.status(200).json({message: "Data recieved successfully"});
});
