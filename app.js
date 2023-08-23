const inquirer = require('inquirer');
const Queries = require('./queries');

async function mainMenu(){
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