// Import our ORM 
// =====================================================================================================
var orm = require('../config/orm.js');

// Setup our model
// =====================================================================================================
var burger = {
    selectAll: function(cb) {
        orm.selectAll('burgers', function(result) {
            cb(result);
        });
    },
    addOne: function(cb) {
        orm.addOne('burger_name', function(result) {
            cb(result);
        });
    },
    eatOne: function(cb) {
        orm.eatOne('id', function(result) {
            cb(result);
        });
    }
};

module.exports = burger;