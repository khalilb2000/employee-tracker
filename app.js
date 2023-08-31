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
               await viewAllDepartments();
                break;

                case 'Add department':
               await addDepartment();
                break;

                case 'View all roles':
                     await viewAllRoles();
                    break;

                    case 'Add a role':
                       await viewAddRole();
                        
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

async function viewAllRoles(){
try {
    const roles = await Queries.getAllRoles();
    console.table(roles);
    mainMenu();
} catch (error) {
    console.error('Error getting roles', error); 
}

}


async function viewAddRole(){
// Forgot to give add role actuall add role options so I fixed that, here are your differemt prompts and options.

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
    console.error('Error adding role:', 'Missing or invalid input. Please provide all required values.');
    
   }
}

async function addDepartment() {
    try {
        const departmentData = await inquirer.prompt([
            {
                type: 'input',
                name: 'departmentName',  // Use camelCase for the name
                message: 'Please enter department name',
            }
        ]);

        await Queries.addDepartment(departmentData.departmentName);  // Pass the department name to the function
        console.log('Department added!');
    } catch (error) {
        console.error('Error adding department', error);
    }
}


async function exitOption(){
    try {
        
        console.log('Goodbye!');
        mainMenu()
    } catch (error) {
        console.error('Error quitting',error);
    }
};


// Start of function
mainMenu();




