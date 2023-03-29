// function to generate the README.md content
const generateREADME = ({ username, email, projectName, description, testProgram, instalCommand, usage, license, runProgram, repo, contributing }) => {

  return `${renderLicenseBadge(license)}    
# ${projectName}

## Table of Contents
* [License](#license)
* [Description](#description)
* [Installation](#installation)
* [Test](#test)
* [Usage](#usage)
* [How to Contribute](#how-to-contribute)
* [Questions](#questions)

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
## Test
* You will need to run this command to test the program.
\`\`\`
${testProgram}
\`\`\`

## Usage
${usage}

## How to Contribute

${contributing}

## Questions

* Reach me here on my GitHub account.

[${username}](https://github.com/${username}) 

* Reach me on my email address for additional questions.

${email}

## Link
Link to repository:

${repo}
`
}
// function to render the license badge
const renderLicenseBadge = (license) => {
if (license === 'Apache License 2.0'){
  return `[![Hex.pm](https://img.shields.io/hexpm/l/apa?style=for-the-badge)](https://choosealicense.com/licenses/apache-2.0/)`
} else if (license === 'MIT License') {
  return `[![Hex.pm](https://img.shields.io/badge/license%20-mit-blue?style=for-the-badge&logo=appveyor)](https://choosealicense.com/licenses/mit)`
} else if (license === 'GNU General Public License v3.0') {
  return `[![Hex.pm](https://img.shields.io/badge/license%20-GNU%20v3.0-blue?style=for-the-badge&logo=appveyor)](https://choosealicense.com/licenses/gpl-3.0)`
} else if (license === 'Mozilla Public License 2.0') {
  return `[![Hex.pm](https://img.shields.io/badge/license%20-Mozilla%20Public%20License%202.0-blue?style=for-the-badge&logo=appveyor)](https://choosealicense.com/licenses/mpl-2.0)`
} else  {
  return ""
}
}
// function to render license link
const renderLicenseLink = (license) => {
  if (license === 'Apache License 2.0'){
    return `${'## License'}\n * This application is covered under: [${license}](https://choosealicense.com/licenses/apache-2.0)`
  } else if (license === 'MIT License') {
    return `${'## License'}\n * This application is covered under: [${license}](https://choosealicense.com/licenses/mit)`
  } else if (license === 'GNU General Public License v3.0') {
    return `${'## License'}\n * This application is covered under: [${license}](https://choosealicense.com/licenses/gpl-3.0)`
  } else if (license === 'Mozilla Public License 2.0') {
    return `${'## License'}\n * This application is covered under: [${license}](https://choosealicense.com/licenses/mpl-2.0)`
  } else {
    return ""
  }
  }

module.exports = {generateREADME}

