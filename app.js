// Importing modules
const mysql = require('mysql')
const inquirer = require('inquirer');
const Queries = require('./queries');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'yourpassword',
    database:'employee_db'
});

// the statrt of function
async function mainMenu(){
// User action prompt
    const answer = await inquirer.prompt([
        {
            type: 'list',
            name:'choice',
            message:'What do you want to view?',
            choices: [
                'All departments',
                'All roles',
                'Add a role',
                'Add a department',
                'Exit ', //corrected 'quit' to 'exit'
            ]
        }
    ])
}

switch (answer.choice){
// Switching prompts
    case 'View all departments':
            viewAllDepartments();
            break;   
            
               case 'Add a role':
                viewAllRoles();
                break;

                case 'Exit':
                    exitOption()
                    console.log('Goodbye!');
                    break; 
                
}

async function viewAllDepartments(){
    // Here I am adding a try catch function to ensure we see reason for error. 
    try{
        const [departments] = await Queries.getAllDepartments();
        console.table(departments);
        mainMenu();

    } catch (error){
        console.error('Error fetching departments:', error);
        mainMenu();
    }
}

async function viewAllRoles(){
try {
    const [roles] = await Queries.viewAllRoles
} catch (error) {
    console.error('Error fetching all roles:', error);
    mainMenu();
}

}

async function exitOption(){
    try{
        const[exit] = await Queries.Quit
    } catch(error){
        console.error('Error quitting application:', error);
        mainMenu();
    }
}















connection.end();