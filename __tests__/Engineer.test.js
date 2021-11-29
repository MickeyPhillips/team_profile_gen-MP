const Engineer = require('../lib/Engineer.js');

test('creates new Engineer', () => {
    const employee = new Engineer('Michael Scott', 1, 'Michael@fakemail.com', 'Github.com/MichaelScottTheCodingGod');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.github).toEqual(expect.any(String));
})

test('checks if engineer', () => {
    const employee = new Engineer('Michael Scott', 1, 'Michael@fakemail.com', 'Engineer', 'Github.com/MichaelScottTheCodingGod');

    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getGithub()).toBe(employee.github);
    expect(employee.getRole()).toBe('Engineer');
})