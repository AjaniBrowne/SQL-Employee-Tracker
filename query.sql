SELECT employees.employee_id, employees.employee_first_name, employees.employee_last_name, roles.role_title, departments.department_name as Department, roles.role_salary, CONCAT(manager.employee_first_name, " ", manager.employee_last_name) as manager
FROM employees
LEFT JOIN roles ON employees.role_id = roles.role_id
LEFT JOIN departments ON roles.department_id = departments.department_id
LEFT JOIN employees manager ON manager.employee_id = employees.manager_id;