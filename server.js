'user strict'
const express = require('express');
const bodyParser = require('body-parser');
const app = express();


//  parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));


// If no route found 404
app.use('/', (req, res, next) => res.status(404).json('404 Api not found'));


app.listen(3000);
console.log('server is started on port 3000')