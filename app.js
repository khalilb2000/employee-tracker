const inquirer = require('inquirer');
const Queries = require('./queries');

// the statrt of function
async function mainMenu(){
// User action prompt
    const answer = await inquirer.createPromptModule([
        {
            type: 'list',
            name:'choice',
            message:'What do you want to view?',
            choices: [
                'All departments',
                'All roles',
                'Add a role',
                'Add a department',
                'Quit',
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
                
}
