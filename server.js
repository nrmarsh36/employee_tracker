var mysql = require("mysql");
var inquirer = require("inquirer");
var express = require("express")

var connection = mysql.createConnection({
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
        type:"rawlist",
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
}