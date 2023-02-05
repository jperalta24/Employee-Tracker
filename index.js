
const inquirer = require('inquirer');
const db = require('./db/connections');
// const cTable = require('console.table');

const starPrompt = () => {
    inquirer
    .prompt([
        {
            type: 'list',
            message: 'What would you like to do?',
            choices: ['View all departments', 'View all roles', 'View all employees'],
            name: 'selection'
        },
    ])
        .then((answers) => {
            switch (answers.selection) {
                case 'View all departments':
                    viewDepartments();
                    break;
                case 'View all roles':
                    viewRoles();
                    break;
                case 'View all employees':
                    viewEmployees();
                    break;
                default:
                    console.log("Invalid choice");
            }
        });
};

const viewDepartments = () => {
    db.query('SELECT * FROM department', (error, results, fields) => {
        if (error) throw error;
        console.table(results);
        starPrompt();
    });
};

const viewRoles = () => {
    db.query('SELECT * FROM role', (error, results, fields) => {
        if (error) throw error;
        console.table(results);
        starPrompt();
    });
};

const viewEmployees = () => {
    db.query('SELECT * FROM employee', (error, results, fields) => {
        if (error) throw error;
        console.table(results);
        starPrompt();
    });
};

starPrompt();
