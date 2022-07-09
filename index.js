// generate site code
const generateSite = require("./src/generate-site");

// npm packages
const fs = require("fs");
const inquirer = require("inquirer");

// team classes
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const addManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Type in the manager for your team (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Type in the manager for your team (Required)");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Type in the manager's id. (Required)",
        validate: (idInput) => {
          if (idInput) {
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
          if (emailInput) {
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
          if (officeNumberInput) {
            return true;
          } else {
            console.log("Type in the manager's office number. (Required)");
            return false;
          }
        },
      },
    ])
    .then((managerInput) => {
      //const
    });
};
