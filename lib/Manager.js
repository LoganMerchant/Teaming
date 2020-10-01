const Employee = require('./Employee.js');

class Manager extends Employee {
    constructor(officeNumber) {
        super();

        this.officeNumber = officeNumber;
    };
};

module.exports = Manager;