const Employee = require('../lib/Employee.js');

test('creates new employee', () => {
    const employee = new Employee('Michael Scott', 1, 'Michael@fakemail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})

test('checks if employee has a role', () => {
    const employee = new Employee('Michael Scott', 1, 'Michael@fakemail.com');

    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getRole()).toBe('Employee');
})

