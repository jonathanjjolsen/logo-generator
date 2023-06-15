//Class shape to set the fill color of the shape
class Shape{
    constructor(){
        this.color = '';
    }
    setColor(color) {
        this.color=(color);
    }
}

//Circle class to create the shape of the logo background
class Circle extends Shape{
    render(){
        return `<circle cx="50%" cy ="50%" r="40%" height="100%" width="100%" fill="${this.color}"></circle>`
    }
}

//Exports the shape to the index.js for use
module.exports = {Circle}