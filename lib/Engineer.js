const Employee = require('./Employee.js');

class Engineer extends Employee {
    constructor(name = '', id, email = '', role = '', github = '') {
        super(name, id, email, role);

        this.github = github;
    }
    
    getGithub() {
        if(typeof this.github === 'string') {
            return this.github;
        }
        else{
            console.log('engineer mess up.')
        }
    }

    getRole() {
        this.role = 'Engineer';
        return this.role;
    }
}

module.exports = Engineer;