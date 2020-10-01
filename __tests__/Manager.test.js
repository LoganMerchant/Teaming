const Employee = require('../lib/Employee.js');
const Manager = require('../lib/Manager.js');

jest.mock('../lib/Employee.js');

test('checks that an office number is being returned', () => {
    const manager = new Manager(1111);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});