//Include modules
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);
const generateREADME = require("./utils/generateMarkdown");


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
            type: 'input',
            name: 'contribution',
            message: 'Provide contribution guidelines: ',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'If applicable, provide any test instructions: ',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose the appropriate license for this project: ',
            //Licenses from https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/licensing-a-repository
            choices: [
                'Academic',
                'Apache',
                'Artistic',
                'BSD',
                'Creative Commons',
                'Do What The F*ck You Want To',
                'Educational Community',
                'Eclipse',
                'European Union',
                'GNU',
                'ISC',
                'LaTeX Projct',
                'Microsoft',
                'MIT',
                'Mozilla',
                'Open Software',
                'PostgreSQL',
                'SIL Open Font',
                'University of Illinois/NCSA',
                'The Unlicense',
                'zLib',
            ]
        },
        {
            type: 'input',
            name: 'username',
            message: 'Enter GitHub username: ',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter email address: ',
        }
    ]);
}

//Async/await - Async function always returns promise
const init = async () => {
    //Try/catch
    try {
        //Await - wait until promise settles and returns result from promptUser function
        const answers = await promptUser();
        const readme = generateREADME(answers);
        await writeFileAsync('README.md', readme);
        //Log message to console to let user know README file has been successfully created
        console.log('README.md has been created!');
    } catch (err) {
       //Handle all errors and og errors to console
        console.log(err);
    }
};

///////////////////////RUN TIME//////////////////////////

init();

