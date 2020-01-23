const Employee = require("./Employee");
const fs = require("fs");


class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }

    renderHTML() {
        var card = fs.readFileSync('./Templates/Intern.html', {
            encoding: 'utf8'
        });
        card = this.replaceEmployeeInfo(card);
        card = card.replace("{{school}}", this.getSchool());

        return card;
    }
}
module.exports = Intern;