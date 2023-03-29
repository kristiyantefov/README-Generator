const generateREADME = ({ username, email, projectName, description, instalCommand, usage, license, runProgram, repo, contributing }) => {

  return `${renderLicenseBadge(license)}    
  # ${projectName}

## Table of Contents
* [License](#license)
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [How to Contribute](#how-to-contribute)
* [Questions?](#questions)
${renderLicenseLink(license)}
## Description
${description}
## Installation
* You will need to run this command to install the application.
\`\`\`
${instalCommand}
\`\`\`
* You will need to run this command to run the program.
\`\`\`
${runProgram}
\`\`\`
## Usage
${usage}
## How to Contribute
${contributing}
### Reach me here: 
[${username}](https://github.com/${username})  
${email}
### Link
Link to repo:
${repo}
`

}

// module.exports = generateREADME()
// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
const renderLicenseBadge = (license) => {
if (license === 'Apache License 2.0'){
  return `[![Hex.pm](https://img.shields.io/hexpm/l/apa?style=for-the-badge)](https://choosealicense.com/licenses/apache-2.0/) ![GitHub all releases](https://img.shields.io/github/downloads/kristiyantefov/README-Generator/total?color=%232481C2&style=for-the-badge)`
} else if (license === 'MIT License') {
  return `[![Hex.pm](https://img.shields.io/badge/license%20-mit-blue?style=for-the-badge&logo=appveyor)](https://choosealicense.com/licenses/mit) ![GitHub all releases](https://img.shields.io/github/downloads/kristiyantefov/README-Generator/total?color=%232481C2&style=for-the-badge)`
} else if (license === 'GNU General Public License v3.0') {
  return `[![Hex.pm](https://img.shields.io/badge/license%20-GNU%20v3.0-blue?style=for-the-badge&logo=appveyor)](https://choosealicense.com/licenses/gpl-3.0) ![GitHub all releases](https://img.shields.io/github/downloads/kristiyantefov/README-Generator/total?color=%232481C2&style=for-the-badge)`
} else if (license === 'Mozilla Public License 2.0') {
  return `[![Hex.pm](https://img.shields.io/badge/license%20-Mozilla%20Public%20License%202.0-blue?style=for-the-badge&logo=appveyor)](https://choosealicense.com/licenses/mpl-2.0) ![GitHub all releases](https://img.shields.io/github/downloads/kristiyantefov/README-Generator/total?color=%232481C2&style=for-the-badge)`
} else  {
  return `![GitHub all releases](https://img.shields.io/github/downloads/kristiyantefov/README-Generator/total?color=%232481C2&style=for-the-badge)`
}
}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}
const renderLicenseLink = (license) => {
  if (license === 'Apache License 2.0'){
    return `${'## License'}\n [${license}](https://choosealicense.com/licenses/apache-2.0)'}`
  } else if (license === 'MIT License') {
    return `${'## License'}\n [${license}](https://choosealicense.com/licenses/mit)`
  } else if (license === 'GNU General Public License v3.0') {
    return `${'## License'}\n  [${license}](https://choosealicense.com/licenses/gpl-3.0)`
  } else if (license === 'Mozilla Public License 2.0') {
    return `${'## License'}\n  [${license}](https://choosealicense.com/licenses/mpl-2.0)`
  } else {
    return ""
  }
  }

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// // TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }

module.exports = {generateREADME,renderLicenseBadge}

