// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if (license !== 'none') {

    // Here we set a variable URL address that will be used in the next if statement to attach a link to a badge based on which License we're passing in.

    let url = ''

    if (license === 'GNU GPLv3') {
      url = 'https://www.gnu.org/licenses/gpl-3.0-standalone.html'
    } else if (license === 'Mozilla Public License') {
      url = 'https://www.mozilla.org/en-US/MPL/2.0/'
    } else if (license === 'Apache License 2.0') {
      url = 'https://www.apache.org/licenses/LICENSE-2.0'
    } else if (license === 'MIT License') {
      url = 'https://opensource.org/license/mit'
    } else if (license === 'Boost Software License 1.0') {
      url = 'https://www.boost.org/LICENSE_1_0.txt'
    }

    // This generates a badge using shields.io's syntax. I made it green because I like green, that's what the hex code at the end is for.

    return `\n[![GitHub License](https://img.shields.io/badge/license-${license.split(' ').join('_')}-006400.svg)](${url})\n`
  }
  return ''
}

// Function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {
  if (license !== 'none') {
    return `* [License](#license)\n`
  }
  return ''
}

// Function that returns the license section of README
// If there is no license, return an empty string
// Here we pass an extra couple values in in addition to the license so that we can call them in for a personalized Copyright line.

function renderLicenseSection(license, name, gitHub) {
  if (license !== 'none') {

    // Declaring some quick variables to fetch the date so the README automatically reflects the year that it is generated on.

    let date = new Date()
    let year = date.getFullYear()

    // Here we need to break format on the code a bit and delete some tabs otherwise it screws up the formatting of the README file's license section.

    return `\n## License

${license} Copyright (c) ${year} ${name} (${gitHub}).  
For more information, please refer to the LICENSE in the repo if available, or click on the License badge above.\n`
  }
  return ''
}

// Function to generate markdown for README

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

## Tests

${data.testing}

## Questions

For additional information, contact me:  
${data.name}  
GitHub: [${data.gitHub}](https://github.com/${data.gitHub}/)  
email: ${data.email}
${renderLicenseSection(data.license, data.name, data.gitHub)}`
}

module.exports = generateMarkdown;
