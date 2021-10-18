class Employee {
    
    constructor(name = '', id, email = '', role = '') {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
        
    }

    getName() {
        console.log(`Name: ${this.name}`);
        return this.name;
    }

    getId() {
        console.log(`Id: ${this.id}`);
        return this.id;
    }

    getEmail() {
        console.log(`Email: ${this.email}`);
        return this.email;
    }

    getRole() {
        this.role = 'Employee'
        return this.role;
    }
}
module.exports = Employee;