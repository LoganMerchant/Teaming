const Engineer = require('../lib/Engineer.js'); 

test('checks to see if engineer is returning a username', () => { 
    const engineer = new Engineer('test', 9999, 'test@test.com', 'testname'); 
    
    expect(engineer.username).toBe('testname'); 
}); 

test('checks to see if Engineer properly inherits Employee', () => { 
    const engineer = new Engineer('test', 9999, 'test@test.com', 'testname'); 
    
    expect(engineer.getBasicInfo()).toMatchObject({ 
        name: 'test', 
        employeeId: 9999, 
        email: 'test@test.com', 
    }); 
    expect(engineer.getUsername()).toBe('testname'); 
});