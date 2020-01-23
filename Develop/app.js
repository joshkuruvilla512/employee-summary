
// NPM Directories

const fs = require("fs");
const inquirer = require("inquirer");

// Inquirer Questions
function getEmployeeInfo() {
    inquirer
        .prompt([
            //Start by prompting for user role
            {
                type: "input",
                name: "name",
                message: "What is your name?"
            },
            {
                type: "list",
                message: "What is your company role?",
                name: "role",
                choices: [
                    "Manager",
                    "Engineer",
                    "Intern"
                ]
            },
            {
                type: "input",
                name: "employeeId",
                message: "What is your employee ID?"
            },
            {
                type: "input",
                name: "email",
                message: "What is your email?"
            },
            {
                type: "input",
                name: "officeNumber",
                message: "What is your Office Number?",
                when: function (answers) {
                    return answers.role === 'Manager';
                }
            },
            {
                type: "input",
                name: "gitHub",
                message: "What is your Github name?",
                when: function (answers) {
                    return answers.role === 'Engineer';
                }
            },
            {
                type: "input",
                name: "school",
                message: "What School did you attend?",
                when: function (answers) {
                    return answers.role === 'Intern';
                }
            }
            ////////////// Employee Information
        ]).then(
            function (answers) {

            }
        );
}

getEmployeeInfo();

