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
];

// Create a function to write README file
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
