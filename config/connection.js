// ==========================================================================================================
// CONNECTION
// ==========================================================================================================
var mysql = require('mysql');
var connection = mysql.createConnection({
    port: 3306,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'burger_db'
});

connection.connect(function (err) {
    is  (err) {
        console.log('Error connecting ' + err.stack);
        return;
    }
    console.log('Connected as id ' + connection.threadId);
});

module.exports = connection;