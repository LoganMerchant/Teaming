const Intern = require('../lib/Intern.js');

test('tests that a school is being returned', () => {
    const intern = new Intern('test', 9999, 'test@test.com', 'school');

    expect(intern.school).toEqual('school');
});

test('tests that Intern is inheriting Employee, & returning its info', () => {
    const intern = new Intern('test', 9999, 'test@test.com', 'school');

    expect(intern.getName()).toBe('test');
    expect(intern.getId()).toBe(9999);
    expect(intern.getEmail()).toBe('test@test.com');
    expect(intern.getSchool()).toBe('school');
    expect(intern.getRole()).toBe('Intern');
});
