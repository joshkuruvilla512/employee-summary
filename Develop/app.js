
// NPM Directories

const fs = require("fs");
const inquirer = require("inquirer");

// Inquirer Questions

inquirer
    .prompt([
        //Start by prompting for user role
        {
            type: "input",
            name: "name",
            message: "What is your name?"
        },
        {
            type: "input",
            name: "employeeId",
            message: "What is your employee ID?"
        },
        {
            type: "list",
            message: "What is your company role?",
            name: "role",
            choices: [
                "engineer",
                "intern",
                "manager"
            ]
        },

        ////////////// Employee Information
    ]).then(
        function (answer) {
            roleQuestions(answer.role)
        }
    )

function roleQuestions(role) {
    console.log("role: ", role)
    const questions = [];
    if (role === "engineer") {
        questions.push(
            {
                type: "input",
                name: "username",
                message: "Please enter your GitHub Username"
            }
        )
    }
    inquirer
        .prompt(

            ////////////// if engineer
            questions
           

        )
}

