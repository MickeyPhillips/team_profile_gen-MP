const inquirer = require('inquirer');
const Employee = require('./Employee.js');

class Manager extends Employee {
    constructor(name = '', id = '', email = '', role = '', officeNumber = '') {
        super(name, id, email, role);

        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        inquirer
            .prompt({
                type: 'input',
                name: 'officeNumber',
                message: 'Enter the Team Managers\'s Office Number: ',
                validate: nameInput => {
                    if(nameInput) {
                        return true;
                    }
                    else{
                        console.log('Enter the Team Member\'s Name: ');
                        return false;
                    }
                }
            })
            .then((answer) => (this.officeNumber = answer.officeNumber));
    }

    getRole() {
        this.role = 'Manager';
        return this.role;
    }
}

module.exports = Manager;