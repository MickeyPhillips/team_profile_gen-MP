const Manager = require('../lib/Manager.js');

test('creates new Manager', () => {
    const employee = new Manager('Michael Scott', 1, 'Michael@fakemail.com');

    expect(employee.name).toBe('Michael Scott');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('Michael@fakemail.com');
    expect(employee.getRole()).toEqual('Manager');
})

test('checks for officenumber', () => {
    const employee = new Manager('Michael Scott', 1, 'Michael@fakemail.com', 'Manager', 1);

    expect(employee.officeNumber).toEqual(expect.any(Number));
    
    employee.officeNumber = 'Pizza';

    expect(employee.getSchool()).toBeFalsy();
})