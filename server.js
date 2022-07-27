const inquirer = require('inquirer');
const mysql = require('mysql2');


const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: 'rootroot',
      database: 'employee_db'
    },
    console.log(`Connected to the employee_db database.`)
  );

  function startApp(){
    inquirer
    .prompt([
      {
        type: 'input',
        message: 'What would you like to do?',
        name:'',
        choices: [
          'View All Employees',
          'Add Employee',
          'Update Employee Role',
          'View All Roles',
          'Add Role',
          'View All Departments',
          'Add Department',
          'Quit',
          'View All Employees'
        ]
      },
      {
        type: 'input',
        message: ''
      }
    ])
  }

  