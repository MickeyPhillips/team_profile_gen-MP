const Employee = require('./Employee.js');

class Intern extends Employee {
    constructor(name = '', id, email = '', role = '', school = '') {
        super(name, id, email, role);

        this.school = school;
    }

    getSchool() {
        if(typeof this.school === 'string') {
            return this.school;
        }
        else {
            console.log('intern mess up.');
        }
    }

    getRole() {
        this.role = 'Intern';
        return this.role;
    }
}

module.exports = Intern;