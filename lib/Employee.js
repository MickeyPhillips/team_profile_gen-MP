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
        if(this.role == 'Manager' || this.role == 'Engineer' || this.role == 'Intern') {
            console.log(`Role: ${this.role}`);
            return true;
        }
        else{
            return false;
        }
    }
}
module.exports = Employee;