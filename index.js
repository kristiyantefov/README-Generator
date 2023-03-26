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
    name: "email",
  },
  {
    type: "input",
    message: "What is your project's name?",
    name: "projectname",
  },
  {
    type: "input",
    message: "Please write a short description of your project",
    name: "description",
  },
  {
    type: "input",
    message: "What kind of license should your project have?",
    name: "license",
  },
  {
    type: "input",
    message: "What command should be run to install dependencies?",
    name: "email",
  },
  {
    type: "input",
    message: "What command should be run to run tests?",
    name: "runtest",
  },
  {
    type: "input",
    message: "What does the user need to know about using the repo?",
    name: "repo",
  },
  {
    type: "input",
    message: "What does the user need to know about contributing to the repo?",
    name: "contributing",
  },
];

const generateREADME = ({ username, email, projectname, description, license, email, runtest, repo, contributing }) => `
Star Readme
`
inquirer.prompt(questions).then((answers) => {
  console.log(generateREADME(answers))

})



// // TODO: Create a function to write README file
// const  writeToFile = (README.md, data) => {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
