const Employee = require('./Employee.js'); 

class Engineer extends Employee { 
    constructor(name, employeeId, email, github) { 
        super(name, employeeId, email); 
        
        this.name = name; 
        this.employeeId = employeeId; 
        this.email = email; 
        this.github = github; 
    }; 

    getGithub() {
        return this.github;
    };

    getRole() {
        return 'Engineer';
    };
}; 

module.exports = Engineer;