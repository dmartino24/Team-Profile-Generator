const Engineer = require("../lib/Engineer");

test('creates an Engineer object', () => {
    const engineer = new Engineer('bob', 24, 'bob@gmail.com', 'bobsgithub');

    expect(engineer.github).toEqual(expect.any(String));
});

test('gets github of Engineer', () => {
    const engineer = new Engineer('bob', 24, 'bob@gmail.com', 'bobsgithub');

    expect(engineer.getGithub()).toEqual(expect.any(String));
});

test('gets role of Engineer', () => {
    const engineer = new Engineer('bob', 24, 'bob@gmail.com', 'bobsgithub');

    expect(engineer.github).toEqual(expect.any(String));
});