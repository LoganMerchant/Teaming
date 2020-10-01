class Employee {
    constructor() {
        this.name = 'test';
        this.employeeId = 9999;
        this.email = 'test@test.test';
    };

    getBasicInfo() {
        return {
            name: this.name,
            employeeId: this.employeeId,
            email: this.email,
        };
    };
};

module.exports = Employee;