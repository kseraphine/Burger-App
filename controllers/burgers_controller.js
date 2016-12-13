// Import express and our model
// =================================================================================================
var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

// Create the router
// =================================================================================================
router.get('/', function (req, res) {
    res.redirect('/burgers');
});

router.get('/burgers', function (req, res) {
    burger.selectAll(function (data) {
        console.log({ burgers: data });
        res.render('index', { burgers: data });
    });
});

router.post('/burgers/create', function (req, res) {
    burgers.addOne(function (['burger_name', 'devoured'], [res.body.name, res.body.devoured], function () {
        res.redirect('/cats');
    });
});

router.put('/burgers/update/:id', function (req, res) {
    var condition = 'id=' + req.params.id;
    console.log('condition', condition);
    
})