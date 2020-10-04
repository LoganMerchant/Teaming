const Manager = require('../lib/Manager.js');

test('checks that an office number is being returned', () => {
    const manager = new Manager('test', 9999, 'test@test.com', 1111);

    expect(manager.officeNumber).toEqual(1111);
});

test('checks that Manager is inheriting Employee, & returning all of its info', () => {
    const manager = new Manager('test', 9999, 'test@test.com', 1111);

    expect(manager.getName()).toBe('test');
    expect(manager.getId()).toBe(9999);
    expect(manager.getEmail()).toBe('test@test.com');
    expect(manager.getOfficeNumber()).toBe(1111);
    expect(manager.getRole()).toBe('Manager');
})