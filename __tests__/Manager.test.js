const Manager = require('../lib/Manager.js');

test('checks that an office number is being returned', () => {
    const manager = new Manager('test', 9999, 'test@test.com', 1111);

    expect(manager.officeNumber).toEqual(1111);
});

test('checks that all manager info is being returned', () => {
    const manager = new Manager('test', 9999, 'test@test.com', 1111);

    expect(manager.getBasicInfo()).toMatchObject({
        name: 'test',
        employeeId: 9999,
        email: 'test@test.com',
    });
    expect(manager.getOfficeNumber()).toEqual(1111);
})