const Intern = require('../lib/Intern.js');

test('creates new Intern', () => {
    const employee = new Intern('Michael Scott', 1, 'Michael@fakemail.com');

    expect(employee.name).toBe('Michael Scott');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('Michael@fakemail.com');
    expect(employee.getRole()).toEqual('Intern');
})

test('checks if intern', () => {
    const employee = new Intern('Michael Scott', 1, 'Michael@fakemail.com', 'Intern', 'State');

    expect(employee.school).toEqual(expect.any(String));
    
    employee.school = 80;

    expect(employee.getSchool()).toBeFalsy();
})