const Employee = require('../lib/Employee.js');

test('creates new employee', () => {
    const employee = new Employee('Michael Scott', 1, 'Michael@fakemail.com');

    expect(employee.name).toBe('Michael Scott');
    expect(employee.id).toEqual(1);
    expect(employee.email).toBe('Michael@fakemail.com');
})

test('checks if employee has a role', () => {
    const employee = new Employee('Michael Scott', 1, 'Michael@fakemail.com', 'Manager');

    expect(employee.getRole()).toBeTruthy();

    employee.role = 'Supreme Ruler of the Universe';

    expect(employee.getRole()).toBeFalsy();

})

