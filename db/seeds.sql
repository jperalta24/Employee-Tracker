INSERT INTO department (id, name) 
VALUES ('Sales'),
        ('Engineering'),
        ('Finance'),
        ('Legal');

INSERT INTO role (id, title, salary, department_id)
VALUES ('Salesperson','80000'),
        ('Lead Engineer', '150000'),
        ('Software Engineer', '120000'),
        ('Account Manager','160000'),
        ('Accountant', '125000'),
        ('Legal Team Lead', '250000'),
        ('Lawyer','190000');

        
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES ('John', 'Smith'),
        ('Jacob', 'Shelby'),
        ('Jingleheimer', 'Cruz'),
        ('Schmidt', 'Jones'),
        ('Augustus', 'P'),
        ('Jocko', 'Willink'),
        ('Lucy', 'Pie');