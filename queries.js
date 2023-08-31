// funcion for executing queries ( don't forget to return the promise)
const connection = require('./db')

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

    static quit(){
        return connection.promise().end();
    }
}



module.exports = Queries;
