const Engineer = require('../lib/Engineer.js'); 

test('checks to see if engineer is returning a username', () => { 
    const engineer = new Engineer('test', 9999, 'test@test.com', 'testname'); 
    
    expect(engineer.github).toBe('testname'); 
}); 

test('checks to see if Engineer properly inherits Employee, & displays all its info', () => { 
    const engineer = new Engineer('test', 9999, 'test@test.com', 'testname'); 
    
    expect(engineer.getName()).toBe('test');
    expect(engineer.getId()).toBe(9999);
    expect(engineer.getEmail()).toBe('test@test.com');
    expect(engineer.getGithub()).toBe('testname');
    expect(engineer.getRole()).toBe('Engineer'); 
});