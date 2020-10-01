const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('test', 4, 'blank@blank.com');

    expect(employee.name).toBe('test');
    expect(employee.employeeId).toEqual(expect.any(Number));
    expect(employee.email).toMatch('@');
});

test('checks that the basic info for an employee is being returned', () => {
    const employee = new Employee('test', 4, 'blank@blank.com');

    expect(employee.getBasicInfo()).toHaveProperty('name');
    expect(employee.getBasicInfo()).toHaveProperty('id');
    expect(employee.getBasicInfo()).toHaveProperty('email');
});