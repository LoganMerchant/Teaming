const Employee = require('./Employee.js');

class Manager extends Employee {
    constructor(name, employeeId, email, officeNumber) {
        super(name, employeeId, email);

        this.name = name;
        this.employeeId = employeeId;
        this.email = email;

        this.officeNumber = officeNumber;
    };

    getOfficeNumber() {
        return this.officeNumber;
    };
    
    getRole() {
        return 'Manager';
    };
};

module.exports = Manager;