const mysql = require('mysql2');

const employeeConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'employee_db'
});

module.exports = {
    employeeConnection
};
