// // const express = require('express');
// const mysql = require('mysql2');
// const inquirer = require('inquirer');
// const cTable = require('console.table');

const db = require('./db');

// const starPrompt = () => {
//     return inquirer
//         .prompt([
//             {
//                 type: 'list',
//                 message: 'What would you like to do?',
//                 choices: ['View all departments', 'View all roles', 'View all employees', 'View all'],
//                 name: 'selection'
//             }
//         ])
//         .then((answers) => {
//             switch (answers.selection) {
//                 case 'View all departments':
//                    viewDepartments();
//                     break;
//                 case 'View all roles':
//                     db.query('SELECT * FROM role')
//                     console.table(answers.selection);
//                     break;
//                 case 'View all employees':
//                     db.query('SELECT * FROM employee')
//                     console.table(answers.selection);
//                     break;
//                     default:
//                         console.log ('invalid selection');
//             }


//             // else if (answers.selection == 'Add an employee') {
//             //     inquirer.prompt(
//             //         [
//             //             {
//             //             type: 'input',
//             //             message: 'What is the first name of the employee',
//             //             name: 'firstName'
//             //         },
//             //         {
//             //             type: 'input',
//             //             message: 'What is the last name of the employee',
//             //             name: 'lastName'
//             //         }
//             //     ]
//             //     )
//             // }
//         });
// }

// const viewDepartments = async () => {
//     const [rows, fields] = await db.query('SELECT * FROM departments');
//     console.table(rows);
//     starPrompt();
//   };
// starPrompt();

const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');


// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'JocLuc&Aug81',
//   database: 'employee_db'
// });
// db.connect();
const starPrompt = () => {
    return inquirer
        .prompt([
            {
                type: 'list',
                message: 'What would you like to do?',
                choices: ['View all departments', 'View all roles', 'View all employees'],
                name: 'selection'
            }
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
console.log(inquirer.prompt);