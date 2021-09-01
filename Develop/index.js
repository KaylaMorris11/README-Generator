// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [
        {
            type: "input",
            message: "What is the title of your project?",
            name: "title"
        },
        {
            type: "input",
            message: "Give your project a description:",
            name: "description"
        },
        {
            type: "input",
            message: "How would we install this project?",
            name: "install"
        },
        {
            type: "input",
            message: "Instructions for use:",
            name: "usage"
        },
        {
            type: "list",
            message: "Which license do you want to use for this project?",
            name: "license",
            choices: ["MIT", "Apache 2.0", "ISC", "None"]
        },
        {
            type:"input",
            message:"Enter your GitHub username:",
            name:"username"
        },
        {
            type: "input",
            message:"Enter your email address:",
            name: "email"
        },
    ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`./output/${fileName}`, data, function(err){
        console.log(fileName);
        console.log(data);
     if(err){
         return console.log(err)
     } else {
         console.log("Success!")
     }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(function(data) {
            writeToFile("output.md", generateMarkdown(data))
            console.log(data)
        })
    };

    init();