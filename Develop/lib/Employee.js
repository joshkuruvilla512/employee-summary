const inquirer = require("inquirer");
//Propertiesssss
class Employee {
    constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
}
//Methodsssss

getName() {
    return this.name
}

getId() {
    return this.id
}

getEmail() {
    return this.email
}

getName() {
    return this.name
}

getRole() {
    return "Employee"
}
}

module.exports = Employee

// function () {
//     this.name = name;
//     this.email = email;
//     this.id = id;
//     this.role = role;
// };