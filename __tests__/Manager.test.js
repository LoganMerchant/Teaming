const Manager = require('../lib/Manager.js');

jest.mock('../lib/Employee.js');

test('checks that an office number is being returned', () => {
    const manager = new Manager(1111);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('checks that all manager info is being returned', () => {
    const manager = new Manager(1111);

    expect(manager.getBasicInfo()).toEqual(expect.any(Object));
    expect(manager.getOfficeNumber).toEqual(expect.any(Number));
})