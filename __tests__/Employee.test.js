const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('Test', 4, 'blank@gmail.com');

    expect(employee.name).toBe('Test');
    expect(employee.employeeId).toEqual(expect.any(Number));
    expect(employee.email).toMatch('@');
});