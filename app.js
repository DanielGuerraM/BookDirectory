const express = require('express');
const api = require('./api');

const app = express();
const port = 3000;

app.use(express.json());
app.use('/api/v1', api);


app.listen(port, () =>{
    console.log(`The app is up on port ${port}`)
});