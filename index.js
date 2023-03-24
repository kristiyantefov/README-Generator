// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "username",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "age",
  },
  {
    type: "input",
    message: "What is your project's name?",
    name: "email",
  },
  {
    type: "input",
    message: "Please write a short description of your project",
    name: "username",
  },
  {
    type: "input",
    message: "What kind of license should your project have?",
    name: "age",
  },
  {
    type: "input",
    message: "What command should be run to install dependencies?",
    name: "email",
  },
  {
    type: "input",
    message: "What command should be run to run tests?",
    name: "username",
  },
  {
    type: "input",
    message: "What does the user need to know about using the repo?",
    name: "age",
  },
  {
    type: "input",
    message: "What does the user need to know about contributing to the repo?",
    name: "email",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
