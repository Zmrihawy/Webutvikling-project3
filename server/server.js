const express = require('express')
const bodyParser = require("body-parser");

const example = require('./example/example.js');

const app = express()
const port = 3000
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/example', example);

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
