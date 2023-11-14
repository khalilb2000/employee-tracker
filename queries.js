const connection = require('./db');

class Queries {
    
    static getAllDepartments() {
        return connection.promise().query('SELECT * FROM department')
            .catch((error) => {
                throw new Error(`Error in getAllDepartments: ${error.message}`);
            });
    }

    static getAllRoles() {
        return connection.promise().query('SELECT * FROM role')
            .catch((error) => {
                throw new Error(`Error in getAllRoles: ${error.message}`);
            });
    }

    static addRole(title, salary, departmentId) {
        const sql = 'INSERT INTO role (title, salary, department_id) VALUES (?,?,?)';
        console.log('Executing query:', sql);
        return connection.promise().query(sql, [title, salary, departmentId])
            .catch((error) => {
                throw new Error(`Error in addRole: ${error.message}`);
            });
    }

    static addDepartment(name) {
        const sql = 'INSERT INTO department (name) VALUES (?)';
        console.log('Executing query:', sql);
        return connection.promise().query(sql, [name])
            .catch((error) => {
                throw new Error(`Error in addDepartment: ${error.message}`);
            });
    }

    static quit() {
        return connection.promise().end()
            .catch((error) => {
                throw new Error(`Error in quit: ${error.message}`);
            });
    }
}

module.exports = Queries;
