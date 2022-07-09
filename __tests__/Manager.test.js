const Manager = require('../lib/Manager');

test('creates an Manager object', () => {
    const manager = new Manager('bob', 24, 'bob@gmail.com', 3);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets office number of Manager', () => {
    const manager = new Manager('bob', 24, 'bob@gmail.com', 3);

    expect(manager.getRole()).toEqual("Manager");
});