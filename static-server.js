var express  = require('express');
var app      = express();                             
var bodyParser = require('body-parser');   
app.use(express.static(__dirname + '/dist'));            
app.listen(9000);
console.log("App listening on port 9000");