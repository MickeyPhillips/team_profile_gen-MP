const Manager = require('../lib/Manager.js');

test('creates new Manager', () => {
    const employee = new Manager('Michael Scott', 1, 'Michael@fakemail.com', 1);

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.officeNumber).toEqual(expect.any(Number));
})

test('checks for officenumber', () => {
    const employee = new Manager('Michael Scott', 1, 'Michael@fakemail.com', 1);

    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getOfficeNumber()).toBe(employee.officeNumber);
    expect(employee.getRole()).toBe('Manager');
})