// function to generate markdown for README
function generateMarkdown(data) {
  const text = 
  `# ${data.title}

  ![badge](https://img.shields.io/badge/license-${data.license}-blue)

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribution guidelines](#contribution-guidelines)
  - [Instructions](#test-instructions)
  - [Questions](#questions)

  ## <a id="description"></a> Description
  ${data.description}
    
  ## <a id="installation"></a> Installation
  ${data.install}

  ## <a id="usage"></a> Usage
  ${data.usage}

  ## <a id="license"></a> License
  This application is covered under the ${data.license} license.

  ## <a id="contribution-guidelines"></a> Contribution guidelines
  ${data.contrib}

  ## <a id="test-instructions"></a> Test instructions
  ${data.test}

  ## <a id="questions"></a> Questions
  GitHub: My username is ${data.github} (https://github.com/${data.github})

  Send any questions to: ${data.email} 
  `;

  return text
}

module.exports = generateMarkdown;
