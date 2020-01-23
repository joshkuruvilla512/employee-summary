const Employee = require("./Employee");

class Manager extends Employee {
    // Propertiess
    constructor(name, id, email, officeNumber) {
        // What in the world does Super do??
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    // Methodsss
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return "Manager";
    }
}
module.exports = Manager;