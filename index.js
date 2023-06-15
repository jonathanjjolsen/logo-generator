//Imports neccessary for program use.
const inquirer = require('inquirer');
const {Circle,Triangle,Square} = require('./lib/shapes.js')
const fs = require('fs');

//Array of questions to ask the user
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

//Logo class to create the logo based on user inputs
class Logo{
    constructor(){
        this.textElement = '';
        this.shapeElement = '';
    }
    setText(text, color) {
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShape(shape) {
        this.shapeElement = shape.render()
    }
    render(){
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="400" height="300">\n${this.shapeElement}\n${this.textElement}\n</svg>`
    }
}

//Function to prompt the user with questions for logo generation
async function init () {
    let svgFile = "logo.svg";

    //Collects user responses for further use
    const response = await inquirer.prompt(questions);
    console.log(response);

    userChars = response.charachters;
    userCharsColor = response.textColor;
    userShape = response.shape;
    userShapeColor = response.shapeColor;

    console.log(userChars, userCharsColor, userShapeColor);
    if(userShape === 'circle') {
        userShape = new Circle();
    }
    else if(userShape === 'triangle') {
        userShape = new Triangle();
    }
    else if(userShape === 'square') {
        userShape = new Square();
    }
    userShape.setColor(userShapeColor);

    let logo = new Logo();
    logo.setText(userChars, userCharsColor);
    logo.setShape(userShape);
    logoComplete = logo.render();

    writeFile(svgFile,logoComplete);

}

//Function to write the newly created svg logo to the file system
function writeFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if(err) {
            console.log('Could not genereate Logo.')
        }
        console.log('Logo has been generated. See createdImages folder.')
    })
}


init();