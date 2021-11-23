const inquirer = require('inquirer')
const template = require('./src/page-template')
const writeFile = require('./src/generate-page')
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
        type: 'number',
        name: 'officeNum',
        message: 'Office Number: ',
        validate: numInput => {
            if (numInput) {
                return true
            }
            else {
                console.log('Please enter a office number')
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

const prompt = () => {
    inquirer.prompt(managerQ)
        .then(answers => {console.log(answers)})
}

prompt();






