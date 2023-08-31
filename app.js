// Importing modules
const mysql = require('mysql2')
const inquirer = require('inquirer');
const Queries = require('./queries');
const database = require('./db');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: ' ',
    database:'employee_db'
});

// the statrt of mainMenu function

async function mainMenu() {
    try {
        const answer = await inquirer.prompt([
            {
                type: 'list',
                name: 'choice',
                message:'What do you want to view?',
                choices:[
                    'View all departments',
                    'View all roles',
                    'Add a role',
                    'Add a department',
                    'Exit',
                ]
            }
        ]);

        switch (answer.choice){
            case 'View all departments':
                viewAllDepartments();
                break;

                case 'View all roles':
                    viewAllRoles();
                    break;

                    case 'Add a role':
                        viewAddRole();
                        break;

                        case 'Exit':
                            exitOption();
                            console.log('Goodbye!');
                            break;
        }
    } catch (error) {
        console.error('Error',error);
        
    }
}

async function viewAllDepartments(){
    try {
        const departments = await Queries.getAllDepartments();
        console.table(departments);
        mainMenu();
    } catch (error) {
        console.error('Error fetching departments', error);
        mainMenu();
    }
}
async function viewAddRole(){
   try {
    const roleData = await inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter the role title',
        },
        
        {
            type: 'input',
            name: 'salary',
            message: 'Enter the role salary',
        },

        {
            type: 'input',
            name: 'departmentId',
            message: 'Enter the department ID',
        },


    
    ]);
    await Queries.addRole(roleData.title, roleData.salary, roleData.departmentId);
   } catch (error) {
    console.error('Error adding role', error);
   }
}


async function exitOption(){
    try {
        const departments = await Queries.quit();
        console.log('Goodbye!');
        mainMenu()
    } catch (error) {
        console.error('Error quitting',error);
    }
};


// Start of function
mainMenu();




connection.end();