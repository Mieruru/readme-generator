// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
  // DONE
function renderLicenseBadge(license) {
  if (license !== 'none') {
    return `![GitHub License](https://img.shields.io/badge/license-${license}-006400.svg)`
  }
  return ''
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
  // DONE
function renderLicenseLink(license) {
  if (license !== 'none') {
    return `\n* [License](#license)`
  }
  return ''
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
  // DONE
function renderLicenseSection(license) {
  if (license !== 'none') {
    return `## License
    
      ${license} Copyright (c) [yyyy] ${data.name} (${data.gitHub}).
      For more information, please refer to the LICENSE in the repo if available, or click on the License badge above.`
  }
}

// TODO: Create a function to generate markdown for README
  // DONE
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  ${renderLicenseLink(data.license)}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contribution}

  ## Testing
  ${data.testing}

  ## Questions
  Contact me: ${data.name}
  GitHub: [${data.gitHub}](https://github.com/${data.gitHub}/)
  e-mail: ${data.email}

  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
