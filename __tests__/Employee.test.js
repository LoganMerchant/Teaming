const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('test', 4, 'blank@blank.com');

    expect(employee.name).toBe('test');
    expect(employee.employeeId).toEqual(expect.any(Number));
    expect(employee.email).toMatch('@');
});

test('checks that all properties is being returned', () => {
    const employee = new Employee('test', 4, 'blank@blank.com');

    expect(employee.getName()).toBe('test');
    expect(employee.getId()).toBe(4);
    expect(employee.getEmail()).toBe('blank@blank.com');
    expect(employee.getRole()).toBe('Employee');
});