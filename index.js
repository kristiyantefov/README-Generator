// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const backThicks = "```"
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
    name: "projectName",
  },
  {
    type: "input",
    message: "Please write a short description of your project",
    name: "description",
  },
  {
    type: "list",
    message: "What kind of license should your project have?",
    name: "license",
    choices: ['Apache License 2.0', 'MIT License','GNU General Public License v3.0','Mozilla Public License 2.0']
  },
  {
    type: "input",
    message: "What command should be run to start the program?",
    name: "instalCommand",
  },
  {
    type: "input",
    message: "What command should be run to run tests?",
    name: "runTest",
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





const generateREADME = ({ username, email, projectName, description, instalCommand, license, runTest, repo, contributing }) => 
`# ${projectName}
## Badges
${"s"}
## Table of Contents
* [License](#license)
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [How to Contribute](#how-to-contribute)
* [Tests](#tests)
* [Questions?](#questions)
## License
${license}
${"s"}
## Description
${"s"}
## Installation
${"s"}
## Usage
${"s"}
## How to Contribute
 
${"s"}
## Tests
${"s"}
## Questions?
### Reach me here: 
[${username}](https://github.com/${username})  
${email}
`
inquirer.prompt(questions).then((answers) => {
  fs.writeFile('README1.md', generateREADME(answers), (err) => {

  }) 

})



// // TODO: Create a function to write README file
// const  writeToFile = (README.md, data) => {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
