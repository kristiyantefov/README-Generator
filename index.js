// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const {generateREADME} = require("./utils/generateMarkdown.js");

const questions = [
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "username",
    validate: username => {
      if (username) {
         return true 
        } else { console.log("Enter your GitHub username")
      }
    }
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
    validate: username => {
      if (username) {
         return true 
        } else { console.log("Enter your GitHub username")
      }
    }
  },
  {
    type: "input",
    message: "What is your project's name?",
    name: "projectName",
    validate: username => {
      if (username) {
         return true 
        } else { console.log("Enter your GitHub username")
      }
    }
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
    choices: ['Apache License 2.0', 'MIT License','GNU General Public License v3.0','Mozilla Public License 2.0','None']
  },
  {
    type: "input",
    message: "What command should be run to instal the program?",
    name: "instalCommand",
  },
  {
    type: "input",
    message: "What command should be run to start the program?",
    name: "runProgram",
  },
  {
    type: "input",
    message: "Enter you repository address",
    name: "repo",
  },
  {
    type: "input",
    message: "What does the user need to know about contributing to the repo?",
    name: "contributing",
  },
  {
    type: "input",
    message: "What does the user need to know about using the program?",
    name: "usage",
  },
];

const init = () => {
  console.log(`
  =================
  Welcome to the ReadMe Generator! 
  Answer the following question prompts to generate a professional README.md file.
  =================
  `)
  inquirer.prompt(questions).then((answers) => {
    fs.writeFile('README1.md', generateREADME(answers), (err) => {
      err ? console.log(err) : console.log("Successfully created README.md!")
  }) });
}
init()
  








  



