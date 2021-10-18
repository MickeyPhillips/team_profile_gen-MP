const Employee = require('./Employee.js');
const Engineer = require('./Engineer.js');
const Intern = require('./Intern.js');
const Manager = require('./Manager.js');

const fs = require('fs');
const inquirer = require('inquirer');

// const generatePage = require('../src/page-template.js');

function Prompt() {
    this.manager;
    this.employees = [];
}

Prompt.prototype.managerPrompt = function() {
    console.log('Prompt Begins');
    return inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'managerName',
                    message: 'Enter the Team Manager\'s Name: ',
                    validate: nameInput => {
                        if(nameInput) {
                            return true;
                        }
                        else{
                            console.log('Enter the Team Manager\'s Name: ');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'managerIdNum',
                    message: 'Enter Manager\'s Employee ID: ',
                    validate: idInput => {
                        if(idInput) {
                            return true;
                        }
                        else{
                            console.log('Enter Manager\'s Employee ID: ');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'managerEmail',
                    message: 'Enter Mamager\'s Email: ',
                    validate: emailInput => {
                        if(emailInput) {
                            return true;
                        }
                        else{
                            console.log('Enter Mamager\'s Email: ');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'officeNum',
                    message: 'Enter Manager\'s Office Number: ',
                    validate: officeNumInput => {
                        if(officeNumInput) {
                            return true;
                        }
                        else{
                            console.log('Enter Manager\'s Office Number: ');
                            return false;
                        }
                    }
                }
            ])
            .then(({ managerName, managerIdNum, managerEmail, officeNum}) => {
                this.manager = new Manager(managerName, managerIdNum, managerEmail, officeNum);
            })
}

Prompt.prototype.nonManagerPrompt = function() {
    console.log(`
=====================
Add a New Team Member
=====================    
    `);
    return inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'employee',
                    message: 'Team Member\'s Employment Status: ',
                    choices: ['Engineer', 'Intern']
                }
            ])
            .then(({ employee }) => {
                if(employee == 'Engineer') {
                    inquirer
                        .prompt([
                            {
                                type: 'input',
                                name: 'name',
                                message: 'Enter Engineer\'s Name: ',
                                validate: nameInput => {
                                    if(nameInput) {
                                        return true;
                                    }
                                    else{
                                        console.log('Enter Engineer\'s Name: ');
                                        return false;
                                    }
                                }
                            },
                            {
                                type: 'input',
                                name: 'idNum',
                                message: 'Enter Engineer\'s ID: ',
                                validate: idInput => {
                                    if(idInput) {
                                        return true;
                                    }
                                    else{
                                        console.log('Enter Engineer\'s ID: ');
                                        return false;
                                    }
                                }
                            },
                            {
                                type: 'input',
                                name: 'email',
                                message: 'Enter Engineer\'s Email: ',
                                validate: emailInput => {
                                    if(emailInput) {
                                        return true;
                                    }
                                    else{
                                        console.log('Enter Engineer\'s Email: ');
                                        return false;
                                    }
                                }
                            },
                            {
                                type: 'input',
                                name: 'github',
                                message: 'Enter Engineer\'s Github: ',
                                validate: githubInput => {
                                    if(githubInput) {
                                        return true;
                                    }
                                    else {
                                        console.log('Enter Engineer\'s Github: ');
                                        return false;
                                    }
                                }
                            },
                            {
                                type: 'input',
                                name: 'addTeamMember',
                                message: 'Would you like to add another Team Member? ',
                                default: false
                            }
                        ])
                        .then(({ name, idNum, email, github, addTeamMember }) => {
                            this.employees.push(new Engineer(name, idNum, email, github));

                            if (addTeamMember) {
                                return nonManagerPrompt();
                            }
                            else {
                                console.log('Prompt Complete! ');
                            }
                        })

                        
                }
                // Later combine the 2 prompts
                else if(employee == 'Intern') {
                    inquirer
                        .prompt([
                            {
                                type: 'input',
                                name: 'name',
                                message: 'Enter Intern\'s Name: ',
                                validate: nameInput => {
                                    if(nameInput) {
                                        return true;
                                    }
                                    else{
                                        console.log('Enter Intern\'s Name: ');
                                        return false;
                                    }
                                }
                            },
                            {
                                type: 'input',
                                name: 'idNum',
                                message: 'Enter Intern\'s ID: ',
                                validate: idInput => {
                                    if(idInput) {
                                        return true;
                                    }
                                    else{
                                        console.log('Enter Intern\'s ID: ');
                                        return false;
                                    }
                                }
                            },
                            {
                                type: 'input',
                                name: 'email',
                                message: 'Enter Intern\'s Email: ',
                                validate: emailInput => {
                                    if(emailInput) {
                                        return true;
                                    }
                                    else{
                                        console.log('Enter Intern\'s Email: ');
                                        return false;
                                    }
                                }
                            },
                            {
                                type: 'input',
                                name: 'school',
                                message: 'Enter Intern\'s School: ',
                                validate: schoolInput => {
                                    if(schoolInput) {
                                        return true;
                                    }
                                    else {
                                        console.log('Enter Intern\'s School: ');
                                        return false;
                                    }
                                }
                            },
                            {
                                type: 'input',
                                name: 'addTeamMember',
                                message: 'Would you like to add another Team Member? ',
                                default: false
                            }
                        ])
                        .then(({ name, idNum, email, school, addTeamMember }) => {
                            this.employees.push(new Intern(name, idNum, email, school));

                            if (addTeamMember) {
                                return nonManagerPrompt();
                            }
                            else {
                                console.log('Prompt Complete! ');
                            }
                        })
                }
                else{
                    console.log('SOMETHING IS WRONG! ');
                }
            })
    
}

Prompt.prototype.writeToFile = function(fileContent) {
    fs.writeFile('../dist/index.html', fileContent, err => {
        if(err) {
            return console.log(err);
        }
        console.log('Page generated! ');
    });
}

Prompt.prototype.copyToFile = function() {
    fs.copyFile('../src/style.css', '../dist/style.css', err => {
        if(err) {
            return console.log(err);
        }
        console.log('Styling copied to dist folder! ');
    });
}

module.exports = Prompt;
