const Employee = require('./Employee.js'); 

class Engineer extends Employee { 
    constructor(name, employeeId, email, username) { 
        super(name, employeeId, email); 
        
        this.name = name; 
        this.employeeId = employeeId; 
        this.email = email; 
        this.username = username; 
    }; 

    getUsername() {
        return this.username;
    };
}; 

module.exports = Engineer;