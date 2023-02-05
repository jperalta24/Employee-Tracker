
const inquirer = require('inquirer');
const db = require('./db/connections');
// const cTable = require('console.table');

const startPrompt = () => {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'What would you like to do?',
                choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department',
                    'Add a role', 'Add an employee', 'Update an employee role', 'Quit'],
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
                case 'Add a department':
                    addDepartment();
                    break;
                case 'Add a role':
                    addRole();
                    break;
                case 'Add an employee':
                    addEmployee();
                    break;
                case 'Update an employee role':
                    updateEmployee();
                    break;
                case 'Quit':
                    quit();
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
        startPrompt();
    });
};

const viewRoles = () => {
    db.query('SELECT * FROM role', (error, results, fields) => {
        if (error) throw error;
        console.table(results);
        startPrompt();
    });
};

const viewEmployees = () => {
    db.query('SELECT * FROM employee', (error, results, fields) => {
        if (error) throw error;
        console.table(results);
        startPrompt();
    });
};

const addDepartment = () => {
    inquirer
        .prompt
        (
            [
                {
                    type: 'input',
                    message: 'What is the name of the new department?',
                    name: 'department'
                },
            ]
        )
        .then((answer) => {
            db.query(`INSERT INTO department (name) VALUES ('${answer.department}')`, (error) => {
                if (error) throw error;
                console.log(`The department '${answer.department}' has been added successfully.`);
                startPrompt();
            });
        });
};

const addRole = () => {
    // retrieves all departments from database
    db.query('SELECT name FROM department', (error, results) => {
        if (error) throw error;
        //the .map method is being used to iterate over the results of the database query and extracts the names of the departments to create an array of choices.
        const departmentNames = results.map(department => department.name)

        inquirer
            .prompt
            (
                [
                    {
                        type: 'input',
                        message: 'What is the name of the new role?',
                        name: 'role'
                    },
                    {
                        type: 'input',
                        message: 'What is the salary of the new role?',
                        name: 'salary',
                        validate: salary => {
                            if (isNaN(salary)) {
                                console.log('Please enter a salary in number format');
                                return false;
                            } else {
                                return true;
                            }
                        }
                    },
                    {
                        type: 'list',
                        message: 'What department do you want to add the role to?',
                        choices: departmentNames,
                        name: 'department'
                    }
                ]
            )
            .then((answers) => {
                // values passed in insert statements should match the data type of the columns in the table.
                db.query(`INSERT INTO role (title, salary, department_id) VALUES ('${answers.role}', ${answers.salary}, 
                (SELECT id FROM department WHERE name = '${answers.department}') )`, (error) => {
                    if (error) throw error;
                    console.log(`The new '${answers.role}' has been added successfully.`);
                    startPrompt();
                });
            });
    });
};

const addEmployee = () => {
    // creates an array of choices for each role title 
    db.query('SELECT * FROM role', (error, results) => {
        if (error) throw error;
        const roleChoices = results.map(role => role.title);
        // creates an array of choices for manager 
        db.query('SELECT * FROM employee', (error, results) => {
            if (error) throw error;
            const managerChoice = results.map(employee =>
                `${employee.first_name} ${employee.last_name}`);


            inquirer
                .prompt([
                    {
                        type: 'input',
                        message: 'What is the employees first name?',
                        name: 'first_name'
                    },
                    {
                        type: 'input',
                        message: 'What is the employees last name?',
                        name: 'last_name'
                    },
                    {
                        type: 'list',
                        message: 'What is the employees role?',
                        choices: roleChoices,
                        name: 'role',
                    },
                    {
                        type: 'list',
                        message: 'Who is the employee\'s manager?',
                        choices: managerChoice,
                        name: 'manager',
                    }
                ])
                .then((answers) => {
                    const manager = results.find(employee => `${employee.first_name} ${employee.last_name}` === answers.manager);
                    db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id)
                VALUES ('${answers.first_name}', '${answers.last_name}',
                        (SELECT id FROM role WHERE title = '${answers.role}'),
                        ${manager ? manager.id : null})`,
                        (error) => {
                            if (error) throw error;
                            console.log(`The employee '${answers.first_name} ${answers.last_name}' has been added successfully.`);
                            startPrompt();
                        })
                })
        })
    });
};

const updateEmployee = () => {

    db.query(`SELECT * FROM employee`, (error, results) => {
        if (error) throw error;
        const employeeChoices = results.map(employee => `${employee.first_name} ${employee.last_name}`);

        db.query('SELECT * FROM role', (error, results) => {
            if (error) throw error;
            const roleChoices = results.map(role => role.title);

            inquirer
                .prompt(
                    [
                        {
                            type: 'list',
                            message: 'Which employee do you want to update?',
                            choices: employeeChoices,
                            name: employees
                        },
                        {
                            type: 'list',
                            message: 'What is the employees new role?',
                            choice: roleChoices,
                            name: roles
                        }
                    ]
                )
                .then((answers) => {
                    const selectedEmployee = answers.employeeChoices;
                    const selectedRole = answers.roleChoices;
                    db.query(`SELECT id FROM employee WHERE CONCAT(first_name, ' ', last_name) ='${selectedEmployee}'`,
                        (error, results) => {
                            if (error) throw error;
                            const employeeID = results[0].id;


                            db.query(`SELECT id FROM role WHERE title = '${selectedRoleTitle}'`, (error, results) => {
                                if (error) throw error;
                                const selectedRoleId = results[0].id;
                                db.query(`UPDATE employee SET role = ${selectedRoleId} WHERE id = ${employeeID}`,
                                    (error, results) => {
                                        if (error) throw error;
                                        console.log('The employee role has been updated successfully.');
                                    })

                            })
                        })

                })
        })
    })
};

const quit = () => {
    console.log('Goodbye');
    // node js method that that terminates the node js process
    process.exit();
};

startPrompt();
