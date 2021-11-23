const Intern = require('../lib/Intern.js');

test('creates new Intern', () => {
    const employee = new Intern('Michael Scott', 1, 'Michael@fakemail.com', 'University of Texas at Austin');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.school).toEqual(expect.any(String));
})

test('checks if intern', () => {
    const employee = new Intern('Michael Scott', 1, 'Michael@fakemail.com', 'University of Texas at Austin');


    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getSchool()).toBe(employee.school);
    expect(employee.getRole()).toBe('Intern');
})