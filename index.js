// generate site code
const generateSite = require("./src/generateSite");

// npm packages
const inquirer = require("inquirer");
const fs = require("fs");
// team classes
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const team = [];

const addManager = () => {
  console.log(`
=================
Add a Manager
=================
`);
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Type in the manager's name (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Type in the manager's name (Required)");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Type in the manager's id. (Required)",
        validate: (idInput) => {
          if (!isNaN(idInput) && idInput) {
            return true;
          } else {
            console.log("Type in the manager's id. (Required)");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Type in the manager's email. (Required)",
        validate: (emailInput) => {
          const emailConstraints = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (emailConstraints.test(emailInput)) {
            return true;
          } else {
            console.log("Type in the manager's email. (Required)");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Type in the manager's office number. (Required)",
        validate: (officeNumberInput) => {
          if (!isNaN(officeNumberInput) && officeNumberInput) {
            return true;
          } else {
            console.log("Type in the manager's office number. (Required)");
            return false;
          }
        },
      },
    ])
    .then((managerInput) => {
      const { name, id, email, officeNumber } = managerInput;
      const manager = new Manager(name, id, email, officeNumber);

      team.push(manager);
    });
};

const addEmployee = () => {
  console.log(`
=================
Add an Employee
=================
`);
  return inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "What is the role of your new employee. (Required)",
        choices: ["Engineer", "Intern"],
      },
      {
        type: "input",
        name: "name",
        message: "Type in the employee's name. (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Type in the employee's name. (Required)");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Type in the employee's id. (Required)",
        validate: (idInput) => {
          if (!isNaN(idInput) && idInput) {
            return true;
          } else {
            console.log("Type in the employee's id. (Required)");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Type in the employee's email. (Required)",
        validate: (emailInput) => {
          const emailConstraints = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (emailConstraints.test(emailInput)) {
            return true;
          } else {
            console.log("Type in the employee's email. (Required)");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "github",
        message: "Type in the employee's github username. (Required)",
        when: (employeeInput) => employeeInput.role === "Engineer",
        validate: (githubInput) => {
          if (githubInput) {
            return true;
          } else {
            console.log("Type in the employee's github username. (Required)");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "school",
        message: "Type in the employee's school. (Required)",
        when: (employeeInput) => employeeInput.role === "Intern",
        validate: (schoolInput) => {
          if (schoolInput) {
            return true;
          } else {
            console.log("Type in the employee's school. (Required)");
            return false;
          }
        },
      },
      {
        type: "confirm",
        name: "confirmedAddEmployee",
        message: "Would you like to add another employee to your team?",
        default: false,
      },
    ])
    .then((employeeInput) => {
      let { name, id, email, role, github, school, confirmedAddEmployee } =
        employeeInput;
      let employee = new Manager(name, id, email, github, school);

      if (role === "Engineer") {
        employee = new Engineer(name, id, email, github);
      } else {
        employee = new Intern(name, id, email, school);
      }

      team.push(employee);

      if (confirmedAddEmployee) {
        return addEmployee();
      } else {
        return team;
      }
    });
};

const writeFile = (fileContent) => {
  fs.writeFile("./dist/index.html", fileContent, (err) => {
    if (err) {
      console.log(err);
    }
  });
};

addManager()
  .then(addEmployee)
  .then((team) => {
    return generateSite(team);
  })
  .then((pageHTML) => {
    return writeFile(pageHTML);
  })
  .catch((err) => {
    console.log(err);
  });
