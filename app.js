// Importing modules
const mysql = require('mysql2');
const inquirer = require('inquirer');
const Queries = require('./queries');
const connection = require('./db');

// Use the connection object directly if it's a promise-based pool
const promiseConnection = connection;

// Start of mainMenu function
async function mainMenu() {
    try {
        const answer = await inquirer.prompt([
            {
                type: 'list',
                name: 'choice',
                message: 'What do you want to view?',
                choices: [
                    'View all departments',
                    'View all roles',
                    'Add a role',
                    'Add a department',
                    'Exit',
                ],
            },
        ]);

        switch (answer.choice) {
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
        console.error('Error in mainMenu:', error.message, error);
    }
}

// Function to view all departments
async function viewAllDepartments() {
    try {
        const departments = await Queries.getAllDepartments();
        console.table(departments);
        mainMenu();
    } catch (error) {
        console.error('Error fetching departments:', error.message, error);
        mainMenu();
    }
}

// Function to view all roles
async function viewAllRoles() {
    try {
        const roles = await Queries.getAllRoles();
        console.table(roles);
        mainMenu();
    } catch (error) {
        console.error('Error getting roles:', error.message, error);
        mainMenu();
    }
}

// Function to add a role
async function viewAddRole() {
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

// Function to add a department
async function addDepartment() {
    try {
        const departmentData = await inquirer.prompt([
            {
                type: 'input',
                name: 'departmentName',
                message: 'Please enter department name',
            },
        ]);

        await Queries.addDepartment(departmentData.departmentName);
        console.log('Department added!');
    } catch (error) {
        console.error('Error adding department:', error.message, error);
    }
}

// Function to exit the application
async function exitOption() {
    try {
        console.log('Goodbye!');
        await Queries.quit();
    } catch (error) {
        console.error('Error quitting:', error.message, error);
    }
}

// Start of the application
mainMenu();
