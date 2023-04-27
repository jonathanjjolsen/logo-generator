//Imports neccessary for program use.
const inquirer = require('inquirer');

const questions = [
    {
        name: 'charachters',
        message: 'Enter 3 charachters to be used for the logo.',
        type: 'input',
        validate: async (input) => {
            if (input.length < 1 || input.length > 3) {
                console.log('\nInvalid number of characters. User must input at least 1 and no more than 3.')
            }
            else{
                return true;
            }
        }
    },
    {
        name: 'textColor',
        message: 'Please enter a color keyword or hexadecimal number for your text color.',
        type: 'input',
    },
    {
        name: 'shape',
        message: 'Please choose a shape for the logo.',
        type: 'list',
        choices:['circle', 'triangle', 'square'],
        filter(value) {
            return value;
        }
    },
    {
        name: 'shapeColor',
        message: 'Please enter a color keyword or hexadecimal number for your text color.',
        type: 'input',
    }
]

function init () {
    inquirer.prompt(questions)
    .then((data) => {
        console.log(data);
    })
}

init();