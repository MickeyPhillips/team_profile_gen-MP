const inquirer = require('inquirer')
const template = require('./src/page-template')
const writeFile = require('./src/page-write')
// Models
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')
// Questions
const roleQ = [
    {
        type: 'checkbox',
        name: 'role',
        message: 'Employee Role?',
        choices: ['Engineer', 'Intern'],
        validate: roleInput => {
            if (roleInput) {
                return true
            }
            else {
                console.log('Please choose a employee role.')
                return false
            }   
        }
    }
]

const managerQ = [
    {
        type: 'input',
        name: 'name',
        message: 'Manager Name: ',
        validate: nameInput => {
            if (nameInput) {
                return true
            }
            else {
                console.log('Please enter a name')
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'Employee Id: ',
        validate: idInput => {
            // I did it this way b/c when i used type: 'number' it wouldnt let me enter anything after a incorrect input
            
            if (idInput % 1 == 0) {
                
                return true
            }
            else {
                console.log('Please enter employee id')
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email: ',
        validate: emailInput => {
            if (emailInput) {
                return true
            }
            else {
                console.log('Please enter a email')
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Office Number: ',
        validate: numInput => {
            if (numInput % 1 == 0) {
                return true
            }
            else {
                console.log('Please enter office number')
                return false
            }
        }
    }
]

const engineerQ = [
    {
        type: 'input',
        name: 'name',
        message: 'Engineer Name: ',
        validate: nameInput => {
            if (nameInput) {
                return true
            }
            else {
                console.log('Please enter a name')
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'Employee Id: ',
        validate: idInput => {
            if (idInput % 1 == 0) {
                
                return true
            }
            else {
                console.log('Please enter employee id')
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email: ',
        validate: emailInput => {
            if (emailInput) {
                return true
            }
            else {
                console.log('Please enter a email')
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Github Username: ',
        validate: githubInput => {
            if (githubInput) {
                return true
            }
            else {
                console.log('Please enter a github user')
                return false
            }
        }
    },
    {
        type: 'confirm',
        name: 'addMember',
        message: 'Want to add another member?',
        default: false
    }

]

const internQ = [
    {
        type: 'input',
        name: 'name',
        message: 'Intern Name: ',
        validate: nameInput => {
            if (nameInput) {
                return true
            }
            else {
                console.log('Please enter a name')
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'Employee Id: ',
        validate: idInput => {
            if (idInput % 1 == 0) {
                
                return true
            }
            else {
                console.log('Please enter employee id')
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email: ',
        validate: emailInput => {
            if (emailInput) {
                return true
            }
            else {
                console.log('Please enter a email')
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: 'School: ',
        validate: schoolInput => {
            if (schoolInput) {
                return true
            }
            else {
                console.log('Please enter a school name')
                return false
            }
        }
    },
    {
        type: 'confirm',
        name: 'addMember',
        message: 'Want to add another member?',
        default: false
    }
]

const employeePrompt = employees => {
        if(employees.length === 0) {
            return inquirer.prompt(managerQ)
                .then(answers => {
                    answers = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
                    employees.push(answers)
                    console.log(answers)
                    return employeePrompt(employees)
                })
        }
        else {
            console.log('New Member')
            return inquirer.prompt(roleQ)
                .then(res => {
                    console.log(res)
                    switch(res.role.toString()) {
                        case 'Engineer':
                            return inquirer.prompt(engineerQ)
                                .then (answers => {
                                    answers.name = new Engineer(answers.name, answers.id, answers.email, answers.github)
                                    employees.push(answers.name)
                                    if (answers.addMember) {
                                        return employeePrompt(employees)
                                    }
                                    else return employees
                                })
                            
                        
                        case 'Intern':
                            return inquirer.prompt(internQ)
                                .then(answers => {
                                    answers.name = new Intern(answers.name, answers.id, answers.email, answers.school)
                                    employees.push(answers.name)
                                    if (answers.addMember) {
                                        return employeePrompt(employees)
                                    }
                                    else return employees
                                })
                            
                        
                    }
                })
                .then(data => {
                    return template(data)
                })
                .then(page => {
                    return writeFile(page)
                })
                .catch(err => console.log(err))
        }
}


const init = () => {
    const employees = []
    employeePrompt(employees)
}
init();









