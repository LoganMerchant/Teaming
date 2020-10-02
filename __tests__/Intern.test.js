const Intern = require('../lib/Intern.js');

test('tests that a school is being returned', () => {
    const intern = new Intern('test', 9999, 'test@test.com', 'school');

    expect(intern.school).toEqual('school');
});

test('tests that Intern is inheriting Employee', () => {
    const intern = new Intern('test', 9999, 'test@test.com', 'school');

    expect(intern.getBasicInfo()).toMatchObject({ 
        name: 'test', 
        employeeId: 9999, 
        email: 'test@test.com', 
    });
    expect(intern.getSchool()).toEqual('school');
});
