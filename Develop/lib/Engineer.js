const Employee = require("./Employee");
const fs = require("fs");

class Engineer extends Employee {
    // Propertiess
    constructor(name, id, email, github) {
        // What in the world does Super do??
        super(name, id, email);
        this.github = github;
    }
    // Methodsss
    getGithub() {
        return this.github;
    }
    getRole() {
        return "Engineer";
    }

    renderHTML() {
        var card = fs.readFileSync('./Templates/Engineer.html', {
            encoding: 'utf8'
        });
        card = this.replaceEmployeeInfo(card);
        card = card.replace("{{github}}", this.getGithub());

        return card;
    }
}
module.exports = Engineer;

// function () {
//     this.ghAccount = ghAccount;
//     this.roleEngineer = roleEngineer;
//     this.ghUser = ghUser;
// };