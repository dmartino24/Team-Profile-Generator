const Employee = require("../lib/Employee");

// test functions to test for employee data and methods
test("creates employee object", () => {
  const employee = new Employee("bob", 24, "bob@gmail.com");

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toBeGreaterThanOrEqual(1);
  expect(employee.email).toEqual(expect.any(String));
});

test("gets name of employee", () => {
  const employee = new Employee("bob", 24, "bob@gmail.com");

  expect(employee.getName()).toEqual(expect.any(String));
});

test("gets id of employee", () => {
  const employee = new Employee("bob", 24, "bob@gmail.com");
  expect(employee.getId()).toBeGreaterThanOrEqual(1);
});

test("gets email of employee", () => {
  const employee = new Employee("bob", 24, "bob@gmail.com");
  expect(employee.getEmail()).toEqual(expect.any(String));
});

test("gets role of employee", () => {
  const employee = new Employee("bob", 24, "bob@gmail.com");
  expect(employee.getRole()).toEqual("Employee");
});
