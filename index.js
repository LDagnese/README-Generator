const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user input
const questions = [
  {
    type: "input",
    name: "github",
    message: "What is your GitHub Username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
  {
    type: "input",
    name: "title",
    message: "What is your project's title?",
  },
  {
    type: "input",
    name: "description",
    message: "Please give a description of the project.",
  },
  {
    type: "list",
    name: "license",
    message: "What license does your project have?",
    choices: ["MIT", "APACHE", "GPL", "BSD", "None"],
  },
  {
    type: "input",
    name: "installation",
    message: "What command to install packages?",
    default: "npm install",
  },
  {
    type: "input",
    name: "test",
    message: "What command to run tests?",
    default: "npm run test",
  },
  {
    type: "input",
    name: "usage",
    message: "Any extra usage information for this project?",
  },
  {
    type: "input",
    name: "contribution",
    message: "What guidelines should be followed for contributing to this project?",
  },
];

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize app
function initialize() {
  inquirer.prompt(questions).then((responses) => {
    console.log(responses);
    // writeToFile('README.md',generateMarkdown({...responses}));
  });
}

// Function call to initialize app
initialize();
