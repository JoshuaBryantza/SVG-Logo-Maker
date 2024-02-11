var inquirer = require('inquirer');
const fs = require('fs');

const questions = [
  {
    type: 'input',
    message: 'Text',
    name: 'imageText',
  },
  {
    type: 'input',
    message: 'Text Color',
    name: 'textColor',
  },
  {
    type: 'input',
    message: 'Shape color',
    name: 'shapeColor',
  }
];


function init() {
  inquirer
    .prompt(questions)
    .then((answers) => createImage(answers))
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
}

init();

function createImage(data) {
  const svgXml = `
 <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <circle cx="150" cy="100" r="80" fill="${data.shapeColor}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.imageText}</text>

</svg>
  `;
  fs.writeFile("logo.svg", svgXml, (err) =>
    err ? console.error(err) : console.log('Success!')
  );
}