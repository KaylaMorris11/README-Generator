// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const util = require("util");
const fs = require("fs");

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
        name: "installation"
    },
    { 
        type: "input",
        message: "Instructions for use:",
        name: "instructions"
    },
]
    
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
fs.writeFile(fileName, data, function(err){
 console.log(fileName)
 console.log(data)
 if(err){
     return console.log(err)
 } else {
     console.log("Success")
 };


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(data) {
            writeToFile("output.md", generateMarkdown(data));
            console.log(data)
        })
    //USE inquierer.prompt() to prompt the user for answers
    //THEN we'll use the users `answers` `to generateMarkdown(answers)` and store the results in `markdownText` variable
    //USE the generated markdown text to `writeToFile("output.md")`, markdownText)`
};

// Function call to initialize app
init();
