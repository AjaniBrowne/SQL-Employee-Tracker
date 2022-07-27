INSERT INTO department (id, department_name) 
VALUES  (1,"Sales",),
        (2,"Engineering", ),
        (3,"Finance", ),
        (4,"Legal", ),

INSERT INTO role (id, title, salary, department_id)
VALUES  (1,"Saleslead", 100000, 1),
        (2,"Salesperson", 80000, 1),
        (3,"Lead Engineer", 150000, 2),
        (4,"Software Engineer", 120000, 2),
        (5,"Account Manager", 160000, 3),
        (6,"Accountant", 125000, 3),
        (7,"Legal Team Lead", 250000, 4),
        (8,"Lawyer", 190000, 4),

INSERT INTO employee(id, first_name, last_name, title, department_id, salary, manager )
VALUES  (1,"John", "Doe", "Sales Lead", 1, 100000, NULL),
        (2,"Mike", "Chan", "Salesperson", 1, 80000,  "John Doe"),
        (3,"Ashley", "Rodriguez", "Lead Engineer", 2, 150000, NULL),
        (4,"Kevin", "Tupik", "Software Engineer", 2, 120000, "Ashley Rodriguez"),
        (5,"Kunal", "Singh", "Account Manager", 3, 160000, NULL),
        (6,"Malia", "Brown", "Accountant", 3, 125000, "Kunal Singh"),
        (7,"Sarah", "Lourd", "Legal Team Lead", 4, 250000, NULL),
        (8,"Tom", "Allen", "Lawyer", 4, 190000, "Sarah Lourd"),
        