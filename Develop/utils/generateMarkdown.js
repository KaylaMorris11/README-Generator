// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `[![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)]`;
  }
  if(license === "Apache 2.0") {
    return `[![License: ${license}](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]`;
  }
  if (license === "ISC"){
    return `[![License: ${license}](https://img.shields.io/badge/License-ISC-blue.svg)]`;
  }
  return '';
}
console.log("loading")
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return ` (https://opensource.org/licenses/${license})`;
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {

    return `## License
    This project is licensed under the ${license} license.
    `
  }

  return '';
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ## ${data.title}
  ## Description
  ${data.description}
  ## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
  ## Installation
  ${data.install}
  ## Usage
  ${data.usage}
  ${renderLicenseLink(data.license)}
  ${renderLicenseSection(data.license)}
  ${renderLicenseBadge(data.license)}
  ${data.license}
  ## Github account:
  ${data.username}
  ## Contact Me
  Please send any questions, comments, or concerns to ${data.email}
`;
}

module.exports = generateMarkdown;