const mysql = require("mysql");
const inquirer = require("inquirer");
const express = require("express")

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "employee_tracker_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log(`Connected to mysql as id ${connection.threadId}`);
  start();
});

// Add departments, roles, employees
// View departments, roles, employees
// Update employee roles

function start() {
    inquirer
    .prompt({
        name:"action",
        type:"list",
        message: "What would you like to do?",
        choices: [
            "View all employees",
            "View all employees by department",
            // "View all employees by manager",
            "Add an employee",
            "Remove an employee",
            "Update an employee's role",
            // "Update an employee's manager"
        ]
    })
    .then(function(answer) {
        switch (answer.action) {
        case "View all employees":
            allEmployees();
            break;
            
        case "View all employees by department":
            dptEmployees();
            break;
        
        // case "View all employees by manager":
        //     mgrEmployees();
        //     break;

        case "Add an employee":
            addEmployee();
            break;

        case  "Remove an employee":
            removeEmployee();
            break;

        case "Update an employee's role":
            updateRole();
            break;
        
        // case "Update an employee's manager":
        //     updateMgr();
        //     break;        
        };
    });
};

 //1
function allEmployees() {
    console.log("Displaying all employees... \n")
    connection.query("SELECT * FROM employee", function(err, res) {
        if (err) throw err;
        console.log(res);
        //Do i need this???
        start();
    });
};

//2
function dptEmployees() {
    inquirer
    .prompt({
        name:"employee",
        type: "list",
        message: "What department would you like to select?",
        choices: [
            "IT Department",
            "Accounting",
            "Human Resources",
            "Sales",
            "Management"
        ]
    })
    .then(function(answer) {
        const query = "SELECT first_name, last_name FROM employee WHERE role_id = department_id FROM department";
        connection.query(query, { department: answer.department}, function(err, res) {
            for (var i = 0; i < res.length ; i++) {
                console.log("Employees: " + res[i].first_name, res[i].last_name);
            }
            start();
        });
    });
};

//3
// function mgrEmployees() {

// };

//4
function addEmployee() {
    inquirer
    .prompt([
        {
            name: "first_name",
            type: "input",
            message: "What is the employee's first name?"
        },
        {
            name: "last_name",
            type: "input",
            message: "What is the employee's last name?"
        }, 
        {
            name: "role",
            type: "list",
            message: "What is the employee's role?",
            choices: [
                "Engineer",
                "Accountant",
                "Hiring Expert",
                "Outside Sales",
                "Management"
            ]
        }
    ])
    .then(function(answer) {
        connection.query(
            "INSERT INTO employee SET ?",
            {
                first_name: answer.first_name,
                last_name: answer.last_name,
                role_id: answer.role_id
            },
        function(err) {
            if (err) throw err;
            console.log("Employee added successfully.");
        start();
            }
        );
    });
};

//5
function removeEmployee() {
    connection.query('SELECT first_name, last_name FROM employee', (err, res) => {
        if (err) throw err;
    inquirer
    .prompt({
        name: "remove",
        type: "rawlist",
        message: "Which employee would you like to remove?",
        choices: res
    })
    .then(connection.query("DELETE FROM employee WHERE ?", { answer: answer },
        function(err, res) {
            if (err) throw err;
            console.log(res.affectedRows + "has been removed.\n");
            start();
            }
            )
        );
    });
};

//6
function updateRole() {
    connection.query("SELECT first_name, last_name, role_id FROM employee", function(err, results) {
        if (err) throw err;
        inquirer
            .prompt([{
                    name: "choices",
                    type: "rawlist",
                    message: "Which employee would you like to update?",
                    choices: function() {
                        const choiceArray = [first_name, last_name, role_id];
                        for (var i = 0; i < results.length; i++) {
                            choiceArray.push(results[i].first_name, results[i].last_name, results[i].role_id);
                            }
                        return choiceArray
                        },
                        name: "newRole",
                        type: "list",
                        message: "What is the employee's new role?",
                        choices: function() {
                            var roleArray = [role_id, title];
                            for (var i = 0; i < results.length; i++) {
                                roleArray.push(results[i].role_id, results[i].title)
                            }
                        }
                    }])
                    .then(function(answer) {
                        var query = "UPDATE role_id, title FROM role";
                        connection.query(query, [answer.first_name, answer.last_name, answer.role_id], function(err, results) {
                            for (var i = 0; i < results.length; i++) {
                                console.log(
                                    "Employee: " + results[i].first_name + results[i].last_name,
                                    "Role: " + results[i].role_id
                                );
                            }
                            start();
                        })
                    });              
    });
};
//7
// function updateMgr() {

// };

