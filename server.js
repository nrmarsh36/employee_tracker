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
            "View all employees by manager",
            "Add an employee",
            "Remove an employee",
            "Update an employee's role",
            "Update an employee's manager"
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
        
        case "View all employees by manager":
            mgrEmployees();
            break;

        case "Add an employee":
            addEmployee();
            break;

        case  "Remove an employee":
            removeEmployee();
            break;

        case "Update an employee's role":
            updateRole();
            break;
        
        case "Update an employee's manager":
            updateMgr();
            break;        
        };
    });
};

 //1
function allEmployees() {
    console.log("Displaying all employees... \n")
    connection.query("SELECT * FROM employees", function(err, res) {
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
        const query = "SELECT name FROM department WHERE ?";
        connection.query(query, { department: answer.department}, function(err, res) {
            for (var i = 0; i < res.length ; i++) {
                console.log("Department: " + res[i].name);
            }
            start();
        });
    });
};

//3
function mgrEmployees() {

};

//4
function addEmployee() {
    inquirer
    .prompt ({
        name: "add",
        type: "input",
        choices: function() {
            const infoArray = [];
            for (var i = 0; i < results.length; i++) {
                infoArray.push(results[i].item)
            }
        }
    })   
};


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
                role: answer.role
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

};
//6
function updateRole() {

};
//7
function updateMgr() {

};

