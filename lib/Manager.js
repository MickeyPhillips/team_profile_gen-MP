const Employee = require('./Employee.js');

class Manager extends Employee {
    constructor(name = '', id, email = '', role = '', officeNumber) {
        super(name, id, email, role);

        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        if(typeof this.officeNumber === 'number') {
            return this.officeNumber;
        }
        else {
            console.log('manager mess up.');
        }
    }

    getRole() {
        this.role = 'Manager';
        return this.role;
    }
}

module.exports = Manager;