

INSERT INTO department (name) 
VALUES ('Sales'),
        ('Engineering'),
        ('Finance'),
        ('Legal');

INSERT INTO role (title, salary, department_id)
VALUES ('Salesperson', 80000, 1),
        ('Lead Engineer', 150000, 2),
        ('Software Engineer', 120000, 2),
        ('Account Manager', 160000, 3),
        ('Accountant', 125000, 3),
        ('Legal Team Lead', 250000, 4),
        ('Lawyer', 190000, 4);

        
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('John', 'Smith', 1, NULL ),
        ('Jacob', 'Shelby', 2, NULL ),
        ('Jingleheimer', 'Cruz', 3, 2),
        ('Schmidt', 'Jones', 4, NULL),
        ('Augustus', 'P', 5, 4),
        ('Jocko', 'Willink', 6, NULL),
        ('Lucy', 'Pie', 7, 6);
