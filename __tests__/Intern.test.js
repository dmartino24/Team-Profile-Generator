const Intern = require("../lib/Intern");

test("creates an Intern object", () => {
    const intern = new Intern('bob', 24, 'bob@gmail.com', 'Shawnee');

    expect(intern.school).toEqual(expect.any(String));
});

test("gets school of Intern", () => {
    const intern = new Intern('bob', 24, 'bob@gmail.com', 'Shawnee');

    expect(intern.getSchool()).toEqual(expect.any(String));
});

test("gets role of Intern", () => {
    const intern = new Intern('bob', 24, 'bob@gmail.com', 'Shawnee');

    expect(intern.getRole()).toEqual(expect.any(String));
});
