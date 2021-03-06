const inquirer = require('inquirer');
const generateTeam = require('../src/page-template.js');
const writeFile = require('../utils/writeFile.js');
const Engineer = require('./Engineer.js');
const Intern = require('./Intern.js');
const Manager = require('./Manager.js');

class Prompts {
    constructor() {
        this.managerArr = [];
        this.engineerArr = [];
        this.internArr = [];
    };

    listPrompt() {
        return inquirer
        .prompt([
            {
                type: 'list',
                name: 'addOptions',
                message: 'What would you like to do now?',
                choices: [
                    'Add an engineer to this team.',
                    'Add an intern to this team.',
                    'Stop building this team and generate page.',
                ],
            },
        ])
        .then(({ addOptions }) => {
            if (addOptions.includes('engineer')) {
                this.engineerPrompts();

            } else if (addOptions.includes('intern')) {
                this.internPrompts();
                
            } else {
                writeFile(generateTeam(this.managerArr, this.engineerArr, this.internArr));
                console.log('Your page is ready. You can find it in the `dis` folder.');
            };
        })
        .catch(err => {
            if (err) {
                throw new Error(err);
            };
        });
    };

    managerPrompts() {
        return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is this team manager's name?",
                validate: nameInput => {
                    if (!nameInput) {
                        console.log('Please enter a name.');
                        return false;
                    } else {
                        return true;
                    };
                },
            },
            {
                type: 'input',
                name: 'employeeId',
                message: "What is the manager's employee id?",
                validate: employeeIdInput => {
                    if (isNaN(employeeIdInput)) {
                        console.log('Please enter a number.');
                        return false;
                    } else {
                        return true;
                    };
                },
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the manager's email address?",
                validate: emailInput => {
                    if (!emailInput.includes('@')) {
                        console.log('Please enter a valid email address.');
                        return false;
                    } else {
                        return true;
                    };
                },
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: "What is the manager's office number?",
                validate: officeNumberInput => {
                    if (!officeNumberInput) {
                        console.log('Please enter an office number.');
                        return false;
                    } else {
                        return true;
                    };
                },
            },
        ])
        .then(({ name, employeeId, email, officeNumber }) => {
            let manager = new Manager(name, employeeId, email, officeNumber);

            this.managerArr.push(manager);
            this.listPrompt();
        })
        .catch(err => {
            if (err) {
                throw new Error(err);
            };
        });
    };

    engineerPrompts() {
        return inquirer
        .prompt([
            {
            type: 'input',
                name: 'name',
                message: "What is this engineer's name?",
                validate: nameInput => {
                    if (!nameInput) {
                        console.log('Please enter a name.');
                        return false;
                    } else {
                        return true;
                    };
                },
            },
            {
                type: 'input',
                name: 'employeeId',
                message: "What is this engineer's employee id?",
                validate: employeeIdInput => {
                    if (isNaN(employeeIdInput)) {
                        console.log('Please enter a number.');
                        return false;
                    } else {
                        return true;
                    };
                },
            },
            {
                type: 'input',
                name: 'email',
                message: "What is this engineer's email address?",
                validate: emailInput => {
                    if (!emailInput.includes('@')) {
                        console.log('Please enter a valid email address.');
                        return false;
                    } else {
                        return true;
                    };
                },
            },
            {
                type: 'input',
                name: 'github',
                message: "What is this engineer's GitHub username?",
                validate: githubInput => {
                    if (!githubInput) {
                        console.log('Please enter a GitHub username.');
                        return false;
                    } else {
                        return true;
                    };
                },
            },
        ])
        .then(({ name, employeeId, email, github }) => {
            let engineer = new Engineer(name, employeeId, email, github);

            this.engineerArr.push(engineer);
            this.listPrompt();
        })
        .catch(err => {
            if (err) {
                throw new Error(err);
            };
        });
    };

    internPrompts() {
        return inquirer
        .prompt([
            {
            type: 'input',
                name: 'name',
                message: "What is this intern's name?",
                validate: nameInput => {
                    if (!nameInput) {
                        console.log('Please enter a name.');
                        return false;
                    } else {
                        return true;
                    };
                },
            },
            {
                type: 'input',
                name: 'employeeId',
                message: "What is this intern's employee id?",
                validate: employeeIdInput => {
                    if (isNaN(employeeIdInput)) {
                        console.log('Please enter a number.');
                        return false;
                    } else {
                        return true;
                    };
                },
            },
            {
                type: 'input',
                name: 'email',
                message: "What is this intern's email address?",
                validate: emailInput => {
                    if (!emailInput.includes('@')) {
                        console.log('Please enter a valid email address.');
                        return false;
                    } else {
                        return true;
                    };
                },
            },
            {
                type: 'input',
                name: 'school',
                message: "What is the name of this intern's school?",
                validate: schoolInput => {
                    if (!schoolInput) {
                        console.log('Please enter a school.');
                        return false;
                    } else {
                        return true;
                    };
                },
            },
        ])
        .then(({ name, employeeId, email, school }) => {
            let intern = new Intern(name, employeeId, email, school);

            this.internArr.push(intern);
            this.listPrompt();
        })
        .catch(err => {
            if (err) {
                throw new Error(err);
            };
        });
    };

};

module.exports = Prompts;