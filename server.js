require('dotenv').config();
const express = require('express');
const api = require('./api');

const app = express();

const port = 3000;

app.use(express.static(__dirname + "./public"));
app.use('/public', express.static(__dirname + "./public"))
app.use('/books', api);
app.use(express.json());

app.get('/', (req, res) =>{
    res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () =>{
    console.log(`The app is up on port ${port}`)
});