// ==============================================================================================================
// DEPENDENCIES 
// List of NPM packages to make our app work
// ==============================================================================================================
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exhbs = require('express-handlebars');
var routes = require('./controllers/burger-controller.js');
var port = 3000;
var app = express();

// ==============================================================================================================
// Serve up content from the "public" directory in the application directory.
// ==============================================================================================================
app.use(express.static(process.cwd() + './public'));

app.use(bodyParser.urlencoded({
    entended: false
}));

// ==============================================================================================================
// override with POST having ?_method=DELETE --This is a horrible description of the following code
// ==============================================================================================================
app.use(methodOverride('_method'));

app.engine('handlebars', exhbs({
    defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

app.use('/', routes);

app.listen(port);