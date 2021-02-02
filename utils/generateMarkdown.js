//Function to generate README content based on user responses
function generateREADME(answers) {
  return `# ${answers.title}
  
  ### Table of Contents
  1. [Project Description](#description)
  2. [Installation Instructions](#installation)
  3. [Usage Information](#usage)
  4. [Contribution Guidelines](#contribution)
  5. [Test Instructions](#tests)
  6. [License](#license)
  7. [Questions](#questions)

  ## Project Description
  * ${answers.description}
  
  ## Installation Instructions
  * ${answers.installation}

  ## Usage Information
  * ${answers.usage}

  ## Contribution Guidelines
  * ${answers.contribution}

  ## Test Instructions
  * ${answers.tests}

  ## License
  * Licensed under ${answers.license}
  
  ## Questions
  * For additional help or questions, please contact ${answers.email}
  * Follow me on Github at [${answers.username}](http://github.com/${answers.username})`;
}

module.exports = generateREADME;



