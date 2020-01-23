
// NPM Directories

const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


var roleChoices = ['Manager', 'Engineer', 'Intern'];

var submissions = [];

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
                choices: roleChoices
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
            },
            {
                type: "confirm",
                name: "another",
                message: "Do you want to add another?"
            }
        ]).then(function (answers) {

            if (answers.role === "Manager") {
                submissions.push(new Manager(answers.name, answers.employeeId, answers.email, answers.officeNumber));
                roleChoices = ['Engineer', 'Intern'];
            } else if (answers.role === "Engineer") {
                submissions.push(new Engineer(answers.name, answers.employeeId, answers.email, answers.gitHub));
            } else if (answers.role === "Intern") {
                submissions.push(new Intern(answers.name, answers.employeeId, answers.email, answers.school));
            }

            if (answers.another) {
                getEmployeeInfo();
            } else {
                end();
            }

        });
}

function end() {
    console.log('Generating HTML...');

    var cards = '';
    for (let index = 0; index < submissions.length; index++) {
        const employee = submissions[index];
        cards += employee.renderHTML();
    }
    // Replace {{cards}} with cards variable
    var mainHTML = fs.readFileSync('./Templates/main.html', {
        encoding: 'utf8'
    });
    mainHTML = mainHTML.replace("{{cards}}", cards);
    fs.writeFileSync('./Output/team.html', mainHTML);
    console.log('Done!');
}

getEmployeeInfo();

