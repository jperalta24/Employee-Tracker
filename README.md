# Employee-Tracker

## Introduction 

This project is a command-line application that allows a business owner to manage their company's employee database using Node.js, Inquirer, and MySQL. The application allows the user to view and manage departments, roles, and employees. The user can add new departments, roles, and employees to the database, as well as update an employee's role.

![](/Images/Screenshot%202023-02-07%20193825.jpg)

## Prerequisites

Before you begin, ensure that you have installed the following:

- Node.js
- MySQL
- Inquirer version 8.2.4

## Installing Inquirer

To install Inquirer version 8.2.4, run the following command in your project folder:

npm i inquirer@8.2.4

## User Story

As a business owner, I want to be able to view and manage the departments, roles, and employees in my company so that I can organize and plan my business.

## Acceptance Criteria

The application will meet the following acceptance criteria:

- When the application starts, the user is presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role.
- When the user chooses to view all departments, they are presented with a formatted table showing department names and department ids.
- When the user chooses to view all roles, they are presented with a formatted table showing job title, role id, the department that role belongs to, and the salary for that role.
- When the user chooses to view all employees, they are presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to.
- When the user chooses to add a department, they are prompted to enter the name of the department and that department is added to the database.
- When the user chooses to add a role, they are prompted to enter the name, salary, and department for the role and that role is added to the database.
- When the user chooses to add an employee, they are prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database.
- When the user chooses to update an employee role, they are prompted to select an employee to update and their new role and this information is updated in the database.

## Video Demonstration

A video walkthrough of the application's functionality can be found at Link: (https://drive.google.com/file/d/1BEv18Ngx6Sug2PABJUoMT3jGtzaQzVDV/view)

### Built With 
- Node.js
- MySQL
- Inquirer

### Author
Jonathan Peralta 

### Acknowledgements
- My tutor
- Bootcamp LA's 

