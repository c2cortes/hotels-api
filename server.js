const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.send('Hotels API');
})

app.listen(3000);