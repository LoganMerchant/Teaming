const inquirer = require('inquirer');
const Engineer = require('./Engineer.js');
const Intern = require('./Intern.js');
const Manager = require('./Manager.js');

class Prompts {
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
                console.log('Page generated! Find it in the `dist` folder.');
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
        .then(answers => {
            console.log(answers);
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