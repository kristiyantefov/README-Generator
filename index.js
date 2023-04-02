// Const to require inquirer fs and generateMardown.js
const inquirer = require("inquirer");
const fs = require("fs");
const {generateREADME} = require("./utils/generateMarkdown.js");
// Questions with validations for user to answer and readme.md file will be generated based on user answers
const questions = [
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "username",
    validate: username => {
      if (username) {
         return true 
        //  If the user did not input something it will receive an error message in red 
        } else { console.log("\x1b[41m", "Enter your GitHub username")
      }
    }
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
    validate: email => {
      if (email) {
         return true 
        } else { console.log("\x1b[41m", "Enter your email address")
      }
    }
  },
  {
    type: "input",
    message: "What is your project's name?",
    name: "projectName",
    validate: projectName => {
      if (projectName) {
         return true 
        } else { console.log("\x1b[41m", "Enter your project name")
      }
    }
  },
  {
    type: "input",
    message: "Please write a short description of your project",
    name: "description",
    validate: description => {
      if (description) {
         return true 
        } else { console.log("\x1b[41m", "Give a short description about your project")
      }
    }
  },
  {
    // this question is a list so the user can choose between deferent type of license
    type: "list",
    message: "What kind of license should your project have?",
    name: "license",
    choices: ['Apache License 2.0', 'MIT License','GNU General Public License v3.0','Mozilla Public License 2.0','None']
  },
  {
    type: "input",
    message: "What command should be run to instal the program?",
    name: "instalCommand",
    validate: instalCommand => {
      if (instalCommand) {
         return true 
        } else { console.log("\x1b[41m", "Enter the instal command")
      }
    }
  },
  {
    type: "input",
    message: "What command should be run to start the program?",
    name: "runProgram",
    validate: runProgram => {
      if (runProgram) {
         return true 
        } else { console.log("\x1b[41m", "Enter the command to run the program")
      }
    }
  },
  {
    type: "input",
    message: "What command should be run to test the program?",
    name: "testProgram",
    validate: testProgram => {
      if (testProgram) {
         return true 
        } else { console.log("\x1b[41m", "Enter the command to test the program")
      }
    }
  },
  {
    type: "input",
    message: "Enter you repository address",
    name: "repo",
    validate: repo => {
      if (repo) {
         return true 
        } else { console.log("\x1b[41m", "Enter your repository address")
      }
    }
  },
  {
    type: "input",
    message: "What does the user need to know about contributing to the repo?",
    name: "contributing",
    validate: contributing => {
      if (contributing) {
         return true 
        } else { console.log("\x1b[41m", "Please give a short description what users need to know about contributing to your repo ")
      }
    }
  },
  {
    type: "input",
    message: "What does the user need to know about using the program?",
    name: "usage",
    validate: usage => {
      if (usage) {
         return true 
        } else { console.log("\x1b[41m", "Enter what user need to know about using the program")
      }
    }
  },
];
// function to initialize the application
const init = () => {
  console.log(`
  =================
  Welcome to the ReadMe Generator! 
  Answer the following question prompts to generate a professional README.md file.
  =================
  `)
  // this function will get the user answers and it will pass it on generateREADME function and write it to the file 
  inquirer.prompt(questions).then((answers) => {
    fs.writeFile('./Generated/README.md', generateREADME(answers), (err) => {
      err ? console.log(err) : console.log("Successfully created README.md! in the folder", "\x1b[32m'GENERATED'")
  }) });
}
init()
  








  



