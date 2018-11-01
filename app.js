const express = require('express');
const bodyParser = require('body-parser');
// initialize our express app
const app = express();

let hello= require('./routes/hello')
app.use('/hello', hello)

let port = 9000;
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});