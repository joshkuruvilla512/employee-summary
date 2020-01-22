const Employee = require("./Employee");

class Engineer extends Employee {
    // Propertiess
    constructor(name, id, email, github) {
        // What in the world does Super do??
        super(name, id, email)
        this.github = github;
    }
    // Methodsss
    getGithub() {
        return this.github
    }
    getRole() {
        return "Engineer"
    }
}
module.exports = Engineer

// function () {
//     this.ghAccount = ghAccount;
//     this.roleEngineer = roleEngineer;
//     this.ghUser = ghUser;
// };