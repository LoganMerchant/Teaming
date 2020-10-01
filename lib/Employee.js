class Employee {
    constructor(name, employeeId, email) {
        this.name = name;
        this.employeeId = employeeId;
        this.email = email;
    };

    getBasicInfo() {
        return {
            name: this.name,
            id: this.employeeId,
            email: this.email,
        };
    };
};

module.exports = Employee;