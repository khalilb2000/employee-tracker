const  mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'',
    database:'employee_db',
})

module.exports = connection;

const connection = require('./db');

class Queries {
    static getAllDepartments() {
        return connection.promise().query('SELECT * FROM department');
    }

    static getAllRoles() {
        return connection.promise().query('SELECT * FROM role');
    }

    static addRole(title, salary, departmentId) {
        // constructing and executing mySQL query
        const sql = 'INSERT INTO role (title, salary, department_id) VALUES (?,?,?)';
        return connection.promise().query(sql, [title, salary, departmentId]);
    }

    static addDepartment(name) {
        const sql = 'INSERT INTO department (name) VALUES (?)';
        return connection.promise().query(sql, [name]);
    }
}

module.exports = Queries;
