const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license',
        choices: ['MIT', 'Apache', 'Creative Commons', 'Mozilla'],
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your repo?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is your description?',
    },
    {
        type: 'input',
        name: 'install',
        message: 'How do you install your code?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information?',
    },
    {
        type: 'input',
        name: 'contrib',
        message: 'What are the contribution guidelines?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What are the test instructions?',
    },
];

const promptUser = () => inquirer.prompt(questions);

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Success!'));
}

// function to initialize program
function init() {
    promptUser()
        .then((answers) => writeToFile('./gen/README.md', generateMarkdown(answers)))
        .catch((err) => console.error(err));
}

// function call to initialize program
init();
