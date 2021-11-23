const Engineer = require('../lib/Engineer.js');

test('creates new Engineer', () => {
    const employee = new Engineer('Michael Scott', 1, 'Michael@fakemail.com');

    expect(employee.name).toBe('Michael Scott');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('Michael@fakemail.com');
    expect(employee.getRole()).toEqual('Engineer');
})

test('checks if engineer', () => {
    const employee = new Engineer('Michael Scott', 1, 'Michael@fakemail.com', 'Engineer', 'Github.com/Me');

    expect(employee.github).toEqual(expect.any(String));
})