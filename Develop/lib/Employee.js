
//Propertiesssss
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    //Methodsssss

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getName() {
        return this.name;
    }

    getRole() {
        return "Employee";
    }

    replaceEmployeeInfo(card) {
        card = card.replace("{{name}}", this.getName());
        card = card.replace("{{role}}", this.getRole());
        card = card.replace("{{id}}", this.getId());
        card = card.replace("{{email}}", this.getEmail());
        return card;
    }
}

module.exports = Employee;
