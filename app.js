var inquirer = require('inquirer');
const fs = require('fs');

const questions = [
  {
    type: 'list',
    message: 'Pick your shape',
    choices: ['Circle', 'Triangle', 'Square'],
    name: 'shapePick'
  },
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
    .then((blah) => createImage(blah))
    .catch((error) => {
      if (error.isTtyError) {
       
      } else {
       
      }
    });
}

init();

function createImage(data) {
  var svgXml = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  `;
  switch (data.shapePick) {
    case "Circle":
      svgXml += `<circle cx="150" cy="100" r="80" fill="${data.shapeColor}" />`;
      break;
    case "Triangle":
      svgXml += `<polygon points="150, 18 244, 182 56, 182" fill="${data.shapeColor}" />`;
      break;
    case "Square":
      svgXml += `<rect x="70" y="20" width="160" height="160" stroke="black" fill="${data.shapeColor}" stroke-width="5"/>`;
      break;
  }

  svgXml += `  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.imageText}</text>

  </svg>`;

  fs.writeFile("logo.svg", svgXml, (err) =>
    err ? console.error(err) : console.log('Generated logo.svg!')
  );
}

