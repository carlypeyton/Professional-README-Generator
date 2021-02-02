//Include modules
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);

//Prompt user with questions for README and return responses
function promptUser() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter project title: ',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Describe the project: ',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'If applicable, provide any installation instructions: ',
        },
        {
            type: 'input',
            name: 'usage',
            message: "Describe the use of this application: ",
        },
        {
            type: "input",
            name: "contribution",
            message: "Provide contribution guidelines: ",
        },
        {
            type: "input",
            name: "tests",
            message: "If applicable, provide any test instructions: ",
        },
        {
            type: "list",
            name: "license",
            message: "Choose the appropriate license for this project: ",
            //Licenses from https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/licensing-a-repository
            choices: [
                "Academic",
                "Apache",
                "Artistic",
                "BSD",
                "Creative Commons",
                "Do What The F*ck You Want To",
                "Educational Community",
                "Eclipse",
                "European Union",
                "GNU",
                "ISC",
                "LaTeX Projct",
                "Microsoft",
                "MIT",
                "Mozilla",
                "Mozilla",
                "Open Software",
                "PostgreSQL",
                "SIL Open Font",
                "University of Illinois/NCSA",
                "The Unlicense",
                "zLib",
            ]
        },
        {
            type: "input",
            name: "username",
            message: "Enter GitHub username: ",
        },
        {
            type: "input",
            name: "email",
            message: "Enter email address: ",
        }
    ]);
}
