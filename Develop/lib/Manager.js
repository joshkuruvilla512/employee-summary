const Employee = require("./Employee");
const fs = require("fs");

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

    renderHTML() {
        var card = fs.readFileSync('./Templates/Manager.html', {
            encoding: 'utf8'
        });
        card = this.replaceEmployeeInfo(card);
        card = card.replace("{{officeNumber}}", this.getOfficeNumber());

        return card;
    }
}
module.exports = Manager;