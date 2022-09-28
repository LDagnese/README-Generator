// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![License Badge](https://img.shields.io/badge/license=${license}-green.svg)`;
  }
  return "";
}

// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `\n* [License](#license)\n`
  }
  return ''
}

// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == 'None') {
    return ''
  }
  return `## License  
  This project uses the ${license} license.`  
}

// function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title}
  ${renderLicenseBadge(response.license)}

  ## Description  

  ${response.description}

  ## Table of Contents  

  *[Installation](#installation)
  *[Usage](#usage)
  ${renderLicenseLink(response.license)}
  *[Contributing](#contributing)
  *[Tests](#tests)
  *[Questions](#questions)

  ## Installation
  To Install necessary dependencies/packages, run this command - 
  \'\'\'
  ${response.installation}
  \'\'\'

  ## Usage
  ${response.usage}
  ${renderLicenseSection(response.license)}

  ## Contributing

  ## Tests
  To run tests execute the following code - 
  \'\'\'
  ${response.test}
  \'\'\'

  ## Questions

  Any further questions, feel free to reach me via email @ ${response.email}.  
  More of my work can be seen here [Github Link](https://github.com/${response.github}/)

`;
}

module.exports = generateMarkdown;
