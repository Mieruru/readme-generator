// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const mdGen = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
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
        name: 'license',
        type: 'list',
        choices: [
            'GNU GPLv3',
            'Mozilla Public License',
            'Apache License 2.0',
            'MIT License',
            'Boost Software License 1.0',
        ],
        message: 'Please select a License for your project:',
    },
    {
        name: 'userName',
        type: 'input',
        message: 'Please input your gitHub User Name:',
    },
    {
        name: 'email',
        type: 'input',
        message: 'Please input your email address:',
    },
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
