const inquirer = require('inquirer');
const mysql = require('mysql2');
const { allowedNodeEnvironmentFlags } = require('process');



const connection = mysql.createConnection(
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
        type: 'list',
        message: 'What would you like to do?',
        name:'Employee_Database',
        choices: [
          'View All Employees',
          'Add Employee',
          'Update Employee Role',
          'View All Roles',
          'Add Role',
          'View All Departments',
          'Add Department',
          'Quit'
        ]
      },
    ])
    .then((choice) => {
      switch(choice.Employee_Database){
        case "View All Employees": 
          viewEmployees()
          break;
        case "Add Employee":
          addEmployees()
          break;
        case "Update Employee Role":
          updateEmployee()
          break;
        case "View All Roles":
          viewRoles()
          break;
        case "Add Role":
          addRole()
          break;
        case "View All Departments":
          viewDepartments()
          break;
        case "Add Department":
          addDepartments()
          break;
        case "Quit":
          wantToQuit
        console.log("Thank you for using this app!")
          break;
          default:
          break;
      }

    })
  function viewDepartments(){
    connection.query("SELECT id,department_name FROM department", function (err,res) {
      if(err) throw err;
      console.log("Departments");
      console.table(res);
      startApp()
    })
  }
  function viewRoles(){
    connection.query("SELECT id, title, salary, department_id FROM roles", function(err,res){
      if(err) throw err;
      console.table(res);
      startApp()
    })
  }
  function viewEmployees(){
    connection.query(`SELECT employee.id, employee.first_name, employee.last_name, roles.id, department.department_name as Department, roles.salary, CONCAT(manager.first_name, " ", manager.last_name) as manager
    FROM employee
    LEFT JOIN roles ON employee.roles_id = roles.id
    LEFT JOIN department ON roles.department_id = department.id
    LEFT JOIN employee manager ON manager.id = employee.manager_id;`, function(err,res){
      if(err) throw err;
      console.table(res);
      startApp()
    })  
  }
  function addDepartments(){
    inquirer
    .prompt([
      {
        type: 'input',
        message:'What is the name of the department?',
        name: 'departmentName'
      },
      {
        type: "input",
        message: "What is the department id?",
        name: "id"
      }
    ]).then(answers => {
    let sql = `INSERT INTO department (id,department_name) VALUES (?, ? )`;
        connection.query(sql, [answers.id, answers.departmentName], (err, res) => {
        if (err) throw err;
        console.log('Added new role');
  })
    
    return startApp();
})
  }
  function addRole(){
    inquirer
    .prompt([
      {
       type: 'input',
       message: 'What is the name of the role?',
       name:'roleName',
      },
      {
        type:'input',
        message: 'What is the salary of the role?',
        name: 'roleSalary'
      },
      {
        type: 'list',
        message: ' Which department does this role belong to?',
        name:'departmentName',
        choices: [Engineering, Finance, Legal, Sales,]
      }
    ])
    .then((answers) => {
      let sql = `INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)`;
        connection.query(sql, [answers.title, answers.salary, answers.department_id], (err, res) => {
          if (err) throw err;
          console.log('Added new role');
    })
    return startApp();
  })
  }
  function addEmployees(){
    inquirer
    .prompt([
      {
       type: 'input',
       message: 'What is the employees first name?',
       name: 'firstname' 
      },
      {
        type: 'input',
        message:'What is the employees last name?',
        name: 'lastname'
      },
      {
        type: 'list',
        message: 'What is the employees role?',
        name:'role',
        choices: [Engineering, Finance, Legal, Sales,]
      },
      {
        type:'input',
        message:'Who is the employees manager?',
        name:"managerName"
      }
    ])
    .then((answers)=> {
        let sql = `INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)`;
          connection.query(sql, [answers.title, answers.salary, answers.department_id], (err, res) => {
            if (err) throw err;
            console.log('Added new role');
      })
    return startApp();
    })
  }
  function updateEmployee(){

  }
  const wantToQuit = () => {
   return startApp();
  }
}
startApp();

  