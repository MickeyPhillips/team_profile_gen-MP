const inquirer = require('inquirer');
const generatePage = require('./src/page-template.js');
const Employee = require('./lib/Employee');

// new Prompt()
//     .managerPrompt()
//     .then(nonManagerPrompt)
//     .then(employeeData => {
//         return generatePage(employeeData);
//     })
//     .then(pageHTML => {
//         return writeToFile(pageHTML);
//     })
//     .then(writeResponse => {
//         console.log(writeResponse);
//         return copyToFile();
//     })
//     .then(copyResponse => {
//         console.log(copyResponse);
//     })
//     .catch(err => {
//         console.log(err)
//     });
