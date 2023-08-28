const  mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'',
    database:'your_database',
})

module.exports = connection;