SELECT employee.id, employee.first_name, employee.last_name, roles.id, department.department_name as Department, roles.salary, CONCAT(manager.first_name, " ", manager.last_name) as manager
FROM employee
LEFT JOIN roles ON employee.roles_id = roles.id
LEFT JOIN department ON roles.department_id = department.id
LEFT JOIN employee manager ON manager.id = employee.manager_id;