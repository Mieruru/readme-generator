// Packages needed for this application

const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown.js')

// Array of questions for user input

const questions = [

    // This holds the list of prompts inquirer will pull from to generate the README file.
    
    {
        name: 'title',
        type: 'input',
        message: 'Please enter a title for your project:',
    },
    {
        name: 'description',
        type: 'input',
        message: 'Please enter a short description of your project:',
    },
    {
        name: 'installation',
        type: 'input',
        message: 'Please enter any relevant installation instructions for your project:',
    },
    {
        name: 'usage',
        type: 'input',
        message: 'Please describe the general usage outline of your project:',
    },
    {
        name: 'contribution',
        type: 'input',
        message: 'Please enter any contributors or contribution instructions for your project:',
    },
    {
        name: 'testing',
        type: 'input',
        message: 'Please enter any relevant testing instructions for you project:',
    },
    {

        // having 'none' as an option at the end is important for part of the license rendering in the generateMarkdown.js

        name: 'license',
        type: 'list',
        choices: [
            'GNU GPLv3',
            'Mozilla Public License',
            'Apache License 2.0',
            'MIT License',
            'Boost Software License 1.0',
            'none',
        ],
        message: 'Please select a License for your project:',
    },
    {
        name: 'name',
        type: 'input',
        message: 'Please input your full name (for License purposes):'
    },
    {
        name: 'gitHub',
        type: 'input',
        message: 'Please input your gitHub User Name:',
    },
    {
        name: 'email',
        type: 'input',
        message: 'Please input your email address:',
    },
]

// Function to write README file

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err) :
        console.log(`Your README file has been generated! Find it under the 'distro' directory in this terminal's location.`)
    })
}

// Function to initialize app

function init() {
    inquirer.prompt(questions)
    .then((data) => {
        console.log(data)
        console.log('Generating README file...')
        writeToFile('./distro/README.md', generateMarkdown(data))
    })
}

// Function call to initialize app

init()
