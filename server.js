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
        const query = "SELECT department_id FROM role WHERE ?";
        connection.query(query, { })
    })
};
//3
function mgrEmployees() {

};
//4
function addEmployee() {

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

